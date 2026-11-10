// The arithmetic behind the dairy planner on app/dairy/page.tsx, which cites the sources:
// FSSAI for the milk minimums and licence tiers, e-PG Pathshala for ghee recovery and paneer yield,
// our own brochures for the pasteurizer and ice bank ranges.

export type MilkType = "cow" | "buffalo" | "mixed";

/** FSSAI minimum fat, %, and an indicative paneer yield, kg per 100 kg of milk */
export const milk: Record<MilkType, { label: string; fat: number; paneer: [number, number] }> = {
  cow: { label: "Cow milk", fat: 3.2, paneer: [15, 18] },
  buffalo: { label: "Buffalo milk", fat: 5.0, paneer: [17, 22] },
  mixed: { label: "Mixed milk", fat: 4.5, paneer: [16, 20] },
};

/** a litre of milk weighs about 1.03 kg */
const KG_PER_L = 1.03;

/** FSSAI's tiers for dairy units: up to `lpd` litres of milk a day, the licence. Fees are left to FoSCoS, which keeps them current. */
const tiers = [
  { lpd: 500, name: "Registration" },
  { lpd: 50000, name: "State licence" },
  { lpd: Infinity, name: "Central licence" },
];

/** the FSSAI licence for a dairy handling `lpd` litres of milk a day, and the tier above it */
export function licence(lpd: number) {
  const i = tiers.findIndex((t) => lpd <= t.lpd);
  return { ...tiers[i], next: tiers[i + 1] };
}

/** a pasteurizer that handles a day's milk in `hours`: LPH rounded up to 50, over as many lines of at most 30,000 LPH as it takes */
export function pasteuriser(lpd: number, hours: number) {
  const lines = Math.max(1, Math.ceil(lpd / hours / 30000));
  return { lines, lph: Math.ceil(lpd / hours / lines / 50) * 50 };
}

/** which ice bank: Freon covers 1,000 to 20,000 LPD, ammonia 10,000 to 5,00,000 LPD */
export function iceBank(lpd: number): "none" | "freon" | "either" | "ammonia" | "large" {
  if (lpd < 1000) return "none";
  if (lpd < 10000) return "freon";
  if (lpd <= 20000) return "either";
  if (lpd <= 500000) return "ammonia";
  return "large";
}

/** what a day's milk could become, in kg, before process losses: paneer, or ghee from its fat */
export function yields(lpd: number, type: MilkType) {
  const kg = lpd * KG_PER_L;
  return {
    // the creamery-butter method recovers about 92% of the fat, and ghee is at least 99.5% fat
    ghee: (kg * milk[type].fat * 0.92) / 100 / 0.995,
    paneer: milk[type].paneer.map((p) => (kg * p) / 100) as [number, number],
  };
}
