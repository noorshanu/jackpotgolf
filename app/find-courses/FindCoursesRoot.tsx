"use client";

import dynamic from "next/dynamic";

const FindCoursesExperience = dynamic(
  () => import("./FindCoursesExperience"),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="h-[min(70vh,560px)] min-h-[360px] animate-pulse rounded-2xl bg-gray-200" />
      </div>
    ),
  }
);

export default function FindCoursesRoot() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#f8faf8] via-white to-[#eef2ec]">
      <header className="relative overflow-hidden border-b border-[#1a3508]/10 bg-linear-to-br from-[#1a3508] via-[#22550a] to-[#0f2008] px-4 py-14 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4fad11]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-[#a3e635]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#a3e635] sm:text-sm">
            Partner network
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find{" "}
            <span className="bg-linear-to-r from-[#a3e635] to-[#4fad11] bg-clip-text text-transparent">
              courses
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-white/80 sm:text-lg">
            Explore Jackpot Golf partner locations across the country. Hover any
            pin for the full street address, or pick a course from the list to
            zoom in.
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-linear-to-r from-transparent via-[#a3e635] to-transparent" />
        </div>
      </header>

      <FindCoursesExperience />
    </div>
  );
}
