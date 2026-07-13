import Image from "next/image";
import Link from "next/link";
import type { PropertySummary } from "@/lib/properties";
function BedIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 18v2M21 18v2" strokeLinecap="round" />
      <path d="M3 12V7a1 1 0 0 1 1-1h6v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 12h16a1 1 0 0 1 1 1v1a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-1a1 1 0 0 1 1-1Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12V6a2 2 0 0 1 3.2-1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21h14" strokeLinecap="round" />
    </svg>
  );
}
function ReceptionIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      {/* Person */}
      <circle cx="12" cy="6" r="2" />
      <path
        d="M9 11a3 3 0 0 1 6 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Reception desk */}
      <path
        d="M4 14h16v6H4z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14v6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PropertyCard({ property }: { property: PropertySummary }) {
  const heading =
    property.street && property.city
      ? `${property.street}, ${property.city}`
      : property.displayAddress || property.title;

  const eyebrow = [
    property.bedrooms ? `${property.bedrooms} BED` : null,
    property.statusLabel ? property.statusLabel.toUpperCase() : null,
  ]
    .filter(Boolean)
    .join(" ");

  const detailHref = `/property/${property.slug}`;
  const imageUrl =
  property.imageUrl &&
  property.imageUrl.startsWith("http") // need to update the actual url
    ? "/images/no-image.png"
    : property.imageUrl || "/images/no-image.png";
//console.log(property);
return (
  <article className="group overflow-hidden bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)]">
    <div className="flex flex-col md:flex-row">

      {/* IMAGE */}

      <Link
        href={detailHref}
        className="relative h-[250px] w-full overflow-hidden md:h-[250px] md:w-[42%]"
      >
        <Image
          src={imageUrl}
          alt={heading}
          fill
          className="object-cover duration-500 group-hover:scale-105"
        />

        {property.statusLabel && (
          <span className="absolute left-0 top-6 bg-[#c99b2d] px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-white">
            {property.statusLabel}
          </span>
        )}
      </Link>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col justify-between p-6">

        <div>

          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[1.5px] text-[#c99b2d]">
              {eyebrow}
            </p>
          )}

          <Link href={detailHref}>
            <h2 className="mt-2 text-[28px] leading-tight font-light text-[#1b2430] transition hover:text-[#c99b2d]">
              {heading}
            </h2>
          </Link>

          <p className="mt-4 text-xl font-bold text-[#1b2430]">
            {property.priceDisplay}
          </p>

          {/* FEATURES */}

          <div className="mt-4 flex items-center gap-5 text-base text-[#3f3f3f]">

            {property.bedrooms !== null && (
              <span className="flex items-center gap-2">
                <BedIcon />
                {property.bedrooms}
              </span>
            )}

            {property.bathrooms !== null && (
              <span className="flex items-center gap-2">
                <BathIcon />
                {property.bathrooms}
              </span>
            )}

            {property.receptionrooms !== null && (
              <span className="flex items-center gap-2">
                <ReceptionIcon />
                {property.receptionrooms}
              </span>
            )}

          </div>

          {property.excerpt && (
            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 line-clamp-2">
              {property.excerpt}
            </p>
          )}
        </div>

        {/* FOOTER */}

        <div className="mt-5 flex items-center gap-6">

          <button className="font-semibold uppercase tracking-[3px] text-[#2f3542] transition hover:text-[#c99b2d]">
            ★ Save to Shortlist
          </button>

          <Link
            href={detailHref}
            className="font-semibold uppercase tracking-[3px] text-[#2f3542] transition hover:text-[#c99b2d]"
          >
            › More Details
          </Link>

        </div>

      </div>

    </div>
  </article>
);
}