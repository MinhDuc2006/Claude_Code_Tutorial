import styles from "./ResourceList.module.css";

export type Resource = {
  title: string;
  url: string;
  type: "video" | "article" | "docs";
};

const TYPE_LABELS: Record<Resource["type"], string> = {
  video: "Video",
  article: "Article",
  docs: "Docs",
};

export function ResourceList({ resources }: { resources?: Resource[] }) {
  if (!resources || resources.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Further resources</h2>
      <ul className={styles.list}>
        {resources.map((resource) => (
          <li key={resource.url} className={styles.item}>
            <span className={styles.type} data-type={resource.type}>
              {TYPE_LABELS[resource.type]}
            </span>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
