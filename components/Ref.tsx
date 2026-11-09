import s from "./Industry.module.css";

/** a numbered citation of an industry page's `sources` */
export const Ref = ({ n }: { n: number }) => (
  <sup className={s.ref}><a href={`#source-${n}`} aria-label={`Source ${n}`}>{`[${n}]`}</a></sup>
);
