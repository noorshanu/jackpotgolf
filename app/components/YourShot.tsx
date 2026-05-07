"use client";

import React, { useState } from 'react';

const CLIPS = [
  {
    id: 0,
    title: "CLIP 1: YOUR SWING",
    desc: "Full swing from the tee captured in high definition.",
    video: "/images/shot2.mp4",
    stats: { speed: "167 MPH", carry: "162 YDS", height: "98 FT" }
  },
  {
    id: 1,
    title: "CLIP 2: SHOT TRACER",
    desc: "AI-generated 3D ball flight with real-time metrics.",
    video: "/images/shot3.mp4",
    stats: { speed: "172 MPH", carry: "168 YDS", height: "105 FT" }
  },
  {
    id: 2,
    title: "CLIP 3: THE LANDING",
    desc: "Ball approaching and landing on the green from the pin camera.",
    video: "/images/shot5.mp4",
    stats: { speed: "155 MPH", carry: "158 YDS", height: "92 FT" }
  }
];

export default function YourShot() {
  const [activeClip, setActiveClip] = useState(0);

  return (
    <section className="relative flex w-full flex-col items-center justify-start bg-white py-12 md:py-20">
      <div className="flex w-full flex-col items-center gap-10 px-4 sm:px-6 md:px-8 lg:max-w-5xl">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center mt-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A2026] uppercase">
            CINEMATIC GOLF SHOTS
          </h2>
          <p className="text-lg sm:text-xl font-medium mt-4 text-gray-500 max-w-2xl leading-relaxed">
            Every shot gets the tracer treatment — a cinematic 3D video showing your ball flight with real-time metrics.
          </p>
        </div>

        {/* Main Video Box */}
        <div className="relative w-full aspect-[4/5] sm:aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black border border-gray-200">
          <video
            key={CLIPS[activeClip].video}
            src={CLIPS[activeClip].video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover animate-fade-in"
          />
          
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />

          {/* Stats Overlay */}
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between w-full">
              <div className="flex flex-col items-start">
                <span className="text-[#00c951] text-xs sm:text-sm font-bold tracking-widest uppercase mb-1">Ball Speed</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md">{CLIPS[activeClip].stats.speed}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[#00c951] text-xs sm:text-sm font-bold tracking-widest uppercase mb-1">Carry</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md">{CLIPS[activeClip].stats.carry}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center pb-2 sm:pb-4">
              <span className="text-[#00c951] text-xs sm:text-sm font-bold tracking-widest uppercase mb-1">Max Height</span>
              <span className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md">{CLIPS[activeClip].stats.height}</span>
            </div>
          </div>
        </div>

        {/* Clip Selection Buttons */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
          {CLIPS.map((clip, idx) => (
            <button
              key={clip.id}
              onClick={() => setActiveClip(idx)}
              className={`flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 ${
                activeClip === idx 
                  ? "border-[#00c951] bg-[#00c951]/5 shadow-md scale-[1.02]" 
                  : "border-gray-200 bg-white hover:border-[#00c951]/30 hover:bg-gray-50"
              }`}
            >
              <h3 className={`text-base sm:text-lg font-extrabold uppercase tracking-wide mb-3 ${
                activeClip === idx ? "text-[#00c951]" : "text-[#1A2026]"
              }`}>
                {clip.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                {clip.desc}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
