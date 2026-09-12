import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export type SavedResource = {
  id: string;
  title: string;
  url: string;
  type: "video" | "docs";
  addedAt: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "resources.json");

async function readResources(): Promise<SavedResource[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as SavedResource[];
  } catch {
    return [];
  }
}

async function writeResources(resources: SavedResource[]) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(resources, null, 2));
}

export async function GET() {
  const resources = await readResources();
  return NextResponse.json({ resources });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const title = typeof body?.title === "string" ? body.title.trim() : "";
  const url = typeof body?.url === "string" ? body.url : "";
  const type = body?.type;

  if (!title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }
  if (type !== "video" && type !== "docs") {
    return NextResponse.json({ error: "Type must be \"video\" or \"docs\"." }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return NextResponse.json({ error: "Enter a valid URL, including https://." }, { status: 400 });
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return NextResponse.json({ error: "Only http/https links are allowed." }, { status: 400 });
  }

  const resources = await readResources();
  const entry: SavedResource = {
    id: randomUUID(),
    title,
    url: parsed.toString(),
    type,
    addedAt: new Date().toISOString(),
  };
  resources.push(entry);
  await writeResources(resources);

  return NextResponse.json({ resources }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id." }, { status: 400 });
  }

  const resources = await readResources();
  const next = resources.filter((resource) => resource.id !== id);
  await writeResources(next);

  return NextResponse.json({ resources: next });
}
