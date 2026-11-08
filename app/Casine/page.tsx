import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Casein Plant Manufacturer | Wet Casein Line, Ring Dryer | Tavron Engineers"
      description="Wet casein lines for 5,000 to 50,000 LPH of skim milk, with inline heating and chemical dosing, decanters, ring dryers and whey filtration."
      path="Casine.html"
      image="assets/img/projects/casein/wet-casein-line.jpg"
      wa="to discuss a casein plant"
    >
      <Doc
        parent="turnkey"
        name="Casein"
        title="Casein Plants"
        label="Turnkey plant"
        intro="Wet casein lines for 5,000 to 50,000 LPH of skim milk, with inline heating and chemical dosing for coagulation, decanters, ring dryers and whey filtration. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/casein/wet-casein-line.jpg" width="600" height="338" alt="Wet casein line with holding tubes and tanks" data-lightbox="assets/img/projects/casein/wet-casein-line.jpg" />
          </figure>
          <Specs
            items={[
              ["Capacity", "5,000 to 50,000 LPH of skim milk"],
              ["Coagulation", "Inline heating and chemical dosing"],
              ["Drying", "Ring dryer from 150 kg/hr water evaporation"],
              ["Construction", "SS 304 / SS 316"],
              ["Cleaning", "CIP"],
            ]}
          />
        </div>
        <Section id="equipment" label="Equipment" title="What goes into the line">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/casein/RingDryer.jpg" width="655" height="489" loading="lazy" alt="Rendering of a ring dryer" data-lightbox="assets/img/projects/casein/RingDryer.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Ring dryer</h3>
                <ul className="tv-ticks">
                  <li>From 150 kg/hr water evaporation</li>
                  <li>Balanced disintegrator for smooth running</li>
                  <li>Manifold for recycling</li>
                  <li>SS 304 / SS 316</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/casein/Decanters.jpg" width="690" height="475" loading="lazy" alt="Decanter centrifuge" data-lightbox="assets/img/projects/casein/Decanters.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Decanters</h3>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/casein/Whey-Filtration-System.jpg" width="750" height="517" loading="lazy" alt="Whey filtration system" data-lightbox="assets/img/projects/casein/Whey-Filtration-System.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Whey filtration</h3>
                <ul className="tv-ticks">
                  <li>Micro, nano, ultra and reverse osmosis</li>
                </ul>
                <a className="tv-link" href="whey.html">
                  {"Whey processing "}
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
                ["Casein & whey plant", "downloads/CASEIN-WHEY-PLANT.pdf", "603 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Whey Processing Solution", "whey.html"],
                ["Cheese Process Solution", "CheeseProcessing.html"],
                ["Spray Dryers", "spray.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
