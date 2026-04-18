import Image from "next/image";
import Link from "next/link";

const schedule = [
  {
    day: "Monday",
    time: "6:00 PM",
    type: "HIIT - Legs Focused with Coach Garren",
  },
  {
    day: "Tuesday",
    time: "5:30 & 7:00 PM",
    type: "HIIT - Compromised Cardio with Coach Karl",
  },
  {
    day: "Wednesday",
    time: "6:00 PM",
    type: "HIIT - Upper Body with Coach Garren",
  },
  {
    day: "Thursday",
    time: "5:30 & 7:00 PM",
    type: "HIIT - Compromised Cardio with Coach Karl",
  },
  { day: "Friday", time: "6:00 PM", type: "Full Body Blast with Coach Garren" },
];

export default function Bootcamp() {
  return (
    <section id="bootcamp" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden bg-[#1a0000] order-2 lg:order-1">
            <Image
              src="/bootcamp/bootcamp_poster.jpg"
              alt="Bootcamp HIIT Classes"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#CC0000] px-4 py-3 inline-block">
                <p className="text-white text-xs font-black uppercase tracking-widest">
                  Now Enrolling
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div>
              <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">
                Classes
              </p>
              <h2 className="text-5xl font-black uppercase leading-none tracking-tight text-black">
                Bootcamp
                <br />
                HIIT Training
              </h2>
              <p className="mt-4 text-[#414142] leading-relaxed">
                Push your limits with our intense HIIT bootcamp classes. Burn
                fat, build strength, and transform your fitness level with
                expert-led sessions designed for all fitness levels.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Class Size", value: "Max 20 Pax" },
                { label: "Duration", value: "60-90 Minutes" },
                { label: "Level", value: "All Levels" },
                { label: "Equipment", value: "Provided" },
              ].map((f) => (
                <div key={f.label} className="border border-black/10 px-4 py-3">
                  <p className="text-[#CC0000] text-xs font-bold uppercase tracking-widest">
                    {f.label}
                  </p>
                  <p className="text-black font-black text-sm uppercase mt-0.5">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Schedule */}
            <div>
              {/* Header row */}
              <div className="flex items-center pb-2 border-b border-black/10 mb-1 text-black/30 text-xs font-bold uppercase tracking-widest">
                <span className="w-32 flex-shrink-0">Day</span>
                <span className="w-28 flex-shrink-0">Time</span>
                <span className="flex-1">Class</span>
              </div>
              <div className="flex flex-col">
                {schedule.map((s) => (
                  <div
                    key={s.day + s.time}
                    className="flex items-center py-3 border-b border-black/10"
                  >
                    <div className="flex items-center gap-3 w-32 flex-shrink-0">
                      <span className="w-2 h-2 bg-[#CC0000] flex-shrink-0" />
                      <span className="text-sm font-black uppercase tracking-wide text-black">
                        {s.day}
                      </span>
                    </div>
                    <span className="w-28 flex-shrink-0 text-[#CC0000] text-xs font-bold uppercase tracking-wider">
                      {s.time}
                    </span>
                    <span className="flex-1 text-black/60 text-xs leading-tight">
                      {s.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/classes/bootcamp"
              className="self-start bg-[#CC0000] text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-black hover:text-white transition-colors"
            >
              Book a Class
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
