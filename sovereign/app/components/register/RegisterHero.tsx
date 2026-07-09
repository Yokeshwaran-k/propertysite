import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ConveyancingSection from "../ConveyancingSection";
import PartnersLogo from "../PartnersLogo";
import LatestNewsSection from "../LatestNewsSection";
import HamburgerMenu, { pageContent } from "../buttons/HamburgerMenu";
import RegisterForm from "./RegisterForm";


export default function RegisterHero() {
    return (
<div className="flex flex-col gap-12">
    <section className="bg-[#4f5054] mb-8">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 lg:grid-cols-12 lg:min-h-[700px]">
        <div className="order-2 flex items-center px-8 py-16 lg:order-1 lg:col-span-5 lg:px-20">
          <div className="max-w-xl">
            <HamburgerMenu {...pageContent.register} />

            

            
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <div className="relative h-[350px] w-full lg:min-h-[700px]">
            <Image
              src="/images/buyers-original.jpg"
              alt="Register"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
            <RegisterForm />
            <LatestNewsSection />
            <PartnersLogo />
        </div>
    );
}