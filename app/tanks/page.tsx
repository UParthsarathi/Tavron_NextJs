import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Milk Silo & Milk Storage Tank Manufacturer in Chennai, India | Tavron Engineers"}
      description="Insulated SS 304 / SS 316 milk storage tanks from 2,000 L, milk silos up to 1,00,000 L and road milk tankers, with spray-ball CIP and hygienic valves."
      path="tanks.html"
      image="assets/img/tank/VerticalMilkStorageTank.jpg"
      active="menu_tanks"
      wa="a quotation for a milk storage tank"
    >
      <Doc
        parent="products"
        name="Milk Silos &amp; Storage Tanks"
        label="Dairy equipment"
        intro="Insulated stainless-steel tanks for milk and other liquid products: horizontal and vertical storage tanks from 2,000 L, milk silos up to 1,00,000 L, and road milk tankers. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/tank/VerticalMilkStorageTank.jpg" width="600" height="688" alt="Row of outdoor vertical milk storage tanks" data-lightbox="assets/img/tank/VerticalMilkStorageTank.jpg" />
          </figure>
          <Specs
            items={[
              ["Construction", "SS 304 / SS 316"],
              ["Insulation", "PUF, for thermal stability"],
              ["Finish", "To international standard"],
              ["Cleaning", "Rotary spray ball covers the whole tank for CIP"],
              ["Agitator", "Geared motor of a reputed make; side agitator option on silos"],
              ["Instruments", "Temperature transmitter and indicator; level transmitter optional"],
              ["Fittings", "Hygienic air vent and outlet valves"],
            ]}
          />
        </div>
        <Section id="sizes" label="Sizes" title="Tank types and capacities">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/tank/HorizontalMilkStorageTank.jpg" width="600" height="398" loading="lazy" alt="Horizontal milk storage tank on legs with three agitators" data-lightbox="assets/img/tank/HorizontalMilkStorageTank.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Horizontal milk storage tank</h3>
                <ul className="tv-ticks">
                  <li>Single or double compartment</li>
                  <li>Legs with adjustable ball feet</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/tank/MilkSilos.jpg" width="312" height="627" loading="lazy" alt="Vertical stainless-steel milk silo" data-lightbox="assets/img/tank/MilkSilos.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Milk silo</h3>
                <ul className="tv-ticks">
                  <li>Indoor or outdoor installation</li>
                  <li>Side agitator option</li>
                  <li>Instrument panel optional</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/tank/RoadMilkTanker.jpg" width="545" height="375" loading="lazy" alt="Stainless-steel road milk tanker on a truck" data-lightbox="assets/img/tank/RoadMilkTanker.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Road milk tanker</h3>
                <ul className="tv-ticks">
                  <li>Multi-compartment barrel</li>
                  <li>Balanced for easy driving</li>
                  <li>Catwalk, and hygienic valves in valve boxes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tv-tablewrap">
            <table className="tv-table">
              <thead>
                <tr>
                  <th scope="col">Tank type</th>
                  <th scope="col">Capacities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Horizontal storage tank</th>
                  <td>2,000 / 3,000 / 5,000 / 10,000 / 15,000 / 20,000 L</td>
                </tr>
                <tr>
                  <th scope="row">Vertical storage tank</th>
                  <td>2,000 / 3,000 / 5,000 / 10,000 / 15,000 L</td>
                </tr>
                <tr>
                  <th scope="row">Milk silo</th>
                  <td>15,000 / 20,000 / 30,000 / 40,000 / 50,000 / 60,000 / 1,00,000 L, indoor or outdoor</td>
                </tr>
                <tr>
                  <th scope="row">Road milk tanker</th>
                  <td>5,000 / 9,000 / 15,000 / 20,000 L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
        <Section id="other" label="Other duties" title="Tanks and tank systems for other products">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <ul className="tv-ticks">
                <li>Liquid milk, cream and ice cream</li>
                <li>CIP systems</li>
                <li>Vegetable oils</li>
                <li>DM water</li>
                <li>Ghee storage</li>
              </ul>
            </div>
            <div className="tv-doc__prose">
              <h3>Jacketed tanks</h3>
              <ul className="tv-ticks">
                <li>Laser-welded dimple jacket</li>
                <li>Limpet jacket</li>
                <li>Conventional jacket</li>
              </ul>
            </div>
          </div>
        </Section>
        <Ask
          photo={<img src="assets/img/tank/TankSystem.jpg" width="544" height="375" loading="lazy" alt="Road milk tanker on a truck" />}
          title="Tell us about your application"
          text="Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it."
        />
        <More>
          <div>
            <Links
              title="Brochures"
              items={[
                ["Milk silo", "downloads/Milk%20Silo.pdf", "233 KB"],
                ["Horizontal milk storage tank", "downloads/HMST.pdf", "179 KB"],
                ["Vertical milk storage tanks", "downloads/Vertical%20Milk%20Storage%20Tanks.pdf", "401 KB"],
                ["Milk tanks", "downloads/Milk%20Tanks.pdf", "830 KB"],
                ["Road milk tanker", "downloads/Road%20Milk%20Tanker.pdf", "258 KB"],
                ["Tanks with valve cluster", "downloads/TanksWithValveCluster.pdf", "423 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Bulk Milk Coolers", "bulkCoolers.html"],
                ["Dimple Jacket Tanks", "dimpleJacket.html"],
                ["SS Centrifugal Pumps", "pumps.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
