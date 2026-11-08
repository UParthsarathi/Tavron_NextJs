import { Plant, photos } from "@/components/Plant";
import { Site } from "@/components/Site";

const dir = "assets/img/projects/IceCreamProcessing/";

export default function Page() {
  return (
    <Site
      title="Ice Cream Plant Manufacturer | Mix Plant, Continuous Freezer | Tavron Engineers"
      description="Ice cream plants: mix preparation to 5,000 LPH, homogenisers, HTST, ageing tanks, continuous freezers, filling and cold stores to −25 °C, batch or automatic."
      path="IcecreamProcessing.html"
      image="assets/img/projects/IceCreamProcessing/Homoginizer.jpg"
      active="menu_icecream"
      wa="to discuss an ice cream plant"
    >
      <Plant
        crumb="Ice cream"
        title="Ice cream plants"
        intro="From mix to cold store: mix preparation, pasteurisation, homogenisers, ageing tanks, continuous freezers and filling, batch or fully automatic, built by Tavron Engineers, Chennai."
        product="Ice cream mix"
        input="Mix in"
        output="To filling and cold store"
        stations={[
          { kind: "vat", part: 1, name: "Mix preparation" },
          { kind: "htst", part: 2, name: "HTST pasteurisation", steam: true, chill: true },
          { kind: "homogeniser", part: 3, name: "Homogeniser" },
          { kind: "vat", part: 4, name: "Ageing tanks", chill: true },
          { kind: "freezer", part: 5, name: "Continuous\nfreezer" },
        ]}
        parts={[
          { name: "Mix preparation", spec: "To 5,000 LPH; automatic or semi-automatic; agitator with reputed-make motor and gearbox; PLC and SCADA" },
          { name: "HTST pasteurizer", href: "pasteurisers.html", spec: "Skid-mounted, ready to use; automatic steam control; PID or PLC" },
          { name: "Homogeniser", spec: "Manual or hydraulic pressure setting; CIP cleanable; adjustable ball feet" },
          { name: "Ageing tanks", spec: "Laser-welded dimple jacket for ice water or refrigerant; hygienic agitator; CIP cleanable, ball feet for complete drainage" },
          { name: "Continuous freezer", spec: "Adjustable for maximum overrun; PLC and HMI; hermetic or semi-hermetic compressor; water-cooled condenser" },
          { name: "CIP unit", href: "cipsystem.html", spec: "Pneumatic butterfly or seat valves; automatic CIP solution dosing; PLC and HMI, or SCADA" },
        ]}
        cip={6}
        sheetTitle="Ice cream plant"
        facts={[
          ["Mix preparation", "To 5,000 LPH"],
          ["Operation", "Batch or fully automatic"],
          ["Cold store", "Down to −25 °C"],
          ["Control", "PLC and SCADA"],
        ]}
        sections={[
          {
            title: "Lines to suit the product",
            aside: "From a mini unit on a skid to a fully automatic line, with steam and ice water services.",
            rows: [
              ["Lines", "Batch lines from 150 L, fully automatic lines, and mini units on a skid."],
              ["Sticks, cups and cones", "Batch and automatic stick lines, and cup and cone filling machines, with a fruit feeder."],
              ["Cold store", "Built to order, down to −25 °C."],
              ["Softy ice cream machine", "SS 304; single or three flavours; R22 or R404A refrigerant; quiet in operation."],
            ],
          },
        ]}
        built={[
          { img: [`${dir}MixPreparationSection.jpg`, 246, 242, "Ice cream mix preparation section"], name: "Mix preparation", note: "Item 1" },
          { img: photos.htst, name: "HTST pasteurizer", note: "Item 2" },
          { img: [`${dir}Homoginizer.jpg`, 500, 500, "Homogeniser with pressure gauge and stainless-steel cabinet"], name: "Homogeniser", note: "Item 3" },
          { img: [`${dir}AgingTank.jpg`, 230, 269, "Jacketed ageing tank with agitator"], name: "Ageing tank", note: "Item 4" },
          { img: [`${dir}PlateHeatExchanger.jpg`, 225, 222, "Plate heat exchanger with stainless-steel-clad frame"], name: "Plate heat exchanger", item: 2, note: <>{"Inside item 2. "}<a href="plateheat.html">Plate heat exchangers</a></> },
          { img: photos.cip, name: "CIP unit", note: "Item 6" },
        ]}
        close={{
          title: "Planning an ice cream plant?",
          needs: ["How much mix a day, in litres", "Your products: cups, cones, sticks or bulk", "The site: building, space and utilities"],
          files: [
            ["Ice cream plant brochure", "downloads/Ice%20Cream%20Plant.pdf", "754 KB"],
            ["Softy ice cream machine", "downloads/Ice%20cream%20Softy.pdf", "390 KB"],
            ["Flavoured milk plants", "FlavouredMilkProcessing.html"],
          ],
        }}
        wa="to discuss an ice cream plant"
      />
    </Site>
  );
}
