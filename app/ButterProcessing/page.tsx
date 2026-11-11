import { Plant, photos } from "@/components/Plant";
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
        plant={<>
          <p>Cream is held in an insulated <a href="tanks.html">cream tank</a> of 2,000 to 10,000 L, with a geared agitator, and pumped to the butter churn: 50 L to 5,000 L, in SS 304 or SS 316, on a geared drive with variable speed and a brake motor to position the barrel.</p>
          <p>For ghee, the butter is melted in a vat of 100 L to 5,000 L, with an agitator and a hot water system on steam control valves, then boiled in a <a href="gheeprocessing.html">ghee boiler</a> of the same range. It settles in conical tanks of up to 10,000 L, and a ghee clarifier of 500 or 1,000 litres an hour, with a solid-retaining or auto-discharge bowl, takes out the residue.</p>
          <p>One line can make butter, ghee or both. A <a href="cipsystem.html">CIP unit</a> cleans it, through spray balls in the churn and tanks.</p>
        </>}
        facts={[
          ["Range", "50 L to 10,000 L"],
          ["Heating", "Steam, with control valves"],
          ["Construction", "SS 304 / SS 316"],
          ["Cleaning", "CIP"],
        ]}
        built={[
          { img: ["assets/img/projects/butter-processing/ButterChurn.jpg", 404, 311, "Stainless-steel butter churn barrel on a blue frame with geared drive"], name: "Butter churn" },
          { img: ["assets/img/projects/butter-processing/ButterMeltingVAT.jpg", 500, 397, "Butter melting vat with agitator"], name: "Butter melting vat" },
          { img: ["assets/img/projects/ghee-processing/ghee_boiler.jpg", 448, 556, "Ghee boiler with agitator drive"], name: "Ghee boiler" },
          { img: ["assets/img/projects/ghee-processing/ghee-setting-tank.jpg", 300, 857, "Tall conical ghee settling tank"], name: "Ghee settling tank" },
          { img: ["assets/img/projects/ghee-processing/ghee-clarifier.jpg", 500, 500, "Ghee clarifier"], name: "Ghee clarifier" },
          { img: photos.cip, name: "CIP unit" },
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
          ask: "how much cream or butter you handle a day, whether you want butter, ghee or both, and your site",
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
