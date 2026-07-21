import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Award Winning Estate Agents
            </h2>

            <p className="mb-4">
              Since our foundation in 1989, Sovereign House has become
              one of the area`s most progressive and successful estate agents.
            </p>

            <Link
              href="/about-us"
              className="font-semibold underline"
            >
              Read About Us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/interior.jpg"
              alt="Interior"
              width={800}
              height={600}
            />

            <Image
              src="/images/valuer2.jpg"
              alt="Valuer"
              width={800}
              height={600}
            />
          </div>

        </div>

      </div>
    </section>
  );
}