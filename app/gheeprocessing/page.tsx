import { common, Plant, photos } from "@/components/Plant";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Ghee Plant Manufacturer | Ghee Boiler, Clarifier | Tavron Engineers"
      description="Ghee boilers from 100 L to 5,000 L, ghee settling and storage tanks to 10,000 L and ghee clarifiers of 500 and 1,000 LPH, in SS 304 / SS 316."
      path="gheeprocessing.html"
      image="assets/img/projects/gheeprocessing.jpg"
      active="menu_butter"
      wa="to discuss a ghee plant"
    >
      <Plant
        crumb="Ghee"
        title="Ghee plants"
        intro="From butter or cream to clear ghee: ghee boilers, settling and storage tanks and clarifiers, from 100 L to 10,000 L, in SS 304 / SS 316, built by Tavron Engineers, Chennai."
        product="Ghee"
        input="Butter or cream in"
        output="Ghee to packing"
        stations={[
          { kind: "vat", part: 1, name: "Ghee boiler", steam: true },
          { kind: "pump", part: 2, name: "Pump" },
          { kind: "cone", part: 3, name: "Settling tank" },
          { kind: "clarifier", part: 4, name: "Ghee clarifier" },
          { kind: "tank", part: 3, name: "Ghee storage" },
        ]}
        parts={[
          { name: "Ghee boiler", spec: "100 L to 5,000 L; hemispherical, or conical with laser-welded dimple plate; agitator with AC drive for speed control; steam control valve" },
          common.pumps,
          { name: "Settling and storage tanks", href: "tanks.html", spec: "Conical, with or without agitator or insulation, to 10,000 L; finished to international standard" },
          { name: "Ghee clarifier", spec: "500 and 1,000 LPH; bowls in SS 304 / SS 316, solid-retaining or auto-discharge; motor with clutch for a smooth start" },
          common.cip,
        ]}
        cip={5}
        sheetTitle="Ghee plant"
        facts={[
          ["Ghee boilers", "100 L to 5,000 L"],
          ["Tanks", "To 10,000 L"],
          ["Clarifiers", "500 and 1,000 LPH"],
          ["Construction", "SS 304 / SS 316"],
        ]}
        sections={[
          {
            title: "The ghee section on one screen",
            aside: "Boilers, settling tanks and the clarifier, run and watched from SCADA.",
            images: [{ img: ["assets/img/projects/gheeprocessing.jpg", 798, 478, "SCADA screen of a ghee processing section with boilers, settling tanks and clarifier"], caption: "SCADA screen of a Tavron ghee section. Click to enlarge." }],
          },
        ]}
        built={[
          { img: ["assets/img/projects/ghee-processing/ghee_boiler.jpg", 448, 556, "Ghee boiler with agitator drive"], name: "Ghee boiler", note: "Item 1" },
          { img: ["assets/img/projects/ghee-processing/ghee-setting-tank.jpg", 300, 857, "Tall conical ghee settling tank"], name: "Ghee settling tank", note: "Item 3" },
          { img: ["assets/img/projects/ghee-processing/ghee-clarifier.jpg", 500, 500, "Ghee clarifier"], name: "Ghee clarifier", note: "Item 4" },
          { img: photos.pumps, name: "SS centrifugal pumps", note: "Item 2" },
          { img: photos.cip, name: "CIP unit", note: "Item 5" },
        ]}
        close={{
          title: "Planning a ghee plant?",
          needs: ["How much butter or cream a day", "Batch size, and how many batches a day", "The site: building, space and utilities"],
          files: [
            ["Ghee plant brochure", "downloads/Ghee%20Plant.pdf", "252 KB"],
            ["PHE and ghee plant", "downloads/PHEGheePlant.pdf", "1.7 MB"],
            ["Butter and ghee plants", "ButterProcessing.html"],
          ],
        }}
        wa="to discuss a ghee plant"
      />
    </Site>
  );
}
