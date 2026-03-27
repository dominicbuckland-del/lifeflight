"use client";

interface ShareCardProps {
  suburb: string;
  missionCount: number;
}

export default function ShareCard({ suburb, missionCount }: ShareCardProps) {
  return (
    <div className="w-full bg-white px-6 py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-lf-navy border-2 border-lf-yellow p-8">
          <p
            className="font-roboto font-black text-white leading-none"
            style={{ fontSize: "clamp(48px, 10vw, 72px)" }}
          >
            {missionCount} times.
          </p>
          <p className="text-white/70 font-roboto text-base mt-4 leading-relaxed">
            That&apos;s how many LifeFlight missions flew within 15km of{" "}
            {suburb} in 2025. I had no idea.
          </p>
          <p className="text-white/30 font-mono text-xs mt-8">
            lifeflight.org.au
          </p>
          <p className="text-lf-yellow font-roboto font-bold text-sm tracking-wider text-right mt-2">
            LIFEFLIGHT
          </p>
        </div>
        <p className="text-lf-navy/30 font-mulish text-xs text-center mt-4">
          Screenshot to share
        </p>
      </div>
    </div>
  );
}
