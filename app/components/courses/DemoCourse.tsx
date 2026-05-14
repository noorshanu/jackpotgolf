"use client";

import { useState, FormEvent } from "react";

interface FormState {
  courseName: string;
  contactName: string;
  phone: string;
  email: string;
  par3Holes: string;
  dailyGolfers: string;
}

const INITIAL_STATE: FormState = {
  courseName: "",
  contactName: "",
  phone: "",
  email: "",
  par3Holes: "",
  dailyGolfers: "",
};

const FIELD_CLASS =
  "w-full rounded-xl bg-white border border-gray-200 px-5 py-4 text-base text-gray-500 placeholder:text-gray-500 outline-none transition-all duration-200 focus:border-gray-300 focus:bg-white/10 focus:ring-2 focus:ring-gray-300";

const LABEL_CLASS =
  "text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase";

export default function DemoCourse() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to backend / email service
    console.log("Demo request submitted:", form);
  };

  return (
    <section
      id="schedule-demo"
      className="relative w-full bg-[#f3f4f6] py-8 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Decorative background blurs */}
      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">  
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black uppercase leading-tight">
            SCHEDULE A DEMO
          </h2>
          <p className="text-base sm:text-lg font-medium text-gray-500 max-w-xl leading-relaxed">
            Tell us about your course. We&apos;ll reach out within 24 to 48 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative w-full rounded-4xl bg-linear-to-br from-[#1a3508] via-[#22550a] to-[#0f2008] backdrop-blur-sm p-6 sm:p-10 ring-1 ring-[#4fad11]/30 shadow-2xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* Two-column grid for form fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Course Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="courseName" className={LABEL_CLASS}>
                  Course Name
                </label>
                <input
                  id="courseName"
                  name="courseName"
                  type="text"
                  value={form.courseName}
                  onChange={handleChange}
                  placeholder="Pine Valley Golf Club"
                  required
                  className={FIELD_CLASS}
                />
              </div>

              {/* Contact Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contactName" className={LABEL_CLASS}>
                  Contact Name
                </label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  value={form.contactName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className={FIELD_CLASS}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={LABEL_CLASS}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={FIELD_CLASS}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={LABEL_CLASS}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@pinevalley.com"
                  required
                  className={FIELD_CLASS}
                />
              </div>

              {/* Number of Par 3 Holes */}
              <div className="flex flex-col gap-2">
                <label htmlFor="par3Holes" className={LABEL_CLASS}>
                  Number of Par 3 Holes
                </label>
                <input
                  id="par3Holes"
                  name="par3Holes"
                  type="number"
                  min={1}
                  max={18}
                  value={form.par3Holes}
                  onChange={handleChange}
                  placeholder="4"
                  className={FIELD_CLASS}
                />
              </div>

              {/* Average Daily Golfers */}
              <div className="flex flex-col gap-2">
                <label htmlFor="dailyGolfers" className={LABEL_CLASS}>
                  Average Daily Golfers
                </label>
                <input
                  id="dailyGolfers"
                  name="dailyGolfers"
                  type="number"
                  min={1}
                  value={form.dailyGolfers}
                  onChange={handleChange}
                  placeholder="80"
                  className={FIELD_CLASS}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#1a3508] px-8 py-5 text-lg sm:text-xl font-extrabold uppercase tracking-[0.15em] text-[#fff] shadow-[0_8px_24px_-8px_rgba(79,173,17,0.6)] transition-all duration-200 hover:shadow-[0_12px_32px_-8px_rgba(79,173,17,0.85)] hover:scale-[1.02] active:scale-[0.98]"
            >
              SCHEDULE DEMO
            </button>

            {/* Footer Note */}
                <p className="text-center text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
                No commitment required. We&apos;ll reach out to discuss your
                course and answer any questions within 24-48 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
