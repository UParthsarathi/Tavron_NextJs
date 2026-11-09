import { common, photos, Plant, type Img, type Part } from "@/components/Plant";
import { Site } from "@/components/Site";
import { MilkDrawing } from "./Drawing";

// Every figure here is from Tavron's own brochures and site: the milk plant, refrigeration and tank
// brochures, the dairy page, the About page and the clients page. Nothing is estimated.

// numbered as on the drawing
const parts: Part[] = [
  { name: "Can reception", spec: "Can conveyor, can tipper and dump tank" },
  { name: "Road milk tanker", href: "tanks.html", spec: "Insulated stainless-steel tankers, 5,000 to 20,000 L" },
  common.pumps,
  { name: "Milk chiller", href: "plateheat.html", spec: "Plate heat exchanger; cools the milk as it arrives, with ice water" },
  { name: "Raw milk silos", href: "tanks.html", spec: "PUF-insulated SS 304 / SS 316 tanks and silos, 2,000 to 1,00,000 L, rotary spray ball for CIP" },
  { name: "HTST pasteurizer", href: "pasteurisers.html", spec: "Plate heat exchanger with regeneration, holding tube and balance tank; at least 74 °C for 20 seconds" },
  { name: "Cream separator", spec: "Centrifugal; takes off cream to set the milk's fat" },
  { name: "Homogeniser", spec: "Breaks up the fat so the cream doesn't rise in the pack" },
  { name: "Pasteurised milk tanks", href: "tanks.html", spec: "As item 5, with agitator, temperature transmitter and hygienic outlet valves" },
  { name: "Pouch packing machines", spec: "Form-fill-seal, integrated with the line" },
  { name: "Ice bank", href: "RefrigerationEquipments.html", spec: "Freon, for 1,000 to 20,000 LPD; ammonia, for 10,000 to 5,00,000 LPD" },
  common.cip,
];

/** lines that grow from the same milk: [page, name, what it is, photo] */
const lines: [string, string, string, Img][] = [
  ["CurdYogurtProcessing.html", "Curd and yogurt", "From the same pasteurised milk: insulated process tanks, plate heat exchangers and CIP.", photos.tank],
  ["FlavouredMilkProcessing.html", "Flavoured milk", "From 500 litres a day, batch or HTST, with retort sterilisation for glass or PET bottles or aseptic packing for long shelf life.", ["assets/img/projects/FlavouredMilkPro/flamilkpro5b.jpg", 700, 525, "HTST pasteurizer skid in a flavoured milk plant"]],
  ["PaneerProcessing.html", "Paneer", "Milk heating, coagulation tanks, pneumatic presses with hoops, cooling tanks and a cold store.", ["assets/img/projects/paneer-processing/PANEER-PRESS.jpg", 500, 536, "Pneumatic paneer press"]],
  ["ButterProcessing.html", "Butter and ghee", "The cream from the separator, churned to butter and boiled to ghee: churns, melting vats, ghee boilers, settling tanks and clarifiers, 50 L to 10,000 L.", ["assets/img/projects/butter-processing/ButterChurn.jpg", 404, 311, "Stainless-steel butter churn"]],
  ["milkpowder.html", "Milk powder", "Surplus milk to powder: multiple effect evaporators and spray dryers up to 1,500 kg/hr water evaporation.", photos.spray],
];

export default function Page() {
  return (
    <Site
      title="Liquid Milk Processing Plant Manufacturer | Turnkey Dairy Plants | Tavron Engineers"
      description="Turnkey liquid milk plants for 1,000 to 5,00,000 litres a day: reception, chilling, storage, separation, HTST pasteurisation, packing, ice water and CIP, by Tavron Engineers, Chennai."
      ogDescription="Turnkey liquid milk plants for 1,000 to 5,00,000 litres a day, from reception to packing, designed and commissioned by Tavron."
      path="milkprocessing.html"
      image="assets/img/projects/MilkProcessing/milkpro7b.jpg"
      active="menu_milk"
      wa="to discuss a liquid milk plant"
    >
      <Plant
        crumb="Liquid milk"
        title="Liquid milk processing plants"
        intro="For dairies handling 1,000 to 5,00,000 litres of milk a day: reception, chilling, storage, separation, homogenisation, HTST pasteurisation and packing, with ice water and CIP, designed, built and commissioned as one plant."
        drawing={<MilkDrawing parts={parts} />}
        parts={parts}
        sheetTitle="Liquid milk processing plant"
        facts={[
          ["Milk a day", "1,000 to 5,00,000 L"],
          ["Pasteurisation", "HTST, 50 to 30,000 LPH"],
          ["Operation", "Manual, or PLC with SCADA"],
          ["Cleaning", "CIP"],
        ]}
        sections={[
          {
            title: "Sized to your milk",
            aside: "What changes as the litres a day go up. Tell us yours and each part is sized to it.",
            rows: [
              ["Ice water", <>
                <p>Up to 20,000 litres a day: a Freon ice bank (R22, R404A or another Freon), with scroll or reciprocating compressors.</p>
                <p>From 10,000 to 5,00,000 litres a day, and larger on request: an ammonia ice bank, with a return water chiller, falling film chiller or glycol system as options.</p>
                <p>Either way, the ice bank stores enough ice to cool the plant&apos;s full daily milk. <a href="RefrigerationEquipments.html">Refrigeration systems</a></p>
              </>],
              ["Pasteurisation", <p>One HTST pasteurizer, from 50 to 30,000 litres an hour, skid-mounted or floor-mounted. <a href="pasteurisers.html">Pasteurizers</a></p>],
              ["Storage", <p>Insulated tanks of 2,000, 3,000, 5,000 or 10,000 L, and milk silos up to 1,00,000 L. <a href="tanks.html">Tanks and silos</a></p>],
              ["Control", <>
                <p>Manual, or automatic on PLC with a SCADA screen of the whole line.</p>
                <p>
                  <img src="assets/img/projects/milkprocessing.jpg" width="798" height="478" loading="lazy" style={{ display: "block", width: "100%", maxWidth: 360, height: "auto", marginTop: 8, border: "1px solid var(--rule)" }} alt="SCADA screen of a milk processing system showing the pasteurizer, tanks and pumps" data-lightbox="assets/img/projects/milkprocessing.jpg" />
                </p>
              </>],
              ["Cleaning", <p>CIP from a single circuit to several, automatic or semi-automatic. Tanks are cleaned by a rotary spray ball; the pasteurizer, pumps and lines are cleaned without taking them apart. <a href="cipsystem.html">CIP systems</a></p>],
            ],
          },
          {
            title: "What the plant can make",
            aside: "Pouch milk to start, and more lines from the same milk as the business grows.",
            body: (
              <>
                <div className="tv-sp__prose">
                  <p>Toned, double-toned, standardised and full-cream milk, with the fat set by the cream separator (item 7). We build the lines that grow from it too:</p>
                </div>
                <ul className="tv-uses">
                  {lines.map(([href, name, text, img]) => (
                    <li key={href}>
                      <figure className="tv-uses__img"><img src={img[0]} width={img[1]} height={img[2]} loading="lazy" alt={img[3]} /></figure>
                      <div>
                        <h3><a href={href}>{name}</a></h3>
                        <p>{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
        ]}
        built={[
          { img: ["assets/img/projects/MilkProcessing/milkpro7b.jpg", 700, 525, "Skid-mounted HTST milk pasteurizer with plate heat exchanger"], name: "HTST pasteurizer", note: "Skid-mounted, item 6" },
          { img: ["assets/img/projects/MilkProcessing/milkpro6b.jpg", 500, 707, "Insulated vertical milk tank with top agitator"], name: "Insulated milk tank", note: "Items 5 and 9" },
          { img: ["assets/img/projects/MilkProcessing/milkpro1b.jpg", 700, 791, "Plate heat exchanger on a stainless-steel frame"], name: "Plate heat exchanger", item: 6, note: <>{"The heart of item 6. "}<a href="plateheat.html">Plate heat exchangers</a></> },
          { img: ["assets/img/pumps/pumps1b.jpg", 500, 400, "Stainless-steel centrifugal pumps"], name: "SS centrifugal pumps", note: "Item 3" },
          { img: ["assets/img/projects/MilkProcessing/milkpro2b.jpg", 700, 394, "Skid-mounted CIP system with tanks and control panel"], name: "CIP unit", note: "Item 12" },
          { img: ["assets/img/projects/LiquidEggProcessing/IBT.jpg", 500, 361, "Freon ice bank tank with condensing units"], name: "Freon ice bank", note: "Item 11" },
        ]}
        faq={[
          ["What size of milk plant can you build?", "From 1,000 to 5,00,000 litres of milk a day, and larger on request. The HTST pasteurizer runs from 50 to 30,000 litres an hour, and storage goes from 2,000 L tanks to 1,00,000 L silos."],
          ["Should the plant be manual or automatic?", "We build both. Automatic plants run on PLC, with a SCADA screen showing the whole line. Tell us your capacity and staffing and we'll suggest one."],
          ["Freon or ammonia refrigeration?", "It depends on the milk a day. A Freon ice bank suits 1,000 to 20,000 litres a day; ammonia suits 10,000 to 5,00,000 litres a day and more. Between 10,000 and 20,000 litres a day, either can work."],
          ["Can the plant make curd, paneer or ghee later?", "Yes. We also build curd, flavoured milk, paneer, butter and ghee lines, and plants are built modular so they can grow with the business. The cream from the separator can feed a butter and ghee line."],
          ["How is the plant cleaned?", "In place. A CIP unit, single or multi-circuit, automatic or semi-automatic, cleans the tanks through rotary spray balls, and the pasteurizer, pumps and lines without taking them apart."],
          ["What is the equipment made of?", "Stainless steel: SS 304 or SS 316 for the tanks, plates and pumps, and SS 316 for the CIP unit. Tanks are PUF-insulated, and plate gaskets are NBR or EPDM."],
          ["What do you need from me for a quote?", "How much milk a day, in litres; your product mix; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
          ["What happens after the plant is handed over?", "We support it: contract or resident maintenance, replacement of worn equipment, and upgrades of controls and software."],
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
