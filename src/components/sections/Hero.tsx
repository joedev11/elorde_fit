"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    tag: "Boxing & Muay Thai Programs",
    title: "Train Like\nYou Mean It",
    description:
      "Elite combat sports programming designed for fighters who demand excellence. Master the fundamentals and elevate your game.",
    cta: { label: "View Programs", href: "#programs" },
    // ctaSecondary: { label: "Shop Apparel", href: "/apparel" },
    image: "https://placehold.co/1600x900/111111/333333?text=Slide+1",
  },
  {
    id: 2,
    tag: "Upcoming Event",
    title: "The Flash Run\nMay 31, 2026",
    description:
      "Central Park, Filinvest City, Alabang. Join the 21K, 16K, 10K, 5K, or 3K.",
    cta: {
      label: "Register Now",
      href: "https://mnlcityrun.myruntime.com/register/elorde-the-flash-run-2026-run-like-a-champ?fbclid=IwY2xjawRS6WZleHRuA2FlbQIxMABicmlkETFibGY5UGZLc2RCSHQ4U3lJc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuichkPuWZVFGCta0iaaUXkZFyNIX7Ev_q5SoP3W1pGmTUQn_1vYq5rZsYwK_aem_1bAuTASoo-JsLm8rXB7_zw",
    },
    ctaSecondary: { label: "See Event Details", href: "#flash-run" },
    image: "/flash_run/flash_run_poster.jpg",
  },
  {
    id: 3,
    tag: "Bootcamp HIIT Classes",
    title: "High-Intensity\nBootcamp Training",
    description:
      "Push your limits with our intense HIIT bootcamp classes. Burn fat, build strength, and transform your fitness level.",
    cta: { label: "Book a Class", href: "/classes/bootcamp" },
    ctaSecondary: { label: "Learn More", href: "#bootcamp" },
    image: "/bootcamp/bootcamp_poster.jpg",
  },
  {
    id: 4,
    tag: "Hyrox Training",
    title: "Hyrox\nTraining Classes",
    description:
      "Prepare for your next competition with our specialized Hyrox training classes. Build endurance and power for race day.",
    cta: { label: "Book a Class", href: "/classes/hyrox" },
    ctaSecondary: { label: "Learn More", href: "#hyrox" },
    image: "/hyrox/hyrox_poster.jpg",
  },
  {
    id: 5,
    tag: "Group Runs",
    title: "Open Runs",
    description:
      "Join our community for open group runs. All paces welcome as we explore scenic routes together and build camaraderie.",
    cta: { label: "Stay Tuned", href: "#group-runs", disabled: true },
    ctaSecondary: { label: "Learn More", href: "#group-runs" },
    image: "/group_runs/group_run_poster.jpg",
  },
];

function CtaButton({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const isAnchor = href.startsWith("#");

  const handleClick = (e: React.MouseEvent) => {
    if (!isAnchor) return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  if (isAnchor) {
    return (
      <button onClick={handleClick} className={className}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning],
  );

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[85vh] min-h-[500px] bg-black overflow-hidden select-none">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-4">
          {slide.tag}
        </p>
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-none tracking-tight max-w-4xl whitespace-pre-line">
          {slide.title}
        </h1>
        <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl">
          {slide.description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          {slide.cta.disabled ? (
            <span className="bg-white/20 text-white/50 font-bold uppercase tracking-widest px-8 py-4 text-sm cursor-not-allowed select-none">
              {slide.cta.label}
            </span>
          ) : (
            <CtaButton
              href={slide.cta.href}
              className="bg-[#CC0000] text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors"
            >
              {slide.cta.label}
            </CtaButton>
          )}
          {slide.ctaSecondary && (
            <CtaButton
              href={slide.ctaSecondary.href}
              className="border border-white text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors"
            >
              {slide.ctaSecondary.label}
            </CtaButton>
          )}
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#CC0000] text-white w-11 h-11 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
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
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#CC0000] text-white w-11 h-11 flex items-center justify-center transition-colors"
        aria-label="Next slide"
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

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 transition-all duration-300 ${
              i === current
                ? "w-8 bg-[#CC0000]"
                : "w-4 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-6 z-20 text-white/40 text-xs font-bold tracking-widest">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
