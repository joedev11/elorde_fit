import Link from "next/link";

const boxingRates = [
  {
    label: "Walk-in",
    price: "₱600",
    note: null,
  },
  {
    label: "Member",
    price: "₱499",
    note: null,
  },
  {
    label: "Gold Package",
    price: "₱4,000",
    note: "10 Sessions, Valid for 45 Days",
  },
  {
    label: "Champion Package",
    price: "₱7,900",
    note: "21 Sessions, Valid for 60 Days",
  },
  {
    label: "Boot Camp",
    sublabel: "High-Intensity Group Training",
    price: "₱499",
    note: null,
  },
  {
    label: "Comprised Cardio",
    sublabel: "with Coach Karl",
    price: "₱499",
    note: null,
  },
];

const memberBenefits = [
  "Monthly Membership Deals",
  "Priority Access to Promos and Events",
  "Exclusive Sparring Sessions",
  "Free Use of Boxing Gloves",
  "Represent Elorde Fit in the UKC",
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">Training</p>
          <h2 className="text-5xl font-black uppercase leading-none tracking-tight text-black">
            Boxing &<br />Muay Thai Programs
          </h2>
          <p className="mt-3 text-[#414142] max-w-lg">
            Elite combat sports programming designed for fighters who demand excellence. Master the fundamentals and elevate your game.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-black/10">

          {/* Left — Pricing Table */}
          <div className="lg:col-span-2">
            {/* Annual Membership */}
            <div className="flex items-center justify-between px-6 py-5 bg-black text-white">
              <span className="text-sm font-black uppercase tracking-widest">Annual Membership</span>
              <div className="text-right">
                <span className="text-2xl font-black text-[#CC0000]">₱2,499</span>
                <span className="ml-2 text-xs text-white/50">Inclusive of Gym Use</span>
              </div>
            </div>

            {/* Boxing / Muay Thai label */}
            <div className="px-6 py-3 bg-black/5 border-t border-black/10">
              <span className="text-xs font-black uppercase tracking-widest text-black/50">Boxing / Muay Thai</span>
            </div>

            {/* Rate rows */}
            {boxingRates.map((rate, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-5 border-t border-black/10 hover:bg-black/[0.02] transition-colors"
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-black">{rate.label}</p>
                  {rate.sublabel && (
                    <p className="text-xs text-[#414142] mt-0.5">{rate.sublabel}</p>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-black">{rate.price}</span>
                  {rate.note && (
                    <p className="text-xs text-[#414142] mt-0.5">{rate.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right — Member Benefits */}
          <div className="bg-[#CC0000] text-white flex flex-col justify-between p-8 lg:border-l border-t lg:border-t-0 border-black/10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-white/60 mb-4">
                Member Benefits
              </p>
              <ul className="flex flex-col gap-4">
                {memberBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium leading-snug">
                    <svg className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="mt-10 block text-center bg-white text-black font-black uppercase tracking-widest px-6 py-4 text-sm hover:bg-black hover:text-white transition-colors"
            >
              Inquire Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
