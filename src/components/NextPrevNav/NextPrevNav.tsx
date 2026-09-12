"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { flatNavItems } from "@/components/nav";
import styles from "./NextPrevNav.module.css";

export function NextPrevNav() {
  const pathname = usePathname();
  const index = flatNavItems.findIndex((item) => item.href === pathname);

  if (index === -1) {
    return null;
  }

  const previous = index > 0 ? flatNavItems[index - 1] : undefined;
  const next =
    index < flatNavItems.length - 1 ? flatNavItems[index + 1] : undefined;

  if (!previous && !next) {
    return null;
  }

  return (
    <nav className={styles.nav} aria-label="Page navigation">
      {previous ? (
        <Link href={previous.href} className={styles.link} data-direction="prev">
          <span className={styles.direction}>Previous</span>
          <span className={styles.label}>{previous.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className={styles.link} data-direction="next">
          <span className={styles.direction}>Next</span>
          <span className={styles.label}>{next.label}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
