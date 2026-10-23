const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 text-sm text-muted">
        <p>© {currentYear} Leo Wu</p>
        <div className="flex gap-4">
          <a href="https://github.com/leowulab" target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/wukuanting-leo" target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}