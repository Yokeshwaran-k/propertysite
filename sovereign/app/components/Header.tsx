import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">

          <Link href="/">
            <Image
              src="/images/SovereignHouse-logo.png"
              alt="Sovereign House"
              width={120}
              height={120}
            />
          </Link>

          <nav>
            <ul className="flex gap-6">
              <li><Link href="/selling">Sales</Link></li>
              <li><Link href="/lettings">Lettings</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/our-services">Our Services</Link></li>
              <li><Link href="/register">Register</Link></li>
              <li><Link href="/property-news">News</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </nav>

          <div className="flex gap-3">
            <a href="tel:02089855800">
              Call Us
            </a>

            <button>
              Valuation
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}