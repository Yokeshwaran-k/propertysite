import { getProperties, type PropertyCategory, type SortOption }  from "@/lib/properties";
import PropertyList from "@/app/property/PropertyList";
import SearchBar from "@/app/property/SearchBar";
import SortBar from "@/app/property/SortBar";
import Pagination from "@/app/property/Pagination";

type SearchParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

// Works whether Next.js passes searchParams as a plain object (14) or a
// Promise (15) — awaiting a non-promise value just resolves immediately.
export default async function PropertySearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams> | SearchParams;
  }) {

  const resolvedParams = await searchParams;
  const category: PropertyCategory =
    first(resolvedParams.cat) === "9" ? "sale" : "rent";
  const addressKeyword = first(resolvedParams.address_keyword) || undefined;
  const maxPrice = first(resolvedParams.maxprice)
    ? parseInt(first(resolvedParams.maxprice) as string, 10)
    : undefined;
  const bedrooms = first(resolvedParams.bedrooms)
    ? parseInt(first(resolvedParams.bedrooms) as string, 10)
    : undefined;
  const showStc = first(resolvedParams.showstc) === "on";
  const showSold = first(resolvedParams.showsold) === "on";
  const sort = (first(resolvedParams.sort) as SortOption) || "newest";
  const page = first(resolvedParams.page)
    ? parseInt(first(resolvedParams.page) as string, 10)
    : 1;


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
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-4 flex gap-6 border-b border-gray-200 text-sm font-semibold uppercase tracking-wide">
        <a
          href="/property-search?type=sale"
          className={`border-b-2 pb-2 ${
            category === "sale"
              ? "border-amber-700 text-amber-700"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          For Sale
        </a>
        <a
          href="/property-search?type=rent"
          className={`border-b-2 pb-2 ${
            category === "rent"
              ? "border-amber-700 text-amber-700"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          To Rent
        </a>
      </div>

      <div className="mb-6">
        <SearchBar
          category={category}
          addressKeyword={addressKeyword}
          maxPrice={maxPrice}
          bedrooms={bedrooms}
          showStc={showStc}
          showSold={showSold}
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Page {result.page} of {result.totalPages}
        </p>
        <SortBar sort={sort} />
      </div>

      <PropertyList properties={result.properties} total={result.total} />

      <Pagination
        page={result.page}
        totalPages={result.totalPages}
        searchParams={resolvedParams}
      />
    </div>
  );
}