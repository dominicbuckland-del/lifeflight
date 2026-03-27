"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Station {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stations: Station[] = [
  {
    id: "cockpit",
    label: "01",
    title: "Flight Deck",
    description:
      "Dual-pilot cockpit with night vision capability, satellite navigation, and terrain awareness systems. LifeFlight crews fly in conditions most aircraft won\u2019t \u2014 storms, mountain ranges, zero visibility.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="12" y="20" width="40" height="28" stroke="#FFB500" strokeWidth="2" />
        <rect x="16" y="24" width="14" height="10" stroke="#FFB500" strokeWidth="1.5" opacity="0.6" />
        <rect x="34" y="24" width="14" height="10" stroke="#FFB500" strokeWidth="1.5" opacity="0.6" />
        <circle cx="23" cy="42" r="3" stroke="#FFB500" strokeWidth="1.5" />
        <circle cx="41" cy="42" r="3" stroke="#FFB500" strokeWidth="1.5" />
        <line x1="20" y1="16" x2="44" y2="16" stroke="#FFB500" strokeWidth="1.5" opacity="0.4" />
        <line x1="22" y1="12" x2="42" y2="12" stroke="#FFB500" strokeWidth="1" opacity="0.2" />
      </svg>
    ),
  },
  {
    id: "monitor",
    label: "02",
    title: "Cardiac Monitor",
    description:
      "Hospital-grade 12-lead ECG, continuous SpO2, invasive blood pressure, capnography, and defibrillation. The same monitoring capability as an emergency department \u2014 at 2,000 feet.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="10" y="14" width="44" height="36" stroke="#FFB500" strokeWidth="2" />
        <polyline points="14,34 22,34 26,22 30,42 34,28 38,34 50,34" stroke="#62C3A5" strokeWidth="2" fill="none" />
        <rect x="14" y="42" width="8" height="4" stroke="#FFB500" strokeWidth="1" opacity="0.5" />
        <rect x="26" y="42" width="8" height="4" stroke="#FFB500" strokeWidth="1" opacity="0.5" />
        <rect x="38" y="42" width="8" height="4" stroke="#FFB500" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "ventilator",
    label: "03",
    title: "Ventilator",
    description:
      "Transport ventilator providing invasive and non-invasive ventilation, with altitude compensation. Keeps patients breathing when their own lungs can\u2019t \u2014 even as cabin pressure changes in flight.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="18" y="10" width="28" height="40" rx="0" stroke="#FFB500" strokeWidth="2" />
        <circle cx="32" cy="26" r="8" stroke="#FFB500" strokeWidth="1.5" />
        <path d="M28 26 Q32 18 36 26 Q32 34 28 26" stroke="#62C3A5" strokeWidth="1.5" />
        <line x1="24" y1="40" x2="40" y2="40" stroke="#FFB500" strokeWidth="1" opacity="0.4" />
        <line x1="24" y1="44" x2="40" y2="44" stroke="#FFB500" strokeWidth="1" opacity="0.4" />
        <path d="M32 50 L32 58" stroke="#FFB500" strokeWidth="2" />
        <path d="M26 58 L38 58" stroke="#FFB500" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "blood",
    label: "04",
    title: "Blood Products",
    description:
      "Packed red blood cells and fresh frozen plasma carried in temperature-controlled units. LifeFlight is one of the only pre-hospital services in Australia that can deliver blood transfusions on scene.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 8 C32 8 16 28 16 38 C16 48 23 54 32 54 C41 54 48 48 48 38 C48 28 32 8 32 8Z" stroke="#F47922" strokeWidth="2" />
        <line x1="26" y1="36" x2="38" y2="36" stroke="#F47922" strokeWidth="2" />
        <line x1="32" y1="30" x2="32" y2="42" stroke="#F47922" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "pumps",
    label: "05",
    title: "Infusion Pumps",
    description:
      "Multiple syringe drivers delivering precise doses of critical medications \u2014 vasopressors to maintain blood pressure, sedation for intubated patients, pain relief for trauma victims.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="10" y="16" width="18" height="32" stroke="#FFB500" strokeWidth="2" />
        <rect x="36" y="16" width="18" height="32" stroke="#FFB500" strokeWidth="2" />
        <line x1="14" y1="24" x2="24" y2="24" stroke="#FFB500" strokeWidth="1.5" opacity="0.5" />
        <line x1="14" y1="30" x2="24" y2="30" stroke="#FFB500" strokeWidth="1.5" opacity="0.5" />
        <line x1="40" y1="24" x2="50" y2="24" stroke="#FFB500" strokeWidth="1.5" opacity="0.5" />
        <line x1="40" y1="30" x2="50" y2="30" stroke="#FFB500" strokeWidth="1.5" opacity="0.5" />
        <rect x="14" y="36" width="10" height="6" stroke="#62C3A5" strokeWidth="1.5" />
        <rect x="40" y="36" width="10" height="6" stroke="#62C3A5" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "ultrasound",
    label: "06",
    title: "Ultrasound",
    description:
      "Point-of-care ultrasound for rapid assessment \u2014 detecting internal bleeding, collapsed lungs, and cardiac tamponade. Decisions that once required a hospital can now happen mid-flight.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="14" y="12" width="36" height="30" stroke="#FFB500" strokeWidth="2" />
        <path d="M22 22 C26 18 34 26 38 22 C42 18 38 30 34 34 C30 38 22 26 22 22Z" stroke="#04A9C7" strokeWidth="1.5" opacity="0.7" />
        <line x1="32" y1="42" x2="32" y2="48" stroke="#FFB500" strokeWidth="2" />
        <ellipse cx="32" cy="52" rx="10" ry="4" stroke="#FFB500" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "stretcher",
    label: "07",
    title: "Patient Stretcher",
    description:
      "Aeromedical stretcher with four-point restraint, IV pole mounts, and equipment rails. Designed to keep the patient stable through turbulence, banking turns, and rapid descent.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="8" y="24" width="48" height="12" stroke="#FFB500" strokeWidth="2" />
        <line x1="8" y1="30" x2="4" y2="42" stroke="#FFB500" strokeWidth="2" />
        <line x1="56" y1="30" x2="60" y2="42" stroke="#FFB500" strokeWidth="2" />
        <circle cx="10" cy="44" r="3" stroke="#FFB500" strokeWidth="1.5" />
        <circle cx="54" cy="44" r="3" stroke="#FFB500" strokeWidth="1.5" />
        <line x1="14" y1="20" x2="14" y2="24" stroke="#FFB500" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="20" x2="50" y2="24" stroke="#FFB500" strokeWidth="1.5" opacity="0.5" />
        <path d="M12 20 L16 20" stroke="#FFB500" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
  },
];

export default function CabinWalkthrough() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index] as HTMLElement;
    if (card) {
      isScrolling.current = true;
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      setTimeout(() => { isScrolling.current = false; }, 400);
    }
  }, []);

  const goNext = () => {
    const next = Math.min(activeIndex + 1, stations.length - 1);
    setActiveIndex(next);
    scrollToIndex(next);
  };

  const goPrev = () => {
    const prev = Math.max(activeIndex - 1, 0);
    setActiveIndex(prev);
    scrollToIndex(prev);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrolling.current) return;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), stations.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a]">
      {/* Section header */}
      <div className="px-4 md:px-6 pt-10 md:pt-14 pb-4">
        <p className="text-lf-yellow font-mono text-[10px] md:text-xs tracking-[0.3em] mb-3">
          INSIDE THE FLYING ICU
        </p>
        <p className="text-white font-roboto font-bold text-xl md:text-2xl max-w-md">
          This isn&apos;t a helicopter. It&apos;s an airborne emergency department.
        </p>
        <p className="text-white/40 font-roboto text-sm mt-2 max-w-sm">
          Swipe to walk through the cabin.
        </p>
      </div>

      {/* YouTube embed with lazy load */}
      <div className="px-4 md:px-6 pb-6">
        <div className="max-w-lg mx-auto md:mx-0 aspect-video bg-[#111] relative overflow-hidden">
          {videoLoaded ? (
            <iframe
              src="https://www.youtube.com/embed/fEAnMMAV7RE?rel=0&modestbranding=1&autoplay=1"
              title="Inside the LifeFlight Flying ICU"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setVideoLoaded(true)}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 group"
              aria-label="Play video"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-lf-yellow/90 group-hover:bg-lf-yellow group-active:scale-95 flex items-center justify-center transition-all duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A365D" className="ml-1">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <span className="text-white/40 font-mulish text-xs">Watch the cabin tour</span>
            </button>
          )}
        </div>
      </div>

      {/* Station carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {stations.map((station) => (
          <div
            key={station.id}
            className="snap-start shrink-0 w-full px-4 md:px-6 pb-2"
          >
            <div className="max-w-lg mx-auto md:mx-0 border border-white/10 bg-white/[0.02] p-5 md:p-8">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-14 h-14 md:w-20 md:h-20 shrink-0">
                  {station.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/30 font-mono text-[10px] tracking-[0.3em]">
                    STATION {station.label}
                  </p>
                  <p className="text-lf-yellow font-roboto font-bold text-lg md:text-xl mt-1">
                    {station.title}
                  </p>
                  <p className="text-white/60 font-roboto text-sm md:text-base leading-relaxed mt-2">
                    {station.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="px-4 md:px-6 py-6 md:py-8 flex items-center justify-between max-w-lg mx-auto md:mx-0">
        <div className="flex gap-1.5">
          {stations.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                scrollToIndex(i);
              }}
              className={`h-1 transition-all duration-300 ease-in-out ${
                i === activeIndex
                  ? "w-6 bg-lf-yellow"
                  : "w-1.5 bg-white/20"
              }`}
              aria-label={`Go to station ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="text-white/30 hover:text-white disabled:opacity-20 active:scale-90 transition-all duration-300"
            aria-label="Previous station"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <p className="text-white/20 font-mono text-xs tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")}/{String(stations.length).padStart(2, "0")}
          </p>
          <button
            onClick={goNext}
            disabled={activeIndex === stations.length - 1}
            className="text-white/30 hover:text-white disabled:opacity-20 active:scale-90 transition-all duration-300"
            aria-label="Next station"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
