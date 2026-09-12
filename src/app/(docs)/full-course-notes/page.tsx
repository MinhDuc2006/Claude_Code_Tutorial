import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { Callout } from "@/components/Callout/Callout";
import { fullCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Full Course Notes – Claude Code Handbook",
  description: "Original chapter-by-chapter notes based on Nick Saraev's 4-hour Claude Code course.",
};

export default function FullCourseNotesPage() {
  return (
    <DocsPage
      title="Full Course Notes"
      description="An original chapter outline based on watching the video below — not a transcript."
      resources={[fullCourse]}
    >
      <Callout variant="note">
        Source: <strong>&ldquo;{fullCourse.title}&rdquo;</strong> by Nick Saraev,
        4:10:43 long ({fullCourse.url}). This page is an original summary written
        after watching the video and reading its transcript &mdash; it paraphrases
        the material with credit, it does not reproduce the video&rsquo;s script.
        Watch the source video for the full explanation.
      </Callout>

      <section>
        <h2>00:00 &mdash; Course roadmap</h2>
        <p>
          Nick introduces himself as a daily, heavy user of Claude Code for
          running a multi-million-dollar business, and previews everything the
          course will cover.
        </p>
      </section>

      <section>
        <h2>01:07 &mdash; Core concepts primer</h2>
        <p>A quick overview of what Claude Code is and why non-programmers can still get real value from it.</p>
      </section>

      <section>
        <h2>03:44 &mdash; Installation walkthrough</h2>
        <p>
          Shows signing up for a Claude Pro plan, then installing Claude Code
          via the official <code>curl</code> installer command, and logging in
          with <code>/login</code>.
        </p>
      </section>

      <section>
        <h2>08:05 &mdash; Terminal basics</h2>
        <p>
          Walks through the terminal UI: model name, plan tier, working
          directory, permission mode (cycled with Shift+Tab), the token
          counter, and the context-usage meter.
        </p>
      </section>

      <section>
        <h2>12:23 &mdash; What is an IDE</h2>
        <p>
          Defines an IDE as a file browser, text editor, and AI chat panel
          combined, and introduces the two editors covered next: VS Code and
          Antigravity.
        </p>
      </section>

      <section>
        <h2>13:53 &mdash; VS Code setup</h2>
        <p>
          Installs the official Anthropic &ldquo;Claude Code&rdquo; extension
          (warns against unofficial lookalikes) and demonstrates a basic
          dark-mode-to-light-mode edit request.
        </p>
      </section>

      <section>
        <h2>19:11 &mdash; Antigravity setup</h2>
        <p>
          Installs Google&rsquo;s Antigravity editor (built on the VS Code
          codebase) and shows its similar three-pane layout, with Claude Code
          wired in instead of Gemini.
        </p>
      </section>

      <section>
        <h2>24:01 &mdash; First build exercise</h2>
        <p>
          Uses a design-inspiration site as a reference and builds a sample
          webpage live, to show how quickly a solid UI can come together.
        </p>
      </section>

      <section>
        <h2>30:29 &mdash; CLAUDE.md deep dive</h2>
        <p>
          Explains <code>CLAUDE.md</code> as a persistent &ldquo;project
          brain&rdquo; injected into every conversation, using a ship-steering
          analogy for why precise early instructions shape everything after.
        </p>
      </section>

      <section>
        <h2>34:40 &mdash; Website design workflows</h2>
        <p>
          Covers a few common design workflows, including a
          screenshot-compare-iterate loop where the agent checks its own
          output against a reference design and refines it.
        </p>
      </section>

      <section>
        <h2>41:47 &mdash; Verification matters</h2>
        <p>
          Argues that having the agent check its own work &mdash; visually or
          functionally &mdash; is critical for production-quality results,
          especially on mobile.
        </p>
      </section>

      <section>
        <h2>54:42 &mdash; Advanced features &amp; the .claude folder</h2>
        <p>
          Tours the hidden <code>.claude</code> directory and the permission
          modes it controls (ask-before-edits, auto-edit, and a
          bypass-permissions mode).
        </p>
      </section>

      <section>
        <h2>~2:01 &mdash; Applied project work</h2>
        <p>Adjusts a sample project&rsquo;s design and tests payment functionality in a real build.</p>
      </section>

      <section>
        <h2>2:05 &mdash; GitHub &amp; project setup</h2>
        <p>Connects the project to GitHub for version control and configures the repository.</p>
      </section>

      <section>
        <h2>2:07 &mdash; Automation power</h2>
        <p>Demonstrates automating repetitive tasks with Claude Code.</p>
      </section>

      <section>
        <h2>2:13 &mdash; Context management</h2>
        <p>
          Strategies for avoiding &ldquo;context rot,&rdquo; prompting
          efficiently, and understanding automatic conversation compression.
        </p>
      </section>

      <section>
        <h2>2:19 &mdash; MCP tools overview</h2>
        <p>Introduces Model Context Protocol tools for connecting external data sources and services.</p>
      </section>

      <section>
        <h2>2:27 &mdash; Token strategy</h2>
        <p>Techniques for minimizing token spend across long sessions.</p>
      </section>

      <section>
        <h2>2:35 &mdash; Skills system</h2>
        <p>
          Explains Claude Code Skills as files that turn the agent into a
          specialized sub-tool, including their file structure, then builds
          one from scratch.
        </p>
      </section>

      <section>
        <h2>2:50 &mdash; MCP protocol &amp; token cost tradeoffs</h2>
        <p>A deeper look at MCP and the token overhead of different integrations.</p>
      </section>

      <section>
        <h2>3:09 &mdash; Plugins &amp; subagents</h2>
        <p>
          Covers the plugin marketplace, converting Skills into subagents, and
          a case study scaling automated email classification with them.
        </p>
      </section>

      <section>
        <h2>3:26 &mdash; Agent teams &amp; worktrees</h2>
        <p>Explains coordinating multiple agents as a team, and using git worktrees to run parallel Claude sessions.</p>
      </section>

      <section>
        <h2>4:03 &mdash; Cloud deployment</h2>
        <p>Closes the course by deploying a finished project to production using Modal.</p>
      </section>
    </DocsPage>
  );
}
