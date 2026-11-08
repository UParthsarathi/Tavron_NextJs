import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Curd & Yogurt Plant Manufacturer | Turnkey Dairy Plants | Tavron Engineers"}
      description="Curd and yogurt plants with HTST pasteurizers, insulated process tanks, plate heat exchangers, sanitary pumps and CIP, from Tavron Engineers, Chennai."
      path="CurdYogurtProcessing.html"
      image="assets/img/projects/MilkProcessing/milkpro7b.jpg"
      active="menu_curdandyogurt"
      wa="to discuss a curd and yogurt plant"
    >
      <Doc
        parent="turnkey"
        name="Curd &amp; Yogurt"
        title="Curd &amp; Yogurt Processing Plants"
        label="Turnkey plant"
        intro="Curd and yogurt plants built from Tavron dairy equipment: HTST pasteurizers, insulated process tanks, plate heat exchangers, sanitary pumps and CIP. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/MilkProcessing/milkpro7b.jpg" width="700" height="525" alt="Skid-mounted HTST milk pasteurizer with plate heat exchanger" data-lightbox="assets/img/projects/MilkProcessing/milkpro7b.jpg" />
          </figure>
          <Specs
            items={[
              ["Pasteurisation", "HTST, 50 LPH to 30,000 LPH"],
              ["Process tanks", "2,000 L to 10,000 L, PUF insulated, SS 304 / SS 316"],
              ["Tank fittings", "Spray ball for CIP, geared agitator, temperature transmitter, hygienic valves; level transmitter optional"],
              ["Pumps", "500 LPH to 1,00,000 LPH"],
              ["Cleaning", "CIP, single or multiple circuits, PLC with SCADA"],
            ]}
          />
        </div>
        <Section id="equipment" label="Equipment" title="What goes into the line">
          <div className="tv-items">
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
                <img src="assets/img/projects/MilkProcessing/milkpro1b.jpg" width="700" height="791" loading="lazy" alt="Plate heat exchanger on a stainless-steel frame" data-lightbox="assets/img/projects/MilkProcessing/milkpro1b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Plate heat exchanger</h3>
                <ul className="tv-ticks">
                  <li>SS 304 / SS 316 plates</li>
                  <li>Glue-free NBR / EPDM gaskets</li>
                  <li>CIP cleanable</li>
                </ul>
                <a className="tv-link" href="plateheat.html">
                  {"Plate heat exchangers "}
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
                ["Curd plant", "downloads/Curd.pdf", "973 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["HTST Pasteurizers", "pasteurisers.html"],
                ["Liquid Milk Process Solution", "milkprocessing.html"],
                ["Flavoured Milk Solution", "FlavouredMilkProcessing.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
