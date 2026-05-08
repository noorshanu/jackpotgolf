export default function Insurance() {
  return (
    <section className="relative w-full bg-[#f3f4f6] py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="relative w-full rounded-4xl bg-white p-8 sm:p-12 md:p-14 shadow-[0_20px_60px_-20px_rgba(26,53,8,0.25)] ring-1 ring-gray-100 overflow-hidden">
          {/* Decorative gradient accents */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#E63946]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#4fad11]/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a3508] uppercase leading-tight">
              THE HIO INSURANCE INDUSTRY IS{" "}
              <span className="text-[#E63946]">BROKEN</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium text-gray-600 leading-relaxed max-w-2xl">
              Golf tournament organizers currently pay{" "}
              <span className="font-bold text-[#E63946]">
                $150-$500+ per event
              </span>{" "}
              for hole-in-one insurance from companies like American Hole &apos;n
              One and Odds On Promotions. You pay out of pocket. Your golfers
              get nothing extra. And if nobody aces it, that money is gone.
            </p>

            {/* Divider */}
            <div className="mt-10 mb-8 h-px w-full max-w-md bg-linear-to-r from-transparent via-[#4fad11]/40 to-transparent" />

            {/* Highlight Statement */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1a3508] uppercase leading-tight">
              WE FLIP THIS —{" "}
              <span className="text-[#4fad11]">
                YOU EARN INSTEAD OF PAYING
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
