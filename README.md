# Tavron Engineers website (Next.js)

```
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| To change…                                   | Edit                                      |
| -------------------------------------------- | ----------------------------------------- |
| A page's content                             | `app/<page>/page.tsx` (home: `app/page.tsx`) |
| News: add, edit or remove items              | `content/news.json` (each item gets its own page at `/news/<slug>`); read through `lib/news.ts`, which an admin panel or CMS can replace later |
| A turnkey plant page (milk, paneer, cheese, …) | `app/<plant>/page.tsx`: its drawing stations, parts list, facts and photos. The layout and the drawing generator (equipment symbols, steam, ice water, CIP) are `components/Plant.tsx` |
| An industry page's text (dairy, pharma, …)   | `app/<industry>/page.tsx`; their shared layout is `components/Industry.tsx` |
| Menu entries, product & industry lists, equipment photos | `components/catalog.ts` (menu, home page and industry pages read it) |
| Rest of the menu, header, mobile menu        | `components/Header.tsx`                   |
| Footer (addresses, phones, social links)     | `components/Footer.tsx`                   |
| SEO tags, WhatsApp button, page frame        | `components/Site.tsx`                     |
| Product-page blocks (breadcrumb, specs, sections, enquiry box, brochure links) | `components/Doc.tsx` |
| Scripts (slider, lightbox, reveal, contact form) | `components/Behaviour.tsx`            |
| Styles                                       | `public/assets/css/tavron-modern.css`     |

Each page is `<Site …seo props…>` around its content; product pages put a `<Doc>` inside it.
`components/Doc.tsx` lists its blocks at the top. Old `.html` URLs (e.g. `/pumps.html`) are rewritten
to the routes in `next.config.ts`.

## Adding news

Add an entry to `content/news.json` (in any order; the newest is shown first) and deploy. Its page (`/news/<slug>`), the home page's
"From the factory" block, `/sitemap.xml` and the RSS feed (`/news/rss.xml`) all update on their own.

- `slug`: lowercase words joined by hyphens; it becomes the address, so don't change it once published.
- `date`: give the full date, `2026-11-09`, so Google and the feed show the day it was published.
- `image`: a real photo at least 1200px wide, with `width`, `height` and an `alt` that says what's in it.
  The home page and Google both show it.
- `type`: `Dispatch` or `Event` get their own colour; any other word is shown in grey.

## Adding videos

Upload the video to YouTube, then add an entry to `content/videos.json` and deploy:

- `youtube`: the video's link, in any form YouTube gives you (`youtube.com/watch?v=…`, `youtu.be/…`, `/shorts/…`).
  A link that isn't a YouTube video is skipped, with a warning in the build log. `npm test` checks the link reader.
- `title`, and `date`: the upload date, `2026-11-09`. The newest video comes first.
- `duration` (`1:17`), `description` and `related` (the page about what the video shows) are optional
  but help people and Google. Add `"portrait": true` for a video filmed upright on a phone, so it shows
  full-height instead of between black bars.
