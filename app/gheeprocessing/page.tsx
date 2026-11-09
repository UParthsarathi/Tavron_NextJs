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
        intro="From butter or cream to clear ghee: ghee boilers from 100 L to 5,000 L, settling and storage tanks to 10,000 L, and clarifiers of 500 and 1,000 LPH, in SS 304 / SS 316."
        product="Ghee"
        input="Butter or cream in"
        output="Ghee to packing"
        stations={[
          { kind: "vat", part: 1, name: "Ghee boilers", steam: true, count: 2, zone: "Boiling" },
          { kind: "pump", part: 2, name: "Pump", zone: "Settling" },
          { kind: "cone", part: 3, name: "Settling tanks", count: 2 },
          { kind: "clarifier", part: 4, name: "Ghee clarifier", out: "Residue", zone: "Clarifying" },
          { kind: "tank", part: 3, name: "Ghee storage", zone: "Storage" },
        ]}
        parts={[
          { name: "Ghee boiler", spec: "100 L to 5,000 L; hemispherical, or conical with laser-welded dimple plate; agitator with AC drive for speed control; steam control valve" },
          common.pumps,
          { name: "Settling and storage tanks", href: "tanks.html", spec: "Conical, 100 L to 10,000 L, with or without agitator or insulation; finished to international standard" },
          { name: "Ghee clarifier", spec: "500 and 1,000 LPH; bowls in SS 304 / SS 316, solid-retaining or auto-discharge; motor with clutch for a smooth start" },
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
            images: [{ img: ["assets/img/projects/gheeprocessing.jpg", 798, 478, "SCADA screen of a ghee processing section with boilers, settling tanks and clarifier"], caption: "SCADA screen of a ghee section we built. Click to enlarge." }],
          },
        ]}
        built={[
          { img: ["assets/img/projects/ghee-processing/ghee_boiler.jpg", 448, 556, "Ghee boiler with agitator drive"], name: "Ghee boiler", note: "Item 1" },
          { img: ["assets/img/projects/ghee-processing/ghee-setting-tank.jpg", 300, 857, "Tall conical ghee settling tank"], name: "Ghee settling tank", note: "Item 3" },
          { img: ["assets/img/projects/ghee-processing/ghee-clarifier.jpg", 500, 500, "Ghee clarifier"], name: "Ghee clarifier", note: "Item 4" },
          { img: photos.pumps, name: "SS centrifugal pumps", note: "Item 2" },
          { img: photos.cip, name: "CIP unit", note: "Item 5" },
        ]}
        faq={[
          ["What sizes of ghee plant do you build?", "Ghee boilers from 100 L to 5,000 L a batch, settling and storage tanks from 100 L to 10,000 L, and clarifiers of 500 or 1,000 litres an hour."],
          ["Can the plant take cream as well as butter?", "Yes. The ghee boilers take butter or cream."],
          ["How is the ghee boiler heated and controlled?", "By steam, through a steam control valve. The agitator runs on an AC drive, so its speed can be set."],
          ["How is the ghee clarified?", "It settles in conical tanks, then a clarifier with a solid-retaining or auto-discharge bowl takes out the residue."],
          ["Can the plant run from a SCADA screen?", "Yes. The boilers, settling tanks and clarifier can be run and watched from SCADA."],
          ["Can the plant make butter too?", "Yes. A butter and ghee plant adds butter churns and melting vats ahead of the ghee section."],
          ["What do you need from me for a quote?", "How much butter or cream a day; the batch size and how many batches a day; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
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
