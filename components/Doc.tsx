// Building blocks of the product and info pages (the .tv-doc layout):
//
//   <Doc …>                    breadcrumb, title, intro, quotation button
//     <Specs items={…} />      key facts beside the hero photo
//     <Section …>…</Section>   a numbered content section
//       <Faq items={…} />      questions and answers
//     <Ask … />                enquiry box
//     <More>                   brochures and related pages, one <div> per column
//       <div><Links … /></div>
//     </More>
//   </Doc>

const parents = {
  products: ["Products", "index.html#products"],
  about: ["About us", "about.html"],
} as const;

type DocProps = {
  /** breadcrumb parent; leave out on top-level pages like Contact */
  parent?: keyof typeof parents;
  /** the page's breadcrumb name, and its h1 unless `title` is given */
  name: string;
  title?: string;
  label: string;
  intro: string;
  /** "Request a quotation" button under the intro */
  quote?: boolean;
  /** without the tv-doc--train modifier */
  plain?: boolean;
  /** an extra class for a page-specific look, e.g. "tv-doc--contact" */
  className?: string;
  children: React.ReactNode;
};

export function Doc({ parent, name, title = name, label, intro, quote = true, plain, className, children }: DocProps) {
  const p = parent && parents[parent];
  return (
    <main id="main">
      <article className={["tv-doc", !plain && "tv-doc--train", className].filter(Boolean).join(" ")}>
        <div className="tv-doc__wrap">
          <ol className="tv-doc__crumb">
            <li><a href="index.html">Home</a></li>
            {p && <li><a href={p[1]}>{p[0]}</a></li>}
            <li aria-current="page">{name}</li>
          </ol>
          <p className="tv-doc__label">{label}</p>
          <h1 className="tv-doc__title">{title}</h1>
          <p className="tv-doc__intro">{intro}</p>
          {quote && <div className="tv-doc__cta"><Quote /></div>}
          {children}
        </div>
      </article>
    </main>
  );
}

function Quote({ label = "Request a quotation" }: { label?: string }) {
  return <a href="contact.html" className="tv-btn tv-btn--primary">{label + " "}<i className="ri-arrow-right-line"></i></a>;
}

/** [term, value] rows */
export function Specs({ items }: { items: [string, string][] }) {
  return (
    <dl className="tv-doc__dl">
      {items.map(([term, value], i) => <div key={i}><dt>{term}</dt><dd>{value}</dd></div>)}
    </dl>
  );
}

export function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="tv-doc__sec" id={id}>
      <p className="tv-doc__label">{label}</p>
      <h2 className="tv-doc__h2">{title}</h2>
      {children}
    </section>
  );
}

/** [question, answer] pairs; the first starts open */
export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="tv-faq">
      {items.map(([q, a], i) => (
        <details key={i} open={i === 0}>
          <summary><h3>{q}</h3><i className="ri-arrow-down-s-line"></i></summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

type AskProps = { title: string; text: string; button?: string; photo?: React.ReactNode; id?: string };

export function Ask({ title, text, button, photo, id = "enquire" }: AskProps) {
  return (
    <div className={photo ? "tv-doc__ask" : "tv-doc__ask tv-doc__ask--plain"} id={id}>
      {photo && <figure className="tv-doc__ask-photo">{photo}</figure>}
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="tv-doc__cta">
          <Quote label={button} />
          <a href="tel:+919176610713" className="tv-btn tv-btn--ghost"><i className="ri-phone-line"></i>{" +91 91766 10713"}</a>
        </div>
      </div>
    </div>
  );
}

export function More({ id = "more", children }: { id?: string; children: React.ReactNode }) {
  return (
    <section className="tv-doc__sec" id={id}>
      <div className="tv-doc__cols">{children}</div>
    </section>
  );
}

/** [label, href, size?]: a .pdf opens in a new tab with a download icon (and its size, e.g. "4.0 MB"),
 *  an http link opens in a new tab, anything else is a page on the site. */
export type Link = [label: string, href: string, size?: string];

export function Links({ title, items }: { title: string; items: Link[] }) {
  return (
    <div className="tv-doc__group">
      <p className="tv-doc__label">{title}</p>
      <ul className="tv-doc__links">
        {items.map(([label, href, size], i) => {
          const pdf = href.endsWith(".pdf"), external = href.startsWith("http");
          const newTab = pdf || external;
          return (
            <li key={i}>
              <a href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener" : undefined}>
                {label + " "}
                {size && <small>{`PDF, ${size.replace(" ", " ")}`}</small>}
                <i className={pdf ? "ri-download-2-line" : external ? "ri-external-link-line" : "ri-arrow-right-line"}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
