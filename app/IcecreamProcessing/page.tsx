import { common, Plant, photos } from "@/components/Plant";
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
        intro="From mix to cold store: mix preparation from 150 to 5,000 LPH, pasteurisation, homogenisers, ageing tanks, continuous freezers, filling and hardening, batch or fully automatic."
        product="Ice cream mix"
        input="Ingredients in"
        output="To dispatch"
        stations={[
          { kind: "vat", part: 1, name: "Mix preparation", zone: "Mix" },
          { kind: "pump", part: 2, name: "Pump" },
          { kind: "htst", part: 3, name: "HTST pasteurisation", steam: true, chill: true, zone: "Pasteurisation" },
          { kind: "homogeniser", part: 4, name: "Homogeniser", zone: "Homogenising" },
        ]}
        then={{
          stations: [
            { kind: "vat", part: 5, name: "Ageing tanks", count: 3, chill: true, zone: "Ageing" },
            { kind: "pump", part: 2, name: "Pump" },
            { kind: "freezer", part: 6, name: "Continuous\nfreezer", zone: "Freezing" },
            { kind: "filler", part: 7, name: "Filling", count: 3, zone: "Filling" },
            { kind: "coldstore", part: 8, name: "Hardening and\ncold store", zone: "Hardening" },
          ],
        }}
        parts={[
          { name: "Mix preparation", spec: "150 to 5,000 LPH; automatic or semi-automatic; agitator with reputed-make motor and gearbox; PLC and SCADA" },
          { ...common.pumps, spec: "SS centrifugal, 1,000 to 1,00,000 LPH, open impeller, SMS / DIN fittings" },
          { name: "HTST pasteurizer", href: "pasteurisers.html", spec: "150 to 20,000 LPH; skid-mounted, ready to use; automatic steam control; PID or PLC" },
          { name: "Homogeniser", spec: "100 to 5,000 LPH; manual or hydraulic pressure setting; CIP cleanable; adjustable ball feet" },
          { name: "Ageing tanks", spec: "Laser-welded dimple jacket for ice water or refrigerant; hygienic agitator; CIP cleanable, ball feet for complete drainage" },
          { name: "Continuous freezer", spec: "Adjustable for maximum overrun; PLC and HMI; hermetic or semi-hermetic compressor; water-cooled condenser" },
          { name: "Filling", spec: "Cup and cone filling machines and stick lines, batch or automatic, with a fruit feeder" },
          { name: "Hardening and cold store", href: "RefrigerationEquipments.html", spec: "Built to order, down to −25 °C" },
          { name: "CIP unit", href: "cipsystem.html", spec: "5,000 to 30,000 LPH a circuit; pneumatic butterfly or seat valves; automatic CIP solution dosing; PLC and HMI, or SCADA" },
        ]}
        cip={9}
        sheetTitle="Ice cream plant"
        facts={[
          ["Mix preparation", "150 to 5,000 LPH"],
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
          { img: photos.htst, name: "HTST pasteurizer", note: "Item 3" },
          { img: [`${dir}Homoginizer.jpg`, 500, 500, "Homogeniser with pressure gauge and stainless-steel cabinet"], name: "Homogeniser", note: "Item 4" },
          { img: [`${dir}AgingTank.jpg`, 230, 269, "Jacketed ageing tank with agitator"], name: "Ageing tank", note: "Item 5" },
          { img: [`${dir}PlateHeatExchanger.jpg`, 225, 222, "Plate heat exchanger with stainless-steel-clad frame"], name: "Plate heat exchanger", item: 3, note: <>{"Inside item 3. "}<a href="plateheat.html">Plate heat exchangers</a></> },
          { img: photos.cip, name: "CIP unit", note: "Item 9" },
        ]}
        faq={[
          ["What capacity can the plant make?", "Mix preparation from 150 to 5,000 litres an hour, with pasteurizers from 150 to 20,000 LPH and homogenisers from 100 to 5,000 LPH."],
          ["Batch or automatic?", "Both: batch lines from 150 L, fully automatic lines, and mini units on a skid."],
          ["Can it make cups, cones and sticks?", "Yes. Cup and cone filling machines, and batch and automatic stick lines, with a fruit feeder."],
          ["How are the ageing tanks cooled?", "Through a laser-welded dimple jacket that circulates ice water or refrigerant."],
          ["How cold does the cold store go?", "It's built to order, down to −25 °C."],
          ["Do you make softy machines?", "Yes: in SS 304, single or three flavours, on R22 or R404A."],
          ["What do you need from me for a quote?", "How much mix a day, in litres; your products, cups, cones, sticks or bulk; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
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
