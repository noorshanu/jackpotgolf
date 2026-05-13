import React from 'react';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import { GiGolfFlag } from 'react-icons/gi';

export default function Contest() {
  return (
    <section className="relative flex w-full flex-col items-center justify-start bg-white py-4 md:py-20" id="contest">
      <div className="flex w-full flex-col items-center gap-10 px-4 sm:px-6 md:px-8 lg:max-w-6xl">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center mt-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A2026] leading-[1.1] uppercase">
            THE CONTEST
          </h2>
          <p className="text-lg sm:text-xl font-medium mt-4 text-gray-500 max-w-2xl leading-relaxed">
            Scan the QR code at any participating par 3 hole, choose your entry fee, and play. One swing. One chance. AI handles the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-4">
          {/* Left Column: Main Card */}
          <div className="flex flex-col rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
            {/* Subtle Gold Gradient Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00c951]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#00c951] font-bold tracking-widest uppercase text-sm sm:text-base mb-3">
                <GiGolfFlag className="text-xl" />
                <span>400X Payout</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1A2026] uppercase tracking-tight mb-8">
                Hole-In-One<br />Contest
              </h3>
              
              <div className="mb-8">
                <div className="text-2xl sm:text-3xl font-bold text-[#1A2026]">Win Up To</div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#00c951] drop-shadow-sm tracking-tight mt-1">
                  $1,000,000
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Our 24/7 skills contest is always open across every partner course. Pick your entry fee from $10 to $2,500 — sink it from the tee and your entry is multiplied by 400X. A $2,500 entry wins $1,000,000. Unlimited winners — every ace gets paid. One entry per round.
              </p>
            </div>
          </div>

          {/* Right Column: Checklist & Add-on */}
          <div className="flex flex-col gap-8">
            {/* Checklist */}
            <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700 bg-white p-6 sm:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
              {[
                "Entry fees: $10 – $2,500 (you choose your stakes)",
                "Your entry fee × 400 = your payout",
                "Unlimited winners — every ace gets paid",
                "24/7 across all partner courses",
                "Admin-verified with dual camera proof",
                "HD video of every shot you take"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                    <FaCheck className="text-sm" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Add-on Card */}
            <div className="rounded-[2rem] bg-gray-50 border border-gray-200 p-6 sm:p-8 shadow-sm">
              <div className="inline-block px-4 py-1.5 rounded-lg border-2 border-[#00c951] text-[#00c951] font-bold text-sm tracking-widest uppercase mb-5 bg-white">
                + $5 Add-On
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-[#1A2026] uppercase tracking-tight mb-4">
                Closest-To-Pin Daily 50/50
              </h4>
              <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8">
                Add $5 when you enter and compete for the daily closest-to-pin pool at your course. AI measures your distance to sub-inch accuracy. Closest golfer splits the pot 50/50 with the course. Resets at midnight.
              </p>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Daily Pool</span>
                <span className="text-3xl font-extrabold text-[#00c951]">50/50 Split</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="#enter-contest"
              className="flex w-full items-center justify-center rounded-xl bg-[#1a3508] px-8 py-5 text-xl font-extrabold tracking-wide text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              ENTER CONTEST
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
