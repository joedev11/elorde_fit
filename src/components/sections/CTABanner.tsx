import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative w-full h-[400px] bg-black overflow-hidden">
      <Image
        src="https://placehold.co/1600x400/0a0a0a/222222?text=CTA+Background"
        alt="CTA background"
        fill
        className="object-cover opacity-40"
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.3em] mb-3">
          Limited Time
        </p>
        <h2 className="text-white text-4xl sm:text-5xl font-black uppercase tracking-tight">
          Get 20% Off Your First Order
        </h2>
        <p className="mt-4 text-white/60 text-base max-w-md">
          Sign up for our newsletter and receive an exclusive discount on your first purchase.
        </p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000]"
          />
          <button
            type="submit"
            className="bg-[#CC0000] text-white font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-white hover:text-black transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-white/30 text-xs">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
