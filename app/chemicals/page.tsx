import { Industry } from "@/components/Industry";

export default function Page() {
  return (
    <Industry
      slug="chemicals"
      title="Chemical Process Equipment & Reactors, Chennai | Tavron Engineers"
      description="SS 304 / SS 316 jacketed reactors designed to ASME, evaporators, spray dryers, ribbon blenders and pumps for acids, alkalis and dyes, made in Chennai."
      h1="Chemical Process Equipment"
      intro="Stainless-steel process equipment for chemical plants: jacketed tanks and reactors, evaporators, spray dryers, blenders, and pumps for acids, alkalis and dyes, with PLC and SCADA control. Built by Tavron Engineers in Chennai, India, since 2004."
      specs={[
        ["Reactors and tanks", "SS 304 / SS 316; laser-welded dimple, limpet or conventional jacket"],
        ["Design code", "ASME, or another code on request"],
        ["Evaporation", "Falling film, rising film or forced circulation; TVR, MVR optional"],
        ["Drying", "Spray dryers, 5 to 1,500 kg/hr water evaporation"],
        ["Blending", "Ribbon blenders from 50 L"],
        ["Pumps", "Acids, alkalis, cellulose and starch solutions, yeast, dyes"],
        ["Control", "PLC, HMI and SCADA"],
      ]}
      lineTitle="Chemical process equipment, from solution to powder"
      input="Liquids, solutions and slurries in"
      stages={[
        {
          name: "React",
          text: "Jacketed tanks and reactors heat or cool the batch through a dimple, limpet or conventional jacket.",
          items: [["jacketed", ["Laser-welded dimple, limpet or conventional jacket", "Designed to ASME, or another code on request", "Thermal duties calculated with design software"]]],
        },
        {
          name: "Transfer",
          text: "Stainless-steel pumps move acids, alkalis, dyes and solutions between vessels, including under vacuum.",
          items: [["pumps", ["Acids, alkalis, dyes, cellulose and starch solutions", "Suitable for operation under vacuum", "Head up to 60 MWC"]]],
        },
        {
          name: "Concentrate",
          text: "Evaporators take water out of the solution, designed around its foaming, scaling and heat sensitivity.",
          items: [["evaporators", ["Falling film, rising film or forced circulation", "Shell in SS 304, SS 316 or carbon steel", "Designed for foaming, scaling and heat-sensitive solutions"]]],
        },
        {
          name: "Dry and blend",
          text: "Spray dryers turn liquids and slurries into powder, and ribbon blenders mix powders.",
          items: [
            ["spray", ["5 to 1,500 kg/hr water evaporation", "Rotary atomiser, nozzle or two-fluid", "Wet scrubber and bag filters to meet local pollution standards"]],
            ["blenders", ["From 50 L", "Powder to powder, or liquid to powder", "Conventional, limpet or dimple jacket"]],
          ],
        },
      ]}
      output={{ name: "Out: concentrates, powders and blends" }}
      around={[
        ["refrigeration", ["Ammonia and Freon systems", "Glycol systems and falling film chillers", "PLC control optional"]],
        ["automation", ["PLC and MCC panels", "SCADA: WinCC, FactoryTalk View, InTouch", "Retrofits of legacy controls"]],
      ]}
      whyTitle="Why chemical plants work with Tavron"
      why={[
        "Materials matched to the duty: SS 304, SS 316, or carbon steel where it suits",
        "Jacketed vessels designed to ASME, with thermal duties calculated in design software",
        "Dryer exhaust cleaned by wet scrubbers and bag filters to meet local pollution standards",
      ]}
      faq={[
        ["Which materials do you build chemical equipment in?", "SS 304 and SS 316 as standard. Evaporator calandria shells, thermal vapour recompressors and dryer cyclones are also made in carbon steel."],
        ["Can you build jacketed reactors to a design code?", "Yes. Tanks and reactors are designed to ASME, or to another code on request, with laser-welded dimple, limpet or conventional jackets."],
        ["Which chemicals can your pumps handle?", "Tavron SS centrifugal pumps are used for acids, alkalis, cellulose and starch solutions, yeast and dyes, from 500 to 1,00,000 LPH."],
      ]}
      ask={{ title: "Tell us about your process", text: "Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it." }}
      brochures={[
        ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
        ["Evaporator", "downloads/Evaporator.pdf", "541 KB"],
        ["Forced circulation evaporator", "downloads/Evaporator%20Force%20Circulation.pdf", "161 KB"],
        ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
        ["Ribbon blender", "downloads/Ribbon%20Blender.pdf", "384 KB"],
        ["Stainless-steel pumps", "downloads/Pumps.pdf", "6.9 MB"],
        ["Falling film chiller", "downloads/Falling%20Film%20Chiller.pdf", "431 KB"],
      ]}
      wa="to discuss chemical process equipment"
    />
  );
}
