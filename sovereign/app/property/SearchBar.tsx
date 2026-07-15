import { X } from "lucide-react";

export default function SearchBar({
  category,
  addressKeyword,
  minPrice,
  maxPrice,
  minBeds,
  maxBeds,
  propertyType,
}: {
  category: "sale" | "rent";
  addressKeyword?: string;
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  maxBeds?: number;
  propertyType?: string;
}) {
  return (
    <div className="bg-[#efece4] px-10 pb-8 pt-6">
      {/* Close search */}
      <div className="flex justify-end">
        <a
          href="/property-search"
          className="flex items-center gap-1.5 text-sm font-semibold tracking-wide text-amber-700 uppercase hover:text-amber-800"
        >
          <X className="h-4 w-4" />
          Close Search
        </a>
      </div>

      <form method="get" action="/property-search" className="mt-6">
        <input type="hidden" name="type" value={category} />

        <div className="grid grid-cols-1 gap-x-16 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Instruction Type */}
          <Field label="Instruction Type">
            <select name="type" defaultValue={category}>
              <option value="sale">For Sale</option>
              <option value="rent">To Rent</option>
            </select>
          </Field>

          {/* Min Price */}
          <Field label="Min Price">
            <select name="minprice" defaultValue={minPrice ?? ""}>
              <option value="">No Minimum</option>
              {[50000, 100000, 150000, 200000, 300000, 500000, 750000, 1000000].map((v) => (
                <option key={v} value={v}>
                  £{v.toLocaleString()}
                </option>
              ))}
            </select>
          </Field>

          {/* Min Beds */}
          <Field label="Min Beds">
            <select name="minbeds" defaultValue={minBeds ?? ""}>
              <option value="">Please Select</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </Field>

          {/* Property Type */}
          <Field label="Property Type">
            <select name="propertytype" defaultValue={propertyType ?? ""}>
              <option value="">Any type</option>
              <option value="house">House</option>
              <option value="flat">Flat / Apartment</option>
              <option value="bungalow">Bungalow</option>
              <option value="maisonette">Maisonette</option>
            </select>
          </Field>

          {/* Location */}
          <Field label="Location">
            <input
              type="text"
              name="address_keyword"
              defaultValue={addressKeyword}
              placeholder="Location"
            />
          </Field>

          {/* Max Price */}
          <Field label="Max Price">
            <select name="maxprice" defaultValue={maxPrice ?? ""}>
              <option value="">No Maximum</option>
              {[100000, 200000, 300000, 500000, 750000, 1000000, 1500000, 2000000].map((v) => (
                <option key={v} value={v}>
                  £{v.toLocaleString()}
                </option>
              ))}
            </select>
          </Field>

          {/* Maximum Beds */}
          <Field label="Maximum Beds">
            <select name="maxbeds" defaultValue={maxBeds ?? ""}>
              <option value="">Please Select</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </Field>

          {/* Search button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-amber-400 py-3.5 text-sm font-semibold tracking-wide text-white uppercase hover:bg-amber-500"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs font-bold tracking-wide text-gray-800 uppercase">
        {label}
      </label>
      <div className="mt-2">
        {/* Clone-free: style the single child (input or select) directly */}
        <div className="[&>select]:w-full [&>select]:appearance-none [&>select]:border-0 [&>select]:bg-transparent [&>select]:p-0 [&>select]:text-sm [&>select]:text-gray-500 [&>select]:focus:outline-none [&>input]:w-full [&>input]:border-0 [&>input]:bg-transparent [&>input]:p-0 [&>input]:text-sm [&>input]:text-gray-500 [&>input]:placeholder-gray-400 [&>input]:focus:outline-none">
          {children}
        </div>
      </div>
    </div>
  );
}