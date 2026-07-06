import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function ConveyancingSection() {
  return (
    <section className="bg-neutral-600 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Image */}
          <div className="relative h-[420px] lg:h-[480px] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/solicitor.jpg"
              alt="Couple discussing conveyancing paperwork with an advisor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* RIGHT: Text content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-[2.15rem] font-bold tracking-wide uppercase leading-snug">
              Do You Need
              <br />
              Conveyancing?
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-neutral-200">
              For details of Sovereign House Conveyancing please contact your
              local branch:
            </p>

            <h3 className="mt-6 text-base font-semibold">
              Victoria Park Office
            </h3>

            <p className="mt-2 text-[15px] leading-relaxed text-neutral-200">
              213 Victoria Park Road, Victoria Park, Hackney,
              <br />
              London, E9 7HD
            </p>

            <div className="mt-5 flex flex-col gap-2">
              
               <a href="tel:02089855800"
                className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors w-fit"
              >
                <Phone className="w-4 h-4" />
                020 8985 5800
              </a>
              
                <a href="mailto:vicparksales@sovereign-house.com"
                className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors w-fit"
              >
                <Mail className="w-4 h-4" />
                vicparksales@sovereign-house.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}