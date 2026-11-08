import { common, Plant, photos } from "@/components/Plant";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Liquid Egg Processing Plant Manufacturer | Tavron Engineers"
      description="Liquid egg lines with tubular pasteurisation from 250 LPH, insulated tanks, CIP, Freon ice bank (1,000 to 20,000 LPD) and spray drying."
      path="LiquidEggProcessing.html"
      image="assets/img/projects/LiquidEggProcessing/TubularPasteuriser.jpg"
      wa="to discuss a liquid egg plant"
    >
      <Plant
        crumb="Liquid egg"
        title="Liquid egg plants"
        intro="From egg liquid to chilled liquid egg or powder: insulated tanks, tubular pasteurisation from 250 LPH, ice water for 1,000 to 20,000 LPD, spray drying and CIP, built by Tavron Engineers, Chennai."
        product="Egg liquid"
        input="Egg liquid in"
        output="Liquid egg or powder out"
        stations={[
          { kind: "tank", part: 1, name: "Process tank" },
          { kind: "pump", part: 2, name: "Pump" },
          { kind: "tubular", part: 3, name: "Tubular\npasteuriser", steam: true },
          { kind: "tank", part: 1, name: "Chilled storage", chill: true },
          { kind: "dryer", part: 4, name: "Spray dryer" },
        ]}
        parts={[
          { name: "Insulated process tanks", href: "tanks.html", spec: "SS 304 / SS 316, PUF insulated, 2,000 to 10,000 L; rotary spray ball for CIP" },
          common.pumps,
          { name: "Tubular pasteuriser", href: "tubularheat.html", spec: "From 250 LPH; automatic steam control, PID or PLC; on a skid" },
          { ...common.spray, spec: "5 to 1,500 kg/hr water evaporation" },
          { name: "Freon ice bank (IBT)", href: "RefrigerationEquipments.html", spec: "For 1,000 to 20,000 LPD; R22, R404A or other Freon; scroll or reciprocating compressor; PLC-based controls optional" },
          { ...common.cip, spec: "Single or multiple circuits; automatic or semi-automatic; PLC with SCADA" },
        ]}
        iceBank={5}
        cip={6}
        sheetTitle="Liquid egg plant"
        facts={[
          ["Pasteurisation", "Tubular, from 250 LPH"],
          ["Ice water", "1,000 to 20,000 LPD"],
          ["Drying", "5 to 1,500 kg/hr"],
          ["Construction", "SS 304 / SS 316"],
        ]}
        built={[
          { img: ["assets/img/projects/LiquidEggProcessing/TubularPasteuriser.jpg", 600, 337, "Tubular pasteurizer for liquid egg"], name: "Tubular pasteuriser", note: "Item 3" },
          { img: ["assets/img/projects/LiquidEggProcessing/IBT.jpg", 500, 361, "Freon ice bank tank with condensing units"], name: "Freon ice bank", note: "Item 5" },
          { img: photos.tank, name: "Insulated process tank", note: "Item 1" },
          { img: photos.spray, name: "Spray dryer", note: "Item 4" },
          { img: photos.cip, name: "CIP unit", note: "Item 6" },
        ]}
        close={{
          title: "Planning a liquid egg plant?",
          needs: ["How much egg liquid a day, in litres", "Liquid egg, egg powder, or both", "The site: building, space and utilities"],
          files: [
            ["Liquid egg plant brochure", "downloads/Egg%20Liquid.pdf", "769 KB"],
            ["Tubular heat exchangers", "tubularheat.html"],
            ["Food & beverage equipment", "food-beverages.html"],
          ],
        }}
        wa="to discuss a liquid egg plant"
      />
    </Site>
  );
}
