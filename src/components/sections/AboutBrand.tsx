import Image from "next/image";
import Link from "next/link";

export default function AboutBrand() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden bg-[#111]">
            <Image
              src="/about_image.jpg"
              alt="About Elorde Fit"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.3em] mb-3">
                Our Story
              </p>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                Built From
                <br />
                the Ground Up
              </h2>
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              Elorde Fit was born in the gym — not in a boardroom. We&apos;re
              athletes who got tired of brands that talk the talk but don&apos;t
              walk the walk. Everything we make is designed with real training
              in mind.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              From our battle-tested programming to our performance apparel,
              every product is a direct result of what actually works — tested
              by us, refined for you.
            </p>
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-white/10">
              {[
                { value: "10K+", label: "Athletes" },
                { value: "50+", label: "Programs" },
                { value: "343+", label: "Store Locations" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="self-start bg-white text-black font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-[#CC0000] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
