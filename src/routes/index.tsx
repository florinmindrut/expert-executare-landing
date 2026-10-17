import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { features } from "@/lib/features";
import { CONTACT_EMAIL } from "@/lib/contact";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Expert-Executare — Software SaaS pentru executori judecătorești" },
      { name: "description", content: "Documente automate pe faze, semnătură electronică, alerte termene, licitații, contabilitate și integrare răspunsuri ANAF și DRPCIV pentru executori judecătorești." },
      { property: "og:title", content: "Expert-Executare — Software pentru executori judecătorești" },
      { property: "og:description", content: "Documente automate, semnătură electronică, termene, licitații, contabilitate și răspunsuri ANAF și DRPCIV într-o singură platformă." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const phases = ["Înregistrare & încuviințare", "Somație & comunicări", "Popriri & sechestre", "Licitație & adjudecare", "Distribuire & închidere"];

function Index() {
  return (
    <SiteLayout>
      <section className="bg-ink-gradient text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Software SaaS pentru executori judecătorești</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Executarea silită, <span className="text-accent">automatizată</span> de la primul act la ultimul.
            </h1>
            <p className="mt-6 max-w-lg text-lg opacity-80">
              Expert-Executare generează automat toate documentele pe faze, le semnează electronic, urmărește termenele și ține licitațiile și contabilitatea biroului în ordine.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-gold transition hover:-translate-y-0.5">
                Solicită o demonstrație <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/functionalitati" className="rounded-md border border-ink-foreground/30 px-6 py-3 font-semibold transition hover:bg-ink-foreground/10">
                Vezi funcționalitățile
              </Link>
            </div>
          </div>
          <img src={hero} alt="Platforma Expert-Executare pe laptop" width={1600} height={1008} className="rounded-xl border border-accent/30 shadow-gold" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Tot dosarul, fază cu fază</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Aplicația știe ce act urmează și îl pregătește pentru dumneavoastră.</p>
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {phases.map((p, i) => (
            <li key={p} className="rounded-lg border border-border bg-card p-5">
              <span className="font-display text-3xl font-bold text-accent">0{i + 1}</span>
              <p className="mt-2 font-medium">{p}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Ce face Expert-Executare</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 7).map((f) => (
              <div key={f.title} className="rounded-lg bg-card p-6 transition hover:shadow-gold">
                <f.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <h2 className="text-3xl font-bold md:text-4xl">Mai puțin timp pe hârtii. Mai mult pe dosare.</h2>
        <ul className="space-y-4">
          {["Fără redactare manuală a actelor repetitive", "Niciun termen ratat datorită alertelor automate", "Semnare electronică în lot, fără tipărire", "Evidență contabilă clară a sumelor recuperate"].map((b) => (
            <li key={b} className="flex gap-3"><CheckCircle2 className="h-6 w-6 shrink-0 text-accent" /><span className="text-lg">{b}</span></li>
          ))}
        </ul>
      </section>

      <section className="bg-ink-gradient text-ink-foreground">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Vedeți platforma în acțiune</h2>
          <p className="mt-3 opacity-80">Programați o demonstrație gratuită pentru biroul dumneavoastră.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-gold">
            Solicită demo <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-6 text-sm opacity-70">
            Sau scrieți-ne pe{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-accent underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
