import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Milk Powder Plant Manufacturer | Evaporator & Spray Dryer | Tavron Engineers"}
      description="Milk powder plants with multiple effect evaporators, TVR or MVR, spray dryers to 1,500 kg/hr water evaporation, cyclones and vibro fluid beds."
      path="milkpowder.html"
      image="assets/img/projects/milk-powder-processing/milkpowderpro2b.jpg"
      active="menu_milkpowder"
      wa="to discuss a milk powder plant"
    >
      <Doc
        parent="turnkey"
        name="Milk Powder"
        title="Milk Powder Plants"
        label="Turnkey plant"
        intro="Milk powder plants built around Tavron multiple effect evaporators and spray dryers: concentration, drying, powder separation and fluid bed finishing, with instrument control throughout."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/milk-powder-processing/milkpowderpro2b.jpg" width="670" height="447" alt="Evaporator calandria tube sheet" data-lightbox="assets/img/projects/milk-powder-processing/milkpowderpro2b.jpg" />
          </figure>
          <Specs
            items={[
              ["Evaporation", "Multiple effect: falling film, rising film, forced circulation, or combined"],
              ["Vapour recompression", "TVR or MVR optional"],
              ["Spray drying", "5 to 1,500 kg/hr water evaporation"],
              ["Powder separation", "Single or multiple cyclones; wet scrubber and bag filters"],
              ["Construction", "SS 304 / SS 316"],
              ["Control", "Field-mounted control valves hold temperature and pressure"],
            ]}
          />
        </div>
        <Section id="evaporation" label="Evaporation" title="Concentration">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/multi-pass-calindria.jpg" width="253" height="152" loading="lazy" alt="Multi-pass calandria tube sheet" data-lightbox="assets/img/projects/milk-powder-processing/multi-pass-calindria.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Calandria</h3>
                <ul className="tv-ticks">
                  <li>Tubes to A 319 or ASTM A 249</li>
                  <li>Shell in SS 304 / SS 316 / carbon steel</li>
                  <li>Single-pass or multi-pass; multi-pass for the food industry, to avoid contamination</li>
                  <li>Designed for uniform wetting</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/milkpowderpro3b.jpg" width="670" height="440" loading="lazy" alt="Straight-tube pre-heater" data-lightbox="assets/img/projects/milk-powder-processing/milkpowderpro3b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Evaporator accessories</h3>
                <ul className="tv-ticks">
                  <li>Straight-tube pre-heaters heated by calandria vapour</li>
                  <li>Vapour separator designed to avoid carry-over</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/triple-effect-evaporator.jpg" width="207" height="282" loading="lazy" alt="Triple effect evaporator during assembly" data-lightbox="assets/img/projects/milk-powder-processing/triple-effect-evaporator.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Triple effect evaporator</h3>
                <ul className="tv-ticks">
                  <li>Optimum steam consumption</li>
                  <li>TVR or MVR optional</li>
                  <li>SS 304 / SS 316</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/multiple-effect-evaporator.jpg" width="172" height="252" loading="lazy" alt="Evaporator effect" data-lightbox="assets/img/projects/milk-powder-processing/multiple-effect-evaporator.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Multiple effect evaporator</h3>
                <ul className="tv-ticks">
                  <li>Falling film, rising film or forced circulation, or combined</li>
                </ul>
                <a className="tv-link" href="evaporators.html">
                  {"Evaporators "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/thermal-vapour-re-compressor.jpg" width="250" height="166" loading="lazy" alt="Diagram of a thermal vapour recompressor nozzle" data-lightbox="assets/img/projects/milk-powder-processing/thermal-vapour-re-compressor.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Thermal vapour recompressor</h3>
                <ul className="tv-ticks">
                  <li>Single or multiple nozzles</li>
                  <li>SS 304 / SS 316 / carbon steel</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/structural-mounted-evaporator.jpg" width="253" height="170" loading="lazy" alt="Evaporator mounted in a steel structure" data-lightbox="assets/img/projects/milk-powder-processing/structural-mounted-evaporator.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Structure-mounted evaporator</h3>
                <ul className="tv-ticks">
                  <li>For industrial applications</li>
                  <li>Also concentrates RO reject</li>
                  <li>Main evaporator in SS 304 / SS 316</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/instrument-and-control.jpg" width="221" height="170" loading="lazy" alt="Evaporator instruments and control valves" data-lightbox="assets/img/projects/milk-powder-processing/instrument-and-control.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Instruments and controls</h3>
                <ul className="tv-ticks">
                  <li>Instruments signal the field-mounted valves</li>
                  <li>Proportional control valves hold temperature and pressure</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section id="drying" label="Drying" title="Drying and powder handling">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/spray-dryer.jpg" width="214" height="282" loading="lazy" alt="Spray dryer chamber" data-lightbox="assets/img/projects/milk-powder-processing/spray-dryer.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Spray dryer</h3>
                <ul className="tv-ticks">
                  <li>5 to 1,500 kg/hr water evaporation</li>
                  <li>Rotary atomiser, nozzle or two-fluid</li>
                </ul>
                <a className="tv-link" href="spray.html">
                  {"Spray dryers "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/efficient-cyclone-system.jpg" width="251" height="184" loading="lazy" alt="Stainless-steel cyclone" data-lightbox="assets/img/projects/milk-powder-processing/efficient-cyclone-system.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Cyclone system</h3>
                <ul className="tv-ticks">
                  <li>Single or multiple cyclones</li>
                  <li>Wet scrubber and bag filters to meet local pollution standards</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/vibro-fluid-bed.jpg" width="258" height="184" loading="lazy" alt="Vibro fluid bed" data-lightbox="assets/img/projects/milk-powder-processing/vibro-fluid-bed.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Vibro fluid bed</h3>
                <ul className="tv-ticks">
                  <li>SS 304 / SS 316</li>
                  <li>Spring-mounted SS or MS legs</li>
                  <li>Easy to open for product inspection</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/Lab-Model-Spray-Dryer.jpg" width="400" height="451" loading="lazy" alt="Lab model spray dryer" data-lightbox="assets/img/projects/milk-powder-processing/Lab-Model-Spray-Dryer.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Lab model spray dryer</h3>
                <ul className="tv-ticks">
                  <li>2 to 25 kg/hr water evaporation</li>
                  <li>For R&amp;D and education</li>
                  <li>PLC option</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section id="control" label="Control" title="Plant control">
          <div className="tv-doc__top">
            <figure className="tv-doc__fig">
              <img src="assets/img/projects/evaporatorplant.jpg" width="798" height="478" loading="lazy" alt="SCADA screen of an evaporator plant" data-lightbox="assets/img/projects/evaporatorplant.jpg" />
              <figcaption>Evaporator plant SCADA.</figcaption>
            </figure>
            <figure className="tv-doc__fig">
              <img src="assets/img/projects/spraydryerplant.jpg" width="798" height="478" loading="lazy" alt="SCADA screen of a spray dryer plant" data-lightbox="assets/img/projects/spraydryerplant.jpg" />
              <figcaption>Spray dryer plant SCADA.</figcaption>
            </figure>
          </div>
        </Section>
        <Ask
          title="Planning a plant?"
          text="Send your capacity and product mix. We'll come back with a scheme and a budget."
        />
        <More>
          <div>
            <Links
              title="Brochures"
              items={[
                ["Milk powder plant", "downloads/Milk%20Powder%20Plant.pdf", "787 KB"],
                ["Evaporator & spray dryer", "downloads/EvaporatorSprayDryer.pdf", "11.1 MB"],
                ["Evaporated milk plant", "downloads/EvaporatedMilkPlant.pdf", "652 KB"],
                ["Sweetened condensed milk plant", "downloads/SweetenedCondensedMilkPlant.pdf", "599 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Evaporators", "evaporators.html"],
                ["Spray Dryers", "spray.html"],
                ["Whey Processing Solution", "whey.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
