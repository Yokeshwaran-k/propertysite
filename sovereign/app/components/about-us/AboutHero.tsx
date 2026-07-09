import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ConveyancingSection from "../ConveyancingSection";
import PartnersLogo from "../PartnersLogo";
import LatestNewsSection from "../LatestNewsSection";
import Getvaluation from "../buttons/Getvaluation";
import HamburgerMenu, { pageContent } from "../buttons/HamburgerMenu";


export default function AboutHero() {
    return (
<div className="flex flex-col gap-12">
    <section className="bg-[#4f5054] mb-8">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 lg:grid-cols-12 lg:min-h-[700px]">
        <div className="order-2 flex items-center px-8 py-16 lg:order-1 lg:col-span-5 lg:px-20">
          <div className="max-w-xl">
           <HamburgerMenu {...pageContent.about} />

           <Getvaluation />
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <div className="relative h-[350px] w-full lg:min-h-[700px]">
            <Image
              src="/images/1600-about-us.jpg"
              alt="About Us"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>

        <section className="w-full mt-12">
      <div className="mx-auto w-full max-w-none px-0">
        <div className="row flex flex-wrap items-center justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[540px] w-full">
              <Image
                src="/images/office.jpg"
                alt="Selling your property - Sovereign House"
                fill
                className="object-cover"
              />
            </div>
          </div>
 
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 px-8 py-10 text-[#4a4a49] md:px-16 lg:px-16
">
              <p>
                Serving the area for over 30 years one of our greatest strengths is that we bring a high level of personal experience and local knowledge. Our long-standing team is immersed in the community and naturally understand what makes our area tick.
              </p>
              <p>
                Our unique insight and quality contacts enable us to put togther deals where others see no opportunity, and we respect the trust that our clients place in us to set standards above the ordinary. 
              </p>
              <p>
               Sovereign House has developed a marketing programme geared to selling and letting all properties for the very highest price possible. The very latest marketing tools and technology are used for all properties, regardless of price to ensure that no stone is left unturned to achieve the very best results.
              </p>
              <p>
                Of course, technology is only an aid to our results-driven teams. As well as being one the areas most recognisable brands, our long established team have roots in the community, with many local contacts available uniquely to us, and many families for whom we have acted over several generations. This means that when any property come to market, we invariably have a specific buyer or tenant in mind, and is perhaps why we sell and let over 50% of our instructions for the asking price or above.
              </p>
 
              <Link
            href="/valuation-request"
            className="inline-flex items-center gap-2 pt-2 text-md font-semibold uppercase tracking-[0.2em] text-[#4a4a49] hover:text-[#c9a227]"
            >
            <ChevronRight size={16} strokeWidth={2} />
            Get a Free Valuation
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>


            <ConveyancingSection />
            <LatestNewsSection />
                  <PartnersLogo />
        </div>
    );
}