"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaDollarSign } from "react-icons/fa";

const targetValue = 1000000;

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = targetValue / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-between overflow-hidden py-12 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg1.png"
          alt="Golf Course Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Overlay to ensure text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-between gap-8 px-4">
        
        {/* Headlines */}
        <div className="flex flex-col items-center text-center mt-4 gap-4">
          {/* Tournament Organizer Badge */}
          <div className="rounded-full border border-[#FCE154]/60 bg-black/40 px-6 py-2.5 backdrop-blur-sm">
            <p className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-[#FCE154] uppercase">
              TOURNAMENT ORGANIZER PROGRAM
            </p>
          </div>

          {/* Main Headlines */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl uppercase leading-[1.1]">
            STOP PAYING <span className="text-[#E63946]">$500</span> FOR HIO INSURANCE
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FCE154] drop-shadow-xl uppercase leading-[1.1]">
            START EARNING REVENUE INSTEAD
          </h2>
        </div>

        {/* Mobile Device Mockup */}
        <div className="relative mx-auto mt-4 w-full max-w-[280px] shrink-0 sm:max-w-[320px] md:max-w-[360px]">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] border-[10px] border-[#2A2A2A] bg-black shadow-2xl sm:rounded-[3rem] sm:border-[12px]">
            {/* Dynamic Island Mock */}
            <div className="absolute left-1/2 top-2 z-20 h-6 w-1/3 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-7" />
            
            <video
              src="/herovideo.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-4 mt-6 w-full ">
          <Link
            href="#download"
            className="flex w-full items-center justify-center rounded-xl bg-[#1a3508] px-8 py-5 text-xl font-extrabold tracking-wide text-[#ffffff] shadow-lg transition-transform hover:scale-105 active:scale-95"
          >ENTER CONTEST
          </Link>
        </div>
        {/* Comparison Cards */}
        <div className="relative w-full max-w-md mx-auto flex flex-col gap-3">
          {/* Traditional Card */}
          <div className="rounded-2xl border border-[#E63946]/40 bg-black/40 backdrop-blur-sm px-6 py-7 shadow-lg flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center text-[#E63946]">
              <FaDollarSign className="text-3xl" />
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#E63946]">
              TRADITIONAL
            </h3>
            <p className="mt-3 text-base sm:text-lg font-medium text-white">
              You <span className="font-extrabold text-[#E63946]">PAY</span> $150-$500+
            </p>
            <p className="mt-1 text-sm sm:text-base font-medium text-white/60">
              Per event for HIO insurance
            </p>
          </div>

          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black border-2 border-[#FCE154] shadow-xl">
            <span className="text-xs font-extrabold tracking-widest text-[#FCE154]">VS</span>
          </div>

          {/* Hole in One Jackpot Card */}
          <div className="rounded-2xl border border-[#FCE154]/50 bg-black/40 backdrop-blur-sm px-6 py-7 shadow-lg flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center text-[#4ade80]">
              <FaDollarSign className="text-3xl" />
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#FCE154]">
              HOLE IN ONE JACKPOT
            </h3>
            <p className="mt-3 text-base sm:text-lg font-medium text-white">
              You <span className="font-extrabold text-[#4ade80]">EARN</span> 7.5% of fees
            </p>
            <p className="mt-1 text-sm sm:text-base font-medium text-white/60">
              Revenue share every event
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
