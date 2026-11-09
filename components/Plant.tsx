import type { ReactNode } from "react";
import { Faq, type Link } from "./Doc";

// A turnkey plant page: title, a process drawing of the plant with its parts list and title block,
// sections about the plant, how a project runs, dairies we work with, photos of the equipment,
// questions buyers ask, and a closing band. The drawing is generated from `stations`: each is a
// piece of equipment, drawn as a symbol on the product line in process order, numbered to match
// the parts list. The liquid milk page draws its own (app/milkprocessing/Drawing.tsx).

type Kind =
  | "tank" | "cone" | "vat" | "pump" | "htst" | "phe" | "tubular" | "churn" | "press" | "clarifier" | "decanter"
  | "homogeniser" | "freezer" | "sterilizer" | "evaporator" | "dryer" | "fluidbed" | "membrane" | "ringdryer" | "coldstore"
  | "filler";

export type Station = {
  kind: Kind;
  /** its number in `parts` (from 1) */
  part: number;
  /** label on the drawing; "\n" breaks the line. A pump's is not shown */
  name: string;
  /** steam or ice water piped to it */
  steam?: boolean;
  chill?: boolean;
  /** a bank of this many, drawn smaller; tanks, vats and fillers are fed from a header */
  count?: number;
  /** a stream leaving here, e.g. "Whey out" */
  out?: string;
  /** the stage this station starts, named over the drawing; it runs to the next zone or the row's end */
  zone?: string;
};
export type Part = { name: string; href?: string; spec: string };
/** [src, width, height, alt] */
export type Img = [string, number, number, string];

type Props = {
  crumb: string;
  title: string;
  intro: string;
  /** the product on the drawing's legend, e.g. "Milk" */
  product?: string;
  /** "Raw milk in", "To packing" */
  input?: string;
  output?: string;
  /** the generated drawing's equipment, in process order; or `drawing`, a drawing made for this plant */
  stations?: Station[];
  /** a second row: the line carries on into it, or, with `from` (a station's place in the first
   *  row, from 1), a side line fed by that station's stream; `output` labels its end */
  then?: { stations: Station[]; from?: number; output?: string };
  drawing?: ReactNode;
  parts: Part[];
  /** parts-list numbers of the ice bank and CIP unit, shown in the utilities strip, if the plant has them */
  iceBank?: number;
  cip?: number;
  /** the drawing's title block: its title, then four facts (Scope, Scale and Made by are added) */
  sheetTitle: string;
  facts: [string, string][];
  /** sections after the drawing: ruled rows, photos, or any `body` */
  sections?: { title: string; aside: ReactNode; rows?: [string, ReactNode][]; images?: { img: Img; caption: string }[]; body?: ReactNode }[];
  /** questions and answers after the photos, also published as FAQPage data */
  faq?: [string, string][];
  /** "Dairies we work with", shown unless false */
  dairies?: boolean;
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

const Y = 230; // the product line the symbols are drawn on
const MAJOR = { w: 0, minor: false };

/** `outDX`: where a stream leaves the symbol, from its centre (default a little left of it) */
type Shape = { w: number; minor?: boolean; body: (cx: number) => ReactNode; bottom: number; steamX?: (cx: number) => number; chillX?: (cx: number) => number; nameDX?: number; outDX?: number };

const L = "tv-dw-l", F = "tv-dw-f", T = "tv-dw-t";
const fluid = "#E5F8FF";

const shapes: Record<Kind, Shape> = {
  tank: {
    ...MAJOR, w: 140, bottom: 300,
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
    ...MAJOR, w: 120, bottom: 300,
    body: (cx) => (
      <>
        <path className={F} d={`M${cx - 40} 124 H${cx + 40} V250 L${cx} 296 L${cx - 40} 250 Z`} />
        <path fill={fluid} d={`M${cx - 34} 176 H${cx + 34} V248 L${cx} 288 L${cx - 34} 248 Z`} />
        <path className={L} d={`M${cx - 46} 124 H${cx + 46} M${cx} 296 V306 M${cx - 36} 254 V332 M${cx + 36} 254 V332`} />
      </>
    ),
  },
  vat: {
    ...MAJOR, w: 150, bottom: 304,
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
    ...MAJOR, w: 300, bottom: 296, nameDX: 8, steamX: (cx) => cx, chillX: (cx) => cx + 44,
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
    ...MAJOR, w: 130, bottom: 296, steamX: (cx) => cx - 16, chillX: (cx) => cx + 16,
    body: (cx) => (
      <>
        <rect x={cx - 50} y="170" width="100" height="120" fill="url(#pl-plates)" stroke="#0a1a2a" strokeWidth="1.8" />
        <rect className={F} x={cx - 58} y="164" width="116" height="8" />
        <rect className={F} x={cx - 58} y="288" width="116" height="8" />
      </>
    ),
  },
  tubular: {
    ...MAJOR, w: 150, bottom: 298, steamX: (cx) => cx + 20,
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
    ...MAJOR, w: 200, bottom: 272,
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
    ...MAJOR, w: 120, bottom: 272,
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
    ...MAJOR, w: 170, bottom: 300,
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
    ...MAJOR, w: 180, bottom: 292, steamX: (cx) => cx - 65,
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
    ...MAJOR, w: 150, bottom: 280,
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
  filler: {
    ...MAJOR, w: 70, bottom: 296,
    body: (cx) => (
      <>
        <rect className={F} x={cx - 8} y="150" width="16" height="16" rx="2" />
        <rect className={F} x={cx - 15} y="166" width="30" height="118" rx="2" />
        <rect className={L} x={cx - 9} y="180" width="18" height="30" fill="#fff" />
        <path className={L} d={`M${cx - 6} 284 V296 H${cx + 6} V284`} />
      </>
    ),
  },
};

// ---- parts for drawings made for one plant (see app/milkprocessing/Drawing.tsx) ----

/** symbol `kind` with its product line at (x, y), scaled by s; lines keep their weight when scaled */
export function Sym({ kind, x, y, s = 1 }: { kind: Kind; x: number; y: number; s?: number }) {
  return <g className={s === 1 ? undefined : "tv-dw-sc"} transform={`translate(${x} ${y}) scale(${s}) translate(0 ${-Y})`}>{shapes[kind].body(0)}</g>;
}

/** a parts-list number */
export const Ball = ({ x, y, n }: { x: number; y: number; n: number }) => (
  <g className="tv-dw-ball"><circle cx={x} cy={y} r="13" /><text x={x} y={y}>{n}</text></g>
);

/** a piece of equipment, linked to its page if it has one; `hit` [x, y, w, h] lights up on hover */
export function Stn({ part, hit, children }: { part: Part; hit: [number, number, number, number]; children: ReactNode }) {
  if (!part.href) return <g>{children}</g>;
  return (
    <a href={part.href} className="tv-dw-stn" aria-label={part.name}>
      <rect className="tv-dw-hit" x={hit[0]} y={hit[1]} width={hit[2]} height={hit[3]} />
      {children}
    </a>
  );
}

export function Defs() {
  return (
    <defs>
      <marker id="pl-a-p" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#00AEEF" /></marker>
      <marker id="pl-a-h" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#D9731A" /></marker>
      <marker id="pl-a-c" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#3B5BCC" /></marker>
      <marker id="pl-a-i" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#0a1a2a" /></marker>
      <pattern id="pl-plates" width="6" height="10" patternUnits="userSpaceOnUse">
        <rect width="6" height="10" fill="#EEF3F6" />
        <path d="M3 0 V10" stroke="#3f5468" strokeWidth="1" />
      </pattern>
    </defs>
  );
}

export function Legend({ product, steam, chill, cip }: { product: string; steam?: boolean; chill?: boolean; cip?: boolean }) {
  return (
    <ul className="tv-sheet__legend">
      <li><i></i>{product}</li>
      {steam && <li><i className="is-steam"></i>Steam</li>}
      {chill && <li><i className="is-chill"></i>Ice water</li>}
      {cip && <li><i className="is-cip"></i>CIP supply</li>}
    </ul>
  );
}

/** product pipe; traced in when the drawing appears */
export const Pipe = ({ d, arrow }: { d: string; arrow?: boolean }) => (
  <path className="tv-dw-prod tv-dw-trace" pathLength={1} d={d} markerEnd={arrow ? "url(#pl-a-p)" : undefined} />
);
/** an arrowhead showing which way a long product run flows, at x, y */
export const Dir = ({ x, y, left }: { x: number; y: number; left?: boolean }) => (
  <path className="tv-dw-prod tv-dw-after" d={`M${left ? x + 1 : x - 1} ${y} H${x}`} markerEnd="url(#pl-a-p)" />
);
export const Label = ({ x, y, children, start }: { x: number; y: number; children: string; start?: boolean }) => (
  <text className="tv-dw-name" x={x} y={y} style={start ? { textAnchor: "start" } : undefined}>{children}</text>
);
/** stages named along the top of a row: [from x, to x, name] */
export function Zones({ y, zones }: { y: number; zones: [number, number, string][] }) {
  return (
    <g aria-hidden="true">
      {zones.map(([a, b, label]) => (
        <g key={label + a}>
          <text className="tv-dw-view" x={(a + b) / 2} y={y}>{label}</text>
          <path className="tv-dw-dim" d={`M${a + 4} ${y + 12} V${y + 6} H${b - 4} V${y + 12}`} />
        </g>
      ))}
    </g>
  );
}

// ---- the generated drawing ----
//
// Rows of stations on a product line. A row is ROW high: stage names along the top, part numbers
// and names, the equipment on the line (RY down), then streams leaving the line and steam or ice
// water arriving. A second row either carries the line on, returning along the gap between the
// rows, or is a side line fed by a stream from the first. The utilities sit in a strip at the foot.

const ROW = 440, RY = 240, GAP = ROW - 22;
type Pt = [number, number];
type Placed = { st: Station; sh: Shape; cx: number; w: number; s: number; members: number[]; Y: number; r0: number };

/** banks of these are fed from a header above and, but for fillers, emptied into one below */
const BANK: Partial<Record<Kind, { s: number; body: number; inlet: Pt; outlet?: Pt }>> = {
  tank: { s: 0.62, body: 90, inlet: [27, 119], outlet: [0, 300] },
  cone: { s: 0.62, body: 92, inlet: [20, 124], outlet: [0, 306] },
  vat: { s: 0.62, body: 128, inlet: [30, 140], outlet: [0, 304] },
  filler: { s: 1, body: 30, inlet: [0, 150] },
};

/** spread a row's stations evenly between x0 and x1 */
function layRow(sts: Station[], r0: number, x0: number, x1: number): Placed[] {
  const dims = sts.map((st) => {
    const sh = shapes[st.kind], n = st.count ?? 1, b = BANK[st.kind];
    if (n === 1) return { w: sh.w, s: 1, pitch: 0, n };
    const s = b?.s ?? 0.62, body = (b?.body ?? sh.w * 0.75) * s, pitch = body + 14;
    return { w: (n - 1) * pitch + body + 28, s, pitch, n };
  });
  const total = dims.reduce((a, d) => a + d.w, 0);
  const gap = sts.length > 1 ? Math.max(8, (x1 - x0 - total) / (sts.length - 1)) : 0;
  let x = sts.length > 1 ? x0 : (x0 + x1 - total) / 2;
  return sts.map((st, i) => {
    const d = dims[i], cx = Math.round(x + d.w / 2);
    x += d.w + gap;
    const members = Array.from({ length: d.n }, (_, k) => Math.round(cx - ((d.n - 1) * d.pitch) / 2 + k * d.pitch));
    return { st, sh: shapes[st.kind], cx, w: d.w, s: d.s, members, Y: r0 + RY, r0 };
  });
}

/** a point on a symbol (drawn about Y) at x, scaled as the station is */
const at = (q: Placed, x: number, [dx, y]: Pt): Pt => [Math.round(x + dx * q.s), Math.round(q.Y + (y - Y) * q.s)];
const foot = (q: Placed) => Math.round(q.Y + (q.sh.bottom - Y) * q.s);
/** the header a bank empties into */
const low = (q: Placed) => Math.round(q.Y + (332 - Y) * q.s + 12);
/** where a station's stream leaves it */
function outAt(q: Placed): Pt {
  if (q.members.length > 1 && BANK[q.st.kind]?.outlet) return [q.members[0], low(q)];
  return [Math.round(q.cx + (q.sh.outDX ?? -q.sh.w * 0.22) * q.s), foot(q)];
}
const pathOf = (pts: Pt[]) => pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");
const listOf = (ns: number[]) => (ns.length > 1 ? `${ns.slice(0, -1).join(", ")} and ${ns[ns.length - 1]}` : `${ns[0]}`);

function Drawing({ p }: { p: Props }) {
  const { input = "", output = "", then } = p;
  const side = then?.from !== undefined;
  const rowsIn = [p.stations ?? [], ...(then ? [then.stations] : [])];
  // each row ends at a label, or (a row the line carries on from) at the return
  const ends = rowsIn.map((_, i) => (i === rowsIn.length - 1 ? (side ? then?.output ?? "" : output) : side ? output : null));
  const rows = rowsIn.map((sts, i) => {
    const end = ends[i];
    return layRow(sts, i * ROW, i === 0 ? Math.max(110, 52 + input.length * 6.6) : 90, end === null ? 1120 : Math.min(1060, 1150 - end.length * 6.6));
  });
  const all = rows.flat();

  // the product pipes: runs of line, broken where a bank's header feeds its tanks
  const runs: { pts: Pt[]; packs?: boolean; label?: string }[] = [];
  const drops: string[] = [];
  let cur: Pt[] = [[40, RY]];
  let packs = false;
  const pass = (row: Placed[]) => {
    for (const q of row) {
      const b = BANK[q.st.kind];
      if (q.members.length < 2 || !b) continue;
      const left = q.cx - q.w / 2 + 6, right = q.cx + q.w / 2 - 6, hi = q.Y - 104;
      const ins = q.members.map((m) => at(q, m, b.inlet));
      cur.push([left, q.Y], [left, hi], [ins[ins.length - 1][0], hi]);
      runs.push({ pts: cur });
      for (const [x, y] of ins) drops.push(`M${x} ${hi} V${y}`);
      if (b.outlet) {
        const outs = q.members.map((m) => at(q, m, b.outlet!));
        for (const [x, y] of outs.slice(1)) drops.push(`M${x} ${y} V${low(q)}`);
        cur = [outs[0], [outs[0][0], low(q)], [right, low(q)], [right, q.Y]];
      } else {
        // what leaves fillers is packs, carried on a conveyor below them
        packs = true;
        cur = [[left, q.Y + 76]];
      }
    }
  };
  const finish = (Yr: number, label: string) => {
    cur.push([1166, packs ? Yr + 76 : Yr]);
    runs.push({ pts: cur, packs, label });
  };
  pass(rows[0]);
  if (rows.length === 1) finish(RY, output);
  else if (!side) {
    cur.push([1170, RY], [1170, GAP], [40, GAP], [40, ROW + RY]);
    pass(rows[1]);
    finish(ROW + RY, output);
  } else {
    finish(RY, output);
    const o = outAt(rows[0][then!.from! - 1]);
    packs = false;
    cur = [o, [o[0], GAP], [40, GAP], [40, ROW + RY]];
    pass(rows[1]);
    finish(ROW + RY, then!.output ?? "");
  }

  // the utilities strip
  const chillParts = [...new Set(all.filter((q) => q.st.chill).map((q) => q.st.part))];
  const steam = all.some((q) => q.st.steam);
  const utils: { part?: number; box?: string; bw?: number; note: string }[] = [];
  if (p.iceBank) utils.push({ part: p.iceBank, box: "Ice bank (IBT)", bw: 140, note: chillParts.length ? `Ice water to item${chillParts.length > 1 ? "s" : ""} ${listOf(chillParts)}` : "Ice water for the plant" });
  if (p.cip) utils.push({ part: p.cip, box: "CIP unit", bw: 100, note: "Cleans the line in place" });
  if (steam) utils.push({ note: "Steam from the boiler" });
  const uy = (rows.length - 1) * ROW + 416;
  const height = utils.length ? uy + 62 : uy - 6;
  let ux = 120;
  const placedUtils = utils.map((u) => {
    const x = ux;
    ux += (u.box ? u.bw! + 46 : 38) + u.note.length * 6.8 + 48;
    return { ...u, x };
  });

  const names = all.filter((q) => !q.sh.minor).map((q) => q.st.name.replace("\n", " "));
  const outs = all.filter((q, i) => q.st.out && !(side && q.r0 === 0 && i === then!.from! - 1));

  return (
    <svg viewBox={`0 0 1200 ${height}`} role="img" aria-labelledby="pl-svg-t pl-svg-d">
      <title id="pl-svg-t">{`Process flow of a ${p.sheetTitle.toLowerCase()}`}</title>
      <desc id="pl-svg-d">{`${input}, through ${names.join(", ")}, ${output.toLowerCase()}.${steam ? " Steam heats the line." : ""}${chillParts.length ? " Ice water cools it." : ""}${p.cip ? " A CIP unit cleans it." : ""} Each piece of equipment links to its own page.`}</desc>
      <Defs />

      {rows.map((row, i) => {
        const zones: [number, number, string][] = [];
        for (const q of row) {
          const l = q.cx - q.w / 2, r = q.cx + q.w / 2;
          if (q.st.zone) zones.push([l, r, q.st.zone]);
          else if (zones.length) zones[zones.length - 1][1] = r;
        }
        return <Zones key={i} y={i * ROW + 12} zones={zones} />;
      })}

      <text className="tv-dw-note" x="40" y={RY - 16} style={{ textAnchor: "start" }}>{input}</text>
      {runs.map(({ pts, packs, label }, i) => (
        <g key={i}>
          {packs ? <path className="tv-dw-l" d={pathOf(pts)} markerEnd="url(#pl-a-i)" /> : <Pipe d={pathOf(pts)} arrow={label !== undefined} />}
          {label && <text className="tv-dw-note tv-dw-after" x="1166" y={pts[pts.length - 1][1] + (packs ? 20 : -16)} style={{ textAnchor: "end" }}>{label}</text>}
        </g>
      ))}
      {drops.map((d) => <Pipe key={d} d={d} />)}
      {rows.length > 1 && <><Dir x={side ? Math.round((40 + outAt(rows[0][then!.from! - 1])[0]) / 2) : 620} y={GAP} left /><Dir x={66} y={ROW + RY} /></>}

      {outs.map((q) => {
        const [x, y] = outAt(q);
        return (
          <g key={`o${q.r0}-${q.cx}`}>
            <path className="tv-dw-prod tv-dw-after" d={`M${x} ${y} V${q.Y + 128}`} markerEnd="url(#pl-a-p)" />
            <text className="tv-dw-note tv-dw-after" x={x} y={q.Y + 154}>{q.st.out}</text>
          </g>
        );
      })}
      {all.filter((q) => q.st.steam || q.st.chill).map((q) => {
        if (q.members.length > 1) {
          // a bank: a supply header under it, an arrow up into each, clear of the outlets
          const kind = q.st.steam ? "steam" : "chill", xs = q.members.map((m) => m + 14), mid = Math.round((xs[0] + xs[xs.length - 1]) / 2), hy = q.Y + 118;
          return (
            <g key={`u${q.r0}-${q.cx}`}>
              <path className={`tv-dw-${kind} tv-dw-after`} d={`M${mid} ${q.Y + 136} V${hy} M${xs[0]} ${hy} H${xs[xs.length - 1]}`} />
              {xs.map((x) => <path key={x} className={`tv-dw-${kind} tv-dw-after`} d={`M${x} ${hy} V${foot(q) + 6}`} markerEnd={`url(#pl-a-${kind === "steam" ? "h" : "c"})`} />)}
              <text className="tv-dw-note" x={mid} y={q.Y + 154}>{q.st.steam ? "Steam" : "Ice water"}</text>
            </g>
          );
        }
        let sx = q.cx + (q.sh.steamX?.(0) ?? 0) * q.s, cx = q.cx + (q.sh.chillX?.(0) ?? 0) * q.s;
        const both = q.st.steam && q.st.chill;
        if (both && sx === cx) { sx -= 10; cx += 10; }
        return (
          <g key={`u${q.r0}-${q.cx}`}>
            {q.st.steam && <path className="tv-dw-steam tv-dw-after" d={`M${sx} ${q.Y + 136} V${foot(q) + 6}`} markerEnd="url(#pl-a-h)" />}
            {q.st.steam && <text className="tv-dw-note" x={both ? sx - 6 : sx} y={q.Y + 154} style={both ? { textAnchor: "end" } : undefined}>Steam</text>}
            {q.st.chill && <path className="tv-dw-chill tv-dw-after" d={`M${cx} ${q.Y + 136} V${foot(q) + 6}`} markerEnd="url(#pl-a-c)" />}
            {q.st.chill && <text className="tv-dw-note" x={both ? cx + 6 : cx} y={q.Y + 154} style={both ? { textAnchor: "start" } : undefined}>Ice water</text>}
          </g>
        );
      })}

      {all.map((q, i) => {
        const lines = q.st.name.split("\n"), nx = q.cx + (q.sh.nameDX ?? 0), first = q.r0 + 94 - 18 * (lines.length - 1);
        return (
          <Stn key={i} part={p.parts[q.st.part - 1]} hit={q.sh.minor ? [q.cx - 33, q.Y - 80, 66, 128] : [q.cx - q.w / 2, q.r0 + 26, q.w, RY + 108]}>
            {q.members.map((m) => <Sym key={m} kind={q.st.kind} x={m} y={q.Y} s={q.s} />)}
            {q.sh.minor ? (
              <Ball x={q.cx} y={q.Y - 54} n={q.st.part} />
            ) : (
              <>
                <Ball x={nx} y={first - 36} n={q.st.part} />
                <text className="tv-dw-name" x={nx} y={first}>
                  {lines.map((l, k) => <tspan key={k} x={nx} dy={k ? 18 : 0}>{l}</tspan>)}
                </text>
              </>
            )}
          </Stn>
        );
      })}

      {utils.length > 0 && (
        <>
          <path className="tv-dw-t" d={`M20 ${uy} H1180`} />
          <text className="tv-dw-view" x="20" y={uy + 38} style={{ textAnchor: "start" }}>Utilities</text>
          {placedUtils.map((u) => {
            if (!u.box) return (
              <g key={u.note}>
                <path className="tv-dw-steam" d={`M${u.x} ${uy + 34} H${u.x + 30}`} />
                <text className="tv-dw-note" x={u.x + 38} y={uy + 38} style={{ textAnchor: "start" }}>{u.note}</text>
              </g>
            );
            return (
              <Stn key={u.note} part={p.parts[u.part! - 1]} hit={[u.x - 6, uy + 12, u.bw! + 46 + u.note.length * 6.8 + 12, 44]}>
                <rect className="tv-dw-f" x={u.x} y={uy + 18} width={u.bw} height="32" rx="4" />
                <text className="tv-dw-sub" x={u.x + u.bw! / 2} y={uy + 39}>{u.box}</text>
                <Ball x={u.x + u.bw! + 20} y={uy + 34} n={u.part!} />
                <text className="tv-dw-note" x={u.x + u.bw! + 42} y={uy + 38} style={{ textAnchor: "start" }}>{u.note}</text>
              </Stn>
            );
          })}
        </>
      )}
    </svg>
  );
}

// ---- the page ----

/** dairies on our client list: [logo in assets/img/clients, name] */
const dairies: [string, string][] = [
  ["hatson.png", "Hatsun"], ["heritage.jpg", "Heritage"], ["doodla.jpg", "Dodla Dairy"], ["parag.jpg", "Parag"],
  ["prabhat.jpg", "Prabhat Dairy"], ["thirumala.jpg", "Thirumala"], ["creamline-jersey.png", "Creamline Jersey"], ["shruthi-milk.png", "Shruthi Milk"],
  ["kcmilk.jpg", "KC Milk"], ["cowma.jpg", "Cowma Milk"], ["tamil.jpg", "Tamil Paal"], ["vallhabha.jpg", "Vallhabha"],
];

export function Plant(p: Props) {
  const stations = [...(p.stations ?? []), ...(p.then?.stations ?? [])];
  const steam = stations.some((s) => s.steam), chill = stations.some((s) => s.chill);
  const waHref = "https://wa.me/919176610713?text=" + encodeURIComponent(`Hi Tavron, I'd like ${p.wa}.`).replace(/'/g, "%27");
  // the plant's brochure, offered beside the main button for visitors still researching
  const brochure = p.close.files.find(([, href]) => pdf(href));
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
              {brochure && (
                <a href={brochure[1]} className="tv-btn tv-btn--ghost" target="_blank" rel="noopener">
                  {`${brochure[0]} (PDF) `}<i className="ri-download-2-line"></i>
                </a>
              )}
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
              {p.drawing ?? (
                <>
                  <Drawing p={p} />
                  <Legend product={p.product ?? ""} steam={steam} chill={chill} />
                  <p className="tv-sheet__cap">A typical plant. Detailed P&amp;ID and layout drawings come with your proposal.</p>
                </>
              )}
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
            {sec.body && <div>{sec.body}</div>}
          </section>
        ))}

        <section className="tv-sp__sec" aria-labelledby="pl-project">
          <div>
            <h2 className="tv-sp__h2" id="pl-project">How a project runs</h2>
            <p className="tv-sp__aside">One contract and one point of responsibility, from the first meeting to support after handover.</p>
          </div>
          <ol className="tv-seq" style={{ "--n": 3 } as React.CSSProperties}>
            <li><h3>Define the plant</h3><p>Capacity, product mix and site, agreed first.</p></li>
            <li><h3>Study the line</h3><p>On an existing plant, where it loses time, yield or heat.</p></li>
            <li><h3>Engineer it</h3><p>Process scheme, sizing, layout and piping.</p></li>
            <li><h3>Automate it</h3><p>PLC, HMI, SCADA and instrumentation.</p></li>
            <li><h3>Commission it</h3><p>Installed and handed over running.</p></li>
            <li><h3>Support it</h3><p>Contract or resident maintenance, worn parts replaced, controls and software upgraded.</p></li>
          </ol>
        </section>

        {p.dairies !== false && (
          <section className="tv-sp__sec" aria-labelledby="pl-dairies">
            <div>
              <h2 className="tv-sp__h2" id="pl-dairies">Dairies we work with</h2>
              <p className="tv-sp__aside">Some of the dairies on our client list. <a href="clients.html">All clients</a></p>
            </div>
            <ul className="tv-logos">
              {dairies.map(([file, name]) => <li key={file}><img src={`assets/img/clients/${file}`} loading="lazy" alt={name} /></li>)}
            </ul>
          </section>
        )}

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

        {p.faq && (
          <section className="tv-sp__sec" aria-labelledby="pl-faq">
            <div>
              <h2 className="tv-sp__h2" id="pl-faq">Questions buyers ask</h2>
              <p className="tv-sp__aside">Something else? Call <a href="tel:+919176610713">+91&nbsp;91766&nbsp;10713</a>.</p>
            </div>
            <Faq items={p.faq} />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: p.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
                }),
              }}
            />
          </section>
        )}
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
