"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Using this as placeholder for different icons

// Data for the 4 slides
const SLIDES = [
  {
    id: 1,
    mainHeading: "Sink More Putts",
    featureHeading: "PUTT LINES",
    description: "Read every green like a pro. Instantly see the precise break of your putt from any location, so you can aim with confidence, trust your line, and sink more putts.",
    imagePath: "/images/Scores-Stats-anim.gif",
    iconColor: "#2D4C1E"
  },
  {
    id: 2,
    mainHeading: "Master Your Approach",
    featureHeading: "APPROACH VIEW",
    description: "Track every shot from tee to green and fine-tune your distances. Know exactly how far each club goes to eliminate misjudged shots and improve your game.",
    imagePath: "/images/Hero_Mobile_GIF.gif", // You can update these with different GIFs later
    iconColor: "#1A4568"
  },
  {
    id: 3,
    mainHeading: "Track Every Stat",
    featureHeading: "SMART SCORING",
    description: "Keep track of your score, fairways hit, greens in regulation, and putts with our intuitive digital scorecard. Analyze your performance round after round.",
    imagePath: "/images/Scores-Stats-anim.gif", 
    iconColor: "#68251A"
  },
  {
    id: 4,
    mainHeading: "Elevate Your Game",
    featureHeading: "PRO INSIGHTS",
    description: "Get real-time insights based on your previous performance on similar holes. Our AI analyzes your history to suggest the optimal club and strategy.",
    imagePath: "/images/Hero_Mobile_GIF.gif",
    iconColor: "#685E1A"
  }
];

export default function MasterApproch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative flex w-[calc(100%-10px)] mx-[5px] mt-[10px] flex-col items-center justify-start overflow-hidden rounded-[14px] bg-[#EEEEEE] py-12 md:py-20 transition-all duration-500">
      <div className="flex w-full flex-col items-center gap-10 px-4 sm:px-6 md:px-8 lg:max-w-6xl">
        
        {/* Dynamic Header Text */}
        <div className="flex flex-col items-center text-center mt-2 min-h-[4rem] sm:min-h-[5rem]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A2026] leading-[1.1] transition-opacity duration-300">
            {slide.mainHeading}
          </h2>
        </div>

        {/* Mobile Device Mockup */}
        <div className="relative mx-auto mt-2 w-full max-w-[280px] shrink-0 sm:max-w-[320px] md:max-w-[360px]">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] border-[8px] border-[#a0a0a0] bg-black shadow-xl sm:rounded-[3rem] sm:border-[10px]">
            {/* Dynamic Island Mock */}
            <div className="absolute left-1/2 top-2 z-20 h-6 w-1/3 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-7" />
            
            <Image
              key={slide.id} // Forces re-mount when image changes
              src={slide.imagePath}
              alt={slide.mainHeading}
              fill
              unoptimized
              className="object-cover animate-fade-in"
            />
          </div>
          
          {/* Slider Indicators */}
          <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-8 bg-[#1A2026]" : "w-2.5 bg-[#1A2026]/30 hover:bg-[#1A2026]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text and Buttons Section */}
        <div className="flex w-full flex-col gap-5 md:max-w-2xl mt-8 text-left min-h-[16rem]">
          
          {/* Feature Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-xl bg-[#1A2026] shadow-md transition-colors duration-300">
              <FaMapMarkerAlt className="h-6 w-6" style={{ color: slide.iconColor }} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A2026] uppercase tracking-wide transition-opacity duration-300">
              {slide.featureHeading}
            </h3>
          </div>

          {/* Description Paragraph */}
          <p className="text-[1.05rem] sm:text-lg font-medium leading-relaxed text-[#1A2026]/90 tracking-tight transition-opacity duration-300">
            {slide.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#try-now"
              className="flex w-full items-center justify-center rounded-xl bg-[#263519] px-8 py-[1.125rem] text-[1.05rem] font-extrabold tracking-wide text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              TRY IT NOW
            </Link>
            
            <Link
              href="#see-action"
              className="flex w-full items-center justify-center rounded-xl border-[2.5px] border-[#1A2026] bg-transparent px-8 py-[1.125rem] text-[1.05rem] font-extrabold tracking-wide text-[#1A2026] shadow-sm transition-transform hover:bg-[#1A2026]/5 active:scale-[0.98]"
            >
              SEE IT IN ACTION
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}