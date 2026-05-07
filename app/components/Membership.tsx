"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaLightbulb, FaRegMoon, FaLocationArrow } from "react-icons/fa";
import { BsGlobe, BsSearch, BsPersonBoundingBox } from "react-icons/bs";
import { BiCctv, BiMapPin } from "react-icons/bi";

const FEATURES = [
  {
    icon: FaLightbulb,
    title: "GOLF AI THAT LEARNS",
    desc: "Our patent pending AI analyzes your swing mechanics, launch angle, ball speed, and trajectory — getting smarter with every shot across every course."
  },
  {
    icon: BsPersonBoundingBox,
    title: "FACE RECOGNITION",
    desc: "Our cameras identify you automatically when you step onto the tee — no scanning, no stopping."
  },
  {
    icon: BsGlobe,
    title: "BALL TRACKING",
    desc: "AI-powered object detection follows your ball from tee to green with sub-inch distance measurement."
  },
  {
    icon: FaLocationArrow,
    title: "SHOT TRACER",
    desc: "Physics-based trajectory rendering shows your ball flight with ball speed, max height, and carry distance."
  },
  {
    icon: BiCctv,
    title: "SMART CAMERA TRACKING",
    desc: "Dual cameras per hole with automated tracking follow the ball in-flight — smooth and precise."
  },
  {
    icon: FaRegMoon,
    title: "ALL-DAY PLAY",
    desc: "IR night vision and adaptive exposure work from dawn to dusk. Play at 6 AM or 8 PM — the AI adapts."
  },
  {
    icon: BiMapPin,
    title: "YOUR TEE BOX ONLY",
    desc: "Geofenced cameras monitor only the designated contest tee box. Only your contest shots are tracked."
  },
  {
    icon: BsSearch,
    title: "AI VISION",
    desc: "4K cameras see you from over 100 feet away — crystal clear in any lighting condition."
  }
];

export default function Membership() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 364; // Approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-start overflow-hidden py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/memb.jpeg"
          alt="Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-8 px-4 sm:px-6 md:px-8 lg:max-w-6xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md text-center uppercase">
          POWERED BY AI
        </h2>
        <p className="text-white text-center text-lg font-medium max-w-2xl">
          Our patent pending AI Platform handles everything automatically. You play golf, our system does the rest.
        </p>

        {/* Navigation Buttons and Slider Container */}
        <div className="relative w-full mt-4">
          {/* Left Navigation Button */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all hover:bg-white/20 active:scale-95 hidden sm:flex"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          {/* Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex w-full snap-x snap-mandatory overflow-x-auto pb-8 pt-4 gap-4 md:gap-6 hide-scrollbar items-stretch"
          >
            {FEATURES.map((feature, idx) => (
              <div 
                key={idx}
                className="flex w-[290px] shrink-0 snap-center flex-col items-start justify-start rounded-2xl bg-[#1C242D] p-7 shadow-2xl md:w-[340px] border border-[#2c353f]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center">
                  <feature.icon className="text-4xl text-[#eab308]" />
                </div>
                
                <h3 className="text-xl font-extrabold text-white uppercase tracking-wide mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-white/80 text-base font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-ml-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all hover:bg-white/20 active:scale-95 hidden sm:flex"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Mobile Navigation Buttons (visible only on small screens) */}
        <div className="flex gap-4 sm:hidden mt-[-1rem]">
          <button 
            onClick={() => scroll("left")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all hover:bg-white/20 active:scale-95"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all hover:bg-white/20 active:scale-95"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Get The App Section */}
      <div className="relative z-10 mt-16 flex w-full flex-col items-center gap-6 px-4 sm:px-6 md:px-8 lg:max-w-4xl">
       
        <div className="w-full max-w-md">
          <Link
            href="#get-started"
            className="flex w-full items-center justify-center rounded-xl bg-[#1a3508] px-8 py-5 text-xl font-extrabold tracking-wide text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            ENTER CONTEST
          </Link>
        </div>
      </div>
    </section>
  );
}
