import { common, Plant, photos } from "@/components/Plant";
import { Site } from "@/components/Site";

const dir = "assets/img/projects/casein/";

export default function Page() {
  return (
    <Site
      title="Casein Plant Manufacturer | Wet Casein Line, Ring Dryer | Tavron Engineers"
      description="Wet casein lines for 5,000 to 50,000 LPH of skim milk, with inline heating and chemical dosing, decanters, ring dryers and whey filtration."
      path="Casine.html"
      image="assets/img/projects/casein/wet-casein-line.jpg"
      wa="to discuss a casein plant"
    >
      <Plant
        crumb="Casein"
        title="Casein plants"
        intro="Wet casein lines for 5,000 to 50,000 LPH of skim milk: inline heating and chemical dosing for coagulation, decanters and ring dryers, with whey filtration, built by Tavron Engineers, Chennai."
        product="Skim milk and casein"
        input="Skim milk in"
        output="Casein out"
        stations={[
          { kind: "tubular", part: 1, name: "Heating and\ndosing", steam: true },
          { kind: "decanter", part: 2, name: "Decanters" },
          { kind: "ringdryer", part: 3, name: "Ring dryer" },
        ]}
        parts={[
          { name: "Inline heating and dosing", spec: "Inline heating and chemical dosing for coagulation; 5,000 to 50,000 LPH of skim milk" },
          { name: "Decanters", spec: "Separate the coagulated casein from the whey" },
          { name: "Ring dryer", spec: "From 150 kg/hr water evaporation; balanced disintegrator for smooth running; manifold for recycling; SS 304 / SS 316" },
          { name: "Whey filtration", href: "whey.html", spec: "Micro, nano, ultra and reverse osmosis" },
          { name: "Falling film evaporator", href: "evaporators.html", spec: "Single or multiple effect" },
          common.spray,
          { ...common.cip, spec: "CIP for the whole line" },
        ]}
        cip={7}
        sheetTitle="Casein plant"
        facts={[
          ["Capacity", "5,000 to 50,000 LPH"],
          ["Coagulation", "Inline heating and dosing"],
          ["Drying", "Ring dryer, from 150 kg/hr"],
          ["Construction", "SS 304 / SS 316"],
        ]}
        sections={[
          {
            title: "The whey, too",
            aside: "The whey from the decanters goes on to filtration, evaporation and drying (items 4 to 6).",
            rows: [
              ["Whey filtration", "Micro, nano, ultra and reverse osmosis."],
              ["Evaporation and drying", <>
                <p>A falling film evaporator, then a spray dryer from 5 to 1,500 kg/hr water evaporation.</p>
                <p><a href="whey.html">Whey processing plants</a></p>
              </>],
            ],
          },
        ]}
        built={[
          { img: [`${dir}wet-casein-line.jpg`, 600, 338, "Wet casein line with holding tubes and tanks"], name: "Wet casein line", note: "Item 1" },
          { img: [`${dir}Decanters.jpg`, 690, 475, "Decanters in a casein plant"], name: "Decanters", note: "Item 2" },
          { img: [`${dir}RingDryer.jpg`, 655, 489, "Ring dryer"], name: "Ring dryer", note: "Item 3" },
          { img: [`${dir}Whey-Filtration-System.jpg`, 750, 517, "Whey filtration system"], name: "Whey filtration", note: "Item 4" },
          { img: ["assets/img/projects/whey/falling-film-evaporator.jpg", 704, 355, "Falling film evaporator"], name: "Falling film evaporator", note: "Item 5" },
          { img: photos.spray, name: "Spray dryer", note: "Item 6" },
        ]}
        close={{
          title: "Planning a casein plant?",
          needs: ["How much skim milk a day, in litres", "What you'd like to do with the whey", "The site: building, space and utilities"],
          files: [
            ["Casein & whey plant brochure", "downloads/CASEIN-WHEY-PLANT.pdf", "603 KB"],
            ["Whey processing plants", "whey.html"],
            ["Milk powder plants", "milkpowder.html"],
          ],
        }}
        wa="to discuss a casein plant"
      />
    </Site>
  );
}
