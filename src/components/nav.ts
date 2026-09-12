export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    title: "Start",
    items: [
      { label: "Getting Started", href: "/getting-started" },
      { label: "Workflows", href: "/workflows" },
      { label: "Plan Mode", href: "/plan-mode" },
    ],
  },
  {
    title: "Extend",
    items: [
      { label: "Slash Commands", href: "/slash-commands" },
      { label: "Subagents", href: "/subagents" },
      { label: "Skills", href: "/skills" },
      { label: "Hooks", href: "/hooks" },
      { label: "MCP", href: "/mcp" },
    ],
  },
  {
    title: "Operate",
    items: [
      { label: "Configuration", href: "/configuration" },
      { label: "Permissions", href: "/permissions" },
      { label: "Automation", href: "/automation" },
    ],
  },
  {
    title: "Resources",
    items: [{ label: "Saved Links", href: "/resources" }],
  },
  {
    title: "Course Notes",
    items: [
      { label: "Full Course Notes", href: "/full-course-notes" },
      { label: "Advanced Course Notes", href: "/advanced-course-notes" },
    ],
  },
];

export const flatNavItems: NavItem[] = navGroups.flatMap((group) => group.items);
