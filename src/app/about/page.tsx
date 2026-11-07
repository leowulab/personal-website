import type { Metadata } from "next";
import {
  additional,
  education,
  experience,
  intro,
  skillGroups,
} from "@/data/cv";

export const metadata: Metadata = {
  title: "About & CV",
  description:
    "Background, experience, education, and skills of an AI and full-stack engineer.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mt-8 space-y-10 border-l border-border pl-6">{children}</ol>
  );
}

function TimelineDot() {
  return (
    <span className="absolute -left-[1.84rem] top-2 h-2.5 w-2.5 rounded-full bg-foreground" />
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-16">
      {/* Intro */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>
        {/* <div className="mt-8">
          <a
            href="/cv-en.pdf"
            download
            className="inline-block rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-80"
          >
            Download CV (PDF)
          </a>
        </div> */}
      </section>

      {/* Experience */}
<section>
  <SectionTitle>Experience</SectionTitle>
  <Timeline>
    {experience.map((item) => (
      <li key={`${item.company}-${item.period}`} className="relative">
        <TimelineDot />
        <p className="text-sm text-muted">{item.period}</p>
        <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
        <p className="text-muted">{item.company}</p>

        {item.projects.map((project) => (
          <div key={project.name} className="mt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h4 className="font-medium">
                {project.name}
                <span className="font-normal text-muted">
                  {" "}· {project.role}
                </span>
              </h4>
              <span className="text-sm text-muted">{project.period}</span>
            </div>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}

        {item.highlights && item.highlights.length > 0 && (
          <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </Timeline>
</section>

      {/* Education */}
      <section>
        <SectionTitle>Education</SectionTitle>
        <Timeline>
          {education.map((item) => (
            <li key={`${item.degree}-${item.period}`} className="relative">
              <TimelineDot />
              <p className="text-sm text-muted">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.degree}</h3>
              <p className="text-muted">
                {item.school ? `${item.school} · ` : ""}
                {item.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
                {item.links && item.links.length > 0 && (
                  <p className="mt-3 text-sm">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </p>
                )}
              </ul>
            </li>
          ))}
          
        </Timeline>
      </section>

      {/* Skills */}
      <section>
        <SectionTitle>Skills</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border p-4"
            >
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond code */}
      <section>
        <SectionTitle>Beyond code</SectionTitle>
        <p className="mt-4 text-muted">{additional}</p>
      </section>
    </div>
  );
}