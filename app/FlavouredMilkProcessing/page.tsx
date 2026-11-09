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
        intro="From 500 litres a day to the capacity you need: batch or HTST processing, with retort sterilisation for glass or PET bottles or aseptic packing for long shelf life."
        product="Milk"
        input="Milk in"
        output="Bottles to the store"
        stations={[
          { kind: "tank", part: 1, name: "Mixing tank", zone: "Mixing" },
          { kind: "pump", part: 2, name: "Pump" },
          { kind: "htst", part: 3, name: "HTST pasteurisation", steam: true, chill: true, zone: "Pasteurisation" },
          { kind: "filler", part: 4, name: "Bottle filling", count: 3, zone: "Filling" },
          { kind: "sterilizer", part: 5, name: "Bottle sterilizer", steam: true, zone: "Retort" },
        ]}
        parts={[
          { name: "Mixing tank", href: "tanks.html", spec: "SS 304 / SS 316, PUF insulated, with geared agitator; 2,000 to 10,000 L" },
          common.pumps,
          { name: "HTST pasteurizer", href: "pasteurisers.html", spec: "50 LPH to 30,000 LPH; plate heat exchanger with SS 304 / SS 316 plates and glue-free NBR / EPDM gaskets; manual or automatic" },
          { name: "Bottle filling", spec: "Glass or PET bottles, integrated with the line" },
          { name: "Bottle sterilizer", href: "bsterilizer.html", spec: "600 to 3,000 bottles a batch; pressurised hot water; PLC control" },
          { name: "Multi-purpose vat", href: "KhovaProcessing.html", spec: "For small plants, in place of items 1 and 3: LPG or diesel fired, from 60 L" },
          { ...common.cip, spec: "Single or multiple circuits, PLC with SCADA" },
          { name: "Controls", href: "automation.html", spec: "PLC and HMI panel; flow-meter control of water recirculation; PID steam control valves" },
        ]}
        cip={7}
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
          { img: [`${dir}Multi%20Purpose%20Vat.jpg`, 367, 680, "Fired multi-purpose vat"], name: "Multi-purpose vat", note: "Item 6, for small plants" },
          { img: [`${dir}flamilkpro3b.jpg`, 700, 773, "Plate heat exchanger in a flavoured milk plant"], name: "Plate heat exchanger", note: "Inside item 3" },
          { img: [`${dir}sterlizer.png`, 301, 327, "Bottle sterilizer"], name: "Bottle sterilizer", note: "Item 5" },
          { img: [`${dir}Delta%20HMI%20Screen.jpg`, 368, 406, "PLC and HMI control panel screen"], name: "Controls", note: "Item 8" },
          { img: [`${dir}flamilkpro2b.jpg`, 700, 394, "CIP system in a flavoured milk plant"], name: "CIP unit", note: "Item 7" },
          { img: [`${dir}flamilkpro5b.jpg`, 700, 525, "HTST pasteurizer skid in a flavoured milk plant"], name: "HTST pasteurizer", note: "Item 3" },
          { img: photos.pumps, name: "SS centrifugal pumps", note: "Item 2" },
        ]}
        faq={[
          ["What's the smallest flavoured milk plant you build?", "From 500 litres a day, up to the capacity you need."],
          ["Batch or HTST?", "Small plants heat the milk in a multi-purpose vat, fired by LPG or diesel; larger ones use an HTST pasteurizer from 50 to 30,000 litres an hour."],
          ["Retort or aseptic?", "Retort sterilises filled glass or PET bottles in a steam and water spray sterilizer, 600 to 3,000 bottles a batch. Aseptic processing suits long shelf-life packs."],
          ["How is the sterilizer controlled?", "PLC and HMI, with flow-meter control of the water recirculation and PID steam control valves."],
          ["What is the plant made of?", "SS 304 and SS 316, to a hygienic design, and CIP cleanable."],
          ["What do you need from me for a quote?", "How much milk a day, in litres; your packs, glass or PET bottles, or aseptic; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
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
