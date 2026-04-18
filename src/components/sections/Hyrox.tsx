import Image from "next/image";
import Link from "next/link";

const workStations = [
  { number: "01", name: "SkiErg", reps: "1,000m" },
  { number: "02", name: "Sled Push", reps: "50m" },
  { number: "03", name: "Sled Pull", reps: "50m" },
  { number: "04", name: "Burpee Broad Jumps", reps: "80m" },
  { number: "05", name: "Rowing", reps: "1,000m" },
  { number: "06", name: "Farmer's Carry", reps: "200m" },
  { number: "07", name: "Sandbag Lunges", reps: "100m" },
  { number: "08", name: "Wall Balls", reps: "100 reps" },
];

export default function Hyrox() {
  return (
    <section id="hyrox" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">Competition Training</p>
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-none tracking-tight text-white">
            Hyrox Training
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Prepare for your next competition with our specialized Hyrox training classes. Build endurance and power for race day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Workstation List */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">The 8 Workout Stations</p>
            <div className="flex flex-col gap-0">
              {workStations.map((ws) => (
                <div
                  key={ws.number}
                  className="flex items-center gap-4 py-4 border-b border-white/10 group"
                >
                  <span className="text-[#CC0000] font-black text-sm w-6 flex-shrink-0">{ws.number}</span>
                  <span className="font-black uppercase tracking-wide text-white flex-1">{ws.name}</span>
                  <span className="text-sm text-white/50 font-semibold">{ws.reps}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/30 uppercase tracking-wider">
              Each station is preceded by a 1km run.
            </p>
          </div>

          {/* Image + CTA */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-video overflow-hidden bg-black">
              <Image
                src="/hyrox/hyrox_poster.jpg"
                alt="Hyrox Training"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white/60 text-xs uppercase tracking-widest">Elorde Hyrox Training Program</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px bg-white/10">
              {[
                { label: "Duration", value: "90 Min" },
                { label: "Level", value: "Intermediate+" },
                { label: "Goal", value: "Race Ready" },
              ].map((s) => (
                <div key={s.label} className="bg-[#111] px-4 py-4 text-center">
                  <p className="text-[#CC0000] text-xs font-bold uppercase tracking-widest">{s.label}</p>
                  <p className="text-white font-black text-sm uppercase mt-1">{s.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="/classes/hyrox"
              className="bg-white text-black font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-[#CC0000] hover:text-white transition-colors text-center"
            >
              Book a Hyrox Class
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
