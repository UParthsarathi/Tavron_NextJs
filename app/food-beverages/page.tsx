import { Industry } from "@/components/Industry";
import s from "@/components/Industry.module.css";
import { Ref } from "@/components/Ref";

// What decides a food or drink line: where it's sold, and its pH. The routes are from e-PG Pathshala and
// NIFTEM, the pH 4.6 line from the US rules that define acid and low-acid foods, the names from FSSAI,
// our equipment from our brochures. Refs are numbered as in `sources`.

export default function Page() {
  return (
    <Industry
      slug="food-beverages"
      title="Food & Beverage Processing: Shelf Life, pH 4.6, FSSAI Juice Rules | Tavron Engineers"
      description="Chilled, hot fill, retort or UHT and aseptic: how pH 4.6 and storage decide a food or drink's heat treatment, FSSAI's juice, nectar and fruit drink rules, and the equipment we build."
      h1="Food & Beverage Processing Equipment"
      intro="Juices and fruit drinks, pulps, coconut milk, coffee and tea extracts, liquid egg and ready-to-eat foods. What shapes the line is whether the product is sold chilled or on the shelf, and its pH. Here's how each route works, what FSSAI requires, and the equipment for each step."
      specs={[
        ["Pasteurisation", "HTST plate pasteurizers, 50 LPH to 30,000 LPH; tubular from 250 LPH"],
        ["Sterilisation", "Steam and water spray sterilizers, 600 to 3,000 bottles a batch"],
        ["Concentration", "Falling film and forced circulation evaporators"],
        ["Drying", "Spray dryers, 5 to 1,500 kg/hr water evaporation"],
        ["Construction", "SS 304 / SS 316"],
      ]}
      sources={[
        ["FSSAI: Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011, sub-regulation 2.3, Fruit and vegetable products", "https://www.fssai.gov.in/upload/uploadfiles/files/4_%20Chapter%202_3%20(Fruit%20&%20Vegetable%20products).pdf"],
        ["e-PG Pathshala (UGC, INFLIBNET): Unit Operations in Food Processing, module 10, Pasteurization, sterilization, UHT processing", "https://epgp.inflibnet.ac.in/epgpdata/uploads/epgp_content/S000015FT/P000058/M000125/ET/1454394082P04_M10E-TextNew.pdf"],
        ["NIFTEM, PM FME scheme: Processing of Ready to Eat Products", "https://niftem.ac.in/newsite/pmfme/wp-content/uploads/2022/07/rteprocessing.pdf"],
        ["US FDA, 21 CFR 114.3: definitions of acid and acidified foods", "https://www.ecfr.gov/current/title-21/section-114.3"],
        ["US FDA, 21 CFR 113.3: definitions of low-acid foods and aseptic processing", "https://www.ecfr.gov/current/title-21/section-113.3"],
      ]}
      clients={{
        title: "Food and beverage brands we work with",
        logos: [
          ["pepsico.png", "PepsiCo"],
          ["aachi.png", "Aachi"],
          ["a2b.png", "Adyar Ananda Bhavan"],
        ],
      }}
      faq={[
        ["Does my product need a retort?", "Only if it is low-acid, above pH 4.6, and has to keep without a fridge: retorting is for low-acid foods in sealed containers. An acid product can be hot filled or aseptically packed instead. Measure your finished product's pH first; it decides the route."],
        ["What's the difference between juice, nectar and a fruit drink?", "How much fruit is in it. Under FSSAI, a fruit juice is all juice; a nectar needs at least 20 to 40% juice, depending on the fruit; a fruit drink or ready-to-serve beverage needs at least 10%, or 5% for lime and lemon."],
        ["How long does a UHT, aseptically packed product keep?", "Up to about 6 months, when it is UHT-treated and then packed aseptically."],
        ["Can your sterilizer handle pouches and plastic bottles?", "Yes. It works with steam and water spray, for cans, bowls, pouches and trays of metal, glass, foil, plastic film or paperboard, and controls the pressure with air so the containers keep their shape. Models are static, oscillating or rotary."],
        ["Which pasteurizer suits juice?", "HTST plate pasteurizers handle milk, juice and other liquids from 50 to 30,000 LPH. Tubular pasteurizers, from 250 LPH, are used for juice heating, milk heating and liquid egg."],
        ["Do you build spray dryers for coffee, tea and fruit powders?", "Yes. Spray dryers from 5 to 1,500 kg/hr water evaporation dry coffee and tea extracts and fruit pulps, juices and pastes, as well as dairy products."],
      ]}
      brochures={[
        ["Juice pasteurizer", "downloads/JUICE-PASTEURIZER.pdf", "369 KB"],
        ["Sterilizer", "downloads/Sterlizer.pdf", "463 KB"],
        ["Aseptic processing", "downloads/ASEPTIC-PROCESSING.pdf", "659 KB"],
        ["Beverage equipment", "downloads/Beverage%20Eqipments.pdf", "1.2 MB"],
        ["Fruit pulp evaporator", "downloads/Fruits%20pulp%20forced%20circulation%20evaporator.pdf", "203 KB"],
        ["Coffee and tea extract evaporator and spray dryer", "downloads/Cofee%20Tea%20Extract%20Evaporator%20and%20Spray%20Dryer.pdf", "672 KB"],
        ["Coconut milk plant", "downloads/Coconut%20Milk%20Plant.pdf", "838 KB"],
        ["Spray dryer", "downloads/Spray%20Dryer.pdf", "530 KB"],
      ]}
      wa="to discuss a food or beverage line"
    >
      <section className={s.band} aria-labelledby="route">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="route">Chilled or on the shelf: which heat treatment</h2>
            <p className={s.note}>
              Two things decide it: where the product is sold, and its pH. Above pH 4.6, with a water activity above 0.85, a food
              counts as low-acid;<Ref n={3} /> at 4.6 or below, as an acid food.<Ref n={4} /> A low-acid food that has to keep without a
              fridge must be sterilised against Clostridium botulinum, the target organism of every sterilising process.<Ref n={3} />
            </p>
            <p className={s.how}>
              FSSAI doesn&apos;t fix the temperature: juices and fruit drinks must be heat-processed &ldquo;so as to prevent spoilage&rdquo; and
              meet its microbiological limits.<Ref n={1} /> Measure your finished product&apos;s pH before you choose a route.
            </p>
          </div>
          <dl className={s.worksheet}>
            <div>
              <dt>Sold chilled, at any pH</dt>
              <dd>
                <span className={s.big}>Pasteurise, then keep it cold</span>
                <span className={s.sub}>
                  Pasteurising kills disease-causing and spoilage bacteria but not Clostridium botulinum, so the product needs
                  refrigeration all the way to the shop. A plate pasteurizer heats, holds and cools it to 3 to 4 °C in one pass, reusing
                  its own heat.<Ref n={2} /> Ours: <a href="pasteurisers.html">plate pasteurizers</a>, 50 to 30,000 LPH;{" "}
                  <a href="tubularheat.html">tubular</a> from 250 LPH, for juice and liquid egg; <a href="RefrigerationEquipments.html">ice water</a> to cool.
                </span>
              </dd>
            </div>
            <div>
              <dt>On the shelf, pH 4.6 or below</dt>
              <dd>
                <span className={s.big}>Hot fill, or UHT and aseptic packing</span>
                <span className={s.sub}>
                  Hot filling heats the product in bulk, fills it hot, then seals and cools it. Tomato products are made this way, and
                  thick products flow better hot; delicate products are better processed aseptically.<Ref n={2} /> Ours:{" "}
                  <a href="tubularheat.html">tubular heaters</a> for juice, from 250 LPH; <a href="downloads/ASEPTIC-PROCESSING.pdf">aseptic lines</a>.
                </span>
              </dd>
            </div>
            <div>
              <dt>On the shelf, above pH 4.6</dt>
              <dd>
                <span className={s.big}>Sterilise: in the pack, or UHT and aseptic</span>
                <span className={s.sub}>
                  The product must be commercially sterile: free of anything that could grow in it at room temperature.<Ref n={2} /> In the
                  pack, a retort at 121 °C or above, to an F0 of at least 3 minutes, the 12D cook; an F0 of 6 doubles the margin.<Ref n={3} />{" "}
                  In line, UHT at 135 to 150 °C for 2 to 4 seconds (for milk)<Ref n={2} />, then filling into presterilised packs sealed in a
                  sterile atmosphere,<Ref n={5} /> keeps up to 6 months.<Ref n={2} /> Ours: <a href="bsterilizer.html">steam and water spray
                  sterilizers</a>, 600 to 3,000 bottles a batch, for cans, bottles, pouches and trays; <a href="downloads/ASEPTIC-PROCESSING.pdf">aseptic
                  lines</a> with brick and pouch fillers.
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={s.section} aria-labelledby="names">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="names">What you can call your drink</h2>
            <p className={s.note}>FSSAI sets how much fruit each name needs.<Ref n={1} /> Below the minimum, the drink needs a different name.</p>
          </div>
          <table className={s.table}>
            <thead>
              <tr><th scope="col">Name on the pack</th><th scope="col">What FSSAI requires</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Fruit juice</th><td>Juice only, at the fruit&apos;s minimum Brix or above: 13.5 for mango, 11.2 for litchi, 10.0 for orange, apple and pineapple</td></tr>
              <tr><th scope="row">Cold-pressed juice</th><td>Pressed from fresh fruit, with no external heat at any stage; any processing is non-thermal</td></tr>
              <tr><th scope="row">Fruit nectar</th><td>At least 40% juice for orange and pineapple; 20% for mango, guava, peach and pear</td></tr>
              <tr><th scope="row">Fruit drink, ready-to-serve beverage</th><td>At least 10% juice; 5% for lime and lemon</td></tr>
              <tr><th scope="row">Carbonated fruit drink</th><td>At least 10% juice; 5% for lime and lemon. From 5 to 10% (2.5% for lime and lemon), it&apos;s a &ldquo;carbonated beverage with fruit juice&rdquo;, with the juice content on the label</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={s.section} aria-labelledby="start">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2} id="start">Where to start</h2>
            <p className={s.note}>From what you make to the plant or machine that fits.</p>
          </div>
          <table className={s.table}>
            <tbody>
              <tr><th scope="row">You make juice or fruit drinks</th><td><a href="tubularheat.html">Tubular heaters</a> from 250 LPH or <a href="pasteurisers.html">plate pasteurizers</a>, with <a href="tanks.html">tanks</a> and <a href="cipsystem.html">CIP</a></td></tr>
              <tr><th scope="row">It has to keep on the shelf</th><td>A <a href="bsterilizer.html">sterilizer</a> for filled packs, or an <a href="downloads/ASEPTIC-PROCESSING.pdf">aseptic line</a> for cartons and pouches</td></tr>
              <tr><th scope="row">You concentrate fruit pulp</th><td>A <a href="downloads/Fruits%20pulp%20forced%20circulation%20evaporator.pdf">forced circulation evaporator</a></td></tr>
              <tr><th scope="row">You make coffee or tea extract or powder</th><td><a href="downloads/Cofee%20Tea%20Extract%20Evaporator%20and%20Spray%20Dryer.pdf">Evaporator and spray dryer</a></td></tr>
              <tr><th scope="row">You make coconut milk</th><td>A <a href="downloads/Coconut%20Milk%20Plant.pdf">coconut milk plant</a></td></tr>
              <tr><th scope="row">You make flavoured milk or liquid egg</th><td><a href="FlavouredMilkProcessing.html">Flavoured milk</a> and <a href="LiquidEggProcessing.html">liquid egg</a> plants</td></tr>
              <tr><th scope="row">You need one machine</th><td><a href="tanks.html">Tanks</a>, <a href="pumps.html">pumps</a>, <a href="plateheat.html">plate heat exchangers</a>, <a href="evaporators.html">evaporators</a>, <a href="spray.html">spray dryers</a>, <a href="blenders.html">ribbon blenders</a></td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </Industry>
  );
}
