import { common, Plant } from "@/components/Plant";
import { Site } from "@/components/Site";

const dir = "assets/img/projects/milk-powder-processing/";

export default function Page() {
  return (
    <Site
      title={"Milk Powder Plant Manufacturer | Evaporator & Spray Dryer | Tavron Engineers"}
      description="Milk powder plants with multiple effect evaporators, TVR or MVR, spray dryers to 1,500 kg/hr water evaporation, cyclones and vibro fluid beds."
      path="milkpowder.html"
      image="assets/img/projects/milk-powder-processing/milkpowderpro2b.jpg"
      active="menu_milkpowder"
      wa="to discuss a milk powder plant"
    >
      <Plant
        crumb="Milk powder"
        title="Milk powder plants"
        intro="From milk to powder: storage, multiple effect evaporation, spray drying from 5 to 1,500 kg/hr water evaporation, powder separation and fluid bed finishing, with instrument control throughout, built and commissioned as one plant."
        product="Milk"
        input="Milk in"
        output="Powder to packing"
        stations={[
          { kind: "tank", part: 1, name: "Milk storage", count: 2, zone: "Storage" },
          { kind: "pump", part: 2, name: "Pump" },
          { kind: "evaporator", part: 3, name: "Multiple effect\nevaporator", steam: true, zone: "Evaporation" },
          { kind: "pump", part: 2, name: "Pump", zone: "Drying" },
          { kind: "dryer", part: 4, name: "Spray dryer" },
          { kind: "fluidbed", part: 5, name: "Vibro fluid bed" },
        ]}
        parts={[
          { name: "Milk storage", href: "tanks.html", spec: "PUF-insulated SS 304 / SS 316 tanks, rotary spray ball for CIP" },
          common.pumps,
          { name: "Multiple effect evaporator", href: "evaporators.html", spec: "Falling film, rising film or forced circulation, or combined; TVR, MVR optional; calandria tubes to A 319 or ASTM A 249" },
          { name: "Spray dryer", href: "spray.html", spec: "5 to 1,500 kg/hr water evaporation; rotary atomiser, nozzle or two-fluid; single or multiple cyclones, wet scrubber and bag filters" },
          { name: "Vibro fluid bed", href: "spray.html", spec: "SS 304 / SS 316, spring-mounted SS or MS legs, easy to open for product inspection" },
          common.cip,
        ]}
        cip={6}
        sheetTitle="Milk powder plant"
        facts={[
          ["Evaporation", "Multiple effect, TVR or MVR"],
          ["Drying", "5 to 1,500 kg/hr"],
          ["Powder separation", "Cyclones, scrubber, bag filters"],
          ["Construction", "SS 304 / SS 316"],
        ]}
        sections={[
          {
            title: "The plant on screen",
            aside: "Evaporator and spray dryer sections run from SCADA, with field-mounted control valves holding temperature and pressure.",
            images: [
              { img: ["assets/img/projects/evaporatorplant.jpg", 798, 478, "SCADA screen of an evaporator plant"], caption: "Evaporator plant SCADA." },
              { img: ["assets/img/projects/spraydryerplant.jpg", 798, 478, "SCADA screen of a spray dryer plant"], caption: "Spray dryer plant SCADA." },
            ],
          },
          {
            title: "Evaporation, built for food",
            aside: "The evaporator does most of the water removal, so it's designed for the product and for steam economy.",
            rows: [
              ["Calandria", "Tubes to A 319 or ASTM A 249; shell in SS 304, SS 316 or carbon steel. Single-pass or multi-pass, multi-pass for the food industry to avoid contamination, designed for uniform wetting."],
              ["Pre-heaters and separator", "Straight-tube pre-heaters heated by calandria vapour; a vapour separator designed to avoid carry-over."],
              ["Thermal vapour recompressor", "Single or multiple nozzles, in SS 304, SS 316 or carbon steel, for optimum steam consumption."],
              ["Lab model spray dryer", <>
                <p>2 to 25 kg/hr water evaporation, for R&amp;D and education, with a PLC option.</p>
                <p><a href="spray.html">Spray dryers</a></p>
              </>],
            ],
          },
        ]}
        built={[
          { img: [`${dir}triple-effect-evaporator.jpg`, 207, 282, "Triple effect evaporator with its columns and piping"], name: "Triple effect evaporator", note: "Item 3" },
          { img: [`${dir}multi-pass-calindria.jpg`, 253, 152, "Multi-pass calandria tube sheet"], name: "Calandria", note: "Inside item 3" },
          { img: [`${dir}thermal-vapour-re-compressor.jpg`, 250, 166, "Thermal vapour recompressor"], name: "Thermal vapour recompressor", note: "Part of item 3" },
          { img: [`${dir}spray-dryer.jpg`, 214, 282, "Spray dryer drying chamber"], name: "Spray dryer", note: "Item 4" },
          { img: [`${dir}efficient-cyclone-system.jpg`, 251, 184, "Stainless-steel cyclone and ducting"], name: "Cyclone system", note: "Part of item 4" },
          { img: [`${dir}vibro-fluid-bed.jpg`, 258, 184, "Vibro fluid bed below a spray dryer"], name: "Vibro fluid bed", note: "Item 5" },
          { img: [`${dir}structural-mounted-evaporator.jpg`, 253, 170, "Structure-mounted evaporator"], name: "Structure-mounted evaporator", note: "For industrial duty" },
          { img: [`${dir}Lab-Model-Spray-Dryer.jpg`, 400, 451, "Lab model spray dryer"], name: "Lab model spray dryer", note: "For R&D" },
        ]}
        faq={[
          ["What spray dryer capacities do you build?", "From 5 to 1,500 kg/hr water evaporation, with a rotary atomiser, nozzles or two-fluid atomisation."],
          ["Which evaporator does a milk powder plant need?", "A multiple effect evaporator: falling film, rising film, forced circulation, or a combination, with TVR or MVR to keep steam consumption down."],
          ["How is the powder separated from the air?", "Single or multiple cyclones, with a wet scrubber and bag filters as options."],
          ["How is the powder finished?", "Second-stage drying on a vibro fluid bed, or three-stage drying with a stationary fluid bed and a vibro fluid bed."],
          ["How is the dryer heated?", "With hot air from steam, direct or indirect oil firing, or thermic fluid."],
          ["Do you build lab spray dryers?", "Yes: 2 to 25 kg/hr water evaporation, for R&D and education, with a PLC option."],
          ["What do you need from me for a quote?", "How much milk a day, in litres; the powder you want to make; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
        ]}
        close={{
          title: "Planning a milk powder plant?",
          needs: ["How much milk a day, in litres", "The powder you want to make", "The site: building, space and utilities"],
          files: [
            ["Milk powder plant brochure", "downloads/Milk%20Powder%20Plant.pdf", "787 KB"],
            ["Evaporator & spray dryer", "downloads/EvaporatorSprayDryer.pdf", "11.1 MB"],
            ["Whey processing plants", "whey.html"],
          ],
        }}
        wa="to discuss a milk powder plant"
      />
    </Site>
  );
}
