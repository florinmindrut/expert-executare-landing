import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { features } from "@/lib/features";

export const Route = createFileRoute("/functionalitati")({
  head: () => ({
    meta: [
      { title: "Funcționalități — Expert-Executare" },
      { name: "description", content: "Documente automate pe faze, semnătură electronică, alerte termene, licitații, contabilitate, management dosare și integrare răspunsuri ANAF și DRPCIV." },
      { property: "og:title", content: "Funcționalități Expert-Executare" },
      { property: "og:description", content: "Funcționalități pentru biroul executorului judecătoresc, inclusiv centralizarea răspunsurilor ANAF și DRPCIV în dosarul de executare." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="bg-ink-gradient text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-bold md:text-5xl">Funcționalități</h1>
          <p className="mt-4 max-w-2xl opacity-80">O platformă completă pentru activitatea zilnică a biroului de executare.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="flex gap-5 rounded-lg border border-border bg-card p-6">
            <f.icon className="h-10 w-10 shrink-0 text-accent" />
            <div>
              <h2 className="text-2xl font-bold">{f.title}</h2>
              <p className="mt-2 text-muted-foreground">{f.text}</p>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
