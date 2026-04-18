import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Training Programs",
    description: "Structured programming for all levels",
    href: "/programs",
    image: "https://placehold.co/600x700/1a1a1a/444444?text=Programs",
  },
  {
    title: "Apparel",
    description: "Performance wear built to move",
    href: "/apparel",
    image: "https://placehold.co/600x700/222222/555555?text=Apparel",
  },
  {
    title: "E-Books",
    description: "Knowledge to fuel your gains",
    href: "/ebooks",
    image: "https://placehold.co/600x700/1a1a1a/444444?text=E-Books",
  },
  {
    title: "Nutrition",
    description: "Supplements & meal plans",
    href: "/nutrition",
    image: "https://placehold.co/600x700/222222/555555?text=Nutrition",
  },
];

export default function Collections() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.3em] mb-2">Browse</p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((col) => (
            <Link
              key={col.href}
              href={col.href}
              className="group relative overflow-hidden bg-black"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
                <h3 className="text-white text-lg font-black uppercase tracking-wide">{col.title}</h3>
                <p className="text-white/60 text-sm mt-1">{col.description}</p>
                <span className="mt-3 text-[#CC0000] text-xs font-bold uppercase tracking-widest border-b border-[#CC0000] pb-0.5">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
