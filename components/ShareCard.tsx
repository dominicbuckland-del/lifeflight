"use client";

interface ShareCardProps {
  suburb: string;
  missionCount: number;
}

export default function ShareCard({ suburb, missionCount }: ShareCardProps) {
  return (
    <div className="w-full bg-white px-5 md:px-6 py-10 md:py-12">
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
          <p className="text-white/30 font-mono text-[10px] md:text-xs mt-6 md:mt-8">
            lifeflight.org.au
          </p>
          <p className="text-lf-yellow font-roboto font-bold text-xs md:text-sm tracking-wider text-right mt-2">
            LIFEFLIGHT
          </p>
        </div>
        <p className="text-lf-navy/30 font-mulish text-[10px] md:text-xs text-center mt-3 md:mt-4">
          Screenshot to share
        </p>
      </div>
    </div>
  );
}
