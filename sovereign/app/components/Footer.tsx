import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white py-12">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logo */}
          <div>
            <Image
              src="/images/SovereignHouse-logo.png"
              alt="Sovereign House"
              width={120}
              height={120}
            />

            <p className="mt-4 text-sm">
              © 2026 Sovereign House
            </p>

            <div className="mt-2 space-x-2 text-sm">
              <Link href="/terms-of-use">Terms</Link>
              <span>|</span>
              <Link href="/cookies-policy">Cookies</Link>
              <span>|</span>
              <Link href="/privacy-policy">Privacy</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">
              Get In Touch
            </h3>

            <p>
              213 Victoria Park Road,
              <br />
              Hackney, London,
              <br />
              E9 7HD
            </p>

            <a href="tel:02089855800">
              020 8985 5800
            </a>

            <br />

            <a href="mailto:sales@sovereign-house.com">
              sales@sovereign-house.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li><Link href="/selling">Sales</Link></li>
              <li><Link href="/lettings">Lettings</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/our-services">Our Services</Link></li>
              <li><Link href="/register">Register</Link></li>
              <li><Link href="/property-news">News</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}