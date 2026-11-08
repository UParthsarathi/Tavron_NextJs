// What Tavron makes, shared by the menu (components/Header.tsx) and the home page cards.

// A plain string is an entry with no page yet. `id` is what a page passes to <Site active>.
export type Item = string | { label: string; href?: string; id?: string; items?: Item[] };

export const industries = [
  { label: "Dairy", image: "assets/img/industries/dairy.jpg", alt: "Milk pouring into a glass jar" },
  { label: "Food & Beverages", image: "assets/img/industries/food-beverages.jpg", alt: "Juice bottles with sliced citrus" },
  { label: "Chemicals", image: "assets/img/industries/chemicals.jpg", alt: "Coloured liquids being poured between laboratory flasks" },
  { label: "Nutraceuticals", image: "assets/img/industries/nutraceuticals.jpg", alt: "Softgel supplement capsules" },
  { label: "Pharma", image: "assets/img/industries/pharma.jpg", alt: "White pharmaceutical tablets" },
  { label: "Cosmetics", image: "assets/img/industries/cosmetics.jpg", alt: "Cosmetic cream jar and serum bottle" },
];

export const products: { label: string; image: string; alt: string; items: Item[] }[] = [
  {
    label: "Heat Transfer",
    image: "assets/img/home-phe.jpg",
    alt: "Plate heat exchanger",
    items: [
      { label: "Plate Heat Exchanger", href: "plateheat.html", id: "menu_plateheat" },
      { label: "Tubular Heat Exchanger", href: "tubularheat.html", id: "menu_tubularheat" },
      "Shell & Tube Heat Exchanger",
    ],
  },
  {
    label: "Dairy Equipment",
    image: "assets/img/coolers/dx-horizontal-open.jpg",
    alt: "Tavron bulk milk cooler",
    items: [
      { label: "HTST Pasteurizer", href: "pasteurisers.html", id: "menu_pasteurisers" },
      "Milk Reception System",
      { label: "Milk Silos & Storage Tanks", href: "tanks.html", id: "menu_tanks" },
      { label: "Bulk Milk Cooler", href: "bulkCoolers.html", id: "menu_bulkCoolers" },
      { label: "SS Centrifugal Pumps", href: "pumps.html", id: "menu_pumps" },
    ],
  },
  {
    label: "Process Equipments",
    image: "assets/img/dimpleJacket/dimple-jacket.jpg",
    alt: "Dimple jacket tank",
    items: [
      "Process Tanks",
      { label: "Dimple Jacket Tanks", href: "dimpleJacket.html", id: "menu_dimpleJacket" },
      "Mixing Tanks",
      { label: "Blenders", href: "blenders.html", id: "menu_blenders" },
      "Butter Melting Vat",
      "Butter Churner",
      "Ghee Vat Kettle",
    ],
  },
  {
    label: "Separation & Concentration",
    image: "assets/img/evp/forced-circulation-evaporator.jpg",
    alt: "Evaporator plant",
    items: [
      { label: "Falling Film Evaporator", href: "evaporators.html", id: "menu_evaporators" },
      { label: "Multi-Effect Evaporator", href: "evaporators.html" },
      { label: "Forced Circulation Evaporator", href: "evaporators.html" },
      "Membrane System",
    ],
  },
  {
    label: "Drying",
    image: "assets/img/spray/spray-dryer.jpg",
    alt: "Spray dryer",
    items: [{ label: "Spray Dryer", href: "spray.html", id: "menu_spray" }, "Fluid Bed Dryer", "Vibro Fluid Bed Dryer", "Powder Handling"],
  },
  {
    label: "Hygienic Flow Equipments",
    image: "assets/img/pumps/pumps1b.jpg",
    alt: "Tavron SS centrifugal pumps",
    items: [{ label: "SS Centrifugal Pumps", href: "pumps.html" }, "Valve Clusters", "Piping Solutions"],
  },
  {
    label: "Cleaning & Automation",
    image: "assets/img/projects/MilkProcessing/milkpro2b.jpg",
    alt: "CIP system installation",
    items: [
      { label: "CIP Systems", href: "cipsystem.html", id: "menu_cipsystem" },
      { label: "Automation Solution", href: "automation.html", id: "menu_automation" },
      "SCADA",
      "Control Panels",
      "Instrumentation",
    ],
  },
  {
    label: "Refrigeration",
    image: "assets/img/projects/Ref_Equi/CompressorSection.jpg",
    alt: "Refrigeration compressor section",
    items: [
      { label: "Freon Ice Water System", href: "RefrigerationEquipments.html", id: "menu_refrigeration" },
      { label: "Ammonia Ice Water System", href: "RefrigerationEquipments.html" },
      "Freon Falling Film Chiller",
      "Ammonia Falling Film Chiller",
      "Glycol System",
      "Cold Room & Freezing Rooms",
      "Automation of Refrigeration & SCADA",
    ],
  },
];

/** A menu item as an object, whichever way it was written. */
export const entry = (item: Item) => (typeof item === "string" ? { label: item, href: undefined, id: undefined, items: undefined } : item);
