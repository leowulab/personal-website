import Link from "next/link";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./status-badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-border p-5 transition hover:border-foreground/40"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold group-hover:underline">{project.title}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-2 flex-1 text-sm text-muted">{project.summary}</p>
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
    </Link>
  );
}