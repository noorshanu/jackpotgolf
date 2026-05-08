"use client";

import { useEffect, useRef, useState } from "react";
import { FaFlag, FaUsers, FaGolfBall } from "react-icons/fa";
import type { IconType } from "react-icons";

type Stat = {
  icon: IconType;
  target: number;
  format: (value: number) => string;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  {
    icon: FaFlag,
    target: 16000,
    format: (v) => `${Math.round(v).toLocaleString("en-US")}+`,
    label: "GOLF COURSES IN THE US",
    sub: "Be the first in your market",
  },
  {
    icon: FaUsers,
    target: 29.1,
    format: (v) => `${v.toFixed(1)}M`,
    label: "ON-COURSE GOLFERS IN 2025",
    sub: "A massive captive audience",
  },
  {
    icon: FaGolfBall,
    target: 500,
    format: (v) => `${Math.round(v)}M+`,
    label: "ROUNDS PLAYED ANNUALLY",
    sub: "Every round is a revenue opportunity",
  },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic for a nice deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration]);

  return value;
}

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.target, start);
  const Icon = stat.icon;

  return (
    <div className="group relative rounded-3xl p-[1.5px] bg-linear-to-br from-[#4fad11]/60 via-[#1a3508]/40 to-[#4fad11]/30 transition-all duration-300 hover:from-[#4fad11] hover:via-[#4fad11]/40 hover:to-[#4fad11] hover:shadow-[0_0_40px_rgba(79,173,17,0.3)]">
      <div className="absolute inset-0 rounded-3xl bg-[#4fad11]/0 blur-xl transition-all duration-500 group-hover:bg-[#4fad11]/15 -z-10" />
      <div className="relative flex h-full flex-col items-center text-center rounded-3xl bg-linear-to-br from-[#1a3508] via-[#0f2008] to-[#06140a] p-8 sm:p-10 shadow-2xl">
        {/* Icon */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4fad11]/15 border border-[#4fad11]/40 transition-all duration-300 group-hover:bg-[#4fad11]/25 group-hover:border-[#4fad11]/80 group-hover:shadow-[0_0_20px_rgba(79,173,17,0.4)]">
          <Icon className="text-2xl text-[#a3e635]" />
        </div>

        {/* Big number */}
        <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white tabular-nums drop-shadow-[0_2px_10px_rgba(163,230,53,0.25)]">
          {stat.format(value)}
        </p>

        {/* Label */}
        <p className="mt-3 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#a3e635] uppercase">
          {stat.label}
        </p>

        {/* Subtitle */}
        <p className="mt-2 text-sm sm:text-base font-medium text-white/65">
          {stat.sub}
        </p>
      </div>
    </div>
  );
}

export default function Oppurcunity() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a3508] uppercase leading-tight">
            THE <span className="text-[#4fad11]">OPPORTUNITY</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
