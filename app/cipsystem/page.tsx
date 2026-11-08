import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="CIP System Manufacturer in Chennai, India | Tavron Engineers"
      description="Skid-mounted cleaning-in-place (CIP) systems for dairy and food plants: one to four tanks, single or multiple circuits, PLC and HMI, 20,000 to 40,000 l/h."
      path="cipsystem.html"
      image="assets/img/projects/MilkProcessing/milkpro2b.jpg"
      active="menu_cipsystem"
      wa="a quotation for a CIP system"
    >
      <Doc
        parent="products"
        name="CIP Systems"
        label="Cleaning &amp; automation"
        intro="Cleaning-in-place (CIP) systems that clean dairy and food plants automatically, without dismantling them. Skid-mounted modules with one to four or more tanks and one or more cleaning circuits, controlled by PLC and HMI. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/MilkProcessing/milkpro2b.jpg" width="700" height="394" alt="Skid-mounted CIP system with tanks, pumps and control panel" data-lightbox="assets/img/projects/MilkProcessing/milkpro2b.jpg" />
          </figure>
          <Specs
            items={[
              ["Tanks", "One to four or more: pre-rinse water, caustic, acid and hot water"],
              ["Circuits", "Single or multiple, running at the same time"],
              ["Construction", "Tanks with SS 316 inner and SS 304 outer shells"],
              ["Valves", "Pneumatic butterfly and seat valves"],
              ["Measurement", "Flow meter, conductivity meter"],
              ["Control", "PLC with HMI, Siemens S7 or Delta AS series; SCADA optional"],
              ["Sequence", "Standard or customised"],
            ]}
          />
        </div>
        <Section id="data" label="Technical data" title="Pump options">
          <div className="tv-tablewrap">
            <table className="tv-table tv-table--num">
              <thead>
                <tr>
                  <th scope="col">Flow</th>
                  <th scope="col">Pressure</th>
                  <th scope="col">Motor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">20,000 l/h</th>
                  <td>4 bar</td>
                  <td>5.5 kW</td>
                </tr>
                <tr>
                  <th scope="row">30,000 l/h</th>
                  <td>5 bar</td>
                  <td>7.5 kW</td>
                </tr>
                <tr>
                  <th scope="row">40,000 l/h</th>
                  <td>5 bar</td>
                  <td>11 kW</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tv-doc__note">A flow velocity of at least 1.5 m/s is recommended for pipe cleaning. Typical temperatures: caustic (NaOH) 70–90 °C, acid (HNO3) 0–70 °C. Disinfection cold or warm.</p>
        </Section>
        <Section id="how" label="How it works" title="How a Tavron CIP system is built">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <p>CIP cleans production plant automatically, without dismantling it or changing it substantially from its production state. Each system is sized by its number of tanks and its number of loops, the cleaning processes that run at the same time.</p>
              <p>The modules are pre-assembled and compact enough to transport easily. The tanks are assembled on site next to them and connected with prepared piping. An operator panel runs the system, with the PLC cabinet on the skid. The modular design makes the system easy to customise and expand.</p>
              <h3>Advantages</h3>
              <ul className="tv-ticks">
                <li>Optimised cleaning times and less downtime</li>
                <li>Lower personnel cost than manual cleaning</li>
                <li>Lower chemical cost through controlled dosing</li>
                <li>Cleaning parameters (flow rate, concentration, temperature) met and monitored</li>
                <li>Operator-friendly HMI</li>
              </ul>
            </div>
            <div className="tv-doc__stack">
              <figure className="tv-doc__fig">
                <img src="assets/img/projects/cip/CIPTechnicalData.jpg" width="550" height="340" loading="lazy" alt="Rendering of a CIP module with four tanks" data-lightbox="assets/img/projects/cip/CIPTechnicalData.jpg" />
              </figure>
              <figure className="tv-doc__fig">
                <img src="assets/img/projects/cipsystem.jpg" width="798" height="478" loading="lazy" alt="SCADA screen of a CIP system" data-lightbox="assets/img/projects/cipsystem.jpg" />
                <figcaption>CIP SCADA screen.</figcaption>
              </figure>
            </div>
          </div>
        </Section>
        <Ask
          photo={<img src="assets/img/projects/cip/CIPAdvantages.png" width="935" height="506" loading="lazy" alt="CIP tanks and piping on site" />}
          title="Tell us about your application"
          text="Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it."
        />
        <More>
          <div>
            <Links
              title="Brochure"
              items={[
                ["CIP systems", "downloads/CIP%20systems.pdf", "661 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Automation Solutions", "automation.html"],
                ["Milk Silos & Storage Tanks", "tanks.html"],
                ["Liquid Milk Process Solution", "milkprocessing.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
