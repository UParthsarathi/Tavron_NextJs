import { common, Plant, photos } from "@/components/Plant";
import { Site } from "@/components/Site";

const dir = "assets/img/projects/cheese-processing/";

export default function Page() {
  return (
    <Site
      title="Cheese Plant Manufacturer | Cheese Vat, Mozzarella Line | Tavron Engineers"
      description="Processed cheese and mozzarella lines: HTST pasteurisation, cheese vats, vacuum cheese cookers, presses, cold store and whey processing."
      path="CheeseProcessing.html"
      image="assets/img/projects/cheese-processing/Cheese-VAT.jpg"
      active="menu_cheese"
      wa="to discuss a cheese plant"
    >
      <Plant
        crumb="Cheese"
        title="Cheese plants"
        intro="Processed cheese and mozzarella lines: pasteurisation, cheese vats, cheese cookers working under vacuum, presses and cold storage, with whey collection and processing."
        product="Milk, cheese and whey"
        input="Milk in"
        output="Cheese out"
        stations={[
          { kind: "htst", part: 1, name: "HTST pasteurisation", steam: true, chill: true, zone: "Pasteurisation" },
          { kind: "vat", part: 2, name: "Cheese vats", count: 2, zone: "Cheese making" },
          { kind: "press", part: 3, name: "Press", zone: "Pressing" },
          { kind: "vat", part: 4, name: "Cheese cooker", zone: "Cooking" },
          { kind: "coldstore", part: 5, name: "Cold store", zone: "Storage" },
        ]}
        then={{
          from: 2,
          output: "Whey powder, WPC or lactose",
          stations: [
            { kind: "tank", part: 6, name: "Whey collection", count: 2, zone: "Whey" },
            { kind: "membrane", part: 7, name: "Membrane\nfiltration" },
            { kind: "evaporator", part: 8, name: "Falling film\nevaporator", steam: true },
            { kind: "dryer", part: 9, name: "Spray dryer" },
          ],
        }}
        parts={[
          { name: "HTST pasteurizer", href: "pasteurisers.html", spec: "50 LPH to 30,000 LPH; manual or automatic; skid-mounted or floor-mounted" },
          { name: "Cheese vat", spec: "Hygienic design with cutting system and reduction gearbox" },
          { name: "Press", spec: "Pneumatic, single or multi-cylinder; adjustable stroke; SS 304 / SS 316" },
          { name: "Cheese cooker", spec: "Works under vacuum; reputed-make gearbox and motor; PLC optional" },
          { name: "Cold store", href: "RefrigerationEquipments.html", spec: "Stores product below the outside temperature" },
          { name: "Whey collection tank", href: "tanks.html", spec: "PUF insulated, spray ball for CIP; 2,000, 3,000, 5,000 and 10,000 L" },
          { name: "Membrane filtration", href: "whey.html", spec: "Micro, nano, ultra and reverse osmosis, for DM whey powder, whey protein concentrate and lactose" },
          { name: "Falling film evaporator", href: "evaporators.html", spec: "Single or multiple effect" },
          common.spray,
          { ...common.cip, spec: "Single or multiple circuits; automatic or semi-automatic; PLC with SCADA" },
        ]}
        cip={10}
        sheetTitle="Cheese plant"
        facts={[
          ["Lines", "Processed cheese, mozzarella"],
          ["Cheese cooker", "Works under vacuum"],
          ["Whey", "Powder, WPC, lactose"],
          ["Construction", "SS 304 / SS 316"],
        ]}
        sections={[
          {
            title: "The whey, used",
            aside: "Whey from the vats is collected and can go on to powder, WPC or lactose (items 6 to 9).",
            rows: [
              ["Whey collection", "PUF-insulated tanks with a spray ball for CIP, from 2,000 L to 10,000 L."],
              ["Whey processing", <>
                <p>Lines for DM whey powder, whey protein concentrate and lactose.</p>
                <p><a href="whey.html">Whey processing plants</a></p>
              </>],
              ["Spray dryer", "5 to 1,500 kg/hr water evaporation; rotary atomiser, nozzle or two-fluid; second- and third-stage fluid bed drying."],
            ],
          },
        ]}
        built={[
          { img: [`${dir}Cheese-VAT.jpg`, 500, 553, "Open cheese vat with cutting frame"], name: "Cheese vat", note: "Item 2" },
          { img: [`${dir}chees-press.jpg`, 500, 327, "Pneumatic cheese press"], name: "Press", note: "Item 3" },
          { img: [`${dir}Cheese-Cooker.jpg`, 483, 517, "Cheese cooker with gearbox and motor"], name: "Cheese cooker", note: "Item 4" },
          { img: [`${dir}Cold-Store-Room.jpg`, 657, 491, "Cold store room"], name: "Cold store", note: "Item 5" },
          { img: [`${dir}WheyCollectionTank.jpg`, 420, 594, "Insulated whey collection tank"], name: "Whey collection tank", note: "Item 6" },
          { img: [`${dir}WheyProcessingLine.jpg`, 500, 345, "Whey processing line"], name: "Whey processing line", note: "Items 7 to 9" },
          { img: photos.htst, name: "HTST pasteurizer", note: "Item 1" },
          { img: photos.cip, name: "CIP unit", note: "Item 10" },
        ]}
        faq={[
          ["Which cheeses can the plant make?", "We build processed cheese and mozzarella lines."],
          ["What does the cheese vat include?", "A hygienic design with a cutting system, a reputed-make reduction gearbox and motor, sensors and control valves. PLC control is optional."],
          ["What is the cheese cooker?", "A cooker that works under vacuum, with a reputed-make gearbox and motor, sensors and control valves. PLC control is optional."],
          ["What can I do with the whey?", "Collect it in insulated tanks of 2,000 to 10,000 L and take it on to DM whey powder, whey protein concentrate or lactose, through membrane filtration, evaporation and spray drying."],
          ["What pasteurizer sizes do you build?", "From 50 to 30,000 litres an hour, manual or automatic, skid-mounted or floor-mounted."],
          ["What do you need from me for a quote?", "How much milk a day, in litres; the cheese you make; and what you'd like to do with the whey. We come back with a scheme and a budget."],
        ]}
        close={{
          title: "Planning a cheese plant?",
          needs: ["How much milk a day, in litres", "The cheese you make: processed, mozzarella or other", "What you'd like to do with the whey"],
          files: [
            ["Cheese plant brochure", "downloads/Cheese%20Plant.pdf", "1.1 MB"],
            ["Whey processing plants", "whey.html"],
            ["Paneer plants", "PaneerProcessing.html"],
          ],
        }}
        wa="to discuss a cheese plant"
      />
    </Site>
  );
}
