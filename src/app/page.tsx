import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { navGroups } from "@/components/nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>A complete guide to Claude Code</h1>
          <p className={styles.subtitle}>
            From your first install to subagents, skills, hooks, and
            automation &mdash; everything you need to work effectively with
            Claude Code in the terminal.
          </p>
          <div className={styles.ctas}>
            <Link href="/getting-started" className={styles.primary}>
              Get started
            </Link>
            <Link href="/workflows" className={styles.secondary}>
              See how it works
            </Link>
          </div>
        </section>

        <section className={styles.explainer}>
          <h2>What is Claude Code?</h2>
          <p>
            Claude Code is a command-line agent that reads, edits, and runs
            code directly inside your project &mdash; proposing changes for
            your approval, running your build and test commands, and driving
            git, all from a single terminal session.
          </p>
        </section>

        <section className={styles.groups}>
          {navGroups.map((group) => (
            <div key={group.title} className={styles.groupCard}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
