import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="SS Centrifugal Pump Manufacturer in Chennai, India | Tavron Engineers"
      description="Stainless-steel sanitary centrifugal pumps from 500 to 1,00,000 LPH, head up to 60 MWC, for milk, juice, syrups, chemicals and pharmaceutical liquids."
      path="pumps.html"
      image="assets/img/pumps/pumps1b.jpg"
      active="menu_pumps"
      wa="a quotation for SS centrifugal pumps"
    >
      <Doc
        parent="products"
        name="SS Centrifugal Pumps"
        label="Hygienic flow equipment"
        intro="Sanitary stainless-steel centrifugal pumps from 500 LPH to 1,00,000 LPH, with heads up to 60 MWC, for milk, juice, syrups and other liquids. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/pumps/pumps1b.jpg" width="500" height="400" alt="Three stainless-steel centrifugal pumps" data-lightbox="assets/img/pumps/pumps1b.jpg" />
          </figure>
          <Specs
            items={[
              ["Capacity", "500 LPH to 1,00,000 LPH"],
              ["Head", "Up to 60 MWC"],
              ["Construction", "SS 304 / SS 316"],
              ["Drive", "Coupled to an electric motor, or monobloc; petrol or diesel engine versions available"],
              ["Impeller", "Open, for viscous products and pulps"],
              ["Vacuum", "Suitable for operation under vacuum"],
              ["Seal", "Durable mechanical shaft seal"],
              ["Fittings", "SMS / DIN"],
            ]}
          />
        </div>
        <Section id="how" label="How it works" title="What is a centrifugal pump?">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <p>A centrifugal pump moves a fluid by transferring rotational energy from a driven rotor, the impeller. Fluid enters the rapidly rotating impeller along its axis and is thrown out along its circumference through the vane tips.</p>
              <h3>Built for hygienic duty</h3>
              <ul className="tv-ticks">
                <li>Sanitary construction</li>
                <li>Quick to dismantle for cleaning</li>
                <li>Adjustable ball feet</li>
              </ul>
            </div>
            <figure className="tv-doc__fig">
              <img src="assets/img/pumps/pumps2b.jpg" width="500" height="400" loading="lazy" alt="Stainless-steel centrifugal pumps with motor shrouds" data-lightbox="assets/img/pumps/pumps2b.jpg" />
            </figure>
          </div>
        </Section>
        <Section id="applications" label="Applications" title="Where they are used">
          <div className="tv-tablewrap">
            <table className="tv-table">
              <thead>
                <tr>
                  <th scope="col">Industry</th>
                  <th scope="col">Pumping</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Dairy</th>
                  <td>Milk, cream, butter oil, evaporator plants</td>
                </tr>
                <tr>
                  <th scope="row">Beverage</th>
                  <td>Juice, sugar syrup, beer, wine</td>
                </tr>
                <tr>
                  <th scope="row">Steel</th>
                  <td>Water for furnace cooling</td>
                </tr>
                <tr>
                  <th scope="row">Chemical</th>
                  <td>Acids, alkalis, cellulose solution, starch solution, yeast, dye</td>
                </tr>
                <tr>
                  <th scope="row">Pharmaceutical</th>
                  <td>Formulations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
        <Ask
          photo={<img src="assets/img/pumps/pumps4b.jpg" width="500" height="400" loading="lazy" alt="Two stainless-steel pumps with motor shrouds" />}
          title="Tell us about your application"
          text="Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it."
        />
        <More>
          <div>
            <Links
              title="Brochures"
              items={[
                ["SS centrifugal pump", "downloads/SS%20Centrifugal%20Pump.pdf", "4.0 MB"],
                ["Stainless-steel pumps", "downloads/Pumps.pdf", "6.9 MB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Milk Silos & Storage Tanks", "tanks.html"],
                ["CIP Systems", "cipsystem.html"],
                ["Liquid Milk Process Solution", "milkprocessing.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
