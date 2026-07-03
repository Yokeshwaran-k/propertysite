import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 items-center">

        <div className="order-2 lg:order-1 p-10">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to Sovereign House
          </h1>

          <p className="mt-4 text-xl">
            Award-Winning Sales & Lettings for 33 years
          </p>

          <Link
            href="/about-us"
            className="inline-block mt-6 bg-black text-white px-6 py-3"
          >
            About Us
          </Link>
        </div>

        <div className="order-1 lg:order-2">
          <Image
            src="/images/1600-home.jpg"
            alt="Sovereign House"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}