"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const runs = [
  {
    name: "Sunday Easy Run",
    distance: "5–10 km",
    pace: "Easy / Conversational",
    meetup: "BGC, Taguig",
    date: "Every Sunday, 5:30 AM",
  },
  {
    name: "Track Night",
    distance: "6 × 800m",
    pace: "Speed Work",
    meetup: "Rizal Memorial Track",
    date: "Every Tuesday, 6:00 PM",
  },
  {
    name: "Long Run Saturday",
    distance: "15–21 km",
    pace: "Marathon Pace",
    meetup: "Filinvest, Alabang",
    date: "Every Saturday, 5:00 AM",
  },
];

export default function GroupRuns() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 250);
    },
    [animating],
  );

  const prev = useCallback(
    () => goTo((current - 1 + runs.length) % runs.length),
    [current, goTo],
  );
  const next = useCallback(
    () => goTo((current + 1) % runs.length),
    [current, goTo],
  );

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const run = runs[current];

  return (
    <section id="group-runs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — content + carousel */}
          <div className="flex flex-col gap-8">
            {/* Poster image */}
            <div className="relative w-full h-124 overflow-hidden bg-black">
              <Image
                src="/group_runs/group_run_poster.jpg"
                alt="Elorde Open Runs"
                fill
                className="object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
            </div>

            {/* Header */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">
                  Community
                </p>
                <h2 className="text-5xl font-black uppercase leading-none tracking-tight text-black">
                  Open Runs
                </h2>
                <p className="mt-3 text-[#414142] max-w-md">
                  Join our community for open group runs. All paces welcome as
                  we explore scenic routes together.
                </p>
              </div>
              <Link
                href="/runs"
                className="hidden sm:block flex-shrink-0 border-2 border-black text-black font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors"
              >
                Join a Run
              </Link>
            </div>

            {/* Carousel card */}
            <div className="border border-black/10">
              {/* Card body */}
              <div
                className={`p-8 transition-opacity duration-250 ${animating ? "opacity-0" : "opacity-100"}`}
              >
                <p className="text-[#CC0000] text-xs font-bold uppercase tracking-widest mb-2">
                  {run.pace}
                </p>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-6">
                  {run.name}
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#CC0000] flex-shrink-0" />
                    <span className="text-sm font-bold text-black uppercase tracking-wide">
                      {run.distance}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-black/20 flex-shrink-0" />
                    <span className="text-sm text-[#414142]">{run.meetup}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-black/20 flex-shrink-0" />
                    <span className="text-sm text-[#414142]">{run.date}</span>
                  </div>
                </div>
                <Link
                  href="/runs"
                  className="inline-block mt-6 text-xs font-bold uppercase tracking-widest text-[#CC0000] border-b border-[#CC0000] pb-0.5 hover:text-black hover:border-black transition-colors"
                >
                  Join this Run →
                </Link>
              </div>

              {/* Carousel controls */}
              <div className="flex items-center justify-between border-t border-black/10 px-8 py-4">
                <div className="flex gap-2">
                  {runs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`h-1.5 transition-all duration-300 ${
                        i === current
                          ? "w-8 bg-[#CC0000]"
                          : "w-4 bg-black/20 hover:bg-black/40"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white hover:border-black transition-colors text-black"
                    aria-label="Previous"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white hover:border-black transition-colors text-black"
                    aria-label="Next"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <Link
              href="/runs"
              className="sm:hidden text-center border-2 border-black text-black font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors"
            >
              Join a Run
            </Link>
          </div>

          {/* Right — video */}
          <div className="relative aspect-[9/16] sm:aspect-video lg:aspect-[9/16] w-full overflow-hidden bg-black">
            <video
              src="/group_runs/sama_vid.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            {/* Fallback overlay if video doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 pointer-events-none">
              <div className="text-center px-6">
                <p className="text-white text-xl font-black uppercase tracking-tight">
                  Run with the Community
                </p>
                <p className="text-white/50 text-sm mt-2">
                  Lets show up, lace up, and run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
