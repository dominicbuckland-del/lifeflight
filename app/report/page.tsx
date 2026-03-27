"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, Suspense } from "react";
import { getMissionData } from "@/lib/missionData";
import { generateMission } from "@/lib/missionGenerator";
import MissionReport from "@/components/MissionReport";
import ShareCard from "@/components/ShareCard";
import EmailCapture from "@/components/EmailCapture";
import DonorCTA from "@/components/DonorCTA";

function ReportContent() {
  const searchParams = useSearchParams();
  const postcode = searchParams.get("postcode") || "4000";

  const missionData = useMemo(() => getMissionData(postcode), [postcode]);
  const missionLog = useMemo(() => generateMission(postcode), [postcode]);

  return (
    <main className="min-h-screen bg-white">
      <MissionReport
        postcode={postcode}
        missionData={missionData}
        missionLog={missionLog}
      />
      <ShareCard
        suburb={missionData.suburb}
        missionCount={missionData.missionCount}
      />
      <EmailCapture
        postcode={postcode}
        suburb={missionData.suburb}
        missionCount={missionData.missionCount}
      />
      <DonorCTA />
    </main>
  );
}

export default function ReportPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-lf-navy flex items-center justify-center">
          <p className="text-white font-mulish">Loading report...</p>
        </div>
      }
    >
      <ReportContent />
    </Suspense>
  );
}
