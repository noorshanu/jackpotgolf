"use client";

import Image from "next/image";
import Link from "next/link";

export default function Membership() {
  return (
    <section className="relative flex w-full flex-col items-center justify-start overflow-hidden py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pricing-bg-mob.png"
          alt="Pricing Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-8 px-4 sm:px-6 md:px-8 lg:max-w-6xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md text-center">
          Premium Membership
        </h2>

        {/* Pricing Cards Container */}
        {/* Using a flex container that allows horizontal scrolling on mobile, centered on desktop */}
        <div className="flex w-full snap-x snap-mandatory overflow-x-auto pb-8 pt-4 md:justify-center gap-4 md:gap-6 hide-scrollbar items-center">
          
          {/* Left Card: Monthly */}
          <div className="flex w-[260px] shrink-0 snap-center flex-col items-center justify-center rounded-xl bg-[#D1DAE6] p-6 shadow-lg md:w-[280px]">
            <div className="flex flex-col items-center text-[#1C242D]">
              <p className="text-lg font-medium">Paid Monthly</p>
              <div className="mt-2 flex items-start justify-center">
                <span className="mt-2 text-2xl font-bold sm:mt-3 sm:text-3xl">$</span>
                <span className="text-[5rem] font-extrabold leading-none tracking-tighter sm:text-[6rem]">12</span>
                <div className="mt-3 flex items-baseline sm:mt-4">
                  <span className="text-2xl font-bold leading-none sm:text-3xl">99</span>
                  <span className="ml-1 text-base font-medium text-[#1C242D]/80 sm:text-lg">/mo</span>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full rounded-lg bg-white py-3.5 text-sm font-bold uppercase tracking-wide text-[#1C242D] shadow-sm transition-transform hover:scale-105 active:scale-95 border border-gray-200">
              PURCHASE
            </button>
          </div>

          {/* Center Card: Annually (Best Value) */}
          <div className="flex w-[290px] shrink-0 snap-center flex-col items-center justify-between rounded-2xl bg-[#1C242D] p-7 shadow-2xl md:w-[340px] border border-[#2c353f] z-10 transform scale-105">
            <div className="rounded-full bg-[#D1DAE6] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1C242D]">
              BEST VALUE - SAVE 62%
            </div>
            
            <div className="mt-6 flex flex-col items-center text-white">
              <p className="text-lg font-medium">Free Trial</p>
              <p className="text-lg font-medium">Paid Annually</p>
              <div className="mt-2 flex items-start justify-center">
                <span className="mt-2 text-3xl font-bold sm:mt-3 sm:text-4xl">$</span>
                <span className="text-[6rem] font-extrabold leading-none tracking-tighter sm:text-[7rem]">5</span>
                <div className="mt-3 flex items-baseline sm:mt-4">
                  <span className="text-3xl font-bold leading-none sm:text-4xl">83</span>
                  <span className="ml-1 text-lg font-medium text-white/80 sm:text-xl">/mo</span>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full rounded-lg bg-white py-4 text-sm font-bold uppercase tracking-wide text-[#1C242D] shadow-md transition-transform hover:scale-105 active:scale-95">
              PURCHASE
            </button>
          </div>

          {/* Right Card: Weekly */}
          <div className="flex w-[260px] shrink-0 snap-center flex-col items-center justify-center rounded-xl bg-[#D1DAE6] p-6 shadow-lg md:w-[280px]">
            <div className="flex flex-col items-center text-[#1C242D]">
              <p className="text-lg font-medium">Paid Weekly</p>
              <div className="mt-2 flex items-start justify-center">
                <span className="mt-2 text-2xl font-bold sm:mt-3 sm:text-3xl">$</span>
                <span className="text-[5rem] font-extrabold leading-none tracking-tighter sm:text-[6rem]">6</span>
                <div className="mt-3 flex items-baseline sm:mt-4">
                  <span className="text-2xl font-bold leading-none sm:text-3xl">99</span>
                  <span className="ml-1 text-base font-medium text-[#1C242D]/80 sm:text-lg">/wk</span>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full rounded-lg bg-white py-3.5 text-sm font-bold uppercase tracking-wide text-[#1C242D] shadow-sm transition-transform hover:scale-105 active:scale-95 border border-gray-200">
              PURCHASE
            </button>
          </div>

        </div>
      </div>

      {/* Get The App Section */}
      <div className="relative z-10 mt-16 flex w-full flex-col items-center gap-6 px-4 sm:px-6 md:px-8 lg:max-w-4xl bg-black/30 py-12 backdrop-blur-sm rounded-2xl border border-white/10">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md text-center">
          Get The App
        </h2>
        <div className="w-full max-w-md">
          <Link
            href="#get-started"
            className="flex w-full items-center justify-center rounded-lg bg-white px-8 py-5 text-base sm:text-lg font-extrabold tracking-wide text-[#1C242D] shadow-xl transition-transform hover:scale-105 active:scale-95"
          >
            GET STARTED FOR FREE NOW
          </Link>
        </div>
      </div>
    </section>
  );
}