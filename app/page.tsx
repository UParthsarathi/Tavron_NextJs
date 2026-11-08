import { entry, industries, products } from "@/components/catalog";
import { Site } from "@/components/Site";

// [logo file in assets/img/clients, client name] for the scrolling strip
const clients = [
  ["hatson.png", "Hatsun"],
  ["dodla.JPG", "Dodla Dairy"],
  ["heritage.jpg", "Heritage Foods"],
  ["cavinkare.jpg", "CavinKare"],
  ["pepsico.png", "PepsiCo"],
  ["aachi.png", "Aachi"],
  ["a2b.png", "Adyar Ananda Bhavan"],
  ["arun.jpg", "Arun Ice Creams"],
  ["grb.jpg", "GRB"],
  ["thirumala.jpg", "Thirumala Milk"],
  ["parag.jpg", "Parag Milk Foods"],
  ["creamline-jersey.png", "Creamline Jersey"],
  ["suguna.jpg", "Suguna"],
  ["kemin.jpg", "Kemin"],
];

// [title, text, Remix icon] for "How we work"
const stages = [
  ["Define objective", "Throughput, product mix and site constraints, agreed first.", "ri-focus-3-line"],
  ["Problem analysis", "Where the line loses time, yield or heat.", "ri-search-eye-line"],
  ["System engineering", "Process scheme, sizing, layout and piping.", "ri-git-branch-line"],
  ["Control integration", "PLC, HMI, SCADA and instrumentation.", "ri-cpu-line"],
  ["Commissioning & launch", "Installed, handed over running, then supported.", "ri-rocket-2-line"],
];

export default function Page() {
  return (
    <Site
      title={"Tavron Engineers — Process Equipment & Turnkey Plants for Dairy, Food & Beverage"}
      description="ISO 9001:2015 certified OEM and system integrator since 2004. Bulk milk coolers, plate heat exchangers, SS centrifugal pumps, evaporators and spray dryers, plus complete turnkey dairy and food processing plants. Chennai, India."
      keywords="bulk milk cooler, plate heat exchanger, SS centrifugal pump, spray dryer, evaporator, dairy plant, turnkey milk processing plant, Chennai"
      ogTitle={"Tavron Engineers — Process Equipment & Turnkey Plants"}
      ogDescription="ISO 9001:2015 certified manufacturer of critical equipment for the dairy, food, beverage and chemical industry. Turnkey plants delivered across India since 2004."
      image="assets/img/slides/slide1x1366.jpg"
      active="menu_home"
    >
      <section className="tv-hero">
        <div className="tv-hero__media" aria-hidden="true">
          <div className="tv-hero__slide is-active" style={{"backgroundImage":"url('assets/img/hero/hero-aisle.jpg')"}}></div>
          <div className="tv-hero__slide" style={{"backgroundImage":"url('assets/img/hero/hero-tank.jpg')"}}></div>
          <div className="tv-hero__slide" style={{"backgroundImage":"url('assets/img/hero/hero-vessels.jpg')"}}></div>
        </div>
        <div className="tv-hero__grid" aria-hidden="true"></div>
        <div className="tv-wrap tv-wrap--wide">
          <div className="tv-hero__inner">
            <span className="tv-eyebrow">ISO 9001:2015 Certified · Chennai, India</span>
            <h1 className="tv-h1">
              Critical process equipment.
              <br />
              <em>Complete turnkey plants.</em>
            </h1>
            <p className="tv-hero__sub">{" Tavron Engineers designs, builds, installs and supports the equipment behind India's dairy, food, beverage and chemical plants — from a single bulk milk cooler to a fully automated milk powder line. "}</p>
            <div className="tv-hero__cta">
              <a href="#products" className="tv-btn tv-btn--primary">
                {"Explore our products "}
                <i className="ri-arrow-right-line"></i>
              </a>
              <a href="contact.html" className="tv-btn tv-btn--ghost">Talk to an engineer</a>
            </div>
            <div className="tv-hero__rail">
              <div>
                <strong>2004</strong>
                <span>Established</span>
              </div>
              <div>
                <strong>20,000</strong>
                <span>Sq.ft factory</span>
              </div>
              <div>
                <strong>70+</strong>
                <span>Client brands</span>
              </div>
              <div>
                <strong>8</strong>
                <span>Product lines</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#how-we-work" className="tv-hero__scrollcue" aria-label="Scroll down"><i className="ri-arrow-down-line"></i></a>
      </section>
      <main>
        <section className="tv-marquee">
          <p className="tv-marquee__label">Trusted by dairy, food and beverage leaders</p>
          <div className="tv-marquee__track">
            {clients.map(([file, name]) => <img key={file} src={`assets/img/clients/${file}`} alt={name} loading="lazy" />)}
          </div>
        </section>
        <section className="tv-section" id="industries">
          <div className="tv-wrap">
            <div className="tv-head tv-head--center tv-reveal">
              <span className="tv-eyebrow">Industries</span>
              <h2 className="tv-h2">Industries we serve</h2>
              <p>Process equipment and complete plants for six industries.</p>
            </div>
            <div className="tv-grid tv-grid--3 tv-inds">
              {industries.map((ind, i) => (
                <figure key={ind.label} className="tv-ind tv-reveal" data-d={i % 3 || undefined}>
                  <img src={ind.image} alt={ind.alt} loading="lazy" />
                  <figcaption>{ind.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className="tv-section tv-section--blue" id="how-we-work">
          <div className="tv-wrap">
            <div className="tv-head tv-head--center tv-reveal">
              <span className="tv-eyebrow">How we work</span>
              <h2 className="tv-h2">Design. Build. Implement. Support.</h2>
              <p>A single-source partner from the business objective through to long-term support. Five stages, one contract.</p>
            </div>
            <div className="tv-grid tv-grid--5 tv-stages">
              {stages.map(([title, text, icon], i) => (
                <article key={title} className="tv-card tv-reveal" data-d={i || undefined}>
                  <span className="tv-card__num">{`Stage 0${i + 1}`}</span>
                  <div className="tv-card__icon"><i className={icon}></i></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="tv-section tv-section--surface" id="products">
          <div className="tv-wrap">
            <div className="tv-head tv-reveal">
              <span className="tv-eyebrow">Products</span>
              <h2 className="tv-h2">Equipment built for continuous production</h2>
              <p>Eight product categories, each engineered to hygienic-design standards and available in configurations matched to your capacity.</p>
            </div>
            <div className="tv-grid tv-grid--4">
              {products.map((p, i) => (
                <article key={p.label} className="tv-prod tv-reveal" data-d={i % 4 || undefined}>
                  <div className="tv-prod__media">
                    <img src={p.image} alt={p.alt} loading="lazy" />
                  </div>
                  <div className="tv-prod__body">
                    <h3>{p.label}</h3>
                    <ul className="tv-prod__list">
                      {p.items.map(entry).map(({ label, href }) => <li key={label}>{href ? <a href={href}>{label}</a> : label}</li>)}
                    </ul>
                    <div className="tv-prod__foot">
                      <span className="tv-prod__spec">{`${p.items.length} products`}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="tv-section tv-section--turnkey" id="turnkey">
          <div className="tv-wrap">
            <div className="tv-split tv-split--flip">
              <div className="tv-reveal">
                <span className="tv-eyebrow">Turnkey projects</span>
                <h2 className="tv-h2">Complete processing plants, commissioned end to end</h2>
                <p className="tv-lead">{" One contract, one point of responsibility, one commissioning date — rather than stitching together separate vendors and owning every gap between them. "}</p>
                <div className="tv-turnkey__cta">
                  <a href="milkprocessing.html" className="tv-btn tv-btn--primary">
                    {"Explore projects "}
                    <i className="ri-arrow-right-line"></i>
                  </a>
                  <a href="automation.html" className="tv-btn tv-btn--ghost">
                    {"Automation & SCADA "}
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
              <div className="tv-split__figure tv-reveal" data-d="1">
                <img src="assets/img/slides/slide2x1366.jpg" alt="Cutaway view of a Tavron multi-floor spray dryer plant showing the drying chamber, cyclone, fluid bed and process floors" loading="lazy" />
                <p className="tv-lines">Liquid milk, powder, butter, ghee, paneer, cheese, curd and ice cream lines — plus CIP, process piping and refrigeration.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="tv-section">
          <div className="tv-wrap">
            <div className="tv-cta tv-reveal">
              <div className="tv-cta__text">
                <span className="tv-eyebrow">Get in touch</span>
                <h2 className="tv-h2">Tell us about your line.</h2>
                <p>Send your capacity and product mix. We'll come back with a scheme and a budget.</p>
              </div>
              <div className="tv-cta__actions">
                <a href="contact.html" className="tv-btn tv-btn--primary">
                  {"Request a quote "}
                  <i className="ri-arrow-right-line"></i>
                </a>
                <a href="mailto:sales@tavron.net" className="tv-btn tv-btn--on-dark">
                  <i className="ri-mail-line"></i>
                  {" sales@tavron.net"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Site>
  );
}
