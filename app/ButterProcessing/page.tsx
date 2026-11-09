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
        intro="From cream to butter and on to ghee: butter churns from 50 L to 5,000 L, melting vats and ghee boilers from 100 L to 5,000 L, settling tanks to 10,000 L and clarifiers, in SS 304 / SS 316."
        product="Cream, butter and ghee"
        input="Cream in"
        output="Ghee to packing"
        stations={[
          { kind: "tank", part: 1, name: "Cream tank", zone: "Cream" },
          { kind: "pump", part: 2, name: "Pump" },
          { kind: "churn", part: 3, name: "Butter churn", out: "Buttermilk", zone: "Butter" },
          { kind: "vat", part: 4, name: "Butter\nmelting vat", steam: true, zone: "Melting" },
        ]}
        then={{
          stations: [
            { kind: "vat", part: 5, name: "Ghee boiler", steam: true, zone: "Ghee" },
            { kind: "pump", part: 2, name: "Pump" },
            { kind: "cone", part: 6, name: "Settling tanks", count: 2 },
            { kind: "clarifier", part: 7, name: "Ghee clarifier", out: "Residue" },
            { kind: "tank", part: 6, name: "Ghee storage" },
          ],
        }}
        parts={[
          { name: "Cream tank", href: "tanks.html", spec: "PUF-insulated SS 304 / SS 316, 2,000 to 10,000 L, with geared agitator and rotary spray ball for CIP" },
          common.pumps,
          { name: "Butter churn", spec: "50 L to 5,000 L; barrel in SS 304 / SS 316; geared drive with AC drive for variable speed, brake motor for fine positioning; sight glass and CIP spray ball" },
          { name: "Butter melting vat", spec: "100 L to 5,000 L; agitator for better melting; hot water system with steam control valves; laser-welded dimple jacket optional" },
          { name: "Ghee boiler", href: "gheeprocessing.html", spec: "100 L to 5,000 L; hemispherical, or conical with laser-welded dimple plate; agitator with AC drive for speed control; steam control valve" },
          { name: "Ghee settling and storage tanks", href: "gheeprocessing.html", spec: "Conical, 100 L to 10,000 L, with or without agitator or insulation" },
          { name: "Ghee clarifier", href: "gheeprocessing.html", spec: "500 and 1,000 LPH; bowls in SS 304 / SS 316, solid-retaining or auto-discharge; motor with clutch for a smooth start" },
          common.cip,
        ]}
        cip={8}
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
          { img: ["assets/img/projects/butter-processing/ButterChurn.jpg", 404, 311, "Stainless-steel butter churn barrel on a blue frame with geared drive"], name: "Butter churn", note: "Item 3" },
          { img: ["assets/img/projects/butter-processing/ButterMeltingVAT.jpg", 500, 397, "Butter melting vat with agitator"], name: "Butter melting vat", note: "Item 4" },
          { img: ["assets/img/projects/ghee-processing/ghee_boiler.jpg", 448, 556, "Ghee boiler with agitator drive"], name: "Ghee boiler", note: "Item 5" },
          { img: ["assets/img/projects/ghee-processing/ghee-setting-tank.jpg", 300, 857, "Tall conical ghee settling tank"], name: "Ghee settling tank", note: "Item 6" },
          { img: ["assets/img/projects/ghee-processing/ghee-clarifier.jpg", 500, 500, "Ghee clarifier"], name: "Ghee clarifier", note: "Item 7" },
          { img: photos.cip, name: "CIP unit", note: "Item 8" },
        ]}
        faq={[
          ["What sizes do you build?", "Butter churns from 50 L to 5,000 L, melting vats and ghee boilers from 100 L to 5,000 L, settling and storage tanks to 10,000 L, and ghee clarifiers of 500 or 1,000 litres an hour."],
          ["Can the plant make only butter, or only ghee?", "Yes. One line can make butter, ghee, or both."],
          ["How is the butter churn controlled?", "A geared drive on an AC drive sets the speed, and a brake motor positions the barrel. The doors open easily, and a sight glass and CIP spray ball are fitted."],
          ["How are the butter melted and the ghee boiled?", "With steam. The melting vat has an agitator and a hot water system on steam control valves; the ghee boiler has an agitator on an AC drive and a steam control valve."],
          ["What is the plant made of?", "SS 304 or SS 316. The churn's supports can be SS 304, SS 316 or carbon steel."],
          ["What do you need from me for a quote?", "How much cream or butter a day; whether you want butter, ghee or both; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
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
