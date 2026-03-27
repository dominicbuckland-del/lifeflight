const suburbLookup: Record<string, string> = {
  "4000": "Brisbane City",
  "4005": "New Farm",
  "4006": "Newstead",
  "4051": "Kelvin Grove",
  "4059": "Paddington",
  "4064": "Milton",
  "4066": "Auchenflower",
  "4067": "St Lucia",
  "4068": "Toowong",
  "4073": "Darra",
  "4074": "Oxley",
  "4075": "Corinda",
  "4101": "South Brisbane",
  "4102": "Woolloongabba",
  "4103": "Annerley",
  "4109": "Sunnybank",
  "4110": "Sunnybank Hills",
  "4113": "Eight Mile Plains",
  "4114": "Logan Central",
  "4121": "Holland Park",
  "4122": "Mansfield",
  "4169": "Kangaroo Point",
  "4210": "Coomera",
  "4211": "Oxenford",
  "4215": "Southport",
  "4217": "Surfers Paradise",
  "4218": "Broadbeach",
  "4220": "Burleigh Heads",
  "4225": "Palm Beach",
  "4226": "Robina",
  "4300": "Springfield",
  "4350": "Toowoomba",
  "4500": "Strathpine",
  "4510": "Caboolture",
  "4550": "Caloundra",
  "4556": "Maroochydore",
  "4560": "Nambour",
  "4575": "Noosa Heads",
  "4870": "Cairns",
  "4878": "Palm Cove",
  "4880": "Mareeba",
};

interface RangeConfig {
  min: number;
  max: number;
  missionMin: number;
  missionMax: number;
  base: string;
  coverageStatus: "covered" | "extended" | "critical";
}

const ranges: RangeConfig[] = [
  { min: 4000, max: 4009, missionMin: 28, missionMax: 34, base: "Brisbane Base Bowen Hills", coverageStatus: "covered" },
  { min: 4010, max: 4070, missionMin: 18, missionMax: 26, base: "Brisbane Base Bowen Hills", coverageStatus: "covered" },
  { min: 4071, max: 4130, missionMin: 14, missionMax: 20, base: "Brisbane Base Bowen Hills", coverageStatus: "covered" },
  { min: 4131, max: 4209, missionMin: 22, missionMax: 30, base: "Brisbane Base Bowen Hills", coverageStatus: "extended" },
  { min: 4210, max: 4229, missionMin: 20, missionMax: 28, base: "Gold Coast Base", coverageStatus: "covered" },
  { min: 4300, max: 4349, missionMin: 22, missionMax: 30, base: "Brisbane Base Bowen Hills", coverageStatus: "extended" },
  { min: 4350, max: 4409, missionMin: 24, missionMax: 32, base: "Toowoomba Base", coverageStatus: "extended" },
  { min: 4500, max: 4549, missionMin: 20, missionMax: 28, base: "Brisbane Base Bowen Hills", coverageStatus: "extended" },
  { min: 4550, max: 4599, missionMin: 18, missionMax: 24, base: "Sunshine Coast Base", coverageStatus: "covered" },
  { min: 4870, max: 4889, missionMin: 26, missionMax: 36, base: "Cairns Base", coverageStatus: "covered" },
];

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export interface MissionData {
  suburb: string;
  missionCount: number;
  base: string;
  coverageStatus: "covered" | "extended" | "critical";
}

export function getMissionData(postcode: string): MissionData {
  const pc = parseInt(postcode, 10);
  const suburb = suburbLookup[postcode] || "your area";

  const range = ranges.find((r) => pc >= r.min && pc <= r.max);

  if (range) {
    const rangeSize = range.missionMax - range.missionMin;
    const seed = pc % (rangeSize + 1);
    const missionCount = range.missionMin + Math.floor(seededRandom(seed + pc) * (rangeSize + 1));
    return {
      suburb,
      missionCount: Math.min(missionCount, range.missionMax),
      base: range.base,
      coverageStatus: range.coverageStatus,
    };
  }

  const missionCount = 20 + Math.floor(seededRandom(pc) * 11);
  return {
    suburb,
    missionCount: Math.min(missionCount, 30),
    base: "the nearest regional base",
    coverageStatus: "extended",
  };
}

export function isValidQldPostcode(postcode: string): boolean {
  if (!/^\d{4}$/.test(postcode)) return false;
  const pc = parseInt(postcode, 10);
  return pc >= 4000 && pc <= 4999;
}
