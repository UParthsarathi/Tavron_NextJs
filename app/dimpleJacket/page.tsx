import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Dimple Jacket Tank & Reactor Manufacturer in Chennai, India | Tavron Engineers"}
      description="SS 304 / SS 316 jacketed tanks and reactors with laser-welded dimple, limpet or conventional jackets, designed to ASME, plus laser-welded falling film chillers."
      path="dimpleJacket.html"
      image="assets/img/dimpleJacket/dimple-jacket.jpg"
      active="menu_dimpleJacket"
      wa="a quotation for a dimple jacket tank"
    >
      <Doc
        parent="products"
        name="Dimple Jacket Tanks"
        label="Process equipment"
        intro="Jacketed stainless-steel tanks and reactors with laser-welded dimple, conventional dimple, limpet or conventional jackets, and laser-welded falling film chillers. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/dimpleJacket/dimple-jacket.jpg" width="500" height="783" alt="Vertical tank with a laser-welded dimple jacket" data-lightbox="assets/img/dimpleJacket/dimple-jacket.jpg" />
          </figure>
          <Specs
            items={[
              ["Construction", "SS 304 / SS 316"],
              ["Jackets", "Laser-welded dimple, conventional dimple, limpet or conventional"],
              ["Design code", "ASME, or another code on request"],
              ["Thermal design", "Duties calculated with design software"],
              ["Cleaning", "CIP spray ball for in-line cleaning"],
              ["Automation", "Process and service valve automation; PLC control optional"],
            ]}
          />
        </div>
        <Section id="range" label="Range" title="Jacket types and chillers">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/dimpleJacket/limpet-jacket.jpg" width="433" height="323" loading="lazy" alt="Horizontal vessel with a limpet coil jacket" data-lightbox="assets/img/dimpleJacket/limpet-jacket.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Limpet jacket tanks</h3>
                <ul className="tv-ticks">
                  <li>Tanks and reactors in SS 304 / SS 316</li>
                  <li>Limpet or conventional jacket</li>
                  <li>ASME, or another code on request</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/dimpleJacket/Conventional-Jacket.jpg" width="426" height="348" loading="lazy" alt="Jacketed stainless-steel duct bend" data-lightbox="assets/img/dimpleJacket/Conventional-Jacket.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Jacketed ducts</h3>
                <ul className="tv-ticks">
                  <li>SS 304 / SS 316</li>
                  <li>Laser-welded dimple jacket for better pressure holding</li>
                  <li>CIP retrofit nozzles for in-line cleaning</li>
                  <li>PLC control of steam, ice water and cooling tower water optional</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/dimpleJacket/Falling-film-chiller.jpg" width="500" height="580" loading="lazy" alt="Laser-welded falling film chiller" data-lightbox="assets/img/dimpleJacket/Falling-film-chiller.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Falling film chiller</h3>
                <ul className="tv-ticks">
                  <li>Laser-welded SS 304 / SS 316 plates</li>
                  <li>10 kW to 1,000 kW</li>
                  <li>Ammonia or Freon refrigerant</li>
                  <li>Distribution that keeps the whole evaporator wetted</li>
                  <li>PLC option</li>
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
                ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
                ["Falling film chiller", "downloads/Falling%20Film%20Chiller.pdf", "431 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Milk Silos & Storage Tanks", "tanks.html"],
                ["Ribbon Blenders", "blenders.html"],
                ["Refrigeration Systems", "RefrigerationEquipments.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
