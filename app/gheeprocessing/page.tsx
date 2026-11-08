import { Ask, Doc, Links, More, Section } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Ghee Plant Manufacturer | Ghee Boiler, Clarifier | Tavron Engineers"
      description="Ghee boilers from 100 L to 5,000 L, ghee settling and storage tanks to 10,000 L and ghee clarifiers of 500 and 1,000 LPH, in SS 304 / SS 316."
      path="gheeprocessing.html"
      image="assets/img/projects/gheeprocessing.jpg"
      active="menu_butter"
      wa="to discuss a ghee plant"
    >
      <Doc
        parent="turnkey"
        name="Ghee"
        title="Ghee Processing Plants"
        label="Turnkey plant"
        intro="Ghee boilers, settling and storage tanks and ghee clarifiers from 100 L to 10,000 L, in SS 304 / SS 316. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/gheeprocessing.jpg" width="798" height="478" alt="SCADA screen of a ghee processing section with boilers, settling tanks and clarifier" data-lightbox="assets/img/projects/gheeprocessing.jpg" />
          </figure>
          <div className="tv-doc__stack">
            <div className="tv-tablewrap">
              <table className="tv-table">
                <thead>
                  <tr>
                    <th scope="col">Equipment</th>
                    <th scope="col">Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Ghee boiler</th>
                    <td>100 L to 5,000 L</td>
                  </tr>
                  <tr>
                    <th scope="row">Ghee settling and storage tank</th>
                    <td>100 L to 10,000 L</td>
                  </tr>
                  <tr>
                    <th scope="row">Ghee clarifier</th>
                    <td>500 LPH and 1,000 LPH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Section id="equipment" label="Equipment" title="What goes into the line">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/ghee-processing/ghee_boiler.jpg" width="448" height="556" loading="lazy" alt="Ghee boiler with top-mounted agitator drive" data-lightbox="assets/img/projects/ghee-processing/ghee_boiler.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Ghee boiler</h3>
                <ul className="tv-ticks">
                  <li>Hemispherical, or conical with laser-welded dimple plate</li>
                  <li>Agitator with AC drive for speed control</li>
                  <li>Steam control valve</li>
                  <li>Adjustable ball feet for easier piping</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/ghee-processing/ghee-setting-tank.jpg" width="300" height="857" loading="lazy" alt="Conical ghee settling tank on legs" data-lightbox="assets/img/projects/ghee-processing/ghee-setting-tank.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Ghee settling and storage tanks</h3>
                <ul className="tv-ticks">
                  <li>Conical, with or without agitator</li>
                  <li>With or without insulation</li>
                  <li>Finished to international standard</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/ghee-processing/ghee-clarifier.jpg" width="500" height="500" loading="lazy" alt="Ghee clarifier" data-lightbox="assets/img/projects/ghee-processing/ghee-clarifier.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Ghee clarifier</h3>
                <ul className="tv-ticks">
                  <li>Bowls in SS 304 / SS 316</li>
                  <li>Solid-retaining or auto-discharge bowl</li>
                  <li>Motor with clutch for a smooth start</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Ask
          title="Planning a plant?"
          text="Send your capacity and product mix. We'll come back with a scheme and a budget."
        />
        <More>
          <div>
            <Links
              title="Brochures"
              items={[
                ["Ghee plant", "downloads/Ghee%20Plant.pdf", "252 KB"],
                ["PHE and ghee plant", "downloads/PHEGheePlant.pdf", "1.7 MB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Butter & Ghee Solution", "ButterProcessing.html"],
                ["Automation Solutions", "automation.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
