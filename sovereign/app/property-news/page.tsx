import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
export default function PropertyNews() {
    return(
        <>
        <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[600px]">
        {/* LEFT: Dark content panel */}
        <div className="bg-[#4f5054] flex items-center px-6 sm:px-12 lg:px-16 py-16 lg:py-0">
          <div className="max-w-md">
            <nav className="flex items-center gap-1.5 text-xs font-semibold tracking-widest text-amber-500 uppercase">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span>Property News</span>
            </nav>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Property News
            </h1>
            <p className="mt-8 text-white">Property and industry news from Sovereign House</p>
          </div>
        </div>

        {/* RIGHT: Full-bleed image */}
        <div className="relative h-[400px] lg:h-full">
          <Image
            src="/images/bath.jpg"
            alt="Estate agent shaking hands with a client in a modern office"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
        </>
    );
}