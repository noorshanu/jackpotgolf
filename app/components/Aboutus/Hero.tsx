import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full">
      {/* Top: hero image + overlay + title */}
      <div className="relative flex min-h-[45vh] w-full items-center justify-center sm:min-h-[50vh]">
        <Image
          src="/images/herobg1.png"
          alt="Golf course"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black/50"
          aria-hidden
        />
        <h1 className="relative z-10 px-4 text-center text-5xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-6xl md:text-7xl">
          About Us
        </h1>
      </div>

      {/* Bottom: white content block */}
      <div className="bg-white px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-3xl text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl">
            About GolfLogix
          </h2>
          <p className="mt-4 text-lg font-bold uppercase tracking-wide text-[#1A1A1A] sm:text-xl">
            GolfLogix is the #1 app for golf
          </p>
          <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-[#1A1A1A] sm:text-lg">
            With millions of downloads, GolfLogix gives golfers around the world
            the confidence, precision, and intelligence they need to lower their
            scores.
          </p>
          <div className="mt-10">
            <Link
              href="#download"
              className="inline-flex items-center justify-center rounded-full bg-[#1a3508] px-10 py-4 text-base font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] sm:px-12 sm:py-4 sm:text-lg"
            >
              DOWNLOAD NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
