"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "SALES", href: "/selling" },
    { name: "LETTINGS", href: "/lettings" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "OUR SERVICES", href: "/our-services" },
    { name: "REGISTER", href: "/register" },
    { name: "NEWS", href: "/news" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="bg-[#4f5054] text-white sticky top-0 z-50 ">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 lg:h-[110px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/SovereignHouse-logo.png"
            alt="Sovereign House"
            width={80}
            height={80}
            priority
            className="w-14 h-14 md:w-16 md:h-16 lg:w-[80px] lg:h-[80px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7 tracking-[1.5px] text-[13px] font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[#d5a52b] duration-300 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side - Desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Link
            href="#"
            className="flex items-center gap-2 uppercase tracking-[1.5px] text-[13px] hover:text-[#d5a52b] transition whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#d5a52b]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.6" y2="16.6" />
            </svg>
            PROPERTY SEARCH
          </Link>

          <Link
            href="#"
            className="bg-[#c99922] hover:bg-[#b58718] px-6 py-3.5 uppercase tracking-[1.5px] text-[13px] font-semibold transition whitespace-nowrap"
          >
            FREE ONLINE VALUATION
          </Link>
        </div>

        {/* Mobile / Tablet: Search icon + Hamburger */}
        <div className="flex xl:hidden items-center gap-4">
          <Link href="#" aria-label="Property search" className="text-[#d5a52b]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.6" y2="16.6" />
            </svg>
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
          >
            <span
              className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-7 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu Panel */}
      <div
        className={`xl:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-[#4f4f4f] ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 tracking-[1.5px] text-[14px] font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d5a52b] duration-300 border-b border-white/10 pb-3"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 uppercase tracking-[1.5px] text-[14px] hover:text-[#d5a52b] transition pb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#d5a52b]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.6" y2="16.6" />
            </svg>
            PROPERTY SEARCH
          </Link>

          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="bg-[#c99922] hover:bg-[#b58718] px-6 py-3.5 uppercase tracking-[1.5px] text-[13px] font-semibold transition text-center"
          >
            FREE ONLINE VALUATION
          </Link>
        </nav>
      </div>
    </header>
  );
}