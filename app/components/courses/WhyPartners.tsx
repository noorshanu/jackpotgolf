import { FaCamera, FaDollarSign, FaVideo, FaCog } from "react-icons/fa";

const FEATURES = [
  {
    icon: FaCamera,
    title: "ZERO COST INSTALLATION",
    desc: "We install everything: AI-powered cameras, processing equipment, and dedicated connectivity at every hole. You pay nothing.",
  },
  {
    icon: FaDollarSign,
    title: "DUAL REVENUE STREAMS",
    desc: "Earn from daily Closest-to-Pin pools (50/50 split) PLUS revenue share for all your entry fees.",
  },
  {
    icon: FaVideo,
    title: "GOLFER ENGAGEMENT",
    desc: "Every golfer gets 4 AI-processed video clips of their shot. They share on social media — free marketing for your course.",
  },
  {
    icon: FaCog,
    title: "FULLY AUTOMATED",
    desc: "No staff time needed. AI handles detection, recording, scoring, payouts. We handle everything.",
  },
];

export default function WhyPartners() {
  return (
    <section className="relative w-full bg-[#f3f4f6] py-8 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a3508] uppercase leading-tight">
            WHY PARTNER WITH{" "}
            <span className="text-[#4fad11]">HOLE IN ONE JACKPOT</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-gray-600 max-w-2xl leading-relaxed">
            We bring our patent pending AI technology, the golfers bring the
            excitement, and you earn passive revenue.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl p-[1.5px] bg-linear-to-br from-[#4fad11]/60 via-[#1a3508]/40 to-[#4fad11]/30 transition-all duration-300 hover:from-[#4fad11] hover:via-[#4fad11]/40 hover:to-[#4fad11] hover:shadow-[0_0_40px_rgba(79,173,17,0.3)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-[#4fad11]/0 blur-xl transition-all duration-500 group-hover:bg-[#4fad11]/15 -z-10" />
              <div className="flex h-full flex-col items-start justify-start rounded-3xl bg-linear-to-br from-[#1a3508] via-[#0f2008] to-[#06140a] p-7 sm:p-8 shadow-2xl">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4fad11]/15 border border-[#4fad11]/40 transition-all duration-300 group-hover:bg-[#4fad11]/25 group-hover:border-[#4fad11]/80 group-hover:shadow-[0_0_20px_rgba(79,173,17,0.4)]">
                  <feature.icon className="text-2xl text-[#a3e635]" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wide mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base font-medium text-white/70 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
