"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const brand = "#1d3c16";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#about-us", label: "About Us" },
];

function StarRating({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className ?? ""}`}
      style={{ color: brand }}
      aria-label="Rated 4.5 out of 5 stars"
    >
      <FaStar className="size-[15px]" aria-hidden />
      <FaStar className="size-[15px]" aria-hidden />
      <FaStar className="size-[15px]" aria-hidden />
      <FaStar className="size-[15px]" aria-hidden />
      <FaStarHalfAlt className="size-[15px]" aria-hidden />
    </div>
  );
}

function TryFreeButton({ className }: { className?: string }) {
  return (
    <Link
      href="#enter-contest"
      className={`inline-flex items-center justify-center rounded-lg w-[280px] px-5 py-3 text-xl font-bold uppercase tracking-wide bg-green-500 text-white ${className ?? ""}`}
      style={{
        borderColor: brand,
        color: "white",
        backgroundColor: "green-500",
      }}
    >
     ENTER CONTEST
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-5 md:gap-4 md:px-6 md:py-4">
        <div className="">
          <Image
            src="/images/logo.png"
            alt="Jackpot Golf"
            width={106}
            height={106}
            className="h-24 w-24 shrink-0 rounded-xl object-cover md:h-14 md:w-14 md:rounded-xl"
            priority
          />
      
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2 md:flex-row md:items-center md:gap-3 ">
          <TryFreeButton />

          <button
            type="button"
            className="flex flex-col justify-center gap-[5px] p-2 md:hidden"
            style={{ color: brand }}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="block h-0.5 w-6 rounded-full bg-current" />
            <span className="block h-0.5 w-6 rounded-full bg-current" />
          </button>
        </div>
      </div>

      <div
        className={`grid md:hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            id="mobile-nav-menu"
            className={`border-t px-4 py-4 transition-all duration-300 ease-out motion-reduce:transition-none ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0 pointer-events-none"
            }`}
            style={{ borderColor: `${brand}33` }}
            aria-hidden={!menuOpen}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              <ul className="flex flex-col overflow-hidden rounded-lg border border-[rgba(29,60,22,0.22)]">
                {navLinks.map(({ href, label }) => (
                  <li
                    key={href}
                    className="border-b border-[rgba(29,60,22,0.22)] last:border-b-0"
                  >
                    <Link
                      href={href}
                      className="block py-3.5 pl-1 pr-1 text-base font-semibold tracking-tight transition-colors hover:bg-[rgba(29,60,22,0.06)]"
                      style={{ color: brand }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
