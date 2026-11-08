import { Ask, Doc, Links, More, Section, Specs } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title={"Ammonia & Freon Ice Water Systems for Dairy | Tavron Engineers"}
      description="Ammonia (NH3) and Freon ice water systems for dairy and food plants: compressors, condensers, receivers, ice building tanks and plate evaporators."
      path="RefrigerationEquipments.html"
      image="assets/img/projects/Ref_Equi/CompressorSection.jpg"
      active="menu_refrigeration"
      wa="to discuss a refrigeration system"
    >
      <Doc
        parent="products"
        name="Refrigeration Systems"
        label="Refrigeration"
        intro="Ammonia (NH3) and Freon refrigeration for dairy and food plants: compressor sections, condensers, receivers, ice building tanks and plate evaporators, plus Freon chilling units. Built by Tavron Engineers in Chennai, India, since 2004."
        plain
      >
        <div className="tv-doc__top">
          <figure className="tv-figure tv-doc__photo tv-doc__photo--fit">
            <img src="assets/img/projects/Ref_Equi/CompressorSection.jpg" width="500" height="375" alt="Ammonia compressor section with motors and piping" data-lightbox="assets/img/projects/Ref_Equi/CompressorSection.jpg" />
          </figure>
          <Specs
            items={[
              ["Refrigerants", "Ammonia (NH3); Freon: R22, R404A, others on request"],
              ["Compressors", "Reciprocating and screw; single stage for medium and double stage for low-temperature duty"],
              ["Ammonia IBT", "For 10,000 to 5,00,000 LPD of milk; larger on request"],
              ["Freon IBT", "For 1,000 to 20,000 LPD"],
              ["Condensers", "Atmospheric, shell & tube, plate or evaporative"],
              ["Options", "Return water chiller, falling film chiller, glycol system"],
              ["Control", "PLC-based controls optional"],
            ]}
          />
        </div>
        <Section id="ammonia" label="Ammonia" title="Ammonia refrigeration system">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/NH3Compressor.jpg" width="500" height="375" loading="lazy" alt="Ammonia reciprocating compressor" data-lightbox="assets/img/projects/Ref_Equi/NH3Compressor.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>NH3 compressors</h3>
                <ul className="tv-ticks">
                  <li>Series of reciprocating compressors</li>
                  <li>Loading and unloading devices</li>
                  <li>Designed for partial loading</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/SeriesOfNH3Reciever.jpg" width="500" height="478" loading="lazy" alt="Horizontal ammonia receivers" data-lightbox="assets/img/projects/Ref_Equi/SeriesOfNH3Reciever.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>NH3 receivers</h3>
                <ul className="tv-ticks">
                  <li>IS 2062 / IS 515 material</li>
                  <li>Hydro-tested to the required pressure</li>
                  <li>Built to various codes</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/PlateNH3Condensor.jpg" width="500" height="375" loading="lazy" alt="Plate-type ammonia condenser" data-lightbox="assets/img/projects/Ref_Equi/PlateNH3Condensor.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Plate NH3 condenser</h3>
                <ul className="tv-ticks">
                  <li>Software-designed for a good condensing temperature</li>
                  <li>CIP cleanable on the cooling water side</li>
                  <li>Low hold-up volume</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/Intercooler.jpg" width="500" height="375" loading="lazy" alt="Ammonia intercooler with insulated piping" data-lightbox="assets/img/projects/Ref_Equi/Intercooler.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Intercooler</h3>
                <ul className="tv-ticks">
                  <li>Common intercooler for easy handling</li>
                  <li>Sub-cooler on request</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/AtmosphericCondensor.jpg" width="288" height="327" loading="lazy" alt="Atmospheric pipe condenser" data-lightbox="assets/img/projects/Ref_Equi/AtmosphericCondensor.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Atmospheric condenser</h3>
                <ul className="tv-ticks">
                  <li>Pipe condenser, easy to maintain</li>
                  <li>U-bend or vertical header</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/IBTAccumulator.jpg" width="500" height="321" loading="lazy" alt="IBT accumulator with insulated piping" data-lightbox="assets/img/projects/Ref_Equi/IBTAccumulator.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>IBT accumulator</h3>
                <ul className="tv-ticks">
                  <li>Regulates flow to the coils</li>
                  <li>Process controls to monitor the system</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/IceBuildingTanks.jpg" width="290" height="322" loading="lazy" alt="Ice building tank" data-lightbox="assets/img/projects/Ref_Equi/IceBuildingTanks.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Ice building tanks and coils</h3>
                <ul className="tv-ticks">
                  <li>Coils form the ice for the process system</li>
                  <li>Galvanised or painted coils, CAD-designed</li>
                  <li>Steel structure or civil construction</li>
                  <li>Insulated for minimum heat loss</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/PlateHeatExchangersEvaporator.jpg" width="500" height="375" loading="lazy" alt="Plate heat exchanger evaporator with refrigerant piping" data-lightbox="assets/img/projects/Ref_Equi/PlateHeatExchangersEvaporator.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Plate heat exchanger evaporator</h3>
                <ul className="tv-ticks">
                  <li>Low hold-up volume and approach temperature</li>
                  <li>For brine, glycol and water cooling</li>
                  <li>SS 316 or titanium plates; CR / HNBR gaskets</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/LPReciever.jpg" width="500" height="375" loading="lazy" alt="Low-pressure receiver with insulated piping" data-lightbox="assets/img/projects/Ref_Equi/LPReciever.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>LP receiver</h3>
                <ul className="tv-ticks">
                  <li>Sized to the load factor</li>
                  <li>Designed to avoid liquid carry-over</li>
                  <li>Built to various codes</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/HermeticLiquidPump.jpg" width="500" height="375" loading="lazy" alt="Hermetic liquid refrigerant pumps" data-lightbox="assets/img/projects/Ref_Equi/HermeticLiquidPump.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Hermetic liquid pump</h3>
                <ul className="tv-ticks">
                  <li>Liquid refrigerant pumps for even distribution</li>
                  <li>Works at low NPSH</li>
                  <li>Hermetic or open type</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section id="freon" label="Freon" title="Freon systems">
          <div className="tv-items">
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/FreonChillingUnit.jpg" width="500" height="361" loading="lazy" alt="Freon chilling unit with condensing units on an insulated tank" data-lightbox="assets/img/projects/Ref_Equi/FreonChillingUnit.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Freon chilling unit</h3>
                <ul className="tv-ticks">
                  <li>Compact cooling for any chilling application</li>
                  <li>Various refrigerants</li>
                  <li>Hermetic, semi-hermetic or open compressors</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/LiquidEggProcessing/IBT.jpg" width="500" height="361" loading="lazy" alt="Freon ice bank tank with condensing units" data-lightbox="assets/img/projects/LiquidEggProcessing/IBT.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Freon IBT system</h3>
                <ul className="tv-ticks">
                  <li>R22, R404A or other Freon on request</li>
                  <li>For 1,000 to 20,000 LPD</li>
                  <li>Mild steel or stainless-steel construction</li>
                  <li>Scroll or reciprocating compressor</li>
                </ul>
              </div>
            </div>
            <div className="tv-item">
              <figure className="tv-item__frame">
                <img src="assets/img/projects/Ref_Equi/BulkMilkCooler.jpg" width="450" height="353" loading="lazy" alt="Bulk milk cooler with condensing unit" data-lightbox="assets/img/projects/Ref_Equi/BulkMilkCooler.jpg" />
              </figure>
              <div className="tv-item__body">
                <h3>Bulk milk cooler</h3>
                <ul className="tv-ticks">
                  <li>Laser-welded pillow plate</li>
                  <li>Conforms to ISO 5708</li>
                </ul>
                <a className="tv-link" href="bulkCoolers.html">
                  {"Bulk milk coolers "}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Ask
          title="Tell us about your application"
          text="Send us your product, the capacity you need and how you run your plant, and we'll recommend a configuration and quote for it."
        />
        <More>
          <div>
            <Links
              title="Brochures"
              items={[
                ["Refrigeration", "downloads/Refrigeration.pdf", "891 KB"],
                ["Tube ice plant", "downloads/TubeIcePlant.pdf", "335 KB"],
                ["Falling film chiller", "downloads/Falling%20Film%20Chiller.pdf", "431 KB"],
              ]}
            />
          </div>
          <div>
            <Links
              title="Related"
              items={[
                ["Bulk Milk Coolers", "bulkCoolers.html"],
                ["Dimple Jacket Tanks", "dimpleJacket.html"],
                ["Liquid Milk Process Solution", "milkprocessing.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
