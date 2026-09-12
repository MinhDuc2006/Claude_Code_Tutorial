import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { Callout } from "@/components/Callout/Callout";
import { advancedCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Automation – Claude Code Handbook",
  description: "Run Claude Code unattended: scripts, scheduled agents, and background tasks.",
};

export default function AutomationPage() {
  return (
    <DocsPage
      title="Automation"
      description="Running Claude Code without a human watching every step."
      resources={[advancedCourse]}
    >
      <section>
        <h2>Headless / print mode</h2>
        <p>
          The <code>--print</code> (<code>-p</code>) flag runs a single
          prompt non-interactively and prints the result, making Claude Code
          scriptable from CI, a Makefile target, or another program.
        </p>
        <CodeBlock label="terminal">
          {`claude -p "Summarize the changes in the last 5 commits"`}
        </CodeBlock>
      </section>

      <section>
        <h2>Scheduled agents</h2>
        <p>
          A recurring task &mdash; a daily changelog summary, a weekly
          dependency check &mdash; can be registered as a scheduled agent that
          runs on a cron schedule without you starting it manually each time.
        </p>
      </section>

      <section>
        <h2>Background tasks</h2>
        <p>
          Within a single session, a long-running command (a build, a test
          suite, a dev server) can be started in the background so the
          conversation continues while it runs, with a notification when it
          finishes rather than blocking on it.
        </p>
      </section>

      <section>
        <h2>Loops</h2>
        <p>
          For a task that should repeat on an interval &mdash; checking a
          deploy&rsquo;s status, polling for new items in a queue &mdash; a
          loop re-runs a prompt or command on a schedule, either fixed or
          self-paced.
        </p>
      </section>

      <section>
        <h2>Cautions</h2>
        <Callout variant="warning">
          Unattended runs can&rsquo;t rely on someone approving actions
          interactively, which usually means a broader pre-approved
          permission set. Scope that allow-list tightly to what the
          automation actually needs, and monitor its output &mdash; don&rsquo;t
          treat &ldquo;runs on a schedule&rdquo; as &ldquo;runs unsupervised
          forever.&rdquo;
        </Callout>
      </section>
    </DocsPage>
  );
}
