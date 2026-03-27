"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProcessingScreenProps {
  postcode: string;
}

const lines = [
  "LOCATING POSTCODE",
  "CROSS-REFERENCING MISSION DATABASE...",
  "CALCULATING FLIGHT RADIUS...",
  "COMPILING COMMUNITY REPORT...",
  "REPORT READY",
];

export default function ProcessingScreen({ postcode }: ProcessingScreenProps) {
  const router = useRouter();
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        router.push(`/report?postcode=${postcode}`);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, postcode, router]);

  return (
    <main className="min-h-dvh bg-lf-navy flex items-center justify-center px-5">
      <div className="w-full max-w-lg font-mono text-xs md:text-sm text-white/80 space-y-3">
        {lines.slice(0, visibleLines).map((line, i) => {
          const isFirst = i === 0;
          const isLast = i === lines.length - 1;
          const display = isFirst
            ? `${line} [${postcode}]...`
            : line;

          return (
            <div key={i} className="flex items-start gap-2 break-words">
              {isLast ? (
                <span className="text-lf-medical">{display} &#10003;</span>
              ) : (
                <span>{display}</span>
              )}
            </div>
          );
        })}
        {visibleLines < lines.length && (
          <span className="inline-block w-2 h-4 bg-lf-yellow animate-pulse" />
        )}
      </div>
    </main>
  );
}
