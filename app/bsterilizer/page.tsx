import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Bottle Sterilizer & Retort Manufacturer in Chennai, India | Tavron Engineers"}
      description="Steam and water spray bottle sterilizers for 600 to 3,000 bottles, for sterilising shelf-stable foods and pasteurising chilled foods in any container."
      path="bsterilizer.html"
      image="assets/img/Sterlizer/BOTTLE-STERILIZER.jpg"
      wa="a quotation for a bottle sterilizer"
    >
      <Doc
        parent="products"
        name="Bottle Sterilizers"
        label="Process equipment"
        intro="Steam and water spray sterilizers for 600 to 3,000 bottles a batch. They sterilise and cool shelf-stable foods, and pasteurise and chill refrigerated foods, in cans, bottles, pouches and trays. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/Sterlizer/BOTTLE-STERILIZER.jpg" width="337" height="289" alt="Horizontal bottle sterilizers with quick-opening doors" data-lightbox="assets/img/Sterlizer/BOTTLE-STERILIZER.jpg" />
          </figure>
          <Specs
            items={[
              ["Capacity", "600, 1,200, 1,800, 2,400 or 3,000 bottles"],
              ["Construction", "SS 304 / SS 316"],
              ["Process", "Steam and water spray, pressurised hot water"],
              ["Models", "Static, oscillating or rotary"],
              ["Containers", "Cans, bowls, pouches and trays of metal, glass, foil, plastic film or paperboard"],
              ["Control", "PLC and HMI; flow-meter control of water recirculation; PID steam control valves"],
              ["Safety", "Designed to pressure vessel and machine safety regulations"],
            ]}
          />
        </div>
        <Section id="how" label="How it works" title="Steam and water spray technology">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <p>Steam and air are mixed with superheated water, which a pump circulates at high speed through spreaders above and on each side of the packages. The sprays create a turbulent, highly convective atmosphere in the chamber.</p>
              <p>When sterilisation is finished, the water recirculates through a heat exchanger, where external cold water brings down the temperature of the retort water and the packages evenly. The cooling water can come from a cooling tower or chiller and can be reclaimed.</p>
              <h3>Highlights</h3>
              <ul className="tv-ticks">
                <li>Direct steam injection with top and side water spray for even heat distribution and repeatable processing</li>
                <li>Retort pressure controlled by air injection and venting, for container integrity</li>
                <li>A small volume of process water, filtered and recirculated, which can stay in the vessel between cycles</li>
                <li>Flow controlled by flow meter, level by level control</li>
              </ul>
            </div>
            <div className="tv-doc__stack">
              <figure className="tv-doc__fig">
                <img src="assets/img/Sterlizer/Highlights.jpg" width="504" height="328" loading="lazy" alt="Diagram of the steam and water spray sterilizer: spray headers, chamber, circulation pump and heat exchanger" data-lightbox="assets/img/Sterlizer/Highlights.jpg" />
              </figure>
              <figure className="tv-doc__fig">
                <img src="assets/img/Sterlizer/Features.jpg" width="424" height="198" loading="lazy" alt="Line drawings of containers: bottles, cans, cups, trays and pouches" data-lightbox="assets/img/Sterlizer/Features.jpg" />
                <figcaption>Suits all kinds of containers.</figcaption>
              </figure>
            </div>
          </div>
        </Section>
        <Section id="detail" label="Detail" title="Construction and control">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/Sterlizer/TECHNOLOGY.jpg" width="256" height="303" loading="lazy" alt="Sterilizer with its door open showing the loading rails" data-lightbox="assets/img/Sterlizer/TECHNOLOGY.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Chamber</h3>
                <ul className="tv-ticks">
                  <li>SS 304 / SS 316</li>
                  <li>Static, oscillating or rotary</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/Sterlizer/HighClassControl.jpg" width="270" height="201" loading="lazy" alt="Operator using the sterilizer touch panel" data-lightbox="assets/img/Sterlizer/HighClassControl.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Control</h3>
                <ul className="tv-ticks">
                  <li>PLC and HMI panel</li>
                  <li>Instruments from top brands</li>
                  <li>High-accuracy safety temperature transmitters</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/Sterlizer/OperationalSafety.jpg" width="261" height="240" loading="lazy" alt="Sterilizer valves and instruments" data-lightbox="assets/img/Sterlizer/OperationalSafety.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Operational safety</h3>
                <ul className="tv-ticks">
                  <li>Designed to pressure vessel and machine safety regulations</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Ask
          title="Tell us about your application"
          text="Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it."
        />
        <More>
          <div>
            <Links
              title="Brochures"
              items={[
                ["Sterilizer", "downloads/Sterlizer.pdf", "463 KB"],
                ["Aseptic processing", "downloads/ASEPTIC-PROCESSING.pdf", "659 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Flavoured Milk Solution", "FlavouredMilkProcessing.html"],
                ["HTST Pasteurizers", "pasteurisers.html"],
                ["Automation Solutions", "automation.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
