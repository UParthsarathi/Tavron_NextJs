import { Plant, photos } from "@/components/Plant";
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
        plant={<>
          <p>The milk is prepared in an insulated <a href="tanks.html">mixing tank</a> of 2,000 to 10,000 L with a geared agitator, then heated on an <a href="pasteurisers.html">HTST pasteurizer</a> of 50 to 30,000 litres an hour, manual or automatic. Small plants use a <a href="KhovaProcessing.html">multi-purpose vat</a> instead, LPG or diesel fired, from 60 L.</p>
          <p>It is filled into glass or PET bottles and sterilised in a <a href="bsterilizer.html">bottle sterilizer</a>, 600 to 3,000 bottles a batch. A PLC and HMI panel runs the line, with flow-meter control of the water recirculation and PID steam control valves, and a <a href="cipsystem.html">CIP unit</a> cleans it.</p>
        </>}
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
            text: <>
              <p>For retort, filled glass or PET bottles are sterilised in a steam and water spray sterilizer, 600 to 3,000 bottles a batch, under PLC control. <a href="bsterilizer.html">Bottle sterilizers</a></p>
              <p>For long shelf-life packs, the milk is processed aseptically. <a href="downloads/ASEPTIC-PROCESSING.pdf" target="_blank" rel="noopener">Aseptic processing brochure</a></p>
            </>,
          },
        ]}
        built={[
          { img: [`${dir}Multi%20Purpose%20Vat.jpg`, 367, 680, "Fired multi-purpose vat"], name: "Multi-purpose vat", note: "For small plants" },
          { img: [`${dir}flamilkpro3b.jpg`, 700, 773, "Plate heat exchanger in a flavoured milk plant"], name: "Plate heat exchanger", note: "Inside the HTST pasteurizer" },
          { img: [`${dir}sterlizer.png`, 301, 327, "Bottle sterilizer"], name: "Bottle sterilizer" },
          { img: [`${dir}Delta%20HMI%20Screen.jpg`, 368, 406, "PLC and HMI control panel screen"], name: "Controls" },
          { img: [`${dir}flamilkpro2b.jpg`, 700, 394, "CIP system in a flavoured milk plant"], name: "CIP unit" },
          { img: [`${dir}flamilkpro5b.jpg`, 700, 525, "HTST pasteurizer skid in a flavoured milk plant"], name: "HTST pasteurizer" },
          { img: photos.pumps, name: "SS centrifugal pumps" },
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
          ask: "how much milk you handle a day, your packs (glass or PET bottles, or aseptic) and your site",
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
