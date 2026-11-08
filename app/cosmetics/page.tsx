import { Industry } from "@/components/Industry";

export default function Page() {
  return (
    <Industry
      slug="cosmetics"
      title="Cosmetics Processing Line & Equipment, Chennai | Tavron Engineers"
      description="Cosmetic processing lines: cream mixers, liquid homogenizers to 2 microns, lobe pumps for viscous products, storage tanks, CIP and SCADA. Made in Chennai."
      h1="Cosmetics Processing Equipment"
      intro="Processing lines for creams and other cosmetic products: jacketed mixers, liquid homogenizers, lobe pumps for viscous products, storage tanks and CIP, run from PLC and SCADA. Built by Tavron Engineers in Chennai, India, since 2004."
      specs={[
        ["Line", "Mixing, homogenising, transfer, storage and CIP"],
        ["Mixers", "Cream mixers with side pots; universal mixer under vacuum"],
        ["Homogenizer", "Liquid homogenizer, down to 2 microns"],
        ["Pumps", "Lobe pumps for high-viscosity products"],
        ["Storage tanks", "2,000 L to 15,000 L"],
        ["Construction", "SS 304 / SS 316"],
        ["Control", "PLC with SCADA"],
      ]}
      lineTitle="Cosmetics processing line, from raw materials to cream"
      input="Raw materials in"
      stages={[
        {
          name: "Mix and heat",
          text: "Cream mixers with side pots, and a universal mixer under vacuum, heated by steam and cooled by chilled water. One Tavron cream section runs a 1,600 kg mixer with two 800 kg side pots.",
          items: [["jacketed", ["SS 304 / SS 316", "Dimple, limpet or conventional jacket for heating and cooling", "Agitator with a geared motor"], "Jacketed Mixing Tanks"]],
        },
        {
          name: "Homogenise",
          text: "A liquid homogenizer brings the product down to 2 microns.",
          items: [["homogenizer", ["SS 304 / SS 316, hygienic construction", "Down to 2 microns", "Speed control; handles high-viscosity liquids; CIP cleanable"]]],
        },
        {
          name: "Transfer",
          text: "Lobe pumps move thick creams and other high-viscosity products.",
          items: [["lobePumps", ["SS 304 / SS 316, hygienic construction", "Handles high-viscosity liquids", "Speed control; CIP cleanable"]]],
        },
        {
          name: "Store",
          text: "Storage tanks from 2,000 L to 15,000 L hold the finished product.",
          items: [["tanks", ["2,000 L to 15,000 L", "Rotary spray ball covers the whole tank for CIP", "Temperature transmitter; level transmitter optional"], "Storage Tanks"]],
        },
      ]}
      output={{ name: "Out: finished creams" }}
      around={[
        ["cip", ["Single to multiple circuits", "SS 316, skid-mounted", "PLC with SCADA"]],
        ["automation", ["Process SCADA for mixers, side pots and storage", "PLC, HMI and SCADA", "Siemens, Allen-Bradley, Delta and others"]],
      ]}
      whyTitle="Why cosmetics makers work with Tavron"
      why={[
        "Homogenizers and lobe pumps that handle high-viscosity liquids, with speed control for different products",
        "The whole line is CIP cleanable: homogenizer, lobe pumps and tanks",
        "Tavron has automated cosmetics plants, from mixers to storage",
      ]}
      faq={[
        ["What equipment is in a Tavron cosmetics line?", "Cream and universal mixers with side pots, a liquid homogenizer, lobe pumps, storage tanks from 2,000 to 15,000 L and CIP, run from PLC and SCADA."],
        ["Can the line handle thick creams?", "Yes. The homogenizer and lobe pumps handle high-viscosity liquids, and both run on drives with speed control for different products."],
        ["Is the equipment CIP cleanable?", "Yes. The homogenizer and lobe pumps are CIP cleanable, tanks have a rotary spray ball that covers the whole tank, and CIP systems run single or multiple circuits."],
      ]}
      ask={{ title: "Tell us about your product", text: "Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it." }}
      brochures={[
        ["Cosmetic processing line", "downloads/COSMETIC%20PROCESSING%20LINE.pdf", "758 KB"],
        ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
        ["Hygienic stainless-steel process tanks", "downloads/TanksCurves.pdf", "5.0 MB"],
        ["CIP systems", "downloads/CIP%20systems.pdf", "661 KB"],
        ["Automation", "downloads/Automation.pdf", "954 KB"],
      ]}
      wa="to discuss a cosmetics processing line"
    />
  );
}
