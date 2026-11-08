// What Tavron makes, shared by the menu (components/Header.tsx) and the home page cards.

// A plain string is an entry with no page yet. `id` is what a page passes to <Site active>.
export type Item = string | { label: string; href?: string; id?: string; items?: Item[] };

/** [src, width, height, alt] */
export type Photo = [src: string, width: number, height: number, alt: string];

// Each industry has a page at `${slug}.html` (app/<slug>/page.tsx) and the menu id `menu_${slug}`.
// `color` is its product, flowing through the pipe on its page: milk keeps the cyan the site's
// drawings already use for milk, juice is the brand amber.
export const industries = [
  { label: "Dairy", slug: "dairy", color: "#00AEEF", photo: ["assets/img/industries/dairy.jpg", 1200, 1061, "Milk pouring into a glass jar"] },
  { label: "Food & Beverages", slug: "food-beverages", color: "#E9962F", photo: ["assets/img/industries/food-beverages.jpg", 1200, 800, "Juice bottles with sliced citrus"] },
  { label: "Chemicals", slug: "chemicals", color: "#7C6CF0", photo: ["assets/img/industries/chemicals.jpg", 1200, 799, "Coloured liquids being poured between laboratory flasks"] },
  { label: "Nutraceuticals", slug: "nutraceuticals", color: "#3FA66A", photo: ["assets/img/industries/nutraceuticals.jpg", 1200, 800, "Softgel supplement capsules"] },
  { label: "Pharma", slug: "pharma", color: "#22B3A6", photo: ["assets/img/industries/pharma.jpg", 1200, 900, "White pharmaceutical tablets"] },
  { label: "Cosmetics", slug: "cosmetics", color: "#E8799A", photo: ["assets/img/industries/cosmetics.jpg", 1200, 800, "Cosmetic cream jar and serum bottle"] },
] satisfies { label: string; slug: string; color: string; photo: Photo }[];

// Equipment as listed on the industry pages. `href` is its page, or its brochure if it has none.
export const equipment = {
  bulkCoolers: { name: "Bulk Milk Coolers", href: "bulkCoolers.html", photo: ["assets/img/coolers/bulk-milk-cooler-factory-row.jpg", 540, 360, "Row of Tavron bulk milk coolers with their condensing units"] },
  pasteurisers: { name: "HTST Pasteurizers", href: "pasteurisers.html", photo: ["assets/img/projects/MilkProcessing/milkpro7b.jpg", 700, 525, "Skid-mounted HTST milk pasteurizer with plate heat exchanger and control panel"] },
  plateheat: { name: "Plate Heat Exchangers", href: "plateheat.html", photo: ["assets/img/projects/MilkProcessing/milkpro1b.jpg", 700, 791, "Plate heat exchanger on a stainless-steel frame"] },
  tubularheat: { name: "Tubular Heat Exchangers", href: "tubularheat.html", photo: ["assets/img/tubular/tubular.jpg", 500, 281, "Tubular pasteurizer with tube banks and holding tubes on a stainless-steel skid"] },
  tanks: { name: "Milk Silos & Storage Tanks", href: "tanks.html", photo: ["assets/img/tank/VerticalMilkStorageTank.jpg", 600, 688, "Row of outdoor vertical milk storage tanks"] },
  pumps: { name: "SS Centrifugal Pumps", href: "pumps.html", photo: ["assets/img/pumps/pumps1b.jpg", 500, 400, "Three stainless-steel centrifugal pumps"] },
  evaporators: { name: "Evaporators", href: "evaporators.html", photo: ["assets/img/evp/forced-circulation-evaporator.jpg", 600, 676, "Rendering of a forced circulation evaporator on a multi-level structure"] },
  spray: { name: "Spray Dryers", href: "spray.html", photo: ["assets/img/projects/MilkProcessing/milkpro5b.jpg", 700, 538, "Rendering of a multi-floor spray dryer plant with drying chamber and cyclone"] },
  labSpray: { name: "Lab & Table-Top Spray Dryers", href: "spray.html#range", photo: ["assets/img/spray/lab-model-spray-dryer.jpg", 500, 563, "Lab model spray dryer with chamber and cyclone"] },
  refrigeration: { name: "Refrigeration Systems", href: "RefrigerationEquipments.html", photo: ["assets/img/projects/Ref_Equi/CompressorSection.jpg", 500, 375, "Ammonia compressor section with motors and piping"] },
  cip: { name: "CIP Systems", href: "cipsystem.html", photo: ["assets/img/projects/MilkProcessing/milkpro2b.jpg", 700, 394, "Skid-mounted CIP system with tanks, pumps and control panel"] },
  sterilizer: { name: "Bottle Sterilizers", href: "bsterilizer.html", photo: ["assets/img/Sterlizer/BOTTLE-STERILIZER.jpg", 337, 289, "Horizontal bottle sterilizers with quick-opening doors"] },
  blenders: { name: "Ribbon Blenders", href: "blenders.html", photo: ["assets/img/blenders/RibbonBlender.jpg", 600, 414, "Horizontal ribbon blender with geared motor drive"] },
  jacketed: { name: "Dimple Jacket Tanks & Reactors", href: "dimpleJacket.html", photo: ["assets/img/dimpleJacket/dimple-jacket.jpg", 500, 783, "Vertical tank with a laser-welded dimple jacket"] },
  homogenizer: { name: "Liquid Homogenizer", href: "downloads/COSMETIC%20PROCESSING%20LINE.pdf" },
  lobePumps: { name: "Lobe Pumps", href: "downloads/COSMETIC%20PROCESSING%20LINE.pdf" },
  automation: { name: "Automation Solutions", href: "automation.html", photo: ["assets/img/automation/PanelBuilding.jpg", 600, 450, "Stainless-steel control panel with indicator lamps and switches"] },
} satisfies Record<string, { name: string; href: string; photo?: Photo }>;

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
