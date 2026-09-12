import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { Callout } from "@/components/Callout/Callout";
import { advancedCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "Permissions – Claude Code Handbook",
  description: "Control which actions Claude Code can take without asking.",
};

export default function PermissionsPage() {
  return (
    <DocsPage
      title="Permissions"
      description="The ask / allow / deny model that governs every tool call."
      resources={[advancedCourse]}
    >
      <section>
        <h2>The model</h2>
        <p>
          Every potentially impactful action &mdash; running a shell command,
          editing a file, calling an MCP tool &mdash; is checked against a set
          of rules before it happens. A rule can <strong>allow</strong> an
          action automatically, <strong>deny</strong> it outright, or leave it
          to <strong>ask</strong>, which prompts you for a one-time or
          remembered decision.
        </p>
      </section>

      <section>
        <h2>Where rules live</h2>
        <p>
          Rules are defined in the <code>permissions</code> block of{" "}
          <code>settings.json</code>, at the user, project, or enterprise
          scope described in <a href="/configuration">Configuration</a>.
          Project-scoped rules are the most common way to share a team&rsquo;s
          agreed-upon allow-list.
        </p>
        <CodeBlock label=".claude/settings.json">
          {`{
  "permissions": {
    "allow": ["Bash(npm test)", "Bash(npm run lint)"],
    "deny": ["Bash(rm -rf *)"]
  }
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Common patterns</h2>
        <ul>
          <li>Allow-list the specific test/build/lint commands your project uses so approval prompts don&rsquo;t interrupt routine work.</li>
          <li>Deny destructive patterns explicitly (force-push, recursive deletes) even if you don&rsquo;t expect them to come up.</li>
          <li>Leave anything unfamiliar or irreversible on <strong>ask</strong> rather than pre-approving it.</li>
        </ul>
      </section>

      <section>
        <h2>Best practices</h2>
        <Callout variant="warning">
          Treat permission rules the way you&rsquo;d treat access control
          anywhere else: grant the minimum needed for the work at hand.
          Broad allow-lists (or a flag that skips permission checks
          entirely) trade safety for convenience &mdash; reasonable in a
          disposable sandbox, risky against a real environment with
          credentials or production access.
        </Callout>
      </section>
    </DocsPage>
  );
}
