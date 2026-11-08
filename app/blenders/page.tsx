import { Ask, Doc, Links, More, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Ribbon Blender Manufacturer in Chennai, India | Tavron Engineers"
      description="SS 304 / SS 316 ribbon blenders from 50 L for powder-to-powder and liquid-to-powder blending, jacketed or non-jacketed, with AC drive and PLC control."
      path="blenders.html"
      image="assets/img/blenders/RibbonBlender.jpg"
      active="menu_blenders"
      wa="a quotation for a ribbon blender"
    >
      <Doc
        parent="products"
        name="Ribbon Blenders"
        label="Process equipment"
        intro="Ribbon blenders from 50 L for powder-to-powder and liquid-to-powder blending, jacketed or non-jacketed. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/blenders/RibbonBlender.jpg" width="600" height="414" alt="Horizontal ribbon blender with geared motor drive" data-lightbox="assets/img/blenders/RibbonBlender.jpg" />
          </figure>
          <Specs
            items={[
              ["Capacity", "From 50 L"],
              ["Blending", "Powder to powder, or liquid to powder"],
              ["Construction", "SS 304 / SS 316"],
              ["Jacket", "Non-jacketed, or a conventional, limpet or dimple jacket"],
              ["Drive", "Sized for the calculated torque, with AC drive"],
              ["Instruments", "Temperature transmitter, load cell transmitter"],
              ["Control", "PLC"],
            ]}
          />
        </div>
        <Ask
          title="Tell us about your application"
          text="Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it."
        />
        <More>
          <div>
            <Links
              title="Brochure"
              items={[
                ["Ribbon blender", "downloads/Ribbon%20Blender.pdf", "384 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Dimple Jacket Tanks", "dimpleJacket.html"],
                ["Spray Dryers", "spray.html"],
                ["Milk Powder Solution", "milkpowder.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
