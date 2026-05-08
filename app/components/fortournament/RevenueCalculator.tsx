"use client";

import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const TRADITIONAL_COST = 350;
const ORGANIZER_REVENUE_SHARE = 0.075;

export default function RevenueCalculator() {
  const [players, setPlayers] = useState(120);
  const [entryFee, setEntryFee] = useState(10);

  const earned = Math.round(players * entryFee * ORGANIZER_REVENUE_SHARE);
  const totalSwing = TRADITIONAL_COST + earned;

  return (
    <section className="relative w-full bg-[#f3f4f6] rounded-[16px] py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-3xl flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black uppercase leading-tight">
            REVENUE ESTIMATOR
          </h2>
          <p className="text-base sm:text-lg font-medium text-gray-500 max-w-xl">
            See how much you save (and earn) compared to traditional hole-in-one insurance.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="relative w-full rounded-4xl bg-white p-6 sm:p-10 shadow-[0_20px_60px_-20px_rgba(26,53,8,0.25)] ring-1 ring-gray-100 overflow-hidden">
          {/* Decorative gradient accent */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#4fad11]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#1a3508]/10 blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Sliders Section */}
            <div className="mb-8 pb-8 border-b border-gray-100">
              {/* Players Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm sm:text-base font-semibold text-gray-700 tracking-wide">
                    Number of Players
                  </label>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1a3508] tabular-nums">
                    {players}
                  </span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={300}
                  step={1}
                  value={players}
                  onChange={(e) => setPlayers(Number(e.target.value))}
                  className="green-slider w-full"
                  style={
                    {
                      "--progress": `${((players - 20) / (300 - 20)) * 100}%`,
                    } as React.CSSProperties
                  }
                />
                <div className="flex justify-between mt-2 text-xs font-medium text-gray-400">
                  <span>20</span>
                  <span>300</span>
                </div>
              </div>

              {/* Entry Fee Slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm sm:text-base font-semibold text-gray-700 tracking-wide">
                    Entry Fee Per Player
                  </label>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1a3508] tabular-nums">
                    ${entryFee}
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={entryFee}
                  onChange={(e) => setEntryFee(Number(e.target.value))}
                  className="green-slider w-full"
                  style={
                    {
                      "--progress": `${((entryFee - 5) / (50 - 5)) * 100}%`,
                    } as React.CSSProperties
                  }
                />
                <div className="flex justify-between mt-2 text-xs font-medium text-gray-400">
                  <span>$5</span>
                  <span>$50</span>
                </div>
              </div>
            </div>

            {/* Traditional Cost */}
            <div className="relative rounded-2xl bg-linear-to-br from-[#fef2f2] to-[#fee2e2] ring-1 ring-[#E63946]/20 px-6 py-7 flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#E63946]/10 mb-2">
                <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#E63946] uppercase">
                  TRADITIONAL COST
                </p>
              </div>
              <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#E63946] tabular-nums">
                -${TRADITIONAL_COST}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-500">
                You pay per event
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center my-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4fad11]/10 ring-1 ring-[#4fad11]/30">
                <FaArrowDown className="text-base text-[#4fad11]" />
              </div>
            </div>

            {/* Hole in One Jackpot Earnings */}
            <div className="relative rounded-2xl bg-linear-to-br from-[#f0fdf4] to-[#dcfce7] ring-1 ring-[#4fad11]/30 px-6 py-7 flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#4fad11]/15 mb-2">
                <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#1a3508] uppercase">
                  WITH HOLE IN ONE JACKPOT
                </p>
              </div>
              <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#1a3508] tabular-nums">
                +${earned}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-500">
                You earn per event
              </p>
            </div>

            {/* Total Financial Swing - Hero Highlight */}
            <div className="relative mt-6 rounded-2xl bg-linear-to-br from-[#1a3508] via-[#22550a] to-[#1a3508] px-6 py-7 flex flex-col items-center text-center shadow-lg overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#4fad11]/10 to-transparent pointer-events-none" />
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#4fad11]/20 blur-2xl pointer-events-none" />

              <div className="relative">
                <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#a3e635] uppercase">
                  Total Financial Swing Per Event
                </p>
                <p className="mt-3 text-5xl sm:text-6xl font-extrabold text-white tabular-nums drop-shadow-[0_2px_10px_rgba(163,230,53,0.3)]">
                  +${totalSwing}
                </p>
              </div>
            </div>

            {/* Footer Text */}
            <p className="mt-6 text-xs sm:text-sm text-center text-gray-400 font-medium leading-relaxed">
              Based on 7.5% organizer revenue share vs. average $350 traditional HIO insurance cost.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .green-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          background: linear-gradient(
            to right,
            #1a3508 0%,
            #4fad11 var(--progress),
            #e5e7eb var(--progress),
            #e5e7eb 100%
          );
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
        }

        .green-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 26px;
          height: 26px;
          border-radius: 9999px;
          background: #ffffff;
          border: 4px solid #1a3508;
          box-shadow: 0 4px 12px rgba(26, 53, 8, 0.25),
            0 0 0 4px rgba(79, 173, 17, 0.1);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .green-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 16px rgba(26, 53, 8, 0.35),
            0 0 0 6px rgba(79, 173, 17, 0.15);
        }

        .green-slider::-webkit-slider-thumb:active {
          transform: scale(1.15);
          border-color: #4fad11;
        }

        .green-slider::-moz-range-thumb {
          width: 26px;
          height: 26px;
          border-radius: 9999px;
          background: #ffffff;
          border: 4px solid #1a3508;
          box-shadow: 0 4px 12px rgba(26, 53, 8, 0.25),
            0 0 0 4px rgba(79, 173, 17, 0.1);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .green-slider::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
