import { Plant, photos } from "@/components/Plant";
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
        plant={<>
          <p>Butter or cream is boiled in ghee boilers of 100 L to 5,000 L, hemispherical or conical with a laser-welded dimple plate, each with an agitator on an AC drive and a steam control valve.</p>
          <p>The ghee is pumped to conical <a href="tanks.html">settling and storage tanks</a> of 100 L to 10,000 L, and a ghee clarifier of 500 or 1,000 litres an hour, with a solid-retaining or auto-discharge bowl, takes out the residue. A <a href="cipsystem.html">CIP unit</a> cleans the line.</p>
        </>}
        facts={[
          ["Ghee boilers", "100 L to 5,000 L"],
          ["Tanks", "To 10,000 L"],
          ["Clarifiers", "500 and 1,000 LPH"],
          ["Construction", "SS 304 / SS 316"],
          ["Control", "Boilers, settling tanks and clarifier run from SCADA"],
        ]}
        built={[
          { img: ["assets/img/projects/ghee-processing/ghee_boiler.jpg", 448, 556, "Ghee boiler with agitator drive"], name: "Ghee boiler" },
          { img: ["assets/img/projects/ghee-processing/ghee-setting-tank.jpg", 300, 857, "Tall conical ghee settling tank"], name: "Ghee settling tank" },
          { img: ["assets/img/projects/ghee-processing/ghee-clarifier.jpg", 500, 500, "Ghee clarifier"], name: "Ghee clarifier" },
          { img: photos.pumps, name: "SS centrifugal pumps" },
          { img: photos.cip, name: "CIP unit" },
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
          ask: "how much butter or cream you handle a day, your batch size and batches a day, and your site",
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
