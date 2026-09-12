import Link from "next/link";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <span className={styles.mark}>{"</>"}</span>
        Claude Code Handbook
      </Link>
    </header>
  );
}
