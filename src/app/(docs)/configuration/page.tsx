import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { advancedCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Configuration – Claude Code Handbook",
  description: "CLI flags, settings.json, and project context files.",
};

export default function ConfigurationPage() {
  return (
    <DocsPage
      title="Configuration"
      description="How to configure Claude Code at the CLI, user, and project level."
      resources={[advancedCourse]}
    >
      <section>
        <h2>CLI flags</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Flag</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>-p</code>, <code>--print</code></td>
                <td>Run non-interactively and print the result (scripting)</td>
              </tr>
              <tr>
                <td><code>--continue</code></td>
                <td>Resume the most recent conversation in this directory</td>
              </tr>
              <tr>
                <td><code>--model</code></td>
                <td>Select which model to use for the session</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>settings.json scopes</h2>
        <p>Settings apply at three scopes, in order of precedence:</p>
        <ul>
          <li><strong>Enterprise</strong> &mdash; organization-wide, managed centrally.</li>
          <li><strong>Project</strong> &mdash; <code>.claude/settings.json</code>, checked into the repo, shared with the team.</li>
          <li><strong>User</strong> &mdash; <code>~/.claude/settings.json</code>, personal defaults across all projects.</li>
        </ul>
        <p>
          A local override file (<code>.claude/settings.local.json</code>,
          typically git-ignored) lets you tweak project settings for yourself
          without affecting the team.
        </p>
      </section>

      <section>
        <h2>CLAUDE.md and AGENTS.md</h2>
        <p>
          <code>CLAUDE.md</code> at the root of a project is loaded
          automatically as standing context &mdash; coding conventions,
          architectural notes, anything you&rsquo;d otherwise repeat every
          session. <code>AGENTS.md</code> serves a similar purpose and is
          recognized by other agent tooling too; a project can reference one
          from the other.
        </p>
        <CodeBlock label="CLAUDE.md">
          {`# Project conventions

- Use English for all code comments and commit messages.
- Run \`npm run lint\` before considering a change complete.
- Prefer editing existing files over creating new ones.`}
        </CodeBlock>
      </section>

      <section>
        <h2>Permissions</h2>
        <p>
          The rules governing which actions need approval live in the
          permissions block of <code>settings.json</code> &mdash; covered in
          full in <a href="/permissions">Permissions</a>.
        </p>
      </section>
    </DocsPage>
  );
}
