import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { advancedCourse, skillsExampleFolder } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Skills – Claude Code Handbook",
  description: "Packaged, reusable instruction sets that Claude Code invokes automatically.",
};

export default function SkillsPage() {
  return (
    <DocsPage
      title="Skills"
      description="Reusable, packaged instructions for a specific kind of task."
      resources={[advancedCourse, skillsExampleFolder]}
    >
      <section>
        <h2>What they are</h2>
        <p>
          A skill is a bundle of instructions for handling a particular kind
          of task &mdash; a code review checklist, a deploy procedure, a
          project-specific workflow &mdash; along with a short description of
          when it applies. Skills can run inline, adding their instructions to
          the current conversation, or hand the whole task to a subagent and
          return only the finished result.
        </p>
      </section>

      <section>
        <h2>How Claude Code picks one</h2>
        <p>
          Each skill has a one-line description. When a request matches what
          a skill covers, Claude Code loads that skill&rsquo;s full
          instructions for the turn instead of improvising an approach from
          scratch. Skills can also be invoked explicitly by name, the way a
          slash command is.
        </p>
      </section>

      <section>
        <h2>Skills vs. commands vs. subagents</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Triggered by</th>
                <th>Runs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Slash command</td>
                <td>Explicit <code>/name</code></td>
                <td>In the current session</td>
              </tr>
              <tr>
                <td>Skill</td>
                <td>Description match, or explicit invocation</td>
                <td>Inline, or delegated to a subagent</td>
              </tr>
              <tr>
                <td>Subagent</td>
                <td>The main agent deciding to delegate</td>
                <td>Its own isolated context</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Package structure</h2>
        <p>
          A skill is typically a directory with an instructions file and a
          short frontmatter description used for matching:
        </p>
        <CodeBlock label=".claude/skills/code-review/SKILL.md">
          {`---
name: code-review
description: Review the current diff for correctness bugs and simplification opportunities.
---

1. Inspect the diff against the base branch.
2. Flag correctness issues before style issues.
3. Report findings ranked by severity.`}
        </CodeBlock>
        <p>
          For a real-world example of a skills-based project (trigger jobs,
          prompt files, and a <code>.claude</code> folder wired together), see
          the &ldquo;All Of My Claude Skills&rdquo; folder linked under
          Further resources below, shared by Nick Saraev alongside his Claude
          Code courses.
        </p>
      </section>
    </DocsPage>
  );
}
