import Image from "next/image";

export default function AwardWinningSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
          {/* LEFT: Image collage */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Large sofa image */}
              <div className="relative col-span-1 h-[420px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/images/interior.jpg"
                  alt="Cozy living room with beige sofa and throw blanket"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Small agent-with-client image */}
              <div className="relative col-span-1 h-[220px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/images/valuer2.jpg"
                  alt="Estate agent outside a property viewing window"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
            </div>

            {/* Testimonial card, overlapping images */}
            <div className="relative mt-[-140px] ml-auto w-[85%] max-w-[440px] bg-neutral-200/80 backdrop-blur-sm px-8 pt-10 pb-6 shadow-md">
              {/* Quote icon bubble */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-neutral-500"
                  fill="currentColor"
                >
                  <path d="M9.5 9c-2.5 0-4.5 2-4.5 4.5S7 18 9.5 18c.3 0 .5 0 .8-.1-.5 1.4-1.7 2.4-3.3 2.6v1.8c3-.2 5.5-2.5 5.5-6V9H9.5zm9 0c-2.5 0-4.5 2-4.5 4.5S16 18 18.5 18c.3 0 .5 0 .8-.1-.5 1.4-1.7 2.4-3.3 2.6v1.8c3-.2 5.5-2.5 5.5-6V9h-3z" />
                </svg>
              </div>

              <p className="text-neutral-700 text-[15px] leading-relaxed">
                Our agent Jimmy was extremely helpful, friendly and
                professional. Communication was great which was very
                reassuring during a stressful period. Would recommend this
                service.
              </p>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-neutral-800">
                    TRISTAN PLET
                  </p>
                  <p className="mt-3 text-xs text-neutral-600 flex items-center gap-1">
                    See our reviews on
                    <span className="inline-flex items-center gap-1 font-semibold text-neutral-800">
                      <span className="text-emerald-500">★</span>Trustpilot
                    </span>
                  </p>
                </div>

                {/* Carousel dots */}
                <div className="flex items-center gap-1.5 pb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div className="lg:col-span-5 lg:pt-4">
            <h2 className="text-3xl md:text-[2.15rem] font-bold tracking-wide text-neutral-600 uppercase leading-snug">
              Award Winning
              <br />
              Estate Agents
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-neutral-500">
              Since our foundation in 1989, Sovereign House has become one of
              the area&apos;s most progressive and successful estate agents.
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
              Multi-award winning, our team has always been the key to our
              success, and our founder, Philip, is still ever-present to
              ensure that the very highest standards are upheld. We are the
              only agent in the areas we cover to be Hometrack Approved, a
              status only accredited to the top 30% of agents in England
              &amp; Wales by this prestigious body. In addition, we are the
              only agent in the areas we cover to be affiliated to The Guild
              of Property Professionals.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <span className="text-emerald-500">›</span>
              READ ABOUT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
