"use client";
import { useEffect, useRef, useState } from "react";
import careersData from "@/components/activeInfo/careers.json";

interface CareerOffer {
  name: string;
  role: string;
  company: string;
}

interface CareerYearData {
  fulltime: CareerOffer[];
  interns: CareerOffer[];
}

type CareersData = Record<string, CareerYearData>;

export default function CareersPage() {
  const data = careersData as CareersData;
  const years = Object.keys(data).sort((a, b) => Number(b) - Number(a));
  const [selectedYear, setSelectedYear] = useState<string>(years[0]);
  const { fulltime = [], interns = [] } = data[selectedYear] || {};

  const fulltimeRef = useRef<HTMLDivElement>(null);
  const internsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    if (fulltimeRef.current) observer.observe(fulltimeRef.current);
    if (internsRef.current) observer.observe(internsRef.current);

    return () => observer.disconnect();
  }, [selectedYear]);

  return (
    <>
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="bg-[#141416] text-white min-h-screen flex flex-col">
        <div className="max-w-4xl mx-auto px-6 py-12 w-full flex flex-col gap-12">
          <h1 className="text-5xl font-thin text-center">Careers Page</h1>

          {/* Year Tabs */}
          <div className="flex justify-center gap-3">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full text-lg font-medium border transition-colors cursor-pointer ${
                  selectedYear === year
                    ? "bg-[#FFD700] text-black border-[#FFD700]"
                    : "border-gray-400 text-white hover:bg-white/10"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Full-time Section */}
          <div
            ref={fulltimeRef}
            className="fade-in-section flex flex-col gap-4"
          >
            <h2 className="text-3xl font-thin text-center text-[#FFD700]">
              {selectedYear} Full-time
            </h2>
            <div className="flex flex-col gap-3">
              {fulltime.map((offer, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gray-800/50 p-5 border border-gray-700 hover:bg-gray-800 transition-all duration-200 shadow-sm"
                >
                  <p className="text-xl font-semibold">{offer.name}</p>
                  <p className="text-gray-300 mt-1">
                    {offer.role} <span className="text-[#FFD700]">@ {offer.company}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Internships Section */}
          <div
            ref={internsRef}
            className="fade-in-section flex flex-col gap-4"
          >
            <h2 className="text-3xl font-thin text-center text-[#FFD700]">
              {selectedYear} Internships
            </h2>
            <div className="flex flex-col gap-3">
              {interns.map((offer, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gray-800/50 p-5 border border-gray-700 hover:bg-gray-800 transition-all duration-200 shadow-sm"
                >
                  <p className="text-xl font-semibold">{offer.name}</p>
                  <p className="text-gray-300 mt-1">
                    {offer.role} <span className="text-[#FFD700]">@ {offer.company}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
