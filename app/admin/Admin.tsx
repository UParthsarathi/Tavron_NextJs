"use client";

import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { auth, db, OWNER, storage } from "@/lib/firebase";
import type { NewsItem } from "@/lib/news";
import type { Video } from "@/lib/videos";
import { youtubeId } from "@/lib/youtube";
import s from "./Admin.module.css";

// The admin: sign in with Google, then write news, add videos and (the owner only) keep the staff
// list. It talks to Firebase straight from the browser. Nothing in this file is what keeps
// strangers out: firestore.rules and storage.rules do that, on Google's side.

type Draft = NewsItem & { published: boolean };
type Clip = Video & { id: string };
/** called after a change is stored, with a sentence to show; it also refreshes the public pages */
type Saved = (note: string) => Promise<void>;

export function Admin() {
  const [user, setUser] = useState<User | null>(); // undefined until Firebase has looked for a session
  useEffect(() => onAuthStateChanged(auth, setUser), []);
  return (
    <main className={s.page}>
      <header className={s.top}>
        <h1>Tavron website admin</h1>
        {user && (
          <p>
            {user.email} <button type="button" className={s.link} onClick={() => signOut(auth)}>Sign out</button>
          </p>
        )}
      </header>
      {user === undefined ? <p>Checking who is signed in…</p> : user ? <Desk user={user} key={user.uid} /> : <SignIn />}
    </main>
  );
}

function SignIn() {
  const [error, setError] = useState("");
  function signIn() {
    const google = new GoogleAuthProvider();
    google.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, google).catch((e) => {
      if (!/popup-closed|cancelled-popup/.test(e.code)) setError(explain(e));
    });
  }
  return (
    <>
      <p>Sign in with your Tavron Google account to write news and add videos.</p>
      <button type="button" className="tv-btn tv-btn--primary" onClick={signIn}>Sign in with Google</button>
      {error && <p className={s.error} role="alert">{error}</p>}
    </>
  );
}

function Desk({ user }: { user: User }) {
  const staff = useDocs<{ name?: string }>("staff"); // only staff can read this list, so it doubles as the check
  const tabs = ["News", "Videos", ...(user.email === OWNER ? ["Staff"] : [])];
  const [tab, setTab] = useState("News");
  const [note, setNote] = useState("");

  const saved: Saved = async (text) => {
    // Rebuilds the public pages now. If that fails they still catch up within the hour (lib/firestore.ts).
    const live = await fetch("/api/revalidate", { method: "POST", headers: { Authorization: `Bearer ${await user.getIdToken()}` } }).then((r) => r.ok, () => false);
    setNote(live ? text : `${text} The website couldn't be refreshed just now, so it will show this within the hour.`);
  };

  if (staff.error === "denied")
    return (
      <p>
        {user.email} isn&apos;t on the staff list. Ask the owner ({OWNER}) to add this address under Staff, or sign out and use another account.
      </p>
    );
  if (staff.error) return <p className={s.error} role="alert">{staff.error}</p>;
  if (!staff.docs) return <p>Loading…</p>;
  return (
    <>
      <nav className={s.tabs}>
        {tabs.map((t) => (
          <button type="button" key={t} aria-current={t === tab ? "page" : undefined} onClick={() => (setTab(t), setNote(""))}>{t}</button>
        ))}
      </nav>
      {note && <p className={s.note} role="status">{note}</p>}
      {tab === "News" && <News saved={saved} />}
      {tab === "Videos" && <Videos saved={saved} />}
      {tab === "Staff" && <Staff people={staff.docs} reload={staff.load} />}
    </>
  );
}

// ------------------------------------------------------------------------------------------ news

function News({ saved }: { saved: Saved }) {
  const news = useDocs<Draft>("news");
  const [open, setOpen] = useState<Draft | "new">();
  const close = () => setOpen(undefined);
  if (open) return <NewsForm item={open === "new" ? undefined : open} close={close} saved={async (note) => (await saved(note), close(), void news.load())} />;
  if (news.error) return <p className={s.error} role="alert">{news.error}</p>;
  if (!news.docs) return <p>Loading…</p>;
  return (
    <>
      <p><button type="button" className="tv-btn tv-btn--primary" onClick={() => setOpen("new")}>Write a news item</button></p>
      <div className="table-responsive">
        <table className="table">
          <thead><tr><th>Date</th><th>Title</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {[...news.docs].sort((a, b) => b.date.localeCompare(a.date)).map((n) => (
              <tr key={n.slug}>
                <td className={s.nowrap}>{n.date}</td>
                <td>{n.title}<br /><small>{n.type}</small></td>
                <td className={s.nowrap}>{n.published ? <a href={`news/${n.slug}`} target="_blank">On the website</a> : "Draft"}</td>
                <td><button type="button" className={s.link} onClick={() => setOpen(n)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {news.docs.length === 0 && <p>There is no news yet.</p>}
    </>
  );
}

function NewsForm({ item, saved, close }: { item?: Draft; saved: Saved; close: () => void }) {
  const task = useTask();
  const [noPhoto, setNoPhoto] = useState(false); // "Remove the photo" was pressed
  const [sure, setSure] = useState(false); // Delete asks twice

  function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const publish = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value === "publish";
    const f = new FormData(e.currentTarget);
    const text = (name: string) => String(f.get(name) ?? "").trim();
    const lines = (name: string) => text(name).split("\n").map((l) => l.trim()).filter(Boolean);
    task.run(async () => {
      const slug = item?.slug ?? text("slug");
      if (!item && (await getDoc(doc(db, "news", slug))).exists()) throw new Error(`There is already a news item at news/${slug}. Give this one a different address.`);

      const links = lines("links").map((line) => {
        const [label, href, size] = line.split("|").map((part) => part.trim());
        if (!label || !href || !safeLink(href)) throw new Error(`Links: write "${line}" as  label | address . The address is a web address, or a page or file on this site.`);
        return { label, href, ...(size && { size }) };
      });
      const listItems = lines("listItems");
      if (listItems.length && !text("listTitle")) throw new Error("Give the list a heading.");
      const file = f.get("photo") as File;
      const kept = noPhoto ? undefined : item?.image;
      if ((file.size || kept) && !text("alt")) throw new Error("Describe the photo in a few words. People who can't see it, and Google, read this.");

      const photo = file.size ? await upload(file, slug) : kept;
      const next: Draft = {
        slug,
        date: text("date"),
        type: text("type"),
        title: text("title"),
        summary: text("summary"),
        body: text("body").split(/\n\s*\n/).map((p) => p.replace(/\s+/g, " ").trim()).filter(Boolean),
        ...(photo && { image: { src: photo.src, width: photo.width, height: photo.height, alt: text("alt") } }),
        ...(listItems.length && { list: { title: text("listTitle"), items: listItems } }),
        ...(links.length && { links }),
        published: publish,
      };
      await setDoc(doc(db, "news", slug), next);
      await saved(
        publish ? `"${next.title}" is on the website.`
        : item?.published ? `"${next.title}" was taken off the website and kept as a draft.`
        : "Draft saved. Only staff can see it until it is published.",
      );
    });
  }

  const remove = () =>
    task.run(async () => {
      await deleteDoc(doc(db, "news", item!.slug));
      await saved(`"${item!.title}" was deleted.`);
    });

  return (
    <form onSubmit={save}>
      <h2 className={s.h2}>{item ? "Edit news item" : "New news item"}</h2>
      <Field label="Title">
        <input
          className="form-control" name="title" required maxLength={140} defaultValue={item?.title}
          onBlur={(e) => {
            const slug = e.currentTarget.form!.elements.namedItem("slug") as HTMLInputElement | null;
            if (slug && !slug.value) slug.value = slugify(e.currentTarget.value);
          }}
        />
      </Field>
      {item ? (
        <p>Address: tavron.net/news/{item.slug}</p>
      ) : (
        <Field label="Address" hint="tavron.net/news/ followed by this. Lowercase words joined by hyphens. It can't be changed later.">
          <input className="form-control" name="slug" required maxLength={80} pattern="[a-z0-9]+(-[a-z0-9]+)*" />
        </Field>
      )}
      <div className={s.row}>
        <Field label="Date" hint="As 2026-11-09. For old news, 2022-03 or 2022 also work.">
          <input className="form-control" name="date" required pattern="\d{4}(-\d{2}(-\d{2})?)?" defaultValue={item?.date ?? today()} />
        </Field>
        <Field label="Type" hint="Dispatch and Event have their own colour.">
          <input className="form-control" name="type" required maxLength={30} list="types" defaultValue={item?.type} />
          <datalist id="types"><option value="Dispatch" /><option value="Event" /></datalist>
        </Field>
      </div>
      <Field label="Summary" hint="One or two sentences. Shown in the news list, on Google and when the link is shared.">
        <textarea className="form-control" name="summary" required rows={2} maxLength={300} defaultValue={item?.summary} />
      </Field>

      <Field label="Photo" hint="A real photo, at least 1200 pixels wide. It is shrunk for the web before it is stored.">
        {item?.image && !noPhoto && <img className={s.thumb} src={item.image.src} alt="" />}
        <input className="form-control-file" type="file" name="photo" accept="image/jpeg,image/png,image/webp" />
      </Field>
      {item?.image && !noPhoto && <p><button type="button" className={s.link} onClick={() => setNoPhoto(true)}>Remove the photo</button></p>}
      <Field label="What the photo shows" hint="For example: A 15 KL milk silo strapped to a flatbed truck.">
        <input className="form-control" name="alt" maxLength={200} defaultValue={item?.image?.alt} />
      </Field>

      <Field label="Text" hint="Leave an empty line between paragraphs.">
        <textarea className="form-control" name="body" required rows={10} defaultValue={item?.body.join("\n\n")} />
      </Field>

      <Field label="List heading (optional)" hint="For a list beside the text, such as what left the factory.">
        <input className="form-control" name="listTitle" maxLength={80} defaultValue={item?.list?.title} />
      </Field>
      <Field label="List" hint="One line each.">
        <textarea className="form-control" name="listItems" rows={4} defaultValue={item?.list?.items.join("\n")} />
      </Field>
      <Field label="Links (optional)" hint="One per line:  label | address | file size.  For example:  See the post on LinkedIn | https://www.linkedin.com/…   or   Dispatch list | news/list.pdf | 1.4 MB">
        <textarea className="form-control" name="links" rows={2} defaultValue={item?.links?.map((l) => [l.label, l.href, l.size].filter(Boolean).join(" | ")).join("\n")} />
      </Field>

      {task.error && <p className={s.error} role="alert">{task.error}</p>}
      <div className={s.actions}>
        <button className="tv-btn tv-btn--primary" value="publish" disabled={task.busy}>{item?.published ? "Save changes" : "Publish"}</button>
        <button className="tv-btn tv-btn--ghost" value="draft" disabled={task.busy}>{item?.published ? "Take off the website" : "Save as draft"}</button>
        <button type="button" className={s.link} onClick={close} disabled={task.busy}>Cancel</button>
        {item && (
          <button type="button" className={`${s.link} ${s.danger}`} disabled={task.busy} onClick={sure ? remove : () => setSure(true)}>
            {sure ? "Yes, delete it for good" : "Delete"}
          </button>
        )}
        {task.busy && <span>Working…</span>}
      </div>
    </form>
  );
}

/** Shrinks a photo to at most 1600 pixels wide, in the browser, and stores it. The site shows it from /news-photos/<name> (next.config.ts). */
async function upload(file: File, slug: string) {
  const picture = await createImageBitmap(file).catch(() => {
    throw new Error("That file isn't a photo the browser can read. Use a JPEG or PNG.");
  });
  const scale = Math.min(1, 1600 / picture.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(picture.width * scale);
  canvas.height = Math.round(picture.height * scale);
  const pen = canvas.getContext("2d")!;
  pen.fillStyle = "#fff"; // behind a see-through PNG
  pen.fillRect(0, 0, canvas.width, canvas.height);
  pen.drawImage(picture, 0, 0, canvas.width, canvas.height);
  const jpeg = await new Promise<Blob | null>((done) => canvas.toBlob(done, "image/jpeg", 0.85));
  if (!jpeg) throw new Error("The photo couldn't be prepared. Try another file.");
  const name = `${slug}-${Date.now()}.jpg`; // a new name each time: a stored photo is never replaced, so it can be cached for good
  await uploadBytes(ref(storage, name), jpeg, { contentType: "image/jpeg", cacheControl: "public, max-age=31536000, immutable" });
  return { src: `news-photos/${name}`, width: canvas.width, height: canvas.height };
}

// ---------------------------------------------------------------------------------------- videos

function Videos({ saved }: { saved: Saved }) {
  const videos = useDocs<Video>("videos");
  const [open, setOpen] = useState<Clip | "new">();
  const close = () => setOpen(undefined);
  if (videos.error) return <p className={s.error} role="alert">{videos.error}</p>;
  if (!videos.docs) return <p>Loading…</p>;
  if (open) return <VideoForm video={open === "new" ? undefined : open} others={videos.docs} close={close} saved={async (note) => (await saved(note), close(), void videos.load())} />;
  return (
    <>
      <p><button type="button" className="tv-btn tv-btn--primary" onClick={() => setOpen("new")}>Add a video</button></p>
      <div className="table-responsive">
        <table className="table">
          <thead><tr><th></th><th>Title</th><th>Date</th><th></th></tr></thead>
          <tbody>
            {/* as on the Videos page: newest first, the same date in the order they were added */}
            {[...videos.docs].sort((a, b) => b.date.localeCompare(a.date)).map((v) => (
              <tr key={v.id}>
                <td><img className={s.still} src={`https://i.ytimg.com/vi/${youtubeId(v.youtube)}/mqdefault.jpg`} alt="" loading="lazy" /></td>
                <td>{v.title}</td>
                <td className={s.nowrap}>{v.date}</td>
                <td><button type="button" className={s.link} onClick={() => setOpen(v)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {videos.docs.length === 0 && <p>There are no videos yet.</p>}
    </>
  );
}

function VideoForm({ video, others, saved, close }: { video?: Clip; others: Clip[]; saved: Saved; close: () => void }) {
  const task = useTask();
  const [sure, setSure] = useState(false);

  function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = (name: string) => String(f.get(name) ?? "").trim();
    task.run(async () => {
      const youtube = youtubeId(text("youtube"));
      if (!youtube) throw new Error("That isn't a link to a YouTube video. Copy it from the Share button on YouTube.");
      if (others.some((o) => o.id !== video?.id && youtubeId(o.youtube) === youtube)) throw new Error("That video is already on the Videos page.");
      const related = { label: text("relatedLabel"), href: text("relatedHref") };
      if (!related.label !== !related.href) throw new Error("For the related page, fill in both its name and its address, or leave both empty.");
      if (related.href && !safeLink(related.href)) throw new Error("The related page's address should be a page on this site, such as evaporators.html.");
      const next: Video = {
        youtube: text("youtube"),
        title: text("title"),
        date: text("date"),
        ...(text("duration") && { duration: text("duration") }),
        ...(text("description") && { description: text("description") }),
        ...(f.get("portrait") && { portrait: true }),
        ...(related.label && { related }),
      };
      // a new video's id is the time it was added: videos with the same date are shown in id order
      await setDoc(doc(db, "videos", video?.id ?? String(Date.now())), next);
      await saved(`"${next.title}" is on the Videos page.`);
    });
  }

  const remove = () =>
    task.run(async () => {
      await deleteDoc(doc(db, "videos", video!.id));
      await saved(`"${video!.title}" was removed from the Videos page.`);
    });

  return (
    <form onSubmit={save}>
      <h2 className={s.h2}>{video ? "Edit video" : "Add a video"}</h2>
      <Field label="YouTube link" hint="Upload the video to YouTube first, then paste its link here.">
        <input className="form-control" name="youtube" required defaultValue={video?.youtube} placeholder="https://www.youtube.com/watch?v=…" />
      </Field>
      <Field label="Title">
        <input className="form-control" name="title" required maxLength={120} defaultValue={video?.title} />
      </Field>
      <div className={s.row}>
        <Field label="Upload date" hint="The newest video comes first.">
          <input className="form-control" type="date" name="date" required defaultValue={video?.date ?? today()} />
        </Field>
        <Field label="Length (optional)" hint="As YouTube shows it: 1:17">
          <input className="form-control" name="duration" pattern="\d{1,2}(:\d{2}){1,2}" defaultValue={video?.duration} />
        </Field>
      </div>
      <Field label="Description (optional)" hint="A sentence about what the video shows. Google reads it.">
        <textarea className="form-control" name="description" rows={2} maxLength={300} defaultValue={video?.description} />
      </Field>
      <div className={s.row}>
        <Field label="Related page (optional)" hint="Its name, as the link should read: Evaporators">
          <input className="form-control" name="relatedLabel" maxLength={60} defaultValue={video?.related?.label} />
        </Field>
        <Field label="Related page's address" hint="For example: evaporators.html">
          <input className="form-control" name="relatedHref" maxLength={120} defaultValue={video?.related?.href} />
        </Field>
      </div>
      <p>
        <label><input type="checkbox" name="portrait" defaultChecked={video?.portrait} /> Filmed upright on a phone (shown full height instead of between black bars)</label>
      </p>

      {task.error && <p className={s.error} role="alert">{task.error}</p>}
      <div className={s.actions}>
        <button className="tv-btn tv-btn--primary" disabled={task.busy}>{video ? "Save changes" : "Add to the Videos page"}</button>
        <button type="button" className={s.link} onClick={close} disabled={task.busy}>Cancel</button>
        {video && (
          <button type="button" className={`${s.link} ${s.danger}`} disabled={task.busy} onClick={sure ? remove : () => setSure(true)}>
            {sure ? "Yes, remove it" : "Remove"}
          </button>
        )}
        {task.busy && <span>Working…</span>}
      </div>
    </form>
  );
}

// ----------------------------------------------------------------------------------------- staff

function Staff({ people, reload }: { people: { id: string; name?: string }[]; reload: () => Promise<void> }) {
  const task = useTask();

  function add(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const email = String(f.get("email")).trim().toLowerCase();
    task.run(async () => {
      if (email === OWNER) throw new Error("That is the owner's own address. It always has access.");
      if (email.includes("/")) throw new Error("That address can't be used here.");
      await setDoc(doc(db, "staff", email), { name: String(f.get("name")).trim(), added: new Date().toISOString() });
      form.reset();
      await reload();
    });
  }

  const remove = (email: string) =>
    task.run(async () => {
      await deleteDoc(doc(db, "staff", email));
      await reload();
    });

  return (
    <>
      <p>
        The people below can sign in here with their Google account, write news and add videos. Only you, signed in as {OWNER}, can change this list.
        Removing someone stops their access straight away.
      </p>
      <table className="table">
        <tbody>
          <tr><td>{OWNER}</td><td>Owner</td><td></td></tr>
          {people.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td><button type="button" className={`${s.link} ${s.danger}`} disabled={task.busy} onClick={() => remove(p.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={add}>
        <h2 className={s.h2}>Add someone</h2>
        <div className={s.row}>
          <Field label="Their Google account's email address">
            <input className="form-control" type="email" name="email" required />
          </Field>
          <Field label="Name">
            <input className="form-control" name="name" maxLength={80} />
          </Field>
        </div>
        {task.error && <p className={s.error} role="alert">{task.error}</p>}
        <button className="tv-btn tv-btn--primary" disabled={task.busy}>Add to staff</button>
      </form>
    </>
  );
}

// --------------------------------------------------------------------------------------- helpers

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className={s.field}>
      <span>{label}</span>
      {children}
      {hint && <small>{hint}</small>}
    </label>
  );
}

/** a collection's documents with their ids, and `load` to read them again after a change */
function useDocs<T>(name: string) {
  const [docs, setDocs] = useState<(T & { id: string })[]>();
  const [error, setError] = useState<string>(); // "denied": this account may not read the collection
  const load = useCallback(
    () =>
      getDocs(collection(db, name)).then(
        (found) => setDocs(found.docs.map((d) => ({ ...(d.data() as T), id: d.id }))),
        (e) => setError(e.code === "permission-denied" ? "denied" : explain(e)),
      ),
    [name],
  );
  useEffect(() => void load(), [load]);
  return { docs, error, load };
}

/** runs a form's work with its buttons disabled, and keeps what went wrong, in words, for the form to show */
function useTask() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function run(work: () => Promise<void>) {
    setBusy(true);
    setError("");
    try {
      await work();
    } catch (e) {
      setError(explain(e));
    } finally {
      setBusy(false);
    }
  }
  return { busy, error, run };
}

function explain(e: unknown) {
  const code = (e as { code?: string }).code ?? "";
  if (/permission-denied|unauthorized/.test(code)) return "This account isn't allowed to do that.";
  if (/unavailable|network|retry-limit/.test(code)) return "The server couldn't be reached. Check the internet connection and try again.";
  return e instanceof Error ? e.message : String(e);
}

/** an address a link may point to: a web address, or a page or file on this site (never javascript: and the like) */
const safeLink = (href: string) => /^https?:\/\/\S+$/.test(href) || /^[^\s:]+$/.test(href);

const slugify = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60).replace(/-+$/, "");

/** 2026-11-12, by the clock of whoever is writing */
const today = () => new Date().toLocaleDateString("en-CA");
