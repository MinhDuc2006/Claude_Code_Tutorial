import { DocsShell } from "@/components/DocsShell/DocsShell";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <DocsShell>{children}</DocsShell>;
}
