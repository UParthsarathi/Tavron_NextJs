import { Industry } from "@/components/Industry";
import s from "@/components/Industry.module.css";
import { Ref } from "@/components/Ref";

// What a nutraceutical buyer has to get right: taking the water out of an extract without overheating it,
// and filing the FSSAI licence. The engineering is from NPTEL, the licensing from FSSAI's FoSCoS guidance,
// our equipment from our brochures. Refs are numbered as in `sources`.

export default function Page() {
  return (
    <Industry
      slug="nutraceuticals"
      title="Nutraceutical Processing: Concentrating and Drying Extracts | Tavron Engineers"
      description="How to concentrate and dry heat-sensitive extracts, from falling film evaporation to spray drying, what FSSAI asks when you file a nutraceutical licence, and the equipment we build."
      h1="Nutraceutical Processing Equipment"
      intro="Evaporators, spray dryers from lab to production, blenders, jacketed tanks and CIP for extracts and powders. The hard part is taking the water out without overheating the extract. Here's what keeps the heat down at each step, and what FSSAI asks before you sell."
      specs={[
        ["Spray drying", "5 to 1,500 kg/hr water evaporation"],
        ["Lab and table-top dryers", "2 to 25 kg/hr, for R&D"],
        ["Concentration", "Falling film evaporators; TVR, MVR optional"],
        ["Blending", "Ribbon blenders from 50 L, with load cells"],
        ["Construction", "SS 304 / SS 316"],
      ]}
      sources={[
        ["NPTEL (IITs and IISc): Chemical Engineering Design II, module 3, Design of evaporator", "https://archive.nptel.ac.in/content/storage2/courses/103103027/pdf/mod3.pdf"],
        ["NPTEL (IITs and IISc): Chemical Engineering Design II, module 4, Design of dryers", "https://archive.nptel.ac.in/content/storage2/courses/103103027/pdf/mod4.pdf"],
        ["FSSAI (FoSCoS): guidance document for filing licence applications for health supplements, nutraceuticals and other specialty foods", "https://foscos.fssai.gov.in/assets/docs/Guidance_Document_for_Filing_License_Application_ror_Nutraceutical_Products.pdf"],
      ]}
      faq={[
        ["Why concentrate before spray drying?", "So the dryer has less water to take out. A falling film evaporator holds little liquid at a time, which is why it's used for heat-sensitive materials, and each extra effect evaporates about 0.8 kg more water per kg of steam."],
        ["Won't the hot air in a spray dryer damage my extract?", "Spray and flash dryers work on the same principle: the product is dispersed in the hot air and passes through in seconds, so its temperature doesn't rise much. Turning the heat up isn't the answer for heat-sensitive material: it overheats the surface without drying much faster. Trial your extract on a lab dryer first."],
        ["Do you make small spray dryers for R&D?", "Yes. Lab model spray dryers evaporate 2 to 25 kg/hr of water, electrically heated and fully automatic. Table-top models cover 2 to 25 kg/hr with an American-made nozzle."],
        ["Which licence category is a nutraceutical?", "On FSSAI's FoSCoS portal, health supplements and nutraceuticals are filed under food product category 13.6. Every ingredient must be one the regulations list; FSSAI's Food Product Identity Verification System helps you check."],
        ["Which blender suits nutraceutical powders?", "Ribbon blenders from 50 L for powder-to-powder and liquid-to-powder blending, jacketed or non-jacketed, with load cell and temperature transmitters and PLC control."],
      ]}
      brochures={[
        ["Evaporator & spray dryer", "downloads/EvaporatorSprayDryer.pdf", "11.1 MB"],
        ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
        ["Table-top spray dryer", "downloads/Table%20Top%20Spray%20Dryer.pdf", "675 KB"],
        ["Ribbon blender", "downloads/Ribbon%20Blender.pdf", "384 KB"],
        ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
        ["CIP systems", "downloads/CIP%20systems.pdf", "661 KB"],
      ]}
      wa="to discuss nutraceutical processing equipment"
    >
      <section className={s.band} aria-labelledby="gentle">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="gentle">From extract to powder, without overheating it</h2>
            <p className={s.note}>
              For heat-sensitive materials, more heat at the surface only overheats or over-dries the surface layer, without drying much
              faster.<Ref n={2} /> So the line keeps each step short or cool, rather than hot.
            </p>
          </div>
          <dl className={s.worksheet}>
            <div>
              <dt>1. Concentrate</dt>
              <dd>
                <span className={s.big}>Falling film evaporator</span>
                <span className={s.sub}>
                  The extract runs down the tubes as a film, so little is held at a time: that&apos;s why falling film is used for heat-sensitive
                  materials. Each extra effect evaporates about 0.8 kg more water per kg of steam.<Ref n={1} /> Ours: single or multiple
                  effect, TVR or MVR optional. <a href="evaporators.html">Evaporators</a>
                </span>
              </dd>
            </div>
            <div>
              <dt>2. Dry</dt>
              <dd>
                <span className={s.big}>Spray dryer</span>
                <span className={s.sub}>
                  Spray and flash dryers work on the same principle: the product is dispersed in hot air and passes through in seconds,
                  so the solid&apos;s temperature doesn&apos;t rise much.<Ref n={2} /> Ours: 5 to 1,500 kg/hr water evaporation,
                  rotary atomiser, nozzle or two-fluid. <a href="spray.html">Spray dryers</a>
                </span>
              </dd>
            </div>
            <div>
              <dt>3. Finish</dt>
              <dd>
                <span className={s.big}>Vibro fluid bed</span>
                <span className={s.sub}>Second-stage drying after the spray dryer; for three stages, a stationary fluid bed as well. Ours: SS 304 / SS 316, on spring-loaded legs.</span>
              </dd>
            </div>
            <div>
              <dt>4. Blend</dt>
              <dd>
                <span className={s.big}>Ribbon blender</span>
                <span className={s.sub}>Powder to powder, or liquid into powder, weighed on load cells. Ours: from 50 L, jacketed or not. <a href="blenders.html">Ribbon blenders</a></span>
              </dd>
            </div>
            <div>
              <dt>Before you scale up</dt>
              <dd>
                <span className={s.big}>Trial it on a lab dryer</span>
                <span className={s.sub}>Ours evaporate 2 to 25 kg/hr of water, electrically heated and fully automatic, PLC optional. <a href="spray.html#range">Lab and table-top spray dryers</a></span>
              </dd>
            </div>
            <div>
              <dt>Too sensitive for that</dt>
              <dd>
                <span className={s.big}>Vacuum or freeze drying</span>
                <span className={s.sub}>
                  Tray dryers can run under vacuum, and freeze dryers sublime the ice under high vacuum well below 0 °C; both are slow,
                  hours a batch.<Ref n={2} /> We don&apos;t build these.
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={s.section} aria-labelledby="licence">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="licence">Filing the FSSAI licence</h2>
            <p className={s.note}>What FSSAI&apos;s guidance asks when you apply for a nutraceutical or health supplement on FoSCoS.<Ref n={3} /></p>
          </div>
          <table className={s.table}>
            <tbody>
              <tr><th scope="row">Category</th><td>Health supplements and nutraceuticals go under food product category 13.6</td></tr>
              <tr><th scope="row">Product name</th><td>A common or generic name for health supplements and nutraceuticals</td></tr>
              <tr><th scope="row">Ingredients</th><td>Listed with the regulation each comes under; officers check every one against the regulations&apos; schedules. FSSAI&apos;s <a href="https://fssai.gov.in/fpivs">Food Product Identity Verification System</a> helps you check first</td></tr>
              <tr><th scope="row">Vitamins, minerals, amino acids</th><td>Checked against FSSAI&apos;s recommended dietary allowances</td></tr>
              <tr><th scope="row">If you re-label</th><td>Your third-party manufacturer needs a valid FSSAI licence for the same product</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={s.section} aria-labelledby="start">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="start">Where to start</h2>
            <p className={s.note}>From what you make to the equipment that fits.</p>
          </div>
          <table className={s.table}>
            <tbody>
              <tr><th scope="row">You&apos;re developing a product</th><td><a href="spray.html#range">Lab and table-top spray dryers</a>, 2 to 25 kg/hr</td></tr>
              <tr><th scope="row">You have a liquid extract to turn into powder</th><td>An <a href="evaporators.html">evaporator</a> and a <a href="spray.html">spray dryer</a> as one line</td></tr>
              <tr><th scope="row">You extract or mix in batches</th><td><a href="dimpleJacket.html">Jacketed tanks</a>, SS 304 / SS 316</td></tr>
              <tr><th scope="row">You blend premixes</th><td><a href="blenders.html">Ribbon blenders</a> from 50 L, with load cells</td></tr>
              <tr><th scope="row">You need cleaning between products</th><td><a href="cipsystem.html">CIP</a>, one to four or more tanks</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </Industry>
  );
}
