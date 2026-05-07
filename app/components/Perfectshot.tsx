"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaPlane } from "react-icons/fa"; // Using as placeholder for the airplane icon

const WINNERS = [
  {
    id: 1,
    prize: "$250,000",
    name: "MIKE T.",
    course: "TPC Sawgrass",
    type: "Hole-in-One",
    result: "ACE!",
    video: "/images/shot2.mp4",
  },
  {
    id: 2,
    prize: "$100,000",
    name: "SARAH J.",
    course: "Pebble Beach",
    type: "Closest to Pin",
    result: "WINNER!",
    video: "/images/shot3.mp4",
  },
  {
    id: 3,
    prize: "$50,000",
    name: "DAVID W.",
    course: "Augusta National",
    type: "Longest Drive",
    result: "BOOM!",
    video: "/images/shot5.mp4",
  },
];

export default function Perfectshot() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % WINNERS.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  const slide = WINNERS[currentSlide];

  return (
    <section className="relative flex w-full flex-col items-center justify-start bg-white py-12 md:py-20">
      <div className="flex w-full flex-col items-center gap-10 px-4 sm:px-6 md:px-8 lg:max-w-6xl">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center mt-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A2026] leading-[1.1]">
            RECENT WINNERS
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mt-2 text-gray-500 drop-shadow-md max-w-md leading-snug">
            See our latest winners.
          </p>
        </div>

        {/* Video Slider */}
        <div className="relative mx-auto mt-2 w-full max-w-[400px] sm:max-w-[400px] md:max-w-[440px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#1c1c1c] shadow-2xl flex flex-col border-4 border-[#1c1c1c]">
            
            {/* Video Container */}
            <div className="relative flex-1 w-full overflow-hidden rounded-t-[1.75rem] rounded-b-[1rem]">
              <video
                key={slide.id}
                src={slide.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover animate-fade-in"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[#FCE154] text-4xl sm:text-5xl font-extrabold tracking-tight leading-none drop-shadow-md">
                    {slide.prize}
                  </span>
                  <span className="text-white text-xl sm:text-2xl font-bold mt-1 drop-shadow-md uppercase">
                    {slide.name}
                  </span>
                  <span className="text-white/80 text-sm sm:text-base font-medium mt-0.5 drop-shadow-md">
                    {slide.course}
                  </span>
                </div>
                
                <div className="flex flex-col items-end gap-1">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                    <span className="text-[#FCE154] text-sm sm:text-base font-bold">
                      {slide.type}
                    </span>
                  </div>
                  <span className="text-white text-xl sm:text-2xl font-extrabold drop-shadow-md pr-1">
                    {slide.result}
                  </span>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="h-12 w-full bg-[#1c1c1c] flex items-center justify-center gap-2 shrink-0">
              {WINNERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "w-6 bg-[#FCE154]" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text and Buttons Section */}
        <div className="flex w-full flex-col gap-5 md:max-w-2xl mt-4 text-left">
          
          {/* Feature Header */}
       

          {/* Description Paragraph */}
         
          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#enter-contest"
              className="flex w-full items-center justify-center rounded-xl bg-[#1a3508] px-8 py-[1.125rem] text-[1.05rem] font-extrabold tracking-wide text-[#ffffff] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              ENTER CONTEST
            </Link>
            
         
          </div>

        </div>
      </div>
    </section>
  );
}