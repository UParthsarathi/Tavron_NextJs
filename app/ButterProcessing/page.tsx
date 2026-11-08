import { Ask, Doc, Links, More, Section } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Butter & Ghee Plant Manufacturer | Butter Churn, Ghee Boiler | Tavron Engineers"}
      description="Butter churns from 50 L, butter melting vats, ghee boilers, ghee settling tanks to 10,000 L and ghee clarifiers, in SS 304 / SS 316."
      path="ButterProcessing.html"
      image="assets/img/projects/butter-processing/ButterChurn.jpg"
      active="menu_butter"
      wa="to discuss a butter and ghee plant"
    >
      <Doc
        parent="turnkey"
        name="Butter &amp; Ghee"
        title="Butter &amp; Ghee Plants"
        label="Turnkey plant"
        intro="Butter and ghee equipment from 50 L to 10,000 L: butter churns, butter melting vats, ghee boilers, settling and storage tanks and ghee clarifiers, all in SS 304 / SS 316. Built by Tavron Engineers in Chennai, India, since 2004."
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/butter-processing/ButterChurn.jpg" width="404" height="311" alt="Stainless-steel butter churn barrel on a blue frame with geared drive" data-lightbox="assets/img/projects/butter-processing/ButterChurn.jpg" />
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
                    <th scope="row">Butter churn</th>
                    <td>50 L to 5,000 L</td>
                  </tr>
                  <tr>
                    <th scope="row">Butter melting vat</th>
                    <td>100 L to 5,000 L</td>
                  </tr>
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
        <Section id="butter" label="Butter" title="Butter equipment">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/butter-processing/ButterMeltingVAT.jpg" width="500" height="397" loading="lazy" alt="Rectangular butter melting vat" data-lightbox="assets/img/projects/butter-processing/ButterMeltingVAT.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Butter melting vat</h3>
                <ul className="tv-ticks">
                  <li>Agitator for better melting</li>
                  <li>Hot water system with steam control valves</li>
                  <li>Laser-welded dimple jacket optional</li>
                  <li>Adjustable ball feet</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <div className="tv-item__body">
                <h3>Butter churn</h3>
                <ul className="tv-ticks">
                  <li>Barrel in SS 304 / SS 316; SS or carbon-steel supports</li>
                  <li>Geared drive with AC drive for variable speed</li>
                  <li>Brake motor for fine positioning</li>
                  <li>Doors that open easily; sight glass and CIP spray ball</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section id="ghee" label="Ghee" title="Ghee equipment">
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
                ["Butter & ghee plant", "downloads/Butter%20&%20Ghee%20Plant.pdf", "507 KB"],
                ["Butter churn", "downloads/Butter%20CHURN.pdf", "208 KB"],
                ["Ghee plant", "downloads/Ghee%20Plant.pdf", "252 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Ghee Processing", "gheeprocessing.html"],
                ["Khova Pans", "KhovaProcessing.html"],
                ["Dimple Jacket Tanks", "dimpleJacket.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
