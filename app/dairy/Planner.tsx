"use client";

import { useState } from "react";
import s from "@/components/Industry.module.css";
import { Ref } from "@/components/Ref";
import { iceBank, licence, milk, pasteuriser, yields, type MilkType } from "@/lib/dairy";

// Plan your dairy: the milk you'll handle in, the licence, pasteurizer, ice bank and what the milk
// could become out. Sources are numbered as on app/dairy/page.tsx.

const kg = (x: number) => Math.round(x).toLocaleString("en-IN");

const ice = {
  none: ["No ice bank yet", <>Our Freon ice banks start at 1,000 litres a day. Below that, <a href="bulkCoolers.html">bulk milk coolers</a> of 300 to 10,000 L chill milk where it&apos;s collected.</>],
  freon: ["Freon ice bank", <>Ours cover 1,000 to 20,000 litres a day. <a href="RefrigerationEquipments.html">Refrigeration</a></>],
  either: ["Freon or ammonia", <>Both cover 10,000 to 20,000 litres a day. <a href="RefrigerationEquipments.html">Refrigeration</a></>],
  ammonia: ["Ammonia ice bank", <>Ours cover 10,000 to 5,00,000 litres a day. <a href="RefrigerationEquipments.html">Refrigeration</a></>],
  large: ["Ammonia, designed to order", <>Above 5,00,000 litres a day. <a href="RefrigerationEquipments.html">Refrigeration</a></>],
} as const;

export function Planner() {
  const [lpd, setLpd] = useState("10000");
  const [type, setType] = useState<MilkType>("mixed");
  const [fat, setFat] = useState(String(milk.mixed.fat));
  const [snf, setSnf] = useState(String(milk.mixed.snf));
  const [hours, setHours] = useState("8");

  const L = Number(lpd), F = Number(fat), S = Number(snf), H = Number(hours);
  const ok = L > 0 && F > 0 && F < 15 && S > 0 && S < 15 && H > 0 && H <= 24;
  const past = ok ? pasteuriser(L, H) : null;
  const y = ok ? yields(L, F, S, type) : null;
  const [iceName, iceText] = ice[ok ? iceBank(L) : "freon"];
  const dash = "–";

  return (
    <section className={s.band} aria-labelledby="plan">
      <div className={`${s.wrap} ${s.split}`}>
        <div>
          <h2 className={s.h2} id="plan">Plan your dairy</h2>
          <p className={s.note}>
            Enter the milk you&apos;ll handle. The licence tiers and milk minimums are FSSAI&apos;s, the equipment ranges are ours,
            and the yields come from dairy research.
          </p>
          <div className={s.inputs}>
            <label className={s.field}>
              <span>Milk a day, in litres</span>
              <input type="number" inputMode="numeric" min="1" step="500" value={lpd} onChange={(e) => setLpd(e.target.value)} />
            </label>
            <label className={s.field}>
              <span>Milk</span>
              <select
                value={type}
                onChange={(e) => {
                  const t = e.target.value as MilkType;
                  setType(t);
                  setFat(String(milk[t].fat));
                  setSnf(String(milk[t].snf));
                }}
              >
                {(Object.keys(milk) as MilkType[]).map((t) => <option key={t} value={t}>{milk[t].label}</option>)}
              </select>
            </label>
            <div className={s.pair}>
              <label className={s.field}>
                <span>Fat, %</span>
                <input type="number" inputMode="decimal" min="0.1" max="14" step="0.1" value={fat} onChange={(e) => setFat(e.target.value)} />
              </label>
              <label className={s.field}>
                <span>SNF, %</span>
                <input type="number" inputMode="decimal" min="0.1" max="14" step="0.1" value={snf} onChange={(e) => setSnf(e.target.value)} />
              </label>
            </div>
            <label className={s.field}>
              <span>Hours a day the pasteurizer runs</span>
              <input type="number" inputMode="numeric" min="1" max="24" step="1" value={hours} onChange={(e) => setHours(e.target.value)} />
            </label>
          </div>
          <p className={s.how}>Fat and SNF start at the FSSAI minimum for the milk you pick<Ref n={1} />; change them to your milk&apos;s.</p>
        </div>

        <div aria-live="polite">
          <dl className={s.worksheet}>
            <div>
              <dt>FSSAI licence</dt>
              <dd>
                <span className={s.big}>{ok ? licence(L) : dash}</span>
                <span className={s.sub}>Registration up to 500 litres a day, a state licence from 501 to 50,000, a central licence above that.<Ref n={2} /></span>
              </dd>
            </div>
            <div>
              <dt>Pasteurizer</dt>
              <dd>
                <span className={s.big}>{past ? (past.lines > 1 ? `${past.lines} lines of ${kg(past.lph)} LPH` : `${kg(past.lph)} LPH`) : dash}</span>
                <span className={s.sub}>To pasteurise the day&apos;s milk in {ok ? H : dash} hours. Ours run from 50 to 30,000 LPH. <a href="pasteurisers.html">Pasteurizers</a></span>
              </dd>
            </div>
            <div>
              <dt>Ice water</dt>
              <dd>
                <span className={s.big}>{ok ? iceName : dash}</span>
                <span className={s.sub}>{iceText}</span>
              </dd>
            </div>
            <div>
              <dt>In the day&apos;s milk</dt>
              <dd>
                <span className={s.big}>{y ? `${kg(y.fatKg)} kg fat, ${kg(y.snfKg)} kg SNF` : dash}</span>
                <span className={s.sub}>Taking a litre of milk as 1.03 kg.</span>
              </dd>
            </div>
            <div>
              <dt>As ghee</dt>
              <dd>
                <span className={s.big}>{y ? `About ${kg(y.ghee)} kg` : dash}</span>
                <span className={s.sub}>If all the fat goes to ghee by the creamery-butter method, which recovers about 92% of it.<Ref n={4} /> <a href="gheeprocessing.html">Ghee plants</a></span>
              </dd>
            </div>
            <div>
              <dt>As paneer</dt>
              <dd>
                <span className={s.big}>{y ? `${kg(y.paneer[0])} to ${kg(y.paneer[1])} kg` : dash}</span>
                <span className={s.sub}>Indicative, for {milk[type].label.toLowerCase()}: the yield turns on the milk&apos;s fat and the paneer&apos;s moisture.<Ref n={3} /> <a href="PaneerProcessing.html">Paneer plants</a></span>
              </dd>
            </div>
            <div>
              <dt>As skimmed milk powder</dt>
              <dd>
                <span className={s.big}>{y ? `Up to ${kg(y.smp)} kg` : dash}</span>
                <span className={s.sub}>From the milk&apos;s SNF once the cream is taken off, at the 5% moisture limit for the powder.<Ref n={1} /> <a href="milkpowder.html">Milk powder plants</a></span>
              </dd>
            </div>
          </dl>
          <p className={s.how}>These are planning figures, before process losses. The scheme we send you is worked out for your milk, products and site.</p>
        </div>
      </div>
    </section>
  );
}
