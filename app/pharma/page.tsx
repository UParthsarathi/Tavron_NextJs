import { Industry } from "@/components/Industry";
import s from "@/components/Industry.module.css";
import { Ref } from "@/components/Ref";

// What a pharma buyer has to meet: Schedule M as revised by G.S.R. 922(E), its equipment clauses and the
// qualification it requires. No deadlines or dates in the copy, so it stays evergreen. Clause numbers are the Schedule's. Our equipment is from
// our brochures. Refs are numbered as in `sources`.

export default function Page() {
  return (
    <Industry
      slug="pharma"
      title="Pharmaceutical Process Equipment for Schedule M | Tavron Engineers"
      description="What Schedule M asks of process equipment, the DQ, IQ, OQ and PQ it requires, and the tanks, spray dryers, pumps, CIP and automation we build in Chennai."
      h1="Pharmaceutical Process Equipment"
      intro="Jacketed process tanks and reactors, spray dryers from lab to production, sanitary pumps, CIP and automation. Every drug maker in India has to meet Schedule M's rules for equipment. Here's what it asks, clause by clause, and how we build to it."
      specs={[
        ["Process tanks", "SS 304 / SS 316; dimple, limpet or conventional jacket"],
        ["Design code", "ASME, or another code on request"],
        ["Drying", "Spray dryers, 5 to 1,500 kg/hr; lab models from 2 kg/hr; closed loop on request"],
        ["Cleaning", "CIP with flow and conductivity measurement"],
        ["Control", "PLC, HMI and SCADA: Siemens, Allen-Bradley, Delta"],
      ]}
      sources={[
        ["Gazette of India, G.S.R. 922(E), 28 December 2023: Drugs (Amendment) Rules, 2023, revised Schedule M", "https://thehealthmaster.com/wp-content/uploads/2024/01/GSR-922-dt-28-12-2023-Schedule-M-Drug-Amendment-Rules-2023.pdf"],
      ]}
      faq={[
        ["Does Schedule M apply to my plant?", "Yes, if you make drugs in India. Schedule M of the Drugs Rules sets good manufacturing practice and the requirements for premises, plant and equipment for every drug manufacturer, large or small."],
        ["What does Schedule M say about product-contact surfaces?", "Parts of production equipment that touch the product must not be reactive, additive or absorptive to an extent that would affect the product's quality (clause 13.9)."],
        ["Do you make spray dryers for pharmaceutical products?", "Yes. Our spray dryers dry pharmaceutical products such as algae powder and penicillin, from 5 to 1,500 kg/hr water evaporation, with lab models from 2 kg/hr and closed-loop designs on request."],
        ["What documentation comes with the automation?", "A full control drawing package in AutoCAD, delivered as DWG, PDF and paper, with PLC, HMI and SCADA programs written to your requirement. Schedule M asks you to keep current drawings of critical equipment (clause 13.13)."],
        ["Which pumps suit pharmaceutical formulations?", "Sanitary SS 304 / SS 316 centrifugal pumps from 500 to 1,00,000 LPH, with an open impeller for viscous products, a mechanical shaft seal and SMS / DIN fittings."],
      ]}
      brochures={[
        ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
        ["Table-top spray dryer", "downloads/Table%20Top%20Spray%20Dryer.pdf", "675 KB"],
        ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
        ["Hygienic stainless-steel process tanks", "downloads/TanksCurves.pdf", "5.0 MB"],
        ["SS centrifugal pump", "downloads/SS%20Centrifugal%20Pump.pdf", "4.0 MB"],
        ["CIP systems", "downloads/CIP%20systems.pdf", "661 KB"],
        ["Automation", "downloads/Automation.pdf", "954 KB"],
      ]}
      wa="to discuss pharmaceutical process equipment"
    >
      <section className={s.band} aria-labelledby="schedule-m">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="schedule-m">What Schedule M asks of your equipment</h2>
            <p className={s.note}>
              Section 13 of Schedule M sets the rules for equipment.<Ref n={1} /> Here are the clauses that shape what you buy,
              and how we build to each.
            </p>
          </div>
          <dl className={s.worksheet}>
            <div>
              <dt>13.1 Design</dt>
              <dd>
                <span className={s.big}>Built for the job, and for cleaning</span>
                <span className={s.sub}>
                  Equipment must suit the operation, and its layout and design must allow effective cleaning and maintenance, to avoid
                  cross-contamination and build-up of dust or dirt.<Ref n={1} /> Ours: <a href="dimpleJacket.html">jacketed tanks and
                  reactors</a> designed to ASME or another code.
                </span>
              </dd>
            </div>
            <div>
              <dt>13.9 Product contact</dt>
              <dd>
                <span className={s.big}>Not reactive, additive or absorptive</span>
                <span className={s.sub}>
                  Parts that touch the product must not react with it, add to it or absorb from it enough to affect its
                  quality.<Ref n={1} /> Ours: SS 304 or SS 316, chosen for the product.
                </span>
              </dd>
            </div>
            <div>
              <dt>13.6, 13.12 Cleaning</dt>
              <dd>
                <span className={s.big}>On a schedule, by a validated procedure</span>
                <span className={s.sub}>
                  Production equipment must be cleaned on a fixed schedule, and equipment shared between products by validated cleaning
                  procedures.<Ref n={1} /> Ours: <a href="cipsystem.html">CIP</a> with flow and conductivity measurement, on PLC with an
                  HMI; SCADA optional.
                </span>
              </dd>
            </div>
            <div>
              <dt>13.11 Closed equipment</dt>
              <dd>
                <span className={s.big}>Closed wherever appropriate</span>
                <span className={s.sub}>
                  Use closed equipment wherever appropriate; where it&apos;s open, take precautions against contamination.<Ref n={1} /> Ours:
                  closed-loop <a href="spray.html">spray dryers</a> on request.
                </span>
              </dd>
            </div>
            <div>
              <dt>13.5 Measuring</dt>
              <dd>
                <span className={s.big}>Instruments calibrated on a schedule</span>
                <span className={s.sub}>
                  Balances and other measuring equipment must suit the range and precision needed, and be calibrated on a fixed
                  schedule.<Ref n={1} /> Plan the instruments, and how you&apos;ll calibrate them, with the equipment.
                </span>
              </dd>
            </div>
            <div>
              <dt>13.13 Drawings</dt>
              <dd>
                <span className={s.big}>Current drawings of critical equipment</span>
                <span className={s.sub}>
                  Current drawings of critical equipment and support systems must be kept.<Ref n={1} /> Ours: a full control drawing package
                  in AutoCAD, as DWG, PDF and paper. <a href="automation.html">Automation</a>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={s.section} aria-labelledby="qualification">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="qualification">Qualifying the equipment</h2>
            <p className={s.note}>
              Schedule M asks for documentary evidence at four stages, planned in a validation master plan, and reviewed periodically
              after that.<Ref n={1} /> Agree with your supplier early which documents each stage needs.
            </p>
          </div>
          <table className={s.table}>
            <thead>
              <tr><th scope="col">Stage</th><th scope="col">What it proves</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Design qualification (DQ)</th><td>Premises, utilities, equipment and processes are designed to GMP</td></tr>
              <tr><th scope="row">Installation qualification (IQ)</th><td>They are built and installed to their design specifications</td></tr>
              <tr><th scope="row">Operational qualification (OQ)</th><td>They operate to their design specifications</td></tr>
              <tr><th scope="row">Performance qualification (PQ), or process validation</th><td>The process consistently makes product that meets its specifications</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={s.section} aria-labelledby="start">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="start">Where to start</h2>
            <p className={s.note}>From the step you&apos;re building or upgrading to the equipment that fits.</p>
          </div>
          <table className={s.table}>
            <tbody>
              <tr><th scope="row">You process liquids in batches</th><td><a href="dimpleJacket.html">Jacketed tanks and reactors</a>, SS 304 / SS 316, designed to ASME</td></tr>
              <tr><th scope="row">You dry to a powder</th><td><a href="spray.html">Spray dryers</a>, 5 to 1,500 kg/hr; closed loop on request</td></tr>
              <tr><th scope="row">You&apos;re developing a product</th><td><a href="spray.html#range">Lab and table-top spray dryers</a>, 2 to 25 kg/hr</td></tr>
              <tr><th scope="row">You move formulations</th><td><a href="pumps.html">Sanitary pumps</a> with mechanical seals and SMS / DIN fittings</td></tr>
              <tr><th scope="row">Your cleaning needs to be repeatable</th><td><a href="cipsystem.html">CIP</a> with flow and conductivity measurement</td></tr>
              <tr><th scope="row">You need records and control</th><td><a href="automation.html">PLC, HMI and SCADA</a>, with a full drawing package</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </Industry>
  );
}
