import styles from "./Callout.module.css";

type CalloutVariant = "tip" | "note" | "warning";

const LABELS: Record<CalloutVariant, string> = {
  tip: "Tip",
  note: "Note",
  warning: "Warning",
};

export function Callout({
  variant = "note",
  children,
}: {
  variant?: CalloutVariant;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.callout} data-variant={variant}>
      <div className={styles.label}>{LABELS[variant]}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
