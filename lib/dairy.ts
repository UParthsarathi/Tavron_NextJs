// The arithmetic behind the dairy planner on app/dairy/page.tsx, which cites the sources:
// FSSAI for the milk minimums and licence tiers, e-PG Pathshala for ghee recovery and paneer yield,
// our own brochures for the pasteurizer and ice bank ranges.

export type MilkType = "cow" | "buffalo" | "mixed";

/** FSSAI minimum fat and SNF, %, and an indicative paneer yield, kg per 100 kg of milk */
export const milk: Record<MilkType, { label: string; fat: number; snf: number; paneer: [number, number] }> = {
  cow: { label: "Cow milk", fat: 3.2, snf: 8.3, paneer: [15, 18] },
  buffalo: { label: "Buffalo milk", fat: 5.0, snf: 9.0, paneer: [17, 22] },
  mixed: { label: "Mixed milk", fat: 4.5, snf: 8.5, paneer: [16, 20] },
};

/** a litre of milk weighs about 1.03 kg */
const KG_PER_L = 1.03;

/** the FSSAI licence for a dairy handling `lpd` litres of milk a day */
export function licence(lpd: number): "Registration" | "State licence" | "Central licence" {
  if (lpd <= 500) return "Registration";
  if (lpd <= 50000) return "State licence";
  return "Central licence";
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

/** what a day's milk holds and could become, in kg, before process losses */
export function yields(lpd: number, fat: number, snf: number, type: MilkType) {
  const kg = lpd * KG_PER_L, fatKg = (kg * fat) / 100, snfKg = (kg * snf) / 100;
  return {
    fatKg,
    snfKg,
    // the creamery-butter method recovers about 92% of the fat, and ghee is at least 99.5% fat
    ghee: (fatKg * 0.92) / 0.995,
    // skimmed milk powder at its 5% moisture limit, from the milk's solids-not-fat
    smp: snfKg / 0.95,
    paneer: milk[type].paneer.map((p) => (kg * p) / 100) as [number, number],
  };
}
