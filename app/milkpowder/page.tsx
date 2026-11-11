import { photos, Plant } from "@/components/Plant";
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
        photo={photos.spray}
        plant={<>
          <p>Milk is held in insulated <a href="tanks.html">storage tanks</a> and concentrated in a <a href="evaporators.html">multiple effect evaporator</a>: falling film, rising film or forced circulation, or a combination, with TVR or MVR as options.</p>
          <p>The concentrate is dried in a <a href="spray.html">spray dryer</a> of 5 to 1,500 kg/hr water evaporation, with a rotary atomiser, nozzle or two-fluid atomisation. Cyclones, a wet scrubber and bag filters take out the powder, and a vibro fluid bed finishes it. A <a href="cipsystem.html">CIP unit</a> cleans the plant.</p>
        </>}
        facts={[
          ["Evaporation", "Multiple effect, TVR or MVR"],
          ["Drying", "5 to 1,500 kg/hr"],
          ["Powder separation", "Cyclones, scrubber, bag filters"],
          ["Construction", "SS 304 / SS 316"],
          ["Control", "SCADA, with field-mounted control valves holding temperature and pressure"],
        ]}
        sections={[
          {
            title: "Evaporation, built for food",
            aside: "The evaporator does most of the water removal, so it's designed for the product and for steam economy.",
            text: <>
              <p>The calandria tubes are to A 319 or ASTM A 249, and the shell is SS 304, SS 316 or carbon steel. Calandrias are single-pass or multi-pass, multi-pass for the food industry to avoid contamination, and designed for uniform wetting.</p>
              <p>Straight-tube pre-heaters are heated by calandria vapour, the vapour separator is designed to avoid carry-over, and a thermal vapour recompressor with single or multiple nozzles keeps steam consumption down.</p>
              <p>For R&amp;D and education, we also build a lab model spray dryer of 2 to 25 kg/hr water evaporation, with a PLC option. <a href="spray.html">Spray dryers</a></p>
            </>,
          },
        ]}
        built={[
          { img: [`${dir}triple-effect-evaporator.jpg`, 207, 282, "Triple effect evaporator with its columns and piping"], name: "Triple effect evaporator" },
          { img: [`${dir}multi-pass-calindria.jpg`, 253, 152, "Multi-pass calandria tube sheet"], name: "Calandria", note: "Inside the evaporator" },
          { img: [`${dir}thermal-vapour-re-compressor.jpg`, 250, 166, "Thermal vapour recompressor"], name: "Thermal vapour recompressor", note: "Part of the evaporator" },
          { img: [`${dir}spray-dryer.jpg`, 214, 282, "Spray dryer drying chamber"], name: "Spray dryer" },
          { img: [`${dir}efficient-cyclone-system.jpg`, 251, 184, "Stainless-steel cyclone and ducting"], name: "Cyclone system", note: "Part of the spray dryer" },
          { img: [`${dir}vibro-fluid-bed.jpg`, 258, 184, "Vibro fluid bed below a spray dryer"], name: "Vibro fluid bed" },
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
          ask: "how much milk you handle a day, the powder you want to make, and your site",
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
