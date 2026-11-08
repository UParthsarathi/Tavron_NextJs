import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Liquid Egg Processing Plant Manufacturer | Tavron Engineers"
      description="Liquid egg lines with tubular pasteurisation from 250 LPH, insulated tanks, CIP, Freon ice bank (1,000 to 20,000 LPD) and spray drying."
      path="LiquidEggProcessing.html"
      image="assets/img/projects/LiquidEggProcessing/TubularPasteuriser.jpg"
      wa="to discuss a liquid egg plant"
    >
      <Doc
        parent="turnkey"
        name="Liquid Egg"
        title="Liquid Egg Processing Plants"
        label="Turnkey plant"
        intro="Liquid egg lines: tubular pasteurisation from 250 LPH, insulated tanks, CIP, ice water for 1,000 to 20,000 LPD, and spray drying. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/LiquidEggProcessing/TubularPasteuriser.jpg" width="600" height="337" alt="Tubular pasteurizer for liquid egg" data-lightbox="assets/img/projects/LiquidEggProcessing/TubularPasteuriser.jpg" />
          </figure>
          <Specs
            items={[
              ["Pasteurisation", "Tubular, from 250 LPH, automatic steam control, PID or PLC, on a skid"],
              ["Tanks", "PUF-insulated, 2,000 L to 10,000 L"],
              ["Ice water", "Freon IBT for 1,000 to 20,000 LPD of egg liquid"],
              ["Drying", "Spray dryer, 5 to 1,500 kg/hr water evaporation"],
              ["Construction", "SS 304 / SS 316"],
            ]}
          />
        </div>
        <Section id="equipment" label="Equipment" title="What goes into the line">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/LiquidEggProcessing/IBT.jpg" width="500" height="361" loading="lazy" alt="Freon ice bank tank with condensing units" data-lightbox="assets/img/projects/LiquidEggProcessing/IBT.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>IBT system</h3>
                <ul className="tv-ticks">
                  <li>R22, R404A or other Freon on request</li>
                  <li>Mild steel or stainless-steel construction</li>
                  <li>Scroll or reciprocating compressor</li>
                  <li>PLC-based controls optional</li>
                </ul>
                <a className="tv-link" href="RefrigerationEquipments.html">
                  {"Refrigeration systems "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/MilkProcessing/milkpro6b.jpg" width="500" height="707" loading="lazy" alt="Insulated vertical stainless-steel process tank with top agitator" data-lightbox="assets/img/projects/MilkProcessing/milkpro6b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Insulated process tanks</h3>
                <ul className="tv-ticks">
                  <li>SS 304 / SS 316, PUF insulated</li>
                  <li>Rotary spray ball for CIP</li>
                  <li>2,000 L, 3,000 L, 5,000 L and 10,000 L</li>
                </ul>
                <a className="tv-link" href="tanks.html">
                  {"Milk silos and storage tanks "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/MilkProcessing/milkpro2b.jpg" width="700" height="394" loading="lazy" alt="Skid-mounted CIP system with tanks and control panel" data-lightbox="assets/img/projects/MilkProcessing/milkpro2b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>CIP system</h3>
                <ul className="tv-ticks">
                  <li>Single or multiple circuits</li>
                  <li>Automatic or semi-automatic</li>
                  <li>PLC with SCADA</li>
                </ul>
                <a className="tv-link" href="cipsystem.html">
                  {"CIP systems "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/MilkProcessing/milkpro5b.jpg" width="700" height="538" loading="lazy" alt="Rendering of a multi-floor spray dryer plant" data-lightbox="assets/img/projects/MilkProcessing/milkpro5b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Spray dryer</h3>
                <ul className="tv-ticks">
                  <li>5 to 1,500 kg/hr water evaporation</li>
                  <li>Rotary atomiser, nozzle or two-fluid</li>
                  <li>Second- and third-stage fluid bed drying</li>
                </ul>
                <a className="tv-link" href="spray.html">
                  {"Spray dryers "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Ask
          title="Planning a plant?"
          text="Send your capacity and product mix. We'll come back with a scheme and a budget."
        />
        <More>
          <div>
            <Links
              title="Brochure"
              items={[
                ["Liquid egg plant", "downloads/Egg%20Liquid.pdf", "769 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Tubular Heat Exchangers", "tubularheat.html"],
                ["Spray Dryers", "spray.html"],
                ["Refrigeration Systems", "RefrigerationEquipments.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
