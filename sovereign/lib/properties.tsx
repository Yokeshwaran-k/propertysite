import db from "@/lib/db";
import { RowDataPacket } from "mysql2";

// term_id 9 = "For Sale" category, term_id 10 = "To Rent" category
// (confirmed from wp_terms / wp_term_taxonomy)
const CATEGORY_IDS = {
  sale: 9,
  rent: 10,
} as const;

export type PropertyCategory = keyof typeof CATEGORY_IDS;

export type SortOption =
  | "newest"
  | "price_asc"
  | "price_desc"
  | "bedrooms_desc";

export interface PropertyFilters {
  category: PropertyCategory;
  addressKeyword?: string;
  maxPrice?: number;
  bedrooms?: number;
  showStc?: boolean;
  showSold?: boolean;
  sort?: SortOption;
  page?: number;
  perPage?: number;
}

export interface PropertySummary {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  price: number | null;
  priceDisplay: string;
  bedrooms: number | null;
  bathrooms: number | null;
  receptionrooms: number | null;
  propertyType: string | null;
  statusKey: string | null; // raw cp_status, e.g. for_sale / sold / stc
  statusLabel: string | null; // cp_xstatus, pre-formatted e.g. "For Sale"
  street: string | null;
  city: string | null;
  displayAddress: string | null;
  imageUrl: string | null;
}

export interface PropertySearchResult {
  properties: PropertySummary[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

// Extra fields only needed on the single-property detail page.
export interface PropertyDetail extends PropertySummary {
  description: string;
  lat: number | null;
  lng: number | null;
  epcUrl: string | null;
  floorPlanUrl: string | null;
  bullets: string[];
  images: string[];
}

function stripPriceEntities(value: string | null): number | null {
  if (!value) return null;
  const cleaned = value
    .replace(/&pound;/gi, "")
    .replace(/£/g, "")
    .replace(/,/g, "")
    .trim();
  const n = parseInt(cleaned, 10);
  return Number.isFinite(n) ? n : null;
}

function formatGBP(value: number | null): string {
  if (value === null) return "POA";
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

function cleanHtml(html: string | null): string {
  if (!html) return "";
  // The imported WP content has a lot of empty <h3></h3><p></p> noise.
  return html
    .replace(/<(h1|h2|h3|h4|p)>\s*<\/\1>/gi, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

/**
 * NOTE on cp_status values:
 * We only confirmed `for_sale` as an example value. "Sold" / "STC" (sold
 * subject to contract) / "Let Agreed" listings likely use different strings
 * (e.g. "sold", "stc", "under_offer", "let_agreed"). The LIKE matching below
 * is deliberately loose to catch common variants. Run this to confirm the
 * exact values in your data and tighten the WHERE clause if needed:
 *
 *   SELECT DISTINCT meta_value FROM wp_postmeta WHERE meta_key = 'cp_status';
 */
export async function getProperties(
  filters: PropertyFilters
): Promise<PropertySearchResult> {
  const page = filters.page && filters.page > 0 ? filters.page : 1;
  const perPage = filters.perPage && filters.perPage > 0 ? filters.perPage : 20;
  const offset = (page - 1) * perPage;
  const categoryId = CATEGORY_IDS[filters.category];

  const whereClauses: string[] = [
    "p.post_status = 'publish'",
    "p.post_type = 'post'",
    "tt.taxonomy = 'category'",
    "tt.term_id = ?",
  ];
  const params: (string | number)[] = [categoryId];

  if (filters.addressKeyword) {
    whereClauses.push(
      "(pm_address.meta_value LIKE ? OR pm_street.meta_value LIKE ? OR pm_city.meta_value LIKE ?)"
    );
    const like = `%${filters.addressKeyword}%`;
    params.push(like, like, like);
  }

  if (filters.maxPrice) {
    whereClauses.push(
      "CAST(REPLACE(REPLACE(REPLACE(pm_price.meta_value, '&pound;', ''), ',', ''), '£', '') AS UNSIGNED) <= ?"
    );
    params.push(filters.maxPrice);
  }

  if (filters.bedrooms) {
    whereClauses.push("CAST(pm_beds.meta_value AS UNSIGNED) >= ?");
    params.push(filters.bedrooms);
  }

  // Default behaviour: exclude sold / STC unless explicitly requested,
  // mirroring the showstc / showsold query params on the live site.
  const statusExclusions: string[] = [];
  if (!filters.showSold) {
    statusExclusions.push("pm_status.meta_value NOT LIKE '%sold%'");
  }
  if (!filters.showStc) {
    statusExclusions.push(
      "pm_status.meta_value NOT LIKE '%stc%' AND pm_status.meta_value NOT LIKE '%under_offer%'"
    );
  }
  whereClauses.push(...statusExclusions);

  const whereSql = whereClauses.join(" AND ");

  let orderSql = "p.post_date DESC";
  switch (filters.sort) {
    case "price_asc":
      orderSql =
        "CAST(REPLACE(REPLACE(REPLACE(pm_price.meta_value, '&pound;', ''), ',', ''), '£', '') AS UNSIGNED) ASC";
      break;
    case "price_desc":
      orderSql =
        "CAST(REPLACE(REPLACE(REPLACE(pm_price.meta_value, '&pound;', ''), ',', ''), '£', '') AS UNSIGNED) DESC";
      break;
    case "bedrooms_desc":
      orderSql = "CAST(pm_beds.meta_value AS UNSIGNED) DESC";
      break;
    case "newest":
    default:
      orderSql = "p.post_date DESC";
  }

  const baseJoins = `
    FROM wp_posts p
    JOIN wp_term_relationships tr ON tr.object_id = p.ID
    JOIN wp_term_taxonomy tt ON tt.term_taxonomy_id = tr.term_taxonomy_id
    LEFT JOIN wp_postmeta pm_price   ON pm_price.post_id = p.ID   AND pm_price.meta_key = 'cp_price'
    LEFT JOIN wp_postmeta pm_beds    ON pm_beds.post_id = p.ID    AND pm_beds.meta_key = 'cp_number_of_bedrooms'
    LEFT JOIN wp_postmeta pm_baths   ON pm_baths.post_id = p.ID   AND pm_baths.meta_key = 'cp_bathrooms'
    LEFT JOIN wp_postmeta pm_reception ON pm_reception.post_id = p.ID AND pm_reception.meta_key = 'cp_number_of_receptionrooms'
    LEFT JOIN wp_postmeta pm_status  ON pm_status.post_id = p.ID  AND pm_status.meta_key = 'cp_status'
    LEFT JOIN wp_postmeta pm_xstatus ON pm_xstatus.post_id = p.ID AND pm_xstatus.meta_key = 'cp_xstatus'
    LEFT JOIN wp_postmeta pm_type    ON pm_type.post_id = p.ID    AND pm_type.meta_key = 'cp_type'
    LEFT JOIN wp_postmeta pm_street  ON pm_street.post_id = p.ID  AND pm_street.meta_key = 'cp_street'
    LEFT JOIN wp_postmeta pm_city    ON pm_city.post_id = p.ID    AND pm_city.meta_key = 'cp_city'
    LEFT JOIN wp_postmeta pm_address ON pm_address.post_id = p.ID AND pm_address.meta_key = 'cp_displayable_address'
    LEFT JOIN wp_postmeta pm_thumb   ON pm_thumb.post_id = p.ID   AND pm_thumb.meta_key = '_thumbnail_id'
    LEFT JOIN wp_posts img ON img.ID = CAST(pm_thumb.meta_value AS UNSIGNED)
  `;

  const countSql = `
    SELECT COUNT(DISTINCT p.ID) AS total
    ${baseJoins}
    WHERE ${whereSql}
  `;

  const dataSql = `
    SELECT DISTINCT
      p.ID AS id,
      p.post_name AS slug,
      p.post_title AS title,
      p.post_excerpt AS excerpt,
      pm_price.meta_value AS priceRaw,
      pm_beds.meta_value AS bedrooms,
      pm_reception.meta_value AS receptionrooms,
      pm_baths.meta_value AS bathrooms,
      pm_type.meta_value AS propertyType,
      pm_status.meta_value AS statusKey,
      pm_xstatus.meta_value AS statusLabel,
      pm_street.meta_value AS street,
      pm_city.meta_value AS city,
      pm_address.meta_value AS displayAddress,
      img.guid AS imageUrl,
      p.post_date AS postDate
    ${baseJoins}
    WHERE ${whereSql}
    ORDER BY ${orderSql}
    LIMIT ? OFFSET ?
  `;

  const [countRows] = await db.query<RowDataPacket[]>(countSql, params);
  const total = (countRows[0]?.total as number) ?? 0;

  const [rows] = await db.query<RowDataPacket[]>(dataSql, [
    ...params,
    perPage,
    offset,
  ]);

  const properties: PropertySummary[] = rows.map((r) => {
    const price = stripPriceEntities(r.priceRaw as string | null);
    return {
      id: r.id,
      slug: r.slug,
      title: r.title,
      excerpt: (r.excerpt as string) || "",
      price,
      priceDisplay: formatGBP(price),
      bedrooms: r.bedrooms ? parseInt(r.bedrooms, 10) : null,
      receptionrooms: r.receptionrooms ? parseInt(r.receptionrooms, 10) : null,
      bathrooms: r.bathrooms ? parseInt(r.bathrooms, 10) : null,
      propertyType: r.propertyType ?? null,
      statusKey: r.statusKey ?? null,
      statusLabel: r.statusLabel ?? null,
      street: r.street ?? null,
      city: r.city ?? null,
      displayAddress: r.displayAddress ?? null,
      imageUrl: r.imageUrl ?? null,
    };
  });

  return {
    properties,
    total,
    page,
    perPage,
    totalPages: Math.max(1, Math.ceil(total / perPage)),
  };
}

/**
 * Fetches a single property by its post_name (slug) for the detail page.
 * Also pulls cp_bullets (multi-row in wp_postmeta, so it needs its own
 * query) and the gallery images (attachments with post_parent = this post).
 */
export async function getPropertyBySlug(
  slug: string
): Promise<PropertyDetail | null> {
  const sql = `
    SELECT
      p.ID AS id,
      p.post_name AS slug,
      p.post_title AS title,
      p.post_excerpt AS excerpt,
      p.post_content AS content,
      pm_price.meta_value AS priceRaw,
      pm_beds.meta_value AS bedrooms,
      pm_baths.meta_value AS bathrooms,
      pm_reception.meta_value AS receptionrooms,
      pm_type.meta_value AS propertyType,
      pm_status.meta_value AS statusKey,
      pm_xstatus.meta_value AS statusLabel,
      pm_street.meta_value AS street,
      pm_city.meta_value AS city,
      pm_address.meta_value AS displayAddress,
      pm_lat.meta_value AS lat,
      pm_lng.meta_value AS lng,
      pm_epc.meta_value AS epcUrl,
      pm_floorplan.meta_value AS floorPlanUrl,
      img.guid AS imageUrl
    FROM wp_posts p
    LEFT JOIN wp_postmeta pm_price     ON pm_price.post_id = p.ID     AND pm_price.meta_key = 'cp_price'
    LEFT JOIN wp_postmeta pm_beds      ON pm_beds.post_id = p.ID      AND pm_beds.meta_key = 'cp_number_of_bedrooms'
    LEFT JOIN wp_postmeta pm_baths     ON pm_baths.post_id = p.ID     AND pm_baths.meta_key = 'cp_bathrooms'
    LEFT JOIN wp_postmeta pm_reception ON pm_reception.post_id = p.ID AND pm_reception.meta_key = 'cp_number_of_receptionrooms'
    LEFT JOIN wp_postmeta pm_status    ON pm_status.post_id = p.ID    AND pm_status.meta_key = 'cp_status'
    LEFT JOIN wp_postmeta pm_xstatus   ON pm_xstatus.post_id = p.ID   AND pm_xstatus.meta_key = 'cp_xstatus'
    LEFT JOIN wp_postmeta pm_type      ON pm_type.post_id = p.ID      AND pm_type.meta_key = 'cp_type'
    LEFT JOIN wp_postmeta pm_street    ON pm_street.post_id = p.ID    AND pm_street.meta_key = 'cp_street'
    LEFT JOIN wp_postmeta pm_city      ON pm_city.post_id = p.ID      AND pm_city.meta_key = 'cp_city'
    LEFT JOIN wp_postmeta pm_address   ON pm_address.post_id = p.ID   AND pm_address.meta_key = 'cp_displayable_address'
    LEFT JOIN wp_postmeta pm_lat       ON pm_lat.post_id = p.ID       AND pm_lat.meta_key = 'cp_lat'
    LEFT JOIN wp_postmeta pm_lng       ON pm_lng.post_id = p.ID       AND pm_lng.meta_key = 'cp_lng'
    LEFT JOIN wp_postmeta pm_epc       ON pm_epc.post_id = p.ID       AND pm_epc.meta_key = 'cp_epc'
    LEFT JOIN wp_postmeta pm_floorplan ON pm_floorplan.post_id = p.ID AND pm_floorplan.meta_key = 'cp_floor_plan_url'
    LEFT JOIN wp_postmeta pm_thumb     ON pm_thumb.post_id = p.ID     AND pm_thumb.meta_key = '_thumbnail_id'
    LEFT JOIN wp_posts img ON img.ID = CAST(pm_thumb.meta_value AS UNSIGNED)
    WHERE p.post_name = ? AND p.post_status = 'publish' AND p.post_type = 'post'
    LIMIT 1
  `;

  const [rows] = await db.query<RowDataPacket[]>(sql, [slug]);
  const r = rows[0];
  if (!r) return null;

  const [bulletRows] = await db.query<RowDataPacket[]>(
    `SELECT meta_value FROM wp_postmeta WHERE post_id = ? AND meta_key = 'cp_bullets'`,
    [r.id]
  );

  const [imageRows] = await db.query<RowDataPacket[]>(
    `SELECT guid FROM wp_posts
     WHERE post_parent = ? AND post_type = 'attachment' AND post_mime_type LIKE 'image%'
     ORDER BY menu_order, ID`,
    [r.id]
  );

  const price = stripPriceEntities(r.priceRaw as string | null);
  const images = imageRows.map((row) => row.guid as string);

  return {
    id: r.id,
    slug: r.slug,
    title: r.title,
    excerpt: (r.excerpt as string) || "",
    description: cleanHtml(r.content as string | null),
    price,
    priceDisplay: formatGBP(price),
    bedrooms: r.bedrooms ? parseInt(r.bedrooms, 10) : null,
    bathrooms: r.bathrooms ? parseInt(r.bathrooms, 10) : null,
    receptionrooms: r.receptionrooms ? parseInt(r.receptionrooms, 10) : null,
    propertyType: r.propertyType ?? null,
    statusKey: r.statusKey ?? null,
    statusLabel: r.statusLabel ?? null,
    street: r.street ?? null,
    city: r.city ?? null,
    displayAddress: r.displayAddress ?? null,
    lat: r.lat ? parseFloat(r.lat) : null,
    lng: r.lng ? parseFloat(r.lng) : null,
    epcUrl: r.epcUrl || null,
    floorPlanUrl: r.floorPlanUrl || null,
    bullets: bulletRows.map((b) => b.meta_value as string).filter(Boolean),
    images: images.length > 0 ? images : r.imageUrl ? [r.imageUrl] : [],
    imageUrl: r.imageUrl ?? null,
  };
}