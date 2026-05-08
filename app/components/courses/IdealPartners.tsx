const PARTNER_TYPES = [
  "Public courses",
  "Private clubs",
  "Resorts",
  "Municipal courses",
  "Tournament venues",
];

export default function IdealPartners() {
  return (
    <section className="relative w-full bg-[#f3f4f6] py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative w-full rounded-4xl bg-white p-8 sm:p-12 md:p-14 shadow-[0_20px_60px_-20px_rgba(26,53,8,0.25)] ring-1 ring-gray-100 overflow-hidden">
          {/* Decorative gradient accents */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#4fad11]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#1a3508]/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a3508] uppercase leading-tight">
              <span className="text-[#4fad11]">IDEAL</span> PARTNER COURSES
            </h2>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg md:text-xl font-medium text-gray-600 leading-relaxed max-w-2xl">
              Courses like{" "}
              <span className="font-bold text-[#1a3508]">TPC Sawgrass</span>,{" "}
              <span className="font-bold text-[#1a3508]">Pebble Beach</span>,
              and{" "}
              <span className="font-bold text-[#1a3508]">TPC Scottsdale</span>{" "}
              would be ideal partners — but we work with courses of all sizes.
              If you have par 3 holes and golfers, you&apos;re a fit.
            </p>

            {/* Pills */}
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {PARTNER_TYPES.map((type) => (
                <li key={type}>
                  <span className="inline-flex items-center rounded-full bg-[#4fad11]/10 ring-1 ring-[#4fad11]/30 px-5 py-2.5 text-sm sm:text-base font-semibold text-[#1a3508] transition-all duration-200 hover:bg-[#4fad11]/20 hover:ring-[#4fad11]/60">
                    {type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
