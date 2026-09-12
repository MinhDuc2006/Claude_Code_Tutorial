import type { Metadata } from "next";
import { DocsPage } from "@/components/DocsPage/DocsPage";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { advancedCourse } from "@/components/ResourceList/curatedResources";

export const metadata: Metadata = {
  title: "MCP – Claude Code Handbook",
  description: "Connect external tools and data sources via the Model Context Protocol.",
};

export default function McpPage() {
  return (
    <DocsPage
      title="MCP"
      description="The Model Context Protocol connects Claude Code to external tools and data."
      resources={[advancedCourse]}
    >
      <section>
        <h2>What it is</h2>
        <p>
          MCP (Model Context Protocol) is an open standard for connecting an
          AI agent to external systems &mdash; a database, an internal API, a
          project-management tool &mdash; through a common interface. An MCP
          server exposes a set of tools; Claude Code can call those tools the
          same way it calls its own built-in ones.
        </p>
      </section>

      <section>
        <h2>Servers vs. tools</h2>
        <p>
          An <strong>MCP server</strong> is a running process (local or
          remote) that implements the protocol and advertises a set of{" "}
          <strong>tools</strong> it supports &mdash; for example, a GitHub MCP
          server might expose tools for reading issues or opening pull
          requests. Once connected, those tools show up alongside Claude
          Code&rsquo;s built-in ones for the rest of the session.
        </p>
      </section>

      <section>
        <h2>Adding a server</h2>
        <p>
          MCP servers are registered in configuration, scoped to a user or a
          project, pointing at the command that starts the server:
        </p>
        <CodeBlock label=".claude/settings.json">
          {`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"]
    }
  }
}`}
        </CodeBlock>
        <p>
          Use <code>/mcp</code> in a session to see which servers are
          currently connected and what tools they provide.
        </p>
      </section>

      <section>
        <h2>How tools show up in a session</h2>
        <p>
          MCP tools appear namespaced by server (so two servers can each
          expose a &ldquo;search&rdquo; tool without colliding) and are
          subject to the same permission rules as any other tool &mdash; see{" "}
          <a href="/permissions">Permissions</a>.
        </p>
      </section>
    </DocsPage>
  );
}
