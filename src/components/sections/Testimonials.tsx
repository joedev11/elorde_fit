const testimonials = [
  {
    id: 1,
    name: "Clarie A.",
    rating: 5,
    text: "The 12-week strength program completely transformed my training. I hit PRs I never thought were possible. The programming is dialed in.",
    tag: "Programs",
  },
  {
    id: 2,
    name: "Kiko V.",
    rating: 5,
    text: "The bootcamp sessions are no joke — every class pushes you just enough past your limit. I've lost 8 lbs in 6 weeks and I actually look forward to waking up early now.",
    tag: "Bootcamp Classes",
  },
  {
    id: 3,
    name: "John D.",
    rating: 5,
    text: "Signed up for Hyrox prep not knowing what I was getting into. Coach broke everything down, fixed my sled push technique, and I finished my first race 12 minutes faster than I expected.",
    tag: "Hyrox Training",
  },
  {
    id: 4,
    name: "Hex M.",
    rating: 5,
    text: "Best investment I've made in my fitness. The programming is thoughtful — it's not just random WODs. You can feel the structure building week over week.",
    tag: "Programs",
  },
  {
    id: 5,
    name: "Luigi P.",
    rating: 4,
    text: "Great community and solid coaching. The accountability check-ins kept me on track even during busy weeks at work. Would love to see more evening class slots added.",
    tag: "General",
  },
  {
    id: 6,
    name: "Aaron M.",
    rating: 4,
    text: "The group runs have been a highlight for me. Strong pace, good energy, and the coach always makes sure no one gets left behind. I've shaved almost 2 minutes off my 5K.",
    tag: "General",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-[#CC0000]" : "text-black/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof testimonials)[0] }) {
  return (
    <div className="flex flex-col gap-4 bg-[#FAFAFA] border border-black/5 p-6 w-80 flex-shrink-0">
      <StarRating rating={review.rating} />
      <p className="text-sm text-[#414142] leading-relaxed">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-black/10">
        <p className="text-sm font-bold text-black uppercase tracking-wide">
          {review.name}
        </p>
        <span className="text-xs text-[#CC0000] font-semibold uppercase tracking-wide">
          {review.tag}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.3em] mb-2">
            Reviews
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-black">
            What Athletes Say
          </h2>
        </div>
      </div>

      {/* Marquee belt */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee w-max">
          {[...testimonials, ...testimonials].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
