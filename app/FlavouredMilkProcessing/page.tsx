import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Flavoured Milk Plant Manufacturer | Retort & Aseptic | Tavron Engineers"}
      description="Flavoured milk plants from 500 L a day, batch or HTST, with retort sterilisation for glass or PET bottles or aseptic long shelf-life packing."
      path="FlavouredMilkProcessing.html"
      image="assets/img/projects/FlavouredMilkPro/flamilkpro5b.jpg"
      active="menu_flavouredmilk"
      wa="to discuss a flavoured milk plant"
    >
      <Doc
        parent="turnkey"
        name="Flavoured Milk"
        title="Flavoured Milk Plants"
        label="Turnkey plant"
        intro="Flavoured milk plants from 500 litres a day to the capacity you need, batch or HTST, with retort sterilisation for glass or PET bottles or aseptic processing for long shelf-life packs. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/FlavouredMilkPro/flamilkpro5b.jpg" width="700" height="525" alt="HTST pasteurizer skid in a flavoured milk plant" data-lightbox="assets/img/projects/FlavouredMilkPro/flamilkpro5b.jpg" />
          </figure>
          <Specs
            items={[
              ["Capacity", "From 500 L a day to the customer's requirement"],
              ["Process", "Batch or HTST"],
              ["Packing", "Retort for glass or PET bottles; aseptic processing for long shelf life"],
              ["Construction", "SS 304 / SS 316, hygienic design"],
              ["Cleaning", "CIP"],
              ["Automation", "PLC optional"],
            ]}
          />
        </div>
        <Section id="equipment" label="Equipment" title="What goes into the line">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/FlavouredMilkPro/Multi%20Purpose%20Vat.jpg" width="367" height="680" loading="lazy" alt="Multi-purpose vat" data-lightbox="assets/img/projects/FlavouredMilkPro/Multi%20Purpose%20Vat.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Multi-purpose vat</h3>
                <ul className="tv-ticks">
                  <li>LPG or diesel fired</li>
                  <li>From 60 L</li>
                  <li>Khova, ghee, basundi, milk sweets, milk and food heating</li>
                </ul>
                <a className="tv-link" href="KhovaProcessing.html">
                  {"Khova pans "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/FlavouredMilkPro/flamilkpro3b.jpg" width="700" height="773" loading="lazy" alt="Plate heat exchanger" data-lightbox="assets/img/projects/FlavouredMilkPro/flamilkpro3b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Plate heat exchanger</h3>
                <ul className="tv-ticks">
                  <li>SS 304 / SS 316 plates</li>
                  <li>Glue-free NBR / EPDM gaskets</li>
                </ul>
                <a className="tv-link" href="plateheat.html">
                  {"Plate heat exchangers "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/FlavouredMilkPro/sterlizer.png" width="301" height="327" loading="lazy" alt="Bottle sterilizer" data-lightbox="assets/img/projects/FlavouredMilkPro/sterlizer.png" />
              </figure>
              <div className="tv-item__body">
                <h3>Bottle sterilizer</h3>
                <ul className="tv-ticks">
                  <li>600 to 3,000 bottles</li>
                  <li>Pressurised hot water</li>
                  <li>PLC control</li>
                </ul>
                <a className="tv-link" href="bsterilizer.html">
                  {"Bottle sterilizers "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/FlavouredMilkPro/Delta%20HMI%20Screen.jpg" width="368" height="406" loading="lazy" alt="Delta HMI screen of a sterilizer" data-lightbox="assets/img/projects/FlavouredMilkPro/Delta%20HMI%20Screen.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Control</h3>
                <ul className="tv-ticks">
                  <li>PLC and HMI panel</li>
                  <li>Water recirculation controlled by flow meter</li>
                  <li>PID steam control valves</li>
                </ul>
                <a className="tv-link" href="automation.html">
                  {"Automation solutions "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/FlavouredMilkPro/flamilkpro2b.jpg" width="700" height="394" loading="lazy" alt="CIP system" data-lightbox="assets/img/projects/FlavouredMilkPro/flamilkpro2b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>CIP system</h3>
                <ul className="tv-ticks">
                  <li>Single or multiple circuits</li>
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
                ["Flavoured milk plant", "downloads/Flavour%20Milk%20Plant.pdf", "572 KB"],
                ["Sterilizer", "downloads/Sterlizer.pdf", "463 KB"],
                ["Beverage equipment", "downloads/Beverage%20Eqipments.pdf", "1.2 MB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Bottle Sterilizers", "bsterilizer.html"],
                ["Liquid Milk Process Solution", "milkprocessing.html"],
                ["Khova Pans", "KhovaProcessing.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
