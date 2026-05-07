"use client";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Mock data for reviews based on the image
const REVIEWS_TOP = [
  {
    id: 1,
    rating: 5,
    title: "Caddie In My Pocket",
    date: "Jan 15, 2025",
    author: "Atethatace",
    content: "The virtual reality new favorite feature shooting better at every new course",
  },
  {
    id: 2,
    rating: 5,
    title: "Best App In Golf",
    date: "May 1, 2025",
    author: "GolferPro",
    content: "The new update to the GolfLogix GPS app is incredible. The Virtual Reality feature is unlike anything I have ever seen in a GPS app. I can read every green and see exactly how my ball will play using 3D flyovers. It's so immersive and lets me play with more confidence.",
  },
  {
    id: 3,
    rating: 5,
    title: "Game Changer",
    date: "Aug 12, 2024",
    author: "BirdieHunter",
    content: "This app literally changed how I play. The distances are spot on and the green reading feature saves me at least 3-4 strokes per round.",
  },
  {
    id: 4,
    rating: 4.5,
    title: "Must Have For Any Golfer",
    date: "Nov 3, 2024",
    author: "WeekendWarrior",
    content: "I've tried them all and this is the best. The battery usage is actually pretty good and the stats tracking helps me know what to practice.",
  },
];

const REVIEWS_BOTTOM = [
  {
    id: 5,
    rating: 5,
    title: "Great Tool",
    date: "Apr 4, 2024",
    author: "kikipaco1",
    content: "A wonderful App, to use, it's very simple and accurate, thanks y'all.",
  },
  {
    id: 6,
    rating: 5,
    title: "Top tier app for sure",
    date: "Dec 10, 2024",
    author: "GolfNut99",
    content: "Been using GolfLogix for over 4 years. They knock it out of the park with every update. The putt line analysis is crazy accurate. I love the new 3D views that look like a video game. This will stay on my phone forever.",
  },
  {
    id: 7,
    rating: 5,
    title: "Incredible accuracy",
    date: "Feb 22, 2025",
    author: "SliceNoMore",
    content: "The GPS distances are spot on compared to my laser rangefinder. Actually prefer the app because I get front, center, and back of green.",
  },
  {
    id: 8,
    rating: 5,
    title: "Worth every penny",
    date: "Sep 18, 2024",
    author: "ScratchDreamer",
    content: "The premium features are absolutely worth it. Approach view helps me avoid hazards I can't even see from the fairway.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[#2d4c1e]">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <FaStar key={star} className="size-[13px]" />;
        }
        if (rating >= star - 0.5) {
          return <FaStarHalfAlt key={star} className="size-[13px]" />;
        }
        // Empty star logic could go here if needed, but the design just shows filled
        return null;
      })}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS_TOP[0] }) {
  return (
    <div className="flex h-full w-[280px] shrink-0 flex-col gap-3 rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] sm:w-[320px] md:w-[360px]">
      <div className="flex items-center gap-2">
        {review.rating === 5 && <span className="text-sm font-bold text-[#1A2026]">5</span>}
        <StarRating rating={review.rating} />
      </div>
      
      <h4 className="text-lg font-bold tracking-tight text-[#1A2026]">
        {review.title}
      </h4>
      
      <p className="text-xs font-semibold text-[#1A2026]/70">
        {review.date} - {review.author}
      </p>
      
      <p className="text-[0.95rem] leading-relaxed text-[#1A2026]/80 line-clamp-6">
        {review.content}
      </p>
    </div>
  );
}

export default function GolfLove() {
  // We duplicate the arrays to create a seamless loop effect
  const topMarquee = [...REVIEWS_TOP, ...REVIEWS_TOP, ...REVIEWS_TOP];
  const bottomMarquee = [...REVIEWS_BOTTOM, ...REVIEWS_BOTTOM, ...REVIEWS_BOTTOM];

  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-[#f3f4f6] py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A2026]">
            Golfers Love Us
          </h2>
          
          {/* <div className="flex items-center gap-3 text-lg font-bold tracking-wide text-[#1A2026]/80">
            <span>4.8</span>
            <div className="flex items-center gap-0.5 text-[#2d4c1e]">
              <FaStar className="size-[16px]" />
              <FaStar className="size-[16px]" />
              <FaStar className="size-[16px]" />
              <FaStar className="size-[16px]" />
              <FaStarHalfAlt className="size-[16px]" />
            </div>
         
          </div> */}
        </div>

      </div>

      {/* Marquee Container */}
      <div className="relative mt-12 flex w-full flex-col gap-6 overflow-hidden">
        
        {/* Top Marquee (Moves Left) */}
        <div className="flex w-full overflow-hidden">
          <div 
            className="flex w-max gap-6 px-3 hover:[animation-play-state:paused]" 
            style={{ animation: "marquee-left 40s linear infinite" }}
          >
            {topMarquee.map((review, idx) => (
              <ReviewCard key={`top-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Bottom Marquee (Moves Right) */}
        <div className="flex w-full overflow-hidden">
          <div 
            className="flex w-max gap-6 px-3 hover:[animation-play-state:paused]" 
            style={{ animation: "marquee-right 40s linear infinite" }}
          >
            {bottomMarquee.map((review, idx) => (
              <ReviewCard key={`bottom-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Gradient fading edges for smoother look (Optional, but looks nice) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#f3f4f6] to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#f3f4f6] to-transparent md:w-24" />
      </div>
    </section>
  );
}