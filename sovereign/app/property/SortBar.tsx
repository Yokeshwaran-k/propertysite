"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SORT_OPTIONS: { value: string; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price_asc", label: "Price (low to high)" },
  { value: "price_desc", label: "Price (high to low)" },
  { value: "bedrooms_desc", label: "Most bedrooms" },
];

export default function SortBar({ sort }: { sort?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    params.set("page", "1");
    router.push(`/property-search?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <label htmlFor="sort" className="font-medium uppercase tracking-wide text-gray-500">
        Sort by
      </label>
      <select
        id="sort"
        defaultValue={sort || "newest"}
        onChange={handleChange}
        className="rounded-sm border border-gray-300 px-2 py-1 text-sm focus:border-amber-600 focus:outline-none"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}