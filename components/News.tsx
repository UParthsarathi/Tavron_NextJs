import { formatDate, type NewsItem } from "@/lib/news";
import s from "./News.module.css";

export { s };

/** the item's type, in its colour, and its date */
export function NewsMeta({ item }: { item: NewsItem }) {
  return (
    <p className={s.meta}>
      <span className={s.tag}>{item.type}</span>
      <time dateTime={item.date}>{formatDate(item.date)}</time>
    </p>
  );
}

/** a compact row: photo, meta and title, the whole row a link to the item */
export function NewsRow({ item, lead = false }: { item: NewsItem; lead?: boolean }) {
  return (
    <article className={lead ? `${s.row} ${s.lead}` : s.row} data-type={item.type.toLowerCase()}>
      {item.image && (
        <figure className={`${s.rowPhoto} tv-num`}>
          <img src={item.image.src} width={item.image.width} height={item.image.height} loading={lead ? undefined : "lazy"} alt={item.image.alt} />
        </figure>
      )}
      <div className={s.rowText}>
        <NewsMeta item={item} />
        <h3 className={s.rowTitle}><a href={`news/${item.slug}`}>{item.title}</a></h3>
        <p className={s.rowSummary}>{item.summary}</p>
      </div>
    </article>
  );
}

/** the newest items, for pages other than /news (the home page) */
export function NewsStrip({ items }: { items: NewsItem[] }) {
  if (!items.length) return null;
  return (
    <section className="tv-section tv-section--surface" id="news" aria-labelledby="news-title">
      <div className="tv-wrap">
        <div className={s.stripHead}>
          <div className="tv-head">
            <span className="tv-eyebrow">News</span>
            <h2 className="tv-h2" id="news-title">From the factory</h2>
            <p>What&apos;s leaving our Chennai factory, and where to meet the team.</p>
          </div>
          <a href="news.html" className="tv-btn tv-btn--ghost">All news</a>
        </div>
        <div className={`${s.page} ${s.strip}`}>
          {items.map((item) => <NewsRow key={item.slug} item={item} />)}
        </div>
      </div>
    </section>
  );
}

/** closing band on the news pages */
export function NewsBand() {
  return (
    <section className={s.band}>
      <div className={`${s.wrap} ${s.bandGrid}`}>
        <div>
          <h2 className={s.bandTitle}>Tell us about your line.</h2>
          <p className={s.bandText}>Send your capacity and product mix. We&apos;ll come back with a scheme and a budget.</p>
        </div>
        <div className={s.bandActions}>
          <a href="contact.html" className="tv-btn tv-btn--primary">Request a quotation</a>
          <a href="https://www.linkedin.com/company/tavron-engineers" target="_blank" rel="noopener" className="tv-btn tv-btn--on-dark">Follow us on LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
