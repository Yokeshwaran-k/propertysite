
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Hamburger } from "lucide-react";
import ConveyancingSection from "../components/ConveyancingSection";
import LatestNewsSection from "../components/LatestNewsSection";
import PartnersLogo from "../components/PartnersLogo";
import HamburgerMenu, { pageContent } from "@/app/components/buttons/HamburgerMenu";
import Getvaluation from "@/app/components/buttons/Getvaluation";


export default function OurServices() {
  return (
    <>
      <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[600px]">
        {/* LEFT: Dark content panel */}
        <div className="bg-neutral-600 flex items-center px-6 sm:px-12 lg:px-16 py-16 lg:py-0">
          <div className="max-w-md">
              <HamburgerMenu {...pageContent.ourservices} />
               <Getvaluation/>
          </div>
        </div>

        {/* RIGHT: Full-bleed image */}
        <div className="relative h-[400px] lg:h-full">
          <Image
            src="/images/1600-our-services.jpg"
            alt="Estate agent shaking hands with a client in a modern office"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-none px-0">
        <div className="row flex flex-wrap items-center justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] w-full md:h-[440px]">
              <Image
                src="/images/valuer.jpg"
                alt="Selling your property - Sovereign House"
                fill
                className="object-cover"
              />
            </div>
          </div>
 
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 px-8 py-10 text-[#4a4a49] md:px-16 lg:px-16">
                <h2 className="text-2xl font-bold text-[#4a4a49]">MORTGAGES</h2>              
              <p>
                Sovereign House can source a mortgage for you at the lowest possible rates. Whether you are buying through us or not, or simply re-mortgaging your current property, our independent financial advisors are able to obtain rates unavailable to the general public, saving you money every month.
              </p>
 
              <Link
                href="/valuation-request"
                className="inline-block pt-2 text-md font-semibold tracking-wider text-[#4a4a49] hover:text-[#c9a227]"
              >
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
    </>
  );
}