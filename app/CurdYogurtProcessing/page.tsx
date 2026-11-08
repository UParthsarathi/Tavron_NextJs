import { common, Plant, photos } from "@/components/Plant";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Curd & Yogurt Plant Manufacturer | Turnkey Dairy Plants | Tavron Engineers"}
      description="Curd and yogurt plants with HTST pasteurizers, insulated process tanks, plate heat exchangers, sanitary pumps and CIP, from Tavron Engineers, Chennai."
      path="CurdYogurtProcessing.html"
      image="assets/img/projects/MilkProcessing/milkpro7b.jpg"
      active="menu_curdandyogurt"
      wa="to discuss a curd and yogurt plant"
    >
      <Plant
        crumb="Curd & yogurt"
        title="Curd and yogurt plants"
        intro="From milk to packing: HTST pasteurisation, insulated process tanks, plate heat exchangers, sanitary pumps and CIP, built into one plant by Tavron Engineers, Chennai."
        product="Milk"
        input="Milk in"
        output="To packing"
        stations={[
          { kind: "pump", part: 3, name: "Pump" },
          { kind: "htst", part: 1, name: "HTST pasteurisation", steam: true, chill: true },
          { kind: "tank", part: 2, name: "Process tanks" },
          { kind: "pump", part: 3, name: "Pump" },
        ]}
        parts={[
          { name: "HTST pasteurizer", href: "pasteurisers.html", spec: "50 LPH to 30,000 LPH; plate heat exchanger with SS 304 / SS 316 plates and glue-free NBR / EPDM gaskets" },
          { name: "Process tanks", href: "tanks.html", spec: "2,000 L to 10,000 L, PUF insulated, SS 304 / SS 316; spray ball for CIP, geared agitator, temperature transmitter, hygienic valves; level transmitter optional" },
          { ...common.pumps, spec: "SS centrifugal, 500 to 1,00,000 LPH, head up to 60 MWC, open impeller for viscous products" },
          { ...common.cip, spec: "Single or multiple circuits, PLC with SCADA" },
        ]}
        cip={4}
        sheetTitle="Curd and yogurt plant"
        facts={[
          ["Pasteurisation", "HTST, 50 to 30,000 LPH"],
          ["Process tanks", "2,000 to 10,000 L"],
          ["Construction", "SS 304 / SS 316"],
          ["Cleaning", "CIP, PLC with SCADA"],
        ]}
        built={[
          { img: photos.htst, name: "HTST pasteurizer", note: "Item 1" },
          { img: photos.tank, name: "Insulated process tank", note: "Item 2" },
          { img: photos.phe, name: "Plate heat exchanger", item: 1, note: <>{"The heart of item 1. "}<a href="plateheat.html">Plate heat exchangers</a></> },
          { img: photos.pumps, name: "SS centrifugal pumps", note: "Item 3" },
          { img: photos.cip, name: "CIP unit", note: "Item 4" },
        ]}
        close={{
          title: "Planning a curd and yogurt plant?",
          needs: ["How much milk a day, in litres", "Your products and packs: curd, yogurt or both", "The site: building, space and utilities"],
          files: [
            ["Curd plant brochure", "downloads/Curd.pdf", "973 KB"],
            ["Liquid milk plants", "milkprocessing.html"],
            ["Flavoured milk plants", "FlavouredMilkProcessing.html"],
          ],
        }}
        wa="to discuss a curd and yogurt plant"
      />
    </Site>
  );
}
