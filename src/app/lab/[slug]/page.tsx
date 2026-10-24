import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatDate, getLabPost, getLabSlugs } from "@/lib/lab";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return getLabSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getLabPost(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.description };
}

export default async function LabPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getLabPost(slug);
  if (!post) notFound();

  const { Content, meta } = post;

  return (
    <article className="max-w-3xl">
      <Link
        href="/lab"
        className="text-sm text-muted transition hover:text-foreground"
      >
        ← All notes
      </Link>

      <header className="mt-6">
        <p className="text-sm text-muted">{formatDate(meta.date)}</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight">
          {meta.title}
        </h1>
        <ul className="mt-4 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-8">
        <Content />
      </div>
    </article>
  );
}