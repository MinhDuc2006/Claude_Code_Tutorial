"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { SavedResource } from "@/app/api/resources/route";
import styles from "./ResourcesManager.module.css";

type LinkType = SavedResource["type"];

export function ResourcesManager() {
  const [resources, setResources] = useState<SavedResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState<LinkType>("video");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/resources")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setResources(data.resources ?? []);
      })
      .catch(() => {
        if (!cancelled) setError("Could not load saved links.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, url, type }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Could not save that link.");
        return;
      }
      setResources(data.resources);
      setTitle("");
      setUrl("");
    } catch {
      setError("Could not save that link. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    const previous = resources;
    setResources((current) => current.filter((resource) => resource.id !== id));
    try {
      const res = await fetch(`/api/resources?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
    } catch {
      setResources(previous);
      setError("Could not remove that link. Try again.");
    }
  }

  const videos = resources.filter((resource) => resource.type === "video");
  const docs = resources.filter((resource) => resource.type === "docs");

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="e.g. Claude Code walkthrough"
              required
            />
          </label>
          <label className={styles.field}>
            <span>Type</span>
            <select value={type} onChange={(event) => setType(event.target.value as LinkType)}>
              <option value="video">YouTube video</option>
              <option value="docs">Document</option>
            </select>
          </label>
        </div>
        <label className={styles.field}>
          <span>URL</span>
          <input
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://..."
            type="url"
            required
          />
        </label>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.submit} disabled={submitting}>
          {submitting ? "Saving…" : "Save link"}
        </button>
      </form>

      {loading ? (
        <p className={styles.empty}>Loading saved links…</p>
      ) : (
        <>
          <ResourceGroup heading="YouTube videos" items={videos} onDelete={handleDelete} />
          <ResourceGroup heading="Documents" items={docs} onDelete={handleDelete} />
        </>
      )}
    </div>
  );
}

function ResourceGroup({
  heading,
  items,
  onDelete,
}: {
  heading: string;
  items: SavedResource[];
  onDelete: (id: string) => void;
}) {
  return (
    <section className={styles.group}>
      <h2>{heading}</h2>
      {items.length === 0 ? (
        <p className={styles.empty}>No links saved yet.</p>
      ) : (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <button
                type="button"
                className={styles.remove}
                onClick={() => onDelete(item.id)}
                aria-label={`Remove ${item.title}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
