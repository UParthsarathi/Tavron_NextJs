import { Plant, photos } from "@/components/Plant";
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
        intro="From milk to filling: HTST pasteurisation from 50 to 30,000 LPH, insulated process tanks of 2,000 to 10,000 L, a plate cooler, sanitary pumps and CIP, built into one plant."
        plant={<>
          <p>Milk is pasteurised on an <a href="pasteurisers.html">HTST pasteurizer</a> of 50 to 30,000 litres an hour: a plate heat exchanger with SS 304 or SS 316 plates and glue-free NBR or EPDM gaskets. The culture is added in insulated <a href="tanks.html">process tanks</a> of 2,000 to 10,000 L, with a geared agitator, temperature transmitter and hygienic valves.</p>
          <p>Open-impeller <a href="pumps.html">pumps</a>, made for viscous products, take stirred curd and yogurt through a <a href="plateheat.html">plate cooler</a> that cools them with ice water before filling. A <a href="cipsystem.html">CIP unit</a> on PLC with SCADA cleans the line.</p>
        </>}
        facts={[
          ["Pasteurisation", "HTST, 50 to 30,000 LPH"],
          ["Process tanks", "2,000 to 10,000 L"],
          ["Construction", "SS 304 / SS 316"],
          ["Cleaning", "CIP, PLC with SCADA"],
        ]}
        sections={[
          {
            title: "Set or stirred",
            aside: "Both start from the same pasteurised milk, with the culture added in the process tanks.",
            text: <>
              <p>Set curd is filled into cups once the culture is added, and sets in the cup. Stirred curd and yogurt set in the process tanks, are stirred, then cooled through the plate cooler and filled.</p>
            </>,
          },
        ]}
        built={[
          { img: photos.htst, name: "HTST pasteurizer" },
          { img: photos.tank, name: "Insulated process tank" },
          { img: photos.phe, name: "Plate heat exchanger", note: <>{"The heart of the HTST pasteurizer. "}<a href="plateheat.html">Plate heat exchangers</a></> },
          { img: photos.pumps, name: "SS centrifugal pumps" },
          { img: photos.cip, name: "CIP unit" },
        ]}
        faq={[
          ["What capacities do you build?", "Pasteurisation from 50 to 30,000 litres an hour, with process tanks of 2,000 to 10,000 L."],
          ["Can one plant make both curd and yogurt?", "Yes. Both start from the same pasteurised milk in the process tanks: set curd goes to cups, and stirred curd and yogurt are cooled and then filled."],
          ["What are the process tanks like?", "PUF insulated, in SS 304 or SS 316, with a geared agitator, temperature transmitter, hygienic valves and a spray ball for CIP. A level transmitter is optional."],
          ["Manual or automatic?", "The pasteurizer comes in manual or automatic versions, and the CIP runs on PLC with SCADA."],
          ["What do you need from me for a quote?", "How much milk a day, in litres; your products and packs, curd, yogurt or both; and the site, with its building, space and utilities. We come back with a scheme and a budget."],
        ]}
        close={{
          title: "Planning a curd and yogurt plant?",
          ask: "how much milk you handle a day, your products and packs, and your site",
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
