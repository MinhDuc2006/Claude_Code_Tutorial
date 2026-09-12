import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { Callout } from "@/components/Callout/Callout";
import { fullCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Getting Started – Claude Code Handbook",
  description: "Install Claude Code, sign in, and run your first session.",
};

export default function GettingStartedPage() {
  return (
    <DocsPage
      title="Getting Started"
      description="Install Claude Code, sign in, and make your first change."
      resources={[fullCourse]}
    >
      <section>
        <h2>What is Claude Code?</h2>
        <p>
          Claude Code is a command-line agent that reads, edits, and runs code
          directly in your project. Instead of copy-pasting snippets between a
          chat window and your editor, you run it inside a terminal in your
          repository and it works with real files, real commands, and real
          version control &mdash; asking for approval before anything
          risky.
        </p>
      </section>

      <section>
        <h2>Install</h2>
        <p>Install the CLI globally with npm:</p>
        <CodeBlock label="terminal">npm install -g @anthropic-ai/claude-code</CodeBlock>
        <p>
          Node.js is required. Once installed, the <code>claude</code> command
          is available anywhere on your machine.
        </p>
      </section>

      <section>
        <h2>Sign in</h2>
        <p>
          Run <code>claude</code> inside any project directory. The first run
          walks you through authenticating with your Anthropic account.
          Credentials are cached so you only need to do this once per machine.
        </p>
        <CodeBlock label="terminal">{`cd my-project\nclaude`}</CodeBlock>
      </section>

      <section>
        <h2>Basic prompting</h2>
        <p>
          Once the session starts, just describe what you want in plain
          language: &ldquo;fix the failing test in{" "}
          <code>utils.test.ts</code>&rdquo;, &ldquo;add a dark mode toggle to
          the settings page&rdquo;, or &ldquo;explain how the auth middleware
          works.&rdquo; Claude Code reads the relevant files itself rather
          than needing you to paste code in.
        </p>
        <Callout variant="tip">
          Be specific about the outcome you want, not the exact steps. Claude
          Code figures out which files to read and how to make the change;
          your job is to describe the goal and any constraints.
        </Callout>
      </section>

      <section>
        <h2>Editing files</h2>
        <p>
          When a task requires a code change, Claude Code proposes an edit and
          asks for your approval before writing it (unless you&rsquo;ve
          pre-approved that kind of action &mdash; see{" "}
          <a href="/permissions">Permissions</a>). You can accept, reject, or
          ask for a different approach before anything touches disk.
        </p>
      </section>

      <section>
        <h2>Running commands</h2>
        <p>
          Claude Code can run shell commands &mdash; installing dependencies,
          running tests, starting a dev server &mdash; the same way you would.
          Each command is shown to you, and commands outside your approved
          list require a one-time confirmation.
        </p>
      </section>

      <section>
        <h2>Where to go next</h2>
        <p>
          Read <a href="/workflows">Workflows</a> to see how Claude Code
          approaches a typical coding task end-to-end, or jump straight to{" "}
          <a href="/plan-mode">Plan Mode</a> if you want to review a plan
          before any files change.
        </p>
      </section>
    </DocsPage>
  );
}
