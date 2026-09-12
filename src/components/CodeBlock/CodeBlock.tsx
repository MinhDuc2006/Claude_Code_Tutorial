import { CopyButton } from "./CopyButton";
import styles from "./CodeBlock.module.css";

export function CodeBlock({
  children,
  label,
}: {
  children: string;
  label?: string;
}) {
  return (
    <div className={styles.wrapper}>
      {label && <div className={styles.label}>{label}</div>}
      <pre className={styles.pre}>
        <code className={styles.code}>{children}</code>
      </pre>
      <CopyButton text={children} />
    </div>
  );
}
