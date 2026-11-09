import { common, Plant, photos } from "@/components/Plant";
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
        product="Whey"
        input="Whey in"
        output="Powder out"
        stations={[
          { kind: "tank", part: 1, name: "Whey collection", count: 2, zone: "Collection" },
          { kind: "pump", part: 3, name: "Pump" },
          { kind: "membrane", part: 2, name: "Membrane\nfiltration", out: "Permeate", zone: "Filtration" },
          { kind: "pump", part: 3, name: "Pump" },
          { kind: "evaporator", part: 4, name: "Falling film\nevaporator", steam: true, zone: "Evaporation" },
          { kind: "dryer", part: 5, name: "Spray dryer", zone: "Drying" },
        ]}
        parts={[
          { name: "Whey collection tank", href: "tanks.html", spec: "SS 304 / SS 316, PUF insulated; spray ball for CIP; 2,000, 3,000, 5,000 and 10,000 L" },
          { name: "Membrane filtration", spec: "Micro, nano, ultra and reverse osmosis" },
          common.pumps,
          { name: "Falling film evaporator", href: "evaporators.html", spec: "Single or multiple effect" },
          common.spray,
          common.cip,
        ]}
        cip={6}
        sheetTitle="Whey processing plant"
        facts={[
          ["Filtration", "Micro, nano, ultra, RO"],
          ["Products", "DM whey powder, WPC, lactose"],
          ["Evaporation", "Falling film"],
          ["Drying", "5 to 1,500 kg/hr"],
        ]}
        built={[
          { img: ["assets/img/projects/whey/whey-filtration-system.jpeg", 750, 517, "Skid-mounted whey filtration system with membrane housings"], name: "Membrane filtration", note: "Item 2" },
          { img: photos.tank, name: "Whey collection tank", note: "Item 1" },
          { img: ["assets/img/projects/whey/falling-film-evaporator.jpg", 704, 355, "Falling film evaporator"], name: "Falling film evaporator", note: "Item 4" },
          { img: photos.spray, name: "Spray dryer", note: "Item 5" },
          { img: photos.pumps, name: "SS centrifugal pumps", note: "Item 3" },
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
          needs: ["How much whey a day, in litres", "What you want from it: powder, WPC or lactose", "The site: building, space and utilities"],
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
