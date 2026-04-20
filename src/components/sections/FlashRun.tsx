"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["21K", "16K", "10K", "5K", "3K"];

const gallery = [
  {
    src: "/flash_run/flash_run_1.jpg",
    alt: "Flash Run Photo 1",
  },
  {
    src: "/flash_run/flash_run_2.jpg",
    alt: "Flash Run Photo 2",
  },
  {
    src: "/flash_run/flash_run_3.jpg",
    alt: "Flash Run Photo 3",
  },
  {
    src: "/flash_run/flash_run_4.jpg",
    alt: "Flash Run Photo 4",
  },
  {
    src: "/flash_run/flash_run_5.jpg",
    alt: "Flash Run Photo 5",
  },
];

export default function FlashRun() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox((i) =>
      i === null ? null : (i - 1 + gallery.length) % gallery.length,
    );
  }, []);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % gallery.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="flash-run"
      className="bg-black text-white py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">
              Upcoming Event
            </p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase leading-none tracking-tight">
              The Flash Run
            </h2>
            <p className="text-white/50 text-lg font-semibold uppercase tracking-widest mt-2">
              Run Like a Champ
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://mnlcityrun.myruntime.com/register/elorde-the-flash-run-2026-run-like-a-champ?fbclid=IwY2xjawRS6WZleHRuA2FlbQIxMABicmlkETFibGY5UGZLc2RCSHQ4U3lJc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuichkPuWZVFGCta0iaaUXkZFyNIX7Ev_q5SoP3W1pGmTUQn_1vYq5rZsYwK_aem_1bAuTASoo-JsLm8rXB7_zw"
              className="bg-[#CC0000] text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors text-center"
            >
              Register Now
            </Link>
            <Link
              href="/events"
              className="border border-white/30 text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:border-white transition-colors text-center"
            >
              All Events
            </Link>
          </div>
        </div>

        {/* Event Details Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 mb-12">
          <div className="bg-black px-6 py-5">
            <p className="text-[#CC0000] text-xs font-bold uppercase tracking-widest mb-1">
              Date
            </p>
            <p className="text-white font-black text-lg uppercase">
              May 31, 2026
            </p>
            <p className="text-white/50 text-sm">Sunday</p>
          </div>
          <div className="bg-black px-6 py-5">
            <p className="text-[#CC0000] text-xs font-bold uppercase tracking-widest mb-1">
              Location
            </p>
            <p className="text-white font-black text-lg uppercase">
              Central Park
            </p>
            <p className="text-white/50 text-sm">Filinvest City, Alabang</p>
          </div>
          <div className="bg-black px-6 py-5">
            <p className="text-[#CC0000] text-xs font-bold uppercase tracking-widest mb-1">
              Categories
            </p>
            <div className="flex gap-2 flex-wrap mt-1">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-[#CC0000] text-white text-xs font-black px-3 py-1 uppercase tracking-wide"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-3 h-[440px] sm:h-[600px]">
          {/* Large featured image */}
          <button
            onClick={() => open(0)}
            className="relative col-span-2 row-span-2 overflow-hidden bg-[#1a0000] group cursor-zoom-in text-left"
          >
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-white/50 text-xs uppercase tracking-widest">
                Elorde × MNL City Run
              </span>
            </div>
            <div className="absolute top-3 right-3 bg-black/50 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>
            </div>
          </button>

          {/* Smaller images */}
          {gallery.slice(1).map((photo, i) => (
            <button
              key={i}
              onClick={() => open(i + 1)}
              className="relative overflow-hidden bg-[#1a0000] group cursor-zoom-in"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-white/40 text-sm max-w-md text-center sm:text-left">
            Presented by{" "}
            <span className="text-white font-semibold">Elorde</span> ×{" "}
            <span className="text-white font-semibold">MNL City Run</span>. All
            fitness levels welcome.
          </p>
          <Link
            href="/events/flash-run"
            className="text-sm font-bold uppercase tracking-widest text-[#CC0000] border-b border-[#CC0000] pb-0.5 hover:text-white hover:border-white transition-colors whitespace-nowrap"
          >
            View Full Event Details →
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 bg-white/10 hover:bg-[#CC0000] text-white w-10 h-10 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#CC0000] text-white w-11 h-11 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#CC0000] text-white w-11 h-11 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs font-bold tracking-widest">
            {String(lightbox + 1).padStart(2, "0")} /{" "}
            {String(gallery.length).padStart(2, "0")}
          </div>

          {/* Dot strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 mt-6">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(i);
                }}
                className={`h-1.5 transition-all duration-300 ${
                  i === lightbox
                    ? "w-8 bg-[#CC0000]"
                    : "w-4 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
