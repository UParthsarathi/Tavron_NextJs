import { notFound } from "next/navigation";
import { NewsBand, NewsMeta, NewsRow, s } from "@/components/News";
import { Site } from "@/components/Site";
import { formatDate, getNews, getNewsItem } from "@/lib/news";
import { SITE } from "@/lib/site";

// Every item is built at build time; an address that isn't in the news is a 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getNews()).map((n) => ({ slug: n.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getNewsItem(slug);
  if (!item) notFound();
  const others = (await getNews()).filter((n) => n.slug !== slug).slice(0, 3);
  // tells search engines this is a news article: its headline, date, photo and publisher
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.date,
    ...(item.image && { image: [SITE + item.image.src] }),
    mainEntityOfPage: `${SITE}news/${item.slug}`,
    author: { "@type": "Organization", name: "Tavron Engineers", url: SITE },
    publisher: { "@type": "Organization", name: "Tavron Engineers", logo: { "@type": "ImageObject", url: `${SITE}assets/img/logo.png` } },
  };
  return (
    <Site
      title={`${item.title} | Tavron Engineers`}
      description={item.summary}
      path={`news/${item.slug}`}
      image={item.image?.src ?? "assets/img/news/foodpro23.png"}
      ogType="article"
      active="menu_news"
    >
      <meta property="article:published_time" content={item.date} />
      <link rel="alternate" type="application/rss+xml" title="Tavron Engineers news" href={`${SITE}news/rss.xml`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main" className={s.page} data-type={item.type.toLowerCase()}>
        <article>
          <header className={`${s.wrap} ${s.hero}`}>
            <ol className={s.crumb}>
              <li><a href="index.html">Home</a></li>
              <li><a href="news.html">News</a></li>
              <li aria-current="page">{item.title}</li>
            </ol>
            <NewsMeta item={item} />
            <h1 className={`${s.title} ${s.articleTitle}`}>{item.title}</h1>
            <p className={s.lede}>{item.summary}</p>
          </header>

          {item.image && (
            <figure className={`${s.wrap} ${s.photo}`}>
              <img src={item.image.src} width={item.image.width} height={item.image.height} alt={item.image.alt} data-lightbox={item.image.src} />
            </figure>
          )}

          <div className={`${s.wrap} ${s.body}`}>
            <div className={s.text}>
              {item.body.map((p) => <p key={p}>{p}</p>)}
              {item.links && (
                <p className={s.links}>
                  {item.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener" className="tv-btn tv-btn--ghost">
                      {l.label}
                      {l.size && <small>{`PDF, ${l.size.replace(" ", " ")}`}</small>}
                    </a>
                  ))}
                </p>
              )}
            </div>
            {item.list && (
              // the list set out like a consignment note: ruled, ticked off, dated
              <aside className={s.note} aria-labelledby="list">
                <div className={s.noteHead}>
                  <h2 id="list">{item.list.title}</h2>
                  <p>{`Tavron Engineers, Chennai, ${formatDate(item.date)}`}</p>
                </div>
                <ul>{item.list.items.map((li) => <li key={li}>{li}</li>)}</ul>
              </aside>
            )}
          </div>
        </article>

        {others.length > 0 && (
          <section className={`${s.wrap} ${s.more}`} aria-labelledby="more">
            <h2 className={s.moreTitle} id="more">More news</h2>
            <div className={s.moreItems}>{others.map((n) => <NewsRow key={n.slug} item={n} />)}</div>
          </section>
        )}

        <NewsBand />
      </main>
    </Site>
  );
}
