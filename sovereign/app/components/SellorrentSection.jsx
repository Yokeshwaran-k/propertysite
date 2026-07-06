import Image from "next/image";

export default function SellOrRentSection() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* LEFT: Text content */}
        <div className="flex items-center px-6 sm:px-12 lg:px-16 py-16 lg:py-0">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-[2.15rem] font-bold tracking-wide text-neutral-600 uppercase leading-snug">
              Are You Looking To Sell Or
              <br />
              Rent Your Property?
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-neutral-500">
              At Sovereign House, we never forget that we are handling what
              is likely to be your most valuable asset.
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
              Employing an experienced team of consultants, we are confident
              in our ability to deliver exceptional results.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              
                <a href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-700 hover:text-neutral-900 transition-colors w-fit"
              >
                <span className="text-emerald-500">›</span>
                VALUATION
              </a>
              
                <a href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-700 hover:text-neutral-900 transition-colors w-fit"
              >
                <span className="text-emerald-500">›</span>
                BOOK A FREE VALUATION
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Full-bleed image */}
        <div className="relative min-h-[400px] lg:min-h-full">
          <Image
            src="/images/buyersl.jpg"
            alt="Estate agent handing over house keys to new homeowners"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}