"use client";

import type { MissionData } from "@/lib/missionData";
import type { MissionLog } from "@/lib/missionGenerator";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import CabinWalkthrough from "./CabinWalkthrough";

interface MissionReportProps {
  postcode: string;
  missionData: MissionData;
  missionLog: MissionLog;
}

export default function MissionReport({
  postcode,
  missionData,
  missionLog,
}: MissionReportProps) {
  const today = new Date().toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeSaved = missionLog.roadMinutes - missionLog.lifeflightMinutes;

  const stat = useInView(0.3);
  const count = useCountUp(missionData.missionCount, 1200, stat.isVisible);
  const log = useInView(0.1);
  const cabin = useInView(0.05);
  const human = useInView(0.2);

  return (
    <div>
      {/* HEADER BAR */}
      <div className="w-full bg-lf-navy px-4 md:px-6 py-3 md:py-4">
        <p className="text-white font-mono text-[10px] md:text-sm tracking-wider leading-snug">
          LIFEFLIGHT MISSION REPORT &mdash; {postcode} &mdash; 2025
        </p>
        <p className="text-lf-yellow font-mono text-[9px] md:text-xs tracking-wider mt-1">
          COMMUNITY ACCESS DOCUMENT | {today}
        </p>
      </div>

      {/* BIG STAT */}
      <div
        ref={stat.ref}
        className={`w-full bg-white px-5 md:px-6 py-14 md:py-24 text-center reveal ${stat.isVisible ? "visible" : ""}`}
      >
        <p
          className="font-roboto font-black text-lf-navy leading-none tabular-nums"
          style={{ fontSize: "clamp(64px, 18vw, 120px)" }}
        >
          {count}
        </p>
        <p className="text-lf-yellow font-roboto font-bold text-xl md:text-2xl tracking-[0.2em] mt-2">
          MISSIONS
        </p>
        <p className="text-lf-navy/60 font-roboto text-sm md:text-base mt-3 md:mt-4 max-w-md mx-auto">
          Flown within 15km of {missionData.suburb} in 2025
        </p>
      </div>

      {/* Yellow divider */}
      <div className="w-full h-1 bg-lf-yellow" />

      {/* MISSION LOG */}
      <div
        ref={log.ref}
        className={`w-full bg-[#111] px-4 md:px-6 py-8 md:py-10 reveal ${log.isVisible ? "visible" : ""}`}
      >
        <div className="max-w-lg mx-auto">
          <p className="text-lf-yellow font-mono text-[10px] md:text-xs tracking-wider mb-5 md:mb-6">
            MISSION LOG #{missionLog.missionId}
          </p>
          <div className={`space-y-0 font-mono text-xs md:text-sm reveal-stagger ${log.isVisible ? "visible" : ""}`}>
            <Row label="DISTANCE" value={`${missionLog.distanceKm} km`} />
            <Row label="DATE" value={missionLog.date} />
            <Row label="TIME" value={missionLog.time} />
            <Row label="INCIDENT" value={missionLog.incidentType} />
            <Row label="LF RESPONSE" value={`${missionLog.lifeflightMinutes} min`} />
            <Row label="ROAD (EST.)" value={`${missionLog.roadMinutes} min`} />
            <div className="flex justify-between border-b border-white/10 py-3">
              <span className="text-white/40">TIME SAVED</span>
              <span className="text-lf-foundation font-bold">
                {timeSaved} min
              </span>
            </div>
          </div>
        </div>
        <p className="text-lf-yellow font-roboto text-base md:text-xl text-center mt-8 md:mt-10 max-w-sm md:max-w-md mx-auto leading-snug italic">
          Without LifeFlight, this mission ends differently.
        </p>
      </div>

      {/* INSIDE THE FLYING ICU */}
      <div
        ref={cabin.ref}
        className={`reveal ${cabin.isVisible ? "visible" : ""}`}
      >
        <CabinWalkthrough />
      </div>

      {/* HUMAN SECTION */}
      <div
        ref={human.ref}
        className={`w-full bg-[#f5f5f5] px-5 md:px-6 py-10 md:py-12 reveal ${human.isVisible ? "visible" : ""}`}
      >
        <div className="max-w-lg mx-auto">
          <div className="w-8 h-1 bg-lf-yellow mb-6" />
          <p className="text-lf-navy font-roboto text-base md:text-lg leading-[1.7]">
            In {missionData.suburb}, LifeFlight completed{" "}
            {missionData.missionCount} missions in 2025, launched from{" "}
            {missionData.base}. Each one was made possible by community
            supporters. For the families in your area, LifeFlight was the
            difference between waiting and surviving. These aren&apos;t
            statistics. They&apos;re your neighbours.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline border-b border-white/10 py-3 gap-3">
      <span className="text-white/40 shrink-0">{label}</span>
      <span className="text-white text-right">{value}</span>
    </div>
  );
}
