import { Industry } from "@/components/Industry";

export default function Page() {
  return (
    <Industry
      slug="food-beverages"
      title="Food & Beverage Processing Equipment, Chennai | Tavron Engineers"
      description="Juice pasteurizers, fruit pulp evaporators, retort sterilizers, spray dryers, blenders, and coconut milk and liquid egg lines for food and beverage plants."
      h1="Food & Beverage Processing Equipment"
      intro="Equipment and lines for juices and beverages, fruit pulp, coconut milk, coffee and tea extracts, liquid egg and shelf-stable foods: pasteurisation, sterilisation, concentration, drying, blending and CIP. Built by Tavron Engineers in Chennai, India, since 2004."
      specs={[
        ["Pasteurisation", "HTST plate pasteurizers, 50 LPH to 30,000 LPH; tubular from 250 LPH"],
        ["Sterilisation", "Steam and water spray sterilizers, 600 to 3,000 bottles a batch"],
        ["Concentration", "Falling film and forced circulation evaporators"],
        ["Drying", "Spray dryers, 5 to 1,500 kg/hr water evaporation"],
        ["Blending", "Ribbon blenders from 50 L"],
        ["Construction", "SS 304 / SS 316"],
        ["Cleaning and control", "CIP; PLC, HMI and SCADA"],
      ]}
      lineTitle="Food and beverage equipment, from liquid to pack"
      input="Juices, pulps, milk, coconut milk and egg in"
      stages={[
        {
          name: "Store and move",
          text: "Insulated tanks hold liquids, and sanitary pumps with open impellers move juices, syrups and pulps.",
          items: [
            ["tanks", ["Insulated tanks from 2,000 L", "Vegetable oils, DM water and other liquids", "Rotary spray ball for CIP"], "Process & Storage Tanks"],
            ["pumps", ["Juice, sugar syrup, beer and wine", "Open impeller for viscous products and pulps", "500 LPH to 1,00,000 LPH"]],
          ],
        },
        {
          name: "Heat treat",
          text: "Plate and tubular pasteurisers heat-treat milk, juice and liquid egg.",
          items: [
            ["pasteurisers", ["Milk, juice and other liquids", "50 LPH to 30,000 LPH", "Full heat regeneration"]],
            ["tubularheat", ["Juice heating and pasteurising from 250 LPH", "Automatic steam control, PID or PLC", "Complete on a skid"]],
          ],
        },
        {
          name: "Concentrate",
          text: "Evaporators take water out of juices, fruit pulps and coffee and tea extracts.",
          items: [["evaporators", ["Falling film, rising film or forced circulation", "Multi-pass calandria for food duty", "TVR; MVR optional"]]],
        },
        {
          name: "Dry and blend",
          text: "Spray dryers make coffee, tea and fruit powders, and ribbon blenders mix powders.",
          items: [
            ["spray", ["Coffee and tea powders", "Fruit pulps, juices and pastes", "5 to 1,500 kg/hr water evaporation"]],
            ["blenders", ["From 50 L", "Powder to powder, or liquid to powder", "Load cell and temperature transmitters"]],
          ],
        },
        {
          name: "Sterilise",
          text: "Filled cans, bottles, pouches and trays are sterilised for a shelf-stable product.",
          items: [["sterilizer", ["600 to 3,000 bottles a batch", "Cans, bottles, pouches and trays", "Static, oscillating or rotary"]]],
        },
      ]}
      output={{
        name: "Out: lines we build",
        items: [
          ["Liquid egg", "LiquidEggProcessing.html"],
          ["Flavoured milk", "FlavouredMilkProcessing.html"],
          ["Coconut milk", "downloads/Coconut%20Milk%20Plant.pdf"],
          ["Coffee and tea extracts", "downloads/Cofee%20Tea%20Extract%20Evaporator%20and%20Spray%20Dryer.pdf"],
          ["Fruit pulp concentrate", "downloads/Fruits%20pulp%20forced%20circulation%20evaporator.pdf"],
          ["Aseptic packs", "downloads/ASEPTIC-PROCESSING.pdf"],
          ["Beverages", "downloads/Beverage%20Eqipments.pdf"],
        ],
      }}
      around={[
        ["cip", ["Cleans the plant without dismantling it", "Single or multiple circuits", "PLC with HMI"]],
        ["refrigeration", ["Ammonia and Freon ice water systems", "Falling film chillers and glycol systems", "PLC control optional"]],
      ]}
      whyTitle="Why food and beverage makers work with Tavron"
      why={[
        "Pulps and syrups handled with open-impeller pumps and forced circulation evaporators",
        "Shelf-stable products by retort sterilisation or aseptic processing",
        "Evaporator calandrias in a multi-pass design for the food industry, to avoid contamination",
      ]}
      clients={{
        title: "Food and beverage brands we work with",
        logos: [
          ["pepsico.png", "PepsiCo"],
          ["aachi.png", "Aachi"],
          ["a2b.png", "Adyar Ananda Bhavan"],
        ],
      }}
      faq={[
        ["Which pasteurizer suits juice?", "HTST plate pasteurizers handle milk, juice and other liquids from 50 to 30,000 LPH. Tubular pasteurizers, from 250 LPH, are used for juice heating, milk heating and liquid egg."],
        ["How do you make products shelf-stable?", "With steam and water spray sterilizers for 600 to 3,000 bottles a batch, which sterilise and cool shelf-stable foods in cans, bottles, pouches and trays, or with aseptic processing for long shelf-life packs."],
        ["Do you build spray dryers for coffee, tea and fruit powders?", "Yes. Spray dryers from 5 to 1,500 kg/hr water evaporation dry coffee and tea extracts and fruit pulps, juices and pastes, as well as dairy products."],
      ]}
      ask={{ title: "Planning a food or beverage line?", text: "Send your capacity and product mix. We'll come back with a scheme and a budget." }}
      brochures={[
        ["Juice pasteurizer", "downloads/JUICE-PASTEURIZER.pdf", "369 KB"],
        ["Milk & juice pasteurizers", "downloads/Pasteurizers%20.pdf", "555 KB"],
        ["Plate & tubular heat exchangers for food, dairy, fruit pulp and beverages", "downloads/PHEPasturiser.pdf", "12.0 MB"],
        ["Sterilizer", "downloads/Sterlizer.pdf", "463 KB"],
        ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
        ["Ribbon blender", "downloads/Ribbon%20Blender.pdf", "384 KB"],
      ]}
      wa="to discuss a food or beverage line"
    />
  );
}
