import { Ball, Defs, Dir, Label, Legend, Pipe, Stn, Sym, Zones, type Part } from "@/components/Plant";

// The liquid milk plant as a process flow diagram: every major machine in process order, the tank
// banks, the separator and homogeniser loop off the pasteurizer, and the utilities. Valves,
// instruments and pipe routes stay on Tavron's P&ID, which comes with a proposal.

const Y1 = 222, Y2 = 570; // the product line in each row
const L = "tv-dw-l", F = "tv-dw-f";
const fluid = "#E5F8FF";
const silos = [598, 712, 826, 940, 1054];
const pmts = [604, 670, 736, 802, 868];
const fillers = [984, 1018, 1052, 1086, 1120, 1154];

/** a milk can standing on (x, y) */
const can = (x: number, y: number) =>
  `M${x - 9} ${y} V${y - 22} Q${x - 9} ${y - 28} ${x - 4} ${y - 30} V${y - 36} H${x + 4} V${y - 30} Q${x + 9} ${y - 28} ${x + 9} ${y - 22} V${y} Z`;

export function MilkDrawing({ parts }: { parts: Part[] }) {
  const p = (n: number) => parts[n - 1];
  return (
    <>
      <svg viewBox="0 0 1200 810"role="img" aria-labelledby="pl-svg-t pl-svg-d">
        <title id="pl-svg-t">Process flow of a liquid milk processing plant</title>
        <desc id="pl-svg-d">
          Milk arrives in cans and road tankers, is chilled in a plate chiller and stored in five raw milk silos. It is pumped to the
          HTST pasteurizer, where it is warmed, separated and homogenised, then pasteurised, cooled, stored in five pasteurised milk
          tanks and packed in pouches. Steam heats the pasteurizer, an ice bank supplies ice water to the chiller and the
          pasteurizer, and a CIP unit cleans the plant. Each piece of equipment links to its own page.
        </desc>
        <Defs />

        <Zones y={16} zones={[[20, 272, "Reception"], [282, 512, "Chilling"], [522, 1180, "Raw milk storage"]]} />
        <Zones y={380} zones={[[20, 542, "Processing"], [552, 912, "Pasteurised storage"], [922, 1180, "Packing"]]} />

        {/* ---- the product, in process order ---- */}
        <Pipe d={`M208 198 V${Y1} H540 V108 H${silos[4] + 20}`} />
        <Pipe d={`M238 288 H262 V${Y1}`} />
        {silos.map((x) => <Pipe key={x} d={`M${x + 20} 108 V139`} />)}
        {silos.slice(1).map((x) => <Pipe key={x} d={`M${x} 275 V316`} />)}
        <Pipe d={`M${silos[0]} 275 V316 H1170 V352 H36 V${Y2} H570 V476 H${pmts[4] + 16}`} />
        {pmts.map((x) => <Pipe key={x} d={`M${x + 16} 476 V503`} />)}
        {pmts.slice(1).map((x) => <Pipe key={x} d={`M${x} 612 V646`} />)}
        <Pipe d={`M${pmts[0]} 612 V646 H950 V486 H${fillers[5]}`} />
        {fillers.map((x) => <Pipe key={x} d={`M${x} 486 V498`} />)}
        {/* the separator and homogeniser loop: out of the regeneration section, back into heating */}
        <Pipe d={`M336 630 V654 H120 V669`} />
        <Pipe d="M137 700 H239" />
        <Pipe d="M277 684 H372 V642" arrow />
        <Pipe d="M103 700 H62" arrow />
        <Dir x={640} y={352} left />
        <Dir x={150} y={Y2} />
        <Dir x={760} y={646} />

        {/* ---- utilities ---- */}
        <path className="tv-dw-chill tv-dw-after" d="M412 334 V300" markerEnd="url(#pl-a-c)" />
        <text className="tv-dw-note" x="420" y="334" style={{ textAnchor: "start" }}>Ice water</text>
        <path className="tv-dw-steam tv-dw-after" d="M392 760 V642" markerEnd="url(#pl-a-h)" />
        <text className="tv-dw-note" x="386" y="776" style={{ textAnchor: "end" }}>Steam</text>
        <path className="tv-dw-chill tv-dw-after" d="M424 760 V642" markerEnd="url(#pl-a-c)" />
        <text className="tv-dw-note" x="430" y="776" style={{ textAnchor: "start" }}>Ice water</text>

        {/* ---- row 1: reception, chilling, raw milk storage ---- */}
        <Stn part={p(1)} hit={[28, 36, 230, 172]}>
          <path className={L} d="M34 160 H150 M40 169 V204 M144 169 V204" />
          {[42, 58, 74, 90, 106, 122, 138].map((x) => <circle key={x} className={L} cx={x} cy="165" r="4" fill="#fff" />)}
          {[47, 69, 91, 113].map((x) => <path key={x} className={F} d={can(x, 160)} />)}
          <path className={F} d={can(176, 144)} transform="rotate(125 176 126)" />
          <path className="tv-dw-prod" d="M192 140 V158" style={{ strokeWidth: 2.5 }} />
          <path className={F} d="M170 150 H246 V178 L214 198 H202 L170 178 Z" />
          <path fill={fluid} d="M174 162 H242 V176 L212 194 H204 L174 176 Z" />
          <path className={L} d="M174 180 V206 M242 180 V206" />
          <Ball x={140} y={56} n={1} />
          <Label x={140} y={92}>Can reception</Label>
        </Stn>

        <Stn part={p(2)} hit={[30, 224, 222, 112]}>
          <rect className={F} x="92" y="254" width="146" height="44" rx="20" />
          <path fill={fluid} d="M100 276 H230 V284 Q230 292 222 292 H108 Q100 292 100 284 Z" />
          <path className={F} d="M44 306 V282 L56 264 H86 V306 Z" />
          <path className={L} d="M54 282 L62 270 H80 V282 Z" fill="#fff" />
          <rect className={F} x="40" y="300" width="202" height="7" />
          {[64, 158, 210].map((x) => <circle key={x} className={F} cx={x} cy="316" r="10" />)}
          <Ball x={44} y={239} n={2} />
          <Label x={62} y={244} start>Road milk tanker</Label>
        </Stn>

        <Stn part={p(3)} hit={[263, 150, 66, 96]}>
          <Sym kind="pump" x={296} y={Y1} />
          <Ball x={296} y={170} n={3} />
        </Stn>

        <Stn part={p(4)} hit={[336, 36, 120, 262]}>
          <Sym kind="phe" x={396} y={Y1} />
          <Ball x={396} y={56} n={4} />
          <Label x={396} y={92}>Milk chiller</Label>
        </Stn>

        <Stn part={p(5)} hit={[556, 36, 540, 268]}>
          {silos.map((x) => <Sym key={x} kind="tank" x={x} y={Y1} s={0.75} />)}
          <Ball x={826} y={56} n={5} />
          <Label x={826} y={92}>Raw milk silos</Label>
        </Stn>

        <Stn part={p(3)} hit={[1083, 240, 66, 96]}>
          <Sym kind="pump" x={1116} y={316} />
          <Ball x={1116} y={264} n={3} />
        </Stn>

        {/* ---- row 2: processing, pasteurised storage, packing ---- */}
        <Stn part={p(6)} hit={[240, 400, 284, 236]}>
          <Sym kind="htst" x={380} y={Y2} />
          <Ball x={388} y={418} n={6} />
          <Label x={388} y={454}>HTST pasteurizer</Label>
        </Stn>

        <Stn part={p(7)} hit={[64, 656, 110, 146]}>
          <Sym kind="clarifier" x={120} y={720} s={0.5} />
          <Ball x={52} y={791} n={7} />
          <Label x={70} y={796} start>Separator</Label>
        </Stn>
        <text className="tv-dw-note" x="72" y="690">Cream</text>

        <Stn part={p(8)} hit={[180, 656, 170, 146]}>
          <Sym kind="homogeniser" x={260} y={720} s={0.5} />
          <Ball x={196} y={791} n={8} />
          <Label x={214} y={796} start>Homogeniser</Label>
        </Stn>

        <Stn part={p(9)} hit={[570, 400, 330, 240]}>
          {pmts.map((x) => <Sym key={x} kind="tank" x={x} y={Y2} s={0.6} />)}
          <Ball x={736} y={418} n={9} />
          <Label x={736} y={454}>Pasteurised milk tanks</Label>
        </Stn>

        <Stn part={p(3)} hit={[891, 576, 66, 96]}>
          <Sym kind="pump" x={924} y={646} />
          <Ball x={924} y={594} n={3} />
        </Stn>

        <Stn part={p(10)} hit={[962, 400, 214, 260]}>
          {fillers.map((x) => (
            <g key={x}>
              <rect className={F} x={x - 7} y="498" width="14" height="14" rx="2" />
              <rect className={F} x={x - 13} y="512" width="26" height="84" rx="2" />
              <rect className={L} x={x - 8} y="524" width="16" height="22" fill="#fff" />
              <path className={L} d={`M${x - 5} 596 V606 H${x + 5} V596`} />
            </g>
          ))}
          <path className={L} d="M966 628 H1172" markerEnd="url(#pl-a-i)" />
          {[1000, 1040, 1080, 1120].map((x) => <rect key={x} className={F} x={x} y="619" width="12" height="8" rx="2" />)}
          <text className="tv-dw-note" x="1070" y="650">Pouches to the cold store</text>
          <Ball x={1069} y={418} n={10} />
          <Label x={1069} y={454}>Pouch packing</Label>
        </Stn>

        {/* ---- utilities, in the corner under the tanks ---- */}
        <path className="tv-dw-t" d="M600 690 H1180" />
        <text className="tv-dw-view" x="606" y="712" style={{ textAnchor: "start" }}>Utilities</text>
        <Stn part={p(11)} hit={[600, 718, 390, 40]}>
          <rect className={F} x="606" y="722" width="140" height="32" rx="4" />
          <text className="tv-dw-sub" x="676" y="743">Ice bank (IBT)</text>
          <Ball x={766} y={738} n={11} />
          <text className="tv-dw-note" x="788" y="742" style={{ textAnchor: "start" }}>Ice water to items 4 and 6</text>
        </Stn>
        <path className="tv-dw-steam" d="M1012 738 H1042" />
        <text className="tv-dw-note" x="1050" y="742" style={{ textAnchor: "start" }}>Steam from the boiler</text>
        <Stn part={p(12)} hit={[600, 760, 420, 40]}>
          <rect className={F} x="606" y="764" width="100" height="32" rx="4" />
          <text className="tv-dw-sub" x="656" y="785">CIP unit</text>
          <Ball x={726} y={780} n={12} />
          <text className="tv-dw-note" x="748" y="784" style={{ textAnchor: "start" }}>Cleans the tanks, lines and pasteurizer</text>
        </Stn>
      </svg>
      <Legend product="Milk" steam chill />
      <p className="tv-sheet__cap">A typical plant. Detailed P&amp;ID and layout drawings come with your proposal.</p>
    </>
  );
}
