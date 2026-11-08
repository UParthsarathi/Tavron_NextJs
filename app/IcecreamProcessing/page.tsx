import { Ask, Doc, Links, More, Section } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Ice Cream Plant Manufacturer | Mix Plant, Continuous Freezer | Tavron Engineers"
      description="Ice cream plants: mix preparation to 5,000 LPH, homogenisers, HTST, ageing tanks, continuous freezers, filling and cold stores to −25 °C, batch or automatic."
      path="IcecreamProcessing.html"
      image="assets/img/projects/IceCreamProcessing/Homoginizer.jpg"
      active="menu_icecream"
      wa="to discuss an ice cream plant"
    >
      <Doc
        parent="turnkey"
        name="Ice Cream"
        title="Ice Cream Processing Plants"
        label="Turnkey plant"
        intro="Ice cream plants from mix preparation to cold store: mix preparation, homogenisers, pasteurizers, ageing tanks, continuous freezers and filling, batch or fully automatic. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/IceCreamProcessing/Homoginizer.jpg" width="500" height="500" alt="Homogeniser with pressure gauge and stainless-steel cabinet" data-lightbox="assets/img/projects/IceCreamProcessing/Homoginizer.jpg" />
          </figure>
          <div className="tv-doc__stack">
            <div className="tv-tablewrap">
              <table className="tv-table">
                <thead>
                  <tr>
                    <th scope="col">Equipment</th>
                    <th scope="col">Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Mix preparation</th>
                    <td>150 to 5,000 LPH</td>
                  </tr>
                  <tr>
                    <th scope="row">Homogeniser</th>
                    <td>100 to 5,000 LPH</td>
                  </tr>
                  <tr>
                    <th scope="row">Plate heat exchanger</th>
                    <td>150 to 1,00,000 LPH</td>
                  </tr>
                  <tr>
                    <th scope="row">HTST pasteurizer</th>
                    <td>150 to 20,000 LPH</td>
                  </tr>
                  <tr>
                    <th scope="row">Ageing tanks</th>
                    <td>150 L to 30,000 L</td>
                  </tr>
                  <tr>
                    <th scope="row">Continuous freezer</th>
                    <td>100, 200, 400 or 600 LPH</td>
                  </tr>
                  <tr>
                    <th scope="row">CIP</th>
                    <td>5,000 to 30,000 LPH per circuit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Section id="equipment" label="Equipment" title="What goes into the line">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/IceCreamProcessing/MixPreparationSection.jpg" width="246" height="242" loading="lazy" alt="Mix preparation section" data-lightbox="assets/img/projects/IceCreamProcessing/MixPreparationSection.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Mix preparation</h3>
                <ul className="tv-ticks">
                  <li>Automatic or semi-automatic</li>
                  <li>Energy-efficient, cleaned by automatic CIP</li>
                  <li>Agitator with reputed-make motor and gearbox</li>
                  <li>PLC and SCADA</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/IceCreamProcessing/AgingTank.jpg" width="230" height="269" loading="lazy" alt="Ice cream ageing tanks" data-lightbox="assets/img/projects/IceCreamProcessing/AgingTank.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Ageing tanks</h3>
                <ul className="tv-ticks">
                  <li>Laser-welded dimple jacket for ice water or refrigerant</li>
                  <li>Hygienic agitator, reputed-make gearbox and motor</li>
                  <li>CIP cleanable; ball feet for complete drainage</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/IceCreamProcessing/PlateHeatExchanger.jpg" width="225" height="222" loading="lazy" alt="Plate heat exchanger" data-lightbox="assets/img/projects/IceCreamProcessing/PlateHeatExchanger.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Plate heat exchanger</h3>
                <ul className="tv-ticks">
                  <li>SS-clad hygienic frame, multi-bolt tightening</li>
                  <li>Glue-free gaskets</li>
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
                <img src="assets/img/projects/MilkProcessing/milkpro7b.jpg" width="700" height="525" loading="lazy" alt="HTST pasteurizer" data-lightbox="assets/img/projects/MilkProcessing/milkpro7b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>HTST pasteurizer</h3>
                <ul className="tv-ticks">
                  <li>Skid-mounted, ready to use</li>
                  <li>Automatic steam control</li>
                  <li>PID or PLC</li>
                </ul>
                <a className="tv-link" href="pasteurisers.html">
                  {"HTST pasteurizers "}
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
                  <li>Open impeller, easy to clean</li>
                  <li>SMS / DIN fittings</li>
                  <li>1,000 to 1,00,000 LPH</li>
                </ul>
                <a className="tv-link" href="pumps.html">
                  {"SS centrifugal pumps "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/MilkProcessing/milkpro2b.jpg" width="700" height="394" loading="lazy" alt="Skid-mounted CIP system" data-lightbox="assets/img/projects/MilkProcessing/milkpro2b.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>CIP system</h3>
                <ul className="tv-ticks">
                  <li>Pneumatic butterfly or seat valves</li>
                  <li>Automatic CIP solution dosing</li>
                  <li>PLC and HMI, or SCADA</li>
                </ul>
                <a className="tv-link" href="cipsystem.html">
                  {"CIP systems "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <div className="tv-item__body">
                <h3>Homogeniser</h3>
                <ul className="tv-ticks">
                  <li>Manual or hydraulic pressure setting</li>
                  <li>CIP cleanable</li>
                  <li>Adjustable ball feet</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <div className="tv-item__body">
                <h3>Continuous freezer</h3>
                <ul className="tv-ticks">
                  <li>Adjustable for maximum overrun</li>
                  <li>PLC and HMI</li>
                  <li>Hermetic or semi-hermetic compressor</li>
                  <li>Water-cooled condenser</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <div className="tv-item__body">
                <h3>Softy ice cream machine</h3>
                <ul className="tv-ticks">
                  <li>SS 304</li>
                  <li>Single or three flavours</li>
                  <li>R22 or R404A refrigerant</li>
                  <li>Quiet in operation</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section id="lines" label="Lines" title="Line options">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <ul className="tv-ticks">
                <li>Batch line, from 150 L</li>
                <li>Fully automatic line</li>
                <li>Mini unit on a skid</li>
                <li>Batch and automatic stick lines</li>
              </ul>
            </div>
            <div className="tv-doc__prose">
              <ul className="tv-ticks">
                <li>Cup and cone filling machine</li>
                <li>Fruit feeder</li>
                <li>Cold store built to order, down to −25 °C</li>
                <li>Steam and ice water services</li>
              </ul>
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
                ["Ice cream plant", "downloads/Ice%20Cream%20Plant.pdf", "754 KB"],
                ["Softy ice cream machine", "downloads/Ice%20cream%20Softy.pdf", "390 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Plate Heat Exchangers", "plateheat.html"],
                ["HTST Pasteurizers", "pasteurisers.html"],
                ["Refrigeration Systems", "RefrigerationEquipments.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
