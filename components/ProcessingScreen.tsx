"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface ProcessingScreenProps {
  postcode: string;
}

const lines = [
  "LOCATING POSTCODE",
  "CROSS-REFERENCING MISSION DATABASE",
  "CALCULATING FLIGHT RADIUS",
  "COMPILING COMMUNITY REPORT",
  "REPORT READY",
];

export default function ProcessingScreen({ postcode }: ProcessingScreenProps) {
  const router = useRouter();
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  const currentLine = visibleLines < lines.length ? lines[visibleLines] : null;
  const isFirstLine = visibleLines === 0;
  const fullText = currentLine
    ? isFirstLine
      ? `${currentLine} [${postcode}]...`
      : `${currentLine}...`
    : "";

  useEffect(() => {
    if (!currentLine) {
      const timer = setTimeout(() => {
        router.push(`/report?postcode=${postcode}`);
      }, 600);
      return () => clearTimeout(timer);
    }

    if (typedChars < fullText.length) {
      const speed = 18 + Math.random() * 22;
      typingRef.current = setTimeout(() => {
        setTypedChars((prev) => prev + 1);
      }, speed);
      return () => {
        if (typingRef.current) clearTimeout(typingRef.current);
      };
    } else {
      const pause = visibleLines === lines.length - 1 ? 300 : 400;
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
        setTypedChars(0);
      }, pause);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, typedChars, fullText, currentLine, postcode, router]);

  const progress = ((visibleLines + (currentLine ? typedChars / fullText.length : 1)) / lines.length) * 100;

  return (
    <main className="min-h-dvh bg-lf-navy flex flex-col items-center justify-center px-5 gap-10">
      <div className="w-full max-w-lg font-mono text-xs md:text-sm text-white/80 space-y-2.5">
        {/* Completed lines */}
        {lines.slice(0, visibleLines).map((line, i) => {
          const isFirst = i === 0;
          const isLast = i === lines.length - 1;
          const text = isFirst ? `${line} [${postcode}]...` : `${line}...`;

          return (
            <div key={i} className="flex items-start gap-2 break-words">
              <span className="text-white/20 shrink-0 w-5 text-right">&gt;</span>
              {isLast ? (
                <span className="text-lf-medical">{text} &#10003;</span>
              ) : (
                <span className="text-white/50">{text}</span>
              )}
            </div>
          );
        })}

        {/* Currently typing line */}
        {currentLine && (
          <div className="flex items-start gap-2 break-words">
            <span className="text-white/20 shrink-0 w-5 text-right">&gt;</span>
            <span>
              {visibleLines === lines.length - 1 && typedChars === fullText.length ? (
                <span className="text-lf-medical">{fullText} &#10003;</span>
              ) : (
                <>
                  {fullText.slice(0, typedChars)}
                  <span className="inline-block w-1.5 h-3.5 bg-lf-yellow ml-px -mb-px cursor-blink" />
                </>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-lg">
        <div className="w-full h-px bg-white/10">
          <div
            className="h-full bg-lf-yellow transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-white/20 font-mono text-[10px] mt-2 text-right">
          {Math.round(Math.min(progress, 100))}%
        </p>
      </div>
    </main>
  );
}
