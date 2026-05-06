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
    <footer className="relative w-full bg-[#1e3415] px-6 py-12 text-white md:px-12 lg:px-24">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-xl bg-[#39424e] shadow-lg transition-transform hover:bg-[#4a5462] active:scale-95 z-50 border-2 border-white/20"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="h-6 w-6" />
      </button>

      <div className="mx-auto max-w-6xl">
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
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-8">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <Link href="#map-licensing" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">
              Map Licensing
            </Link>
            
            <div className="mt-4 sm:mt-6 flex flex-col gap-5 sm:gap-6">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider">JACKPOT GOLF</h3>
              <Link href="#about" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">About Us</Link>
              <Link href="#blog" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">Blog</Link>
              <Link href="#contact" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">Contact Us</Link>
              <Link href="#login" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">Club House Log In</Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <Link href="#find-course" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">
              Find A Course
            </Link>
            <Link href="#explore" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">
              Explore More Features
            </Link>
            
            <div className="mt-3 sm:mt-6 flex flex-col gap-5 sm:gap-6">
              <Link href="#privacy" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">Privacy Policy</Link>
              <Link href="#terms" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">Terms of Service</Link>
              <Link href="#opt-out" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">Opt-out of Ads/Sharing</Link>
              <Link href="#do-not-sell" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors max-w-[200px] sm:max-w-none leading-snug pr-2">Do Not Sell or Share My Info</Link>
              <Link href="#accessibility" className="text-base sm:text-lg font-medium hover:text-white/80 transition-colors">Accessibility</Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-20 flex flex-col gap-6">
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
          <div className="flex flex-col gap-2 mt-2">
            <Link href="#privacy" className="text-sm font-medium underline underline-offset-4 hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <p className="text-sm font-medium mt-1">
              © 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}