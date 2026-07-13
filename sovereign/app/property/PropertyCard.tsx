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
    
    <div className="flex gap-4 border-b border-gray-200 py-4">
      <Link
        href={detailHref}
        className="relative h-28 w-40 flex-shrink-0 overflow-hidden rounded-sm bg-gray-100 sm:h-32 sm:w-48"
      >
        {property.imageUrl ? (
          <Image
            src={imageUrl}
            alt={heading || property.title}
            fill
            sizes="192px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
            No image
          </div>
        )}
        {property.statusLabel && (
          <span className="absolute left-0 top-2 bg-amber-600 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            {property.statusLabel}
          </span>
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              {eyebrow}
            </p>
          )}
          <Link href={detailHref} className="block">
            <h3 className="mt-0.5 truncate text-base font-semibold text-gray-900 hover:text-amber-700">
              {heading}
            </h3>
          </Link>
          <p className="mt-0.5 text-sm font-medium text-gray-800">
            {property.priceDisplay}
          </p>

          <div className="mt-1 flex items-center gap-3 text-sm text-gray-600">
            {property.bedrooms !== null && (
              <span className="flex items-center gap-1">
                <BedIcon /> {property.bedrooms}
              </span>
            )}
            {property.bathrooms !== null && (
              <span className="flex items-center gap-1">
                <BathIcon /> {property.bathrooms}
              </span>
            )}
            {property.receptionrooms !== null && (
              <span className="flex items-center gap-1">
                <ReceptionIcon /> {property.receptionrooms}
              </span>
            )}
          </div>

          {property.excerpt && (
            <p className="mt-1 line-clamp-2 text-sm text-gray-500">
              {property.excerpt}
            </p>
          )}
        </div>

        <div className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <button
            type="button"
            className="text-amber-700 hover:text-amber-900"
          >
            Save to shortlist
          </button>
          <span className="text-gray-300">|</span>
          <Link href={detailHref} className="text-amber-700 hover:text-amber-900">
            More details
          </Link>
        </div>
      </div>
    </div>
  );
}