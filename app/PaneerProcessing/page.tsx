import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Paneer Plant Manufacturer | Paneer Press, Coagulation Tank | Tavron Engineers"
      description="Paneer lines from milk heating (4 to 90 °C) to coagulation tanks, pneumatic paneer presses, hoops, cooling tanks and cold store, in SS 304 / SS 316."
      path="PaneerProcessing.html"
      image="assets/img/projects/paneer-processing/MILK-HEATING-SYSTEM.jpg"
      active="menu_paneer"
      wa="to discuss a paneer plant"
    >
      <Doc
        parent="turnkey"
        name="Paneer"
        title="Paneer Processing Plants"
        label="Turnkey plant"
        intro="Paneer lines from milk heating to cold storage: milk heating system, coagulation tanks, pneumatic presses, hoops, cooling tanks and cold store. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/paneer-processing/MILK-HEATING-SYSTEM.jpg" width="449" height="317" alt="Skid-mounted milk heating system with plate heat exchanger and balance tank" data-lightbox="assets/img/projects/paneer-processing/MILK-HEATING-SYSTEM.jpg" />
          </figure>
          <Specs
            items={[
              ["Milk heating", "4 to 90 °C on a skid, with hygienic plate heat exchanger and food-grade gaskets"],
              ["Heating control", "Automatic steam control valve, flow diversion valve and level controls; flow meter optional"],
              ["Operation", "PLC or PID control"],
              ["Coagulation", "Laser-welded dimple jacket tanks with geared agitator"],
              ["Pressing", "Pneumatic, single or multi-cylinder"],
              ["Construction", "SS 304 / SS 316"],
            ]}
          />
        </div>
        <Section id="equipment" label="Equipment" title="What goes into the line">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/paneer-processing/PANEER-COAGULATION-TANK.jpg" width="329" height="202" loading="lazy" alt="Paneer coagulation tanks" data-lightbox="assets/img/projects/paneer-processing/PANEER-COAGULATION-TANK.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Coagulation tanks</h3>
                <ul className="tv-ticks">
                  <li>Laser-welded dimple jacket for the process temperatures</li>
                  <li>Agitator with reputed-make gearbox</li>
                  <li>Outlet for draining the coagulated mass</li>
                  <li>Adjustable ball feet</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/paneer-processing/PANEER-PRESS.jpg" width="500" height="536" loading="lazy" alt="Pneumatic paneer press" data-lightbox="assets/img/projects/paneer-processing/PANEER-PRESS.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Paneer press</h3>
                <ul className="tv-ticks">
                  <li>Pneumatic, single or multi-cylinder</li>
                  <li>Holds the right pressure to form paneer</li>
                  <li>Adjustable stroke length</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/paneer-processing/Paneer-Hoops.jpg" width="500" height="375" loading="lazy" alt="Stainless-steel paneer hoops" data-lightbox="assets/img/projects/paneer-processing/Paneer-Hoops.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Paneer hoops</h3>
                <ul className="tv-ticks">
                  <li>SS 304 / SS 316</li>
                  <li>Holes to drain excess whey</li>
                  <li>Handles for easy handling</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/paneer-processing/PANEER-COOLING-TANK.jpg" width="499" height="338" loading="lazy" alt="Paneer cooling tank" data-lightbox="assets/img/projects/paneer-processing/PANEER-COOLING-TANK.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Cooling tanks</h3>
                <ul className="tv-ticks">
                  <li>PUF insulated</li>
                  <li>Plate heat exchanger holds the temperature</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/paneer-processing/PANEER-COLD-STORE.jpg" width="304" height="287" loading="lazy" alt="Paneer cold store room" data-lightbox="assets/img/projects/paneer-processing/PANEER-COLD-STORE.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Cold store</h3>
                <ul className="tv-ticks">
                  <li>PUF insulated</li>
                  <li>Cooling and condensing units of reputed brands</li>
                  <li>Even temperature throughout the room</li>
                  <li>PLC control optional</li>
                </ul>
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
                ["Paneer plant", "downloads/Paneer%20Plant.pdf", "881 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Cheese Process Solution", "CheeseProcessing.html"],
                ["Plate Heat Exchangers", "plateheat.html"],
                ["Dimple Jacket Tanks", "dimpleJacket.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
