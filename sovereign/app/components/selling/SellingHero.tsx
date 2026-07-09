import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ConveyancingSection from "../ConveyancingSection";
import PartnersLogo from "../PartnersLogo";
import LatestNewsSection from "../LatestNewsSection";
import Getvaluation from "../buttons/Getvaluation";
import HamburgerMenu, { pageContent } from "../buttons/HamburgerMenu";

export default function SellingHero() {
    return (
<div className="flex flex-col gap-12">
    <section className="bg-[#4f5054] mb-8">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 lg:grid-cols-12 lg:min-h-[700px]">
        <div className="order-2 flex items-center px-8 py-16 lg:order-1 lg:col-span-5 lg:px-20">
          <div className="max-w-md">
            <HamburgerMenu {...pageContent.selling} />

             <Getvaluation/>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <div className="relative h-[350px] w-full lg:min-h-[700px]">
            <Image
              src="/images/selling-1600.jpg"
              alt="Selling your property"
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
            <div className="relative h-[540px] w-full md:h-[540px]">
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
            <div className="flex flex-col gap-4 px-8 py-10 text-[#4a4a49] md:px-16 lg:px-16
">
              <p>
                At Sovereign House, we never forget that we are handling what
                is likely to be your most valuable asset. Customer service
                and a professional, but human, approach underlines everything
                we do. We understand that effective and prompt communication
                is vital when dealing with such an important asset, and we
                are on-hand 7 days a week to ensure that you can be kept
                fully informed every step of the way.
              </p>
              <p>
                Our unique contacts enable us to put together sales
                unavailable via other estate agents. Our duty when selling a
                property is to obtain the very highest price possible from a
                fully-qualified buyer, who then proceeds at a speed to suit
                our vendor. We are able to offer discretionary marketing
                where required, offering properties on a one-to-one basis in
                a totally discreet manner.
              </p>
              <p>
                Once we are instructed, all vendors are provided with the
                mobile telephone number of our Managing Director, who will be
                happy to discuss any aspect of our service with you.
              </p>
              <p>
                Our sales team will contact you every week to discuss
                progress, and will contact you with full feedback every time
                your property is viewed.
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