"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchHeaderProps {
  open: boolean;
  close: () => void;
}
export default function SearchHeader({
  open,
  close,
}: SearchHeaderProps) {  const router = useRouter();

const [category, setCategory] = useState("");
const [location, setLocation] = useState("");
const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const handleSearch = () => {
  const params = new URLSearchParams({
    showstc: "on",
    showsold: "on",
    cat: category,
    address_keyword: location,
    maxprice: maxPrice,
    bedrooms: bedrooms,
  });

  router.push(`/property-search?${params.toString()}`);
};
return (
  <div
    className={`fixed left-0 right-0 top-0 z-[999]
      bg-[#111714] shadow-2xl
      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${
        open
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
  >
  <div className="max-w-[1180px] mx-auto min-h-[80px] lg:min-h-[120px] px-4 py-5 lg:py-8 flex flex-wrap lg:flex-nowrap items-center justify-center gap-4">
    <div className="w-full sm:w-[150px] lg:w-[140px] border-b lg:border-b-0 lg:border-r border-white/20 lg:pr-5 pb-2 lg:pb-0">
                    <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-transparent text-white outline-none appearance-none cursor-pointer text-sm"
            >
            <option value="9" className="text-black">Buying</option>
            <option value="10" className="text-black">Renting</option>
          </select>
        </div>

        {/* Location */}
        <div className="w-full sm:w-[220px] lg:w-[220px] border-b lg:border-b-0 lg:border-r border-white/20 lg:px-5 pb-2 lg:pb-0">
          <input
  type="text"
  placeholder="Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  className="w-full bg-transparent text-white placeholder:text-white outline-none text-sm"
/>
        </div>

        {/* Max Price */}
        <div className="w-full sm:w-[170px] lg:w-[170px] border-b lg:border-b-0 lg:border-r border-white/20 lg:px-5 pb-2 lg:pb-0">
         <select
  value={maxPrice}
  onChange={(e) => setMaxPrice(e.target.value)}
  className="w-full bg-transparent text-white outline-none appearance-none cursor-pointer text-sm"
>
            <option value="" className="text-black">Max Price</option>
            <option value="100,000" className="text-black">£100,000</option>
            <option value="250,000" className="text-black">£250,000</option>
            <option value="500,000" className="text-black">£500,000</option>
            <option value="750,000" className="text-black">£750,000</option>
            <option value="1,000,000+" className="text-black">£1,000,000+</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div className="w-full sm:w-[170px] lg:w-[170px] border-b lg:border-b-0 lg:border-r border-white/20 lg:px-5 pb-2 lg:pb-0">
          <select
  value={bedrooms}
  onChange={(e) => setBedrooms(e.target.value)}
  className="w-full bg-transparent text-white outline-none appearance-none cursor-pointer text-sm"
>
            <option value="" className="text-black">Min Bedrooms</option>
            <option value ="1" className="text-black">1</option>
            <option value ="2" className="text-black">2</option>
            <option value ="3" className="text-black">3</option>
            <option value ="4" className="text-black">4</option>
            <option value ="5" className="text-black">5+</option>
          </select>
        </div>

        {/* Search */}
        <button
  onClick={handleSearch}
  className="w-full sm:w-[170px] lg:w-[170px] h-12 bg-[#c99922] hover:bg-[#b58718] uppercase tracking-[1.5px] text-[13px] font-semibold flex items-center justify-center gap-2 transition"
>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.6" y2="16.6" />
          </svg>
          Search
        </button>

        {/* Draw */}
        <Link
          href="/draw-your-search"
          className="w-full sm:w-[170px] lg:w-[170px] h-12 bg-[#c99922] hover:bg-[#b58718] uppercase tracking-[1.5px] text-[13px] font-semibold flex items-center justify-center gap-2 transition"
        >
           Draw
        </Link>

        {/* Close */}
        <button
          onClick={close}
          className="text-white text-3xl hover:text-[#c99922] transition px-2"
        >
          ×
        </button>

      </div>

    </div>
  );
}