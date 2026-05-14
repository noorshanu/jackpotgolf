"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaChevronUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X logo

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#1a3508] px-6 py-12 text-white md:px-12 lg:px-24 text-center sm:text-left">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-xl bg-[#39424e] shadow-lg transition-transform hover:bg-[#4a5462] active:scale-95 z-50 border-2 border-white/20"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="h-6 w-6" />
      </button>

      <div className="mx-auto max-w-6xl flex flex-col items-center sm:items-start">
        {/* Logo Section */}
        <div className="mb-12">
          <Image
            src="/images/logo.png"
            alt="Jackpot Golf Logo"
            width={106}
            height={106}
            className="h-24 w-24 shrink-0 rounded-xl object-cover md:h-14 md:w-14 md:rounded-xl"
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-12 sm:gap-x-8 w-full">

          {/* Column 1: Main Nav Items */}
          <div className="flex flex-col items-center sm:items-start gap-5 sm:gap-6">
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider">EXPLORE</h3>
            <Link href="/" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">For Golfers</Link>
            <Link href="/courses" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">For Courses</Link>
            <Link href="/for-tournament" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">For Tournaments</Link>
            <Link href="#find-course" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">Find a Course</Link>
            <Link href="/about-us" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">About Us</Link>
            <Link href="#login" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">Login</Link>
          </div>

     

  

        </div>

        {/* Bottom Section */}
        <div className="mt-20 flex flex-col items-center sm:items-start gap-6 w-full">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#facebook" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#twitter" aria-label="X (Twitter)" className="hover:opacity-80 transition-opacity">
              <FaXTwitter className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright & Privacy Bottom Link */}
          <div className="flex flex-col items-center sm:items-start gap-2 mt-2">
            <Link href="#privacy" className="text-sm font-medium underline underline-offset-4 hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <p className="text-sm font-medium mt-1 text-center sm:text-left">
              © 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}