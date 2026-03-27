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

interface SponsorConfig {
  min: number;
  max: number;
  name: string;
}

const sponsors: SponsorConfig[] = [
  { min: 4000, max: 4009, name: "Suncorp Group" },
  { min: 4010, max: 4030, name: "Ray White New Farm" },
  { min: 4031, max: 4070, name: "Newstead Brewing Co" },
  { min: 4071, max: 4080, name: "Indooroopilly Shopping Centre" },
  { min: 4081, max: 4100, name: "Kenmore Village Medical" },
  { min: 4101, max: 4110, name: "PA Hospital Foundation" },
  { min: 4111, max: 4130, name: "Sunnybank Plaza" },
  { min: 4131, max: 4160, name: "Browns Plains Grand Plaza" },
  { min: 4161, max: 4209, name: "Logan Hospital Foundation" },
  { min: 4210, max: 4214, name: "Westfield Coomera" },
  { min: 4215, max: 4219, name: "The Star Gold Coast" },
  { min: 4220, max: 4224, name: "Burleigh Brewing Company" },
  { min: 4225, max: 4229, name: "Robina Town Centre" },
  { min: 4300, max: 4310, name: "Springfield Orion" },
  { min: 4311, max: 4349, name: "Ipswich City Council" },
  { min: 4350, max: 4370, name: "FKG Group Toowoomba" },
  { min: 4371, max: 4409, name: "Heritage Bank" },
  { min: 4500, max: 4520, name: "Westfield North Lakes" },
  { min: 4521, max: 4549, name: "Caboolture Sports Club" },
  { min: 4550, max: 4559, name: "Stockland Caloundra" },
  { min: 4560, max: 4569, name: "Big Pineapple" },
  { min: 4570, max: 4599, name: "Noosa Council" },
  { min: 4600, max: 4699, name: "Bundaberg Brewed Drinks" },
  { min: 4700, max: 4799, name: "Mackay Regional Council" },
  { min: 4800, max: 4869, name: "Townsville Enterprise" },
  { min: 4870, max: 4879, name: "Cairns Convention Centre" },
  { min: 4880, max: 4889, name: "Tablelands Regional Council" },
  { min: 4890, max: 4999, name: "Queensland Country Credit Union" },
];

export function getSponsor(postcode: string): string {
  const pc = parseInt(postcode, 10);
  const sponsor = sponsors.find((s) => pc >= s.min && pc <= s.max);
  return sponsor ? sponsor.name : "Queensland Community Partners";
}

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
