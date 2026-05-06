"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const COURSES = [
  {
    id: 1,
    name: "PEBBLE BEACH",
    subtitle: "GOLF LINKS",
    hole: "Hole #7",
    par: "Par 3",
    distance: "106 yds",
    location: "Pebble Beach, CA",
    prizePool: "$890",
    entries: "22 entries today",
    image: "/1.jpg"
  },
  {
    id: 2,
    name: "TPC SAWGRASS",
    subtitle: "STADIUM COURSE",
    hole: "Hole #17",
    par: "Par 3",
    distance: "137 yds",
    location: "Ponte Vedra Beach, FL",
    prizePool: "$1,250",
    entries: "45 entries today",
    image: "/2.jpg"
  },
  {
    id: 3,
    name: "AUGUSTA NATIONAL",
    subtitle: "GOLF CLUB",
    hole: "Hole #12",
    par: "Par 3",
    distance: "155 yds",
    location: "Augusta, GA",
    prizePool: "$2,100",
    entries: "89 entries today",
    image: "/3.jpg"
  }
];

export default function Precesion() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % COURSES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + COURSES.length) % COURSES.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const slide = COURSES[currentSlide];

  return (
    <section className="relative flex w-[calc(100%-10px)] mx-[5px] mt-[10px] flex-col items-center justify-start overflow-hidden rounded-[14px] bg-[#EEEEEE] py-12 md:py-20">
      <div className="flex w-full flex-col items-center gap-10 px-2 sm:px-2  lg:max-w-6xl">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center mt-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A2026] leading-[1.1]">
          ACTIVE COURSES
          </h2>
        </div>

        {/* Course Slider */}
        <div className="relative mx-auto mt-2 w-full max-w-[400px] sm:max-w-[400px] md:max-w-[440px]">
          <div className="relative aspect-[4/4.5] w-full rounded-[2rem] overflow-hidden bg-[#1c1c1c] shadow-2xl flex flex-col border-4 border-[#1c1c1c]">
            
            {/* Image Container */}
            <div className="relative flex-1 w-full rounded-t-[1.75rem] rounded-b-[1rem]">
              <Image
                key={slide.id}
                src={slide.image}
                alt={slide.name}
                fill
                className="absolute inset-0 h-full w-full object-cover animate-fade-in"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute -left-1 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                aria-label="Previous course"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute -right-1 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                aria-label="Next course"
              >
                <FaChevronRight className="h-4 w-4" />
              </button>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 flex justify-between items-end z-10">
                <div className="flex flex-col">
                  <h3 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight leading-none drop-shadow-md">
                    {slide.name}
                  </h3>
                  <h3 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight leading-none drop-shadow-md mt-1">
                    {slide.subtitle}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-4 text-white/90 text-sm sm:text-base font-medium drop-shadow-md">
                    <span>{slide.hole}</span>
                    <span className="opacity-50">—</span>
                    <span>{slide.par}</span>
                    <span className="opacity-50">•</span>
                    <span>{slide.distance}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mt-2 text-white/70 text-sm font-medium drop-shadow-md">
                    <FaMapMarkerAlt className="h-3 w-3" />
                    <span>{slide.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end text-right">
                  <span className="text-[#FCE154] text-4xl sm:text-5xl font-extrabold tracking-tight leading-none drop-shadow-md">
                    {slide.prizePool}
                  </span>
                  <span className="text-white/60 text-sm font-bold tracking-widest mt-1 uppercase drop-shadow-md">
                    PRIZE<br/>POOL
                  </span>
                  
                  <span className="text-white/90 text-sm sm:text-base font-medium mt-4 drop-shadow-md">
                    {slide.entries.split(' ')[0]} entries<br/>today
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Bar with Pagination and Button */}
            <div className="h-20 w-full bg-[#1c1c1c] flex items-center justify-between px-6 shrink-0">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {COURSES.map((_, idx) => (
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
              
              {/* View Course Button */}
              <Link
                href="#view-course"
                className="flex items-center justify-center rounded-xl bg-[#FCE154] px-6 py-3 text-sm font-extrabold tracking-widest text-[#1c1c1c] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase"
              >
                VIEW COURSE
              </Link>
            </div>
          </div>
        </div>

        {/* Text and Buttons Section */}
        <div className="flex w-full flex-col gap-5 md:max-w-2xl mt-4 text-left">
          
        

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#enter-contest"
              className="flex w-full items-center justify-center rounded-xl bg-green-500 px-8 py-[1.125rem] text-[1.05rem] font-extrabold tracking-wide text-[#ffffff] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              ENTER CONTEST
            </Link>
            
      
          </div>

        </div>
      </div>
    </section>
  );
}