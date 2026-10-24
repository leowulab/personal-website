import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI agents across enterprise tools, games, and edge devices.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Tool-using AI agents across three domains: enterprise software, game
        engines, and edge devices.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}