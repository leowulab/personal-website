import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getAllLabPosts } from "@/lib/lab";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Notes on AI experiments, side projects, and the problems I ran into.",
};

export default async function LabPage() {
  const posts = await getAllLabPosts();

  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Lab</h1>
      <p className="mt-3 text-muted">
        Short notes on what I build and what breaks along the way.
      </p>

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/lab/${post.slug}`}
              className="group block py-6 transition"
            >
              <p className="text-sm text-muted">{formatDate(post.date)}</p>
              <h2 className="mt-1 text-xl font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-2 text-muted">{post.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}