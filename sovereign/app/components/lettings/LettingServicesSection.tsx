import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface ServiceButtonProps {
  href: string;
  children: ReactNode;
}
function ServiceButton({ href, children }: ServiceButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center bg-[#c69627] hover:bg-amber-600 transition-colors text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 w-fit"
    >
      {children}
    </Link>
  );
}

export default function LettingsServicesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="px-6 lg:px-8">
        {/* TENANT FINDING SERVICE */}
        <div>
          <h2 className="text-2xl md:text-[1.6rem] font-bold tracking-wide text-neutral-600 uppercase">
            Tenant Finding Service
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
            As a landlord, you want to know two things when choosing a
            lettings agency. Firstly, that you&apos;ll receive a strong and
            constant income stream, and secondly, that you&apos;ll be dealing
            with fully-qualified professionals who are always on hand to
            supply expert advice. Here are just some of the reasons why
            Sovereign House makes the grade:-
          </p>

          <ul className="mt-5 space-y-2 text-[15px] leading-relaxed text-neutral-500 list-disc list-outside pl-5">
            <li>
              We&apos;ll get the price right – from the start. Using our
              unrivalled knowledge of comparable rents in your area, we will
              accurately assess the open market value of your property to
              minimise void periods.
            </li>
            <li>
              Unlike most lettings agencies, we are working on your behalf 7
              days a week.
            </li>
            <li>
              Immediate rent payments. As soon as we receive the monthly rent
              from the tenant, it is automatically paid into the landlords
              bank account.
            </li>
            <li>
              We only consider the highest calibre tenants, with full
              referencing carried out to ensure suitability.
            </li>
            <li>
              We are able to offer guaranteed rents throughout the tenancy.
            </li>
          </ul>

          <div className="mt-8">
            <ServiceButton href="/lettings/tenant-fees">
              Tenant Fees
            </ServiceButton>
          </div>
        </div>

        {/* RENT COLLECTION SERVICE */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-[1.6rem] font-bold tracking-wide text-neutral-600 uppercase">
            Rent Collection Service
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
            In addition to the above, we will collect the monthly rent for
            you, immediately pay it to you, deal with any arrears and issue
            an annual statement.
          </p>
        </div>

        {/* FULL MANAGEMENT SERVICE */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-[1.6rem] font-bold tracking-wide text-neutral-600 uppercase">
            Full Management Service
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
            This is by far our most popular service. There are currently over
            170 pieces of legislation which have to be complied with during a
            tenancy. Not complying with just one of these can leave a
            landlord extremely vulnerable if anything goes wrong during a
            tenancy.
          </p>

          <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
            Unlike many letting agents, we have a team of fully qualified
            &quot;in house&quot; property managers to deal with any issue no
            matter how big or small, and ensure that the ever-changing laws
            and legislation are fully adhered to. Our specific systems track
            when you need to update any certification, then immediately
            contact one of our preferred specialist tradesmen ensuring you
            are not only compliant, but pay a fair price for all work.
          </p>

          <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
            When you pay more, its only fair you do less work yourself. With
            our fully-managed service, we will look after your property as
            if it were our own without troubling you. Unlike some other
            jobs, the less you hear from us the better we are doing.
          </p>

          <div className="mt-8">
            <ServiceButton href="/lettings/landlord-fees">
              Landlord Fees
            </ServiceButton>
          </div>
        </div>

        {/* LANDLORD GUIDE */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-[1.6rem] font-bold tracking-wide text-neutral-600 uppercase">
            A Landlord Guide To Renting Your Property
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
            As a Sovereign House landlord we offer you a variety of
            management services. Whether you wish to be involved in every
            step of the lettings process or would like us to take care of
            everything for you, our Property Management team can create a
            bespoke service accordingly.
          </p>

          <div className="mt-8">
            <ServiceButton href="/lettings/landlord-guide">
              Landlord Guide
            </ServiceButton>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-[1.6rem] font-bold tracking-wide text-neutral-600 uppercase">
            Please Contact Us For Full Details Of These Services.
          </h2>

          <Link
            href="/valuation"
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
            GET A FREE VALUATION
          </Link>
        </div>
      </div>
    </section>
  );
}