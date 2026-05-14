"use client";

import { useEffect, useMemo } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { CourseLocation } from "./courseLocations";

/** Teardrop pin — SVG string (no react-dom/server in client) */
const PIN_HTML = `
  <div style="display:flex;align-items:flex-start;justify-content:center;width:40px;height:44px;">
    <svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#1a3508" stroke="#4fad11" stroke-width="2" d="M16 2C9.4 2 4 7.2 4 13.6c0 8.4 12 22.4 12 22.4S28 22 28 13.6C28 7.2 22.6 2 16 2z"/>
      <circle cx="16" cy="14" r="4" fill="#a3e635"/>
    </svg>
  </div>
`;

const courseIcon = L.divIcon({
  html: PIN_HTML,
  className: "!bg-transparent !border-0",
  iconSize: [40, 44],
  iconAnchor: [20, 44],
  tooltipAnchor: [0, -36],
});

function FitBounds({ courses }: { courses: CourseLocation[] }) {
  const map = useMap();
  useEffect(() => {
    if (courses.length === 0) return;
    const bounds = L.latLngBounds(
      courses.map((c) => [c.lat, c.lng] as L.LatLngTuple)
    );
    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 6 });
  }, [map, courses]);
  return null;
}

function FlyToSelection({
  target,
}: {
  target: { lat: number; lng: number } | null;
}) {
  const map = useMap();
  useEffect(() => {
    if (!target) return;
    map.flyTo([target.lat, target.lng], 11, { duration: 1.1 });
  }, [map, target]);
  return null;
}

type Props = {
  courses: CourseLocation[];
  selectedId: string | null;
  onSelectCourse: (id: string) => void;
};

export default function CoursesMapClient({
  courses,
  selectedId,
  onSelectCourse,
}: Props) {
  const flyTarget = useMemo(() => {
    if (!selectedId) return null;
    const c = courses.find((x) => x.id === selectedId);
    return c ? { lat: c.lat, lng: c.lng } : null;
  }, [courses, selectedId]);

  const center: L.LatLngTuple = [39.8283, -98.5795];

  return (
    <div className="relative z-0 h-[min(70vh,560px)] w-full min-h-[360px] overflow-hidden rounded-2xl ring-1 ring-[#1a3508]/20 shadow-xl">
      <MapContainer
        center={center}
        zoom={4}
        scrollWheelZoom
        className="z-0 h-full w-full"
        style={{ background: "#e8ede4" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds courses={courses} />
        <FlyToSelection target={flyTarget} />
        {courses.map((course) => (
          <Marker
            key={course.id}
            position={[course.lat, course.lng]}
            icon={courseIcon}
            eventHandlers={{
              click: () => onSelectCourse(course.id),
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -6]}
              opacity={1}
              sticky
            >
              <div
                style={{
                  maxWidth: 240,
                  textAlign: "left",
                  color: "#1a3508",
                  fontSize: 12,
                  lineHeight: 1.35,
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#4fad11",
                    margin: 0,
                  }}
                >
                  {course.name}
                </p>
                <p style={{ margin: "6px 0 0", fontWeight: 500 }}>
                  {course.address}
                </p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
