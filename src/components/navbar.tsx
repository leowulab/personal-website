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
        <Link href="/" className="font-semibold tracking-tight">
          leowulab
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