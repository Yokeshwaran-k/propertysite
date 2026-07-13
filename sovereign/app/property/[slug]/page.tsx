import { notFound } from "next/navigation";
import Image from "next/image";
import { getPropertyBySlug } from "@/lib/properties";
import PropertyGallery from "../PropertyGallery";
import ShortlistButton from "../ShortlistButton";
import PropertyMap from "../PropertyMap";

function BedIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 18v2M21 18v2" strokeLinecap="round" />
      <path d="M3 12V7a1 1 0 0 1 1-1h6v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 12h16a1 1 0 0 1 1 1v1a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-1a1 1 0 0 1 1-1Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12V6a2 2 0 0 1 3.2-1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21h14" strokeLinecap="round" />
    </svg>
  );
}

function SofaIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 14v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 14V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 11v3M21 11v3" strokeLinecap="round" />
    </svg>
  );
}

type Params = { slug: string };

// Works whether Next.js passes params as a plain object (14) or a Promise (15).
export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const heading =
    property.street && property.city
      ? `${property.street}, ${property.city}`
      : property.displayAddress || property.title;

  const shareUrl = `https://www.sovereign-house.com/property/${property.slug}`;

  return (
    <div>
      {/* Hero */}
   <div className="border-b border-white/10 bg-[#4f5054] py-10">
  <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-12">
    {/* Left Content */}
    <div className="order-2 lg:order-1 lg:col-span-5">
      <h5 className="text-sm font-semibold uppercase tracking-[2px] text-white">
        {property.bedrooms ? `${property.bedrooms} Bed` : ""} For{" "}
        {property.statusLabel || "Sale"}
      </h5>

      <h1 className="mt-2 text-4xl font-light leading-tight text-white">
        {heading}
      </h1>

      <p className="mt-3 text-3xl font-bold text-white">
        {property.priceDisplay}
      </p>

      {/* Property Features */}
      <ul className="mt-8 flex gap-8 text-white">
        {property.bedrooms !== null && (
          <li className="flex flex-col items-center gap-2 text-sm">
            <BedIcon />
            <span>{property.bedrooms}</span>
          </li>
        )}

        {property.bathrooms !== null && (
          <li className="flex flex-col items-center gap-2 text-sm">
            <BathIcon />
            <span>{property.bathrooms}</span>
          </li>
        )}

        {property.receptionrooms !== null && (
          <li className="flex flex-col items-center gap-2 text-sm">
            <SofaIcon />
            <span>{property.receptionrooms}</span>
          </li>
        )}
      </ul>

      {/* Shortlist */}
      <div className="mt-6">
        <ShortlistButton propertyId={property.id} />
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center gap-6 text-sm">
        <a
          href="#map"
          className="font-semibold uppercase tracking-[2px] text-white transition hover:text-[#c99b2d]"
        >
          Map
        </a>

        <a
          href="#floorplansEpcs"
          className="font-semibold uppercase tracking-[2px] text-white transition hover:text-[#c99b2d]"
        >
          Floorplans
        </a>
      </div>

      {/* Share */}
      <div className="mt-6 flex items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-[2px] text-white">
          Share
        </span>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noreferrer noopener"
          className="text-white transition hover:text-[#c99b2d]"
          aria-label="Share on Facebook"
        >
          Facebook
        </a>

        <a
          href={`http://twitter.com/share?text=${encodeURIComponent(
            heading
          )}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noreferrer noopener"
          className="text-white transition hover:text-[#c99b2d]"
          aria-label="Share on Twitter"
        >
          Twitter
        </a>
      </div>

      {/* CTA */}
      <div className="mt-10 border-t border-white/20 pt-8">
        <a
          href={`/viewing-request?propid=${property.id}`}
          className="inline-block bg-[#c99b2d] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition hover:bg-[#b68b29]"
        >
          Book a Viewing
        </a>

        <p className="mt-5 text-sm leading-7 text-white">
          or call{" "}
          <a
            href="tel:02089855800"
            className="font-semibold text-white underline underline-offset-4 hover:text-[#c99b2d]"
          >
            020 8985 5800
          </a>{" "}
          or{" "}
          <a
            href="tel:02082201500"
            className="font-semibold text-white underline underline-offset-4 hover:text-[#c99b2d]"
          >
            020 8220 1500
          </a>
        </p>
      </div>
    </div>

    {/* Right Gallery */}
    <div className="order-1 lg:order-2 lg:col-span-7">
      <PropertyGallery
        images={["/images/no-image.png"]}
        statusLabel={property.statusLabel}
        title={heading || property.title}
      />
    </div>
  </div>
</div>

      {/* Description */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Description</h2>
        <div className="grid gap-8 lg:grid-cols-12">
          {property.bullets.length > 0 && (
            <ul className="order-2 space-y-2 text-sm text-gray-700 lg:order-1 lg:col-span-5">
              {property.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-700" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          <div
            className="order-1 text-gray-700 lg:order-2 lg:col-span-7 [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: property.description }}
          />
        </div>
      </section>

      {/* Map */}
      <PropertyMap lat={property.lat} lng={property.lng} label={heading || property.title} />

      {/* Floorplan & EPC */}
      {(property.floorPlanUrl || property.epcUrl) && (
        <section id="floorplansEpcs" className="mx-auto max-w-5xl px-4 py-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Floorplan &amp; EPC
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {property.floorPlanUrl && (
              <div className="relative h-72 w-full overflow-hidden rounded-sm border border-gray-200">
                <Image
                  src={"/images/no-image.png"}
                  alt="Floorplan"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain bg-white"
                />
              </div>
            )}
            {property.epcUrl && (
              <div className="relative h-72 w-full overflow-hidden rounded-sm border border-gray-200">
                <Image
                                  src={"/images/no-image.png"}
                                  
                  alt="EPC"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain bg-white"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}