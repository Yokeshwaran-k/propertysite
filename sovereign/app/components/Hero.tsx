"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    image: "/images/1600-home.jpg",
    alt: "Sovereign House - Living Room",
  },
  // Add more slides here if you have additional images
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#4f5054]">
      <div className="grid lg:grid-cols-2 min-h-[700px] lg:min-h-[700px]">
        {/* Left - Text Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center px-8 py-14 lg:px-16 lg:py-0">
          <span className="text-[#d5a52b] uppercase tracking-[2px] text-sm font-semibold mb-4">
            Welcome to Sovereign House
          </span>

          <h1 className="text-white  text-4xl md:text-4xl font-bold">
            Award-Winning Sales &amp; Lettings
            <br />for 33 years
          </h1>

          <Link
            href="/about-us"
            className="inline-block mt-8 bg-[#c99922] hover:bg-[#b58718] text-white px-8 py-4 uppercase tracking-[1.5px] text-[13px] font-semibold transition w-fit"
          >
            About Us
          </Link>
        </div>

        {/* Right - Image Carousel */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative w-full h-[800px] lg:h-[800px]">
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              fill
              sizes="(max-width: 1020px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover"
            />
          </div>

          {/* Carousel Controls */}
          {slides.length > 1 && (
            <div className="absolute bottom-6 left-6 flex gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-9 h-9 flex items-center justify-center bg-[#c99922]/90 hover:bg-[#c99922] text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-9 h-9 flex items-center justify-center bg-[#c99922]/90 hover:bg-[#c99922] text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}