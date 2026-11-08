import { Ask, Doc } from "@/components/Doc";
import { Site } from "@/components/Site";

// Search-engine structured data: the product and its FAQ.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Bulk Milk Cooler (Direct Expansion Milk Cooling Tank)",
      category: "Bulk milk cooler",
      description: "Direct Expansion (DX) bulk milk coolers from 300 L to 10,000 L, with SS 304 or SS 316 inner shells and laser-welded pillow plate, conforming to ISO 5708.",
      image: [
        "https://tavron.net/assets/img/coolers/bulk-milk-cooler-open-tanks-condensing-units.jpg",
        "https://tavron.net/assets/img/coolers/bulk-milk-cooler-vertical-open-tank.jpg",
        "https://tavron.net/assets/img/coolers/bulk-milk-cooler-horizontal-open-tank.jpg",
        "https://tavron.net/assets/img/coolers/bulk-milk-cooler-closed-tank-control-panel.jpg"
      ],
      brand: {
        "@type": "Brand",
        name: "Tavron Engineers"
      },
      manufacturer: {
        "@type": "Organization",
        name: "Tavron Engineers",
        url: "https://tavron.net/",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chennai",
          addressCountry: "IN"
        }
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What capacities are available for Tavron DX milk coolers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tavron DX milk coolers are available in 300 L, 500 L, 1,000 L, 2,000 L, 3,000 L, 5,000 L and 10,000 L."
          }
        },
        {
          "@type": "Question",
          name: "What material is used for the inner shell of the tank?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The inner shell is manufactured using high-quality SS 304 or SS 316 stainless steel to ensure hygiene and durability."
          }
        },
        {
          "@type": "Question",
          name: "Can a Direct Expansion milk cooler be used for milk storage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DX milk coolers are designed for cooling milk and maintaining it under refrigerated storage conditions before processing or transportation."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <Site
      title="Bulk Milk Cooler Manufacturer in Chennai, India | Tavron Engineers"
      description="DX bulk milk coolers (BMC) from 300 L to 10,000 L, made in Chennai. SS 304 / SS 316 milk chilling tanks with laser-welded pillow plate, conforming to ISO 5708."
      ogType="product"
      ogDescription="DX bulk milk coolers from 300 L to 10,000 L. SS 304 / SS 316 tanks with laser-welded pillow plate, conforming to ISO 5708."
      path="bulkCoolers.html"
      image="assets/img/coolers/bulk-milk-cooler-open-tanks-condensing-units.jpg"
      active="menu_bulkCoolers"
      wa="a quotation for a bulk milk cooler"
    >
      <Doc
        parent="products"
        name="Bulk Milk Coolers"
        title="Bulk Milk Cooler Manufacturer"
        label="Direct Expansion (DX) milk coolers"
        intro="Stainless-steel bulk milk coolers from 300&nbsp;L to 10,000&nbsp;L that cool raw milk in the tank and hold it cold until it's processed or transported. Built by Tavron Engineers, manufacturing in Chennai, India since 2004, for dairy farms, collection centres, chilling centres and dairy plants."
        plain
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo">
            <img src="assets/img/coolers/bulk-milk-cooler-open-tanks-condensing-units.jpg" width="1086" height="724" alt="Two Tavron horizontal open tank bulk milk coolers with lids raised, beside their condensing units" />
          </figure>
          <dl className="tv-doc__dl">
            <div>
              <dt>Cooling</dt>
              <dd>Direct Expansion (DX)</dd>
            </div>
            <div>
              <dt>Cooling surface</dt>
              <dd>
                {"Laser-welded pillow plate "}
                <details className="tv-more">
                  <summary>
                    {"Know more "}
                    <i className="ri-arrow-down-s-line"></i>
                  </summary>
                  <p>A pillow plate is made of stainless-steel sheets welded together with channels between them. Refrigerant flows through the channels, close to the milk, for effective heat transfer.</p>
                </details>
              </dd>
            </div>
            <div>
              <dt>Inner shell</dt>
              <dd>SS&nbsp;304 / SS&nbsp;316</dd>
            </div>
            <div>
              <dt>Milk temperature</dt>
              <dd>3–4&nbsp;°C</dd>
            </div>
            <div>
              <dt>Cleaning</dt>
              <dd>CIP, rotary spray ball (optional on open tanks)</dd>
            </div>
            <div>
              <dt>Controls</dt>
              <dd>Digital temperature controller, PLC/HMI option</dd>
            </div>
            <div>
              <dt>Standard</dt>
              <dd>
                {"Conforms to ISO\u00a05708 "}
                <details className="tv-more">
                  <summary>
                    {"Know more "}
                    <i className="ri-arrow-down-s-line"></i>
                  </summary>
                  <p>ISO&nbsp;5708 is the international standard for refrigerated bulk milk tanks. It covers their design, construction and performance, and the methods used to test them.</p>
                </details>
              </dd>
            </div>
          </dl>
        </div>
        <section className="tv-doc__sec tv-doc__sec--range" id="sizes">
          <p className="tv-doc__label">Sizes</p>
          <h2 className="tv-doc__h2">Bulk milk cooler sizes and dimensions</h2>
          <div className="tv-sizes">
            <div className="tv-size">
              <figure className="tv-size__frame">
                <img src="assets/img/coolers/bulk-milk-cooler-vertical-open-tank.jpg" width="1000" height="945" loading="lazy" alt="Vertical open tank bulk milk cooler with agitator and condensing unit" data-lightbox="assets/img/coolers/bulk-milk-cooler-vertical-open-tank.jpg" />
              </figure>
              <h3 className="tv-doc__h3">Vertical open tank</h3>
              <p>300&nbsp;L and 500&nbsp;L</p>
              <a className="tv-link" href="assets/img/coolers/vertical-tank-dimension-drawing.jpg" data-lightbox="assets/img/coolers/vertical-tank-dimension-drawing.jpg" aria-label="View the GA drawing of the vertical open tank">
                {"View drawing "}
                <i className="ri-zoom-in-line"></i>
              </a>
            </div>
            <div className="tv-size">
              <figure className="tv-size__frame">
                <img src="assets/img/coolers/bulk-milk-cooler-horizontal-open-tank.jpg" width="1100" height="795" loading="lazy" alt="Horizontal open tank bulk milk cooler with a half-round stainless-steel body" data-lightbox="assets/img/coolers/bulk-milk-cooler-horizontal-open-tank.jpg" />
              </figure>
              <h3 className="tv-doc__h3">Horizontal open tank</h3>
              <p>1,000&nbsp;L and 2,000&nbsp;L</p>
              <a className="tv-link" href="assets/img/coolers/horizontal-open-tank-dimension-drawing.jpg" data-lightbox="assets/img/coolers/horizontal-open-tank-dimension-drawing.jpg" aria-label="View the GA drawing of the horizontal open tank">
                {"View drawing "}
                <i className="ri-zoom-in-line"></i>
              </a>
            </div>
            <div className="tv-size">
              <div className="tv-viewer" data-viewer="">
                <div className="tv-viewer__stage">
                  <img data-viewer-stage="" data-lightbox="" src="assets/img/coolers/bulk-milk-cooler-closed-tank-control-panel.jpg" width="1100" height="933" loading="lazy" alt="Horizontal closed tank bulk milk cooler with control panel and condensing units" />
                </div>
                <div className="tv-viewer__thumbs" role="tablist" aria-label="Closed tank views">
                  <button type="button" role="tab" aria-selected="true" data-viewer-thumb="" data-src="assets/img/coolers/bulk-milk-cooler-closed-tank-control-panel.jpg" data-alt="Horizontal closed tank bulk milk cooler with control panel and condensing units">
                    <img src="assets/img/coolers/bulk-milk-cooler-closed-tank-control-panel.jpg" alt="Side view" loading="lazy" />
                  </button>
                  <button type="button" role="tab" aria-selected="false" data-viewer-thumb="" data-src="assets/img/coolers/bulk-milk-cooler-horizontal-closed-tank.jpg" data-alt="End view of a Tavron horizontal closed tank bulk milk cooler with access ladder">
                    <img src="assets/img/coolers/bulk-milk-cooler-horizontal-closed-tank.jpg" alt="End view" loading="lazy" />
                  </button>
                </div>
              </div>
              <h3 className="tv-doc__h3">Horizontal closed tank</h3>
              <p>3,000&nbsp;L, 5,000&nbsp;L and 10,000&nbsp;L</p>
              <a className="tv-link" href="assets/img/coolers/horizontal-closed-tank-dimension-drawing.jpg" data-lightbox="assets/img/coolers/horizontal-closed-tank-dimension-drawing.jpg" aria-label="View the GA drawing of the horizontal closed tank">
                {"View drawing "}
                <i className="ri-zoom-in-line"></i>
              </a>
            </div>
          </div>
          <div className="tv-tablewrap">
            <table className="tv-table">
              <thead>
                <tr>
                  <th scope="col">Capacity</th>
                  <th scope="col">Tank type</th>
                  <th scope="col">Size (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">300&nbsp;L</th>
                  <td>Vertical open</td>
                  <td>820 diameter × 625 high</td>
                </tr>
                <tr>
                  <th scope="row">500&nbsp;L</th>
                  <td>Vertical open</td>
                  <td>1000 diameter × 750 high</td>
                </tr>
                <tr>
                  <th scope="row">1,000&nbsp;L</th>
                  <td>Horizontal open</td>
                  <td>1100 wide × 1800 long</td>
                </tr>
                <tr>
                  <th scope="row">2,000&nbsp;L</th>
                  <td>Horizontal open</td>
                  <td>1400 wide × 2100 long</td>
                </tr>
                <tr>
                  <th scope="row">3,000&nbsp;L</th>
                  <td>Horizontal closed</td>
                  <td>1450 high × 2000 long</td>
                </tr>
                <tr>
                  <th scope="row">5,000&nbsp;L</th>
                  <td>Horizontal closed</td>
                  <td>1600 high × 2600 long</td>
                </tr>
                <tr>
                  <th scope="row">10,000&nbsp;L</th>
                  <td>Horizontal closed</td>
                  <td>1800 high × 4000 long</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tv-doc__note">Sizes are indicative. Certified GA drawings are issued against each order.</p>
        </section>
        <section className="tv-doc__sec" id="what-is">
          <div className="tv-doc__top">
            <div>
              <p className="tv-doc__label">How it works</p>
              <h2 className="tv-doc__h2">What is a DX bulk milk cooler?</h2>
              <p>A Direct Expansion (DX) milk cooler, also called a bulk milk cooler (BMC) or milk chilling tank, is a refrigerated milk storage tank that cools freshly collected raw milk and holds it at the required storage temperature. Refrigerant circulates through cooling surfaces integrated with the tank, and heat passes from the milk through the stainless-steel surface to the refrigeration system. Tavron uses laser-welded pillow plate for this cooling surface.</p>
              <p>They are also used by dairy cooperative societies, village collection centres and bulk milk collection facilities.</p>
            </div>
            <figure className="tv-flow">
              <svg viewBox="0 0 520 340" role="img" aria-labelledby="tv-flow-title">
                <title id="tv-flow-title">Simplified diagram of a bulk milk cooler: raw milk in a half-round stainless-steel tank, a pillow plate cooling surface around it, refrigerant lines to a condensing unit, and a top-mounted agitator</title>
                <path className="tv-flow__milk" d="M36 118 H284 V150 A124 106 0 0 1 36 150 Z"></path>
                <path className="tv-flow__plate" d="M26 150 A134 116 0 0 0 294 150"></path>
                <path className="tv-flow__line" d="M36 92 V150 A124 106 0 0 0 284 150 V92"></path>
                <path className="tv-flow__line" d="M22 92 H298 M34 92 L160 72 L286 92"></path>
                <path className="tv-flow__line" d="M78 240 V292 M242 240 V292 M64 292 H92 M228 292 H256"></path>
                <rect className="tv-flow__line tv-flow__solid" x="144" y="30" width="32" height="34" rx="4"></rect>
                <path className="tv-flow__line" d="M160 64 V204 M134 204 H186"></path>
                <path className="tv-flow__cold" d="M294 150 H356 V212 H380"></path>
                <path className="tv-flow__warm" d="M270 214 H340 V258 H380"></path>
                <path className="tv-flow__cold" d="M326 145 l10 5 l-10 5"></path>
                <path className="tv-flow__warm" d="M314 209 l-10 5 l10 5"></path>
                <rect className="tv-flow__line tv-flow__solid" x="380" y="176" width="124" height="116" rx="6"></rect>
                <circle className="tv-flow__line" cx="462" cy="234" r="30"></circle>
                <path className="tv-flow__line tv-flow__thin" d="M462 204 V264 M432 234 H492 M441 213 L483 255 M483 213 L441 255"></path>
                <rect className="tv-flow__line" x="394" y="208" width="24" height="52" rx="10"></rect>
                <path className="tv-flow__line" d="M396 292 V304 M488 292 V304"></path>
                <path className="tv-flow__warm" d="M434 160 C430 150 442 144 438 132 M462 160 C458 150 470 144 466 132 M490 160 C486 150 498 144 494 132"></path>
                <path className="tv-flow__leader" d="M160 272 V306"></path>
                <text className="tv-flow__label" x="226" y="53">Agitator</text>
                <text className="tv-flow__label" x="96" y="176">Raw milk</text>
                <text className="tv-flow__label" x="160" y="326">Pillow plate</text>
                <text className="tv-flow__label" x="350" y="130">Refrigerant</text>
                <text className="tv-flow__label" x="442" y="330">Condensing unit</text>
              </svg>
              <figcaption>Simplified diagram. Layout varies by tank type.</figcaption>
            </figure>
          </div>
        </section>
        <Ask
          photo={<img src="assets/img/coolers/bulk-milk-cooler-factory-row.jpg" width="540" height="360" loading="lazy" alt="Row of Tavron bulk milk coolers with their condensing units" />}
          title="Which capacity do I need?"
          text="Send us your daily milk quantity, largest batch, collections per day, operating schedule and required cooling time, and we'll recommend a capacity and quote for it."
          id="capacity"
        />
        <section className="tv-doc__sec" id="faq">
          <div className="tv-doc__top">
            <div>
              <p className="tv-doc__label">FAQ</p>
              <h2 className="tv-doc__h2">Frequently asked questions</h2>
              <div className="tv-faq">
                <details open>
                  <summary>
                    <h3>What capacities are available for Tavron DX milk coolers?</h3>
                    <i className="ri-arrow-down-s-line"></i>
                  </summary>
                  <p>Tavron DX milk coolers are available in 300 L, 500 L, 1,000 L, 2,000 L, 3,000 L, 5,000 L and 10,000 L.</p>
                </details>
                <details>
                  <summary>
                    <h3>What material is used for the inner shell of the tank?</h3>
                    <i className="ri-arrow-down-s-line"></i>
                  </summary>
                  <p>The inner shell is manufactured using high-quality SS 304 or SS 316 stainless steel to ensure hygiene and durability.</p>
                </details>
                <details>
                  <summary>
                    <h3>Can a Direct Expansion milk cooler be used for milk storage?</h3>
                    <i className="ri-arrow-down-s-line"></i>
                  </summary>
                  <p>Yes. DX milk coolers are designed for cooling milk and maintaining it under refrigerated storage conditions before processing or transportation.</p>
                </details>
              </div>
            </div>
            <div>
              <p className="tv-doc__label">Brochure</p>
              <ul className="tv-doc__links">
                <li>
                  <a href="downloads/Bulk%20Milk%20Cooler.pdf" target="_blank" rel="noopener">
                    {"Bulk milk cooler brochure (PDF, 625\u00a0KB) "}
                    <i className="ri-download-2-line"></i>
                  </a>
                </li>
              </ul>
              <p className="tv-doc__label">Related products</p>
              <ul className="tv-doc__links">
                <li>
                  <a href="tanks.html">
                    {"Milk Silos & Storage Tanks "}
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </li>
                <li>
                  <a href="pasteurisers.html">
                    {"HTST Pasteurizer "}
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </li>
                <li>
                  <a href="milkprocessing.html">
                    {"Liquid Milk Process Solution "}
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Doc>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Site>
  );
}
