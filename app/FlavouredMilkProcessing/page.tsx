import { common, Plant, photos } from "@/components/Plant";
import { Site } from "@/components/Site";

const dir = "assets/img/projects/FlavouredMilkPro/";

export default function Page() {
  return (
    <Site
      title={"Flavoured Milk Plant Manufacturer | Retort & Aseptic | Tavron Engineers"}
      description="Flavoured milk plants from 500 L a day, batch or HTST, with retort sterilisation for glass or PET bottles or aseptic long shelf-life packing."
      path="FlavouredMilkProcessing.html"
      image="assets/img/projects/FlavouredMilkPro/flamilkpro5b.jpg"
      active="menu_flavouredmilk"
      wa="to discuss a flavoured milk plant"
    >
      <Plant
        crumb="Flavoured milk"
        title="Flavoured milk plants"
        intro="From 500 litres a day to the capacity you need: batch or HTST processing, with retort sterilisation for glass or PET bottles or aseptic packing for long shelf life, built by Tavron Engineers, Chennai."
        product="Milk"
        input="Milk in"
        output="Shelf-stable bottles out"
        stations={[
          { kind: "vat", part: 1, name: "Multi-purpose vat" },
          { kind: "phe", part: 2, name: "Plate heat\nexchanger" },
          { kind: "pump", part: 3, name: "Pump" },
          { kind: "sterilizer", part: 4, name: "Bottle sterilizer", steam: true },
        ]}
        parts={[
          { name: "Multi-purpose vat", href: "KhovaProcessing.html", spec: "LPG or diesel fired, from 60 L; for milk and food heating" },
          { name: "Plate heat exchanger", href: "plateheat.html", spec: "SS 304 / SS 316 plates, glue-free NBR / EPDM gaskets" },
          common.pumps,
          { name: "Bottle sterilizer", href: "bsterilizer.html", spec: "600 to 3,000 bottles a batch; pressurised hot water; PLC control" },
          { ...common.cip, spec: "Single or multiple circuits, PLC with SCADA" },
          { name: "Controls", href: "automation.html", spec: "PLC and HMI panel; flow-meter control of water recirculation; PID steam control valves" },
        ]}
        cip={5}
        sheetTitle="Flavoured milk plant"
        facts={[
          ["Capacity", "From 500 L a day"],
          ["Process", "Batch or HTST"],
          ["Packing", "Retort bottles, or aseptic"],
          ["Automation", "PLC optional"],
        ]}
        sections={[
          {
            title: "Retort or aseptic",
            aside: "Two ways to make flavoured milk last on the shelf.",
            rows: [
              ["Retort", <>
                <p>Filled glass or PET bottles are sterilised in a steam and water spray sterilizer, 600 to 3,000 bottles a batch, under PLC control.</p>
                <p><a href="bsterilizer.html">Bottle sterilizers</a></p>
              </>],
              ["Aseptic", <>
                <p>Aseptic processing for long shelf-life packs.</p>
                <p><a href="downloads/ASEPTIC-PROCESSING.pdf" target="_blank" rel="noopener">Aseptic processing brochure</a></p>
              </>],
              ["Batch or HTST", "Small plants heat milk in a multi-purpose vat; larger ones use an HTST pasteurizer."],
            ],
          },
        ]}
        built={[
          { img: [`${dir}Multi%20Purpose%20Vat.jpg`, 367, 680, "Fired multi-purpose vat"], name: "Multi-purpose vat", note: "Item 1" },
          { img: [`${dir}flamilkpro3b.jpg`, 700, 773, "Plate heat exchanger in a flavoured milk plant"], name: "Plate heat exchanger", note: "Item 2" },
          { img: [`${dir}sterlizer.png`, 301, 327, "Bottle sterilizer"], name: "Bottle sterilizer", note: "Item 4" },
          { img: [`${dir}Delta%20HMI%20Screen.jpg`, 368, 406, "PLC and HMI control panel screen"], name: "Controls", note: "Item 6" },
          { img: [`${dir}flamilkpro2b.jpg`, 700, 394, "CIP system in a flavoured milk plant"], name: "CIP unit", note: "Item 5" },
          { img: [`${dir}flamilkpro5b.jpg`, 700, 525, "HTST pasteurizer skid in a flavoured milk plant"], name: "HTST pasteurizer", note: "For HTST lines" },
          { img: photos.pumps, name: "SS centrifugal pumps", note: "Item 3" },
        ]}
        close={{
          title: "Planning a flavoured milk plant?",
          needs: ["How much milk a day, in litres", "Your packs: glass or PET bottles, or aseptic", "The site: building, space and utilities"],
          files: [
            ["Flavoured milk plant brochure", "downloads/Flavour%20Milk%20Plant.pdf", "572 KB"],
            ["Sterilizer", "downloads/Sterlizer.pdf", "463 KB"],
            ["Liquid milk plants", "milkprocessing.html"],
          ],
        }}
        wa="to discuss a flavoured milk plant"
      />
    </Site>
  );
}
