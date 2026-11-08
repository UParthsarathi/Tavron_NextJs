import { Plant } from "@/components/Plant";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Liquid Milk Processing Plant Manufacturer | Turnkey Dairy Plants | Tavron Engineers"
      description="Turnkey liquid milk processing plants: insulated storage, HTST pasteurisation from 50 to 30,000 LPH, sanitary pumps, ice water and CIP, designed and commissioned by Tavron."
      ogDescription="Turnkey liquid milk plants: insulated storage, HTST pasteurisation from 50 to 30,000 LPH, sanitary pumps, ice water and CIP."
      path="milkprocessing.html"
      image="assets/img/projects/MilkProcessing/milkpro7b.jpg"
      active="menu_milk"
      wa="to discuss a liquid milk plant"
    >
      <Plant
        crumb="Liquid milk"
        title="Liquid milk processing plants"
        intro="From raw milk storage to packing: tanks, pumps, HTST pasteurisation, ice water and CIP, designed, built and commissioned as one plant by Tavron Engineers, Chennai."
        product="Milk"
        input="Raw milk in"
        output="To packing"
        stations={[
          { kind: "tank", part: 1, name: "Raw milk storage" },
          { kind: "pump", part: 2, name: "Pump" },
          { kind: "htst", part: 3, name: "HTST pasteurisation", steam: true, chill: true },
          { kind: "tank", part: 4, name: "Pasteurised milk storage" },
          { kind: "pump", part: 2, name: "Pump" },
        ]}
        parts={[
          { name: "Raw milk storage", href: "tanks.html", spec: "PUF-insulated SS 304 / SS 316 tanks, 2,000 to 10,000 L, rotary spray ball for CIP" },
          { name: "Pumps", href: "pumps.html", spec: "SS centrifugal, 500 to 1,00,000 LPH, head up to 60 MWC" },
          { name: "HTST pasteurizer", href: "pasteurisers.html", spec: "Plate heat exchanger with regeneration, holding tube and balance tank; at least 74 °C for 20 seconds" },
          { name: "Pasteurised milk storage", href: "tanks.html", spec: "As item 1, with agitator, temperature transmitter and hygienic outlet valves" },
          { name: "Ice bank", href: "RefrigerationEquipments.html", spec: "Freon, for 1,000 to 20,000 LPD; ammonia, for 10,000 to 5,00,000 LPD" },
          { name: "CIP unit", href: "cipsystem.html", spec: "Single or multiple circuits, automatic or semi-automatic" },
        ]}
        iceBank={5}
        cip={6}
        sheetTitle="Liquid milk processing plant"
        facts={[
          ["Pasteurisation", "HTST, 50 to 30,000 LPH"],
          ["Operation", "Manual or automatic"],
          ["Control", "PLC with SCADA"],
          ["Cleaning", "CIP"],
        ]}
        sections={[
          {
            title: "The whole line on one screen",
            aside: "Plants run manually or automatically. Automatic plants use PLC control, with a SCADA screen of the whole line.",
            images: [{ img: ["assets/img/projects/milkprocessing.jpg", 798, 478, "SCADA screen of a milk processing system showing the pasteurizer, tanks and pumps"], caption: "SCADA screen from a Tavron milk processing system. Click to enlarge." }],
          },
          {
            title: "Ice water, sized to the milk",
            aside: "The ice bank stores enough ice to cool the plant's designed milk capacity.",
            rows: [
              ["Freon ice bank", "For 1,000 to 20,000 LPD. R22, R404A or another Freon on request; scroll or reciprocating compressor; mild steel or stainless-steel construction."],
              ["Ammonia ice bank", <>
                <p>For 10,000 to 5,00,000 LPD, and larger on request. Atmospheric, shell-and-tube, plate or evaporative condenser. Return water chiller, falling film chiller and glycol system as options.</p>
                <p><a href="RefrigerationEquipments.html">Refrigeration systems</a></p>
              </>],
            ],
          },
        ]}
        built={[
          { img: ["assets/img/projects/MilkProcessing/milkpro7b.jpg", 700, 525, "Skid-mounted HTST milk pasteurizer with plate heat exchanger"], name: "HTST pasteurizer", note: "Skid-mounted, item 3" },
          { img: ["assets/img/projects/MilkProcessing/milkpro6b.jpg", 500, 707, "Insulated vertical milk tank with top agitator"], name: "Insulated milk tank", note: "Items 1 and 4" },
          { img: ["assets/img/projects/MilkProcessing/milkpro1b.jpg", 700, 791, "Plate heat exchanger on a stainless-steel frame"], name: "Plate heat exchanger", item: 3, note: <>{"The heart of item 3. "}<a href="plateheat.html">Plate heat exchangers</a></> },
          { img: ["assets/img/pumps/pumps1b.jpg", 500, 400, "Stainless-steel centrifugal pumps"], name: "SS centrifugal pumps", note: "Item 2" },
          { img: ["assets/img/projects/MilkProcessing/milkpro2b.jpg", 700, 394, "Skid-mounted CIP system with tanks and control panel"], name: "CIP unit", note: "Item 6" },
          { img: ["assets/img/projects/LiquidEggProcessing/IBT.jpg", 500, 361, "Freon ice bank tank with condensing units"], name: "Freon ice bank", note: "Item 5" },
        ]}
        close={{
          title: "Planning a liquid milk plant?",
          needs: ["How much milk a day, in litres", "Your product mix: milk, curd, flavoured milk, anything else", "The site: building, space and utilities"],
          files: [
            ["Milk plant brochure", "downloads/Milk%20Plant.pdf", "1.8 MB"],
            ["Milk powder plants", "milkpowder.html"],
            ["Curd and yogurt plants", "CurdYogurtProcessing.html"],
          ],
        }}
        wa="to discuss a liquid milk plant"
      />
    </Site>
  );
}
