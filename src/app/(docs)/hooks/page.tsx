import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { Callout } from "@/components/Callout/Callout";
import { advancedCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Hooks – Claude Code Handbook",
  description: "Run your own shell commands automatically around Claude Code's actions.",
};

export default function HooksPage() {
  return (
    <DocsPage
      title="Hooks"
      description="Automated shell commands that run in response to events during a session."
      resources={[advancedCourse]}
    >
      <section>
        <h2>What they are</h2>
        <p>
          Hooks let you run arbitrary shell commands automatically at defined
          points in a session &mdash; before a tool runs, after it finishes,
          when the session stops, and more. They&rsquo;re how you enforce
          project-specific automation (formatting, linting, notifications)
          without asking Claude Code to remember to do it every time.
        </p>
      </section>

      <section>
        <h2>Common hook events</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Fires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PreToolUse</td>
                <td>Before a tool call executes &mdash; can block it</td>
              </tr>
              <tr>
                <td>PostToolUse</td>
                <td>After a tool call completes</td>
              </tr>
              <tr>
                <td>UserPromptSubmit</td>
                <td>When you submit a new message</td>
              </tr>
              <tr>
                <td>Stop</td>
                <td>When the agent finishes responding</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Where hooks are configured</h2>
        <p>
          Hooks live in <code>settings.json</code> (project or user scope
          &mdash; see <a href="/configuration">Configuration</a>), mapping an
          event to one or more shell commands.
        </p>
        <CodeBlock label=".claude/settings.json">
          {`{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [{ "type": "command", "command": "npx prettier --write ." }]
      }
    ]
  }
}`}
        </CodeBlock>
        <p>
          That example reformats the project after every file edit, so style
          is enforced automatically instead of relying on Claude Code to run
          the formatter itself.
        </p>
      </section>

      <section>
        <h2>Safety</h2>
        <Callout variant="warning">
          Hooks run with your full shell permissions and execute
          automatically &mdash; there&rsquo;s no approval prompt. Only add
          hooks whose commands you trust completely, and treat a hooks
          config file with the same scrutiny you&rsquo;d give a CI pipeline
          script.
        </Callout>
      </section>
    </DocsPage>
  );
}
