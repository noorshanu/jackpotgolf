export type CourseLocation = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  /** Full address shown in map tooltip */
  address: string;
  city: string;
  state: string;
  contests: string;
};

/** Sample partner courses — replace or load from API later */
export const COURSE_LOCATIONS: CourseLocation[] = [
  {
    id: "tpc-sawgrass",
    name: "TPC Sawgrass",
    lat: 30.1986,
    lng: -81.3955,
    address: "110 Championship Way, Ponte Vedra Beach, FL 32082, USA",
    city: "Ponte Vedra Beach",
    state: "FL",
    contests: "Par 3 contest · Closest to pin",
  },
  {
    id: "pebble-beach",
    name: "Pebble Beach Golf Links",
    lat: 36.5682,
    lng: -121.9505,
    address: "1700 17-Mile Dr, Pebble Beach, CA 93953, USA",
    city: "Pebble Beach",
    state: "CA",
    contests: "Hole-in-one jackpot · Skills contests",
  },
  {
    id: "pinehurst",
    name: "Pinehurst Resort",
    lat: 35.1894,
    lng: -79.4686,
    address: "80 Carolina Vista Dr, Pinehurst, NC 28374, USA",
    city: "Pinehurst",
    state: "NC",
    contests: "Daily pools · AI-verified shots",
  },
  {
    id: "torrey-pines",
    name: "Torrey Pines Golf Course",
    lat: 32.9002,
    lng: -117.2453,
    address: "11480 N Torrey Pines Rd, La Jolla, CA 92037, USA",
    city: "La Jolla",
    state: "CA",
    contests: "Ocean views · Live leaderboards",
  },
  {
    id: "whistling-straits",
    name: "Whistling Straits",
    lat: 43.8519,
    lng: -87.7051,
    address: "N8501 County Road LS, Sheboygan, WI 53083, USA",
    city: "Sheboygan",
    state: "WI",
    contests: "Major-style holes · Video proof",
  },
  {
    id: "bandon-dunes",
    name: "Bandon Dunes Golf Resort",
    lat: 43.1872,
    lng: -124.3829,
    address: "57744 Round Lake Rd, Bandon, OR 97411, USA",
    city: "Bandon",
    state: "OR",
    contests: "Links golf · Multi-course network",
  },
];
