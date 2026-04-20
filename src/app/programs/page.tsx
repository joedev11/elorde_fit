import Link from "next/link";

const programs = [
  {
    tag: "Boxing / Muay Thai",
    title: "Boxing & Muay Thai",
    description:
      "Train in the sweet science and the art of eight limbs. Our coaches guide you through proper technique, combinations, pad work, and sparring — whether you're a complete beginner or prepping for competition.",
    rates: [
      { label: "Walk-in", price: "₱600", note: null },
      { label: "Member", price: "₱499", note: null },
      {
        label: "Gold Package",
        price: "₱4,000",
        note: "10 Sessions · Valid for 45 Days",
      },
      {
        label: "Champion Package",
        price: "₱7,900",
        note: "21 Sessions · Valid for 60 Days",
      },
    ],
  },
  {
    tag: "Group Training",
    title: "Boot Camp",
    description:
      "High-intensity group training designed to push your limits. Burn fat, build functional strength, and train alongside a community that holds each other accountable.",
    rates: [
      {
        label: "Boot Camp — High-Intensity Group Training",
        price: "₱499",
        note: null,
      },
      {
        label: "Comprised Cardio with Coach Karl",
        price: "₱499",
        note: null,
      },
    ],
  },
];

const memberBenefits = [
  "Monthly Membership Deals",
  "Priority Access to Promos and Events",
  "Exclusive Sparring Sessions",
  "Free Use of Boxing Gloves",
  "Represent Elorde Fit in the UKC",
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-black py-20 px-4 text-center">
        <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-4">
          Train with Us
        </p>
        <h1 className="text-white text-5xl sm:text-6xl font-black uppercase leading-none tracking-tight">
          Programs &<br />Rates
        </h1>
        <p className="mt-4 text-white/50 text-base max-w-md mx-auto">
          Combat sports and group fitness classes designed for all levels. Show
          up, put in the work.
        </p>
      </div>

      {/* Annual Membership Banner */}
      <div className="bg-[#CC0000] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest">
              Annual Membership
            </p>
            <p className="text-white text-lg font-black uppercase tracking-tight mt-0.5">
              Inclusive of Gym Use
            </p>
          </div>
          <div className="text-white text-4xl font-black">₱2,499</div>
          <Link
            href="/contact"
            className="bg-white text-black font-black uppercase tracking-widest px-8 py-3 text-sm hover:bg-black hover:text-white transition-colors whitespace-nowrap"
          >
            Get Membership
          </Link>
        </div>
      </div>

      {/* Programs */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {programs.map((program) => (
            <div
              key={program.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-black/10"
            >
              {/* Left — Description */}
              <div className="bg-black p-10 flex flex-col justify-between">
                <div>
                  <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-4">
                    {program.tag}
                  </p>
                  <h2 className="text-white text-4xl font-black uppercase leading-none tracking-tight">
                    {program.title}
                  </h2>
                  <p className="mt-5 text-white/60 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-10 self-start text-xs font-bold uppercase tracking-widest text-[#CC0000] border-b border-[#CC0000] pb-0.5 hover:text-white hover:border-white transition-colors"
                >
                  Inquire About This Program →
                </Link>
              </div>

              {/* Right — Rates */}
              <div className="flex flex-col divide-y divide-black/10 border-t lg:border-t-0 lg:border-l border-black/10">
                <div className="px-6 py-3 bg-black/5">
                  <span className="text-xs font-black uppercase tracking-widest text-black/40">
                    Rates
                  </span>
                </div>
                {program.rates.map((rate, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-6 py-5 bg-white hover:bg-black/[0.02] transition-colors"
                  >
                    <p className="text-sm font-black uppercase tracking-wide text-black">
                      {rate.label}
                    </p>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-xl font-black text-black">
                        {rate.price}
                      </p>
                      {rate.note && (
                        <p className="text-xs text-[#414142] mt-0.5">
                          {rate.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Member Benefits */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-4">
                Why Become a Member
              </p>
              <h2 className="text-white text-4xl font-black uppercase leading-none tracking-tight">
                Member Benefits
              </h2>
              <p className="mt-4 text-white/50 text-sm">
                An annual membership does more than give you gym access — it
                puts you inside the Elorde Fit community.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {memberBenefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#CC0000] flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#CC0000] py-16 px-4 text-center">
        <h2 className="text-white text-4xl font-black uppercase leading-none tracking-tight">
          Ready to Start?
        </h2>
        <p className="mt-3 text-white/70 text-sm max-w-sm mx-auto">
          Drop us a message and we&apos;ll help you find the right program.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-white text-black font-black uppercase tracking-widest px-10 py-4 text-sm hover:bg-black hover:text-white transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
