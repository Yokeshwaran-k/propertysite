export default function SearchBar({
  category,
  addressKeyword,
  minPrice,
  maxPrice,
  minBedrooms,
  maxBedrooms,
  propertyType,
}: {
  category: "sale" | "rent";
  addressKeyword?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
  propertyType?: string;
}) {
  return (
    <form method="get" action="/property-search" className="grid grid-cols-4 pt-10 gap-x-10 gap-y-6">
      <Field label="Instruction Type">
        <select name="type" defaultValue={category} className={selectClass}>
          <option value="sale">For Sale</option>
          <option value="rent">To Rent</option>
        </select>
      </Field>

      <Field label="Min Price">
        <input
          name="minprice"
          type="number"
          min={0}
          step={5000}
          defaultValue={minPrice}
          placeholder="No Minimum"
          className={inputClass}
        />
      </Field>

      <Field label="Min Beds">
        <select name="bedrooms" defaultValue={minBedrooms ?? ""} className={selectClass}>
          <option value="">Please Select</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n}+</option>
          ))}
        </select>
      </Field>

      <Field label="Property Type">
        <select name="propertytype" defaultValue={propertyType ?? ""} className={selectClass}>
          <option value="">Any type</option>
          <option value="house">House</option>
          <option value="flat">Flat</option>
          <option value="bungalow">Bungalow</option>
          <option value="land">Land</option>
          <option value="commercial">Commercial</option>
        </select>
      </Field>

      <Field label="Location">
        <input
          name="address_keyword"
          type="text"
          defaultValue={addressKeyword}
          placeholder="Location"
          className={inputClass}
        />
      </Field>

      <Field label="Max Price">
        <input
          name="maxprice"
          type="number"
          min={0}
          step={5000}
          defaultValue={maxPrice}
          placeholder="No Maximum"
          className={inputClass}
        />
      </Field>

      <Field label="Maximum Beds">
        <select name="maxbedrooms" defaultValue={maxBedrooms ?? ""} className={selectClass}>
          <option value="">Please Select</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n}+</option>
          ))}
        </select>
      </Field>

      <div className="flex items-end">
        <button
          type="submit"
          className="w-full rounded-sm bg-[#c69627] py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#c69627]"
        >
          Search
        </button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase tracking-wide text-gray-900">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-500 placeholder:text-gray-400 focus:border-amber-600 focus:outline-none";
const selectClass =
  "border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-500 focus:border-amber-600 focus:outline-none";