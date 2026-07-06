import Image from "next/image";

const accreditations = [
  { name: "safeagent", src: "/images/safeagent_logo.svg", width: 160, height: 40 },
  { name: "Property Redress Scheme", src: "/images/prs.png", width: 110, height: 50 },
  { name: "Hometrack", src: "/images/hometrack-logo.png", width: 150, height: 40 },
];

export default function PartnersLogo() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {accreditations.map((logo) => (
            <div
              key={logo.name}
              className="relative grayscale-0 opacity-90 hover:opacity-100 transition-opacity"
              style={{ width: logo.width, height: logo.height }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}