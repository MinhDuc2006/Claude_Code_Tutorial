import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { Callout } from "@/components/Callout/Callout";

export const metadata: Metadata = {
  title: "Plan Mode – Claude Code Handbook",
  description: "Review a read-only plan before Claude Code touches any files.",
};

export default function PlanModePage() {
  return (
    <DocsPage
      title="Plan Mode"
      description="A read-only mode for reviewing an approach before any files change."
    >
      <section>
        <h2>What it is</h2>
        <p>
          Plan Mode restricts Claude Code to read-only actions &mdash;
          exploring the codebase, running searches, reading files &mdash;
          while it puts together a written implementation plan. No edits, no
          commits, no destructive commands happen until you explicitly
          approve the plan. This very page was written using that workflow.
        </p>
      </section>

      <section>
        <h2>Why it exists</h2>
        <p>
          For anything non-trivial &mdash; a new feature, a structural
          refactor, a multi-file change &mdash; it&rsquo;s cheaper to catch a
          wrong assumption in a plan than in a half-finished edit. Plan Mode
          gives you a checkpoint: see the intended approach, the files that
          will change, and how it&rsquo;ll be verified, before anything
          happens.
        </p>
      </section>

      <section>
        <h2>Anatomy of a good plan</h2>
        <p>A plan worth approving usually includes:</p>
        <ul>
          <li><strong>Context</strong> &mdash; why the change is needed, in a sentence or two.</li>
          <li><strong>Approach</strong> &mdash; the concrete strategy, not every alternative considered.</li>
          <li><strong>Files</strong> &mdash; which files will be created or modified.</li>
          <li><strong>Verification</strong> &mdash; how you&rsquo;ll know it worked (tests, a build, a manual check).</li>
        </ul>
      </section>

      <section>
        <h2>When to use it</h2>
        <p>
          Reach for Plan Mode when a task is ambiguous, touches many files, or
          has a large blast radius (schema migrations, deleting code, changing
          public APIs). For small, well-scoped fixes &mdash; a typo, a
          one-line bug fix &mdash; it&rsquo;s usually faster to just let
          Claude Code act directly and review the diff afterward.
        </p>
        <Callout variant="tip">
          You can always ask clarifying questions or redirect the approach
          while still in Plan Mode &mdash; nothing is final until you approve
          it.
        </Callout>
      </section>
    </DocsPage>
  );
}
