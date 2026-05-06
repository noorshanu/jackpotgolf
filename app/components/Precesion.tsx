import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa"; // Using as placeholder for the GPS icon

export default function Precesion() {
  return (
    <section className="relative flex w-[calc(100%-10px)] mx-[5px] mt-[10px] flex-col items-center justify-start overflow-hidden rounded-[14px] bg-[#EEEEEE] py-12 md:py-20">
      <div className="flex w-full flex-col items-center gap-10 px-4 sm:px-6 md:px-8 lg:max-w-6xl">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center mt-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A2026] leading-[1.1]">
          ACTIVE COURSES
          </h2>
        </div>

        {/* Mobile Device Mockup */}
        <div className="relative mx-auto mt-2 w-full max-w-[280px] shrink-0 sm:max-w-[320px] md:max-w-[360px]">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] border-[8px] border-[#a0a0a0] bg-black shadow-xl sm:rounded-[3rem] sm:border-[10px]">
            {/* Dynamic Island Mock */}
            <div className="absolute left-1/2 top-2 z-20 h-6 w-1/3 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-7" />
            
            <Image
              src="/images/Hero_Mobile_GIF.gif"
              alt="Play With Precision Demo"
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
              <FaMapMarkerAlt className="h-6 w-6 text-[#92d050]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A2026] uppercase tracking-wide">
              GPS TARGET DISTANCES
            </h3>
          </div>

          {/* Description Paragraph */}
          <p className="text-[1.05rem] sm:text-lg font-medium leading-relaxed text-[#1A2026]/90 tracking-tight">
            Tap anywhere on the course to get exact GPS distances, automatically adjusted for slope elevations. Play the true yardage, dial in your club selection, and eliminate guesswork—so you never come up short or long.
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
              className="flex w-full items-center justify-center rounded-xl border-[2.5px] border-[#263519] bg-transparent px-8 py-[1.125rem] text-[1.05rem] font-extrabold tracking-wide text-[#1A2026] shadow-sm transition-transform hover:bg-[#1A2026]/5 active:scale-[0.98]"
            >
              SEE IT IN ACTION
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}