import { Plant, photos } from "@/components/Plant";
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
        plant={<>
          <p>Milk is pasteurised on an <a href="pasteurisers.html">HTST pasteurizer</a> of 50 to 30,000 litres an hour, manual or automatic, and set in a cheese vat with a cutting system and reduction gearbox. Pneumatic presses, single or multi-cylinder with an adjustable stroke, press the curd.</p>
          <p>A cheese cooker that works under vacuum, with a PLC as an option, serves the processed cheese and mozzarella lines, and a <a href="RefrigerationEquipments.html">cold store</a> keeps the product.</p>
          <p>Whey from the vats is collected in insulated <a href="tanks.html">tanks</a> of 2,000 to 10,000 L. It can go on to <a href="whey.html">membrane filtration</a>, a <a href="evaporators.html">falling film evaporator</a> and a <a href="spray.html">spray dryer</a> of 5 to 1,500 kg/hr water evaporation, for DM whey powder, whey protein concentrate or lactose. A <a href="cipsystem.html">CIP unit</a> on PLC with SCADA cleans the line.</p>
        </>}
        facts={[
          ["Lines", "Processed cheese, mozzarella"],
          ["Cheese cooker", "Works under vacuum"],
          ["Whey", "Powder, WPC, lactose"],
          ["Construction", "SS 304 / SS 316"],
        ]}
        built={[
          { img: [`${dir}Cheese-VAT.jpg`, 500, 553, "Open cheese vat with cutting frame"], name: "Cheese vat" },
          { img: [`${dir}chees-press.jpg`, 500, 327, "Pneumatic cheese press"], name: "Press" },
          { img: [`${dir}Cheese-Cooker.jpg`, 483, 517, "Cheese cooker with gearbox and motor"], name: "Cheese cooker" },
          { img: [`${dir}Cold-Store-Room.jpg`, 657, 491, "Cold store room"], name: "Cold store" },
          { img: [`${dir}WheyCollectionTank.jpg`, 420, 594, "Insulated whey collection tank"], name: "Whey collection tank" },
          { img: [`${dir}WheyProcessingLine.jpg`, 500, 345, "Whey processing line"], name: "Whey processing line" },
          { img: photos.htst, name: "HTST pasteurizer" },
          { img: photos.cip, name: "CIP unit" },
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
          ask: "how much milk you handle a day, the cheese you make and what you'd like to do with the whey",
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
