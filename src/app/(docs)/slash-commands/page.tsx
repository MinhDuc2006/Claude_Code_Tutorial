import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { advancedCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Slash Commands – Claude Code Handbook",
  description: "Built-in shortcuts and custom project commands.",
};

export default function SlashCommandsPage() {
  return (
    <DocsPage
      title="Slash Commands"
      description="Shortcuts for common actions, plus commands you define yourself."
      resources={[advancedCourse]}
    >
      <section>
        <h2>Built-in commands</h2>
        <p>
          Typing <code>/</code> at the prompt shows a menu of built-in
          commands for managing the session itself &mdash; distinct from
          asking Claude Code to do something in your code.
        </p>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Command</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>/help</code></td>
                <td>Show help for using Claude Code</td>
              </tr>
              <tr>
                <td><code>/clear</code></td>
                <td>Start a fresh conversation, clearing context</td>
              </tr>
              <tr>
                <td><code>/config</code></td>
                <td>View or change settings like theme and model</td>
              </tr>
              <tr>
                <td><code>/init</code></td>
                <td>Generate a starting <code>CLAUDE.md</code> for the project</td>
              </tr>
              <tr>
                <td><code>/agents</code></td>
                <td>Manage available subagent types</td>
              </tr>
              <tr>
                <td><code>/mcp</code></td>
                <td>Inspect connected MCP servers and their tools</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The exact set of built-in commands evolves with each release &mdash;
          run <code>/help</code> in your installed version for the current
          list.
        </p>
      </section>

      <section>
        <h2>Custom project commands</h2>
        <p>
          You can define your own slash commands scoped to a project by
          adding Markdown files under <code>.claude/commands/</code>. The
          filename becomes the command name.
        </p>
        <CodeBlock label=".claude/commands/deploy.md">
          {`Deploy the current branch to staging:

1. Run the test suite and confirm it passes.
2. Build the production bundle.
3. Push to the \`staging\` remote.
4. Report the deployed URL.`}
        </CodeBlock>
        <p>
          Saving that file makes <code>/deploy</code> available in any session
          started inside the project. Commands can also accept arguments,
          which get substituted into the command&rsquo;s instructions.
        </p>
      </section>
    </DocsPage>
  );
}
