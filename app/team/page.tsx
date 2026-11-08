import { Doc, Links, More, Section } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Our Team | Tavron Engineers"
      description="The directors and departments of Tavron Engineers, Chennai."
      path="team.html"
      image="assets/img/team-hierarchy.png"
    >
      <Doc
        parent="about"
        name="Team"
        title="Our Team"
        label="Company"
        intro="The directors who lead Tavron Engineers, and how the company is organised."
        quote={false}
      >
        <Section id="directors" label="Directors" title="Directors">
          <div className="tv-people">
            <div className="tv-item tv-person">
              <figure className="tv-person__photo">
                <img src="assets/img/team/tavron_samuel.jpg" width="203" height="283" loading="lazy" alt="S. D. Samuel" />
              </figure>
              <div className="tv-item__body">
                <h3>S. D. Samuel</h3>
                <p>Director, Technical</p>
              </div>
            </div>
            <div className="tv-item tv-person">
              <figure className="tv-person__photo">
                <img src="assets/img/team/tavron_mani.jpg" width="203" height="283" loading="lazy" alt="S. Subramani" />
              </figure>
              <div className="tv-item__body">
                <h3>S. Subramani</h3>
                <p>Director, Admin</p>
              </div>
            </div>
          </div>
        </Section>
        <Section id="structure" label="Organisation" title="How we are organised">
          <figure className="tv-doc__fig">
            <img src="assets/img/team-hierarchy.png" width="842" height="478" loading="lazy" alt="Organisation chart: the two directors over marketing, design, engineering, purchase and finance, and project execution teams" data-lightbox="assets/img/team-hierarchy.png" />
            <figcaption>Organisation chart. Click to enlarge.</figcaption>
          </figure>
        </Section>
        <More>
          <div>
            <Links
              title="More about us"
              items={[
                ["Company profile", "about.html"],
                ["Our clients", "clients.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
