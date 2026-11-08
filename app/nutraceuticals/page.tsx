import { Industry } from "@/components/Industry";

export default function Page() {
  return (
    <Industry
      slug="nutraceuticals"
      title="Nutraceutical Processing Equipment, Chennai | Tavron Engineers"
      description="Spray dryers from lab scale (2 kg/hr) to 1,500 kg/hr, ribbon blenders, evaporators, jacketed tanks and CIP for nutraceutical powders and extracts."
      h1="Nutraceutical Processing Equipment"
      intro="Equipment for nutraceutical powders and extracts: spray dryers from lab scale to production, evaporators, powder blenders, jacketed process tanks and CIP. Built by Tavron Engineers in Chennai, India, since 2004."
      specs={[
        ["Spray drying", "5 to 1,500 kg/hr water evaporation"],
        ["Lab and table-top dryers", "2 to 25 kg/hr, for R&D"],
        ["Atomisation", "Rotary atomiser, nozzle or two-fluid"],
        ["Blending", "Ribbon blenders from 50 L, with load cells"],
        ["Concentration", "Falling film evaporators; TVR, MVR optional"],
        ["Construction", "SS 304 / SS 316"],
        ["Control", "PLC and SCADA"],
      ]}
      lineTitle="Nutraceutical equipment, from extract to powder"
      input="Liquid extracts in"
      stages={[
        {
          name: "Process",
          text: "Jacketed process tanks heat, cool and hold the batch.",
          items: [["jacketed", ["SS 304 / SS 316", "Dimple, limpet or conventional jacket", "CIP spray ball for in-line cleaning"], "Jacketed Process Tanks"]],
        },
        {
          name: "Concentrate",
          text: "Falling film evaporators take water out before drying.",
          items: [["evaporators", ["Falling film, single or multiple effect", "TVR; MVR optional", "PLC and SCADA control"]]],
        },
        {
          name: "Dry",
          text: "Spray dryers turn liquids into powder, from lab scale at 2 kg/hr to production at 1,500 kg/hr.",
          items: [
            ["spray", ["5 to 1,500 kg/hr water evaporation", "Powder density and moisture content controlled", "Suits heat-sensitive products"]],
            ["labSpray", ["2 to 25 kg/hr water evaporation", "For R&D and education", "Fully automatic, PLC option"]],
          ],
        },
        {
          name: "Blend",
          text: "Ribbon blenders mix powders, or liquids into powders, weighing the batch on load cells.",
          items: [["blenders", ["Powder to powder, or liquid to powder", "Load cell and temperature transmitters", "From 50 L, jacketed or non-jacketed"]]],
        },
      ]}
      output={{ name: "Out: powders and blends" }}
      around={[["cip", ["One to four or more tanks", "Flow and conductivity measurement", "PLC with HMI; SCADA optional"]]]}
      whyTitle="Why nutraceutical makers work with Tavron"
      why={[
        "From R&D to production: lab and table-top spray dryers from 2 kg/hr, production dryers to 1,500 kg/hr",
        "Spray drying that suits heat-sensitive products, with control of powder density and moisture",
        "Spray dryers already drying products such as algae powder",
      ]}
      faq={[
        ["Do you make small spray dryers for R&D?", "Yes. Lab model spray dryers evaporate 2 to 25 kg/hr of water and are built for R&D and education. Table-top models cover 2 to 25 kg/hr with an American-made nozzle."],
        ["Can spray drying handle heat-sensitive ingredients?", "Spray drying suits both heat-resistant and heat-sensitive products, and the powder's density and moisture content can be controlled."],
        ["Which blender suits nutraceutical powders?", "Ribbon blenders from 50 L for powder-to-powder and liquid-to-powder blending, jacketed or non-jacketed, with load cell and temperature transmitters and PLC control."],
      ]}
      ask={{ title: "Tell us about your product", text: "Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it." }}
      brochures={[
        ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
        ["Table-top spray dryer", "downloads/Table%20Top%20Spray%20Dryer.pdf", "675 KB"],
        ["Evaporator & spray dryer", "downloads/EvaporatorSprayDryer.pdf", "11.1 MB"],
        ["Ribbon blender", "downloads/Ribbon%20Blender.pdf", "384 KB"],
        ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
        ["CIP systems", "downloads/CIP%20systems.pdf", "661 KB"],
      ]}
      wa="to discuss nutraceutical processing equipment"
    />
  );
}
