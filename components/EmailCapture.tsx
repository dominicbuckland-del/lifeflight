"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useInView } from "@/hooks/useInView";

interface EmailCaptureProps {
  postcode: string;
  suburb: string;
  missionCount: number;
}

export default function EmailCapture({
  postcode,
  suburb,
  missionCount,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const section = useInView(0.2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);

    try {
      if (supabase) {
        await supabase.from("email_captures").insert({
          email,
          postcode,
          suburb,
          missions_count: missionCount,
        });
      }
    } catch {
      // Supabase failure — show success anyway
    }

    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="w-full bg-[#f5f5f5] border-t border-lf-navy/5 px-5 md:px-6 py-10 md:py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-lf-medical/10 mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#62C3A5" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-lf-navy font-roboto font-bold text-base md:text-lg">
            Report sent. Thank you for supporting LifeFlight.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={section.ref}
      className={`w-full bg-[#f5f5f5] border-t border-lf-navy/5 px-5 md:px-6 py-10 md:py-12 reveal ${section.isVisible ? "visible" : ""}`}
    >
      <div className="max-w-md mx-auto">
        <p className="text-lf-navy font-roboto font-bold text-lg md:text-xl text-center mb-2">
          Send my report to my inbox
        </p>
        <p className="text-lf-navy/40 font-roboto text-xs md:text-sm text-center mb-5 md:mb-6">
          We&apos;ll send your personalised report. No spam.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full bg-white border border-lf-navy/10 text-lf-navy font-roboto text-[16px] md:text-base py-3 px-4 focus:outline-none focus:border-lf-navy input-glow transition-all duration-300 ease-in-out"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-lf-navy text-white font-mulish font-bold text-base py-3.5 md:py-3 px-4 active:bg-lf-navy/80 hover:bg-lf-navy/90 active:scale-[0.98] disabled:opacity-60 transition-all duration-300 ease-in-out"
          >
            {submitting ? "Sending..." : "Send Report"}
          </button>
        </form>
      </div>
    </div>
  );
}
