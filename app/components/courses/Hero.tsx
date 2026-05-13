"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaDollarSign, FaRegCheckCircle } from "react-icons/fa";

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
          {/* Partnership Badge */}
          <div className="rounded-full border border-[#FCE154]/60 bg-black/40 px-6 py-2.5 backdrop-blur-sm">
            <p className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-[#FCE154] uppercase">
              GOLF COURSE PARTNERSHIP PROGRAM
            </p>
          </div>

          {/* Main Headlines */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl uppercase leading-[1.1]">
            ADD <span className="text-[#FCE154]">$5,000+/MONTH</span>
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl uppercase leading-[1.1]">
            REVENUE TO YOUR COURSE
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-white/80 drop-shadow-md max-w-xl leading-relaxed">
            Zero cost installation. Zero staff time. Your golfers will love our 
            AI-powered skills contests.
          </p>
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
    
        {/* Comparison Cards */}
        <div className="relative w-full max-w-md mx-auto flex flex-col gap-3">
          {/* Traditional Card */}
          

          {/* VS Badge */}
          

          {/* Hole in One Jackpot Card */}
       
          <div className="mb-4 mt-6 w-full">
            <Link
              href="#schedule-demo"
              className="flex w-full items-center justify-center rounded-xl bg-[#1a3508]  px-8 py-5 text-xl font-extrabold tracking-[0.15em] text-[#fff]  transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] uppercase"
            >
              SCHEDULE A DEMO
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mb-4 mt-2 w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <FaRegCheckCircle className="text-[#4fad11] text-xl" />
              <span className="text-sm sm:text-base font-medium text-white/80">
                No upfront costs
              </span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <FaRegCheckCircle className="text-[#4fad11] text-xl" />
              <span className="text-sm sm:text-base font-medium text-white/80">
              Doesn&apos;t slow gameplay
              </span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <FaRegCheckCircle className="text-[#4fad11] text-xl" />
              <span className="text-sm sm:text-base font-medium text-white/80">
               Passive revenue
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
