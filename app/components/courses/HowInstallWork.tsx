const STEPS = [
  {
    num: "01",
    title: "CONTACT US",
    desc: "Schedule a site survey with our partnerships team.",
  },
  {
    num: "02",
    title: "SITE SURVEY",
    desc: "We assess your par 3 holes for optimal camera placement and connectivity.",
  },
  {
    num: "03",
    title: "INSTALLATION",
    desc: "Our team installs AI-powered cameras at each hole along with all processing and connectivity equipment.",
  },
  {
    num: "04",
    title: "CALIBRATION",
    desc: "AI calibrated to your specific holes, distances, and tee boxes for pinpoint accuracy.",
  },
  {
    num: "05",
    title: "GO LIVE",
    desc: "Contests activate and revenue starts flowing. We monitor everything 24/7.",
    highlight: true,
  },
] as const;

export default function HowInstallWork() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-100 py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#4fad11]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#a3e635]/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black uppercase leading-tight">
            HOW INSTALLATION WORKS
          </h2>
          <p className="text-base sm:text-lg font-medium text-gray-500 max-w-xl">
            From first contact to live contests in as little as two weeks.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative pt-4">
          {/* Connector line */}
          <div
            className="absolute left-[10%] right-[10%] top-9 h-0.5 bg-linear-to-r from-[#4fad11]/20 via-[#4fad11]/50 to-[#4fad11]/20"
            aria-hidden
          />

          <div className="grid grid-cols-5 gap-4">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="relative flex flex-col items-center text-center px-1"
              >
                <div
                  className={`relative z-10 mb-6 flex h-18 w-18 shrink-0 items-center justify-center rounded-full text-lg font-extrabold tracking-tight transition-shadow duration-300 ${
                    "highlight" in step && step.highlight
                      ? "bg-[#1a3508] text-black     shadow-[0_0_28px_rgba(79,173,17,0.65)] ring-2 ring-[#a3e635]/60"
                      : "border-2 border-[#a3e635]/80 bg-[#0f2008]/80 text-[#a3e635] backdrop-blur-sm"
                  }`}
                >
                  {step.num}
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="lg:hidden relative pl-2">
          <div
            className="absolute left-[1.85rem] top-3 bottom-3 w-0.5 bg-linear-to-b from-[#4fad11]/30 via-[#4fad11]/50 to-[#4fad11]"
            aria-hidden
          />

          <ul className="flex flex-col gap-10">
            {STEPS.map((step) => (
              <li key={step.num} className="relative flex gap-5">
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ${
                    "highlight" in step && step.highlight
                      ? "bg-[#4fad11] text-[#1a3508] shadow-[0_0_20px_rgba(79,173,17,0.6)] ring-2 ring-[#a3e635]/50"
                      : "border-2 border-[#a3e635]/80 bg-[#0f2008]/90 text-[#a3e635]"
                  }`}
                >
                  {step.num}
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-base font-extrabold uppercase tracking-wide text-black mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
