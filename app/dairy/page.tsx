import { Industry } from "@/components/Industry";

export default function Page() {
  return (
    <Industry
      slug="dairy"
      title="Dairy Processing Equipment & Plants, Chennai | Tavron Engineers"
      description="Dairy plants and equipment made in Chennai since 2004: milk, powder, butter, ghee, paneer, cheese, curd and ice cream lines, milk coolers, pasteurizers and CIP."
      h1="Dairy Processing Equipment & Plants"
      intro="Equipment and complete plants for every stage of a dairy: milk cooling, storage, pasteurisation, processing into butter, ghee, paneer, cheese, curd and ice cream, and concentration and drying into powder, with CIP and refrigeration. Built by Tavron Engineers in Chennai, India, since 2004."
      specs={[
        ["Plants", "Liquid milk, milk powder, butter and ghee, paneer, cheese, curd and yogurt, ice cream, flavoured milk, whey, casein"],
        ["Milk cooling", "Bulk milk coolers, 300 L to 10,000 L"],
        ["Pasteurisation", "HTST, 50 LPH to 30,000 LPH"],
        ["Storage", "Tanks from 2,000 L; milk silos up to 1,00,000 L"],
        ["Powder", "Spray dryers, 5 to 1,500 kg/hr water evaporation"],
        ["Construction", "SS 304 / SS 316"],
        ["Cleaning and control", "CIP; PLC, HMI and SCADA"],
      ]}
      lineTitle="Dairy equipment, from farm to powder"
      input="Raw milk in"
      stages={[
        {
          name: "Collect and chill",
          text: "Milk is cooled at the farm or collection centre and held cold until it's processed or transported.",
          items: [["bulkCoolers", ["300 L to 10,000 L, direct expansion", "SS 304 / SS 316 inner shell, laser-welded pillow plate", "Conforms to ISO 5708"]]],
        },
        {
          name: "Store and move",
          text: "Insulated tanks and silos keep milk at temperature, and sanitary pumps move it between stages.",
          items: [
            ["tanks", ["Storage tanks from 2,000 L", "Milk silos up to 1,00,000 L", "Road milk tankers, 5,000 to 20,000 L"]],
            ["pumps", ["500 LPH to 1,00,000 LPH", "Head up to 60 MWC", "SMS / DIN fittings"]],
          ],
        },
        {
          name: "Heat treat",
          text: "HTST pasteurisation makes milk safe, recovering heat from the milk on its way out.",
          items: [
            ["pasteurisers", ["50 LPH to 30,000 LPH", "Full heat regeneration", "Skid-mounted, manual or automatic"]],
            ["plateheat", ["Gasketed and semi-welded", "Heating, cooling and pasteurising, 50 to 30,000 LPH", "Glue-free NBR / EPDM gaskets"]],
          ],
        },
        {
          name: "Concentrate and dry",
          text: "Evaporators take water out, and spray dryers turn the concentrate into milk or whey powder.",
          items: [
            ["evaporators", ["Falling film, rising film or forced circulation", "Single or multiple effect", "TVR; MVR optional"]],
            ["spray", ["Milk and whey powder", "5 to 1,500 kg/hr water evaporation", "Vibro and static fluid bed finishing"]],
          ],
        },
      ]}
      output={{
        name: "Out: complete plants for each product",
        items: [
          ["Liquid milk", "milkprocessing.html"],
          ["Milk powder", "milkpowder.html"],
          ["Butter and ghee", "ButterProcessing.html"],
          ["Ghee", "gheeprocessing.html"],
          ["Paneer", "PaneerProcessing.html"],
          ["Cheese", "CheeseProcessing.html"],
          ["Curd and yogurt", "CurdYogurtProcessing.html"],
          ["Ice cream", "IcecreamProcessing.html"],
          ["Flavoured milk", "FlavouredMilkProcessing.html"],
          ["Whey", "whey.html"],
          ["Casein", "Casine.html"],
        ],
      }}
      around={[
        ["refrigeration", ["Ammonia ice banks for 10,000 to 5,00,000 LPD of milk", "Freon ice banks for 1,000 to 20,000 LPD", "Falling film chillers and glycol systems"]],
        ["cip", ["One to four or more tanks", "Single or multiple circuits", "PLC with HMI; SCADA optional"]],
        ["automation", ["PLC and MCC panels", "HMI and SCADA: Siemens, Allen-Bradley, Delta", "Retrofits of legacy controls"]],
      ]}
      whyTitle="Why dairies work with Tavron"
      why={[
        "Every stage of a dairy from one manufacturer, from farm milk cooling to powder",
        "Pasteurisation from 50 LPH to 30,000 LPH, so a line can be sized for a small dairy or a large one",
        "Refrigeration sized to the milk you handle: ice banks for 1,000 to 5,00,000 LPD",
      ]}
      clients={{
        title: "Dairy brands we work with",
        logos: [
          ["hatson.png", "Hatsun"],
          ["dodla.JPG", "Dodla Dairy"],
          ["heritage.jpg", "Heritage Foods"],
          ["thirumala.jpg", "Thirumala Milk"],
          ["parag.jpg", "Parag Milk Foods"],
          ["creamline-jersey.png", "Creamline Jersey"],
          ["arun.jpg", "Arun Ice Creams"],
          ["grb.jpg", "GRB"],
        ],
      }}
      faq={[
        ["What dairy plants does Tavron build?", "Liquid milk processing, milk powder, butter and ghee, paneer, cheese, curd and yogurt, ice cream, flavoured milk, whey and casein plants, designed, built, installed and commissioned by Tavron."],
        ["Can I buy a single machine instead of a complete plant?", "Yes. Bulk milk coolers, pasteurizers, plate heat exchangers, tanks, pumps, CIP systems and refrigeration are supplied on their own, or as part of a complete plant."],
        ["What capacities do you cover?", "Pasteurizers from 50 to 30,000 LPH, bulk milk coolers from 300 to 10,000 L, milk silos up to 1,00,000 L and spray dryers from 5 to 1,500 kg/hr water evaporation."],
        ["Where do you install?", "Tavron manufactures in Chennai and has completed turnkey projects for food processing industries across India."],
      ]}
      ask={{ title: "Planning a dairy plant?", text: "Send your capacity and product mix. We'll come back with a scheme and a budget." }}
      brochures={[
        ["Milk plant", "downloads/Milk%20Plant.pdf", "1.8 MB"],
        ["Milk powder plant", "downloads/Milk%20Powder%20Plant.pdf", "787 KB"],
        ["Butter & ghee plant", "downloads/Butter%20&%20Ghee%20Plant.pdf", "507 KB"],
        ["Paneer plant", "downloads/Paneer%20Plant.pdf", "881 KB"],
        ["Cheese plant", "downloads/Cheese%20Plant.pdf", "1.1 MB"],
        ["Curd plant", "downloads/Curd.pdf", "973 KB"],
        ["Ice cream plant", "downloads/Ice%20Cream%20Plant.pdf", "754 KB"],
        ["Bulk milk cooler", "downloads/Bulk%20Milk%20Cooler.pdf", "611 KB"],
      ]}
      wa="to discuss a dairy project"
    />
  );
}
