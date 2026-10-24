import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { StatusBadge } from "@/components/status-badge";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export const instant = false;
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="max-w-3xl">
      <Link
        href="/projects"
        className="text-sm text-muted transition hover:text-foreground"
      >
        ← All projects
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-3 text-lg text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold">The problem</h2>
          <p className="mt-3 text-muted">{project.problem}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Approach</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {project.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Challenges</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="rounded-xl border border-border p-4"
              >
                <h3 className="font-medium">{challenge.title}</h3>
                <p className="mt-2 text-sm text-muted">{challenge.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {project.note && (
          <p className="rounded-xl border border-border p-4 text-sm text-muted">
            {project.note}
          </p>
        )}

        {project.links.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold">Links</h2>
            <ul className="mt-3 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-border px-4 py-2 text-sm transition hover:bg-border/50"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}