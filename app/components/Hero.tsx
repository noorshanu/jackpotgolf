import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-between overflow-hidden py-12 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.jpg"
          alt="Golf Course Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Overlay to ensure text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-between gap-8 px-4">
        
        {/* Headlines */}
        <div className="flex flex-col items-center text-center mt-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.2em] text-white drop-shadow-md uppercase">
            PLAY WITH
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-normal text-white drop-shadow-xl mt-1">
            Confidence
          </h1>
        </div>

        {/* Mobile Device Mockup */}
        <div className="relative mx-auto mt-4 w-full max-w-[280px] shrink-0 sm:max-w-[320px] md:max-w-[360px]">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] border-[10px] border-[#2A2A2A] bg-black shadow-2xl sm:rounded-[3rem] sm:border-[12px]">
            {/* Dynamic Island Mock */}
            <div className="absolute left-1/2 top-2 z-20 h-6 w-1/3 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-7" />
            
            <Image
              src="/images/Hero_Mobile_GIF.gif"
              alt="App Demo"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-4 mt-6 w-full max-w-[280px] sm:max-w-[320px]">
          <Link
            href="#download"
            className="flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-extrabold tracking-wide text-[#1A2D1B] shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            DOWNLOAD NOW
          </Link>
        </div>

      </div>
    </section>
  );
}
