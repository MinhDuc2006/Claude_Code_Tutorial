import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { Callout } from "@/components/Callout/Callout";
import { advancedCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Advanced Course Notes – Claude Code Handbook",
  description: "Original chapter-by-chapter notes based on Nick Saraev's 3-hour advanced Claude Code course.",
};

export default function AdvancedCourseNotesPage() {
  return (
    <DocsPage
      title="Advanced Course Notes"
      description="An original chapter outline based on watching the video below — not a transcript."
      resources={[advancedCourse]}
    >
      <Callout variant="note">
        Source: <strong>&ldquo;{advancedCourse.title}&rdquo;</strong> by Nick
        Saraev (LeftClick), 3:18:23 long ({advancedCourse.url}). This video has
        no captions available, so this outline is built from the
        creator&rsquo;s own chapter list and description rather than a
        transcript, then written up in original wording. Watch the source
        video for the full explanation.
      </Callout>

      <section>
        <h2>00:00 &mdash; Course kickoff</h2>
        <p>Nick frames this as the advanced follow-up for viewers who already know Claude Code basics.</p>
      </section>

      <section>
        <h2>00:57 &mdash; Tuning CLAUDE.md and system prompts</h2>
        <p>Techniques for writing more effective project instructions to raise output quality.</p>
      </section>

      <section>
        <h2>09:03 &mdash; Structuring your workspace</h2>
        <p>How to lay out folders and repos so Claude Code can navigate large projects efficiently.</p>
      </section>

      <section>
        <h2>13:57 &mdash; Using plan mode</h2>
        <p>Leveraging Claude Code&rsquo;s plan-first workflow before making changes.</p>
      </section>

      <section>
        <h2>17:30 &mdash; A repeatable dev loop</h2>
        <p>A feedback-loop pattern for iterating with the agent consistently.</p>
      </section>

      <section>
        <h2>17:53 &mdash; Kicking off a fresh project</h2>
        <p>Practical steps for bootstrapping a new codebase with Claude Code.</p>
      </section>

      <section>
        <h2>26:47 &mdash; Agent harnesses</h2>
        <p>
          Explains what a &ldquo;harness&rdquo; &mdash; the orchestration
          layer wrapped around a model &mdash; is and how it enables bigger
          builds. As one viewer summarized Nick&rsquo;s point:{" "}
          <q>a harness is everything that wraps around</q> the model itself.
        </p>
      </section>

      <section>
        <h2>34:28 &mdash; Running things in parallel</h2>
        <p>Techniques for parallelizing agent tasks to speed up work.</p>
      </section>

      <section>
        <h2>42:07 &mdash; Debate-style multi-model consensus</h2>
        <p>Using multiple model runs or votes to improve answer reliability.</p>
      </section>

      <section>
        <h2>58:09 &mdash; Group decision-making among agents</h2>
        <p>Extends the consensus idea to solving harder problems with agent teams.</p>
      </section>

      <section>
        <h2>1:06 &mdash; Applied demos</h2>
        <p>A few side examples applying these techniques, including generative/algorithmic art.</p>
      </section>

      <section>
        <h2>1:11 &mdash; Coordinating agent teams</h2>
        <p>Patterns for organizing multiple agents working together.</p>
      </section>

      <section>
        <h2>1:16 &mdash; The pipeline pattern</h2>
        <p>Chaining agent steps into a production-style pipeline.</p>
      </section>

      <section>
        <h2>1:21 &mdash; Skills vs. subagents</h2>
        <p>Compares Claude Code Skills against spinning up subagents for organizing capabilities.</p>
      </section>

      <section>
        <h2>1:22 &mdash; Hierarchy of organization</h2>
        <p>A bigger-picture look at structuring agents, skills, and subagents together in a project.</p>
      </section>

      <section>
        <h2>1:29 &mdash; &ldquo;Auto-research&rdquo; deep dive</h2>
        <p>
          An iterative self-improvement loop pattern (credited in the video to
          Andrej Karpathy), covering setup, key components, and real use
          cases.
        </p>
      </section>

      <section>
        <h2>1:53 &mdash; Raw HTTP automation</h2>
        <p>Using direct HTTP requests for automation instead of driving a browser.</p>
      </section>

      <section>
        <h2>1:55 &mdash; Browser automation</h2>
        <p>An overview of browser-automation approaches and which tool fits which use case.</p>
      </section>

      <section>
        <h2>2:07 &mdash; Dealing with slowdowns</h2>
        <p>Handling performance and latency fluctuations, including diversifying across models.</p>
      </section>

      <section>
        <h2>2:24 &mdash; Workspace organization for real work</h2>
        <p>Structuring setups for personal, business, and client projects.</p>
      </section>

      <section>
        <h2>2:39 &mdash; Security considerations</h2>
        <p>Security practices for larger projects, including an auto-mode feature and OAuth handling.</p>
      </section>

      <section>
        <h2>3:00 &mdash; Closing thoughts</h2>
        <p>Wraps up with predictions about where Claude Code and agentic engineering are headed.</p>
      </section>
    </DocsPage>
  );
}
