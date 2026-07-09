import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HamburgerMenuProps {
  breadcrumb: string;
  title: string;
  description: string;
  href?: string;
}

export const pageContent = {
  about: {
    breadcrumb: "About Us",
    title: "About Us",
    href: "/about-us",
    description:
      "Since our foundation in 1989, Sovereign House has become one of East London’s most progressive and successful estate agents.",
  },

  letting: {
    breadcrumb: "Letting",
    title: "Letting",
    href: "/letting",
    description:
      "Our professional letting services help landlords and tenants find the perfect property solutions.",
  },

  selling: {
    breadcrumb: "Selling",
    title: "Selling Your Property",
    href: "/selling",
    description:
      "",
  },

  register: {
    breadcrumb: "Register",
    title: "Register With Us",
    href: "/register",
    description:
      "Register your property requirements with us and we'll be in touch when the right property hits the market.",
    },
  
   ourservices: {
    breadcrumb: "Our Services",
    title: "Our Services",
    href: "/our-services",
    description:
      "",
  },
   contact: {
    breadcrumb: "Contact Us",
    title: "Contact Sovereign House estate agents & letting agents in Hackney",
    href: "/contact-us",
    description:
      "With 30+ years of local expertise, Sovereign House Hackney Estate Agents leverages deep community connections to uncover unique opportunities. We use cutting-edge marketing tools to maximise property value and deliver outstanding results.",
  },
};

export default function HamburgerMenu({
  breadcrumb,
  title,
  description,
  href = "/",
}: HamburgerMenuProps) {
  return (
    <>
      <nav className="mb-4 flex items-center text-base font-semibold uppercase tracking-[0.2em] text-[#d4a437]">
        <Link href="/" className="transition hover:text-white">
          Home
        </Link>

        <ChevronRight size={14} className="mx-2" />

        <Link href={href} className="transition hover:text-white">
          {breadcrumb}
        </Link>
      </nav>

      <h1 className="mb-6 text-4xl font-bold text-white lg:text-4xl">
        {title}
      </h1>

      <h3 className="mb-6 text-white">
        {description}
      </h3>
    </>
    );
    
    
}