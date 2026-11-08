import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="HTST Pasteurizer Manufacturer in Chennai, India | Tavron Engineers"
      description="HTST pasteurizers for milk, juice and other liquids, 50 to 30,000 LPH. Plate heat exchanger, balance tank, pumps, holding tube and controls on one skid."
      path="pasteurisers.html"
      image="assets/img/projects/MilkProcessing/milkpro7b.jpg"
      active="menu_pasteurisers"
      wa="a quotation for an HTST pasteurizer"
    >
      <Doc
        parent="products"
        name="HTST Pasteurizers"
        label="Dairy equipment"
        intro="High Temperature Short Time (HTST) pasteurizers for milk, juice and other liquids, from 50 LPH to 30,000 LPH. A continuous process that destroys micro-organisms efficiently, so packing can start as soon as pasteurisation does. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/MilkProcessing/milkpro7b.jpg" width="700" height="525" alt="Skid-mounted HTST milk pasteurizer with plate heat exchanger and control panel" data-lightbox="assets/img/projects/MilkProcessing/milkpro7b.jpg" />
          </figure>
          <Specs
            items={[
              ["Capacity", "50 LPH to 30,000 LPH"],
              ["Products", "Milk, juice and other liquids"],
              ["Process", "Heated to at least 74 °C, held for at least 20 seconds, then cooled rapidly"],
              ["Heat exchanger", "Plate type, SS 304 / SS 316 plates, glue-free NBR / EPDM gaskets"],
              ["Heat recovery", "Full regeneration"],
              ["Cleaning", "CIP; easy to clean and sterilise"],
              ["Operation", "Manual or automatic"],
              ["Mounting", "Skid-mounted or floor-mounted"],
            ]}
          />
        </div>
        <Section id="how" label="How it works" title="What is an HTST pasteurizer?">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <p>An HTST pasteurization system is a modular unit: a plate-and-frame heat exchanger, a stainless-steel balance tank, pumps, a holding tube, valves, piping and controls.</p>
              <p>Product flows on one side of the stainless-steel plates and the heating medium on the other, raising the product to at least 74 °C. It is held there for at least 20 seconds, then cooled rapidly.</p>
              <h3>Why HTST</h3>
              <ul className="tv-ticks">
                <li>Continuous: packing can begin when pasteurisation begins</li>
                <li>Energy-efficient, with full regeneration</li>
                <li>Minimal chance of damage to the product</li>
                <li>Easy to clean and sterilise</li>
              </ul>
            </div>
            <figure className="tv-doc__fig">
              <img src="assets/img/pasteurisers/pasteuriser_phe.jpg" width="911" height="461" loading="lazy" alt="Flow diagram of an HTST pasteurizer with plate heat exchanger sections, balance tank and holding tube" data-lightbox="assets/img/pasteurisers/pasteuriser_phe.jpg" />
              <figcaption>Process flow of an HTST pasteurizer.</figcaption>
            </figure>
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
                ["Milk & juice pasteurizers", "downloads/Pasteurizers%20.pdf", "555 KB"],
                ["Juice pasteurizer", "downloads/JUICE-PASTEURIZER.pdf", "369 KB"],
                ["Batch pasteurizer", "downloads/BatchPasteurizer.pdf", "284 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Plate Heat Exchangers", "plateheat.html"],
                ["Liquid Milk Process Solution", "milkprocessing.html"],
                ["CIP Systems", "cipsystem.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
