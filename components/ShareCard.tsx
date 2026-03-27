"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

interface ShareCardProps {
  suburb: string;
  missionCount: number;
}

export default function ShareCard({ suburb, missionCount }: ShareCardProps) {
  const [shared, setShared] = useState(false);
  const section = useInView(0.2);

  const shareText = `${missionCount} times. That's how many LifeFlight missions flew within 15km of ${suburb} in 2025. I had no idea. lifeflight.org.au`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "LifeFlight Mission Report",
          text: shareText,
          url: window.location.href,
        });
        setShared(true);
      } catch {
        // User cancelled or share failed
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div
      ref={section.ref}
      className={`w-full bg-white px-5 md:px-6 py-10 md:py-12 reveal ${section.isVisible ? "visible" : ""}`}
    >
      <div className="max-w-md mx-auto">
        <div className="bg-lf-navy border-2 border-lf-yellow p-6 md:p-8">
          <p
            className="font-roboto font-black text-white leading-none"
            style={{ fontSize: "clamp(40px, 12vw, 72px)" }}
          >
            {missionCount} times.
          </p>
          <p className="text-white/70 font-roboto text-sm md:text-base mt-3 md:mt-4 leading-relaxed">
            That&apos;s how many LifeFlight missions flew within 15km of{" "}
            {suburb} in 2025. I had no idea.
          </p>
          <div className="flex items-end justify-between mt-6 md:mt-8">
            <p className="text-white/30 font-mono text-[10px] md:text-xs">
              lifeflight.org.au
            </p>
            <p className="text-lf-yellow font-roboto font-bold text-xs md:text-sm tracking-wider">
              LIFEFLIGHT
            </p>
          </div>
        </div>

        {/* Share actions */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lf-navy/30 font-mulish text-[10px] md:text-xs">
            Screenshot or share below
          </p>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-lf-navy/50 hover:text-lf-navy font-mulish text-xs active:scale-95 transition-all duration-300"
          >
            {shared ? (
              <span className="text-lf-medical font-bold">Copied</span>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                </svg>
                Share
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
