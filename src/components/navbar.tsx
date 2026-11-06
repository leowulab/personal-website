import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="leowulab home"
          className="font-mono text-lg font-bold tracking-tight"
        >
          leowu
          <span className="font-normal text-teal-700 dark:text-teal-300">lab</span>
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block h-[3px] w-2.5 bg-teal-700 align-baseline dark:bg-teal-300"
          />
        </Link>
        <div className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}