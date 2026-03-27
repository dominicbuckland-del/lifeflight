function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const incidentTypes = [
  "Cardiac emergency",
  "Road trauma",
  "Workplace accident",
  "Medical emergency",
  "Sports injury",
  "Farm incident",
];

export interface MissionLog {
  missionId: string;
  distanceKm: number;
  date: string;
  time: string;
  incidentType: string;
  lifeflightMinutes: number;
  roadMinutes: number;
}

export function generateMission(postcode: string): MissionLog {
  const pc = parseInt(postcode, 10);
  const rand = seededRandom(pc * 31 + 7);

  const missionNum = 1000 + Math.floor(rand() * 9000);
  const missionId = `QLD-${missionNum}`;

  const distanceKm = Math.round((1.2 + rand() * 3.6) * 10) / 10;

  const monthsAgo = Math.floor(rand() * 6);
  const day = 1 + Math.floor(rand() * 28);
  const date = new Date(2025, 11 - monthsAgo, day);
  const dateStr = date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const hourBase = rand() < 0.6 ? 16 + Math.floor(rand() * 6) : 8 + Math.floor(rand() * 8);
  const hour = hourBase % 24;
  const minute = Math.floor(rand() * 60);
  const timeStr = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;

  const incidentType = incidentTypes[Math.floor(rand() * incidentTypes.length)];

  const lifeflightMinutes = 8 + Math.floor(rand() * 7);
  const roadExtra = 18 + Math.floor(rand() * 17);
  const roadMinutes = lifeflightMinutes + roadExtra;

  return {
    missionId,
    distanceKm,
    date: dateStr,
    time: timeStr,
    incidentType,
    lifeflightMinutes,
    roadMinutes,
  };
}
