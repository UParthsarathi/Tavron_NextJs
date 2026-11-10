import type { ReactNode } from "react";
import { equipment, industries, type Photo } from "./catalog";
import { Faq, type Link } from "./Doc";
import { Site } from "./Site";
import s from "./Industry.module.css";

// The industry pages are drawn as the process line itself: the product enters at the top, runs down a
// pipe through each stage of Tavron equipment, and comes out as finished products. Cleaning, cooling
// and control sit in a dashed loop around the line, the way the site's drawings show CIP.

// The same for every industry, after the industry's own reasons.
const company = [
  "ISO 9001:2015 certified, building process equipment in Chennai since 2004",
  "A 20,000 sq.ft factory, with in-house design, mechanical, electrical and instrumentation engineers",
  "Design, manufacture, installation and commissioning under one contract",
  "Support after handover: maintenance, replacement of worn equipment and control upgrades",
];

/** [key in `equipment`, points, name if not the equipment's own] */
type Item = [keyof typeof equipment, string[], string?];

type Props = {
  /** which entry of `industries` in components/catalog.ts this page is */
  slug: (typeof industries)[number]["slug"];
  /** <title> and meta description */
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** key facts, set out like a drawing's title block */
  specs: [string, string][];
  /** [logo file in assets/img/clients, client name] */
  clients?: { title: string; logos: [string, string][] };
  faq: [string, string][];
  brochures: Link[];
  /** ends the WhatsApp message "Hi Tavron, I'd like …." */
  wa: string;
} & (Line | Knowledge);

/** what the industry needs to know, in place of the process line (see app/dairy/page.tsx);
 *  `sources` are [title, url], cited in the content as Ref n */
type Knowledge = { children: ReactNode; sources: [string, string][] };

/** the industry as a process line of our equipment */
type Line = {
  /** heading over the process line */
  lineTitle: string;
  /** what goes into the line, e.g. "Raw milk in" */
  input: string;
  /** the stages of the line, in process order */
  stages: { name: string; text: string; items: Item[] }[];
  /** cleaning, cooling and control that serve every stage */
  around: Item[];
  /** what comes out: a label, and the plants or lines for each product if there are pages for them */
  output: { name: string; items?: Link[] };
  whyTitle: string;
  why: string[];
};

const newTab = (href: string) => (href.endsWith(".pdf") ? { target: "_blank", rel: "noopener" } : {});

function Entry({ item: [key, points, name] }: { item: Item }) {
  const e: { name: string; href: string; photo?: Photo } = equipment[key];
  return (
    <article className={e.photo ? s.entry : `${s.entry} ${s.bare}`}>
      {e.photo && (
        <figure className={s.photo}>
          <img src={e.photo[0]} width={e.photo[1]} height={e.photo[2]} loading="lazy" alt={e.photo[3]} data-lightbox={e.photo[0]} />
        </figure>
      )}
      <div>
        <h4 className={s.name}><a href={e.href} {...newTab(e.href)}>{name ?? e.name}</a></h4>
        <ul className={s.points}>{points.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    </article>
  );
}

export function Industry(p: Props) {
  const industry = industries.find((i) => i.slug === p.slug)!;
  const [src, width, height, alt] = industry.photo;
  return (
    <Site title={p.title} description={p.description} path={`${p.slug}.html`} image={src} active={`menu_${p.slug}`} wa={p.wa}>
      <main id="main" className={s.page} style={{ "--fluid": industry.color } as React.CSSProperties}>
        <header className={s.hero}>
          <div className={s.wrap}>
            <div className={s.heroGrid}>
              <div>
                <ol className={s.crumb}>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="index.html#industries">Industries</a></li>
                  <li aria-current="page">{industry.label}</li>
                </ol>
                <h1 className={s.title}>{p.h1}</h1>
                <p className={s.intro}>{p.intro}</p>
                <div className={s.actions}>
                  <a href="contact.html" className="tv-btn tv-btn--primary">Request a quotation</a>
                </div>
              </div>
              {/* the photo through a tank's sight glass */}
              <figure className={s.glass}>
                <span><img src={src} width={width} height={height} alt={alt} /></span>
              </figure>
            </div>
            <dl className={s.facts}>
              {p.specs.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
        </header>

        {"children" in p ? p.children : <>
        <section className={s.route} aria-labelledby="line">
          <div className={s.wrap}>
            <h2 className={s.routeTitle} id="line">{p.lineTitle}</h2>
            <div className={s.run}>
              <p className={s.inlet}>{p.input}</p>
              {p.stages.map((stage, i) => (
                <div className={s.stage} key={stage.name}>
                  <span className={s.node} aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className={s.stageName}>{stage.name}</h3>
                    <p className={s.stageText}>{stage.text}</p>
                  </div>
                  <div className={s.items}>{stage.items.map((item) => <Entry key={item[0]} item={item} />)}</div>
                </div>
              ))}
            </div>
            <div className={s.outlet}>
              <h3 className={s.outName}>{p.output.name}</h3>
              {p.output.items && (
                <ul className={s.outList}>
                  {p.output.items.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} {...newTab(href)}>{label}</a>
                      {href.endsWith(".pdf") && <small>PDF</small>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={s.loop}>
              <h3 className={s.loopName}>Around the whole line</h3>
              <div className={s.items}>{p.around.map((item) => <Entry key={item[0]} item={item} />)}</div>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.wrap} ${s.split}`}>
            <h2 className={s.h2}>{p.whyTitle}</h2>
            <ul className={s.why}>{[...p.why, ...company].map((w) => <li key={w}>{w}</li>)}</ul>
          </div>
        </section>
        </>}

        {p.clients && (
          <section className={s.section}>
            <div className={`${s.wrap} ${s.split}`}>
              <h2 className={s.h2}>{p.clients.title}</h2>
              <ul className={s.logos}>
                {p.clients.logos.map(([file, name]) => <li key={file}><img src={`assets/img/clients/${file}`} loading="lazy" alt={name} /></li>)}
              </ul>
            </div>
          </section>
        )}

        <section className={s.section}>
          <div className={`${s.wrap} ${s.split}`}>
            <h2 className={s.h2}>Frequently asked questions</h2>
            <Faq items={p.faq} />
          </div>
        </section>

        {"sources" in p && (
          <section className={s.section} aria-labelledby="sources">
            <div className={`${s.wrap} ${s.split}`}>
              <div>
                <h2 className={s.h2} id="sources">Sources</h2>
                <p className={s.note}>Regulations change; check the current text before you apply for a licence. Equipment ranges are from our own brochures.</p>
              </div>
              <ol className={s.sources}>
                {p.sources.map(([title, url], i) => (
                  <li key={url} id={`source-${i + 1}`}><a href={url} target="_blank" rel="noopener">{title}</a></li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section className={s.more}>
          <div className={`${s.wrap} ${s.moreGrid}`}>
            <div>
              <h2 className={s.moreTitle}>Brochures</h2>
              <ul className="tv-doc__links">
                {p.brochures.map(([label, href, size]) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener">
                      {label}
                      {size && <small>{`PDF, ${size.replace(" ", " ")}`}</small>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={s.moreTitle}>Other industries</h2>
              <ul className={s.others}>
                {industries.filter((i) => i !== industry).map((i) => (
                  <li key={i.slug}>
                    <a href={`${i.slug}.html`}>
                      <span className={s.dot} style={{ "--c": i.color } as React.CSSProperties} aria-hidden="true"></span>
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Site>
  );
}
