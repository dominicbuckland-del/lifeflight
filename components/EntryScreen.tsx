"use client";

import { useState } from "react";
import { isValidQldPostcode } from "@/lib/missionData";

interface EntryScreenProps {
  onSubmit: (postcode: string) => void;
}

function LifeFlightLogo() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 8L8 24h6v12h20V24h6L24 8z"
          fill="#FFB500"
        />
        <path
          d="M18 28h12M20 24h8M22 20h4"
          stroke="#0A365D"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <circle cx="24" cy="14" r="2" fill="#0A365D" />
        <path
          d="M14 26l-4 2M34 26l4 2"
          stroke="#FFB500"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
      <span className="text-white font-roboto font-bold text-2xl tracking-wider">
        LIFEFLIGHT
      </span>
    </div>
  );
}

export default function EntryScreen({ onSubmit }: EntryScreenProps) {
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidQldPostcode(postcode)) {
      setError("Enter a valid QLD postcode (4000–4999)");
      return;
    }
    setError("");
    onSubmit(postcode);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    if (val.length <= 4) {
      setPostcode(val);
      if (error) setError("");
    }
  };

  return (
    <main className="min-h-screen bg-lf-navy flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <LifeFlightLogo />

        <p className="text-lf-yellow font-mulish text-xs tracking-[0.25em] uppercase mb-6">
          Queensland Mission Report
        </p>

        <h1 className="text-white font-roboto font-bold text-4xl md:text-5xl leading-tight mb-4">
          Your community.
          <br />
          Their mission.
        </h1>

        <p className="text-white/70 font-roboto text-base mb-10">
          Find out how many times LifeFlight flew near your home this year.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={4}
            value={postcode}
            onChange={handleChange}
            placeholder="Enter your postcode"
            className="w-full bg-white/10 border border-white/20 text-white text-center text-2xl font-roboto py-4 px-6 placeholder:text-white/30 focus:outline-none focus:border-lf-yellow transition-colors duration-300 ease-in-out"
          />

          {error && (
            <p className="text-lf-foundation font-mulish text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-lf-yellow text-lf-black font-mulish font-bold text-base py-4 px-6 hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            Generate My Report
          </button>
        </form>

        <div className="mt-16 w-full border-t border-white/10 pt-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lf-yellow font-roboto font-bold text-lg">
              8,000+
            </p>
            <p className="text-white/50 font-mulish text-xs">people helped</p>
          </div>
          <div>
            <p className="text-lf-yellow font-roboto font-bold text-lg">
              3,200+
            </p>
            <p className="text-white/50 font-mulish text-xs">QLD missions</p>
          </div>
          <div>
            <p className="text-lf-yellow font-roboto font-bold text-lg">9</p>
            <p className="text-white/50 font-mulish text-xs">rescue bases</p>
          </div>
        </div>
      </div>
    </main>
  );
}
