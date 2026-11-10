import { Industry } from "@/components/Industry";
import s from "@/components/Industry.module.css";
import { Ref } from "@/components/Ref";

// What a chemical buyer has to decide: which evaporator the solution needs, how much steam it will use, and
// what to build it in. The engineering is from NPTEL and Northwestern's process design textbook, our equipment
// from our brochures. Refs are numbered as in `sources`.

export default function Page() {
  return (
    <Industry
      slug="chemicals"
      title="Chemical Process Equipment: Evaporator Choice, Steam, Materials | Tavron Engineers"
      description="Which evaporator suits your solution, how much steam each effect saves, SS 304, SS 316 or carbon steel, and the reactors, evaporators, spray dryers and pumps we build in Chennai."
      h1="Chemical Process Equipment"
      intro="Jacketed reactors, evaporators, spray dryers, blenders and pumps for chemical plants. The design starts from your solution: how viscous it gets, whether it scales, foams or carries solids, how heat-sensitive and how corrosive it is. Here's how those choose the evaporator, the steam it uses and the material."
      specs={[
        ["Reactors and tanks", "SS 304 / SS 316; laser-welded dimple, limpet or conventional jacket"],
        ["Design code", "ASME, or another code on request"],
        ["Evaporation", "Falling film, rising film or forced circulation; TVR, MVR optional"],
        ["Drying", "Spray dryers, 5 to 1,500 kg/hr water evaporation"],
        ["Control", "PLC, HMI and SCADA"],
      ]}
      sources={[
        ["NPTEL (IITs and IISc): Chemical Engineering Design II, module 3, Design of evaporator", "https://archive.nptel.ac.in/content/storage2/courses/103103027/pdf/mod3.pdf"],
        ["Northwestern University, Process Design Open Textbook: Materials of construction", "https://processdesign.mccormick.northwestern.edu/index.php/Materials_of_construction"],
      ]}
      faq={[
        ["Which evaporator suits my solution?", "It turns on throughput, viscosity and how it rises as you concentrate, heat sensitivity, corrosiveness, fouling and foaming. Falling film suits thin, heat-sensitive and scale-forming solutions; rising film, viscous and fouling ones; forced circulation, viscous liquids with suspended solids, and caustic, brine and corrosive solutions."],
        ["How much steam will an evaporator use?", "A single effect evaporates about 0.8 kg of water per kg of steam; n effects about 0.8n kg. Each effect adds pumps, pipes and valves, so the number of effects is a trade between steam and equipment cost. Thermal or mechanical vapour recompression cuts steam further."],
        ["Which materials do you build chemical equipment in?", "SS 304 and SS 316 as standard. Evaporator calandria shells, thermal vapour recompressors and dryer cyclones are also made in carbon steel."],
        ["Can you build jacketed reactors to a design code?", "Yes. Tanks and reactors are designed to ASME, or to another code on request, with laser-welded dimple, limpet or conventional jackets."],
        ["Which chemicals can your pumps handle?", "Our SS centrifugal pumps are used for acids, alkalis, cellulose and starch solutions, yeast and dyes, from 500 to 1,00,000 LPH."],
      ]}
      brochures={[
        ["Evaporator", "downloads/Evaporator.pdf", "541 KB"],
        ["Forced circulation evaporator", "downloads/Evaporator%20Force%20Circulation.pdf", "161 KB"],
        ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
        ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
        ["Ribbon blender", "downloads/Ribbon%20Blender.pdf", "384 KB"],
        ["Stainless-steel pumps", "downloads/Pumps.pdf", "6.9 MB"],
      ]}
      wa="to discuss chemical process equipment"
    >
      <section className={s.band} aria-labelledby="evaporator">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="evaporator">Which evaporator for your solution</h2>
            <p className={s.note}>
              Five things choose it: the throughput; the viscosity, and how it rises as the solution concentrates; heat sensitivity and
              corrosiveness; fouling; and foaming.<Ref n={1} /> Find the row that describes your solution.
            </p>
          </div>
          <dl className={s.worksheet}>
            <div>
              <dt>Thin, heat-sensitive or scale-forming</dt>
              <dd>
                <span className={s.big}>Falling film</span>
                <span className={s.sub}>
                  The liquid runs down the tubes as a film, so little is held in the evaporator at a time, which suits heat-sensitive
                  liquids; it boils at the film&apos;s surface, which suits scale-forming ones.<Ref n={1} /> Ours: single or multiple effect,
                  multi-pass calandria. <a href="evaporators.html">Evaporators</a>
                </span>
              </dd>
            </div>
            <div>
              <dt>Viscous or fouling</dt>
              <dd>
                <span className={s.big}>Rising film</span>
                <span className={s.sub}>
                  Liquid and vapour climb the tubes together, and the turbulence helps with highly viscous and fouling
                  solutions.<Ref n={1} /> Ours: rising film evaporators.
                </span>
              </dd>
            </div>
            <div>
              <dt>Viscous with solids, or corrosive</dt>
              <dd>
                <span className={s.big}>Forced circulation</span>
                <span className={s.sub}>
                  A pump drives the liquid fast through the tubes, where it&apos;s heated without boiling, and it flashes off in a separator.
                  That copes with viscous liquids and suspended particles, and it&apos;s common for caustic, brine and corrosive solutions. It
                  costs more than natural circulation.<Ref n={1} /> Ours: forced circulation, or falling film and forced circulation
                  combined.
                </span>
              </dd>
            </div>
            <div>
              <dt>To use less steam</dt>
              <dd>
                <span className={s.big}>More effects, or vapour recompression</span>
                <span className={s.sub}>
                  One effect evaporates about 0.8 kg of water per kg of steam; n effects about 0.8n kg, at the cost of pumps, pipes and
                  valves between them.<Ref n={1} /> Ours: multiple effect, with a single or multi-nozzle thermal vapour recompressor, or
                  MVR, as options.
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={s.section} aria-labelledby="materials">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="materials">What to build it in</h2>
            <p className={s.note}>
              Corrosion decides the material, and designers add a corrosion allowance to the wall, typically 1.5 to 5 mm.<Ref n={2} /> Test
              your solution at its working concentration and temperature before you choose.
            </p>
          </div>
          <table className={s.table}>
            <thead>
              <tr><th scope="col">Material</th><th scope="col">What it is</th><th scope="col">Where we use it</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">SS 304</th><td>&ldquo;18/8&rdquo;: about 18% chromium and 8% nickel. 304L, under 0.03% carbon, for thicker welded sections<Ref n={2} /></td><td>Tanks, reactors, evaporators, dryers, pumps</td></tr>
              <tr><th scope="row">SS 316</th><td>16 to 18% chromium, 10 to 14% nickel and 2 to 3% molybdenum, which resists dilute sulfuric acid<Ref n={2} /></td><td>The same equipment, where the duty needs it</td></tr>
              <tr><th scope="row">Carbon steel</th><td>Cheap and widely available, but not generally corrosion-resistant<Ref n={2} /></td><td>Calandria shells, vapour recompressors and dryer cyclones, where the duty allows</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={s.section} aria-labelledby="start">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="start">Where to start</h2>
            <p className={s.note}>From what you need to do to the equipment that fits.</p>
          </div>
          <table className={s.table}>
            <tbody>
              <tr><th scope="row">You concentrate a solution</th><td><a href="evaporators.html">Evaporators</a>: falling film, rising film or forced circulation</td></tr>
              <tr><th scope="row">You need a powder</th><td><a href="spray.html">Spray dryers</a>, 5 to 1,500 kg/hr, with wet scrubbers and bag filters to meet local pollution standards</td></tr>
              <tr><th scope="row">You react or heat a batch</th><td><a href="dimpleJacket.html">Jacketed tanks and reactors</a>, designed to ASME or another code</td></tr>
              <tr><th scope="row">You blend powders</th><td><a href="blenders.html">Ribbon blenders</a> from 50 L, powder to powder or liquid to powder</td></tr>
              <tr><th scope="row">You move acids, alkalis or dyes</th><td><a href="pumps.html">SS centrifugal pumps</a>, 500 to 1,00,000 LPH, also under vacuum</td></tr>
              <tr><th scope="row">You want the plant controlled</th><td><a href="automation.html">PLC, HMI and SCADA</a>, new or retrofitted</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </Industry>
  );
}
