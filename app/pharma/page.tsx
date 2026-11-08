import { Industry } from "@/components/Industry";

export default function Page() {
  return (
    <Industry
      slug="pharma"
      title="Pharmaceutical Process Equipment, Chennai | Tavron Engineers"
      description="Jacketed process tanks and reactors, spray dryers for pharmaceutical powders, sanitary pumps for formulations, CIP and PLC/SCADA automation, made in Chennai."
      h1="Pharmaceutical Process Equipment"
      intro="Stainless-steel process equipment for pharmaceutical plants: jacketed process tanks and reactors, spray dryers from lab scale to production, sanitary pumps for formulations, CIP, and PLC and SCADA control. Built by Tavron Engineers in Chennai, India, since 2004."
      specs={[
        ["Process tanks", "SS 304 / SS 316; dimple, limpet or conventional jacket"],
        ["Design code", "ASME, or another code on request"],
        ["Drying", "Spray dryers, 5 to 1,500 kg/hr; lab models from 2 kg/hr"],
        ["Pumps", "Sanitary centrifugal, 500 to 1,00,000 LPH, for formulations"],
        ["Cleaning", "CIP with flow and conductivity measurement"],
        ["Control", "PLC, HMI and SCADA: Siemens, Allen-Bradley, Delta"],
      ]}
      lineTitle="Pharmaceutical process equipment, from batch to powder"
      input="Liquids and formulations in"
      stages={[
        {
          name: "Process",
          text: "Jacketed tanks and reactors, designed to ASME or another code, heat and cool the batch.",
          items: [["jacketed", ["SS 304 / SS 316", "Dimple, limpet or conventional jacket", "Designed to ASME, or another code on request"]]],
        },
        {
          name: "Transfer",
          text: "Sanitary pumps with mechanical shaft seals move formulations between stages.",
          items: [["pumps", ["Pharmaceutical formulations", "SS 304 / SS 316, open impeller", "Mechanical shaft seal, SMS / DIN fittings"]]],
        },
        {
          name: "Dry",
          text: "Spray dryers dry pharmaceutical products such as algae powder and penicillin, from lab scale to production.",
          items: [
            ["spray", ["Pharmaceutical products such as algae powder and penicillin", "5 to 1,500 kg/hr water evaporation", "Closed loop on request, for special applications"]],
            ["labSpray", ["2 to 25 kg/hr water evaporation", "For R&D", "Fully automatic, PLC option"]],
          ],
        },
      ]}
      output={{ name: "Out: batches and powders" }}
      around={[
        ["cip", ["SS 316 inner tank shells", "Flow and conductivity measurement", "PLC with HMI; SCADA optional"]],
        ["automation", ["PLC, HMI and SCADA", "End-to-end traceability", "Full control drawing package: DWG, PDF and paper"]],
      ]}
      whyTitle="Why pharmaceutical plants work with Tavron"
      why={[
        "Spray drying already used for pharmaceutical products such as algae powder and penicillin",
        "Automation for traceability and standardised output, with screens designed to your requirement",
        "A full control drawing package in AutoCAD, delivered as DWG, PDF and paper",
      ]}
      faq={[
        ["Do you make spray dryers for pharmaceutical products?", "Yes. Tavron spray dryers dry pharmaceutical products such as algae powder and penicillin, from 5 to 1,500 kg/hr water evaporation, with lab models from 2 kg/hr and closed-loop designs on request."],
        ["What documentation comes with the automation?", "A full control drawing package in AutoCAD, delivered as DWG, PDF and paper, with PLC, HMI and SCADA programs written to your requirement."],
        ["Which pumps suit pharmaceutical formulations?", "Sanitary SS 304 / SS 316 centrifugal pumps from 500 to 1,00,000 LPH, with an open impeller for viscous products, a mechanical shaft seal and SMS / DIN fittings."],
      ]}
      ask={{ title: "Tell us about your process", text: "Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it." }}
      brochures={[
        ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
        ["Table-top spray dryer", "downloads/Table%20Top%20Spray%20Dryer.pdf", "675 KB"],
        ["Dimple jacket tank", "downloads/Dimple%20Jacket%20Tank.pdf", "778 KB"],
        ["Hygienic stainless-steel process tanks", "downloads/TanksCurves.pdf", "5.0 MB"],
        ["SS centrifugal pump", "downloads/SS%20Centrifugal%20Pump.pdf", "4.0 MB"],
        ["CIP systems", "downloads/CIP%20systems.pdf", "661 KB"],
        ["Automation", "downloads/Automation.pdf", "954 KB"],
      ]}
      wa="to discuss pharmaceutical process equipment"
    />
  );
}
