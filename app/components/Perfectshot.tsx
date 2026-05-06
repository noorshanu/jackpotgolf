import Image from "next/image";
import Link from "next/link";
import { FaPlane } from "react-icons/fa"; // Using as placeholder for the airplane icon

export default function Perfectshot() {
  return (
    <section className="relative flex w-full flex-col items-center justify-start bg-white py-12 md:py-20">
      <div className="flex w-full flex-col items-center gap-10 px-4 sm:px-6 md:px-8 lg:max-w-6xl">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center mt-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A2026] leading-[1.1]">
      RECENT WINNERS
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mt-2 text-gray-500 drop-shadow-md max-w-md leading-snug">
            See the latest winners of the Jackpot Golf contest.
          </p>
        </div>

        {/* Mobile Device Mockup */}
        <div className="relative mx-auto mt-2 w-full max-w-[280px] shrink-0 sm:max-w-[320px] md:max-w-[360px]">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] border-[8px] border-[#383C41] bg-black shadow-xl sm:rounded-[3rem] sm:border-[10px]">
            {/* Dynamic Island Mock */}
            <div className="absolute left-1/2 top-2 z-20 h-6 w-1/3 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-7" />
            
            <Image
              src="/images/Hero_Mobile_GIF.gif"
              alt="3D Flyover Demo"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>

        {/* Text and Buttons Section */}
        <div className="flex w-full flex-col gap-5 md:max-w-2xl mt-4 text-left">
          
          {/* Feature Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-xl bg-[#1A2026] shadow-md">
              <FaPlane className="h-7 w-7 text-white -rotate-45" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A2026] uppercase tracking-wide">
              3D FLYOVER
            </h3>
          </div>

          {/* Description Paragraph */}
          <p className="text-[1.05rem] sm:text-lg font-medium leading-relaxed text-[#1A2026]/80 tracking-tight">
            Get the ultimate course preview with real-time virtual flyovers. See exactly where your ball will land on the fairway and green, using your personal club distances for precise shot planning. Visualize your ball in flight and strategize every tee and approach shot with total confidence.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#try-now"
              className="flex w-full items-center justify-center rounded-xl bg-[#263519] px-8 py-[1.125rem] text-[1.05rem] font-extrabold tracking-wide text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              TRY IT NOW
            </Link>
            
            <Link
              href="#see-action"
              className="flex w-full items-center justify-center rounded-xl border-[2.5px] border-[#1A2026] bg-white px-8 py-[1.125rem] text-[1.05rem] font-extrabold tracking-wide text-[#1A2026] shadow-sm transition-transform hover:bg-gray-50 active:scale-[0.98]"
            >
              SEE IT IN ACTION
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}