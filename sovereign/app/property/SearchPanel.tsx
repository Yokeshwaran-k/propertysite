"use client";

import Link from "next/link";
import { useState } from "react";
import { List, LayoutGrid, MapPin, Search, X } from "lucide-react";

import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import type { PropertyCategory, SortOption } from "@/lib/properties";

interface SearchPanelProps {
  category: PropertyCategory;
  addressKeyword?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
  propertyType?: string;
  showStc?: boolean;
  showSold?: boolean;
  sort: SortOption;
  total: number;
  viewMode: "list" | "grid" | "map";
}

export default function SearchPanel({
  category,
  addressKeyword,
  minPrice,
  maxPrice,
  minBedrooms,
  maxBedrooms,
  propertyType,
  showStc,
  showSold,
  sort,
  total,
  viewMode,
}: SearchPanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      {open && (
        <div className="relative mb-0 bg-[#efece4] h-64 px-8 pb-8 pt-6">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-8 top-6 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#c69627] hover:text-[#c69627]"
          >
            <X size={14} />
           CLOSE SEARCH
          </button>

          {/* Update these props if your SearchBar interface changes */}
          <SearchBar
            category={category}
            addressKeyword={addressKeyword}
            maxPrice={maxPrice}
                      minBedrooms={minBedrooms}
                      maxBedrooms={maxBedrooms}
            showStc={showStc}
            showSold={showSold}
          />
        </div>
      )}

      <div
        className={`flex items-center justify-between border-b border-gray-200 px-1 ${
          open ? "bg-[#efece4] pt-4" : ""
        }`}
      >
        <div className="flex gap-8 text-sm font-semibold uppercase tracking-wide">
          <span className="border-b-2 border-gray-900 pb-3 text-gray-900">
            Search Results
          </span>

          <Link
            href="/shortlist"
            className="pb-3 text-gray-500 hover:text-gray-700"
          >
            Shortlist
          </Link>
        </div>

        <div className="flex items-center gap-6 pb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          <ViewLink
            mode="list"
            current={viewMode}
            icon={<List size={14} />}
            label="List View"
          />

          <ViewLink
            mode="grid"
            current={viewMode}
            icon={<LayoutGrid size={14} />}
            label="Grid View"
          />

          <ViewLink
            mode="map"
            current={viewMode}
            icon={<MapPin size={14} />}
            label="Map View"
          />
        </div>
      </div>

      <div className="flex items-center justify-between py-4">
        <p className="text-sm font-semibold text-gray-900">
          {total} Properties
        </p>

        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wide text-[#c69627]">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-1 hover:text-[#c69627]"
          >
            <Search size={14} />
            {open ? "CLOSE SEARCH" : "UPDATE SEARCH"}
          </button>

          <SortBar sort={sort} />
        </div>
      </div>
    </div>
  );
}

interface ViewLinkProps {
  mode: "list" | "grid" | "map";
  current: "list" | "grid" | "map";
  icon: React.ReactNode;
  label: string;
}

function ViewLink({
  mode,
  current,
  icon,
  label,
}: ViewLinkProps) {
  const active = current === mode;

  return (
    <Link
      href={`?view=${mode}`}
      className={`flex items-center gap-1.5 ${
        active
          ? "text-[#c69627]"
          : "text-gray-400 hover:text-gray-600"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}