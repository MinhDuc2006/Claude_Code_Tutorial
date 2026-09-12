import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import styles from "./DocsShell.module.css";

export function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <div className={styles.body}>
        <div className={styles.sidebarColumn}>
          <Sidebar />
        </div>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
