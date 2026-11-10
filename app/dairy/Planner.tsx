"use client";

import { useState } from "react";
import s from "@/components/Industry.module.css";
import { Ref } from "@/components/Ref";
import { iceBank, licence, milk, pasteuriser, yields, type MilkType } from "@/lib/dairy";

// Plan your dairy: from the milk a day, the licence, the pasteurizer and ice bank to size for,
// and what the milk could make. Sources are numbered as on app/dairy/page.tsx.

const n = (x: number) => Math.round(x).toLocaleString("en-IN");
const dash = "–";
const size = (p: { lines: number; lph: number }) => (p.lines > 1 ? `${p.lines} lines of ${n(p.lph)} LPH` : `${n(p.lph)} LPH`);

const fridge = <a href="RefrigerationEquipments.html">Refrigeration</a>;
const ice = {
  none: ["Below our ice bank range", <>Our Freon ice banks start at 1,000 litres a day. <a href="bulkCoolers.html">Bulk milk coolers</a>, 300 to 10,000 L, chill raw milk where it&apos;s collected.</>],
  freon: ["Freon ice bank", <>R22, R404A or another Freon, with scroll or reciprocating compressors. Ours cover 1,000 to 20,000 litres a day. {fridge}</>],
  either: ["Freon or ammonia", <>Both cover 10,000 to 20,000 litres a day. If you&apos;ll grow past 20,000, choose ammonia: ours go to 5,00,000. {fridge}</>],
  ammonia: ["Ammonia ice bank", <>Ours cover 10,000 to 5,00,000 litres a day, with a return water chiller, falling film chiller or glycol system as options. {fridge}</>],
  large: ["Ammonia, designed to order", <>Above 5,00,000 litres a day, we design the system to your load. {fridge}</>],
} as const;

export function Planner() {
  const [lpd, setLpd] = useState("10000");
  const [type, setType] = useState<MilkType>("mixed");

  const L = Number(lpd);
  const ok = L > 0;
  const lic = ok ? licence(L) : null;
  const y = ok ? yields(L, type) : null;
  const iceKey = ok ? iceBank(L) : "freon";
  const [iceName, iceText] = ice[iceKey];
  const [one, two] = ok ? [size(pasteuriser(L, 8)), size(pasteuriser(L, 16))] : [dash, dash];

  return (
    <section className={s.band} aria-labelledby="plan">
      <div className={`${s.wrap} ${s.split}`}>
        <div>
          <h2 className={s.h2} id="plan">Plan your dairy</h2>
          <p className={s.note}>
            Enter the milk you&apos;ll handle a day. You&apos;ll see the licence you need, the pasteurizer and ice bank
            to size for, and what the milk could make. The licence tiers and milk minimums are FSSAI&apos;s, the equipment ranges are
            ours, and the yields come from dairy research.
          </p>
          <div className={s.inputs}>
            <label className={s.field}>
              <span>Milk a day, in litres</span>
              <input type="number" inputMode="numeric" min="1" step="500" value={lpd} onChange={(e) => setLpd(e.target.value)} />
            </label>
            <label className={s.field}>
              <span>Milk</span>
              <select value={type} onChange={(e) => setType(e.target.value as MilkType)}>
                {(Object.keys(milk) as MilkType[]).map((t) => <option key={t} value={t}>{milk[t].label}</option>)}
              </select>
            </label>
          </div>
        </div>

        <div aria-live="polite">
          <dl className={s.worksheet}>
            <div>
              <dt>FSSAI licence</dt>
              <dd>
                <span className={s.big}>{lic ? lic.name : dash}</span>
                <span className={s.sub}>
                  {lic && (lic.next ? `Above ${n(lic.lpd)} litres a day, you'd need a ${lic.next.name.toLowerCase()}. ` : "The top tier, above 50,000 litres a day. ")}
                  Apply on FSSAI&apos;s <a href="https://foscos.fssai.gov.in/">FoSCoS portal</a>, which lists the fees.<Ref n={2} />
                </span>
              </dd>
            </div>
            <div>
              <dt>Pasteurizer</dt>
              <dd>
                <span className={s.big}>{one}</span>
                <span className={s.sub}>
                  To pasteurise the day&apos;s milk in one 8-hour shift{two !== one && `; over two shifts, ${two}`}. The law sets
                  at least 72 °C for 15 seconds;<Ref n={1} /> ours hold at least 74 °C for 20 seconds, from 50 to 30,000 LPH. <a href="pasteurisers.html">Pasteurizers</a>
                </span>
              </dd>
            </div>
            <div>
              <dt>Ice water</dt>
              <dd>
                <span className={s.big}>{ok ? iceName : dash}</span>
                <span className={s.sub}>
                  {iceKey !== "none" && <>To cool the milk to 4 °C or below straight after pasteurising.<Ref n={1} /> </>}
                  {ok && iceText}
                </span>
              </dd>
            </div>
            <div>
              <dt>As paneer</dt>
              <dd>
                <span className={s.big}>{y ? `${n(y.paneer[0])} to ${n(y.paneer[1])} kg a day` : dash}</span>
                <span className={s.sub}>Indicative, for {milk[type].label.toLowerCase()}: the yield turns on the milk&apos;s fat and the paneer&apos;s moisture.<Ref n={3} /> <a href="PaneerProcessing.html">Paneer plants</a></span>
              </dd>
            </div>
            <div>
              <dt>Or, as ghee</dt>
              <dd>
                <span className={s.big}>{y ? `About ${n(y.ghee)} kg a day` : dash}</span>
                <span className={s.sub}>
                  From the fat, at FSSAI&apos;s minimum of {milk[type].fat}% for {milk[type].label.toLowerCase()};<Ref n={1} /> richer milk gives more.
                  The creamery-butter method recovers about 92% of the fat.<Ref n={4} /> <a href="gheeprocessing.html">Ghee plants</a>
                </span>
              </dd>
            </div>
          </dl>
          <p className={s.how}>These are planning figures, before process losses. The scheme we send you is worked out for your milk, products and site.</p>
        </div>
      </div>
    </section>
  );
}
