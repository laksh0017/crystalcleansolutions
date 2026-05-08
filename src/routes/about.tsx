import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Workflow, ShieldCheck, Layers } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About CRYSTAL — Procurement infrastructure for modern businesses" },
      { name: "description", content: "CRYSTAL is building a tech-enabled B2B procurement platform — starting with cleaning, housekeeping, stationery and facility supplies in Hyderabad." },
    ],
  }),
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// About</p>
          <h1 className="mt-3 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] md:text-7xl">
            We're building procurement <span className="text-gradient">infrastructure</span> for modern businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            CRYSTAL is a tech-enabled B2B procurement platform. We start with cleaning,
            housekeeping, stationery and facility supplies — and scale into a full
            procurement operating system for the businesses we serve.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Vision</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight">A procurement OS for every business.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground md:text-lg">
            <p>
              Every growing business spends on facility supplies — yet the workflow remains
              broken: scattered vendors, manual quotes, lost invoices, and admins doing
              procurement on top of their day jobs.
            </p>
            <p>
              CRYSTAL replaces that with a calm, structured operating layer. RFQs become
              instant. Recurring supply runs on schedule. Invoices reconcile cleanly. Spend
              becomes visible and intelligent.
            </p>
            <p>
              We're starting in Hyderabad, with the most consumed categories. The roadmap
              extends to vendor portals, customer dashboards, AI procurement agents and
              full-spectrum logistics intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Principles</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
            How we build.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Workflow, t: "Systems over heroics", d: "Reliability is a function of process, not effort." },
              { icon: Sparkles, t: "Speed by default", d: "Every interaction should feel instant and frictionless." },
              { icon: ShieldCheck, t: "Trust as infrastructure", d: "Compliance, documentation and consistency, always." },
              { icon: Layers, t: "Scale from day one", d: "Built to operate across thousands of businesses." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-card p-7">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-foreground text-background">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Roadmap</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Where we're headed.
            </h2>
            <p className="mt-5 text-muted-foreground">
              CRYSTAL is being built with a long horizon. Today's product is the foundation;
              tomorrow's is a complete procurement intelligence platform.
            </p>
          </div>
          <ol className="relative space-y-4 border-l border-border pl-6">
            {[
              ["Now", "Tech-enabled supply across 9 categories in Hyderabad."],
              ["Next", "Customer dashboards · subscriptions · re-order intelligence."],
              ["Then", "AI procurement agents · vendor portals · spend analytics."],
              ["Future", "Full-stack procurement OS for businesses across India."],
            ].map(([t, d]) => (
              <li key={t} className="relative">
                <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-[image:var(--gradient-primary)] ring-4 ring-background" />
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{t}</p>
                <p className="mt-1 text-base font-medium">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-8">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Build procurement with <span className="text-gradient">CRYSTAL.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Talk to us <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild variant="soft" size="lg"><Link to="/products">Browse catalog</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
