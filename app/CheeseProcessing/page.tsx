import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Cheese Plant Manufacturer | Cheese Vat, Mozzarella Line | Tavron Engineers"
      description="Processed cheese and mozzarella lines: HTST pasteurisation, cheese vats, vacuum cheese cookers, presses, cold store and whey processing."
      path="CheeseProcessing.html"
      image="assets/img/projects/cheese-processing/Cheese-VAT.jpg"
      active="menu_cheese"
      wa="to discuss a cheese plant"
    >
      <Doc
        parent="turnkey"
        name="Cheese"
        title="Cheese Processing Plants"
        label="Turnkey plant"
        intro="Processed cheese and mozzarella lines: pasteurisation, cheese vats, cheese cookers working under vacuum, presses and cold storage, with whey collection and processing. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/cheese-processing/Cheese-VAT.jpg" width="500" height="553" alt="Open cheese vat with cutting frame" data-lightbox="assets/img/projects/cheese-processing/Cheese-VAT.jpg" />
          </figure>
          <Specs
            items={[
              ["Lines", "Processed cheese, mozzarella"],
              ["Cheese vat", "Hygienic design with cutting system and reduction gearbox"],
              ["Cheese cooker", "Works under vacuum"],
              ["Instruments", "Reputed-make sensors and control valves; PLC optional"],
              ["Whey", "DM whey powder, whey protein concentrate and lactose lines"],
              ["Construction", "SS 304 / SS 316"],
            ]}
          />
        </div>
        <Section id="equipment" label="Equipment" title="Cheese equipment">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/cheese-processing/Cheese-Cooker.jpg" width="483" height="517" loading="lazy" alt="Cheese cooker with control panel" data-lightbox="assets/img/projects/cheese-processing/Cheese-Cooker.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Cheese cooker</h3>
                <ul className="tv-ticks">
                  <li>Works under vacuum</li>
                  <li>Reputed-make gearbox and motor</li>
                  <li>PLC optional</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/cheese-processing/chees-press.jpg" width="500" height="327" loading="lazy" alt="Multi-station pneumatic press" data-lightbox="assets/img/projects/cheese-processing/chees-press.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Press</h3>
                <ul className="tv-ticks">
                  <li>Pneumatic, single or multi-cylinder</li>
                  <li>Adjustable stroke length</li>
                  <li>SS 304 / SS 316</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/cheese-processing/Cold-Store-Room.jpg" width="657" height="491" loading="lazy" alt="Cold store room with insulated panels" data-lightbox="assets/img/projects/cheese-processing/Cold-Store-Room.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Cold store</h3>
                <ul className="tv-ticks">
                  <li>Stores product below the outside temperature</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/cheese-processing/WheyProcessingLine.jpg" width="500" height="345" loading="lazy" alt="Whey processing line with membrane modules" data-lightbox="assets/img/projects/cheese-processing/WheyProcessingLine.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Whey processing line</h3>
                <ul className="tv-ticks">
                  <li>DM whey powder</li>
                  <li>Whey protein concentrate</li>
                  <li>Lactose</li>
                </ul>
                <a className="tv-link" href="whey.html">
                  {"Whey processing "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/cheese-processing/WheyCollectionTank.jpg" width="420" height="594" loading="lazy" alt="Insulated whey collection tank" data-lightbox="assets/img/projects/cheese-processing/WheyCollectionTank.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Whey collection tank</h3>
                <ul className="tv-ticks">
                  <li>PUF insulated, with spray ball for CIP</li>
                  <li>2,000 L, 3,000 L, 5,000 L and 10,000 L</li>
                </ul>
                <a className="tv-link" href="tanks.html">
                  {"Storage tanks "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section id="shared" label="Shared equipment" title="Also in the line">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/MilkProcessing/milkpro7b.jpg" width="700" height="525" loading="lazy" alt="Skid-mounted HTST milk pasteurizer with plate heat exchanger" data-lightbox="assets/img/projects/MilkProcessing/milkpro7b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>HTST pasteurizer</h3>
                <ul className="tv-ticks">
                  <li>50 LPH to 30,000 LPH</li>
                  <li>Manual or automatic</li>
                  <li>Skid-mounted or floor-mounted</li>
                </ul>
                <a className="tv-link" href="pasteurisers.html">
                  {"HTST pasteurizers "}
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
                ["Cheese plant", "downloads/Cheese%20Plant.pdf", "1.1 MB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Whey Processing Solution", "whey.html"],
                ["Paneer Process Solution", "PaneerProcessing.html"],
                ["HTST Pasteurizers", "pasteurisers.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
