import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP } from "@/lib/site";
import { MeshBackdrop } from "@/components/MeshBackdrop";
import { Reveal, CountUp } from "@/components/Reveal";
import { CrystalMark } from "@/components/Logo";
import {
  ArrowRight, MessageCircle, FileText, CheckCircle2, Sparkles, Repeat,
  Building2, Cpu, Stethoscope, Hotel, GraduationCap, Briefcase, Factory,
  Phone, Mail, MapPin, Send, Truck, ReceiptText, BadgeCheck,
  Droplets, SprayCan, Wind, Trash2, PackageOpen, Wrench, Database,
  ShieldCheck, Activity, Zap, LineChart, Globe2, Layers, Clock, ChevronDown,
  TrendingDown, Workflow, CircleDot, Check,
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
      <HyderabadPresence />
      <SuccessStory />
      <BrandWall />
      <ProcessTimeline />
      <Vision />
      <InquiryForm />
      <div aria-hidden className="h-16 sm:hidden" />
    </>
  );
}

/* =================================================================
   HERO — procurement ecosystem network
================================================================= */
function Hero() {
  const consoleRef = React.useRef<HTMLDivElement | null>(null);

  // subtle mouse parallax on the console
  React.useEffect(() => {
    const el = consoleRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      el.style.transform = `perspective(1200px) rotateX(${(-dy * 3).toFixed(2)}deg) rotateY(${(dx * 3).toFixed(2)}deg)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <ProcurementNetwork />
      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 md:px-8 md:pb-36 md:pt-32">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--electric)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--electric)]" />
            </span>
            Technology-Enabled B2B Procurement · Hyderabad
          </div>
          <h1 className="text-balance text-luxe text-5xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl lg:text-[5.25rem]">
            Procurement,{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              made invisible.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg">
            Everything your workplace consumes — housekeeping, hygiene, chemicals, pantry, equipment —
            delivered by one accountable partner, on a single GST invoice, every month.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="btn-magnetic group rounded-full bg-[image:var(--gradient-primary)] px-7 text-white">
              <Link to="/contact">
                Request Quotation
                <ArrowRight className="ico-arrow h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-glow-border rounded-full border-white/15 bg-white/[0.04] px-7 text-white backdrop-blur hover:bg-white/[0.06] hover:text-white">
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

        {/* Floating procurement console with parallax */}
        <div className="relative mx-auto mt-20 max-w-5xl animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-25 blur-3xl" />
          <div
            ref={consoleRef}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[var(--shadow-elegant)] backdrop-blur-xl transition-transform duration-300"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-[11px]">
              <div className="flex items-center gap-2 font-mono uppercase tracking-[0.18em] text-white/50">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Procurement Console
              </div>
              <span className="font-mono text-white/40">CCS · Live</span>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-4 md:p-6">
              <Stat label="On-time delivery" value={<><CountUp to={99.1} decimals={1} suffix="%" /></>} Icon={Truck} />
              <Stat label="Quote SLA" value={<>&lt; <CountUp to={60} suffix=" min" /></>} Icon={Clock} />
              <Stat label="Active accounts" value={<><CountUp to={120} suffix="+" /></>} Icon={Building2} />
              <Stat label="Categories supplied" value={<><CountUp to={300} suffix="+" /></>} Icon={Layers} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, Icon }: { label: string; value: React.ReactNode; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[9px] uppercase tracking-widest text-white/45">{label}</p>
        <Icon className="h-3.5 w-3.5 text-[color:var(--electric)]" />
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-white">{value}</p>
    </div>
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
   INDUSTRIES — interactive hover-reveal cards
================================================================= */
const INDUSTRIES = [
  {
    i: Cpu, t: "IT & Corporate Offices",
    d: "Tech parks across Hitech City, Gachibowli & Financial District.",
    challenges: ["Multi-floor consumption", "Multiple vendors", "Inconsistent billing"],
    categories: ["Washroom hygiene", "Pantry supplies", "Tissue rolls"],
  },
  {
    i: Stethoscope, t: "Hospitals & Clinics",
    d: "Hospital-grade disinfectants, color-coded waste, PPE supplies.",
    challenges: ["Compliance & audits", "Color-coded waste", "PPE stockouts"],
    categories: ["Disinfectants", "Biomedical waste bags", "Surface care"],
  },
  {
    i: Hotel, t: "Hotels & Hospitality",
    d: "Premium washroom amenities, housekeeping & laundry essentials.",
    challenges: ["Guest-grade quality", "Seasonal peaks", "Laundry chemicals"],
    categories: ["Amenities", "Laundry care", "Floor care"],
  },
  {
    i: GraduationCap, t: "Educational Institutions",
    d: "Schools, colleges and training campuses — bulk recurring supply.",
    challenges: ["Bulk volumes", "Tight budgets", "Term-based demand"],
    categories: ["Floor cleaners", "Hand wash", "Janitorial tools"],
  },
  {
    i: Briefcase, t: "Co-working Spaces",
    d: "Multi-floor hygiene programs with predictable monthly billing.",
    challenges: ["Per-location billing", "High footfall", "Brand standards"],
    categories: ["Hygiene programs", "Air care", "Pantry consumables"],
  },
  {
    i: Factory, t: "Commercial Facilities",
    d: "Manufacturing, warehouses and large retail facility hygiene.",
    challenges: ["Heavy-duty cleaning", "Safety supplies", "Pan-site logistics"],
    categories: ["Industrial chemicals", "Safety gloves", "Bulk dispensers"],
  },
];
function Industries() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <Reveal><SectionLabel kicker="// Industries" title="Trusted across business categories" /></Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map(({ i: Icon, t, d, challenges, categories }, idx) => (
          <Reveal key={t} delay={idx * 60}>
            <div className="card-premium group relative h-full overflow-hidden rounded-2xl p-6">
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(92,225,230,0.18), transparent 70%)" }}
              />
              <div className="ico-lift grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{d}</p>

              <div className="mt-5 grid gap-3 overflow-hidden text-[12px] text-white/65 transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-60 lg:group-hover:opacity-100">
                <div>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-white/40">Typical challenges</p>
                  <ul className="mt-1.5 space-y-1">
                    {challenges.map((c) => (
                      <li key={c} className="flex items-start gap-1.5"><TrendingDown className="mt-0.5 h-3 w-3 text-[color:var(--electric)]" />{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-white/40">Recommended categories</p>
                  <ul className="mt-1.5 space-y-1">
                    {categories.map((c) => (
                      <li key={c} className="flex items-start gap-1.5"><CircleDot className="mt-0.5 h-3 w-3 text-[color:var(--electric)]" />{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* =================================================================
   PRODUCT CATEGORIES — expandable explorer
================================================================= */
const CATEGORIES = [
  { i: Wind, name: "Washroom Hygiene", d: "Hand wash, soaps, sanitizers & dispensers.", items: ["Liquid hand wash", "Foam soap", "Sanitizer (gel & liquid)", "Auto-sensor dispensers", "Urinal screens"] },
  { i: FileText, name: "Tissue Solutions", d: "Toilet rolls, M-fold, C-fold & kitchen tissues.", items: ["2-ply toilet roll", "M-fold hand towel", "C-fold hand towel", "Jumbo roll tissue", "Kitchen tissue"] },
  { i: Droplets, name: "Cleaning Chemicals", d: "Floor cleaners, disinfectants, glass care.", items: ["R-series floor cleaner", "Hospital-grade disinfectant", "Glass cleaner", "Toilet bowl cleaner", "Degreaser"] },
  { i: Trash2, name: "Garbage & Waste", d: "Biodegradable & color-coded waste bags.", items: ["Black/Green/Yellow/Red bags", "Biodegradable liners", "BMW-rated bags", "Pedal bins"] },
  { i: Wrench, name: "Janitorial Tools", d: "Mops, brooms, brushes, buckets, gloves.", items: ["Wet/dry mops", "Microfiber cloths", "Wringer buckets", "Caddy carts", "Nitrile gloves"] },
  { i: PackageOpen, name: "Dispensers", d: "Soap, sanitizer, tissue dispensers.", items: ["Soap dispenser", "Sanitizer stand", "Multi-fold dispenser", "Jumbo roll dispenser"] },
  { i: Sparkles, name: "Air Care", d: "Odonil, room fresheners, urinal blocks.", items: ["Auto air freshener", "Urinal blocks", "Room gel fresheners", "Refill cartridges"] },
  { i: SprayCan, name: "Pantry & Equipment", d: "Pantry consumables & facility equipment.", items: ["Disposable cups & plates", "Stirrers & straws", "Cling film & foil", "Pantry detergents"] },
];
function ProductCategories() {
  const [open, setOpen] = React.useState<string | null>(null);
  return (
    <section id="solutions" className="scroll-mt-24 relative border-y border-white/5 bg-[color:var(--card)]/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal><SectionLabel kicker="// Category Explorer" title="One catalogue. Every workplace consumable." /></Reveal>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ i: Icon, name, d, items }, idx) => {
            const isOpen = open === name;
            return (
              <Reveal key={name} delay={idx * 50}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : name)}
                  className={`card-premium group w-full rounded-2xl p-5 text-left ${isOpen ? "!border-[color:var(--electric)]/50 !bg-white/[0.05]" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="ico-lift h-5 w-5 text-[color:var(--electric)]" />
                    <ChevronDown className={`h-4 w-4 text-white/40 transition ${isOpen ? "rotate-180 text-[color:var(--electric)]" : ""}`} />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">{d}</p>
                  <div className={`grid overflow-hidden text-[12px] text-white/65 transition-all duration-500 ${isOpen ? "mt-3 max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                    <ul className="space-y-1 border-t border-white/5 pt-3">
                      {items.map((it) => (
                        <li key={it} className="flex items-start gap-1.5"><CircleDot className="mt-0.5 h-3 w-3 text-[color:var(--electric)]" />{it}</li>
                      ))}
                    </ul>
                  </div>
                </button>
              </Reveal>
            );
          })}
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
      <Reveal><SectionLabel kicker="// Why Businesses Choose Us" title="Built for procurement teams, not retail shoppers." /></Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {WHY.map(({ i: Icon, t, d }, idx) => (
          <Reveal key={t} delay={idx * 60}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition hover:border-[color:var(--electric)]/40">
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
          </Reveal>
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
        <Reveal>
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
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[image:var(--gradient-primary)] opacity-30 blur-3xl" />
            <LiveDashboard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LiveDashboard() {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, []);

  // gently animated values
  const spend = 84200 + (tick % 6) * 120;
  const orders = 4;
  const skus = 37;
  const burn = 62 + ((tick * 3) % 18);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1530]/80 shadow-[var(--shadow-elegant)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-2">
          <CrystalMark className="h-4 w-4" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">Account · ITSPL Corp</span>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
          <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 align-middle" /> Live
        </span>
      </div>
      <div className="grid gap-4 p-5">
        <div className="grid grid-cols-3 gap-3">
          <DashCell l="Monthly Spend" v={`₹${spend.toLocaleString("en-IN")}`} />
          <DashCell l="Orders / Mo" v={`${orders}`} />
          <DashCell l="SKUs Tracked" v={`${skus}`} />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/45">Consumption · Last 6 mo</p>
            <span className="font-mono text-[10px] text-[color:var(--electric)]">burn {burn}%</span>
          </div>
          <SparkBars seed={tick} />
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
  );
}
function DashCell({ l, v }: { l: string; v: string }) {
  return (
    <div className="rounded-lg bg-white/[0.04] p-3">
      <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">{l}</p>
      <p className="mt-1 text-base font-semibold text-white tabular-nums">{v}</p>
    </div>
  );
}
function SparkBars({ seed }: { seed: number }) {
  const base = [40, 55, 48, 70, 62, 85];
  const data = base.map((v, i) => Math.max(20, Math.min(98, v + ((seed + i * 7) % 14) - 7)));
  return (
    <div className="flex h-20 items-end gap-1.5">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-[image:var(--gradient-primary)] opacity-80 transition-[height] duration-700 ease-out"
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  );
}

/* =================================================================
   HYDERABAD PRESENCE — interactive cluster map
================================================================= */
const CLUSTERS = [
  { id: "hitech", name: "Hitech City", x: 30, y: 42, accounts: "35+" },
  { id: "gachi", name: "Gachibowli", x: 22, y: 58, accounts: "28+" },
  { id: "fin", name: "Financial District", x: 18, y: 72, accounts: "22+" },
  { id: "madh", name: "Madhapur", x: 38, y: 50, accounts: "30+" },
  { id: "jubilee", name: "Jubilee Hills", x: 50, y: 40, accounts: "12+" },
  { id: "banjara", name: "Banjara Hills", x: 58, y: 48, accounts: "10+" },
  { id: "secun", name: "Secunderabad", x: 72, y: 32, accounts: "15+" },
  { id: "mani", name: "Manikonda", x: 30, y: 70, accounts: "8+" },
];
function HyderabadPresence() {
  const [active, setActive] = React.useState<string>("hitech");
  const current = CLUSTERS.find((c) => c.id === active)!;
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <Reveal><SectionLabel kicker="// Hyderabad Presence" title="On the ground, across every business cluster." /></Reveal>
      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--ink)]">
            <div aria-hidden className="absolute inset-0 bg-grid-sm opacity-25" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              {/* faint river / outline path */}
              <path d="M5,55 C25,40 45,65 60,50 S95,55 98,40" stroke="rgba(92,225,230,0.18)" strokeWidth="0.4" fill="none" />
              <path d="M10,80 C30,75 55,85 80,70 S95,60 99,55" stroke="rgba(92,225,230,0.12)" strokeWidth="0.4" fill="none" />
            </svg>
            {CLUSTERS.map((c) => {
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  onMouseEnter={() => setActive(c.id)}
                  onFocus={() => setActive(c.id)}
                  onClick={() => setActive(c.id)}
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  aria-label={c.name}
                >
                  <span className={`relative grid h-3 w-3 place-items-center rounded-full ${isActive ? "bg-[color:var(--electric)]" : "bg-white/40"} transition`}>
                    {isActive && <span className="absolute inset-0 animate-ping rounded-full bg-[color:var(--electric)] opacity-60" />}
                  </span>
                  <span className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] transition ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                    {c.name}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--electric)]">Active cluster</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">{current.name}</h3>
            <p className="mt-2 text-sm text-white/65">{current.accounts} accounts supplied · same-day & next-day delivery windows.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Same-day pickup", "Scheduled dispatch", "Local warehouse", "Dedicated route"].map((b) => (
                <div key={b} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-white/75">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--electric)]" />{b}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/45">Hover any pin to explore the cluster.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =================================================================
   SUCCESS STORY — Problem → Consolidation → Automation → Recurring
================================================================= */
const STORY = [
  { i: TrendingDown, k: "Problem", t: "8 vendors, missed deliveries, messy invoicing.", d: "Procurement chasing follow-ups across WhatsApp groups." },
  { i: Workflow, k: "Consolidation", t: "Crystal becomes the single supplier of record.", d: "One PO, one catalogue, one accountable contact." },
  { i: Activity, k: "Automation", t: "Quotes, dispatch and invoicing run on templates.", d: "60-min quote SLA, scheduled monthly dispatch." },
  { i: Repeat, k: "Recurring Supply", t: "Auto-renewing monthly orders with locked pricing.", d: "Procurement turns invisible. Operations runs smoothly." },
];
function SuccessStory() {
  return (
    <section className="relative border-y border-white/5 bg-[color:var(--card)]/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal><SectionLabel kicker="// Customer Success" title="From scattered vendors to invisible procurement." /></Reveal>
        <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STORY.map(({ i: Icon, k, t, d }, idx) => (
            <Reveal key={k} delay={idx * 100}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--electric)]">{`0${idx + 1}`}</span>
                  <Icon className="h-4 w-4 text-[color:var(--electric)]" />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">{k}</p>
                <h3 className="mt-1 text-base font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   BRAND WALL
================================================================= */
const BRANDS = [
  "Diversey", "Taski", "3M", "Godrej", "Dabur", "Hindustan Unilever",
  "Reckitt", "ITC", "Kimberly-Clark", "SC Johnson", "Marvel", "Origami",
];
function BrandWall() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <Reveal><SectionLabel kicker="// Brands We Supply" title="Premium, quality-assured brands only." /></Reveal>
      <Reveal delay={120}>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] sm:grid-cols-3 lg:grid-cols-6">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="group flex h-24 items-center justify-center bg-[color:var(--card)]/60 px-4 transition hover:bg-white/[0.06]"
            >
              <span className="font-display text-base font-semibold tracking-tight text-white/55 transition group-hover:text-white">
                {b}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
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
    <section className="relative border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal><SectionLabel kicker="// Procurement Process" title="From enquiry to recurring supply — in days, not weeks." /></Reveal>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />
          <div aria-hidden className="timeline-pulse absolute left-0 right-0 top-7 hidden h-px lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {STEPS.map((s, idx) => (
              <Reveal key={s.n} delay={idx * 80}>
                <div className="relative">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[color:var(--electric)]/30 bg-[color:var(--card)] text-sm font-mono font-semibold text-[color:var(--electric)] shadow-[0_0_30px_-8px_rgba(92,225,230,0.5)]">
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-center font-semibold text-white">{s.t}</h3>
                  <p className="mt-2 text-center text-sm leading-relaxed text-white/55">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
        <h2 className="mt-4 text-balance text-luxe text-4xl font-medium leading-[1.05] tracking-[-0.035em] md:text-6xl lg:text-7xl">
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
        <Reveal>
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
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8"
          >
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-x-6">
              <Field name="company" label="Company *" required />
              <Field name="name" label="Your Name *" required />
              <Field name="phone" label="Phone *" required />
              <Field name="email" label="Email" type="email" />
              <div className="field-floating is-filled sm:col-span-2">
                <select
                  name="industry"
                  defaultValue="Corporate / IT"
                >
                  {["Corporate / IT", "Hospital / Clinic", "Hotel / Hospitality", "Education", "Co-working", "Other"].map((o) => (
                    <option key={o} className="bg-[color:var(--card)]">{o}</option>
                  ))}
                </select>
                <label>Industry</label>
              </div>
              <div className="field-floating sm:col-span-2">
                <textarea
                  name="message"
                  required
                  placeholder=" "
                />
                <label>Requirement *</label>
              </div>
            </div>
            <Button type="submit" size="lg" className="btn-magnetic group mt-8 w-full rounded-full bg-[image:var(--gradient-primary)] text-white">
              {sent ? "Opening WhatsApp…" : <>Send Enquiry <Send className="ico-arrow h-4 w-4" /></>}
            </Button>
            <p className="mt-3 text-center text-[11px] text-white/45">
              Submissions open WhatsApp with your enquiry pre-filled.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", required,
}: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div className="field-floating">
      <input
        type={type}
        name={name}
        required={required}
        placeholder=" "
      />
      <label>{label}</label>
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
