"use client";

import { useState } from "react";

const REVENUE_SHARE = 0.20;
const DAYS_PER_MONTH = 30;

export default function RevenueCalculator() {
  const [golfersPerDay, setGolfersPerDay] = useState(60);
  const [entryFee, setEntryFee] = useState(33);
  const [par3Holes, setPar3Holes] = useState(2);

  const monthlyRevenue = Math.round(
    golfersPerDay * entryFee * par3Holes * DAYS_PER_MONTH * REVENUE_SHARE
  );
  const annualRevenue = monthlyRevenue * 12;

  const formatCurrency = (value: number) =>
    `$${value.toLocaleString("en-US")}`;

  return (
    <section className="relative w-full bg-[#f3f4f6] py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-3xl flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1a3508] uppercase leading-tight">
            REVENUE <span className="text-[#4fad11]">CALCULATOR</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-gray-600 max-w-xl leading-relaxed">
            Drag the sliders to see your projected monthly earnings from Hole
            in One Jackpot.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="relative w-full rounded-4xl bg-linear-to-br from-[#1a3508] via-[#22550a] to-[#0f2008] p-6 sm:p-10 shadow-[0_20px_60px_-20px_rgba(26,53,8,0.5)] ring-1 ring-[#4fad11]/30 overflow-hidden">
          {/* Decorative gradient accents */}
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[#4fad11]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[#a3e635]/10 blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Sliders Section */}
            <div className="flex flex-col gap-8 pb-8 mb-8 border-b border-[#4fad11]/20">
              {/* Golfers Per Day Slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm sm:text-base font-semibold text-white/90 tracking-wide">
                    Average Golfers Per Day
                  </label>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#a3e635] tabular-nums">
                    {golfersPerDay}
                  </span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={200}
                  step={1}
                  value={golfersPerDay}
                  onChange={(e) => setGolfersPerDay(Number(e.target.value))}
                  className="green-slider w-full"
                  style={
                    {
                      "--progress": `${
                        ((golfersPerDay - 20) / (200 - 20)) * 100
                      }%`,
                    } as React.CSSProperties
                  }
                />
                <div className="flex justify-between mt-2 text-xs font-medium text-white/40">
                  <span>20</span>
                  <span>200</span>
                </div>
              </div>

              {/* Entry Fee Slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm sm:text-base font-semibold text-white/90 tracking-wide">
                    Entry Fee Per Golfer
                  </label>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#a3e635] tabular-nums">
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
                <div className="flex justify-between mt-2 text-xs font-medium text-white/40">
                  <span>$5</span>
                  <span>$50</span>
                </div>
              </div>

              {/* Number of Par 3 Holes Slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm sm:text-base font-semibold text-white/90 tracking-wide">
                    Number of Par 3 Holes
                  </label>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#a3e635] tabular-nums">
                    {par3Holes}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={4}
                  step={1}
                  value={par3Holes}
                  onChange={(e) => setPar3Holes(Number(e.target.value))}
                  className="green-slider w-full"
                  style={
                    {
                      "--progress": `${((par3Holes - 1) / (4 - 1)) * 100}%`,
                    } as React.CSSProperties
                  }
                />
                <div className="flex justify-between mt-2 text-xs font-medium text-white/40">
                  <span>1</span>
                  <span>4</span>
                </div>
              </div>
            </div>

            {/* Revenue Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 sm:divide-x sm:divide-[#4fad11]/30">
              {/* Monthly Revenue */}
              <div className="flex flex-col items-center text-center sm:pr-6">
                <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/60 uppercase">
                  PROJECTED MONTHLY REVENUE
                </p>
                <p className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#a3e635] tabular-nums drop-shadow-[0_2px_10px_rgba(163,230,53,0.3)]">
                  {formatCurrency(monthlyRevenue)}
                </p>
              </div>

              {/* Annual Revenue */}
              <div className="flex flex-col items-center text-center sm:pl-6">
                <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/60 uppercase">
                  PROJECTED ANNUAL REVENUE
                </p>
                <p className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4ade80] tabular-nums drop-shadow-[0_2px_10px_rgba(74,222,128,0.4)]">
                  {formatCurrency(annualRevenue)}
                </p>
              </div>
            </div>

            {/* Footer Text */}
            <p className="mt-8 text-xs sm:text-sm text-center text-white/50 font-medium leading-relaxed">
              Based on 20% course revenue share. Actual results vary by
              participation rate and fee structure.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .green-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          background: linear-gradient(
            to right,
            #a3e635 0%,
            #4fad11 var(--progress),
            rgba(255, 255, 255, 0.15) var(--progress),
            rgba(255, 255, 255, 0.15) 100%
          );
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
        }

        .green-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          background: #a3e635;
          border: 3px solid #1a3508;
          box-shadow: 0 0 20px rgba(163, 230, 53, 0.6),
            0 0 40px rgba(79, 173, 17, 0.3);
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        .green-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        .green-slider::-webkit-slider-thumb:active {
          transform: scale(1.15);
        }

        .green-slider::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          background: #a3e635;
          border: 3px solid #1a3508;
          box-shadow: 0 0 20px rgba(163, 230, 53, 0.6),
            0 0 40px rgba(79, 173, 17, 0.3);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
