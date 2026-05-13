"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function GetInTouch() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to backend / email service
    console.log("Form submitted:", form);
  };

  return (
    <section className="relative w-full  py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
   
      <div className="relative mx-auto max-w-2xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black₹ uppercase leading-tight">
         Schedule a Demo
          </h2>
          <p className="text-base sm:text-lg font-medium text-gray-500 max-w-xl leading-relaxed">
            Fill out the form below and our team will reach out to discuss how
            your course can earn revenue instead of paying for hole-in-one
            insurance.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative w-full rounded-4xl bg-linear-to-br from-[#1a3508] via-[#22550a] to-[#0f2008] backdrop-blur-sm p-6 sm:p-10 ring-1 ring-[#4fad11]/30 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#a3e635] uppercase"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
                className="w-full rounded-xl bg-white/5 border border-[#4fad11]/30 px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-[#a3e635] focus:bg-white/10 focus:ring-2 focus:ring-[#4fad11]/30"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="company"
                className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#a3e635] uppercase"
              >
                Company / Organization
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Acme Golf Events"
                className="w-full rounded-xl bg-white/5 border border-[#4fad11]/30 px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-[#a3e635] focus:bg-white/10 focus:ring-2 focus:ring-[#4fad11]/30"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#a3e635] uppercase"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full rounded-xl bg-white/5 border border-[#4fad11]/30 px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-[#a3e635] focus:bg-white/10 focus:ring-2 focus:ring-[#4fad11]/30"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#a3e635] uppercase"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full rounded-xl bg-white/5 border border-[#4fad11]/30 px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-[#a3e635] focus:bg-white/10 focus:ring-2 focus:ring-[#4fad11]/30"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#a3e635] uppercase"
              >
                Message / Notes
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your tournament -- number of events per year, typical player count, any questions, etc."
                rows={5}
                className="w-full rounded-xl bg-white/5 border border-[#4fad11]/30 px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-[#a3e635] focus:bg-white/10 focus:ring-2 focus:ring-[#4fad11]/30 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#1a3508] px-8 py-5 text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white shadow-[0_8px_24px_-8px_rgba(79,173,17,0.6)] transition-all duration-200 hover:shadow-[0_12px_32px_-8px_rgba(79,173,17,0.8)] hover:scale-[1.02] active:scale-[0.98]"
            >
              SCHEDULE A DEMO
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
          No commitment required. We&apos;ll reach out to discuss your
          course and answer any questions within 24-48 hours.
          </p>
          {/* <p className="mt-1 text-sm sm:text-base text-gray-500 font-medium">
            Or email us directly at{" "}
            <a
              href="mailto:support@holeinone-jackpot.com"
              className="font-bold text-[#a3e635] hover:text-[#bef264] underline underline-offset-4 transition-colors"
            >
              support@holeinone-jackpot.com
            </a>
          </p> */}
        </div>
      </div>
    </section>
  );
}
