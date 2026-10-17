import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Scale } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/contact";

export function SiteLayout({ children }: { children: ReactNode }) {
  const nav = [
    { to: "/", label: "Acasă" },
    { to: "/functionalitati", label: "Funcționalități" },
    { to: "/contact", label: "Contact" },
  ] as const;
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
            <Scale className="h-6 w-6 text-accent" /> Expert-Executare
          </Link>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            Solicită demo
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-ink-gradient text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg">Expert-Executare</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline-offset-4 transition hover:text-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          <p className="opacity-70">Software SaaS pentru birourile executorilor judecătorești. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
