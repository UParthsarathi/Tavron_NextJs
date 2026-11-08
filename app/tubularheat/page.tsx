import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Tubular Heat Exchanger & Tubular Pasteurizer Manufacturer | Tavron Engineers"}
      description="Skid-mounted tubular pasteurizers and heaters for juice, milk and liquid egg, from 250 LPH, with automatic steam control and PID or PLC control."
      path="tubularheat.html"
      image="assets/img/tubular/tubular.jpg"
      active="menu_tubularheat"
      wa="a quotation for a tubular heat exchanger"
    >
      <Doc
        parent="products"
        name="Tubular Heat Exchangers"
        label="Heat transfer"
        intro="Skid-mounted tubular pasteurizers and heaters for juice, milk and liquid egg, from 250 LPH, with automatic steam control. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/tubular/tubular.jpg" width="500" height="281" alt="Tubular pasteurizer with tube banks and holding tubes on a stainless-steel skid" data-lightbox="assets/img/tubular/tubular.jpg" />
          </figure>
          <Specs
            items={[
              ["Capacity", "From 250 LPH"],
              ["Applications", "Juice heating, milk heating, liquid egg processing"],
              ["Heating", "Automatic steam control"],
              ["Control", "PID or PLC"],
              ["Construction", "SS 304 / SS 316"],
              ["Assembly", "Complete on a skid"],
            ]}
          />
        </div>
        <Section id="range" label="Range" title="Tubular heating units">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/LiquidEggProcessing/TubularPasteuriser.jpg" width="600" height="337" loading="lazy" alt="Tubular pasteurizer with tube banks" data-lightbox="assets/img/projects/LiquidEggProcessing/TubularPasteuriser.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Tubular pasteurizer</h3>
                <ul className="tv-ticks">
                  <li>Juice heating and liquid egg processing</li>
                  <li>From 250 LPH</li>
                </ul>
                <a className="tv-link" href="LiquidEggProcessing.html">
                  {"Liquid egg plants "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/tubular/milk-heating-skid.jpg" width="258" height="340" loading="lazy" alt="Milk heating skid" data-lightbox="assets/img/tubular/milk-heating-skid.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Milk heating skid</h3>
                <ul className="tv-ticks">
                  <li>Juice heating and milk heating</li>
                  <li>From 250 LPH</li>
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
              title="Brochure"
              items={[
                ["Plate & tubular heat exchangers", "downloads/PHE.pdf", "854 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Plate Heat Exchangers", "plateheat.html"],
                ["HTST Pasteurizers", "pasteurisers.html"],
                ["Liquid Egg Processing", "LiquidEggProcessing.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
