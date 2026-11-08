import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Khova Pan Manufacturer in Chennai, India | Tavron Engineers"
      description="Steam-operated SS 304 khova pans from 120 L for khova, ghee, basundi, milk sweets and milk or food heating."
      path="KhovaProcessing.html"
      image="assets/img/projects/khova/khova3b.jpg"
      wa="a quotation for a khova pan"
    >
      <Doc
        parent="products"
        name="Khova Pans"
        label="Dairy equipment"
        intro="Steam-operated stainless-steel khova pans from 120 L for khova, ghee, basundi, milk sweets, and milk or food heating. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/khova/khova3b.jpg" width="350" height="317" alt="Stainless-steel khova pan on a stand with thermometers" data-lightbox="assets/img/projects/khova/khova3b.jpg" />
          </figure>
          <Specs
            items={[
              ["Capacity", "From 120 L"],
              ["Products", "Khova, ghee, basundi, milk sweets, milk heating, food heating"],
              ["Construction", "SS 304"],
              ["Heating", "Steam"],
              ["Instruments", "Thermometer to monitor the temperature"],
            ]}
          />
        </div>
        <Section id="range" label="Also available" title="Fired multi-purpose vat">
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
                  <li>SS 304 / SS 316</li>
                  <li>For the same products as the khova pan</li>
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
                ["Khova pan", "downloads/Khova%20Pan.pdf", "298 KB"],
                ["Multi-purpose vat", "downloads/Multi%20Purpose%20Machine.pdf", "349 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Butter & Ghee Solution", "ButterProcessing.html"],
                ["Flavoured Milk Solution", "FlavouredMilkProcessing.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
