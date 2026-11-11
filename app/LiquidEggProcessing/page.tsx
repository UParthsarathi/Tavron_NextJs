import { Plant, photos } from "@/components/Plant";
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
        intro="From egg liquid to chilled liquid egg or powder: insulated tanks, tubular pasteurisation from 250 LPH, ice water for 1,000 to 20,000 LPD, spray drying and CIP."
        plant={<>
          <p>Egg liquid is held in insulated <a href="tanks.html">process tanks</a> of 2,000 to 10,000 L and pasteurised on a <a href="tubularheat.html">tubular pasteuriser</a> from 250 litres an hour, on a skid with automatic steam control.</p>
          <p>A Freon <a href="RefrigerationEquipments.html">ice bank</a> for 1,000 to 20,000 litres a day supplies the ice water. For egg powder, a <a href="spray.html">spray dryer</a> of 5 to 1,500 kg/hr water evaporation dries the liquid. A <a href="cipsystem.html">CIP unit</a> on PLC with SCADA cleans the line.</p>
        </>}
        facts={[
          ["Pasteurisation", "Tubular, from 250 LPH"],
          ["Ice water", "1,000 to 20,000 LPD"],
          ["Drying", "5 to 1,500 kg/hr"],
          ["Construction", "SS 304 / SS 316"],
        ]}
        built={[
          { img: ["assets/img/projects/LiquidEggProcessing/TubularPasteuriser.jpg", 600, 337, "Tubular pasteurizer for liquid egg"], name: "Tubular pasteuriser" },
          { img: ["assets/img/projects/LiquidEggProcessing/IBT.jpg", 500, 361, "Freon ice bank tank with condensing units"], name: "Freon ice bank" },
          { img: photos.tank, name: "Insulated process tank" },
          { img: photos.spray, name: "Spray dryer" },
          { img: photos.cip, name: "CIP unit" },
        ]}
        faq={[
          ["What capacity do you build?", "Tubular pasteurisers from 250 litres an hour, with ice water for 1,000 to 20,000 litres of egg liquid a day."],
          ["How is pasteurisation controlled?", "Automatic steam control, on PID or PLC, with the whole pasteuriser assembled on a skid."],
          ["Can I make egg powder as well?", "Yes. A spray dryer from 5 to 1,500 kg/hr water evaporation turns the egg liquid into powder."],
          ["How is the egg liquid kept cold?", "A Freon ice bank (R22, R404A or another Freon) with scroll or reciprocating compressors supplies ice water. PLC controls are optional."],
          ["What are the tanks like?", "SS 304 / SS 316, PUF insulated, from 2,000 to 10,000 L, with a rotary spray ball for CIP."],
          ["What do you need from me for a quote?", "How much egg liquid a day, in litres; liquid egg, egg powder or both; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
        ]}
        dairies={false}
        close={{
          title: "Planning a liquid egg plant?",
          ask: "how much egg liquid you handle a day, whether you want liquid egg, egg powder or both, and your site",
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
