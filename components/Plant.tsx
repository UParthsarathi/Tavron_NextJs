import type { ReactNode } from "react";
import type { Link } from "./Doc";

// A turnkey plant page, laid out like the liquid milk page: title, a process drawing of the plant
// with its parts list and title block, sections about the plant, photos of the equipment, and a
// closing band. The drawing is generated from `stations`: each is a piece of equipment, drawn as a
// symbol on the product line in process order, numbered to match the parts list.

type Kind =
  | "tank" | "cone" | "vat" | "pump" | "htst" | "phe" | "tubular" | "churn" | "press" | "clarifier" | "decanter"
  | "homogeniser" | "freezer" | "sterilizer" | "evaporator" | "dryer" | "fluidbed" | "membrane" | "ringdryer" | "coldstore";

export type Station = {
  kind: Kind;
  /** its number in `parts` (from 1) */
  part: number;
  /** label on the drawing; "\n" breaks the line. A pump is labelled "Pump" */
  name: string;
  /** steam or ice water piped to it */
  steam?: boolean;
  chill?: boolean;
};
export type Part = { name: string; href?: string; spec: string };
/** [src, width, height, alt] */
export type Img = [string, number, number, string];

type Props = {
  crumb: string;
  title: string;
  intro: string;
  /** the product on the drawing's legend, e.g. "Milk" */
  product: string;
  /** "Raw milk in", "To packing" */
  input: string;
  output: string;
  stations: Station[];
  parts: Part[];
  /** parts-list numbers of the ice bank and CIP unit, drawn below the line, if the plant has them */
  iceBank?: number;
  cip?: number;
  /** the drawing's title block: its title, then four facts (Scope, Scale and Made by are added) */
  sheetTitle: string;
  facts: [string, string][];
  sections?: { title: string; aside: string; rows?: [string, ReactNode][]; images?: { img: Img; caption: string }[] }[];
  /** "The equipment, built": photos, each with its name and which item it is */
  built: { img: Img; name: string; note: ReactNode; item?: number }[];
  close: { title: string; needs: string[]; files: Link[] };
  /** ends the WhatsApp message "Hi Tavron, I'd like …." */
  wa: string;
};

const pdf = (href: string) => href.endsWith(".pdf");

// Parts and photos that several plants share.
export const common = {
  pumps: { name: "Pumps", href: "pumps.html", spec: "SS centrifugal, 500 to 1,00,000 LPH, head up to 60 MWC" },
  cip: { name: "CIP unit", href: "cipsystem.html", spec: "Single or multiple circuits, automatic or semi-automatic" },
  spray: { name: "Spray dryer", href: "spray.html", spec: "5 to 1,500 kg/hr water evaporation; rotary atomiser, nozzle or two-fluid; second- and third-stage fluid bed drying" },
} satisfies Record<string, Part>;

export const photos = {
  htst: ["assets/img/projects/MilkProcessing/milkpro7b.jpg", 700, 525, "Skid-mounted HTST pasteurizer with plate heat exchanger"],
  tank: ["assets/img/projects/MilkProcessing/milkpro6b.jpg", 500, 707, "Insulated vertical stainless-steel process tank with top agitator"],
  phe: ["assets/img/projects/MilkProcessing/milkpro1b.jpg", 700, 791, "Plate heat exchanger on a stainless-steel frame"],
  pumps: ["assets/img/pumps/pumps1b.jpg", 500, 400, "Stainless-steel centrifugal pumps"],
  cip: ["assets/img/projects/MilkProcessing/milkpro2b.jpg", 700, 394, "Skid-mounted CIP system with tanks and control panel"],
  spray: ["assets/img/projects/MilkProcessing/milkpro5b.jpg", 700, 538, "Rendering of a multi-floor spray dryer plant with drying chamber and cyclone"],
} satisfies Record<string, Img>;

// ---- the drawing ----

const Y = 230; // the product line
const CIP_Y = 362; // the CIP supply header
const MAJOR = { w: 0, minor: false };

type Shape = { w: number; minor?: boolean; body: (cx: number) => ReactNode; bottom: number; cip?: (cx: number) => [number, number]; steamX?: (cx: number) => number; chillX?: (cx: number) => number; nameDX?: number };

const L = "tv-dw-l", F = "tv-dw-f", T = "tv-dw-t";
const fluid = "#E5F8FF";

const shapes: Record<Kind, Shape> = {
  tank: {
    ...MAJOR, w: 140, bottom: 300, cip: (cx) => [cx, 304],
    body: (cx) => (
      <>
        <path className={F} d={`M${cx - 45} 300 V146 Q${cx - 45} 118 ${cx} 112 Q${cx + 45} 118 ${cx + 45} 146 V300 Z`} />
        <path fill={fluid} d={`M${cx - 39} 294 V182 H${cx + 39} V294 Z`} />
        <path className={T} d={`M${cx - 39} 294 V146 Q${cx - 39} 124 ${cx} 118 Q${cx + 39} 124 ${cx + 39} 146 V294 Z`} />
        <rect className={F} x={cx - 12} y="92" width="24" height="18" />
        <path className={L} d={`M${cx} 110 V262 M${cx - 14} 262 H${cx + 14} M${cx - 35} 300 V332 M${cx + 35} 300 V332`} />
      </>
    ),
  },
  cone: {
    ...MAJOR, w: 120, bottom: 300, cip: (cx) => [cx, 306],
    body: (cx) => (
      <>
        <path className={F} d={`M${cx - 40} 124 H${cx + 40} V250 L${cx} 296 L${cx - 40} 250 Z`} />
        <path fill={fluid} d={`M${cx - 34} 176 H${cx + 34} V248 L${cx} 288 L${cx - 34} 248 Z`} />
        <path className={L} d={`M${cx - 46} 124 H${cx + 46} M${cx} 296 V306 M${cx - 36} 254 V332 M${cx + 36} 254 V332`} />
      </>
    ),
  },
  vat: {
    ...MAJOR, w: 150, bottom: 304, cip: (cx) => [cx + 30, 300],
    body: (cx) => (
      <>
        <path className={L} d={`M${cx - 56} 158 V246 Q${cx - 56} 304 ${cx} 304 Q${cx + 56} 304 ${cx + 56} 246 V158`} />
        <path className={F} d={`M${cx - 48} 158 V244 Q${cx - 48} 294 ${cx} 294 Q${cx + 48} 294 ${cx + 48} 244 V158 Z`} />
        <path fill={fluid} d={`M${cx - 42} 196 H${cx + 42} V244 Q${cx + 42} 286 ${cx} 286 Q${cx - 42} 286 ${cx - 42} 244 Z`} />
        <rect className={F} x={cx - 13} y="112" width="26" height="28" />
        <path className={L} d={`M${cx - 64} 158 H${cx + 64} M${cx - 52} 140 H${cx + 52} M${cx - 52} 140 V158 M${cx + 52} 140 V158 M${cx} 140 V268 M${cx - 22} 268 H${cx + 22} M${cx - 18} 246 H${cx + 18} M${cx - 44} 288 V332 M${cx + 44} 288 V332`} />
      </>
    ),
  },
  pump: {
    w: 66, minor: true, bottom: 248,
    body: (cx) => (
      <>
        <circle className={L} cx={cx} cy={Y} r="17" fill="#fff" />
        <path className={L} d={`M${cx - 8} 220 L${cx + 12} 230 L${cx - 8} 240 Z`} />
      </>
    ),
  },
  htst: {
    ...MAJOR, w: 300, bottom: 296, nameDX: 8, cip: (cx) => [cx - 108, 252], steamX: (cx) => cx, chillX: (cx) => cx + 44,
    body: (cx) => (
      <>
        <rect className={F} x={cx - 128} y="200" width="40" height="52" rx="5" />
        <path fill={fluid} d={`M${cx - 124} 222 H${cx - 92} V248 H${cx - 124} Z`} />
        <rect x={cx - 60} y="170" width="120" height="120" fill="url(#pl-plates)" stroke="#0a1a2a" strokeWidth="1.8" />
        <path className={L} d={`M${cx - 20} 170 V290 M${cx + 20} 170 V290`} />
        <rect className={F} x={cx - 68} y="164" width="136" height="8" />
        <path className={L} d={`M${cx + 90} 206 H${cx + 130} A12 12 0 0 1 ${cx + 130} 230 H${cx + 90} A12 12 0 0 0 ${cx + 90} 254 H${cx + 130}`} fill="none" />
        <text className="tv-dw-note" x={cx - 40} y="154">Regen.</text>
        <text className="tv-dw-note" x={cx} y="154">Heat</text>
        <text className="tv-dw-note" x={cx + 40} y="154">Cool</text>
        <text className="tv-dw-note" x={cx + 116} y="278">Holding</text>
        <text className="tv-dw-note" x={cx + 116} y="293">tube</text>
      </>
    ),
  },
  phe: {
    ...MAJOR, w: 130, bottom: 296, cip: (cx) => [cx - 40, 296], steamX: (cx) => cx - 16, chillX: (cx) => cx + 16,
    body: (cx) => (
      <>
        <rect x={cx - 50} y="170" width="100" height="120" fill="url(#pl-plates)" stroke="#0a1a2a" strokeWidth="1.8" />
        <rect className={F} x={cx - 58} y="164" width="116" height="8" />
        <rect className={F} x={cx - 58} y="288" width="116" height="8" />
      </>
    ),
  },
  tubular: {
    ...MAJOR, w: 150, bottom: 298, cip: (cx) => [cx - 44, 298], steamX: (cx) => cx + 20,
    body: (cx) => {
      const d = `M${cx - 60} 172 H${cx + 48} A12 12 0 0 1 ${cx + 48} 196 H${cx - 48} A12 12 0 0 0 ${cx - 48} 220 H${cx + 48} A12 12 0 0 1 ${cx + 48} 244 H${cx - 48} A12 12 0 0 0 ${cx - 48} 268 H${cx + 60}`;
      return (
        <>
          <path d={d} fill="none" stroke="#0a1a2a" strokeWidth="11" strokeLinejoin="round" />
          <path d={d} fill="none" stroke="#EEF3F6" strokeWidth="7" strokeLinejoin="round" />
          <rect className={F} x={cx - 66} y="286" width="132" height="8" />
          <path className={L} d={`M${cx - 58} 294 V332 M${cx + 58} 294 V332`} />
        </>
      );
    },
  },
  churn: {
    ...MAJOR, w: 200, bottom: 272, cip: (cx) => [cx, 276],
    body: (cx) => (
      <>
        <rect className={F} x={cx - 50} y="168" width="100" height="104" rx="36" />
        <rect className={L} x={cx - 20} y="196" width="40" height="30" rx="4" />
        <path className={L} d={`M${cx - 76} 220 H${cx - 50} M${cx + 50} 220 H${cx + 76} M${cx - 78} 222 L${cx - 94} 332 M${cx - 78} 222 L${cx - 62} 332 M${cx + 78} 222 L${cx + 62} 332 M${cx + 78} 222 L${cx + 94} 332`} />
        <rect className={F} x={cx - 84} y="210" width="12" height="20" />
        <rect className={F} x={cx + 72} y="210" width="12" height="20" />
        <rect className={F} x={cx + 84} y="204" width="26" height="30" rx="3" />
      </>
    ),
  },
  press: {
    ...MAJOR, w: 130, bottom: 262,
    body: (cx) => (
      <>
        <path className={L} d={`M${cx - 46} 112 V332 M${cx + 46} 112 V332 M${cx} 172 V196`} />
        <rect className={F} x={cx - 54} y="112" width="108" height="14" />
        <rect className={F} x={cx - 13} y="126" width="26" height="46" />
        <rect className={F} x={cx - 38} y="196" width="76" height="8" />
        <rect className={F} x={cx - 34} y="206" width="68" height="46" />
        <path className={T} d={`M${cx - 24} 218 H${cx + 24} M${cx - 24} 230 H${cx + 24} M${cx - 24} 242 H${cx + 24}`} strokeDasharray="2 6" />
        <rect className={F} x={cx - 54} y="252" width="108" height="10" />
      </>
    ),
  },
  clarifier: {
    ...MAJOR, w: 110, bottom: 300,
    body: (cx) => (
      <>
        <path className={L} d={`M${cx - 36} 176 Q${cx} 142 ${cx + 36} 176 M${cx} 150 V128 M${cx} 236 V262 M${cx - 30} 300 V332 M${cx + 30} 300 V332`} />
        <path className={F} d={`M${cx - 36} 176 H${cx + 36} L${cx + 22} 236 H${cx - 22} Z`} />
        <path className={T} d={`M${cx - 28} 190 H${cx + 28} M${cx - 25} 204 H${cx + 25} M${cx - 22} 218 H${cx + 22}`} />
        <rect className={F} x={cx - 26} y="262" width="52" height="38" rx="3" />
      </>
    ),
  },
  decanter: {
    ...MAJOR, w: 200, bottom: 280,
    body: (cx) => (
      <>
        <path className={L} d={`M${cx - 60} 258 V270 M${cx + 40} 258 V270 M${cx - 80} 280 V332 M${cx + 72} 280 V332`} />
        <path className={F} d={`M${cx - 72} 202 H${cx + 28} L${cx + 70} 216 V244 L${cx + 28} 258 H${cx - 72} Z`} />
        <path className={T} d={`M${cx - 62} 230 H${cx + 58} M${cx - 54} 208 L${cx - 46} 252 M${cx - 34} 208 L${cx - 26} 252 M${cx - 14} 208 L${cx - 6} 252 M${cx + 6} 208 L${cx + 14} 252 M${cx + 26} 210 L${cx + 32} 250`} />
        <rect className={F} x={cx - 98} y="212" width="24" height="36" rx="3" />
        <rect className={F} x={cx - 90} y="270" width="170" height="10" />
      </>
    ),
  },
  homogeniser: {
    ...MAJOR, w: 120, bottom: 272, cip: (cx) => [cx - 20, 276],
    body: (cx) => (
      <>
        <path className={L} d={`M${cx - 20} 146 V128 M${cx} 146 V128 M${cx + 20} 146 V128 M${cx - 36} 272 V332 M${cx + 36} 272 V332`} />
        <rect className={F} x={cx - 34} y="146" width="68" height="22" />
        <rect className={F} x={cx - 42} y="168" width="84" height="104" rx="4" />
        <circle className={L} cx={cx + 20} cy="198" r="10" fill="#fff" />
        <path className={L} d={`M${cx + 20} 198 L${cx + 26} 192`} />
      </>
    ),
  },
  freezer: {
    ...MAJOR, w: 170, bottom: 300, cip: (cx) => [cx + 40, 304],
    body: (cx) => (
      <>
        <rect className={F} x={cx - 62} y="236" width="124" height="64" rx="3" />
        <rect className={F} x={cx - 58} y="190" width="116" height="40" rx="20" />
        <path className={T} d={`M${cx - 44} 196 L${cx - 34} 224 L${cx - 24} 196 L${cx - 14} 224 L${cx - 4} 196 L${cx + 6} 224 L${cx + 16} 196 L${cx + 26} 224 L${cx + 36} 196`} />
        <rect className={F} x={cx - 84} y="196" width="22" height="28" rx="3" />
        <path className={L} d={`M${cx - 56} 300 V332 M${cx + 56} 300 V332`} />
      </>
    ),
  },
  sterilizer: {
    ...MAJOR, w: 190, bottom: 280, steamX: (cx) => cx + 10,
    body: (cx) => (
      <>
        <path className={F} d={`M${cx - 74} 176 H${cx + 50} Q${cx + 84} 176 ${cx + 84} 228 Q${cx + 84} 280 ${cx + 50} 280 H${cx - 74} Z`} />
        <rect className={F} x={cx - 84} y="170" width="10" height="116" rx="3" />
        <path className={T} d={`M${cx - 66} 262 H${cx + 66}`} />
        {[-50, -18, 14].map((dx) => (
          <path key={dx} className={T} d={`M${cx + dx} 260 V226 Q${cx + dx} 220 ${cx + dx + 5} 216 V206 H${cx + dx + 11} V216 Q${cx + dx + 16} 220 ${cx + dx + 16} 226 V260 Z`} />
        ))}
        <path className={L} d={`M${cx - 50} 280 V332 M${cx + 46} 280 V332`} />
      </>
    ),
  },
  evaporator: {
    ...MAJOR, w: 180, bottom: 292, cip: (cx) => [cx - 31, 296], steamX: (cx) => cx - 65,
    body: (cx) => (
      <>
        <path className={L} d={`M${cx - 65} 112 V104 H${cx + 52} V150 M${cx - 82} 292 V332 M${cx + 30} 292 V332 M${cx + 68} 246 V332`} />
        {[0, 1, 2].map((i) => {
          const x = cx - 78 + i * 34;
          return (
            <g key={i}>
              <rect className={F} x={x} y="112" width="26" height="180" rx="4" />
              <path className={T} d={`M${x + 9} 120 V284 M${x + 17} 120 V284`} />
            </g>
          );
        })}
        <rect className={F} x={cx + 34} y="150" width="36" height="96" rx="12" />
      </>
    ),
  },
  dryer: {
    ...MAJOR, w: 180, bottom: 282,
    body: (cx) => (
      <>
        <path className={L} d={`M${cx - 20} 112 V108 M${cx + 22} 170 H${cx + 44} M${cx + 58} 232 V250 M${cx - 56} 214 V332 M${cx + 16} 214 V332 M${cx + 70} 200 V332`} />
        <path className={F} d={`M${cx - 62} 112 H${cx + 22} V200 L${cx - 20} 282 L${cx - 62} 200 Z`} />
        <rect className={F} x={cx - 28} y="96" width="16" height="12" />
        <path className={F} d={`M${cx + 44} 140 H${cx + 72} V196 L${cx + 58} 232 L${cx + 44} 196 Z`} />
      </>
    ),
  },
  fluidbed: {
    ...MAJOR, w: 150, bottom: 280,
    body: (cx) => (
      <>
        <path className={L} d={`M${cx - 62} 206 Q${cx} 176 ${cx + 62} 206 M${cx - 46} 242 l6 6 l-12 6 l12 6 l-12 6 l6 6 M${cx + 46} 242 l6 6 l-12 6 l12 6 l-12 6 l6 6 M${cx - 60} 280 V332 M${cx + 60} 280 V332`} />
        <rect className={F} x={cx - 62} y="206" width="124" height="36" rx="4" />
        <path className={T} d={`M${cx - 56} 228 H${cx + 56}`} strokeDasharray="4 4" />
        <rect className={F} x={cx - 66} y="272" width="132" height="8" />
      </>
    ),
  },
  membrane: {
    ...MAJOR, w: 150, bottom: 280, cip: (cx) => [cx, 284],
    body: (cx) => (
      <>
        <path className={L} d={`M${cx - 62} 150 V332 M${cx + 62} 150 V332`} />
        {[0, 1, 2, 3].map((i) => <rect key={i} className={F} x={cx - 58} y={160 + i * 30} width="116" height="18" rx="9" />)}
      </>
    ),
  },
  ringdryer: {
    ...MAJOR, w: 210, bottom: 270,
    body: (cx) => (
      <>
        <path fill="#EEF3F6" fillRule="evenodd" stroke="#0a1a2a" strokeWidth="1.8" d={`M${cx - 66} 186 A66 58 0 1 0 ${cx + 66} 186 A66 58 0 1 0 ${cx - 66} 186 Z M${cx - 52} 186 A52 44 0 1 0 ${cx + 52} 186 A52 44 0 1 0 ${cx - 52} 186 Z`} />
        <rect className={F} x={cx - 30} y="232" width="60" height="38" rx="4" />
        <path className={F} d={`M${cx + 74} 150 H${cx + 98} V196 L${cx + 86} 226 L${cx + 74} 196 Z`} />
        <path className={L} d={`M${cx + 60} 160 H${cx + 74} M${cx - 24} 270 V332 M${cx + 24} 270 V332 M${cx + 86} 226 V332`} />
      </>
    ),
  },
  coldstore: {
    ...MAJOR, w: 130, bottom: 300,
    body: (cx) => (
      <>
        <rect className={F} x={cx - 30} y="122" width="60" height="18" />
        <rect className={F} x={cx - 58} y="140" width="116" height="160" />
        <rect className={T} x={cx - 50} y="148" width="100" height="144" fill="none" />
        <rect className={L} x={cx - 16} y="220" width="32" height="72" fill="#fff" />
        <path className={L} d={`M${cx - 10} 182 H${cx + 10} M${cx} 172 V192 M${cx - 7} 175 L${cx + 7} 189 M${cx + 7} 175 L${cx - 7} 189`} />
      </>
    ),
  },
};

function Name({ x, name }: { x: number; name: string }) {
  const lines = name.split("\n");
  return (
    <text className="tv-dw-name" x={x} y={lines.length > 1 ? 66 : 84}>
      {lines.map((l, i) => <tspan key={i} x={x} dy={i ? 18 : 0}>{l}</tspan>)}
    </text>
  );
}

function Drawing({ p }: { p: Props }) {
  // place the stations evenly along the line, clear of the in and out labels (about 6.6px a character)
  const total = p.stations.reduce((a, s) => a + shapes[s.kind].w, 0);
  const x0 = Math.max(110, 52 + p.input.length * 6.6), x1 = Math.min(1060, 1150 - p.output.length * 6.6);
  const gap = p.stations.length > 1 ? Math.max(8, (x1 - x0 - total) / (p.stations.length - 1)) : 0;
  let x = p.stations.length > 1 ? x0 : (x0 + x1 - total) / 2;
  const placed = p.stations.map((st) => {
    const sh = shapes[st.kind];
    const cx = Math.round(x + sh.w / 2);
    x += sh.w + gap;
    return { st, sh, cx, part: p.parts[st.part - 1] };
  });

  const steam = placed.filter((s) => s.st.steam);
  const chill = placed.filter((s) => s.st.chill);
  const cips = p.cip ? placed.filter((s) => s.sh.cip).map((s) => s.sh.cip!(s.cx)) : [];
  const sx = (s: (typeof placed)[number]) => (s.sh.steamX ? s.sh.steamX(s.cx) : s.cx);
  const chx = (s: (typeof placed)[number]) => (s.sh.chillX ? s.sh.chillX(s.cx) : s.cx);
  const ib = p.iceBank && chill.length ? { x: chx(chill[0]) - 14, part: p.parts[p.iceBank - 1] } : null;
  const names = placed.filter((s) => !s.sh.minor).map((s) => s.st.name.replace("\n", " "));

  return (
    <svg viewBox="0 0 1200 470" role="img" aria-labelledby="pl-svg-t pl-svg-d">
      <title id="pl-svg-t">{`Process flow of a ${p.sheetTitle.toLowerCase()}`}</title>
      <desc id="pl-svg-d">{`${p.input}, through ${names.join(", ")}, ${p.output.toLowerCase()}.${steam.length ? " Steam heats the line." : ""}${chill.length ? " Ice water cools it." : ""}${p.cip ? " A CIP unit cleans it." : ""} Each piece of equipment links to its own page.`}</desc>
      <defs>
        <marker id="pl-a-p" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#00AEEF" /></marker>
        <marker id="pl-a-h" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#D9731A" /></marker>
        <marker id="pl-a-c" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#3B5BCC" /></marker>
        <pattern id="pl-plates" width="6" height="10" patternUnits="userSpaceOnUse">
          <rect width="6" height="10" fill="#EEF3F6" />
          <path d="M3 0 V10" stroke="#3f5468" strokeWidth="1" />
        </pattern>
      </defs>

      <path className="tv-dw-prod tv-dw-trace" pathLength="1" d={`M40 ${Y} H1166`} markerEnd="url(#pl-a-p)" />
      <text className="tv-dw-note" x="40" y="214" style={{ textAnchor: "start" }}>{p.input}</text>
      <text className="tv-dw-note tv-dw-after" x="1166" y="214" style={{ textAnchor: "end" }}>{p.output}</text>

      {cips.length > 0 && (
        <path className="tv-dw-cip" d={cips.map(([cx, cy], i) => (i ? ` M${cx} ${cy} V${CIP_Y}` : `M${cx} ${cy} V${CIP_Y} H1062`)).join("")} />
      )}

      {steam.map((s) => {
        const both = s.st.chill && !ib;
        return (
          <g key={`s${s.cx}`}>
            <path className="tv-dw-steam tv-dw-after" d={`M${sx(s)} 452 V${s.sh.bottom}`} markerEnd="url(#pl-a-h)" />
            <text className="tv-dw-note" x={both ? sx(s) - 6 : sx(s)} y="466" style={both ? { textAnchor: "end" } : undefined}>Steam</text>
          </g>
        );
      })}
      {chill.map((s) => {
        const x = chx(s);
        if (!ib)
          return (
            <g key={`c${s.cx}`}>
              <path className="tv-dw-chill tv-dw-after" d={`M${x} 452 V${s.sh.bottom}`} markerEnd="url(#pl-a-c)" />
              <text className="tv-dw-note" x={s.st.steam ? x + 6 : x} y="466" style={s.st.steam ? { textAnchor: "start" } : undefined}>Ice water</text>
            </g>
          );
        const inBox = x >= ib.x && x <= ib.x + 168;
        return <path key={`c${s.cx}`} className="tv-dw-chill tv-dw-after" d={inBox ? `M${x} 398 V${s.sh.bottom}` : `M${x < ib.x ? ib.x : ib.x + 168} 415 H${x} V${s.sh.bottom}`} markerEnd="url(#pl-a-c)" />;
      })}

      {placed.map(({ st, sh, cx, part }, i) => (
        <a key={i} href={part.href} className="tv-dw-stn" aria-label={`${st.name.replace("\n", " ")}${part.href ? `: ${part.name}` : ""}`}>
          {sh.minor ? (
            <>
              <rect className="tv-dw-hit" x={cx - 33} y="150" width="66" height="128" />
              {sh.body(cx)}
              <g className="tv-dw-ball"><circle cx={cx} cy="176" r="13" /><text x={cx} y="176">{st.part}</text></g>
              <text className="tv-dw-note" x={cx} y="268">{st.name}</text>
            </>
          ) : (
            <>
              <rect className="tv-dw-hit" x={cx - sh.w / 2} y="30" width={sh.w} height="312" />
              {sh.body(cx)}
              <g className="tv-dw-ball"><circle cx={cx + (sh.nameDX ?? 0)} cy={st.name.includes("\n") ? 36 : 48} r="13" /><text x={cx + (sh.nameDX ?? 0)} y={st.name.includes("\n") ? 36 : 48}>{st.part}</text></g>
              <Name x={cx + (sh.nameDX ?? 0)} name={st.name} />
            </>
          )}
        </a>
      ))}

      {ib && (
        <a href={ib.part.href} className="tv-dw-stn" aria-label={`Ice water from an ice bank${ib.part.href ? `: ${ib.part.name}` : ""}`}>
          <rect className="tv-dw-hit" x={ib.x - 10} y="388" width="190" height="66" />
          <rect className="tv-dw-f" x={ib.x} y="398" width="168" height="34" rx="4" />
          <text className="tv-dw-sub" x={ib.x + 92} y="420">Ice bank (IBT)</text>
          <g className="tv-dw-ball"><circle cx={ib.x + 192} cy="415" r="13" /><text x={ib.x + 192} y="415">{p.iceBank}</text></g>
        </a>
      )}
      {p.cip && (
        <a href={p.parts[p.cip - 1].href} className="tv-dw-stn" aria-label={`CIP unit${p.parts[p.cip - 1].href ? `: ${p.parts[p.cip - 1].name}` : ""}`}>
          <rect className="tv-dw-hit" x="1052" y="336" width="130" height="56" />
          <rect className="tv-dw-f" x="1062" y="345" width="104" height="34" rx="4" />
          <text className="tv-dw-sub" x="1114" y="367">CIP unit</text>
          <g className="tv-dw-ball"><circle cx="1114" cy="404" r="13" /><text x="1114" y="404">{p.cip}</text></g>
        </a>
      )}
    </svg>
  );
}

// ---- the page ----

export function Plant(p: Props) {
  const steam = p.stations.some((s) => s.steam), chill = p.stations.some((s) => s.chill);
  const waHref = "https://wa.me/919176610713?text=" + encodeURIComponent(`Hi Tavron, I'd like ${p.wa}.`).replace(/'/g, "%27");
  return (
    <main id="main" className="tv-sp">
      <div className="tv-sp__wrap">
        <ol className="tv-sp__crumb">
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html#turnkey">Turnkey solutions</a></li>
          <li aria-current="page">{p.crumb}</li>
        </ol>
        <div className="tv-sp__head">
          <h1 className="tv-sp__title">{p.title}</h1>
          <div>
            <p className="tv-sp__intro">{p.intro}</p>
            <div className="tv-sp__act">
              <a href="contact.html" className="tv-btn tv-btn--primary">Plan a plant with us</a>
              <a href="tel:+919176610713" className="tv-sp__tel">+91 91766 10713</a>
            </div>
          </div>
        </div>

        <figure className="tv-sheet" aria-labelledby="pl-sheet-title">
          <div className="tv-sheet__zones" aria-hidden="true">
            {["16.6%", "33.3%", "50%", "66.6%", "83.3%"].map((left, i) => <span key={left} style={{ left, top: "2px" }}>{i + 1}</span>)}
            {["25%", "50%", "75%"].map((top, i) => <span key={`l${top}`} style={{ left: "3px", top }}>{"ABC"[i]}</span>)}
            {["25%", "50%", "75%"].map((top, i) => <span key={`r${top}`} style={{ right: "3px", top }}>{"ABC"[i]}</span>)}
          </div>
          <div className="tv-sheet__in">
            <div className="tv-sheet__draw">
              <p className="tv-sheet__hint">Scroll sideways to follow the line.</p>
              <Drawing p={p} />
              <ul className="tv-sheet__legend">
                <li><i></i>{p.product}</li>
                {steam && <li><i className="is-steam"></i>Steam</li>}
                {chill && <li><i className="is-chill"></i>Ice water</li>}
                {p.cip && <li><i className="is-cip"></i>CIP supply</li>}
              </ul>
            </div>
            <div className="tv-sheet__foot">
              <table className="tv-parts">
                <thead>
                  <tr>
                    <th scope="col" className="tv-parts__no">No.</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {p.parts.map((part, i) => (
                    <tr key={i}>
                      <td className="tv-parts__no"><span>{i + 1}</span></td>
                      <th scope="row">{part.href ? <a href={part.href}>{part.name}</a> : part.name}</th>
                      <td>{part.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <dl className="tv-tblock">
                <div className="tv-tblock__title"><dt>Title</dt><dd id="pl-sheet-title">{p.sheetTitle}</dd></div>
                {[...p.facts, ["Scope", "Turnkey"], ["Scale", "Not to scale"]].map(([dt, dd]) => <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>)}
                <div className="tv-tblock__wide"><dt>Made by</dt><dd>Tavron Engineers, Chennai. ISO&nbsp;9001:2015</dd></div>
              </dl>
            </div>
          </div>
        </figure>

        {p.sections?.map((sec, i) => (
          <section className="tv-sp__sec" key={sec.title} aria-labelledby={`pl-s${i}`}>
            <div>
              <h2 className="tv-sp__h2" id={`pl-s${i}`}>{sec.title}</h2>
              <p className="tv-sp__aside">{sec.aside}</p>
            </div>
            {sec.rows && (
              <dl className="tv-rows">
                {sec.rows.map(([dt, dd]) => <div key={dt}><dt>{dt}</dt><dd>{typeof dd === "string" ? <p>{dd}</p> : dd}</dd></div>)}
              </dl>
            )}
            {sec.images?.length === 1 && (
              <figure className="tv-doccert" style={{ maxWidth: "none" }}>
                <img src={sec.images[0].img[0]} width={sec.images[0].img[1]} height={sec.images[0].img[2]} loading="lazy" alt={sec.images[0].img[3]} data-lightbox={sec.images[0].img[0]} />
                <figcaption>{sec.images[0].caption}</figcaption>
              </figure>
            )}
            {sec.images && sec.images.length > 1 && (
              <div className="tv-strip">
                {sec.images.map(({ img, caption }) => (
                  <figure key={img[0]}>
                    <div className="tv-strip__img"><img src={img[0]} width={img[1]} height={img[2]} loading="lazy" alt={img[3]} data-lightbox={img[0]} /></div>
                    <figcaption>{caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        ))}

        <section className="tv-sp__sec" aria-labelledby="pl-built">
          <div>
            <h2 className="tv-sp__h2" id="pl-built">The equipment, built</h2>
            <p className="tv-sp__aside">Click a photo to see it larger.</p>
          </div>
          <div className="tv-strip tv-plant-built">
            {p.built
              // each photo's item number on the drawing, given or read from "Item 2", "Part of item 4"…;
              // the photos run in item order, with the unnumbered ones last
              .map((b) => ({ ...b, n: b.item ?? (typeof b.note === "string" ? Number(b.note.match(/\bitems? (\d+)/i)?.[1]) || undefined : undefined) }))
              .sort((a, b) => (a.n ?? 99) - (b.n ?? 99))
              .map(({ img, name, note, n }) => (
              <figure key={img[0] + name}>
                <div className="tv-strip__img" data-item={n}><img src={img[0]} width={img[1]} height={img[2]} loading="lazy" alt={img[3]} data-lightbox={img[0]} /></div>
                <figcaption>
                  <strong>{name}</strong>
                  {note}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      <section className="tv-close" aria-labelledby="pl-close">
        <div className="tv-sp__wrap tv-close__in">
          <div>
            <h2 id="pl-close">{p.close.title}</h2>
            <p>Send us three things and we&apos;ll come back with a scheme and a budget.</p>
          </div>
          <div>
            <ul className="tv-close__need">{p.close.needs.map((n) => <li key={n}>{n}</li>)}</ul>
            <div className="tv-sp__act">
              <a href="contact.html" className="tv-btn tv-btn--primary">Plan a plant with us</a>
              <a href={waHref} className="tv-btn tv-btn--ghost" target="_blank" rel="noopener">WhatsApp us</a>
            </div>
            <div className="tv-close__files">
              {p.close.files.map(([label, href, size]) => (
                <a key={href} href={href} {...(pdf(href) ? { target: "_blank", rel: "noopener" } : {})}>
                  {size ? `${label} ` : label}
                  {size && <small>{`PDF, ${size.replace(" ", " ")}`}</small>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
