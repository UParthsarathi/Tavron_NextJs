import { Industry } from "@/components/Industry";
import s from "@/components/Industry.module.css";
import { Ref } from "@/components/Ref";
import { Planner } from "./Planner";

// What a dairy needs to know, with the numbers sourced: FSSAI for the law, e-PG Pathshala and
// NIFTEM for the process, our brochures for our equipment. Refs are numbered as in `sources`.

const A = ({ href, children }: { href: string; children: string }) => <a href={href}>{children}</a>;

export default function Page() {
  return (
    <Industry
      slug="dairy"
      title="Dairy Plants & Equipment: FSSAI Rules, Yields, Sizing | Tavron Engineers"
      description="Plan a dairy: FSSAI licence tiers and milk grades, pasteurisation rules, paneer, ghee and powder yields, and the plants and equipment we build in Chennai."
      h1="Dairy Processing Equipment & Plants"
      intro="From chilling milk where it's collected to packing milk, curd, paneer, ghee, ice cream and powder. Here are the numbers that shape a dairy: what FSSAI requires, what your milk can yield, and the equipment each step needs."
      specs={[
        ["Plants we build", "Liquid milk, milk powder, butter and ghee, paneer, cheese, curd and yogurt, ice cream, flavoured milk, whey, casein"],
        ["Milk handled", "1,000 to 5,00,000 litres a day"],
        ["Pasteurisation", "HTST, 50 to 30,000 LPH"],
        ["Milk cooling", "Bulk milk coolers, 300 to 10,000 L"],
      ]}
      sources={[
        ["FSSAI: Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011, sub-regulation 2.1, Dairy products and analogues", "https://www.fssai.gov.in/upload/uploadfiles/files/2_%20Chapter%202_1%20(Dairy%20products%20and%20analogues).pdf"],
        ["FSSAI: eligibility for registration, state and central licences, by kind of business", "https://fssai.gov.in/upload/uploadfiles/files/Eligibility_Kind_Business_04_05_2020.pdf"],
        ["e-PG Pathshala (UGC, INFLIBNET): Technology of Milk and Milk Products, module 19, Technology of Paneer", "https://epgp.inflibnet.ac.in/epgpdata/uploads/epgp_content/Food_Technology/Technology_of_Milk_and_Milk_Products/19.Technology_of_Paneer/et/2924_et_m19.pdf"],
        ["e-PG Pathshala (UGC, INFLIBNET): Technology of Milk and Milk Products, module 10, Technology of Ghee Making", "https://epgp.inflibnet.ac.in/epgpdata/uploads/epgp_content/S000015FT/P000357/M002915/ET/1455793655ET10.pdf"],
        ["NIFTEM, PM FME scheme: Paneer Processing", "https://niftem.ac.in/newsite/pmfme/wp-content/uploads/2022/07/ppt_Paneer-Processing.pdf"],
      ]}
      clients={{
        title: "Dairy brands we work with",
        logos: [
          ["hatson.png", "Hatsun"],
          ["dodla.JPG", "Dodla Dairy"],
          ["heritage.jpg", "Heritage Foods"],
          ["thirumala.jpg", "Thirumala Milk"],
          ["parag.jpg", "Parag Milk Foods"],
          ["creamline-jersey.png", "Creamline Jersey"],
          ["arun.jpg", "Arun Ice Creams"],
          ["grb.jpg", "GRB"],
        ],
      }}
      faq={[
        ["Which FSSAI licence does a dairy need?", "It depends on the milk handled a day. Up to 500 litres a day, registration; from 501 to 50,000 litres a day, a state licence; above 50,000 litres a day (or 2,500 MT of milk solids a year), a central licence. FSSAI's FoSCoS portal lists the fees and the current rules; check there before you apply."],
        ["What temperature must milk be pasteurised at?", "Under FSSAI, every particle of milk heated to at least 72 °C and held for 15 seconds, or 63 °C for 30 minutes, or a combination that gives a negative phosphatase test, then cooled immediately to 4 °C or below. Our HTST pasteurizers hold at least 74 °C for 20 seconds."],
        ["What fat and SNF must toned and double toned milk have?", "Toned milk: at least 3.0% fat and 8.5% SNF. Double toned milk: at least 1.3% fat and 9.0% SNF."],
        ["How much paneer does milk give?", "Roughly 15 to 22 kg from 100 kg of milk, more from buffalo milk than cow milk, depending on the fat and the paneer's moisture. Paneer must stay within 60% moisture, with at least 50% fat on a dry basis."],
        ["How much ghee does butter or cream give?", "The creamery-butter method recovers about 92% of the milk fat as ghee, the direct-cream method about 88%, and the traditional desi method about 78%."],
        ["Should the ice bank be Freon or ammonia?", "Freon suits 1,000 to 20,000 litres of milk a day; ammonia 10,000 to 5,00,000 litres a day, and more on request. Between 10,000 and 20,000 litres a day, either can work."],
        ["Can I buy one machine instead of a complete plant?", "Yes. Bulk milk coolers, pasteurizers, plate heat exchangers, tanks, pumps, CIP systems and refrigeration are supplied on their own, or as part of a complete plant."],
      ]}
      brochures={[
        ["Milk plant", "downloads/Milk%20Plant.pdf", "1.8 MB"],
        ["Milk powder plant", "downloads/Milk%20Powder%20Plant.pdf", "787 KB"],
        ["Butter & ghee plant", "downloads/Butter%20&%20Ghee%20Plant.pdf", "507 KB"],
        ["Paneer plant", "downloads/Paneer%20Plant.pdf", "881 KB"],
        ["Cheese plant", "downloads/Cheese%20Plant.pdf", "1.1 MB"],
        ["Curd plant", "downloads/Curd.pdf", "973 KB"],
        ["Ice cream plant", "downloads/Ice%20Cream%20Plant.pdf", "754 KB"],
        ["Bulk milk cooler", "downloads/Bulk%20Milk%20Cooler.pdf", "611 KB"],
      ]}
      wa="to discuss a dairy project"
    >
      <Planner />

      <section className={s.section} aria-labelledby="grades">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="grades">Milk you can sell</h2>
            <p className={s.note}>
              The minimum fat and solids-not-fat (SNF) FSSAI sets for each grade.<Ref n={1} /> A <A href="milkprocessing.html">liquid milk plant</A> sets
              each grade with its cream separator.
            </p>
          </div>
          <table className={s.table}>
            <thead>
              <tr><th scope="col">Milk</th><th scope="col">Fat, minimum</th><th scope="col">SNF, minimum</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Full cream</th><td>6.0%</td><td>9.0%</td></tr>
              <tr><th scope="row">Standardised</th><td>4.5%</td><td>8.5%</td></tr>
              <tr><th scope="row">Toned</th><td>3.0%</td><td>8.5%</td></tr>
              <tr><th scope="row">Double toned</th><td>1.3%</td><td>9.0%</td></tr>
              <tr><th scope="row">Skimmed</th><td>0.5% at most</td><td>8.7%</td></tr>
              <tr className={s.group}><th scope="rowgroup" colSpan={3}>Milk as it comes from the animal</th></tr>
              <tr><th scope="row">Buffalo</th><td>5.0%</td><td>9.0%</td></tr>
              <tr><th scope="row">Cow</th><td>3.2%</td><td>8.3%</td></tr>
              <tr><th scope="row">Mixed</th><td>4.5%</td><td>8.5%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={s.section} aria-labelledby="heat">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="heat">The temperatures that matter</h2>
            <p className={s.note}>What the law sets for milk, and what good practice uses for paneer and ghee.</p>
          </div>
          <table className={s.table}>
            <thead>
              <tr><th scope="col">Step</th><th scope="col">Temperature and time</th><th scope="col">Equipment</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Pasteurising milk</th><td>At least 72 °C for 15 seconds, or 63 °C for 30 minutes<Ref n={1} /></td><td><A href="pasteurisers.html">HTST pasteurizers</A>, holding at least 74 °C for 20 seconds</td></tr>
              <tr><th scope="row">After pasteurising</th><td>Cooled at once to 4 °C or below<Ref n={1} /></td><td><A href="RefrigerationEquipments.html">Ice banks</A></td></tr>
              <tr><th scope="row">Paneer: heating the milk</th><td>85 to 90 °C, held 5 minutes<Ref n={5} /></td><td><A href="PaneerProcessing.html">Milk heating skid</A></td></tr>
              <tr><th scope="row">Paneer: coagulating</th><td>About 70 °C, with a 1% citric acid solution at the same temperature<Ref n={5} /></td><td><A href="PaneerProcessing.html">Coagulation tanks</A></td></tr>
              <tr><th scope="row">Paneer: storing</th><td>5 to 8 °C, vacuum packed<Ref n={5} /></td><td><A href="PaneerProcessing.html">Cold store</A></td></tr>
              <tr><th scope="row">Ghee: settling melted butter</th><td>About 80 °C for several hours, which drains about 74% of the butter&apos;s water before boiling<Ref n={4} /></td><td><A href="ButterProcessing.html">Melting vat and settling tank</A></td></tr>
              <tr><th scope="row">Ghee: clarifying</th><td>110 to 120 °C; 120 to 140 °C in south India<Ref n={4} /></td><td><A href="gheeprocessing.html">Ghee boilers</A></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={s.section} aria-labelledby="products">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="products">What the products must meet</h2>
            <p className={s.note}>FSSAI&apos;s composition standards<Ref n={1} />, which the plant has to make every batch to.</p>
          </div>
          <table className={s.table}>
            <thead>
              <tr><th scope="col">Product</th><th scope="col">FSSAI standard</th><th scope="col">Plant</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Paneer</th><td>Moisture 60% at most; milk fat at least 50% of the dry matter</td><td><A href="PaneerProcessing.html">Paneer</A></td></tr>
              <tr><th scope="row">Ghee</th><td>Milk fat at least 99.5%; moisture 0.5% at most</td><td><A href="gheeprocessing.html">Ghee</A></td></tr>
              <tr><th scope="row">Table butter</th><td>Milk fat at least 80%; moisture 16% at most</td><td><A href="ButterProcessing.html">Butter and ghee</A></td></tr>
              <tr><th scope="row">Skimmed milk powder</th><td>Moisture 5% at most; milk fat 1.5% at most</td><td><A href="milkpowder.html">Milk powder</A></td></tr>
              <tr><th scope="row">Ice cream</th><td>Milk fat at least 10%; total solids at least 36%; milk protein at least 3.5%; at least 525 g a litre</td><td><A href="IcecreamProcessing.html">Ice cream</A></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={s.section} aria-labelledby="start">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="start">Where to start</h2>
            <p className={s.note}>From where your dairy is today to the plant or machine that fits.</p>
          </div>
          <table className={s.table}>
            <tbody>
              <tr><th scope="row">You collect milk from farmers</th><td><A href="bulkCoolers.html">Bulk milk coolers</A>, 300 to 10,000 L, to chill milk where it&apos;s collected</td></tr>
              <tr><th scope="row">You&apos;re starting a dairy</th><td>A <A href="milkprocessing.html">liquid milk plant</A>, from reception to pouch packing</td></tr>
              <tr><th scope="row">You want more from the same milk</th><td><A href="CurdYogurtProcessing.html">Curd and yogurt</A>, <A href="PaneerProcessing.html">paneer</A>, <A href="ButterProcessing.html">butter and ghee</A>, <A href="IcecreamProcessing.html">ice cream</A>, <A href="FlavouredMilkProcessing.html">flavoured milk</A>, <A href="CheeseProcessing.html">cheese</A></td></tr>
              <tr><th scope="row">You have surplus milk</th><td>A <A href="milkpowder.html">milk powder plant</A></td></tr>
              <tr><th scope="row">You have whey or skim milk to use</th><td><A href="whey.html">Whey processing</A> and <A href="Casine.html">casein</A> plants</td></tr>
              <tr><th scope="row">Your plant needs an upgrade</th><td><A href="automation.html">Automation</A>, <A href="cipsystem.html">CIP</A> and <A href="RefrigerationEquipments.html">refrigeration</A>; we start by studying where the line loses time, yield or heat</td></tr>
              <tr><th scope="row">You need one machine</th><td><A href="tanks.html">Tanks and silos</A>, <A href="pumps.html">pumps</A>, <A href="pasteurisers.html">pasteurizers</A>, <A href="plateheat.html">plate heat exchangers</A>, <A href="evaporators.html">evaporators</A>, <A href="spray.html">spray dryers</A></td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </Industry>
  );
}
