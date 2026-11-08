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
| Menu entries, product & industry lists       | `components/catalog.ts` (menu and home page cards both read it) |
| Rest of the menu, header, mobile menu        | `components/Header.tsx`                   |
| Footer (addresses, phones, social links)     | `components/Footer.tsx`                   |
| SEO tags, WhatsApp button, page frame        | `components/Site.tsx`                     |
| Product-page blocks (breadcrumb, specs, sections, enquiry box, brochure links) | `components/Doc.tsx` |
| Scripts (slider, lightbox, reveal, contact form) | `components/Behaviour.tsx`            |
| Styles                                       | `public/assets/css/tavron-modern.css`     |

Each page is `<Site …seo props…>` around its content; product pages put a `<Doc>` inside it.
`components/Doc.tsx` lists its blocks at the top. Old `.html` URLs (e.g. `/pumps.html`) are rewritten
to the routes in `next.config.ts`.
