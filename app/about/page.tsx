import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="About Tavron Engineers | Process Equipment Manufacturer, Chennai"
      description="Tavron Engineers: ISO 9001:2015 certified OEM, solutions provider and system integrator for dairy, food and pharma, manufacturing in Chennai since 2004."
      ogDescription="ISO 9001:2015 certified OEM, solutions provider and system integrator for dairy, food and pharma, manufacturing in Chennai since 2004."
      path="about.html"
      image="assets/img/about-certificate.png"
      active="menu_about"
    >
      <main id="main" className="tv-sp">
        <div className="tv-sp__wrap">
          <ol className="tv-sp__crumb">
            <li><a href="index.html">Home</a></li>
            <li aria-current="page">Company profile</li>
          </ol>
          <div className="tv-sp__head">
            <h1 className="tv-sp__title">Design, build, implement, support.</h1>
            <div>
              <p className="tv-sp__intro">Tavron Engineers is a professionally managed, ISO 9001:2015 certified company. Since 2004 we have built process equipment and completed turnkey projects for food processing industries across India, from our base in Chennai.</p>
              <div className="tv-sp__act">
                <a href="contact.html" className="tv-btn tv-btn--primary">Contact us</a>
                <a href="downloads/TavronProfile.pdf" className="tv-sp__tel" target="_blank" rel="noopener">Company profile, PDF</a>
              </div>
            </div>
          </div>
          <figure className="tv-sheet" aria-labelledby="about-sheet-title">
            <div className="tv-sheet__zones" aria-hidden="true">
              <span style={{"left":"16.6%","top":"2px"}}>1</span>
              <span style={{"left":"33.3%","top":"2px"}}>2</span>
              <span style={{"left":"50%","top":"2px"}}>3</span>
              <span style={{"left":"66.6%","top":"2px"}}>4</span>
              <span style={{"left":"83.3%","top":"2px"}}>5</span>
              <span style={{"left":"3px","top":"30%"}}>A</span>
              <span style={{"left":"3px","top":"70%"}}>B</span>
              <span style={{"right":"3px","top":"30%"}}>A</span>
              <span style={{"right":"3px","top":"70%"}}>B</span>
            </div>
            <div className="tv-sheet__in">
              <div className="tv-sheet__draw" style={{"paddingTop":"62px","paddingBottom":"30px"}}>
                <ol className="tv-seq" style={{"--n":"5"} as React.CSSProperties}>
                  <li>
                    <h3>Define objective</h3>
                    <p>Throughput, product mix and site constraints, agreed first.</p>
                  </li>
                  <li>
                    <h3>Problem analysis</h3>
                    <p>Where the line loses time, yield or heat.</p>
                  </li>
                  <li>
                    <h3>System engineering</h3>
                    <p>Process scheme, sizing, layout and piping.</p>
                  </li>
                  <li>
                    <h3>Control integration</h3>
                    <p>PLC, HMI, SCADA and instrumentation.</p>
                  </li>
                  <li>
                    <h3>Commissioning and launch</h3>
                    <p>Installed, handed over running, then supported.</p>
                  </li>
                </ol>
                <p className="tv-sheet__cap">How a Tavron project runs. One contract, one point of responsibility, from the first meeting to long-term support.</p>
              </div>
              <dl className="tv-tblock tv-tblock--4" style={{"borderTop":"2px solid var(--ink)"}}>
                <div className="tv-tblock__title">
                  <dt>Company</dt>
                  <dd id="about-sheet-title">Tavron Engineers</dd>
                </div>
                <div>
                  <dt>Established</dt>
                  <dd>2004</dd>
                </div>
                <div>
                  <dt>Certification</dt>
                  <dd>ISO 9001:2015</dd>
                </div>
                <div>
                  <dt>Factory area</dt>
                  <dd>20,000 sq.ft</dd>
                </div>
                <div>
                  <dt>Shop floor</dt>
                  <dd>5,500 sq.ft</dd>
                </div>
                <div>
                  <dt>Profile</dt>
                  <dd>OEM, solutions provider, system integrator</dd>
                </div>
                <div>
                  <dt>Industries</dt>
                  <dd>Dairy, food and beverages, pharma</dd>
                </div>
                <div>
                  <dt>Factory</dt>
                  <dd>Chennai, Tamil Nadu</dd>
                </div>
                <div>
                  <dt>Supplies</dt>
                  <dd>Solutions, sub-systems, modules, components</dd>
                </div>
              </dl>
            </div>
          </figure>
          <section className="tv-sp__sec" aria-labelledby="about-scope">
            <div>
              <h2 className="tv-sp__h2" id="about-scope">One partner for the whole line</h2>
            </div>
            <div className="tv-sp__prose">
              <p>Tavron is a single-source partner for the engineering and process flow in food, dairy and related industries. We take responsibility for every part of system integration: the business objective, the solution, engineering, installation, and support over the operational and physical life of the system. That includes responsibility for how the system performs.</p>
              <p>A solution starts from an operations-focused look at how the plant runs today. It can bring process improvements, production best practice, performance software and material handling, in manual, mechanised or automated configurations. Systems are built to be scalable, flexible and modular, so they can change as the business grows.</p>
              <p>After handover we support the operating plan: contract or resident maintenance, replacement of worn equipment, and upgrades of controls and software.</p>
            </div>
          </section>
          <section className="tv-sp__sec" aria-labelledby="about-values">
            <div>
              <h2 className="tv-sp__h2" id="about-values">What we hold to</h2>
            </div>
            <dl className="tv-values">
              <div>
                <dt>Integrity</dt>
                <dd>Fair, honest, transparent and ethical. Everything we do must stand the test of public scrutiny.</dd>
              </div>
              <div>
                <dt>Responsibility</dt>
                <dd>Environmental and social principles in the way we work, and ownership of what our decisions lead to.</dd>
              </div>
              <div>
                <dt>Excellence</dt>
                <dd>The highest standards of quality, customers who become best in class, and technology and skills that keep improving.</dd>
              </div>
              <div>
                <dt>Pioneering</dt>
                <dd>Bold and agile, taking on challenges, using deep customer insight to develop new solutions.</dd>
              </div>
              <div>
                <dt>Unity</dt>
                <dd>Investment in our people and partners, continuous learning, and relationships built on trust and mutual respect.</dd>
              </div>
            </dl>
          </section>
          <section className="tv-sp__sec" aria-labelledby="about-vision">
            <div>
              <h2 className="tv-sp__h2" id="about-vision">Where we are going</h2>
              <figure className="tv-doccert" style={{"marginTop":"28px"}}>
                <img src="assets/img/about-certificate.png" width="603" height="848" loading="lazy" alt="ISO 9001:2015 certificate of registration for Tavron Engineers" data-lightbox="assets/img/about-certificate.png" />
                <figcaption>ISO 9001:2015 certificate of registration. Click to enlarge.</figcaption>
              </figure>
            </div>
            <div className="tv-sp__prose">
              <p>We supply quality products and solutions that make our customers more productive and competitive. As an OEM, we believe our success lies in the growth of our customers and our employees.</p>
              <dl className="tv-rows" style={{"marginTop":"28px"}}>
                <div>
                  <dt>For customers</dt>
                  <dd><p>To be known for solutions that make them more successful, and that meet their needs economically.</p></dd>
                </div>
                <div>
                  <dt>For our people</dt>
                  <dd><p>A place where passionate employees have room for creativity and entrepreneurship.</p></dd>
                </div>
              </dl>
            </div>
          </section>
          <section className="tv-sp__sec" aria-labelledby="about-more">
            <div>
              <h2 className="tv-sp__h2" id="about-more">More about us</h2>
            </div>
            <dl className="tv-rows">
              <div>
                <dt><a href="team.html">Our team</a></dt>
                <dd><p>The directors and how the company is organised.</p></dd>
              </div>
              <div>
                <dt><a href="clients.html">Our clients</a></dt>
                <dd><p>Leading brands in the dairy and food processing sectors.</p></dd>
              </div>
              <div>
                <dt><a href="downloads.html">Brochures</a></dt>
                <dd><p>Every product and plant brochure, as PDF.</p></dd>
              </div>
            </dl>
          </section>
        </div>
        <section className="tv-close" aria-labelledby="about-close">
          <div className="tv-sp__wrap tv-close__in">
            <div>
              <h2 id="about-close">Tell us about your line.</h2>
              <p>Send your capacity and product mix. We'll come back with a scheme and a budget.</p>
            </div>
            <div>
              <ul className="tv-close__need">
                <li>Capacity, in litres or kilograms a day</li>
                <li>The products you make, or want to</li>
                <li>The site and the utilities you have</li>
              </ul>
              <div className="tv-sp__act">
                <a href="contact.html" className="tv-btn tv-btn--primary">Contact us</a>
                <a href="https://wa.me/919176610713?text=Hi%20Tavron%2C%20I%27d%20like%20to%20talk%20about%20a%20project." className="tv-btn tv-btn--ghost" target="_blank" rel="noopener">WhatsApp us</a>
              </div>
              <div className="tv-close__files">
                <a href="downloads/TavronProfile.pdf" target="_blank" rel="noopener">
                  {"Company profile "}
                  <small>PDF, 2.3&nbsp;MB</small>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Site>
  );
}
