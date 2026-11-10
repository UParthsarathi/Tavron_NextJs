import { Industry } from "@/components/Industry";
import s from "@/components/Industry.module.css";
import { Ref } from "@/components/Ref";

// What a cosmetics buyer has to get right: how a cream batch runs, the licence under the Cosmetics Rules,
// 2020, and the equipment their Seventh Schedule asks for. The batch steps are from a university
// pharmacy course, our equipment from our brochures and projects. Refs are numbered as in `sources`.

export default function Page() {
  return (
    <Industry
      slug="cosmetics"
      title="Cosmetics Manufacturing: Cream Batch Steps, Licence, Equipment | Tavron Engineers"
      description="How a cream batch runs, step by step, the licence the Cosmetics Rules require (COS-5, COS-7, COS-8) and the mixers, homogenizers, lobe pumps and tanks we build."
      h1="Cosmetics Processing Equipment"
      intro="Mixers, homogenizers, lobe pumps, storage tanks and CIP for creams and lotions. Here's how a cream batch runs, what the Cosmetics Rules ask before you make one, and the equipment each step needs."
      specs={[
        ["Mixers", "Cream mixers with side pots; universal mixer under vacuum"],
        ["Homogenizer", "Liquid homogenizer, down to 2 microns"],
        ["Pumps", "Lobe pumps for high-viscosity products"],
        ["Storage tanks", "2,000 L to 15,000 L"],
        ["Construction", "SS 304 / SS 316"],
      ]}
      sources={[
        ["CDSCO: Cosmetics Rules, 2020, including the Third Schedule (fees) and the Seventh Schedule (premises, plant and equipment)", "https://cdsco.gov.in/opencms/resources/UploadCDSCOWeb/2022/cos_rules/Cosmetics%20Rules%202020.pdf"],
        ["CSJM University, Kanpur: Cold cream and vanishing cream, formulation and procedure (course material)", "https://gyansanchay.csjmu.ac.in/wp-content/uploads/2022/04/Formulation-building-block-for-Creams.pdf"],
      ]}
      faq={[
        ["Which licence do I need to make cosmetics?", "A manufacturing licence from your State Licensing Authority. Apply in Form COS-5 with a self-declaration in Form COS-7 that your premises, plant and equipment meet the Seventh Schedule; the licence is granted in Form COS-8. A new cosmetic first needs permission from the Central Licensing Authority in Form COS-3."],
        ["How long does the licence last?", "It stays valid as long as you pay the retention fee before each five years are up. The fees are set in the Third Schedule of the Cosmetics Rules."],
        ["What equipment do the Rules ask for creams and lotions?", "Mixing and storage tanks of suitable materials, a heating kettle, a suitable agitator, a colloid mill or homogeniser and a triple roller mill where needed, filling and sealing equipment, and weighing and measuring devices, in a section of about 25 square metres."],
        ["Can the line handle thick creams?", "Yes. The homogenizer and lobe pumps handle high-viscosity liquids, and both run on drives with speed control for different products."],
        ["Is the equipment CIP cleanable?", "Yes. The homogenizer and lobe pumps are CIP cleanable, tanks have a rotary spray ball that covers the whole tank, and CIP systems run single or multiple circuits."],
      ]}
      brochures={[
        ["Cosmetic processing line", "downloads/COSMETIC%20PROCESSING%20LINE.pdf", "758 KB"],
        ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
        ["Hygienic stainless-steel process tanks", "downloads/TanksCurves.pdf", "5.0 MB"],
        ["CIP systems", "downloads/CIP%20systems.pdf", "661 KB"],
        ["Automation", "downloads/Automation.pdf", "954 KB"],
      ]}
      wa="to discuss a cosmetics processing line"
    >
      <section className={s.band} aria-labelledby="batch">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="batch">A cream batch, step by step</h2>
            <p className={s.note}>
              A cream is an emulsion: an oil phase and a water phase, heated apart and joined under agitation. The temperatures here are
              from two classic creams, vanishing cream and cold cream;<Ref n={2} /> your formula sets its own.
            </p>
          </div>
          <dl className={s.worksheet}>
            <div>
              <dt>1. Water phase</dt>
              <dd>
                <span className={s.big}>Heat it in a jacketed vessel</span>
                <span className={s.sub}>
                  The water-soluble ingredients in water: 80 °C for vanishing cream, 75 °C for cold cream.<Ref n={2} /> Ours:{" "}
                  <a href="dimpleJacket.html">jacketed mixers</a>, heated by steam and cooled by chilled water.
                </span>
              </dd>
            </div>
            <div>
              <dt>2. Oil phase</dt>
              <dd>
                <span className={s.big}>Melt it in a second vessel</span>
                <span className={s.sub}>
                  Waxes, fatty acids and oils, melted and held at 75 °C.<Ref n={2} /> Ours: side pots on the cream mixer. One cream section we
                  built runs a 1,600 kg mixer with two 800 kg side pots.
                </span>
              </dd>
            </div>
            <div>
              <dt>3. Emulsify</dt>
              <dd>
                <span className={s.big}>Join them under agitation</span>
                <span className={s.sub}>
                  One phase goes into the other with good agitation: in both creams, the water phase into the oil.<Ref n={2} /> A colloid mill
                  or homogeniser where the product needs one.<Ref n={1} /> Ours: a universal mixer under vacuum, and a liquid homogenizer
                  down to 2 microns, with speed control.
                </span>
              </dd>
            </div>
            <div>
              <dt>4. Cool and finish</dt>
              <dd>
                <span className={s.big}>Cool, then add the perfume</span>
                <span className={s.sub}>
                  Cooled with slow mixing; the perfume goes in at about 45 °C for vanishing cream, 35 °C for cold cream.<Ref n={2} /> Ours:
                  chilled water through the mixer&apos;s jacket.
                </span>
              </dd>
            </div>
            <div>
              <dt>5. Transfer and store</dt>
              <dd>
                <span className={s.big}>Lobe pumps and storage tanks</span>
                <span className={s.sub}>
                  Ours: lobe pumps for high-viscosity creams, with speed control; storage tanks of 2,000 to 15,000 L with a rotary spray ball
                  for CIP. Filling and sealing machines we don&apos;t build.
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={s.section} aria-labelledby="licence">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="licence">The licence before your first batch</h2>
            <p className={s.note}>Under the Cosmetics Rules, 2020, manufacturing licences are granted by your state, not by CDSCO.<Ref n={1} /></p>
          </div>
          <table className={s.table}>
            <tbody>
              <tr><th scope="row">Apply</th><td>Form COS-5 to the State Licensing Authority, through the online portal, with the fee the Third Schedule sets</td></tr>
              <tr><th scope="row">Declare GMP</th><td>A self-declaration in Form COS-7 that your premises, plant and equipment meet the Seventh Schedule</td></tr>
              <tr><th scope="row">If the cosmetic is new</th><td>Permission in Form COS-3 from the Central Licensing Authority first</td></tr>
              <tr><th scope="row">Licence</th><td>Form COS-8, within 45 days of the application</td></tr>
              <tr><th scope="row">Validity</th><td>In perpetuity, with a retention fee paid before each five years are up</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={s.section} aria-labelledby="equipment">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="equipment">What the Seventh Schedule asks for creams and lotions</h2>
            <p className={s.note}>
              The equipment it lists for creams, lotions, emulsions, pastes, shampoos and hair oils, in a section of about 25 square
              metres.<Ref n={1} /> Here&apos;s what we supply.
            </p>
          </div>
          <table className={s.table}>
            <thead>
              <tr><th scope="col">The Schedule asks for</th><th scope="col">Ours</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Mixing and storage tanks of suitable materials</th><td>Jacketed mixers, and storage tanks of 2,000 to 15,000 L, in SS 304 / SS 316</td></tr>
              <tr><th scope="row">A heating kettle: steam, gas or electric</th><td>Steam-heated jacketed mixers</td></tr>
              <tr><th scope="row">A suitable agitator</th><td>Agitators driven by geared motors</td></tr>
              <tr><th scope="row">A colloid mill or homogeniser, where needed</th><td>Liquid homogenizer, down to 2 microns</td></tr>
              <tr><th scope="row">A triple roller mill, where needed</th><td>Not ours</td></tr>
              <tr><th scope="row">Filling and sealing equipment</th><td>Not ours</td></tr>
              <tr><th scope="row">Weighing and measuring devices</th><td>Not ours</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </Industry>
  );
}
