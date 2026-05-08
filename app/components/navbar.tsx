"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const brand = "#1d3c16";

const navLinks = [
  { href: "#for-golfers", label: "For Golfers" },
  { href: "#for-courses", label: "For Courses" },
  { href: "/for-tournament", label: "For Tournaments" },
  { href: "#find-course", label: "Find a Course" },
  { href: "#about-us", label: "About Us" },
  { href: "#login", label: "Login" },
];

function TryFreeButton({ className }: { className?: string }) {
  return (
    <Link
      href="#enter-contest"
      className={`inline-flex items-center justify-center rounded-lg px-3 sm:px-5 py-2.5 sm:py-3 text-xl sm:text-xl font-bold uppercase tracking-wide bg-green-500 text-white ${className ?? "w-full max-w-[280px]"}`}
      style={{
        borderColor: brand,
        color: "white",
        backgroundColor: "#1a3508",
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-5 md:gap-4 md:px-6 md:py-4">
        <div className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Jackpot Golf"
            width={106}
            height={106}
            className="h-24 w-24 shrink-0 rounded-xl object-cover md:h-24 md:w-24 md:rounded-xl"
            priority
          />
        </div>

        <div className="flex flex-col items-end gap-1.5 min-w-0">
          <div className="flex items-center justify-end gap-2 sm:gap-3 w-full mr-2">
            <TryFreeButton className="w-[280px]" />
          </div>
          
          <div className="flex justify-center w-full gap-2">

            <Link href="#login" className="text-lg sm:text-lg  hover:text-white/80 transition-colors  text-green-800 font-bold uppercase tracking-widest px-4 py-2 rounded-md underline ml-38">
            LogIn
            </Link>
            <button
              type="button"
              className="flex shrink-0 flex-col justify-center gap-[5px] p-2 md:hidden ml-auto"
              style={{ color: brand }}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <>
                  <span className="block h-0.5 w-6 rounded-full bg-current" />
                  <span className="block h-0.5 w-6 rounded-full bg-current" />
                </>
              )}
            </button>
          </div>
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
              <ul className="flex flex-col overflow-hidden ">
                {navLinks.map(({ href, label }) => (
                  <li
                    key={href}
                    className=""
                  >
                    <Link
                      href={href}
                      className="block py-3.5 pl-4 pr-4 text-base font-semibold tracking-tight transition-colors hover:bg-[rgba(29,60,22,0.06)]"
                      style={{ color: brand }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="p-4">
                  <Link
                    href="#enter-contest"
                    className="block w-full rounded-lg bg-[#1a3508] py-3.5 text-center text-base font-bold tracking-tight text-white transition-colors hover:bg-green-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    ENTER CONTEST
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
