import type { ProjectStatus } from "@/data/projects";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const dot = status === "Completed" ? "bg-emerald-500" : "bg-amber-500";

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  );
}