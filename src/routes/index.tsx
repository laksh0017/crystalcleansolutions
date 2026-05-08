import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP, MAPS_URL } from "@/lib/site";
import {
  ArrowRight, ArrowUpRight, Sparkles, Zap, Workflow, ShieldCheck, Repeat,
  Boxes, Truck, FileText, Phone, MessageCircle, MapPin, Mail, Bot,
  LineChart, Layers, Building2, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "CRYSTAL — Procurement. Simplified. | B2B Supply Hyderabad" },
      { name: "description", content: "Streamline recurring procurement of cleaning, housekeeping, stationery and facility supplies. AI-assisted quotations, reliable delivery, GST-compliant — Hyderabad." },
    ],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Capabilities />
      <RFQShowcase />
      <CategoriesPreview />
      <WorkflowSection />
      <IndustriesPreview />
      <AIAutomation />
      <Logistics />
      <TrustBand />
      <FinalCTA />
    </>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[600px]" style={{ background: "var(--gradient-glow)", opacity: 0.4 }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-8 md:pt-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Procurement infrastructure · Now operating in Hyderabad
          </div>
          <h1 className="text-balance text-6xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-8xl">
            Procurement.
            <br />
            <span className="text-gradient">Simplified.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            CRYSTAL helps businesses streamline recurring procurement for cleaning, housekeeping,
            stationery and facility supplies through fast quotations, reliable delivery,
            and technology-driven workflows.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Request Quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="soft" size="lg">
              <Link to="/contact">Schedule Meeting</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["AI-assisted quotations", "GST-compliant billing", "Recurring supply", "Hyderabad operations"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />{t}
              </span>
            ))}
          </div>
        </div>

        {/* Hero visual: procurement dashboard mock */}
        <div className="relative mx-auto mt-16 max-w-5xl animate-fade-up [animation-delay:120ms]">
          <div aria-hidden className="absolute -inset-10 -z-10 rounded-[3rem] bg-[image:var(--gradient-primary)] opacity-25 blur-3xl" />
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        </div>
        <div className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          crystal / procurement console
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> live
        </div>
      </div>
      <div className="grid gap-4 p-5 md:grid-cols-[1.4fr_1fr] md:p-6">
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Active RFQ · #CR-2087</p>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">Auto-quoting</span>
            </div>
            <div className="space-y-2.5">
              {[
                ["Floor Cleaner Concentrate · 5L", "12 cans", "ready"],
                ["M-Fold Hand Towels · 2-ply", "40 bundles", "ready"],
                ["A4 Copier Paper · 75 GSM", "20 reams", "sourcing"],
                ["Black Garbage Bag · L", "30 rolls", "ready"],
              ].map(([n, q, s]) => (
                <div key={n} className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2">
                  <div className="text-sm">{n}</div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-muted-foreground">{q}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${s === "ready" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-amber-500/10 text-amber-600"}`}>{s}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div className="text-sm">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Quote ETA</p>
                <p className="mt-0.5 font-medium">~ 12 minutes</p>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background">
                Generate PDF <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <StatCard label="On-time delivery" value="99.2%" trend="+0.4" />
          <StatCard label="Reorder cycle" value="14d" trend="-2d" />
          <div className="rounded-xl border border-border bg-[image:var(--gradient-ink)] p-5 text-white">
            <div className="mb-2 flex items-center gap-2 text-xs text-white/60">
              <Bot className="h-3.5 w-3.5" /> AI Procurement Insight
            </div>
            <p className="text-sm leading-relaxed">
              Pantry consumables are trending <span className="text-primary">+18%</span> this month.
              Suggested: increase next cycle by 2 cases.
            </p>
            <button className="mt-3 inline-flex items-center gap-1 text-xs text-white/80 hover:text-white">
              Apply suggestion <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight">{value}</span>
        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{trend}</span>
      </div>
    </div>
  );
}

/* ------------------------- Logo strip ------------------------- */
function LogoStrip() {
  const items = ["IT Parks", "Hospitals", "Hotels", "Coworking", "Apartments", "Manufacturing", "Schools", "SMEs"];
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Built for procurement teams across
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-foreground/60">
          {items.map((i) => <span key={i}>{i}</span>)}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Capabilities ------------------------- */
const capabilities = [
  { icon: Zap, title: "Quotes in minutes", desc: "AI-assisted pricing turns enquiries into structured proposals — fast." },
  { icon: Repeat, title: "Recurring supply", desc: "Auto-replenishment for monthly facility consumables, on a schedule." },
  { icon: Workflow, title: "Procurement workflows", desc: "Approvals, RFQs and invoices in one calm operating layer." },
  { icon: ShieldCheck, title: "GST-compliant", desc: "Proper tax invoices, e-way bills and clean accounting trails." },
  { icon: Truck, title: "Reliable logistics", desc: "Scheduled delivery across Hyderabad with vendor aggregation." },
  { icon: LineChart, title: "Procurement intelligence", desc: "Spend insights, reorder reminders and category benchmarking." },
];
function Capabilities() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-8">
      <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Platform</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            One operating layer for <span className="text-gradient">facility procurement.</span>
          </h2>
        </div>
        <p className="text-muted-foreground md:text-lg">
          Replace scattered vendors, WhatsApp ordering and lost invoices with a single
          structured workflow — built for procurement managers, finance teams and admins.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group bg-card p-7 transition hover:bg-secondary/50">
            <div className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-foreground text-background transition group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------- RFQ showcase ------------------------- */
function RFQShowcase() {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-ink)] text-white">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
      <div aria-hidden className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// RFQ Engine</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              From requirement to quotation —{" "}
              <span className="text-gradient">in minutes, not days.</span>
            </h2>
            <p className="mt-5 max-w-lg text-white/70">
              Browse the catalog, drop items into your RFQ cart, and submit. Our engine
              generates a structured, GST-compliant quotation — with PDF export and instant
              hand-off to the supply team.
            </p>
            <ul className="mt-8 grid gap-3 text-sm">
              {[
                "Smart catalog with B2B-grade search",
                "RFQ cart for multi-item enquiries",
                "AI-assisted pricing & PDF quotation",
                "Account, address & GSTIN captured once",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />{t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/products">Browse catalog <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20">
                <Link to="/how-it-works">See workflow</Link>
              </Button>
            </div>
          </div>
          <RFQVisual />
        </div>
      </div>
    </section>
  );
}

function RFQVisual() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">RFQ Cart · 4 items</p>
          <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] text-primary">Draft</span>
        </div>
        <div className="space-y-2">
          {[
            ["Floor Cleaner · 5L", "Cleaning", 12],
            ["M-Fold Hand Towels", "Tissue", 40],
            ["A4 Copier Paper · 75 GSM", "Stationery", 20],
            ["Black Garbage Bag · L", "Garbage", 30],
          ].map(([n, c, q]) => (
            <div key={n as string} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
              <div>
                <p className="text-sm">{n}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">{c}</p>
              </div>
              <span className="font-mono text-xs text-white/70">{q} units</span>
            </div>
          ))}
        </div>
        <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]">
          Get Quote in Minutes <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="absolute -bottom-8 -right-6 hidden w-64 rounded-xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md md:block animate-float">
        <div className="flex items-center gap-2 text-xs text-white/60"><Bot className="h-3.5 w-3.5 text-primary" /> AI Quotation Engine</div>
        <p className="mt-2 text-sm">Quotation <span className="font-mono text-primary">#CR-2087</span> generated in <span className="text-primary">11s</span></p>
      </div>
    </div>
  );
}

/* ------------------------- Categories preview ------------------------- */
const categories = [
  { name: "Cleaning Chemicals", desc: "Floor, glass, washroom & disinfectant range." },
  { name: "Housekeeping Tools", desc: "Mops, brushes, cloths and equipment." },
  { name: "Garbage Bags", desc: "All sizes, biomedical & biodegradable." },
  { name: "Tissue Products", desc: "M-fold, toilet, jumbo and facial tissue." },
  { name: "Washroom Supplies", desc: "Dispensers, fresheners, consumables." },
  { name: "Office Stationery", desc: "Paper, pens, files and daily essentials." },
  { name: "Pantry Supplies", desc: "Tea, coffee, water, paper cups." },
  { name: "Packaging Materials", desc: "Tape, cartons, bubble wrap, stretch film." },
  { name: "Safety Products", desc: "PPE, gloves, masks, first-aid." },
];
function CategoriesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Catalog</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Nine categories. <br className="hidden md:block" />
            <span className="text-gradient">One supplier.</span>
          </h2>
        </div>
        <Button asChild variant="soft" size="lg">
          <Link to="/products">Open catalog <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <Link
            key={c.name}
            to="/products"
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
            <h3 className="mt-3 text-xl font-semibold">{c.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ------------------------- Workflow ------------------------- */
function WorkflowSection() {
  const steps = [
    { icon: Boxes, t: "Browse Products", d: "Use the smart catalog with category filters." },
    { icon: FileText, t: "Submit Requirement", d: "Add to RFQ cart with quantities & address." },
    { icon: Sparkles, t: "Receive Quotation", d: "AI-assisted, GST-compliant, PDF-ready." },
    { icon: CheckCircle2, t: "Approve Order", d: "One-click confirmation with PO number." },
    { icon: Truck, t: "Scheduled Delivery", d: "Hyderabad-wide, on-time dispatch." },
    { icon: Repeat, t: "Recurring Supply", d: "Auto-replenishment with reorder intelligence." },
  ];
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Workflow</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            How procurement works on CRYSTAL.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <div key={s.t} className="bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <s.icon className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-sm font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="ink" size="lg"><Link to="/how-it-works">See full workflow <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Industries preview ------------------------- */
function IndustriesPreview() {
  const items = ["IT Companies", "Hospitals", "Clinics", "Hotels", "Coworking Spaces", "Apartments", "Educational Institutions", "SMEs", "Manufacturing Units"];
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-8">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Industries</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Built for the way your operations run.
          </h2>
          <p className="mt-5 text-muted-foreground">
            We map procurement workflows to your business — not the other way around.
          </p>
          <Button asChild variant="soft" size="lg" className="mt-7">
            <Link to="/industries">Explore industries <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((i) => (
            <div key={i} className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition hover:border-primary/40">
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="font-medium">{i}</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- AI / Automation ------------------------- */
function AIAutomation() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-10" />
      <div aria-hidden className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/40 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// AI + Automation</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">
            A future-ready procurement engine.
          </h2>
          <p className="mt-5 text-base text-background/70 md:text-lg">
            CRYSTAL learns your consumption patterns, optimises reorder cycles, and automates
            the repetitive layer of facility procurement — so your team can focus on what matters.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Bot, t: "AI Quotation Engine", d: "Instant pricing across 9 categories with structured PDF outputs." },
            { icon: LineChart, t: "Procurement Intelligence", d: "Spend dashboards, reorder reminders, category trends." },
            { icon: Workflow, t: "Automated Workflows", d: "RFQ → approval → dispatch → invoice — orchestrated end-to-end." },
            { icon: Repeat, t: "Recurring Supply", d: "Subscriptions for monthly consumables with auto-replenishment." },
            { icon: Layers, t: "Vendor Aggregation", d: "One vendor relationship, full-stack supplier coverage." },
            { icon: Sparkles, t: "Smart Recommendations", d: "Inventory optimisation tuned to your business size." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:border-primary/40">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-primary/20 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Logistics ------------------------- */
function Logistics() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-8">
      <div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            {[
              { t: "Hyderabad-wide", d: "Same-day & next-day across the city." },
              { t: "Vendor aggregated", d: "Multi-supplier, single dispatch." },
              { t: "Scheduled cycles", d: "Monthly, fortnightly or weekly." },
              { t: "Status tracking", d: "Order, dispatch and POD updates." },
              { t: "Bulk handling", d: "Pallet-grade logistics on demand." },
              { t: "Future: same-day", d: "Express network in build-out." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs font-semibold">{x.t}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Logistics</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Procurement infrastructure, on the ground.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Behind the platform sits a real logistics network — purpose-built for B2B
            facility supply. Reliable dispatch, predictable cycles, and operational
            consistency your team can plan around.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Trust ------------------------- */
function TrustBand() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-4 md:px-8">
        {[
          { icon: ShieldCheck, t: "GST-compliant", d: `GSTIN ${SITE.gstin}` },
          { icon: MapPin, t: "Hyderabad operations", d: "Secunderabad HQ, city-wide delivery" },
          { icon: MessageCircle, t: "WhatsApp support", d: "Direct line to procurement team" },
          { icon: Phone, t: "Business hotline", d: SITE.phone },
        ].map((x) => (
          <div key={x.t} className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-card text-primary border border-border">
              <x.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold">{x.t}</p>
              <p className="text-xs text-muted-foreground">{x.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------- Final CTA ------------------------- */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-ink)] p-12 text-white md:p-20">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-15" />
        <div aria-hidden className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-primary/40 blur-[140px]" />
        <div className="relative max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Get started</p>
          <h2 className="mt-3 text-balance text-5xl font-semibold leading-[1.05] md:text-7xl">
            Move your procurement onto <span className="text-gradient">CRYSTAL.</span>
          </h2>
          <p className="mt-6 max-w-xl text-white/70 md:text-lg">
            Send us your requirement once. We'll respond with a structured quotation within
            the hour — and onboard your team to recurring supply if it's a fit.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl"><Link to="/contact">Request Quote <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild size="xl" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20">
              <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
            <a href={`tel:+${SITE.phoneRaw}`} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-primary" /> {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4 text-primary" /> {SITE.email}</a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><MapPin className="h-4 w-4 text-primary" /> {SITE.city}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
