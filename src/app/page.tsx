import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

const focusAreas = ["AI Engineering", "AIoT", "Full-stack with AI"];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-8">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          I build AI-powered products that connect software, devices, and
          people.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Engineer with 6 years of app development experience and an MSc in AI.
          I write about what I build and what breaks along the way.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border px-3 py-1 text-sm"
            >
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-80"
          >
            View Projects
          </Link>
          <a
            href="/cv-en.pdf"
            download
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-border/50"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-muted transition hover:text-foreground"
          >
            See all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}