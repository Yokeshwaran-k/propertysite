import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ConveyancingSection from "../components/ConveyancingSection";
import LatestNewsSection from "../components/LatestNewsSection";
import PartnersLogo from "../components/PartnersLogo";
import ContactForm from "../components/contactForm/ContactFrom";
import { Phone, Mail } from "lucide-react";

export default function OurServices() {
  return (
    <>
      <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[600px]">
        {/* LEFT: Dark content panel */}
        <div className="bg-neutral-600 flex items-center px-6 sm:px-12 lg:px-16 py-16 lg:py-0">
          <div className="max-w-xxl">
            <nav className="flex items-center gap-1.5 text-xs font-semibold tracking-widest text-amber-500 uppercase">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span>Contact Us</span>
            </nav>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Contact Sovereign House estate agents & letting agents in Hackney
            </h1>
            <p className="mt-4 text-white">
              With 30+ years of local expertise, Sovereign House Hackney Estate Agents leverages deep community connections to uncover unique opportunities. We use cutting-edge marketing tools to maximise property value and deliver outstanding results. 
            </p>
            
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
      <ContactForm />
       <section className="bg-white py-16 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Office details */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-800">
              Sovereign House Hackney Estate Agents &amp; Letting agents
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              213 Victoria Park Road, Victoria Park, Hackney,
              <br />
              London, E9 7HD
            </p>

            <div className="mt-5 flex flex-col gap-2">
              
                <a href="tel:02089855800"
                className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-600 transition-colors w-fit"
              >
                <Phone className="w-4 h-4" />
                020 8985 5800
              </a>
              
                <a href="mailto:sales@sovereign-house.com"
                className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-600 transition-colors w-fit"
              >
                <Mail className="w-4 h-4" />
                sales@sovereign-house.com
              </a>
            </div>

            <h3 className="mt-8 text-base font-semibold text-neutral-800">
              Opening Hours
            </h3>

            <dl className="mt-3 space-y-1.5 text-[15px] text-neutral-600">
              <div className="flex gap-2">
                <dt>Mon - Thu</dt>
                <dd>- 9:00 AM–6:30 PM</dd>
              </div>
              <div className="flex gap-2">
                <dt>Fri</dt>
                <dd>- 9:00 AM–6:00 PM</dd>
              </div>
              <div className="flex gap-2">
                <dt>Sat</dt>
                <dd>- 9:00 AM–5:00 PM</dd>
              </div>
              <div className="flex gap-2">
                <dt>Sunday</dt>
                <dd>- Closed</dd>
              </div>
            </dl>

            <p className="mt-10 text-[15px] leading-relaxed text-neutral-600">
              Hackney, London, is a dynamic and diverse area known for its
              cultural vibrancy and unique charm. Key landmarks include the
              historic Hackney Empire, the expansive London Fields park, and
              the bustling Broadway Market, while Hackney Marshes and Stoke
              Newington Church Street offer additional local appeal. Moving
              to Hackney provides access to a lively arts scene, numerous
              green spaces, and a trendy lifestyle with a strong community
              spirit. With excellent transport links and a range of
              independent shops, cafes, and restaurants, Hackney combines
              modern living with a rich cultural backdrop.
            </p>
          </div>

          {/* RIGHT: Map + reviews */}
          <div>
            <div className="relative w-full h-[400px] border border-neutral-200 overflow-hidden">
              <iframe
                title="Sovereign House Estate Agents location"
                src="https://www.google.com/maps?q=213+Victoria+Park+Road,+London+E9+7HD&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex items-center gap-3">
              {/* Swap for the official Google "G" logo asset */}
              <span className="text-xl font-semibold">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-amber-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span>
              <span className="text-xs text-neutral-500 -ml-2">Reviews</span>

              <p className="text-sm text-amber-500">
                4.4/5 Ratings from 99 customer reviews
              </p>
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