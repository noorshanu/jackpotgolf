"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Member = {
  name: string;
  role: string;
  image: string;
};

const TEAM: Member[] = [
  {
    name: "SCOTT LAMBRECHT",
    role: "CEO GolfLogix",
    image: "/1.jpg",
  },
  {
    name: "JANE DOE",
    role: "COO GolfLogix",
    image: "/2.jpg",
  },
  {
    name: "JOHN SMITH",
    role: "CTO GolfLogix",
    image: "/3.jpg",
  },
];

const BRAND = "#1a3508";

export default function OurTeam() {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((i) => (i - 1 + TEAM.length) % TEAM.length);
  const goNext = () => setIndex((i) => (i + 1) % TEAM.length);

  const member = TEAM[index];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-md px-6 sm:max-w-lg sm:px-8 md:max-w-2xl md:px-10">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl">
          Leadership Team
        </h2>

        {/* Card */}
        <div className="mt-8 sm:mt-10">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
            <Image
              key={member.image}
              src={member.image}
              alt={member.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 90vw, 600px"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-extrabold uppercase tracking-tight text-[#1A1A1A] sm:text-xl">
              {member.name}
            </h3>
            <p className="mt-1 text-base text-[#1A1A1A] sm:text-lg">
              {member.role}
            </p>
          </div>
        </div>

        {/* Footer: pagination dots + nav arrows */}
        <div className="mt-10 flex items-center justify-between">
          {/* Dots */}
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Select team member"
          >
            {TEAM.map((m, i) => {
              const isActive = i === index;
              return (
                <button
                  key={m.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show ${m.name}`}
                  onClick={() => setIndex(i)}
                  className="h-2.5 w-5 transition-opacity"
                  style={{
                    backgroundColor: BRAND,
                    opacity: isActive ? 1 : 0.25,
                  }}
                />
              );
            })}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous team member"
              className="flex h-12 w-14 items-center justify-center bg-[#8a8d92] text-white transition-opacity hover:opacity-90 active:scale-95"
            >
              <FaChevronLeft className="text-lg" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next team member"
              className="flex h-12 w-14 items-center justify-center text-white transition-opacity hover:opacity-90 active:scale-95"
              style={{ backgroundColor: BRAND }}
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
