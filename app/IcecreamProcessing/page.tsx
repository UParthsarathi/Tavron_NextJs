import { Plant, photos } from "@/components/Plant";
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
        plant={<>
          <p>The mix is prepared at 150 to 5,000 litres an hour, automatic or semi-automatic, pasteurised on a skid-mounted <a href="pasteurisers.html">HTST pasteurizer</a> of 150 to 20,000 litres an hour, and homogenised at 100 to 5,000 litres an hour.</p>
          <p>It ages in tanks with a laser-welded dimple jacket for ice water or refrigerant, then a continuous freezer, adjustable for maximum overrun, feeds the cup and cone fillers and stick lines, with a fruit feeder. A <a href="RefrigerationEquipments.html">hardening room and cold store</a>, built to order, holds the product down to −25 °C.</p>
          <p>A <a href="cipsystem.html">CIP unit</a> of 5,000 to 30,000 litres an hour a circuit, with automatic dosing, cleans the line, on PLC and HMI or SCADA.</p>
        </>}
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
            text: <>
              <p>We build batch lines from 150 L, fully automatic lines and mini units on a skid, with batch or automatic stick lines and cup and cone filling machines.</p>
              <p>We also make a softy ice cream machine: SS 304, one or three flavours, R22 or R404A refrigerant, and quiet in operation.</p>
            </>,
          },
        ]}
        built={[
          { img: [`${dir}MixPreparationSection.jpg`, 246, 242, "Ice cream mix preparation section"], name: "Mix preparation" },
          { img: photos.htst, name: "HTST pasteurizer" },
          { img: [`${dir}Homoginizer.jpg`, 500, 500, "Homogeniser with pressure gauge and stainless-steel cabinet"], name: "Homogeniser" },
          { img: [`${dir}AgingTank.jpg`, 230, 269, "Jacketed ageing tank with agitator"], name: "Ageing tank" },
          { img: [`${dir}PlateHeatExchanger.jpg`, 225, 222, "Plate heat exchanger with stainless-steel-clad frame"], name: "Plate heat exchanger", note: <>{"Inside the HTST pasteurizer. "}<a href="plateheat.html">Plate heat exchangers</a></> },
          { img: photos.cip, name: "CIP unit" },
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
          ask: "how much mix you make a day, your products (cups, cones, sticks or bulk) and your site",
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
