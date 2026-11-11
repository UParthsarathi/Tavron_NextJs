import { Plant, photos } from "@/components/Plant";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Whey Processing Plant Manufacturer | Whey Powder, WPC | Tavron Engineers"
      description="Whey lines from membrane filtration (micro, nano, ultra, RO) to collection tanks, falling film evaporation and spray drying."
      path="whey.html"
      image="assets/img/projects/whey/whey-filtration-system.jpeg"
      active="menu_wheypowder"
      wa="to discuss a whey plant"
    >
      <Plant
        crumb="Whey"
        title="Whey processing plants"
        intro="From whey to powder: insulated collection tanks, membrane filtration, falling film evaporation and spray drying, for DM whey powder, whey protein concentrate and lactose."
        plant={<>
          <p>Whey is collected in insulated <a href="tanks.html">tanks</a> of 2,000 to 10,000 L and goes through membrane filtration: micro, nano, ultra and reverse osmosis.</p>
          <p>A single or multiple effect <a href="evaporators.html">falling film evaporator</a> concentrates it, and a <a href="spray.html">spray dryer</a> of 5 to 1,500 kg/hr water evaporation dries it, for DM whey powder, whey protein concentrate or lactose. A <a href="cipsystem.html">CIP unit</a> cleans the line.</p>
        </>}
        facts={[
          ["Filtration", "Micro, nano, ultra, RO"],
          ["Products", "DM whey powder, WPC, lactose"],
          ["Evaporation", "Falling film"],
          ["Drying", "5 to 1,500 kg/hr"],
        ]}
        built={[
          { img: ["assets/img/projects/whey/whey-filtration-system.jpeg", 750, 517, "Skid-mounted whey filtration system with membrane housings"], name: "Membrane filtration" },
          { img: photos.tank, name: "Whey collection tank" },
          { img: ["assets/img/projects/whey/falling-film-evaporator.jpg", 704, 355, "Falling film evaporator"], name: "Falling film evaporator" },
          { img: photos.spray, name: "Spray dryer" },
          { img: photos.pumps, name: "SS centrifugal pumps" },
        ]}
        faq={[
          ["What can a whey plant make?", "DM whey powder, whey protein concentrate (WPC) or lactose."],
          ["Which membranes do you use?", "Micro, nano, ultra and reverse osmosis filtration, chosen for the product."],
          ["What sizes are the whey tanks?", "2,000, 3,000, 5,000 and 10,000 L, in SS 304 / SS 316, PUF insulated, with a spray ball for CIP."],
          ["What spray dryer capacity?", "From 5 to 1,500 kg/hr water evaporation."],
          ["Can it take whey from a cheese, paneer or casein plant?", "Yes. We build cheese, paneer and casein plants, and the whey from them can feed this line."],
          ["What do you need from me for a quote?", "How much whey a day, in litres; what you want from it, powder, WPC or lactose; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
        ]}
        close={{
          title: "Planning a whey plant?",
          ask: "how much whey you handle a day, what you want from it (powder, WPC or lactose) and your site",
          files: [
            ["Whey processing brochure", "downloads/whey%20processing.pdf", "571 KB"],
            ["Casein & whey plant", "downloads/CASEIN-WHEY-PLANT.pdf", "603 KB"],
            ["Cheese plants", "CheeseProcessing.html"],
          ],
        }}
        wa="to discuss a whey plant"
      />
    </Site>
  );
}
