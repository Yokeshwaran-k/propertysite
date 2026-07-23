import { getProperties, type PropertyCategory, type SortOption } from "@/lib/properties";
import PropertyList from "@/app/property/PropertyList";
import SearchPanel from "@/app/property/SearchPanel";
import Pagination from "@/app/property/Pagination";

type SearchParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function PropertySearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams> | SearchParams;
}) {
  const resolvedParams = await searchParams;

  const type = first(resolvedParams.type);
  const category: PropertyCategory = type === "rent" ? "rent" : "sale";

  const addressKeyword = first(resolvedParams.address_keyword) || undefined;
  const minPrice = first(resolvedParams.minprice) ? parseInt(first(resolvedParams.minprice) as string, 10) : undefined;
  const maxPrice = first(resolvedParams.maxprice) ? parseInt(first(resolvedParams.maxprice) as string, 10) : undefined;
  const bedrooms = first(resolvedParams.bedrooms) ? parseInt(first(resolvedParams.bedrooms) as string, 10) : undefined;
  const maxBedrooms = first(resolvedParams.maxbedrooms) ? parseInt(first(resolvedParams.maxbedrooms) as string, 10) : undefined;
  const propertyType = first(resolvedParams.propertytype) || undefined;
  const showStc = first(resolvedParams.showstc) === "on";
  const showSold = first(resolvedParams.showsold) === "on";
  const sort = (first(resolvedParams.sort) as SortOption) || "newest";
  const page = first(resolvedParams.page) ? parseInt(first(resolvedParams.page) as string, 10) : 1;
  const viewMode = (first(resolvedParams.view) as "list" | "grid" | "map") || "list";

  const result = await getProperties({
    category,
    addressKeyword,
    maxPrice,
    bedrooms,
    showStc,
    showSold,
    sort,
    page,
    perPage: 20,
    // minPrice, maxBedrooms, propertyType — wire these into getProperties
    // once lib/properties supports them
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-2">
      <SearchPanel
        category={category}
        addressKeyword={addressKeyword}
        minPrice={minPrice}
        maxPrice={maxPrice}
        minBedrooms={bedrooms}
        maxBedrooms={maxBedrooms}
        propertyType={propertyType}
        showStc={showStc}
        showSold={showSold}
        sort={sort}
        total={result.total}
        viewMode={viewMode}
      />

      <PropertyList properties={result.properties} total={result.total} />

      <Pagination page={result.page} totalPages={result.totalPages} searchParams={resolvedParams} />
    </div>
  );
}