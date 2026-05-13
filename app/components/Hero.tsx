"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegCheckCircle, FaVideo, FaDollarSign } from "react-icons/fa";

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
        <div className="flex flex-col items-center text-center mt-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.3em] text-white drop-shadow-md uppercase">
            WIN UP TO
          </h2>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-[#FCE154] drop-shadow-xl mt-2 flex items-center justify-center">
            <span>$</span>
            <span>{count.toLocaleString()}</span>
          </h1>
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-[#FCE154] to-transparent mt-4 mb-4 opacity-70" />
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 drop-shadow-md max-w-md leading-snug">
            Patent Pending AI-Powered Golf Skills<br className="hidden sm:block" /> Contest
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
        <div className="mb-4 mt-6 w-full ">
          <Link
            href="#download"
            className="flex w-full items-center justify-center rounded-xl bg-[#1a3508] px-8 py-5 text-xl font-extrabold tracking-wide text-[#ffffff] shadow-lg transition-transform hover:scale-105 active:scale-95"
          >ENTER CONTEST
          </Link>
        </div>
        <div className="flex flex-wrap justify-start items-center gap-x-2 gap-y-1 text-[8.5px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <FaRegCheckCircle className="text-[#4fad11] text-[22px]" />
                <span className="text-[11px]">AI-Verified</span>
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <FaVideo className="text-[#4fad11] text-[22px]" />
                <span className="text-[11px]">Video Proof</span>
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div className="flex items-center justify-center rounded-full border-[1.5px] border-[#4fad11] h-[21px] w-[21px] text-[#4fad11]">
                  <FaDollarSign className="text-[18px]" />
                </div>
                <span className="text-[11px]">Fast Payouts</span>
              </div>
            </div>

      </div>
    </section>
  );
}
