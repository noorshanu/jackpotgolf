import Image from "next/image";
import Link from "next/link";
import { FaCube } from "react-icons/fa"; // Using this as a placeholder for the 3D VR icon
import { IoQrCodeOutline } from "react-icons/io5";
import { GiGolfFlag } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
export default function Newex() {
  return (
    <section className="relative flex min-h-[100dvh] w-[calc(100%-20px)] mx-[10px] mt-[10px] flex-col items-center justify-start overflow-hidden rounded-[16px] py-12 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.png"
          alt="Golf Course Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
        {/* Overlay gradient as requested */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-center gap-8 px-4 sm:px-6 md:px-8 lg:max-w-6xl">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center mt-4 sm:mt-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md leading-tight">
            HOW IT WORKS
          </h2>
        </div>

        {/* Mobile Device Mockup */}
        <div className="relative mx-auto mt-4 w-full max-w-[300px] shrink-0 sm:max-w-[340px] md:max-w-[380px]">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] border-[10px] border-[#2A2A2A] bg-black shadow-2xl sm:rounded-[3rem] sm:border-[12px]">
            {/* Dynamic Island Mock */}
            <div className="absolute left-1/2 top-2 z-20 h-6 w-1/3 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-7" />
            
            <Image
              src="/images/Hero_Mobile_GIF.gif"
              alt="3D Virtual Reality Demo"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>

        {/* Text and Buttons Section */}
        <div className="flex w-full flex-col gap-6 md:max-w-2xl mt-4 md:mt-8 text-left">
          
          {/* Feature Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1A2D1B] border border-[#2D4C1E] shadow-lg">
              {/* Replace with specific 3D icon if needed, using FaCube for now */}
              <IoQrCodeOutline className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md uppercase tracking-wide">
              SCAN
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1A2D1B] border border-[#2D4C1E] shadow-lg">
              {/* Replace with specific 3D icon if needed, using FaCube for now */}
                <GiGolfFlag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md uppercase tracking-wide">
                PLAY
              </h3>
            </div>
            <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1A2D1B] border border-[#2D4C1E] shadow-lg">
              {/* Replace with specific 3D icon if needed, using FaCube for now */}
                <GiTrophyCup className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md uppercase tracking-wide">
                WIN
              </h3>
            </div>


          {/* Description Paragraph */}
          <p className="text-lg sm:text-xl font-medium leading-relaxed text-white drop-shadow-sm">
            The only app with immersive 3D virtual holes. Get a complete view of every course, from tee to green. Read elevation changes, visualize every shot, and strategize with precision—so you can visualize the course like never before.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-4">
            <Link
              href="#enter-contest"
              className="flex w-full items-center justify-center rounded-xl bg-green-500 px-8 py-5 text-lg font-extrabold tracking-wide text-[#ffffff] shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
             ENTER CONTEST
            </Link>
            
      
          </div>

        </div>
      </div>
    </section>
  );
}