import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP, MAPS_URL } from "@/lib/site";
import {
  ArrowRight, ShieldCheck, Truck, MessageCircle, FileText, CheckCircle2,
  Sparkles, Repeat, Building2, Cpu, Stethoscope, Hotel, Users, GraduationCap,
  Briefcase, Factory, Phone, Mail, MapPin, Send, Layers, Workflow, Clock,
  ReceiptText, BadgeCheck, ChevronDown, Droplets, SprayCan, Coffee, Wind,
  Trash2, PackageOpen, Wrench, Wifi,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Crystal Clean Solutions — Workplace Hygiene Procurement, Hyderabad" },
      { name: "description", content: "Reliable B2B workplace hygiene procurement for IT offices and corporates in Hyderabad. Washroom consumables, cleaning chemicals, pantry supplies & recurring procurement — one trusted partner." },
      { name: "keywords", content: "Housekeeping Material Supplier Hyderabad, Cleaning Chemicals Supplier Hyderabad, B2B Cleaning Products Hyderabad, Office Hygiene Procurement Hyderabad, Corporate Cleaning Supplier Hyderabad, Commercial Hygiene Products Hyderabad" },
      { property: "og:title", content: "Crystal Clean Solutions — Workplace Hygiene Procurement, Hyderabad" },
      { property: "og:description", content: "Single trusted procurement partner for workplace hygiene, washroom consumables, cleaning chemicals and pantry supplies across Hyderabad." },
    ],
    links: [{ rel: "canonical", href: "https://crystalcleansolutions.lovable.app/" }],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionsSection />
      <IndustriesSection />
      <BrandsSection />
      <WhySection />
      <HowItWorksSection />
      <RecurringSection />
      <QuotationFormSection />
      <FAQSection />
      <ContactSection />
      <div aria-hidden className="h-16 sm:hidden" />
    </>
  );
}

/* =============================================================
   · TRUSTED BRANDS
============================================================= */
const BRANDS = [
  "Diversey / Taski", "Odonil", "Godrej", "Dabur",
  "Gala", "Kosher", "3M", "Gamisoft", "Premier", "Rink Clean",
];
function BrandsSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Trusted brands</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Quality products from brands you trust.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            We supply quality-assured products from leading hygiene and housekeeping brands.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 md:grid-cols-5">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="flex h-20 items-center justify-center bg-card px-4 text-center text-sm font-semibold tracking-tight text-foreground/80 transition hover:bg-secondary/60"
            >
              {b}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Product availability may vary based on customer requirements.
        </p>
      </div>
    </section>
  );
}

/* =============================================================
   1 · HERO
============================================================= */
function Hero() {
  const badges = [
    "Fast Quotations", "Reliable Supply", "GST Billing", "Professional Support",
  ];
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[520px]" style={{ background: "var(--gradient-glow)" }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 md:px-8 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pb-28">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-[11px] text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            B2B Workplace Hygiene Procurement · Hyderabad
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
            Workplace Hygiene Procurement —{" "}
            <span className="text-gradient">Simplified.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Reliable supply of workplace hygiene products, cleaning chemicals, washroom
            essentials, janitorial tools and office consumables for businesses across
            Hyderabad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Get Quotation <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4 text-emerald-600" /> Talk on WhatsApp
              </a>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-muted-foreground">
            {badges.map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-fade-up [animation-delay:140ms]">
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
        <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-5 py-3 text-[11px]">
          <div className="flex items-center gap-2 font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Procurement Snapshot
          </div>
          <span className="font-mono text-muted-foreground">CCS / Hyderabad</span>
        </div>
        <div className="grid gap-4 p-5 md:p-6">
          <div className="grid grid-cols-3 gap-3">
            {[
              { l: "On-time delivery", v: "99.1%" },
              { l: "Avg. quote time", v: "< 60 min" },
              { l: "Recurring clients", v: "120+" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-background px-3 py-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
                <p className="mt-1 text-lg font-semibold tracking-tight">{s.v}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-background p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Monthly Supply · IT Office, Hitech City</p>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">Scheduled</span>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                ["Washroom Tissue · 2-ply", "40 bundles"],
                ["Floor Cleaner · 5L", "12 cans"],
                ["Hand Wash Refill · 5L", "8 cans"],
                ["Garbage Bag · L", "30 rolls"],
              ].map(([n, q]) => (
                <li key={n} className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2">
                  <span>{n}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{q}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-primary" /> Dispatched · 2nd of every month</span>
              <span className="inline-flex items-center gap-1.5"><ReceiptText className="h-3.5 w-3.5 text-primary" /> GST invoice</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   2 · TRUST STRIP
============================================================= */
function TrustStrip() {
  const items = [
    { icon: ReceiptText, t: "Professional GST Billing" },
    { icon: Layers, t: "Reliable Vendor Network" },
    { icon: Truck, t: "Timely Deliveries" },
    { icon: MessageCircle, t: "Prompt Communication" },
    { icon: BadgeCheck, t: "Quality Assured Products" },
    { icon: Repeat, t: "Recurring Procurement" },
  ];
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Trust</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            A trusted workplace procurement partner.
          </h2>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-medium">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   3 · PROBLEM
============================================================= */
function ProblemSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// The problem</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Too many vendors. Too much procurement headache.
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Most offices juggle multiple suppliers for washroom consumables, cleaning
            chemicals, pantry materials and housekeeping items. The result: scattered
            invoices, inconsistent quality and constant follow-ups.
          </p>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Crystal replaces that with{" "}
            <span className="font-medium text-foreground">one professional procurement partner</span>{" "}
            for everything your workplace needs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-destructive/80">Before Crystal</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {[
                "5–8 vendors to coordinate",
                "Quotes via random phone calls",
                "Inconsistent product quality",
                "Mixed billing & GST issues",
                "Manual follow-up every week",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/60" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-[image:var(--gradient-primary)] p-6 text-white shadow-[var(--shadow-elegant)]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/70">With Crystal</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                "One procurement partner",
                "Quotation within the hour",
                "Quality-assured products",
                "Single GST invoice",
                "Recurring monthly supply",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-white" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   4 · SOLUTIONS / WHAT WE PROVIDE
============================================================= */
const SOLUTION_CATEGORIES = [
  { icon: Wind, name: "Washroom Essentials", d: "Hand wash, soaps, sanitizers and washroom hygiene consumables." },
  { icon: FileText, name: "Tissue Solutions", d: "Toilet rolls, multifold, M-fold, C-fold and kitchen tissues." },
  { icon: Droplets, name: "Cleaning Chemicals", d: "Floor cleaners, disinfectants, glass cleaners — Taski, Diversey, Rink." },
  { icon: Trash2, name: "Garbage Bags & Waste", d: "Biodegradable garbage bags, color-coded waste bags for offices and hospitals." },
  { icon: Wrench, name: "Janitorial Tools & Aids", d: "Mops, brooms, brushes, buckets, gloves and housekeeping carts." },
  { icon: PackageOpen, name: "Dispensers & Accessories", d: "Soap, sanitizer, tissue and toilet roll dispensers — wall-mounted units." },
  { icon: Sparkles, name: "Air Fresheners & Hygiene", d: "Odonil, room fresheners, urinal blocks and washroom fragrance solutions." },
  { icon: SprayCan, name: "Cleaning Equipment", d: "Vacuum cleaners, scrubbers, wet & dry equipment for facility cleaning." },
];
function SolutionsSection() {
  return (
    <section id="solutions" className="scroll-mt-24 border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Solutions</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Everything your workplace needs —{" "}
              <span className="text-gradient">on one invoice.</span>
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            Organised by workplace function, not by random product list. Scalable to add new
            categories as your business grows.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SOLUTION_CATEGORIES.map(({ icon: Icon, name, d }) => (
            <div
              key={name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background transition group-hover:bg-[image:var(--gradient-primary)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold leading-snug">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary transition group-hover:gap-2"
              >
                Request Quote <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 md:p-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Layers className="h-4 w-4 text-primary" />
            More categories added monthly. Need a custom requirement list?
          </div>
          <Button asChild variant="hero" size="sm" className="rounded-full">
            <Link to="/contact">Request Custom Quotation <ArrowRight className="h-3.5 w-3.5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   5 · INDUSTRIES
============================================================= */
const INDUSTRY_LIST = [
  { icon: Cpu, name: "IT Offices", note: "Reliable recurring workplace hygiene procurement for growing office environments." },
  { icon: Building2, name: "Corporate Offices", note: "Dependable procurement support for workplace consumables and facility needs." },
  { icon: Users, name: "Co-working Spaces", note: "Consistent workplace hygiene and consumable supply for shared workspaces." },
  { icon: Stethoscope, name: "Hospitals", note: "Professional hygiene procurement support with priority dispatch." },
  { icon: Stethoscope, name: "Clinics", note: "Compact recurring hygiene kits tailored for clinic operations." },
  { icon: GraduationCap, name: "Institutions", note: "Term-cycle workplace consumables procurement with full GST documentation." },
  { icon: Hotel, name: "Commercial Facilities", note: "Bulk facility supply with scheduled, predictable dispatch." },
  { icon: Briefcase, name: "SMEs", note: "WhatsApp-first procurement support for lean teams." },
  { icon: Factory, name: "Manufacturing Units", note: "Industrial chemicals and facility consumables at scale." },
];
function IndustriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Industries</p>
        <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
          Built for how your operations run.
        </h2>
        <p className="mt-5 text-muted-foreground md:text-lg">
          Crystal supports recurring procurement across the workplace clusters of Hyderabad —
          {" "}{SITE.clusters.slice(0, 4).join(", ")}, and beyond.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRY_LIST.map(({ icon: Icon, name, note }) => (
          <div
            key={name}
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-foreground transition group-hover:bg-[image:var(--gradient-primary)] group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold">{name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-2">
        {SITE.clusters.map((c) => (
          <span key={c} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

/* =============================================================
   6 · WHY CHOOSE CRYSTAL
============================================================= */
const REASONS = [
  { icon: Truck, t: "Reliable Deliveries", d: "Never worry about recurring workplace hygiene procurement." },
  { icon: Clock, t: "Fast Quotation Turnaround", d: "Prompt quotations and responsive procurement support." },
  { icon: BadgeCheck, t: "Quality Assured Products", d: "Reliable workplace consumables and trusted brands." },
  { icon: Layers, t: "One Procurement Partner", d: "Reduce vendor clutter and simplify recurring procurement." },
  { icon: MessageCircle, t: "Professional Communication", d: "Responsive support and clear coordination." },
  { icon: ReceiptText, t: "GST-Compliant Billing", d: "Professional business invoicing for finance teams." },
  { icon: Repeat, t: "Monthly Recurring Support", d: "Designed for recurring workplace procurement needs." },
  { icon: MapPin, t: "Hyderabad-wide Service", d: "Fast supply across all major business districts." },
];
function WhySection() {
  return (
    <section id="why" className="scroll-mt-24 relative overflow-hidden border-y border-white/10 bg-[image:var(--gradient-ink)] text-white">
      <div aria-hidden className="absolute inset-0 -z-0 bg-grid opacity-15" />
      <div aria-hidden className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-primary/40 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary-glow">// Why Crystal</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Why businesses choose Crystal Clean Solutions
          </h2>
          <p className="mt-5 text-white/70 md:text-lg">
            Built for organisations that want their workplace procurement to feel
            organised, predictable and professional — not chaotic.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-[oklch(0.16_0.05_252)] p-7 transition hover:bg-[oklch(0.2_0.06_252)]">
              <div className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-primary-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   7 · HOW IT WORKS
============================================================= */
const STEPS = [
  { icon: FileText, t: "Share Requirement", d: "Upload list or share your requirement on WhatsApp." },
  { icon: Sparkles, t: "Receive Fast Quotation", d: "Quick response with competitive, GST-compliant pricing." },
  { icon: CheckCircle2, t: "Approve Procurement", d: "Simple confirmation process — we issue the PO." },
  { icon: Truck, t: "Timely Delivery", d: "Reliable delivery to your office location." },
  { icon: Repeat, t: "Recurring Monthly Support", d: "Repeat procurement made effortless every cycle." },
];
function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Process</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Simple workplace procurement workflow.
          </h2>
        </div>
        <p className="text-muted-foreground md:text-lg">
          Five clean steps from requirement to recurring supply — designed for admin,
          procurement and facility teams.
        </p>
      </div>

      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <li key={s.t} className="bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]">
                <s.icon className="h-4 w-4" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="text-sm font-semibold">{s.t}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* =============================================================
   8 · MONTHLY / RECURRING PROCUREMENT
============================================================= */
function RecurringSection() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:items-center md:px-8 md:py-28">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Recurring procurement</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Recurring workplace procurement, made easy.
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Crystal Clean Solutions helps businesses simplify monthly procurement of
            workplace hygiene materials through dependable supply, professional support,
            and prompt response.
          </p>
          <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
            {[
              "Locked monthly schedule",
              "Single GST invoice",
              "Dedicated account contact",
              "Easy quantity adjustments",
              "Same-day reorder support",
              "Priority dispatch",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Set Up Monthly Supply <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] md:p-8">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Sample Monthly Schedule</p>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Active</span>
          </div>
          <div className="mt-5 space-y-3">
            {[
              { d: "Week 1", l: "Washroom consumables · Cleaning chemicals" },
              { d: "Week 2", l: "Pantry supplies · Tissues" },
              { d: "Week 3", l: "Mid-month top-up dispatch" },
              { d: "Week 4", l: "Reorder confirmation for next cycle" },
            ].map((r) => (
              <div key={r.d} className="grid grid-cols-[80px_1fr] items-start gap-3 rounded-xl bg-secondary/50 p-3">
                <span className="font-mono text-xs font-medium text-primary">{r.d}</span>
                <span className="text-sm text-foreground/85">{r.l}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
            {[
              { l: "Cycle", v: "Monthly" },
              { l: "Invoice", v: "Single GST" },
              { l: "Support", v: "WhatsApp" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
                <p className="mt-1 text-sm font-semibold">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   9 · QUOTATION FORM
============================================================= */
const quoteSchema = z.object({
  company: z.string().trim().min(2, "Company name required").max(120),
  name: z.string().trim().min(2, "Contact person required").max(80),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(160),
  size: z.string().trim().max(40).optional().or(z.literal("")),
  category: z.string().trim().max(80).optional().or(z.literal("")),
  notes: z.string().trim().max(1200).optional().or(z.literal("")),
});

function QuotationFormSection() {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [sent, setSent] = React.useState(false);
  const [fileName, setFileName] = React.useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = quoteSchema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path.join(".")] = i.message; });
      setErrors(errs);
      return;
    }
    const d = parsed.data;
    const lines = [
      `New Quotation Request from ${d.company}`,
      `Contact: ${d.name} · ${d.phone} · ${d.email}`,
      d.size ? `Company size: ${d.size}` : "",
      d.category ? `Requirement category: ${d.category}` : "",
      fileName ? `Attached file: ${fileName} (please share via WhatsApp)` : "",
      d.notes ? `Notes: ${d.notes}` : "",
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setSent(true);
    setErrors({});
  }

  return (
    <section id="quote" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Get a quote</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Request a business quotation.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Tell us your workplace procurement requirement and receive a prompt,
            structured, GST-compliant quotation.
          </p>
          <div className="mt-8 grid gap-3 text-sm">
            {[
              ["Company size or team count", "Helps us scale the quotation."],
              ["Category or product list", "Even a rough list works."],
              ["Delivery location", "All Hyderabad clusters covered."],
            ].map(([t, d]) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium">{t}</p>
                  <p className="text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <Button asChild variant="soft" size="lg" className="mt-8">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4 text-emerald-600" /> Quick WhatsApp Enquiry
            </a>
          </Button>
        </div>

        <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-elegant)] md:p-10">
          {sent ? (
            <div className="flex flex-col items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Request sent.</h3>
              <p className="text-muted-foreground">
                We've opened WhatsApp with your enquiry pre-filled. Our procurement team
                will respond shortly with a quotation.
              </p>
              <Button variant="soft" onClick={() => { setSent(false); setFileName(null); }}>
                Send another request
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Company Name" name="company" error={errors.company} />
                <Field label="Contact Person" name="name" error={errors.name} />
                <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <SelectField label="Company Size" name="size" options={[
                  "1–25 employees", "25–100 employees", "100–500 employees", "500+ employees",
                ]} />
                <SelectField label="Requirement Category" name="category" options={[
                  "Workplace Hygiene Essentials",
                  "Washroom Hygiene",
                  "Cleaning Chemicals",
                  "Pantry & Utility Supplies",
                  "Multiple categories",
                ]} />
              </div>
              <FileField onPick={setFileName} fileName={fileName} />
              <Field label="Additional Notes (optional)" name="notes" textarea error={errors.notes} />
              <Button type="submit" variant="hero" size="lg" className="mt-2 w-full md:w-auto md:self-start">
                <Send className="h-4 w-4" /> Get Quotation
              </Button>
              <p className="text-[11px] text-muted-foreground">
                Submitting opens WhatsApp with your enquiry pre-filled — fastest path to
                a same-day response.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", textarea, error,
}: { label: string; name: string; type?: string; textarea?: boolean; error?: string }) {
  const cls = `w-full rounded-xl border ${error ? "border-destructive" : "border-border"} bg-background px-4 py-3 text-sm outline-none transition focus:border-primary`;
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} className={cls} />
      )}
      {error && <span className="mt-1 block text-[11px] text-destructive">{error}</span>}
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      <select name={name} defaultValue="" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function FileField({ onPick, fileName }: { onPick: (n: string | null) => void; fileName: string | null }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-border bg-background px-4 py-4 text-sm transition hover:border-primary/40">
      <div>
        <span className="block text-xs font-medium text-muted-foreground">Upload requirement list (optional)</span>
        <span className="mt-1 block text-foreground/80">
          {fileName ?? "PDF, Excel or image · max 10 MB"}
        </span>
      </div>
      <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs">Choose file</span>
      <input
        type="file"
        accept=".pdf,.xlsx,.xls,.csv,.png,.jpg,.jpeg,.webp"
        className="hidden"
        onChange={(e) => onPick(e.target.files?.[0]?.name ?? null)}
      />
    </label>
  );
}

/* =============================================================
   10 · FAQ
============================================================= */
const FAQS = [
  { q: "Do you offer recurring monthly procurement?", a: "Yes. We set up monthly supply schedules with locked quantities, single GST invoicing, priority dispatch and a dedicated account contact." },
  { q: "Do you supply IT offices and corporates?", a: "IT companies and corporate offices across Hyderabad — Hitech City, Gachibowli, Madhapur, Financial District and more — are our primary client base." },
  { q: "Can we request custom quotations?", a: "Absolutely. Share your requirement list via the form, WhatsApp or email and we'll respond with a structured quotation, usually within the hour." },
  { q: "Do you provide GST billing?", a: "Yes. Every order ships with a clean, GST-compliant tax invoice. GSTIN " + SITE.gstin + "." },
  { q: "What areas do you cover?", a: "All major business clusters of Hyderabad including Hitech City, Gachibowli, Madhapur, Financial District, Banjara Hills, Jubilee Hills, Manikonda and Secunderabad." },
  { q: "Can businesses place bulk orders?", a: "Yes. We handle bulk and recurring procurement, with pallet-grade logistics and scheduled dispatch when needed." },
];
function FAQSection() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl px-6 py-24 md:px-8 md:py-28">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// FAQ</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Frequently asked questions.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   11 · CONTACT
============================================================= */
function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Contact</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Talk to our procurement team.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Reach us by phone, email or WhatsApp. Office visits by appointment.
          </p>

          <div className="mt-8 space-y-3">
            <ContactCard icon={Phone} label="Phone" value={SITE.phone} href={`tel:+${SITE.phoneRaw}`} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with procurement" href={WHATSAPP} accent />
            <ContactCard icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <ContactCard icon={MapPin} label="Address" value={SITE.address} href={MAPS_URL} />
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Verification</p>
            <p className="mt-2 text-sm font-medium">GSTIN {SITE.gstin}</p>
            <p className="mt-1 text-xs text-muted-foreground">Registered B2B supplier · Telangana</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
          <iframe
            title="Crystal Clean Solutions location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
            className="h-[460px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon, label, value, href, accent,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string; accent?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`group flex items-start gap-4 rounded-2xl border p-5 transition hover:-translate-y-0.5 ${
        accent
          ? "border-transparent bg-[image:var(--gradient-primary)] text-white hover:opacity-95"
          : "border-border bg-card hover:border-primary/30"
      }`}
    >
      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${accent ? "bg-white/20" : "bg-foreground text-background"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className={`font-mono text-[10px] uppercase tracking-widest ${accent ? "text-white/70" : "text-muted-foreground"}`}>{label}</p>
        <p className="mt-1 text-sm font-medium">{value}</p>
      </div>
    </a>
  );
}
