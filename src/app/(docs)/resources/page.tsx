import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { ResourcesManager } from "@/components/ResourcesManager/ResourcesManager";

export const metadata: Metadata = {
  title: "Resources – Claude Code Handbook",
  description: "Save YouTube videos and document links to revisit later.",
};

export default function ResourcesPage() {
  return (
    <DocsPage
      title="Resources"
      description="Save YouTube videos and document links you want to come back to."
    >
      <ResourcesManager />
    </DocsPage>
  );
}
