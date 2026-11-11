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
| News and videos: add, edit or remove         | At `/admin` on the site, not in a file: see "The admin" below |
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

## The admin: news and videos

Tavron's staff write news and add videos at `/admin`, signed in with their Google account. Nothing is
deployed: a change is on the site seconds after it is saved.

- **Who can sign in**: `sales@tavron.net` (the owner) and the addresses the owner adds on the admin's Staff tab.
- **News**: a draft is seen by staff only. Publishing puts it on `/news`, its own page (`/news/<address>`), the
  home page, `/sitemap.xml` and the RSS feed (`/news/rss.xml`). The address can't be changed once saved. Give
  the full date (`2026-11-09`) and a real photo at least 1200px wide. `Dispatch` and `Event` get their own colour.
- **Videos**: upload to YouTube first, then paste the link, in any form YouTube gives it. The newest comes first.

| Part                                      | Where                                                         |
| ----------------------------------------- | ------------------------------------------------------------- |
| The admin's screens                       | `app/admin/Admin.tsx`                                         |
| What the public pages read                | `lib/news.ts`, `lib/videos.ts`, through `lib/firestore.ts`    |
| Who may read and write (the actual lock)  | `firestore.rules`, `storage.rules`                            |
| Refreshing the pages after a save         | `app/api/revalidate/route.ts`                                 |
| Photos added in the admin                 | Firebase Storage, shown from `/news-photos/<name>` (`next.config.ts`) |

`content/news.json` and `content/videos.json` are the content as it was before the admin. They are shown only
if the database can't be reached.

### Firebase

The admin's data is in the Firebase project **`tavron-site-admin`** (account `sales@tavron.net`): Firestore for
the news, videos and staff list, Google sign-in, and Storage for photos.

> **`tavron-3fa96` is a different project. It runs the live tavron.net and its enquiry form. Never deploy to
> it or change anything in it from this repo.**

- After changing a rules file: `npm run rules` (tests `firestore.rules`, then deploys both rules files).
  `npm run test:rules` only tests. Both need the Firebase CLI (`npm i -g firebase-tools`), logged in.
- Photo upload needs billing linked to `tavron-site-admin` and Storage switched on in the Firebase console,
  then `npm run rules` once. Until then the rest of the admin works and photos can't be added.
- Before the admin is used on a new address (a Vercel address, tavron.net), add that address in the Firebase
  console under Authentication → Settings → Authorized domains, or Google sign-in is refused there.
