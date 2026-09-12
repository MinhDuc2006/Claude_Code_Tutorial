import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { Callout } from "@/components/Callout/Callout";
import { advancedCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Subagents – Claude Code Handbook",
  description: "Spawn specialized agents for isolated or parallel work.",
};

export default function SubagentsPage() {
  return (
    <DocsPage
      title="Subagents"
      description="Delegate a piece of work to a specialized agent running in its own context."
      resources={[advancedCourse]}
    >
      <section>
        <h2>What they are</h2>
        <p>
          A subagent is a separate Claude Code agent, launched by the main
          session, that runs its own tool loop and reports back a result. It
          can have a different tool set, a narrower purpose (a fast read-only
          codebase search versus a general-purpose implementer), and its own
          context window &mdash; so its intermediate exploration doesn&rsquo;t
          clutter the main conversation.
        </p>
      </section>

      <section>
        <h2>Why use one</h2>
        <ul>
          <li><strong>Context hygiene</strong> &mdash; a research task can generate a lot of tool output; a subagent absorbs that noise and returns only the answer.</li>
          <li><strong>Parallelism</strong> &mdash; independent subtasks (e.g. exploring three unrelated parts of a codebase) can run at the same time.</li>
          <li><strong>Specialization</strong> &mdash; a subagent can be scoped to exactly the tools and instructions a task needs, nothing more.</li>
        </ul>
      </section>

      <section>
        <h2>When to use one vs. doing it inline</h2>
        <p>
          Reach for a subagent when the intermediate output isn&rsquo;t worth
          keeping around &mdash; a broad codebase search, an independent
          research question, a large multi-step task that would otherwise
          fill the main conversation with raw output. For a small, targeted
          change where you already know the files involved, working inline is
          simpler and faster.
        </p>
        <Callout variant="note">
          A subagent starts with no memory of the current conversation unless
          it&rsquo;s explicitly briefed. A good subagent prompt includes the
          background it needs &mdash; file paths, what&rsquo;s already been
          tried, what the answer will be used for &mdash; the way you&rsquo;d
          brief a colleague joining mid-project.
        </Callout>
      </section>

      <section>
        <h2>How results come back</h2>
        <p>
          The parent session sends the subagent a task, the subagent works
          independently (sometimes in the background, notifying the parent
          when done), and returns a final report. The parent then summarizes
          that report for you rather than dumping the subagent&rsquo;s raw
          transcript into the conversation.
        </p>
      </section>
    </DocsPage>
  );
}
