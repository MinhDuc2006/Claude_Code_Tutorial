import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { Callout } from "@/components/Callout/Callout";
import { fullCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Workflows – Claude Code Handbook",
  description: "How Claude Code approaches a task, from reading code to shipping a commit.",
};

export default function WorkflowsPage() {
  return (
    <DocsPage
      title="Workflows"
      description="How Claude Code approaches a task, and how to work with it effectively."
      resources={[fullCourse]}
    >
      <section>
        <h2>The read &rarr; plan &rarr; act &rarr; verify loop</h2>
        <p>
          For most tasks, Claude Code first reads the relevant parts of your
          codebase to understand existing patterns, then makes a change, then
          verifies it &mdash; running a build, a test suite, or a linter
          &mdash; before considering the task done. For larger or riskier
          changes, it can pause after the &ldquo;read&rdquo; step and present
          an explicit plan for your approval; see <a href="/plan-mode">Plan Mode</a>.
        </p>
      </section>

      <section>
        <h2>Core tools</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Read</td>
                <td>Open a file and view its contents</td>
              </tr>
              <tr>
                <td>Edit</td>
                <td>Make a targeted change to an existing file</td>
              </tr>
              <tr>
                <td>Write</td>
                <td>Create a new file or fully rewrite one</td>
              </tr>
              <tr>
                <td>Bash</td>
                <td>Run shell commands (tests, builds, git, package managers)</td>
              </tr>
              <tr>
                <td>Grep / Glob</td>
                <td>Search file contents or find files by pattern</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          These same tools are what power more advanced features like{" "}
          <a href="/subagents">subagents</a> and <a href="/hooks">hooks</a>,
          which observe or extend how tools are used.
        </p>
      </section>

      <section>
        <h2>Git workflows</h2>
        <p>
          Claude Code can inspect and drive git directly: checking status and
          diffs before making changes, staging specific files, writing commit
          messages that follow your repository&rsquo;s existing style, and
          opening pull requests with <code>gh</code>.
        </p>
        <CodeBlock label="example prompt">
          &quot;Review the diff, then commit these changes with a message that
          explains why, not just what changed.&quot;
        </CodeBlock>
        <Callout variant="warning">
          Claude Code will avoid destructive git operations (force-push,
          hard reset, discarding uncommitted work) unless you explicitly ask
          for them &mdash; and even then, it should confirm first. If you see
          it about to run one unprompted, stop and ask why.
        </Callout>
      </section>

      <section>
        <h2>Prompting tips</h2>
        <ul>
          <li>Point at concrete files or symbols when you know them &mdash; it saves a search step.</li>
          <li>State constraints up front (&ldquo;don&rsquo;t add new dependencies&rdquo;, &ldquo;keep the existing API&rdquo;).</li>
          <li>Ask for a plan first on anything with wide blast radius (schema changes, deletions, config).</li>
          <li>Iterate: if the first attempt isn&rsquo;t right, describe what&rsquo;s wrong rather than starting over.</li>
        </ul>
      </section>
    </DocsPage>
  );
}
