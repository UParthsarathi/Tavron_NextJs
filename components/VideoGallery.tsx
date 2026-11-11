"use client";

import { useRef, useState } from "react";
import s from "./Videos.module.css";

export type GalleryVideo = {
  id: string;
  title: string;
  date: string;
  /** the date as shown, e.g. "20 August 2016" */
  dateLabel: string;
  duration?: string;
  portrait?: boolean;
  related?: { label: string; href: string };
};

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// Cards that open the video in a player over the page. Each card is a link to the video on
// YouTube, so without JavaScript it still plays, there.
export function VideoGallery({ videos }: { videos: GalleryVideo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [playing, setPlaying] = useState<GalleryVideo | null>(null);
  const close = () => dialog.current?.close();

  return (
    <>
      <ul className={s.grid}>
        {videos.map((v, i) => (
          <li key={v.id}>
            <a
              className={s.card}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              onClick={(e) => {
                e.preventDefault();
                setPlaying(v);
                dialog.current?.showModal();
              }}
            >
              <span className={`${v.portrait ? `${s.thumb} ${s.portrait}` : s.thumb} tv-num`}>
                <span className={s.media}>
                  {v.portrait ? (
                    <>
                      {/* a blurred, enlarged copy fills the frame behind the upright picture */}
                      <img className={s.fill} src={thumb(v.id)} width="480" height="360" alt="" loading="lazy" />
                      <span className={s.strip}><img src={thumb(v.id)} width="480" height="360" alt="" loading={i < 3 ? undefined : "lazy"} /></span>
                    </>
                  ) : (
                    <img className={s.shot} src={thumb(v.id)} width="480" height="360" alt="" loading={i < 3 ? undefined : "lazy"} />
                  )}
                </span>
                <span className={s.badge}>
                  <svg viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0 L10 6 L0 12 Z" /></svg>
                  {v.duration ?? "Play"}
                </span>
              </span>
              <h2 className={s.cardTitle}>{v.title}</h2>
              <time className={s.cardMeta} dateTime={v.date}>{v.dateLabel}</time>
            </a>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className={s.dialog}
        aria-label={playing?.title ?? "Video"}
        onClose={() => setPlaying(null)}
        onClick={(e) => e.target === dialog.current && close()}
      >
        {playing && (
          <div className={playing.portrait ? `${s.player} ${s.playerPortrait}` : s.player}>
            <div className={s.screen}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${playing.id}?autoplay=1&rel=0&modestbranding=1`}
                title={playing.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
            <div className={s.caption}>
              <div>
                <p className={s.captionTitle}>{playing.title}</p>
                <p className={s.captionMeta}>
                  {playing.dateLabel}
                  {playing.duration && <span>{playing.duration}</span>}
                </p>
              </div>
              <p className={s.captionLinks}>
                {playing.related && <a href={playing.related.href}>{playing.related.label}</a>}
                <a href={`https://www.youtube.com/watch?v=${playing.id}`} target="_blank" rel="noopener">Watch on YouTube</a>
              </p>
            </div>
          </div>
        )}
        <button type="button" className={s.close} onClick={close} aria-label="Close video">
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3 L13 13 M13 3 L3 13" /></svg>
        </button>
      </dialog>
    </>
  );
}
