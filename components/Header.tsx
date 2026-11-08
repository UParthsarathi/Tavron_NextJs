import { entry, industries, products, type Item } from "./catalog";

const menu: Item[] = [
  { label: "Home", href: "index.html", id: "menu_home" },
  { label: "About Us", items: [{ label: "Company Profile", href: "about.html", id: "menu_about" }, "Why Tavron?"] },
  { label: "Industries", items: industries.map((i) => i.label) },
  {
    label: "Turnkey Solutions",
    items: [
      { label: "Liquid Milk Process Solution", href: "milkprocessing.html", id: "menu_milk" },
      { label: "Milk Powder Solution", href: "milkpowder.html", id: "menu_milkpowder" },
      { label: "Butter & Ghee Solution", href: "ButterProcessing.html", id: "menu_butter" },
      { label: "Paneer Process Solution", href: "PaneerProcessing.html", id: "menu_paneer" },
      { label: "Cheese Process Solution", href: "CheeseProcessing.html", id: "menu_cheese" },
      { label: "Curd & Yogurt Solution", href: "CurdYogurtProcessing.html", id: "menu_curdandyogurt" },
      { label: "Ice Cream Process Solution", href: "IcecreamProcessing.html", id: "menu_icecream" },
      { label: "Flavoured Milk Solution", href: "FlavouredMilkProcessing.html", id: "menu_flavouredmilk" },
      { label: "Whey Processing Solution", href: "whey.html", id: "menu_wheypowder" },
      "Beverage Processing Solution",
      "Coconut Milk Process Solution",
      "Fruit & Juice Processing Solution",
      "Spray Dryer Solution",
      "Evaporation Solution",
    ],
  },
  { label: "Products", items: products },
  { label: "News", href: "news.html", id: "menu_news" },
  { label: "Videos", href: "videos.html", id: "menu_videos" },
  { label: "Contact Us", href: "contact.html", id: "menu_contact" },
];

function Items({ items, active }: { items: Item[]; active?: string }) {
  return (
    <ul>
      {items.map((item, n) => {
        const { label, href, id, items: sub } = entry(item);
        return (
          <li key={n} id={id} className={sub ? "drop-down" : id && id === active ? "active" : undefined}>
            <a href={href}>{label}</a>
            {sub && <Items items={sub} active={active} />}
          </li>
        );
      })}
    </ul>
  );
}

function Nav({ className, active }: { className: string; active?: string }) {
  return (
    <nav className={className}>
      <Items items={menu} active={active} />
    </nav>
  );
}

export function Header({ active }: { active?: string }) {
  return (
    <header id="header" className="fixed-top">
      <div className="container-xl d-flex align-items-center">
        <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
        <Nav className="nav-menu d-none d-lg-block" active={active} />
        <div className="header-social-links">
          <a href="https://m.facebook.com/Tavron-Engineers-207077796056346/" target="new" className="facebook"><i className="icofont-facebook"></i></a>
          <a href="https://instagram.com/tavronengineers?utm_medium=copy_link" target="new" className="instagram"><i className="icofont-instagram"></i></a>
          <a href="https://www.linkedin.com/company/tavron-engineers" target="new" className="linkedin"><i className="icofont-linkedin"></i></a>
        </div>
      </div>
    </header>
  );
}

// main.js built these at runtime: the toggle prepended to <body>, then a clone of .nav-menu with
// its class swapped and the overlay appended at the end. Site renders them in those places.
export function MobileNavToggle() {
  return (
    <button type="button" className="mobile-nav-toggle d-lg-none">
      <i className="icofont-navigation-menu"></i>
    </button>
  );
}

export function MobileNav({ active }: { active?: string }) {
  return (
    <>
      <Nav className="mobile-nav d-lg-none" active={active} />
      <div className="mobile-nav-overly"></div>
    </>
  );
}
