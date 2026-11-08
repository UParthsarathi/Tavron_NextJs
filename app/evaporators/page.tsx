import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Falling Film & Multiple Effect Evaporator Manufacturer | Tavron Engineers"}
      description="Falling film, rising film and forced circulation evaporators, single or multiple effect, with TVR, designed, built, erected and commissioned by Tavron."
      path="evaporators.html"
      image="assets/img/evp/forced-circulation-evaporator.jpg"
      active="menu_evaporators"
      wa="to discuss an evaporator"
    >
      <Doc
        parent="products"
        name="Evaporators"
        label="Separation &amp; concentration"
        intro="Falling film, rising film and forced circulation evaporators, single or multiple effect, designed, manufactured, erected and commissioned by Tavron Engineers to suit the product."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/evp/forced-circulation-evaporator.jpg" width="600" height="676" alt="Rendering of a forced circulation evaporator on a multi-level structure" data-lightbox="assets/img/evp/forced-circulation-evaporator.jpg" />
          </figure>
          <Specs
            items={[
              ["Types", "Falling film, rising film, forced circulation, or falling film and forced circulation combined"],
              ["Effects", "Single or multiple"],
              ["Construction", "SS 304 / SS 316"],
              ["Calandria tubes", "A 319 or ASTM A 249"],
              ["Calandria shell", "SS 304 / SS 316 / carbon steel"],
              ["Vapour recompression", "TVR with single or multiple nozzles; MVR optional"],
            ]}
          />
        </div>
        <Section id="why" label="Why evaporate" title="What evaporation does">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <h3>Benefits</h3>
              <ul className="tv-ticks">
                <li>Removes water from the solution</li>
                <li>Gives microbial stability</li>
                <li>Reduces chemical reactions</li>
                <li>Cuts transport and storage cost</li>
              </ul>
            </div>
            <div className="tv-doc__prose">
              <h3>What the design has to handle</h3>
              <ul className="tv-ticks">
                <li>Concentration of the solution</li>
                <li>Foaming</li>
                <li>Scale formation</li>
                <li>Temperature sensitivity</li>
                <li>Material of construction</li>
              </ul>
            </div>
          </div>
        </Section>
        <Section id="range" label="Range" title="Evaporator types and components">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/evp/MULTIPLE-EFFECT-EVAPORATORS.jpg" width="172" height="252" loading="lazy" alt="Stainless-steel evaporator effects" data-lightbox="assets/img/evp/MULTIPLE-EFFECT-EVAPORATORS.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Single and multiple effect</h3>
                <p>In a single effect, vapour from the boiling liquid is condensed and discarded: simple, but it uses steam less effectively. A multiple effect runs a series of evaporators between the steam supply and the condenser, so each kg of steam evaporates more.</p>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/evp/calendria.jpg" width="249" height="172" loading="lazy" alt="Calandria tube sheet" data-lightbox="assets/img/evp/calendria.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Calandria</h3>
                <ul className="tv-ticks">
                  <li>Single-pass or multi-pass</li>
                  <li>Multi-pass for the food industry, to avoid contamination</li>
                  <li>Designed for uniform wetting</li>
                  <li>Finished to hygienic standard</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/evp/evaporator-accessories.jpg" width="239" height="162" loading="lazy" alt="Straight-tube pre-heater" data-lightbox="assets/img/evp/evaporator-accessories.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Pre-heaters and vapour separator</h3>
                <ul className="tv-ticks">
                  <li>Straight-tube pre-heaters</li>
                  <li>Heated by calandria vapour to warm the incoming product</li>
                  <li>Vapour separator designed to avoid carry-over</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/evp/thermal-vapour-compressor.jpg" width="250" height="166" loading="lazy" alt="Diagram of a thermal vapour recompressor nozzle" data-lightbox="assets/img/evp/thermal-vapour-compressor.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Thermal vapour recompressor</h3>
                <ul className="tv-ticks">
                  <li>Single or multiple nozzles</li>
                  <li>SS 304 / SS 316 / carbon steel</li>
                  <li>Suction and discharge connections to suit the operating conditions</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/evp/Evaporator-Plant.jpg" width="700" height="394" loading="lazy" alt="SCADA screen of an evaporator plant" data-lightbox="assets/img/evp/Evaporator-Plant.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Evaporator automation</h3>
                <ul className="tv-ticks">
                  <li>PLC and SCADA control</li>
                </ul>
                <a className="tv-link" href="automation.html">
                  {"Automation solutions "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Ask
          photo={<img src="assets/img/evp/Advantages-of-Evaporation.jpg" width="600" height="338" loading="lazy" alt="Rendering of an evaporator plant on a steel structure" />}
          title="Tell us about your application"
          text="Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it."
        />
        <More>
          <div>
            <Links
              title="Brochures"
              items={[
                ["Evaporator", "downloads/Evaporator.pdf", "541 KB"],
                ["Forced circulation evaporator", "downloads/Evaporator%20Force%20Circulation.pdf", "161 KB"],
                ["Fruit pulp forced circulation evaporator", "downloads/Fruits%20pulp%20forced%20circulation%20evaporator.pdf", "203 KB"],
                ["Evaporator & spray dryer", "downloads/EvaporatorSprayDryer.pdf", "11.1 MB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Spray Dryers", "spray.html"],
                ["Milk Powder Solution", "milkpowder.html"],
                ["Whey Processing Solution", "whey.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
