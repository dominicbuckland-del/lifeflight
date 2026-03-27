"use client";

import EntryScreen from "@/components/EntryScreen";
import ProcessingScreen from "@/components/ProcessingScreen";
import { useState } from "react";

export default function Home() {
  const [postcode, setPostcode] = useState<string | null>(null);

  if (postcode) {
    return <ProcessingScreen postcode={postcode} />;
  }

  return <EntryScreen onSubmit={(pc) => setPostcode(pc)} />;
}
