import { Plant } from "@/components/Plant";
import { Site } from "@/components/Site";

const dir = "assets/img/projects/paneer-processing/";

export default function Page() {
  return (
    <Site
      title="Paneer Plant Manufacturer | Paneer Press, Coagulation Tank | Tavron Engineers"
      description="Paneer lines from milk heating (4 to 90 °C) to coagulation tanks, pneumatic paneer presses, hoops, cooling tanks and cold store, in SS 304 / SS 316."
      path="PaneerProcessing.html"
      image="assets/img/projects/paneer-processing/MILK-HEATING-SYSTEM.jpg"
      active="menu_paneer"
      wa="to discuss a paneer plant"
    >
      <Plant
        crumb="Paneer"
        title="Paneer plants"
        intro="From milk heating to cold store: a milk heating skid, coagulation tanks, pneumatic presses with hoops, cooling tanks and a cold store, in SS 304 / SS 316."
        product="Milk and paneer"
        input="Milk in"
        output="Paneer out"
        stations={[
          { kind: "phe", part: 1, name: "Milk heating", steam: true, zone: "Heating" },
          { kind: "vat", part: 2, name: "Coagulation\ntanks", count: 2, out: "Whey", zone: "Coagulation" },
          { kind: "press", part: 3, name: "Paneer presses", count: 2, zone: "Pressing" },
          { kind: "tank", part: 4, name: "Cooling tank", chill: true, zone: "Cooling" },
          { kind: "coldstore", part: 5, name: "Cold store", zone: "Storage" },
        ]}
        parts={[
          { name: "Milk heating system", href: "plateheat.html", spec: "4 to 90 °C on a skid, with hygienic plate heat exchanger and food-grade gaskets; automatic steam control valve, flow diversion valve and level controls; PLC or PID" },
          { name: "Coagulation tanks", spec: "Laser-welded dimple jacket for the process temperatures; agitator with reputed-make gearbox; outlet for draining the coagulated mass" },
          { name: "Paneer press and hoops", spec: "Pneumatic, single or multi-cylinder, adjustable stroke; SS 304 / SS 316 hoops with holes to drain whey" },
          { name: "Cooling tanks", spec: "PUF insulated; a plate heat exchanger holds the temperature" },
          { name: "Cold store", href: "RefrigerationEquipments.html", spec: "PUF insulated; cooling and condensing units of reputed brands; even temperature throughout; PLC control optional" },
        ]}
        sheetTitle="Paneer plant"
        facts={[
          ["Milk heating", "4 to 90 °C"],
          ["Pressing", "Pneumatic"],
          ["Operation", "PLC or PID"],
          ["Construction", "SS 304 / SS 316"],
        ]}
        built={[
          { img: [`${dir}MILK-HEATING-SYSTEM.jpg`, 449, 317, "Skid-mounted milk heating system with plate heat exchanger and balance tank"], name: "Milk heating system", note: "Item 1" },
          { img: [`${dir}PANEER-COAGULATION-TANK.jpg`, 329, 202, "Paneer coagulation tanks"], name: "Coagulation tanks", note: "Item 2" },
          { img: [`${dir}PANEER-PRESS.jpg`, 500, 536, "Pneumatic paneer press"], name: "Paneer press", note: "Item 3" },
          { img: [`${dir}Paneer-Hoops.jpg`, 500, 375, "Stainless-steel paneer hoops"], name: "Paneer hoops", note: "With item 3" },
          { img: [`${dir}PANEER-COOLING-TANK.jpg`, 499, 338, "Paneer cooling tank"], name: "Cooling tank", note: "Item 4" },
          { img: [`${dir}PANEER-COLD-STORE.jpg`, 304, 287, "Paneer cold store"], name: "Cold store", note: "Item 5" },
        ]}
        faq={[
          ["How is the milk heated?", "On a skid, from 4 to 90 °C, through a hygienic plate heat exchanger with food-grade gaskets. An automatic steam control valve, flow diversion valve and level controls run it, on PLC or PID."],
          ["How is the coagulation temperature held?", "The coagulation tanks have a laser-welded dimple jacket and an agitator on a reputed-make gearbox, with an outlet that drains the coagulated mass."],
          ["How is the paneer pressed?", "In pneumatic presses, single or multi-cylinder, with an adjustable stroke, in SS 304 / SS 316 hoops with holes to drain the whey."],
          ["How is the paneer cooled and stored?", "In PUF-insulated cooling tanks held at temperature by a plate heat exchanger, then in a PUF-insulated cold store with an even temperature throughout."],
          ["What do you need from me for a quote?", "How much milk a day, in litres; the batch size and how many batches a day; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
        ]}
        close={{
          title: "Planning a paneer plant?",
          needs: ["How much milk a day, in litres", "Batch size, and how many batches a day", "The site: building, space and utilities"],
          files: [
            ["Paneer plant brochure", "downloads/Paneer%20Plant.pdf", "881 KB"],
            ["Liquid milk plants", "milkprocessing.html"],
            ["Cheese plants", "CheeseProcessing.html"],
          ],
        }}
        wa="to discuss a paneer plant"
      />
    </Site>
  );
}
