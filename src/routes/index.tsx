import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP } from "@/lib/site";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { CrystalMark } from "@/components/Logo";
import {
  ArrowRight, MessageCircle, FileText, CheckCircle2, Sparkles, Repeat,
  Building2, Cpu, Stethoscope, Hotel, GraduationCap, Briefcase, Factory,
  Phone, Mail, MapPin, Send, Truck, ReceiptText, BadgeCheck,
  Droplets, SprayCan, Wind, Trash2, PackageOpen, Wrench, Database,
  ShieldCheck, Activity, Zap, LineChart, Globe2, Layers, Clock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Crystal Clean Solutions — B2B Procurement Partner, Hyderabad" },
      { name: "description", content: "Hyderabad's technology-enabled B2B procurement partner for housekeeping materials, hygiene consumables, cleaning chemicals, pantry supplies and workplace essentials." },
      { property: "og:title", content: "Crystal Clean Solutions — B2B Procurement Partner, Hyderabad" },
      { property: "og:description", content: "Enterprise-grade workplace consumables procurement for corporates, hospitals, hotels, education and co-working spaces across Hyderabad." },
      { property: "og:url", content: "https://crystalcleansolutions.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://crystalcleansolutions.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Do you offer recurring monthly procurement?", acceptedAnswer: { "@type": "Answer", text: "Yes. We set up monthly supply schedules with locked quantities, single GST invoicing and a dedicated account contact." } },
            { "@type": "Question", name: "Which businesses do you serve?", acceptedAnswer: { "@type": "Answer", text: "Corporates, IT offices, hospitals, clinics, hotels, educational institutions, co-working spaces and commercial facilities across Hyderabad." } },
            { "@type": "Question", name: "Do you provide GST billing?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every order ships with a clean, GST-compliant tax invoice." } },
          ],
        }),
      },
    ],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Industries />
      <ProductCategories />
      <WhyUs />
      <TechProcurement />
      <ProcessTimeline />
      <Vision />
      <InquiryForm />
      <div aria-hidden className="h-16 sm:hidden" />
    </>
  );
}

/* =================================================================
   HERO
================================================================= */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <GalaxyBackground />
      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 md:px-8 md:pb-36 md:pt-32">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--electric)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--electric)]" />
            </span>
            Technology-Enabled B2B Procurement · Hyderabad
          </div>
          <h1 className="text-balance bg-gradient-to-b from-white via-white to-[#9BD8FF] bg-clip-text text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-transparent md:text-6xl lg:text-7xl">
            Hyderabad's Technology-Enabled{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              B2B Procurement Partner
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg">
            Housekeeping materials, hygiene consumables, cleaning chemicals, pantry supplies and
            workplace essentials — delivered reliably to businesses.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="group rounded-full bg-[image:var(--gradient-primary)] px-7 text-white shadow-[var(--shadow-glow)] hover:opacity-95">
              <Link to="/contact">
                Request Quotation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 px-7 text-white backdrop-blur hover:bg-white/10 hover:text-white">
              <Link to="/products">
                <FileText className="h-4 w-4" /> Download Catalogue
              </Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-white/55">
            {["GST-Compliant Billing", "Recurring Supply", "60-min Quote SLA", "Pan-Hyderabad Logistics"].map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--electric)]" /> {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Floating procurement console */}
        <div className="relative mx-auto mt-20 max-w-5xl animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-25 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[var(--shadow-elegant)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-[11px]">
              <div className="flex items-center gap-2 font-mono uppercase tracking-[0.18em] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Procurement Console
              </div>
              <span className="font-mono text-white/40">CCS · Live</span>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-4 md:p-6">
              {[
                { l: "On-time delivery", v: "99.1%", i: Truck },
                { l: "Quote SLA", v: "< 60 min", i: Clock },
                { l: "Active accounts", v: "120+", i: Building2 },
                { l: "Categories supplied", v: "300+", i: Layers },
              ].map(({ l, v, i: Icon }) => (
                <div key={l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-white/45">{l}</p>
                    <Icon className="h-3.5 w-3.5 text-[color:var(--electric)]" />
                  </div>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-white">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   TRUST BAR
================================================================= */
function TrustBar() {
  const items = [
    { i: ShieldCheck, t: "GST-Compliant Billing" },
    { i: Truck, t: "On-Time Delivery" },
    { i: Database, t: "Quality-Assured Vendors" },
    { i: BadgeCheck, t: "Enterprise SLAs" },
    { i: Repeat, t: "Recurring Supply" },
    { i: Activity, t: "Account Dashboards" },
  ];
  return (
    <section className="relative border-y border-white/5 bg-[color:var(--card)]/40">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-2.5 text-[12.5px] text-white/70">
              <Icon className="h-4 w-4 text-[color:var(--electric)]" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   INDUSTRIES
================================================================= */
const INDUSTRIES = [
  { i: Cpu, t: "IT & Corporate Offices", d: "Tech parks across Hitech City, Gachibowli & Financial District." },
  { i: Stethoscope, t: "Hospitals & Clinics", d: "Color-coded waste, hospital-grade disinfectants, PPE supplies." },
  { i: Hotel, t: "Hotels & Hospitality", d: "Premium washroom amenities, housekeeping & laundry essentials." },
  { i: GraduationCap, t: "Educational Institutions", d: "Schools, colleges and training campuses — bulk recurring supply." },
  { i: Briefcase, t: "Co-working Spaces", d: "Multi-floor hygiene programs with predictable monthly billing." },
  { i: Factory, t: "Commercial Facilities", d: "Manufacturing, warehouses and large retail facility hygiene." },
];
function Industries() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <SectionLabel kicker="// Industries" title="Trusted across business categories" />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map(({ i: Icon, t, d }) => (
          <div
            key={t}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-[color:var(--electric)]/40"
          >
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition group-hover:opacity-100"
              style={{ background: "radial-gradient(circle, rgba(92,225,230,0.18), transparent 70%)" }}
            />
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =================================================================
   PRODUCT CATEGORIES
================================================================= */
const CATEGORIES = [
  { i: Wind, name: "Washroom Hygiene", d: "Hand wash, soaps, sanitizers & dispensers." },
  { i: FileText, name: "Tissue Solutions", d: "Toilet rolls, M-fold, C-fold & kitchen tissues." },
  { i: Droplets, name: "Cleaning Chemicals", d: "Floor cleaners, disinfectants, glass care." },
  { i: Trash2, name: "Garbage & Waste", d: "Biodegradable & color-coded waste bags." },
  { i: Wrench, name: "Janitorial Tools", d: "Mops, brooms, brushes, buckets, gloves." },
  { i: PackageOpen, name: "Dispensers", d: "Soap, sanitizer, tissue dispensers." },
  { i: Sparkles, name: "Air Care", d: "Odonil, room fresheners, urinal blocks." },
  { i: SprayCan, name: "Pantry & Equipment", d: "Pantry consumables & facility equipment." },
];
function ProductCategories() {
  return (
    <section id="solutions" className="scroll-mt-24 relative border-y border-white/5 bg-[color:var(--card)]/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <SectionLabel kicker="// Product Categories" title="One catalogue. Every workplace consumable." />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ i: Icon, name, d }) => (
            <div
              key={name}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-[color:var(--electric)]/40 hover:bg-white/[0.05]"
            >
              <Icon className="h-5 w-5 text-[color:var(--electric)]" />
              <h3 className="mt-4 font-semibold text-white">{name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <Link to="/products">Browse full catalogue <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   WHY US
================================================================= */
const WHY = [
  { i: ShieldCheck, t: "Single Procurement Partner", d: "Consolidate 8+ vendors into one accountable supplier." },
  { i: Zap, t: "Sub-60-min Quote SLA", d: "Structured quotations within an hour of enquiry." },
  { i: Repeat, t: "Recurring Monthly Supply", d: "Locked quantities, scheduled dispatch, no follow-ups." },
  { i: ReceiptText, t: "Clean GST Invoicing", d: "Single tax invoice per cycle — finance-team friendly." },
  { i: BadgeCheck, t: "Brand-Assured Quality", d: "Diversey, Taski, 3M, Godrej, Dabur and more." },
  { i: Globe2, t: "Pan-Hyderabad Coverage", d: "All major business clusters across the city." },
];
function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <SectionLabel kicker="// Why Businesses Choose Us" title="Built for procurement teams, not retail shoppers." />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {WHY.map(({ i: Icon, t, d }) => (
          <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[color:var(--electric)]/30 bg-[color:var(--electric)]/10 text-[color:var(--electric)]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =================================================================
   TECHNOLOGY ENABLED PROCUREMENT
================================================================= */
function TechProcurement() {
  const features = [
    { i: LineChart, t: "Procurement Dashboards", d: "Live order status, consumption analytics and monthly burn-rate." },
    { i: Database, t: "Structured Catalogue", d: "300+ SKUs mapped by workplace function, not random product lists." },
    { i: Repeat, t: "Subscription Orders", d: "Set-and-forget recurring schedules with automatic GST invoicing." },
    { i: Zap, t: "Automated Quotations", d: "Templated RFQ responses with consistent pricing logic." },
  ];
  return (
    <section className="relative border-y border-white/5 bg-[color:var(--ink)]">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20 mask-fade-b" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--electric)]">// Technology-Enabled Procurement</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl">
            A procurement platform —{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">not a vendor list.</span>
          </h2>
          <p className="mt-6 text-white/65 md:text-lg">
            We're building Hyderabad's first procurement-first workplace consumables partner.
            Operational rigour you'd expect from enterprise SaaS — applied to the supplies
            your facility actually runs on.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <Icon className="h-4.5 w-4.5 text-[color:var(--electric)]" />
                <p className="mt-2.5 font-semibold text-white">{t}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mock dashboard */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-[image:var(--gradient-primary)] opacity-30 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1530]/80 shadow-[var(--shadow-elegant)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <CrystalMark className="h-4 w-4" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">Account · ITSPL Corp</span>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">Active</span>
            </div>
            <div className="grid gap-4 p-5">
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Monthly Spend", "₹84,200"],
                  ["Orders / Mo", "4"],
                  ["SKUs Tracked", "37"],
                ].map(([l, v]) => (
                  <div key={l} className="rounded-lg bg-white/[0.04] p-3">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">{l}</p>
                    <p className="mt-1 text-base font-semibold text-white">{v}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/45">Consumption · Last 6 mo</p>
                  <LineChart className="h-3.5 w-3.5 text-[color:var(--electric)]" />
                </div>
                <SparkBars />
              </div>
              <div className="space-y-2">
                {[
                  ["Washroom Tissue 2-ply", "40 bundles", "On schedule"],
                  ["Floor Cleaner 5L", "12 cans", "Dispatched"],
                  ["Hand Wash 5L", "8 cans", "Confirmed"],
                ].map(([n, q, s]) => (
                  <div key={n} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2 text-sm">
                    <span className="text-white/85">{n}</span>
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="font-mono text-white/50">{q}</span>
                      <span className="rounded-full bg-[color:var(--electric)]/15 px-2 py-0.5 text-[color:var(--electric)]">{s}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparkBars() {
  const data = [40, 55, 48, 70, 62, 85];
  return (
    <div className="flex h-20 items-end gap-1.5">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-[image:var(--gradient-primary)] opacity-80"
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  );
}

/* =================================================================
   PROCESS TIMELINE
================================================================= */
const STEPS = [
  { n: "01", t: "Submit Requirement", d: "Share product list via form, email or WhatsApp." },
  { n: "02", t: "Receive Quotation", d: "Structured quote with brand options within 60 minutes." },
  { n: "03", t: "Confirm & Schedule", d: "PO confirmation, dispatch slotted to your calendar." },
  { n: "04", t: "Delivery & GST Invoice", d: "Pan-Hyderabad delivery with single tax invoice." },
  { n: "05", t: "Recurring Supply", d: "Optional monthly subscription — locked pricing." },
];
function ProcessTimeline() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <SectionLabel kicker="// Procurement Process" title="From enquiry to recurring supply — in days, not weeks." />
      <div className="relative mt-16">
        <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--electric)]/40 to-transparent lg:block" />
        <div className="grid gap-8 lg:grid-cols-5">
          {STEPS.map((s) => (
            <div key={s.n} className="relative">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[color:var(--electric)]/30 bg-[color:var(--card)] text-sm font-mono font-semibold text-[color:var(--electric)] shadow-[0_0_30px_-8px_rgba(92,225,230,0.5)]">
                {s.n}
              </div>
              <h3 className="mt-5 text-center font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-center text-sm leading-relaxed text-white/55">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   VISION
================================================================= */
function Vision() {
  return (
    <section className="relative overflow-hidden border-y border-white/5">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[image:var(--gradient-ink)]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70 animate-aurora"
        style={{ background: "var(--gradient-nebula)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:px-8 md:py-32">
        <CrystalMark className="mx-auto h-10 w-10" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--electric)]">// Our Vision</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
          To become India's most trusted technology-enabled workplace procurement platform —
          starting from Hyderabad.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/65 md:text-lg">
          We believe procurement should be invisible to your operations team — predictable,
          auditable and built for scale. Crystal Clean Solutions is engineering that future.
        </p>
      </div>
    </section>
  );
}

/* =================================================================
   INQUIRY FORM
================================================================= */
function InquiryForm() {
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      `Hi Crystal Clean Solutions,`,
      ``,
      `Company: ${fd.get("company")}`,
      `Contact: ${fd.get("name")} · ${fd.get("phone")}`,
      `Email: ${fd.get("email")}`,
      `Industry: ${fd.get("industry")}`,
      `Requirement:`,
      `${fd.get("message")}`,
    ].join("\n");
    window.open(`https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(lines)}`, "_blank");
    setSent(true);
  };
  return (
    <section id="enquiry" className="scroll-mt-24 relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionLabel kicker="// Customer Inquiry" title="Request a quotation." align="left" />
          <p className="mt-6 max-w-md text-white/65">
            Share your requirement — typical quote turnaround is under 60 minutes during business hours.
          </p>
          <div className="mt-10 space-y-4">
            <ContactRow icon={Phone} label="Call" value={SITE.phone} href={`tel:+${SITE.phoneRaw}`} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with procurement" href={WHATSAPP} />
            <ContactRow icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <ContactRow icon={MapPin} label="Office" value={SITE.address} />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="company" label="Company *" required placeholder="Acme Corp" />
            <Field name="name" label="Your Name *" required placeholder="Procurement lead" />
            <Field name="phone" label="Phone *" required placeholder="+91" />
            <Field name="email" label="Email" type="email" placeholder="you@company.com" />
            <div className="sm:col-span-2">
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">Industry</label>
              <select
                name="industry"
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none focus:border-[color:var(--electric)]/50"
                defaultValue="Corporate / IT"
              >
                {["Corporate / IT", "Hospital / Clinic", "Hotel / Hospitality", "Education", "Co-working", "Other"].map((o) => (
                  <option key={o} className="bg-[color:var(--card)]">{o}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">Requirement *</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="List product categories or specific SKUs and approximate monthly quantities."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[color:var(--electric)]/50"
              />
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full rounded-full bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)] hover:opacity-95">
            {sent ? "Opening WhatsApp…" : <>Send Enquiry <Send className="h-4 w-4" /></>}
          </Button>
          <p className="mt-3 text-center text-[11px] text-white/45">
            Submissions open WhatsApp with your enquiry pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", required, placeholder,
}: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[color:var(--electric)]/50"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-[color:var(--electric)]/30">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[color:var(--electric)]/10 text-[color:var(--electric)]">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">{label}</p>
        <p className="mt-1 text-sm text-white/85">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}

/* =================================================================
   SHARED
================================================================= */
function SectionLabel({
  kicker, title, align = "center",
}: { kicker: string; title: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--electric)]">{kicker}</p>
      <h2 className={`mt-3 text-balance text-3xl font-semibold leading-tight text-white md:text-5xl ${align === "center" ? "mx-auto max-w-3xl" : ""}`}>
        {title}
      </h2>
    </div>
  );
}
