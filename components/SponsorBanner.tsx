"use client";

interface SponsorBannerProps {
  sponsor: string;
}

export default function SponsorBanner({ sponsor }: SponsorBannerProps) {
  return (
    <div className="w-full bg-lf-navy border-b-2 border-lf-yellow px-6 py-5">
      <p className="text-center font-mulish text-sm text-white/60 tracking-wide">
        Your community&apos;s lives are sponsored by
      </p>
      <p className="text-center font-roboto font-bold text-lg text-lf-yellow mt-1">
        {sponsor}
      </p>
    </div>
  );
}
