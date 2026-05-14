import Image from "next/image";

type Milestone = {
  year: string;
  title: string;
  desc: string;
  image: string;
};

const HISTORY: Milestone[] = [
  {
    year: "2025",
    title: "3D VIRTUAL REALITY",
    desc: "In 2025, GolfLogix introduced a groundbreaking app, becoming the first to offer a revolutionary 3D Virtual Reality Golf GPS experience.",
    image: "/1.jpg",
  },
  {
    year: "2020",
    title: "GOLFLOGIX LAUNCHES GREEN BOOKS",
    desc: "In 2020, GolfLogix launched Green Books for recreational golfers to purchase and legally use the same green reading information that Pros get to use on Tour.",
    image: "/2.jpg",
  },
  {
    year: "2019",
    title: "GOLFLOGIX ADDS PUTT LINE TO APP",
    desc: "In 2019, GolfLogix added Putt Line to its app which shows exactly how a golfer's putt will break with an interactive line and aiming target.",
    image: "/3.jpg",
  },
  {
    year: "2016",
    title: "GOLFLOGIX INTRODUCES PUTT BREAKS",
    desc: "From 2016-2017, GolfLogix started mapping thousands of golf greens across the USA with centimeter accuracy. At the 2018 PGA Show, GolfLogix released Putt Breaks, the first commercial product to incorporate detailed green reading.",
    image: "/memb.jpeg",
  },
];

const BRAND = "#1a3508";

function Marker() {
  return (
    <span
      className="block h-3 w-3 shrink-0"
      style={{ backgroundColor: BRAND }}
      aria-hidden
    />
  );
}

function TextBlock({ item }: { item: Milestone }) {
  return (
    <div className="flex flex-col">
      <h3
        className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl"
        style={{ color: BRAND }}
      >
        {item.year}
      </h3>
      <h4 className="mt-3 text-base font-extrabold uppercase tracking-tight text-[#1A1A1A] sm:text-lg">
        {item.title}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A] sm:text-base">
        {item.desc}
      </p>
    </div>
  );
}

function ImageBlock({ item }: { item: Milestone }) {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-lg sm:h-56 md:h-64">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 90vw, 280px"
      />
    </div>
  );
}

export default function OurHistory() {
  return (
    <section className="w-full bg-[#f1f2f4] py-12 sm:py-16 md:py-20">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl md:text-center md:text-4xl">
          Our History
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1A1A1A] sm:text-lg md:mx-auto md:text-center">
          With millions of downloads on the world&apos;s best-selling
          Smartphones, GolfLogix gives golfers around the globe the best
          features, the best quality, and the best price!
        </p>
      </div>

      {/* Timeline: horizontally scrollable on all sizes */}
      <div
        className="mt-10 w-full overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-14"
        role="region"
        aria-label="GolfLogix history timeline"
      >
        <ul
          className="flex w-max snap-x snap-mandatory items-stretch gap-6 px-6 sm:gap-8 sm:px-10 md:px-16"
        >
          {HISTORY.map((item, idx) => {
            const imageTop = idx % 2 === 1; // alternate on desktop: 1st text-top, 2nd image-top, ...

            return (
              <li
                key={item.year}
                className="flex w-[80vw] max-w-[320px] shrink-0 snap-center flex-col sm:w-[300px] md:w-[280px]"
              >
                {/* Top row */}
                <div className="flex min-h-56 flex-col justify-end pb-4 md:min-h-72">
                  <div className={imageTop ? "md:order-1" : ""}>
                    <div className="md:hidden">
                      <TextBlock item={item} />
                    </div>
                    <div className="hidden md:block">
                      {imageTop ? <ImageBlock item={item} /> : <TextBlock item={item} />}
                    </div>
                  </div>
                </div>

                {/* Center line with marker */}
                <div className="relative flex items-center">
                  <span
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
                    style={{ backgroundColor: "rgba(26,53,8,0.25)" }}
                    aria-hidden
                  />
                  <Marker />
                </div>

                {/* Bottom row */}
                <div className="pt-4 md:min-h-72">
                  <div className="md:hidden">
                    <ImageBlock item={item} />
                  </div>
                  <div className="hidden md:block">
                    {imageTop ? <TextBlock item={item} /> : <ImageBlock item={item} />}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
