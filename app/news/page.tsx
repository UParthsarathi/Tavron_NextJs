import { NewsBand, NewsRow, s } from "@/components/News";
import { Site } from "@/components/Site";
import { getNews } from "@/lib/news";
import { SITE } from "@/lib/site";

export default async function Page() {
  const news = await getNews();
  const years = [...new Set(news.map((n) => n.date.slice(0, 4)))];
  return (
    <Site
      title="News | Tavron Engineers"
      description="News from Tavron Engineers: equipment dispatched from our Chennai factory, and the events where you can meet our team."
      path="news.html"
      image={news[0]?.image?.src ?? "assets/img/news/foodpro23.png"}
      active="menu_news"
    >
      <link rel="alternate" type="application/rss+xml" title="Tavron Engineers news" href={`${SITE}news/rss.xml`} />
      <main id="main" className={s.page}>
        <header className={`${s.wrap} ${s.hero}`}>
          <ol className={s.crumb}>
            <li><a href="index.html">Home</a></li>
            <li aria-current="page">News</li>
          </ol>
          <h1 className={s.title}>News from Tavron</h1>
          <p className={s.lede}>Equipment leaving our factory in Chennai, and where you can meet our team.</p>
        </header>

        <div className={s.wrap}>
          {years.map((year, y) => (
            <section className={s.year} key={year} aria-labelledby={`y${year}`}>
              <h2 className={s.yearNum} id={`y${year}`}>{year}</h2>
              <div className={s.yearItems}>
                {news.filter((n) => n.date.startsWith(year)).map((item, i) => (
                  <NewsRow key={item.slug} item={item} lead={y === 0 && i === 0} />
                ))}
              </div>
            </section>
          ))}
          {news.length === 0 && <p className={s.lede}>There's no news yet. Follow us on LinkedIn for updates from the factory.</p>}
        </div>

        <NewsBand />
      </main>
    </Site>
  );
}
