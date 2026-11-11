import type { ReactNode } from "react";
import type { Link } from "./Doc";
import s from "./Plant.module.css";

// A turnkey plant page, kept basic: title, intro and a photo; the key facts in one row; then photo
// and text side by side, the photo's side alternating: what's in the plant and the page's own
// sections, written as paragraphs. Then dairies we work with, questions buyers ask and the next step.

/** [src, width, height, alt] */
export type Img = [string, number, number, string];
type Photo = { img: Img; name: string; note?: ReactNode };

type Props = {
  crumb: string;
  title: string;
  intro: string;
  /** the opening photo; otherwise the first photo of `built` big enough to sit beside text */
  photo?: Img;
  /** "What's in the plant": a few paragraphs, the equipment in process order */
  plant: ReactNode;
  facts: [string, string][];
  /** after the plant, each with paragraphs beside the next photo of `built` */
  sections?: { title: string; aside: ReactNode; text: ReactNode }[];
  /** questions and answers, also published as FAQPage data */
  faq?: [string, string][];
  /** "Dairies we work with", shown unless false */
  dairies?: boolean;
  /** photos of the equipment, used beside the text in order; any left over aren't shown */
  built: Photo[];
  /** `ask` finishes "Tell us …, and we'll come back with a scheme and a budget." */
  close: { title: string; ask: string; files: Link[] };
  /** ends the WhatsApp message "Hi Tavron, I'd like …." */
  wa: string;
};

const pdf = (href: string) => href.endsWith(".pdf");

// Photos that several plants share.
export const photos = {
  htst: ["assets/img/projects/MilkProcessing/milkpro7b.jpg", 700, 525, "Skid-mounted HTST pasteurizer with plate heat exchanger"],
  tank: ["assets/img/projects/MilkProcessing/milkpro6b.jpg", 500, 707, "Insulated vertical stainless-steel process tank with top agitator"],
  phe: ["assets/img/projects/MilkProcessing/milkpro1b.jpg", 700, 791, "Plate heat exchanger on a stainless-steel frame"],
  pumps: ["assets/img/pumps/pumps1b.jpg", 500, 400, "Stainless-steel centrifugal pumps"],
  cip: ["assets/img/projects/MilkProcessing/milkpro2b.jpg", 700, 394, "Skid-mounted CIP system with tanks and control panel"],
  spray: ["assets/img/projects/MilkProcessing/milkpro5b.jpg", 700, 538, "Rendering of a multi-floor spray dryer plant with drying chamber and cyclone"],
} satisfies Record<string, Img>;

/** dairies on our client list: [logo in assets/img/clients, name] */
const dairies: [string, string][] = [
  ["hatson.png", "Hatsun"], ["heritage.jpg", "Heritage"], ["doodla.jpg", "Dodla Dairy"], ["parag.jpg", "Parag"],
  ["prabhat.jpg", "Prabhat Dairy"], ["thirumala.jpg", "Thirumala"], ["creamline-jersey.png", "Creamline Jersey"], ["shruthi-milk.png", "Shruthi Milk"],
  ["kcmilk.jpg", "KC Milk"], ["cowma.jpg", "Cowma Milk"], ["tamil.jpg", "Tamil Paal"], ["vallhabha.jpg", "Vallhabha"],
];

/** a heading and its text, beside a photo (on the right when `flip`), or at full width without one */
function Row({ id, title, lead, photo, flip, children }: { id: string; title: string; lead: ReactNode; photo?: Photo; flip?: boolean; children?: ReactNode }) {
  return (
    <section aria-labelledby={id} className={photo ? `${s.row} ${flip ? s.flip : ""}` : s.block}>
      {photo && (
        <figure className={`${s.fig} ${s.side} tv-num`}>
          <img className={s.photo} src={photo.img[0]} width={photo.img[1]} height={photo.img[2]} loading="lazy" alt={photo.img[3]} data-lightbox={photo.img[0]} />
          <figcaption><strong>{photo.name}</strong>{photo.note}</figcaption>
        </figure>
      )}
      <div>
        <h2 className={s.h2} id={id}>{title}</h2>
        <p className={s.lead}>{lead}</p>
        {children}
      </div>
    </section>
  );
}

export function Plant(p: Props) {
  const waHref = "https://wa.me/919176610713?text=" + encodeURIComponent(`Hi Tavron, I'd like ${p.wa}.`).replace(/'/g, "%27");
  const brochure = p.close.files.find(([, href]) => pdf(href));

  // Photos under 400px wide would blur beside the text, so they wait for the grid.
  const side = p.built.filter((b) => b.img[1] >= 400);
  const hero = p.photo ?? side.shift()?.img;
  const listPhoto = side.shift();
  const secPhotos = (p.sections ?? []).map(() => side.shift());

  return (
    <main id="main" className={s.page}>
      <div className={s.wrap}>
        <div className={s.hero}>
          <div>
            <ol className={s.crumb}>
              <li><a href="index.html">Home</a></li>
              <li><a href="index.html#turnkey">Turnkey solutions</a></li>
              <li aria-current="page">{p.crumb}</li>
            </ol>
            <h1 className={s.title}>{p.title}</h1>
            <p className={s.intro}>{p.intro}</p>
            <div className={s.act}>
              <a href="contact.html" className="tv-btn tv-btn--primary">{"Plan a plant with us "}<i className="ri-arrow-right-line"></i></a>
              {brochure && (
                <a href={brochure[1]} className="tv-btn tv-btn--ghost" target="_blank" rel="noopener">
                  {`${brochure[0]} (PDF) `}<i className="ri-download-2-line"></i>
                </a>
              )}
            </div>
          </div>
          {hero && (
            <figure className={`${s.fig} tv-num`}>
              <img className={s.photo} src={hero[0]} width={hero[1]} height={hero[2]} alt={hero[3]} data-lightbox={hero[0]} />
            </figure>
          )}
        </div>

        <dl className={s.facts}>
          {p.facts.map(([dt, dd]) => <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>)}
        </dl>

        <Row id="pl-plant" title="What's in the plant" lead="A typical plant. Detailed P&ID and layout drawings come with your proposal." photo={listPhoto}>
          <div className={s.prose}>{p.plant}</div>
        </Row>

        {p.sections?.map((sec, i) => (
          <Row key={sec.title} id={`pl-s${i}`} title={sec.title} lead={sec.aside} photo={secPhotos[i]} flip={i % 2 === 0}>
            <div className={s.prose}>{sec.text}</div>
          </Row>
        ))}


        {p.dairies !== false && (
          <Row id="pl-dairies" title="Dairies we work with" lead={<>Some of the dairies on our client list. <a href="clients.html">All clients</a></>}>
            <ul className={s.logos}>
              {dairies.map(([file, name]) => <li key={file}><img src={`assets/img/clients/${file}`} loading="lazy" alt={name} /></li>)}
            </ul>
          </Row>
        )}

        {p.faq && (
          <Row id="pl-faq" title="Questions buyers ask" lead={<>Something else? Call <a href="tel:+919176610713">+91&nbsp;91766&nbsp;10713</a>.</>}>
            <div className={s.faq}>
              {p.faq.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary><h3>{q}</h3></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: p.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
                }),
              }}
            />
          </Row>
        )}
      </div>

      <section className={s.close} aria-labelledby="pl-close">
        <div className={`${s.wrap} ${s.closeIn}`}>
          <div>
            <h2 className={s.h2} id="pl-close">{p.close.title}</h2>
            <p className={s.lead}>Tell us {p.close.ask}, and we&apos;ll come back with a scheme and a budget.</p>
          </div>
          <div>
            <div className={s.act}>
              <a href="contact.html" className="tv-btn tv-btn--primary">{"Plan a plant with us "}<i className="ri-arrow-right-line"></i></a>
              <a href={waHref} className="tv-btn tv-btn--ghost" target="_blank" rel="noopener">WhatsApp us</a>
            </div>
            <div className={s.files}>
              {p.close.files.map(([label, href, size]) => (
                <a key={href} href={href} {...(pdf(href) ? { target: "_blank", rel: "noopener" } : {})}>
                  {label}
                  {size && <small>{`PDF, ${size}`}</small>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
