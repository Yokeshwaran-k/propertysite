export default function SearchBar({
  category,
  addressKeyword,
  maxPrice,
  bedrooms,
  showStc,
  showSold,
}: {
  category: "sale" | "rent";
  addressKeyword?: string;
  maxPrice?: number;
  bedrooms?: number;
  showStc?: boolean;
  showSold?: boolean;
}) {
  return (
    <form
      method="get"
      action="/property-search"
      className="flex flex-wrap items-end gap-3 rounded-sm border border-gray-200 bg-gray-50 p-4"
    >
      <input type="hidden" name="type" value={category} />

      <div className="flex flex-col">
        <label htmlFor="address_keyword" className="text-xs font-medium text-gray-600">
          Location
        </label>
        <input
          id="address_keyword"
          name="address_keyword"
          type="text"
          defaultValue={addressKeyword}
          placeholder="Street, area or postcode"
          className="mt-1 w-48 rounded-sm border border-gray-300 px-2 py-1.5 text-sm focus:border-amber-600 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="maxprice" className="text-xs font-medium text-gray-600">
          Max price
        </label>
        <input
          id="maxprice"
          name="maxprice"
          type="number"
          min={0}
          step={5000}
          defaultValue={maxPrice}
          placeholder="Any"
          className="mt-1 w-32 rounded-sm border border-gray-300 px-2 py-1.5 text-sm focus:border-amber-600 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="bedrooms" className="text-xs font-medium text-gray-600">
          Min bedrooms
        </label>
        <select
          id="bedrooms"
          name="bedrooms"
          defaultValue={bedrooms ?? ""}
          className="mt-1 w-24 rounded-sm border border-gray-300 px-2 py-1.5 text-sm focus:border-amber-600 focus:outline-none"
        >
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}+
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-4 pb-1.5">
        <label className="flex items-center gap-1.5 text-sm text-gray-700">
          <input
            type="checkbox"
            name="showstc"
            defaultChecked={showStc}
            className="h-3.5 w-3.5 accent-amber-700"
          />
          Show STC
        </label>
        <label className="flex items-center gap-1.5 text-sm text-gray-700">
          <input
            type="checkbox"
            name="showsold"
            defaultChecked={showSold}
            className="h-3.5 w-3.5 accent-amber-700"
          />
          Show Sold
        </label>
      </div>

      <button
        type="submit"
        className="ml-auto rounded-sm bg-amber-700 px-5 py-1.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-amber-800"
      >
        Update Search
      </button>
    </form>
  );
}