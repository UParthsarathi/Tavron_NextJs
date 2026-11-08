import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Whey Processing Plant Manufacturer | Whey Powder, WPC | Tavron Engineers"
      description="Whey lines from membrane filtration (micro, nano, ultra, RO) to collection tanks, falling film evaporation and spray drying."
      path="whey.html"
      image="assets/img/projects/whey/whey-filtration-system.jpeg"
      active="menu_wheypowder"
      wa="to discuss a whey plant"
    >
      <Doc
        parent="turnkey"
        name="Whey"
        title="Whey Processing Plants"
        label="Turnkey plant"
        intro="Whey lines from collection to powder: membrane filtration, insulated collection tanks, falling film evaporation and spray drying. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/whey/whey-filtration-system.jpeg" width="750" height="517" alt="Skid-mounted whey filtration system with membrane housings" data-lightbox="assets/img/projects/whey/whey-filtration-system.jpeg" />
          </figure>
          <Specs
            items={[
              ["Filtration", "Micro, nano, ultra and reverse osmosis"],
              ["Products", "DM whey powder, whey protein concentrate, lactose"],
              ["Collection", "PUF-insulated tanks, 2,000 L to 10,000 L"],
              ["Evaporation", "Falling film"],
              ["Drying", "Spray dryer, 5 to 1,500 kg/hr water evaporation"],
            ]}
          />
        </div>
        <Section id="equipment" label="Equipment" title="What goes into the line">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/MilkProcessing/milkpro6b.jpg" width="500" height="707" loading="lazy" alt="Insulated vertical tank" data-lightbox="assets/img/projects/MilkProcessing/milkpro6b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Whey collection tank</h3>
                <ul className="tv-ticks">
                  <li>SS 304 / SS 316, PUF insulated</li>
                  <li>Spray ball for CIP</li>
                  <li>2,000 L, 3,000 L, 5,000 L and 10,000 L</li>
                </ul>
                <a className="tv-link" href="tanks.html">
                  {"Storage tanks "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/whey/falling-film-evaporator.jpg" width="704" height="355" loading="lazy" alt="Rendering of a falling film evaporator" data-lightbox="assets/img/projects/whey/falling-film-evaporator.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Falling film evaporator</h3>
                <ul className="tv-ticks">
                  <li>Single or multiple effect</li>
                </ul>
                <a className="tv-link" href="evaporators.html">
                  {"Evaporators "}
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
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/pumps/pumps1b.jpg" width="500" height="400" loading="lazy" alt="Stainless-steel centrifugal pumps" data-lightbox="assets/img/pumps/pumps1b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>SS centrifugal pumps</h3>
                <ul className="tv-ticks">
                  <li>500 LPH to 1,00,000 LPH</li>
                  <li>Head up to 60 MWC</li>
                  <li>Open impeller for viscous products</li>
                </ul>
                <a className="tv-link" href="pumps.html">
                  {"SS centrifugal pumps "}
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
              title="Brochures"
              items={[
                ["Whey processing", "downloads/whey%20processing.pdf", "571 KB"],
                ["Casein & whey plant", "downloads/CASEIN-WHEY-PLANT.pdf", "603 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Casein Processing", "Casine.html"],
                ["Cheese Process Solution", "CheeseProcessing.html"],
                ["Evaporators", "evaporators.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
