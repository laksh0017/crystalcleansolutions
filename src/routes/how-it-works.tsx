import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Boxes, FileText, Sparkles, CheckCircle2, Truck, Repeat, ArrowRight, Bot, Workflow,
} from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
  head: () => ({
    meta: [
      { title: "How procurement works on CRYSTAL — RFQ to recurring supply" },
      { name: "description", content: "Six-step procurement workflow on CRYSTAL: browse, RFQ, AI-assisted quotation, approval, scheduled delivery and recurring supply management." },
    ],
  }),
});

const steps = [
  { icon: Boxes, t: "Browse Products", d: "Use the smart catalog with category filters and B2B search to find exactly what your facility needs." },
  { icon: FileText, t: "Submit Requirement", d: "Drop items into your RFQ cart, add quantities, capture company, GSTIN and delivery address — once." },
  { icon: Sparkles, t: "Receive Quotation", d: "Our AI-assisted engine generates a structured, GST-compliant PDF quotation — typically within minutes." },
  { icon: CheckCircle2, t: "Approve Order", d: "Review, negotiate if needed, and approve. We issue the PO and trigger fulfilment automatically." },
  { icon: Truck, t: "Scheduled Delivery", d: "Hyderabad-wide dispatch with status tracking, proof-of-delivery and clean tax documentation." },
  { icon: Repeat, t: "Recurring Supply", d: "Convert any RFQ into a monthly subscription. CRYSTAL handles re-order intelligence and replenishment cycles." },
];

function HowItWorks() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// How it works</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            Procurement, end-to-end. <span className="text-gradient">In six steps.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            CRYSTAL replaces scattered ordering, quote chasing and invoice reconciliation
            with a single structured workflow your team can plan around.
          </p>
        </div>
      </section>

      {/* Step diagram */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <ol className="relative grid gap-6 md:gap-10">
          {steps.map((s, i) => (
            <li key={s.t} className="relative grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-[160px_1fr_auto] md:items-center md:p-8">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="font-mono text-3xl font-semibold text-muted-foreground/30">0{i + 1}</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{s.t}</h3>
                <p className="mt-2 max-w-xl text-muted-foreground">{s.d}</p>
              </div>
              <div className="hidden md:block">
                <div className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Step {i + 1} of {steps.length}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Inside the engine */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Inside the engine</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
                AI-assisted quotation generation.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Behind every quote is a workflow that combines pricing intelligence, vendor
                aggregation and operational checks — so what reaches you is structured, complete
                and ready to act on.
              </p>
              <ul className="mt-8 grid gap-3 text-sm">
                {[
                  "Real-time pricing across vendor pool",
                  "Auto-classification of categories and units",
                  "GST + freight calculations",
                  "PDF quotation with PO-ready format",
                  "CRM hand-off to your account manager",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Bot className="h-4 w-4 text-primary" /> Quotation Engine · Live trace
              </div>
              <div className="space-y-2 font-mono text-[12px]">
                {[
                  ["00:01", "request received · 4 line items"],
                  ["00:02", "vendor pool matched · 12 sources"],
                  ["00:05", "pricing resolved · GST applied"],
                  ["00:08", "freight + ETA calculated"],
                  ["00:10", "PDF quotation generated"],
                  ["00:11", "delivered to client · CRM synced"],
                ].map(([t, l]) => (
                  <div key={t} className="flex items-start gap-3 rounded-md bg-secondary/60 px-3 py-2">
                    <span className="text-primary">{t}</span>
                    <span className="text-foreground/80">{l}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-foreground p-4 text-background">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">Quotation</p>
                  <p className="text-sm font-semibold">CR-2087.pdf</p>
                </div>
                <Workflow className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-8">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Ready to run procurement on CRYSTAL?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="lg"><Link to="/products">Browse catalog</Link></Button>
          <Button asChild variant="soft" size="lg"><Link to="/contact">Schedule meeting <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>
    </>
  );
}
