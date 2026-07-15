import { getProperties, type PropertyCategory, type SortOption }  from "@/lib/properties";
import PropertyList from "@/app/property/PropertyList";
import SearchBar from "@/app/property/SearchBar";
import SortBar from "@/app/property/SortBar";
import Pagination from "@/app/property/Pagination";
import { List, LayoutGrid, MapPin } from "lucide-react";


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
    first(resolvedParams.type) === "rent" ? "rent" : "sale";
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
  
    const activeTab = first(resolvedParams.tab) === "shortlist" 
  ? "shortlist" 
  : "results";

const activeView =
  first(resolvedParams.view) === "grid" ||
  first(resolvedParams.view) === "map"
    ? (first(resolvedParams.view) as "grid" | "map")
    : "list";

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
    <>
        
      <div className="mx-auto max-w-5xl px-4">
          <ResultsTabs
        activeTab={activeTab}
        activeView={activeView}
      />
    

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

      </>
  );
}

function ResultsTabs({
  activeTab,
  activeView,
}: {
  activeTab: "results" | "shortlist";
  activeView: "list" | "grid" | "map";
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white">
      <div className="flex">
        <a
          href="/property-search"
          className={`px-6 py-4 text-sm font-semibold tracking-wide uppercase ${
            activeTab === "results"
              ? "border-b-2 border-gray-900 text-gray-900 bg-white"
              : "text-gray-500 bg-gray-100 hover:text-gray-700"
          }`}
        >
          Search Results
        </a>

        <a
          href="/property-search/shortlist"
          className={`px-6 py-4 text-sm font-semibold tracking-wide uppercase ${
            activeTab === "shortlist"
              ? "border-b-2 border-gray-900 text-gray-900 bg-white"
              : "text-gray-500 bg-gray-100 hover:text-gray-700"
          }`}
        >
          Shortlist
        </a>
      </div>

      <div className="flex items-center gap-8 pr-6 text-sm font-semibold tracking-wide uppercase">
        {(["list", "grid", "map"] as const).map((view) => (
          <a
            key={view}
            href={`/property-search?view=${view}`}
            className={`flex items-center gap-2 ${
              activeView === view
                ? "text-amber-700"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {view === "list" && <List className="h-4 w-4" />}
            {view === "grid" && <LayoutGrid className="h-4 w-4" />}
            {view === "map" && <MapPin className="h-4 w-4" />}
            {view === "list" && "List View"}
            {view === "grid" && "Grid View"}
            {view === "map" && "Map View"}
          </a>
        ))}
      </div>
    </div>
  );
}