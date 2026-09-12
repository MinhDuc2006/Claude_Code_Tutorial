import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ResourceList, type Resource } from "@/components/ResourceList/ResourceList";
import { NextPrevNav } from "@/components/NextPrevNav/NextPrevNav";
import styles from "./DocsPage.module.css";

export function DocsPage({
  title,
  description,
  resources,
  children,
}: {
  title: string;
  description: string;
  resources?: Resource[];
  children: React.ReactNode;
}) {
  return (
    <article className={styles.article}>
      <PageHeader title={title} description={description} />
      <div className={styles.prose}>{children}</div>
      <ResourceList resources={resources} />
      <NextPrevNav />
    </article>
  );
}
