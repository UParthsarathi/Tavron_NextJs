import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"PLC, SCADA & Process Automation for Dairy and Food Plants | Tavron Engineers"}
      description="PLC and MCC panels, PLC, HMI and SCADA programming (Siemens, Allen-Bradley, Delta), installation, commissioning and retrofits for process plants."
      path="automation.html"
      image="assets/img/automation/PanelBuilding.jpg"
      active="menu_automation"
      wa="to discuss automation for my plant"
    >
      <Doc
        parent="products"
        name="Automation Solutions"
        label="Cleaning &amp; automation"
        intro="PLC and MCC panels, PLC, HMI and SCADA programming, installation and commissioning, and retrofits of legacy controls. Tavron's in-house design, mechanical, electrical and instrumentation engineers can run several turnkey projects at the same time."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/automation/PanelBuilding.jpg" width="600" height="450" alt="Stainless-steel control panel with indicator lamps and switches" data-lightbox="assets/img/automation/PanelBuilding.jpg" />
          </figure>
          <Specs
            items={[
              ["Panels", "PLC and MCC panels, built to order"],
              ["Drawings", "Full control drawing package in AutoCAD, delivered as DWG, PDF and paper"],
              ["PLC", "Siemens, Allen-Bradley, Delta and others"],
              ["SCADA", "Siemens WinCC, Allen-Bradley FactoryTalk View, Wonderware InTouch"],
              ["Programming", "New programs, upgrades and troubleshooting of existing ones"],
              ["On site", "Installation, testing and commissioning"],
            ]}
          />
        </div>
        <Section id="why" label="Why automate" title="What automation does for a plant">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <ul className="tv-ticks">
                <li>Reduces production cost</li>
                <li>Increases production efficiency</li>
                <li>Better quality control</li>
                <li>End-to-end traceability</li>
                <li>Improved worker safety</li>
                <li>Brand protection</li>
                <li>Standardised product output</li>
              </ul>
            </div>
            <figure className="tv-doc__fig">
              <img src="assets/img/tavron_automation.png" width="300" height="250" loading="lazy" alt="Chart of Tavron's automation strengths: design, expertise on multiple platforms, domain expertise, efficient project management, deep talent pool, high-performance tools" data-lightbox="assets/img/tavron_automation.png" />
              <figcaption>Why choose Tavron.</figcaption>
            </figure>
          </div>
        </Section>
        <Section id="services" label="Services" title="What we do">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/automation/plc.jpg" width="808" height="509" loading="lazy" alt="PLC wiring diagram" data-lightbox="assets/img/automation/plc.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>PLC programming</h3>
                <ul className="tv-ticks">
                  <li>New programs, upgrades and troubleshooting</li>
                  <li>Siemens, Allen-Bradley, Delta and others</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/automation/HMI.jpg" width="800" height="474" loading="lazy" alt="HMI layout screen of a process plant" data-lightbox="assets/img/automation/HMI.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>HMI programming</h3>
                <ul className="tv-ticks">
                  <li>Clear operator feedback, to avoid unnecessary downtime</li>
                  <li>Screens designed to the customer's requirement</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/automation/SCADA1.jpg" width="800" height="450" loading="lazy" alt="SCADA screen of a falling film evaporator" data-lightbox="assets/img/automation/SCADA1.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>SCADA systems</h3>
                <ul className="tv-ticks">
                  <li>Fully automated SCADA-based plant operation</li>
                  <li>For processes with large amounts of data, spread over long distances, or needing critical control</li>
                  <li>Siemens WinCC, FactoryTalk View, Wonderware InTouch</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/automation/INSTALLATION-AND-COMISIONING.jpg" width="960" height="824" loading="lazy" alt="Control panel installed beside process equipment" data-lightbox="assets/img/automation/INSTALLATION-AND-COMISIONING.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Installation and commissioning</h3>
                <ul className="tv-ticks">
                  <li>Controls installation and upgrades</li>
                  <li>Field installation, testing and commissioning</li>
                  <li>Support through start-up</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/automation/RETROFITTING.jpg" width="800" height="450" loading="lazy" alt="SCADA screen of a CIP system" data-lightbox="assets/img/automation/RETROFITTING.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Retrofits</h3>
                <ul className="tv-ticks">
                  <li>Legacy PLC and PID systems converted to current-generation PLC and automation</li>
                  <li>Faster cycles, higher output, less waste and rework</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section id="projects" label="Projects" title="Automation projects">
          <div className="tv-doc__top">
            <div className="tv-doc__prose">
              <ul className="tv-ticks">
                <li>Single and double circuit CIP</li>
                <li>Evaporator sections</li>
                <li>Dryer sections</li>
                <li>Lab model spray dryers</li>
                <li>Butter and ghee plants</li>
                <li>Milk processing plants</li>
                <li>Sterilizers</li>
                <li>Refrigeration systems</li>
                <li>Cosmetics plants</li>
              </ul>
            </div>
            <figure className="tv-doc__fig">
              <img src="assets/img/automation/AUTOMATION-PROJECT.jpg" width="600" height="450" loading="lazy" alt="Process tanks and control panel in an automated plant" data-lightbox="assets/img/automation/AUTOMATION-PROJECT.jpg" />
            </figure>
          </div>
        </Section>
        <Ask
          title="Tell us about your application"
          text="Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it."
        />
        <More>
          <div>
            <Links
              title="Brochure"
              items={[
                ["Automation", "downloads/Automation.pdf", "954 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["CIP Systems", "cipsystem.html"],
                ["Refrigeration Systems", "RefrigerationEquipments.html"],
                ["Liquid Milk Process Solution", "milkprocessing.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
