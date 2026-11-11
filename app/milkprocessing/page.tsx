import { Plant } from "@/components/Plant";
import { Site } from "@/components/Site";

// Every figure here is from Tavron's own brochures and site: the milk plant, refrigeration and tank
// brochures, the dairy page, the About page and the clients page. Nothing is estimated.

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
        plant={<>
          <p>Milk arrives by can, over a can conveyor and tipper into a dump tank, or by insulated <a href="tanks.html">road tanker</a> of 5,000 to 20,000 L. A <a href="plateheat.html">plate chiller</a> cools it with ice water as it comes in, and it waits in insulated <a href="tanks.html">silos</a> of 2,000 to 1,00,000 L.</p>
          <p>From there an <a href="pasteurisers.html">HTST pasteurizer</a>, with regeneration, takes it to at least 74 °C for 20 seconds. A cream separator sets the fat, and a homogeniser breaks it up so the cream doesn&apos;t rise in the pack. The pasteurised milk is held in insulated tanks and packed on form-fill-seal pouch machines.</p>
          <p>An <a href="RefrigerationEquipments.html">ice bank</a> supplies the ice water, <a href="pumps.html">SS centrifugal pumps</a> move the milk, and a <a href="cipsystem.html">CIP unit</a> cleans the line.</p>
        </>}
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
            text: <>
              <p>Up to 20,000 litres a day, ice water comes from a Freon ice bank (R22, R404A or another Freon) with scroll or reciprocating compressors. From 10,000 to 5,00,000 litres a day, and larger on request, it comes from an ammonia ice bank, with a return water chiller, falling film chiller or glycol system as options. Either way, the ice bank stores enough ice to cool the plant&apos;s full daily milk. <a href="RefrigerationEquipments.html">Refrigeration systems</a></p>
              <p>One <a href="pasteurisers.html">HTST pasteurizer</a> covers 50 to 30,000 litres an hour, skid-mounted or floor-mounted. Storage runs from insulated tanks of 2,000, 3,000, 5,000 or 10,000 L to <a href="tanks.html">milk silos</a> of 1,00,000 L.</p>
              <p>The plant runs manually, or automatically on PLC with a SCADA screen of the whole line. <a href="cipsystem.html">CIP</a> runs from a single circuit to several, automatic or semi-automatic: a rotary spray ball cleans the tanks, and the pasteurizer, pumps and lines are cleaned without taking them apart.</p>
            </>,
          },
          {
            title: "What the plant can make",
            aside: "Toned, double-toned, standardised and full-cream milk to start, with the fat set by the cream separator. We build the lines that grow from the same milk too.",
            text: <>
                <p><a href="CurdYogurtProcessing.html">Curd and yogurt</a> come from the same pasteurised milk, in insulated process tanks with plate heat exchangers and CIP. <a href="FlavouredMilkProcessing.html">Flavoured milk</a> starts from 500 litres a day, batch or HTST, with retort sterilisation for glass or PET bottles, or aseptic packing for long shelf life.</p>
                <p><a href="PaneerProcessing.html">Paneer</a> needs milk heating, coagulation tanks, pneumatic presses with hoops, cooling tanks and a cold store. The cream from the separator can be churned to <a href="ButterProcessing.html">butter and boiled to ghee</a>, in churns, melting vats, ghee boilers, settling tanks and clarifiers of 50 L to 10,000 L. Surplus milk can go to <a href="milkpowder.html">milk powder</a>, through multiple effect evaporators and spray dryers of up to 1,500 kg/hr water evaporation.</p>
              </>,
          },
        ]}
        built={[
          { img: ["assets/img/projects/MilkProcessing/milkpro7b.jpg", 700, 525, "Skid-mounted HTST milk pasteurizer with plate heat exchanger"], name: "HTST pasteurizer", note: "Skid-mounted" },
          { img: ["assets/img/projects/MilkProcessing/milkpro6b.jpg", 500, 707, "Insulated vertical milk tank with top agitator"], name: "Insulated milk tank", note: "For raw and pasteurised milk" },
          { img: ["assets/img/projects/MilkProcessing/milkpro1b.jpg", 700, 791, "Plate heat exchanger on a stainless-steel frame"], name: "Plate heat exchanger", note: <>{"The heart of the HTST pasteurizer. "}<a href="plateheat.html">Plate heat exchangers</a></> },
          { img: ["assets/img/pumps/pumps1b.jpg", 500, 400, "Stainless-steel centrifugal pumps"], name: "SS centrifugal pumps" },
          { img: ["assets/img/projects/MilkProcessing/milkpro2b.jpg", 700, 394, "Skid-mounted CIP system with tanks and control panel"], name: "CIP unit" },
          { img: ["assets/img/projects/LiquidEggProcessing/IBT.jpg", 500, 361, "Freon ice bank tank with condensing units"], name: "Freon ice bank" },
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
          ask: "how much milk you handle a day, your product mix and your site",
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
