import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Solicită demo — Expert-Executare" },
      { name: "description", content: "Programați o demonstrație gratuită a platformei Expert-Executare pentru biroul dumneavoastră." },
      { property: "og:title", content: "Contact Expert-Executare" },
      { property: "og:description", content: "Solicitați o demonstrație gratuită a platformei." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold md:text-5xl">Solicită o demonstrație</h1>
          <p className="mt-4 text-lg text-muted-foreground">Vă arătăm cum Expert-Executare poate prelua munca repetitivă din biroul dumneavoastră.</p>
          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Scrieți-ne direct</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 inline-flex items-center gap-2 text-xl font-semibold text-primary underline-offset-4 hover:underline">
              <Mail className="h-5 w-5 text-accent" /> {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Răspundem de obicei în aceeași zi lucrătoare.</p>
          </div>
        </div>
        {sent ? (
          <div className="rounded-lg border border-accent bg-card p-8">
            <h2 className="text-2xl font-bold">Mulțumim!</h2>
            <p className="mt-2 text-muted-foreground">Vă vom contacta în curând.</p>
          </div>
        ) : (
          <form className="space-y-4 rounded-lg border border-border bg-card p-8" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Nume și prenume" className={input} />
            <input placeholder="Biroul executorului judecătoresc" className={input} />
            <input required type="email" placeholder="Email" className={input} />
            <input placeholder="Telefon" className={input} />
            <textarea rows={4} placeholder="Mesaj" className={input} />
            <button className="w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90">Trimite solicitarea</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
