import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Spray Dryer Manufacturer in Chennai, India | Tavron Engineers"
      description="Spray dryers from 5 to 1,500 kg/hr water evaporation for milk, whey, coffee, fruit and pharmaceutical powders, plus lab and table-top dryers from 2 kg/hr."
      path="spray.html"
      image="assets/img/projects/MilkProcessing/milkpro5b.jpg"
      active="menu_spray"
      wa="to discuss a spray dryer"
    >
      <Doc
        parent="products"
        name="Spray Dryers"
        label="Drying"
        intro="Spray dryers from 5 to 1,500 kg/hr water evaporation that turn liquids and slurries into powder with a consistent particle size and moisture content, plus lab and table-top models from 2 kg/hr. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/MilkProcessing/milkpro5b.jpg" width="700" height="538" alt="Rendering of a multi-floor spray dryer plant with drying chamber and cyclone" data-lightbox="assets/img/projects/MilkProcessing/milkpro5b.jpg" />
          </figure>
          <Specs
            items={[
              ["Capacity", "5 to 1,500 kg/hr water evaporation"],
              ["Atomisation", "Rotary atomiser, nozzle or two-fluid"],
              ["Construction", "SS 304 / SS 316"],
              ["Drying stages", "Second stage on a vibro fluid bed; third stage on a static fluid bed"],
              ["Hot air", "Steam, direct or indirect oil-fired, thermic fluid"],
              ["Closed loop", "On request, for special applications"],
              ["Control", "Fully automatic, PLC and SCADA"],
            ]}
          />
        </div>
        <Section id="why" label="Applications" title="What they dry">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <h3>Applications</h3>
              <ul className="tv-ticks">
                <li>Dairy: milk powder, whey powder</li>
                <li>Coffee and tea powders</li>
                <li>Fruit pulps, juices and pastes</li>
                <li>Pharmaceutical products such as algae powder and penicillin</li>
              </ul>
            </div>
            <div className="tv-doc__prose">
              <h3>Advantages</h3>
              <ul className="tv-ticks">
                <li>Constant powder quality throughout production</li>
                <li>Suits heat-resistant and heat-sensitive products</li>
                <li>Sized to your requirement</li>
                <li>Product density and moisture content can be controlled</li>
                <li>Handles varying feed rates</li>
              </ul>
            </div>
          </div>
        </Section>
        <Section id="range" label="Range" title="Dryers and powder handling">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/spray/efficient-cyclone-system.jpg" width="251" height="184" loading="lazy" alt="Stainless-steel cyclone and ducting" data-lightbox="assets/img/spray/efficient-cyclone-system.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Cyclone system</h3>
                <ul className="tv-ticks">
                  <li>Single or multiple cyclones</li>
                  <li>Separates the conveying air from the product</li>
                  <li>SS 304 / SS 316 / carbon steel</li>
                  <li>Wet scrubber and bag filters to meet local pollution standards</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/spray/vibro-fluied-bed.jpg" width="258" height="184" loading="lazy" alt="Vibro fluid bed below a spray dryer" data-lightbox="assets/img/spray/vibro-fluied-bed.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Vibro fluid bed</h3>
                <ul className="tv-ticks">
                  <li>SS 304 / SS 316</li>
                  <li>Conidur-type perforated bed sheet</li>
                  <li>Spring-mounted SS or MS legs</li>
                  <li>Easy to open for product inspection</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/spray/lab-model-spray-dryer.jpg" width="500" height="563" loading="lazy" alt="Lab model spray dryer with chamber and cyclone" data-lightbox="assets/img/spray/lab-model-spray-dryer.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Lab model spray dryer</h3>
                <ul className="tv-ticks">
                  <li>2 to 25 kg/hr water evaporation</li>
                  <li>For R&amp;D and education</li>
                  <li>Electric heater; other heating optional</li>
                  <li>Fully automatic, PLC option</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/milk-powder-processing/table_top_spray_dryer.jpg" width="206" height="276" loading="lazy" alt="Table-top spray dryer" data-lightbox="assets/img/projects/milk-powder-processing/table_top_spray_dryer.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Table-top spray dryer</h3>
                <ul className="tv-ticks">
                  <li>2 to 25 kg/hr</li>
                  <li>SS 304 / SS 316</li>
                  <li>American-made nozzle</li>
                  <li>PLC option</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Ask
          photo={<img src="assets/img/spray/spray-dryer.jpg" width="214" height="282" loading="lazy" alt="Spray dryer chamber" />}
          title="Tell us about your application"
          text="Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it."
        />
        <More>
          <div>
            <Links
              title="Brochures"
              items={[
                ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
                ["Table-top spray dryer", "downloads/Table%20Top%20Spray%20Dryer.pdf", "675 KB"],
                ["Evaporator & spray dryer", "downloads/EvaporatorSprayDryer.pdf", "11.1 MB"],
                ["Coffee & tea extract evaporator and spray dryer", "downloads/Cofee%20Tea%20Extract%20Evaporator%20and%20Spray%20Dryer.pdf", "672 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Evaporators", "evaporators.html"],
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
