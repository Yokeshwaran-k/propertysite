"use client";

import { useState } from "react";
import Image from "next/image";

export default function PropertyGallery({
  images,
  statusLabel,
  title,
}: {
  images: string[];
  statusLabel: string | null;
  title: string;
}) {
  const [active, setActive] = useState(0);
  const slides = images.length > 0 ? images : [];

  const safeImage = (url: string | null | undefined) => {
  if (!url) {
    return "/images/no-image.png";
  }

  // Ignore invalid local WordPress hostname
  if (url.includes("https")) {
    return "/images/no-image.png";
  }

  return url;
};

  if (slides.length === 0) {
    return (
      <div className="flex h-72 w-full items-center justify-center rounded-sm bg-gray-100 text-gray-400 sm:h-96">
        No photos available
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-72 w-full overflow-hidden rounded-sm bg-gray-100 sm:h-96">
        <Image
          src={safeImage(slides[active])}
          alt={`${title} - photo ${active + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
          priority
        />
        {statusLabel && (
          <span className="absolute left-0 top-4 bg-amber-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            {statusLabel}
          </span>
        )}

        {slides.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => setActive((a) => (a === 0 ? slides.length - 1 : a - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-white"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => setActive((a) => (a === slides.length - 1 ? 0 : a + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-white"
            >
              ›
            </button>
            <span className="absolute bottom-2 right-2 rounded-sm bg-black/60 px-2 py-0.5 text-xs text-white">
              {active + 1} / {slides.length}
            </span>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-2 flex gap-2 overflow-x-auto">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-sm border-2 ${
                i === active ? "border-amber-700" : "border-transparent"
              }`}
            >
              <Image
                src={safeImage(src)}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}