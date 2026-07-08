import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function LettingsHero() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT: Dark content panel */}
        <div className="bg-[#4f5054] flex items-center px-6 sm:px-12 lg:px-16 py-16 lg:py-0">
          <div className="max-w-lg py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#e2bf6d] uppercase">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span>Lettings</span>
            </nav>

            {/* Heading */}
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Lettings
            </h1>

            {/* Copy */}
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-neutral-200">
              <p>
                Sovereign House specialises in letting high-quality property
                to high-quality tenants. With our highly experienced team of
                consultants, we are confident in our ability to deliver
                exceptional results, whether it is our tenant finding service
                you are interested in or our full management service.
              </p>
              <p>
                We work particularly hard to ensure that only the
                highest-calibre tenants are put forward, and that void
                periods are kept to an absolute minimum.
              </p>
              <p>
                We offer guaranteed rents and, unlike most agents, rents are
                paid out to landlords the very same day we receive them. We
                are also one of the few agents able to offer landlords the
                full annual rent in advance. Please ask for details.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/valuation-request"
              className="mt-8 inline-flex items-center justify-center bg-[#c69627] hover:bg-amber-600 transition-colors text-white text-xs font-semibold tracking-widest uppercase px-8 py-4"
            >
              Get A Free Valuation
            </Link>
          </div>
        </div>

        {/* RIGHT: Full-bleed image */}
        <div className="relative min-h-[400px] lg:min-h-full">
          <Image
            src="/images/1600-lettings.jpg"
            alt="Row of period terraced houses available to let"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}