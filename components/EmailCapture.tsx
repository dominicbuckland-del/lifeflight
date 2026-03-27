"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

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
  };

  if (submitted) {
    return (
      <div className="w-full bg-white px-6 py-12">
        <div className="max-w-md mx-auto text-center">
          <p className="text-lf-navy font-roboto font-bold text-lg">
            Report sent. Thank you for supporting LifeFlight.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white px-6 py-12">
      <div className="max-w-md mx-auto">
        <p className="text-lf-navy font-roboto font-bold text-xl text-center mb-6">
          Send my report to my inbox
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full border border-lf-navy/20 text-lf-navy font-roboto text-base py-3 px-4 focus:outline-none focus:border-lf-navy transition-colors duration-300 ease-in-out"
          />
          <button
            type="submit"
            className="w-full bg-lf-navy text-white font-mulish font-bold text-base py-3 px-4 hover:bg-lf-navy/90 transition-colors duration-300 ease-in-out"
          >
            Send Report
          </button>
        </form>
      </div>
    </div>
  );
}
