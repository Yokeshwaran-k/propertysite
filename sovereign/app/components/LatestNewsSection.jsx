import Image from "next/image";

const posts = [
  {
    date: "Monday, 20 April 2026",
    title: "Landlord Update Spring 2026",
    excerpt:
      "Looking ahead Demand to live in Hackney and the surrounding areas remains at a record high, with more agreed tenancies compared to this time last year. This strong demand, combined with our proactive...",
    image:
      "/images/awaiting-images.jpg",
  },
  {
    date: "Friday, 20 March 2026",
    title: "Renters' Rights Act",
    excerpt:
      "The Renters' Rights Act will apply to all Assured Shorthold Tenancies (AST), including both new and existing tenancies. It will not impact company lets, rents over £100,000 per year or if the rental...",
    image:
      "/images/awaiting-images.jpg",
  },
  {
    date: "Wednesday, 11 March 2026",
    title: "Make Moving House Less Stressful",
    excerpt:
      "Moving house can be exciting, but it's no secret that it also comes with its fair share of stress. From juggling paperwork to coordinating utilities, every step can feel overwhelming if you're not...",
    image:
      "/images/awaiting-images.jpg",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="bg-neutral-100 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col">
              {/* Image */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="pt-6 flex flex-col flex-1">
                <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                  {post.date}
                </p>
                <h3 className="mt-2 text-lg font-bold uppercase text-neutral-700 leading-snug">
                  {post.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-6 border-t border-neutral-300 pt-4 flex justify-end">
                  
                    <a href="#"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-700 hover:text-neutral-900 transition-colors"
                  >
                    <span className="text-emerald-500">›</span>
                    READ MORE
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}