"use client";

import { useState } from "react";
import { FaLocationArrow, FaSearch } from "react-icons/fa";
import { COURSE_LOCATIONS } from "./courseLocations";
import CoursesMapClient from "./CoursesMapClient";

export default function FindCoursesExperience() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [mapKey, setMapKey] = useState(0);

  const filtered = COURSE_LOCATIONS.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.city.toLowerCase().includes(query.toLowerCase()) ||
      c.state.toLowerCase().includes(query.toLowerCase()) ||
      c.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      {/* Search bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <FaSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1a3508]/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by course, city, or state…"
            className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-[#1a3508] shadow-sm outline-none ring-[#4fad11]/30 transition-shadow placeholder:text-gray-400 focus:border-[#4fad11] focus:ring-2"
            aria-label="Search courses"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            setSelectedId(null);
            setMapKey((k) => k + 1);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1a3508]/20 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#1a3508] shadow-sm transition-colors hover:bg-[#f3f4f6]"
        >
          <FaLocationArrow className="text-[#4fad11]" />
          Reset map view
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        {/* Map */}
        <div key={mapKey} className="min-h-0">
          <CoursesMapClient
            courses={filtered}
            selectedId={selectedId}
            onSelectCourse={setSelectedId}
          />
        </div>

        {/* Course list */}
        <aside className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg ring-1 ring-gray-100/80">
          <h2 className="text-lg font-extrabold uppercase tracking-tight text-[#1a3508]">
            Partner courses
            <span className="ml-2 text-sm font-semibold normal-case text-gray-500">
              ({filtered.length})
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Hover a pin for the full address. Click a pin or a row to fly the map
            to that location.
          </p>
          <ul className="custom-scrollbar flex max-h-[min(70vh,560px)] flex-col gap-2 overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <li className="rounded-xl bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
                No courses match your search.
              </li>
            ) : (
              filtered.map((course) => {
                const active = selectedId === course.id;
                return (
                  <li key={course.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(course.id)}
                      className={`w-full rounded-xl border px-4 py-3 text-left transition-all ${
                        active
                          ? "border-[#4fad11] bg-[#4fad11]/10 shadow-md ring-1 ring-[#4fad11]/30"
                          : "border-transparent bg-gray-50 hover:border-[#4fad11]/30 hover:bg-white"
                      }`}
                    >
                      <p className="font-bold text-[#1a3508]">{course.name}</p>
                      <p className="mt-0.5 text-xs font-medium text-gray-500">
                        {course.city}, {course.state}
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs text-gray-600">
                        {course.address}
                      </p>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#4fad11]">
                        {course.contests}
                      </p>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </aside>
      </div>
    </div>
  );
}
