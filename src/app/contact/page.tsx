"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // TODO: wire up to a form service (e.g. Resend, Formspree, EmailJS)
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-black py-20 px-4 text-center">
        <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-4">
          Get In Touch
        </p>
        <h1 className="text-white text-5xl sm:text-6xl font-black uppercase leading-none tracking-tight">
          Contact Us
        </h1>
        <p className="mt-4 text-white/50 text-base max-w-md mx-auto">
          Have a question or want to work with us? We&apos;d love to hear from
          you.
        </p>
      </div>

      {/* Main Content */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Form */}
            <div>
              {submitted ? (
                <div className="border-l-4 border-[#CC0000] pl-6 py-4">
                  <p className="text-black text-xl font-black uppercase tracking-tight">
                    Message Sent
                  </p>
                  <p className="mt-2 text-[#414142] text-sm">
                    Thanks for reaching out. We&apos;ll get back to you as soon
                    as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-xs font-bold uppercase tracking-widest text-[#CC0000] border-b border-[#CC0000] pb-0.5 hover:text-black hover:border-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-black">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-black">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-black">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="border border-black/15 bg-white px-4 py-3 text-sm text-black focus:outline-none focus:border-[#CC0000] transition-colors appearance-none"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership & Classes</option>
                      <option value="events">Events & Group Runs</option>
                      <option value="apparel">Apparel & Orders</option>
                      <option value="partnership">
                        Partnership & Sponsorship
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-black">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className="border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-[#CC0000] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#CC0000] text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-black transition-colors w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right — Map + Contact Info */}
            <div className="flex flex-col gap-10 lg:pl-8 lg:border-l border-black/10">
              {/* Map */}
              <div className="w-full h-64 overflow-hidden border border-black/10">
                <iframe
                  title="Elorde Fit Location"
                  src="https://www.google.com/maps?q=Madison+Galeries,+Cupang,+Muntinlupa+City,+Metro+Manila,+Philippines&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div>
                <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">
                  Location
                </p>
                <p className="text-black font-black uppercase text-xl tracking-tight">
                  Elorde Fit
                </p>
                <p className="mt-2 text-[#414142] text-sm leading-relaxed">
                  3rd Floor, Madison Galeries, Cupang, Muntinlupa City
                  <br />
                  Metro Manila, Philippines
                </p>
              </div>

              <div>
                <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">
                  Phone
                </p>
                <a
                  href="tel:+63XXXXXXXXXX"
                  className="text-black text-sm font-bold hover:text-[#CC0000] transition-colors"
                >
                  +63 917 134 0320
                </a>
              </div>

              <div>
                <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">
                  Email
                </p>
                <a
                  href="mailto:hello@elordefit.com"
                  className="text-black text-sm font-bold hover:text-[#CC0000] transition-colors"
                >
                  elordefit@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-4">
                  Follow Us
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://instagram.com/elordefit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-bold text-black hover:text-[#CC0000] transition-colors group"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                    @elordefit
                  </a>
                  <a
                    href="https://tiktok.com/@elordefit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-bold text-black hover:text-[#CC0000] transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
                    </svg>
                    @garrenelorde
                  </a>
                  <a
                    href="https://facebook.com/elordefit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-bold text-black hover:text-[#CC0000] transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                    </svg>
                    Elorde Alabang
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.35em] mb-3">
                  Hours
                </p>
                <div className="flex flex-col gap-1 text-sm text-[#414142]">
                  <div className="flex justify-between max-w-xs">
                    <span>Monday – Sunday</span>
                    <span className="font-bold text-black">
                      8:00 AM – 9:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
