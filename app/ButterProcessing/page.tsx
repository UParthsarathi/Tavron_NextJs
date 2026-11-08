import { common, Plant, photos } from "@/components/Plant";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Butter & Ghee Plant Manufacturer | Butter Churn, Ghee Boiler | Tavron Engineers"}
      description="Butter churns from 50 L, butter melting vats, ghee boilers, ghee settling tanks to 10,000 L and ghee clarifiers, in SS 304 / SS 316."
      path="ButterProcessing.html"
      image="assets/img/projects/butter-processing/ButterChurn.jpg"
      active="menu_butter"
      wa="to discuss a butter and ghee plant"
    >
      <Plant
        crumb="Butter & ghee"
        title="Butter and ghee plants"
        intro="From cream to butter and on to ghee: butter churns, melting vats, ghee boilers, settling tanks and clarifiers from 50 L to 10,000 L, in SS 304 / SS 316, built by Tavron Engineers, Chennai."
        product="Cream, butter and ghee"
        input="Cream in"
        output="Ghee to packing"
        stations={[
          { kind: "churn", part: 1, name: "Butter churn" },
          { kind: "vat", part: 2, name: "Butter\nmelting vat", steam: true },
          { kind: "vat", part: 3, name: "Ghee boiler", steam: true },
          { kind: "cone", part: 4, name: "Settling tank" },
          { kind: "clarifier", part: 5, name: "Ghee clarifier" },
        ]}
        parts={[
          { name: "Butter churn", spec: "From 50 L; barrel in SS 304 / SS 316; geared drive with AC drive for variable speed, brake motor for fine positioning; sight glass and CIP spray ball" },
          { name: "Butter melting vat", spec: "Agitator for better melting; hot water system with steam control valves; laser-welded dimple jacket optional" },
          { name: "Ghee boiler", href: "gheeprocessing.html", spec: "Hemispherical, or conical with laser-welded dimple plate; agitator with AC drive for speed control; steam control valve" },
          { name: "Ghee settling and storage tanks", href: "gheeprocessing.html", spec: "Conical, with or without agitator or insulation, to 10,000 L" },
          { name: "Ghee clarifier", href: "gheeprocessing.html", spec: "Bowls in SS 304 / SS 316, solid-retaining or auto-discharge; motor with clutch for a smooth start" },
          common.cip,
        ]}
        cip={6}
        sheetTitle="Butter and ghee plant"
        facts={[
          ["Range", "50 L to 10,000 L"],
          ["Heating", "Steam, with control valves"],
          ["Construction", "SS 304 / SS 316"],
          ["Cleaning", "CIP"],
        ]}
        sections={[
          {
            title: "Butter, then ghee",
            aside: "One line can make butter, ghee, or both.",
            rows: [
              ["Butter equipment", "Butter churns from 50 L, with doors that open easily, and butter melting vats with an agitator and a hot water system on steam control valves."],
              ["Ghee equipment", <>
                <p>Ghee boilers, conical settling and storage tanks to 10,000 L, and ghee clarifiers with solid-retaining or auto-discharge bowls.</p>
                <p><a href="gheeprocessing.html">Ghee plants</a></p>
              </>],
            ],
          },
        ]}
        built={[
          { img: ["assets/img/projects/butter-processing/ButterChurn.jpg", 404, 311, "Stainless-steel butter churn barrel on a blue frame with geared drive"], name: "Butter churn", note: "Item 1" },
          { img: ["assets/img/projects/butter-processing/ButterMeltingVAT.jpg", 500, 397, "Butter melting vat with agitator"], name: "Butter melting vat", note: "Item 2" },
          { img: ["assets/img/projects/ghee-processing/ghee_boiler.jpg", 448, 556, "Ghee boiler with agitator drive"], name: "Ghee boiler", note: "Item 3" },
          { img: ["assets/img/projects/ghee-processing/ghee-setting-tank.jpg", 300, 857, "Tall conical ghee settling tank"], name: "Ghee settling tank", note: "Item 4" },
          { img: ["assets/img/projects/ghee-processing/ghee-clarifier.jpg", 500, 500, "Ghee clarifier"], name: "Ghee clarifier", note: "Item 5" },
          { img: photos.cip, name: "CIP unit", note: "Item 6" },
        ]}
        close={{
          title: "Planning a butter and ghee plant?",
          needs: ["How much cream or butter a day", "Your products: butter, ghee or both", "The site: building, space and utilities"],
          files: [
            ["Butter & ghee plant brochure", "downloads/Butter%20&%20Ghee%20Plant.pdf", "507 KB"],
            ["Butter churn", "downloads/Butter%20CHURN.pdf", "208 KB"],
            ["Ghee plants", "gheeprocessing.html"],
          ],
        }}
        wa="to discuss a butter and ghee plant"
      />
    </Site>
  );
}
