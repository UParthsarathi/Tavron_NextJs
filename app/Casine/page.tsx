import { Plant, photos } from "@/components/Plant";
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
        intro="Wet casein lines for 5,000 to 50,000 LPH of skim milk: inline heating and chemical dosing for coagulation, decanters and ring dryers, with whey filtration, evaporation and spray drying."
        plant={<>
          <p>Skim milk, 5,000 to 50,000 litres an hour, is heated inline and dosed for coagulation. Decanters separate the casein from the whey, and a ring dryer, from 150 kg/hr water evaporation, dries it, with a balanced disintegrator for smooth running.</p>
          <p>The whey goes on to <a href="whey.html">membrane filtration</a> (micro, nano, ultra and reverse osmosis), a single or multiple effect <a href="evaporators.html">falling film evaporator</a> and a <a href="spray.html">spray dryer</a> of 5 to 1,500 kg/hr water evaporation.</p>
          <p>A <a href="cipsystem.html">CIP unit</a> cleans the whole line, built in SS 304 or SS 316.</p>
        </>}
        facts={[
          ["Capacity", "5,000 to 50,000 LPH"],
          ["Coagulation", "Inline heating and dosing"],
          ["Drying", "Ring dryer, from 150 kg/hr"],
          ["Construction", "SS 304 / SS 316"],
        ]}
        built={[
          { img: [`${dir}wet-casein-line.jpg`, 600, 338, "Wet casein line with holding tubes and tanks"], name: "Wet casein line" },
          { img: [`${dir}Decanters.jpg`, 690, 475, "Decanters in a casein plant"], name: "Decanters" },
          { img: [`${dir}RingDryer.jpg`, 655, 489, "Ring dryer"], name: "Ring dryer" },
          { img: [`${dir}Whey-Filtration-System.jpg`, 750, 517, "Whey filtration system"], name: "Whey filtration" },
          { img: ["assets/img/projects/whey/falling-film-evaporator.jpg", 704, 355, "Falling film evaporator"], name: "Falling film evaporator" },
          { img: photos.spray, name: "Spray dryer" },
        ]}
        faq={[
          ["What capacity do you build?", "Wet casein lines from 5,000 to 50,000 litres an hour of skim milk."],
          ["How is the milk coagulated?", "Inline: the skim milk is heated and dosed with chemicals as it flows."],
          ["How is the casein dried?", "In a ring dryer from 150 kg/hr water evaporation, with a balanced disintegrator for smooth running and a manifold for recycling."],
          ["What happens to the whey?", "It goes on to membrane filtration (micro, nano, ultra or RO), a falling film evaporator and a spray dryer from 5 to 1,500 kg/hr water evaporation."],
          ["Is the line cleaned in place?", "Yes. The whole line is CIP cleanable."],
          ["What do you need from me for a quote?", "How much skim milk a day, in litres; what you'd like to do with the whey; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
        ]}
        close={{
          title: "Planning a casein plant?",
          ask: "how much skim milk you handle a day, what you'd like to do with the whey, and your site",
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
