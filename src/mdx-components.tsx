import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-12 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props) => <h3 className="mt-8 text-xl font-semibold" {...props} />,
  p: (props) => (
    <p className="mt-4 leading-relaxed text-foreground/90" {...props} />
  ),
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/90" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-foreground/90" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="underline underline-offset-4 transition hover:opacity-70"
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-border pl-4 text-muted"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-border/50 px-1.5 py-0.5 font-mono text-[0.9em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl border border-border bg-border/30 p-4 text-sm [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}