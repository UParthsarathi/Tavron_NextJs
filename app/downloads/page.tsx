import { Ask, Doc, Links, More } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Brochures & Downloads | Tavron Engineers"}
      description="Download Tavron Engineers product and plant brochures as PDF: dairy plants, heat exchangers, tanks, evaporators, spray dryers, CIP and refrigeration."
      path="downloads.html"
      image="assets/img/hero/hero-aisle.jpg"
    >
      <Doc
        name="Downloads"
        title="Brochures &amp; Downloads"
        label="Downloads"
        intro="Product and plant brochures as PDF files. Each file's size is shown beside it, so you can choose what to download on a mobile connection."
        quote={false}
      >
        <More id="files">
          <div>
            <Links
              title="Company"
              items={[
                ["Company profile", "downloads/TavronProfile.pdf", "2.3 MB"],
              ]}
            />
            <Links
              title="Dairy plants"
              items={[
                ["Milk plant", "downloads/Milk%20Plant.pdf", "1.8 MB"],
                ["Milk powder plant", "downloads/Milk%20Powder%20Plant.pdf", "787 KB"],
                ["Butter & ghee plant", "downloads/Butter%20&%20Ghee%20Plant.pdf", "507 KB"],
                ["Ghee plant", "downloads/Ghee%20Plant.pdf", "252 KB"],
                ["PHE and ghee plant", "downloads/PHEGheePlant.pdf", "1.7 MB"],
                ["Paneer plant", "downloads/Paneer%20Plant.pdf", "881 KB"],
                ["Cheese plant", "downloads/Cheese%20Plant.pdf", "1.1 MB"],
                ["Curd plant", "downloads/Curd.pdf", "973 KB"],
                ["Ice cream plant", "downloads/Ice%20Cream%20Plant.pdf", "754 KB"],
                ["Flavoured milk plant", "downloads/Flavour%20Milk%20Plant.pdf", "572 KB"],
                ["Casein & whey plant", "downloads/CASEIN-WHEY-PLANT.pdf", "603 KB"],
                ["Whey processing", "downloads/whey%20processing.pdf", "571 KB"],
                ["Evaporated milk plant", "downloads/EvaporatedMilkPlant.pdf", "652 KB"],
                ["Sweetened condensed milk plant", "downloads/SweetenedCondensedMilkPlant.pdf", "599 KB"],
              ]}
            />
            <Links
              title="Food, beverage and other plants"
              items={[
                ["Beverage equipment", "downloads/Beverage%20Eqipments.pdf", "1.2 MB"],
                ["Coconut milk plant", "downloads/Coconut%20Milk%20Plant.pdf", "838 KB"],
                ["Liquid egg plant", "downloads/Egg%20Liquid.pdf", "769 KB"],
                ["Aseptic processing", "downloads/ASEPTIC-PROCESSING.pdf", "659 KB"],
                ["Cosmetic processing line", "downloads/COSMETIC%20PROCESSING%20LINE.pdf", "758 KB"],
              ]}
            />
            <Links
              title="Heat transfer and pasteurisation"
              items={[
                ["Plate & tubular heat exchangers", "downloads/PHE.pdf", "854 KB"],
                ["Plate & tubular heat exchangers for food, dairy, fruit pulp and beverages", "downloads/PHEPasturiser.pdf", "12.0 MB"],
                ["Milk & juice pasteurizers", "downloads/Pasteurizers%20.pdf", "555 KB"],
                ["Pasteurizer, frame design", "downloads/FrameDesignPasturieser.pdf", "1.6 MB"],
                ["Batch pasteurizer", "downloads/BatchPasteurizer.pdf", "284 KB"],
                ["Juice pasteurizer", "downloads/JUICE-PASTEURIZER.pdf", "369 KB"],
                ["Sterilizer", "downloads/Sterlizer.pdf", "463 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Tanks and storage"
              items={[
                ["Milk silo", "downloads/Milk%20Silo.pdf", "233 KB"],
                ["Horizontal milk storage tank", "downloads/HMST.pdf", "179 KB"],
                ["Vertical milk storage tanks", "downloads/Vertical%20Milk%20Storage%20Tanks.pdf", "401 KB"],
                ["Milk tanks", "downloads/Milk%20Tanks.pdf", "830 KB"],
                ["Road milk tanker", "downloads/Road%20Milk%20Tanker.pdf", "258 KB"],
                ["Hygienic stainless-steel process tanks", "downloads/TanksCurves.pdf", "5.0 MB"],
                ["Tanks with valve cluster", "downloads/TanksWithValveCluster.pdf", "423 KB"],
                ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
              ]}
            />
            <Links
              title="Dairy and process equipment"
              items={[
                ["Bulk milk cooler", "downloads/Bulk%20Milk%20Cooler.pdf", "611 KB"],
                ["Direct expansion milk cooler", "downloads/BMCCurves.pdf", "4.5 MB"],
                ["Butter churn", "downloads/Butter%20CHURN.pdf", "208 KB"],
                ["Cream separator", "downloads/Cream%20Separator.pdf", "297 KB"],
                ["Khova pan", "downloads/Khova%20Pan.pdf", "298 KB"],
                ["Multi-purpose vat", "downloads/Multi%20Purpose%20Machine.pdf", "349 KB"],
                ["Softy ice cream machine", "downloads/Ice%20cream%20Softy.pdf", "390 KB"],
                ["Ribbon blender", "downloads/Ribbon%20Blender.pdf", "384 KB"],
                ["Stainless-steel equipment", "downloads/SS%20Epuipment.pdf", "898 KB"],
                ["SS centrifugal pump", "downloads/SS%20Centrifugal%20Pump.pdf", "4.0 MB"],
                ["Stainless-steel pumps", "downloads/Pumps.pdf", "6.9 MB"],
              ]}
            />
            <Links
              title="Evaporation and drying"
              items={[
                ["Evaporator", "downloads/Evaporator.pdf", "541 KB"],
                ["Forced circulation evaporator", "downloads/Evaporator%20Force%20Circulation.pdf", "161 KB"],
                ["Fruit pulp forced circulation evaporator", "downloads/Fruits%20pulp%20forced%20circulation%20evaporator.pdf", "203 KB"],
                ["Evaporator & spray dryer", "downloads/EvaporatorSprayDryer.pdf", "11.1 MB"],
                ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
                ["Table-top spray dryer", "downloads/Table%20Top%20Spray%20Dryer.pdf", "675 KB"],
                ["Coffee & tea extract evaporator and spray dryer", "downloads/Cofee%20Tea%20Extract%20Evaporator%20and%20Spray%20Dryer.pdf", "672 KB"],
              ]}
            />
            <Links
              title="Cleaning, automation and refrigeration"
              items={[
                ["CIP systems", "downloads/CIP%20systems.pdf", "661 KB"],
                ["Automation", "downloads/Automation.pdf", "954 KB"],
                ["Refrigeration", "downloads/Refrigeration.pdf", "891 KB"],
                ["Falling film chiller", "downloads/Falling%20Film%20Chiller.pdf", "431 KB"],
                ["Tube ice plant", "downloads/TubeIcePlant.pdf", "335 KB"],
              ]}
            />
          </div>
        </More>
        <Ask
          title="Tell us about your line."
          text="Send your capacity and product mix. We'll come back with a scheme and a budget."
          button="Contact us"
        />
      </Doc>
    </Site>
  );
}
