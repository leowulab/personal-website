import fs from "node:fs";
import path from "node:path";

const LAB_DIR = path.join(process.cwd(), "src/content/lab");

export type LabMeta = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: string[];
};

export type LabPost = LabMeta & { slug: string };

export function getLabSlugs(): string[] {
  return fs
    .readdirSync(LAB_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

// Can not find the article return null, the page will determine to display 404
export async function getLabPost(slug: string) {
  if (!getLabSlugs().includes(slug)) return null;
  const mod = await import(`@/content/lab/${slug}.mdx`);
  return { Content: mod.default, meta: mod.meta as LabMeta };
}

export async function getAllLabPosts(): Promise<LabPost[]> {
  const posts = await Promise.all(
    getLabSlugs().map(async (slug) => {
      const post = await getLabPost(slug);
      return post ? { slug, ...post.meta } : null;
    })
  );
  return posts
    .filter((post): post is LabPost => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-IE", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}