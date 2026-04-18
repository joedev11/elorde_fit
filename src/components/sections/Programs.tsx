import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    name: "Boxing Fundamentals",
    level: "Beginner",
    sessions: "3x / week",
    image: "https://placehold.co/600x700/1a0000/3a0000?text=Boxing+Fundamentals",
    href: "/programs/boxing-fundamentals",
  },
  {
    name: "Advanced Muay Thai",
    level: "Intermediate–Advanced",
    sessions: "4x / week",
    image: "https://placehold.co/600x700/0d0d0d/2a2a2a?text=Muay+Thai",
    href: "/programs/advanced-muay-thai",
  },
  {
    name: "Fight Camp Prep",
    level: "All Levels",
    sessions: "5x / week",
    image: "https://placehold.co/600x700/1a0000/3a0000?text=Fight+Camp",
    href: "/programs/fight-camp-prep",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">Training</p>
            <h2 className="text-5xl font-black uppercase leading-none tracking-tight text-black">
              Boxing &<br />Muay Thai Programs
            </h2>
            <p className="mt-3 text-[#414142] max-w-lg">
              Elite combat sports programming designed for fighters who demand excellence. Master the fundamentals and elevate your game.
            </p>
          </div>
          <Link
            href="/programs"
            className="self-start lg:self-end bg-black text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-[#CC0000] transition-colors whitespace-nowrap"
          >
            View All Programs
          </Link>
        </div>

        {/* Program Cards — horizontal scroll on mobile, grid on sm+ */}
        <div className="flex sm:grid sm:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {programs.map((program) => (
            <Link
              key={program.name}
              href={program.href}
              className="group flex flex-col bg-white border border-black/5 overflow-hidden flex-shrink-0 w-[75vw] sm:w-auto snap-start"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-black uppercase tracking-wide text-black">{program.name}</h3>
                <div className="flex items-center justify-between text-xs text-[#414142] uppercase tracking-wider">
                  <span>{program.level}</span>
                  <span className="text-[#CC0000] font-bold">{program.sessions}</span>
                </div>
                <span className="mt-2 text-xs font-bold uppercase tracking-widest text-black border-b border-black/20 pb-0.5 self-start group-hover:text-[#CC0000] group-hover:border-[#CC0000] transition-colors">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
