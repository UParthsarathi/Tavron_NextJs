import s from "@/components/Videos.module.css";
import { Site } from "@/components/Site";
import { VideoGallery } from "@/components/VideoGallery";
import { formatDate } from "@/lib/news";
import { getVideos, isoDuration } from "@/lib/videos";

const CHANNEL = "https://www.youtube.com/@tavronsales3868";

export default async function Page() {
  const videos = await getVideos();
  // lets search engines show each video, with its thumbnail and length, in results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": videos.map((v) => ({
      "@type": "VideoObject",
      name: v.title,
      description: v.description ?? `${v.title}, by Tavron Engineers`,
      thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
      uploadDate: v.date,
      ...(v.duration && { duration: isoDuration(v.duration) }),
      embedUrl: `https://www.youtube.com/embed/${v.id}`,
      url: `https://www.youtube.com/watch?v=${v.id}`,
    })),
  };
  return (
    <Site
      title="Videos | Tavron Engineers"
      description="Watch Tavron Engineers equipment at work: falling film evaporators, CIP systems, milk and juice process plants, spray dryers and milk powder drying."
      path="videos.html"
      image="assets/img/hero/hero-aisle.jpg"
      active="menu_videos"
    >
      <link rel="preconnect" href="https://i.ytimg.com" />
      {videos.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <main id="main" className={s.page}>
        <header className={`${s.wrap} ${s.hero}`}>
          <div>
            <ol className={s.crumb}>
              <li><a href="index.html">Home</a></li>
              <li aria-current="page">Videos</li>
            </ol>
            <h1 className={s.title}>Videos</h1>
            <p className={s.lede}>Tavron equipment and plants at work.</p>
          </div>
          <a className={s.channel} href={CHANNEL} target="_blank" rel="noopener">
            Tavron on YouTube
            <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3.5 2.5 H9.5 V8.5 M9.5 2.5 L2.5 9.5" /></svg>
          </a>
        </header>

        <div className={s.wrap}>
          {videos.length > 0 ? (
            <VideoGallery
              videos={videos.map((v) => ({
                id: v.id,
                title: v.title,
                date: v.date,
                dateLabel: formatDate(v.date),
                duration: v.duration,
                portrait: v.portrait,
                related: v.related,
              }))}
            />
          ) : (
            <p className={s.empty}>
              Videos of our equipment and plants will appear here. Until then, <a href="downloads.html">our brochures</a> show what we build.
            </p>
          )}

          <section className={s.end}>
            <div>
              <h2 className={s.endTitle}>Want a line like this in your plant?</h2>
              <p className={s.endText}>Send your capacity and product mix. We&apos;ll come back with a scheme and a budget.</p>
            </div>
            <div className={s.endActions}>
              <a href="contact.html" className="tv-btn tv-btn--primary">Request a quotation</a>
              <a href="downloads.html" className="tv-btn tv-btn--ghost">Brochures</a>
            </div>
          </section>
        </div>
      </main>
    </Site>
  );
}
