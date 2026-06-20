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
    <div className="page-fade-in">
      <Hero />
      <Divider />
      <Industries />
      <Divider />
      <ProductCategories />
      <Divider />
      <WhyUs />
      <Divider />
      <TechProcurement />
      <Divider />
      <HyderabadPresence />
      <Divider />
      <SuccessStory />
      <Divider />
      <BrandWall />
      <Divider />
      <ProcessTimeline />
      <Divider />
      <Vision />
      <Divider />
      <InquiryForm />
      <CopyToastHost />
      <div aria-hidden className="h-16 sm:hidden" />
    </div>
  );
}

function Divider() {
  return <div aria-hidden className="section-divider mx-auto max-w-7xl" />;
}


/* =================================================================
   HERO — procurement ecosystem network
================================================================= */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <MeshBackdrop />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-8 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-3.5 py-1.5 text-[11px] font-medium text-slate-700 backdrop-blur-md stagger-in">
            <span className="h-1.5 w-1.5 rounded-full bg-[#009AE2] pulse-dot" />
            Technology-Enabled B2B Procurement · Hyderabad
          </div>
          <h1
            className="text-balance font-semibold text-slate-900 stagger-in"
            style={{
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              animationDelay: "80ms",
            }}
          >
            Hyderabad's B2B
            <br />
            <span className="shimmer-text">Procurement Partner</span>
          </h1>
          <p
            className="mx-auto mt-7 stagger-in"
            style={{
              fontSize: "18px",
              color: "#64748B",
              maxWidth: "520px",
              lineHeight: 1.7,
              animationDelay: "160ms",
            }}
          >
            Everything your workplace consumes — housekeeping, hygiene, chemicals, pantry, equipment —
            delivered by one accountable partner, on a single GST invoice, every month.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 stagger-in" style={{ animationDelay: "240ms" }}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full text-white font-semibold transition-all duration-200 hover:scale-[1.02]"
              style={{
                padding: "14px 28px",
                background: "linear-gradient(135deg, #009AE2 0%, #00BF63 100%)",
                boxShadow: "0 14px 36px -14px rgba(0,154,226,0.6)",
              }}
            >
              Request Quotation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white text-slate-900 transition-all duration-200 hover:border-[#009AE2] hover:text-[#009AE2]"
              style={{ padding: "14px 28px" }}
            >
              <FileText className="h-4 w-4" /> Download Catalogue
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-0 gap-y-2">
            {["GST-Compliant", "Recurring Supply", "60-min Quote", "Pan-Hyderabad"].map((b, i) => (
              <li
                key={b}
                className="stagger-in inline-flex items-center gap-1.5 px-4 text-[13px] [&:not(:last-child)]:border-r [&:not(:last-child)]:border-slate-200"
                style={{ color: "#64748B", animationDelay: `${320 + i * 100}ms` }}
              >
                <Check className="h-3.5 w-3.5 text-[#009AE2]" /> {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Procurement Console widget */}
        <div className="relative mx-auto mt-20 max-w-5xl slide-up-in">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              background: "rgba(15,23,42,0.025)",
              border: "1px solid rgba(15,23,42,0.07)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center justify-between border-b border-slate-200/70 px-5 py-3 text-[11px]">
              <div className="flex items-center gap-2 font-mono uppercase tracking-[0.18em] text-slate-900/50">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00BF63]" /> Procurement Console
              </div>
              <span className="font-mono text-[10px] text-[#00BF63]">CCS · Live</span>
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
    <div className="rounded-xl border border-slate-200/70 bg-slate-50 p-4">
      <div className="flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.12em]" style={{ color: "#64748B" }}>{label}</p>
        <Icon className="h-3.5 w-3.5 text-[#009AE2]" />
      </div>
      <p className="mt-2 text-[28px] font-medium tracking-tight text-slate-900 tabular-nums">{value}</p>
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
    <section className="relative border-y border-slate-200/70 bg-[color:var(--card)]/40">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-2.5 text-[12.5px] text-slate-600">
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
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <Reveal>
        <div className="text-center">
          <p className="text-[12px] font-medium tracking-[0.15em] text-[#009AE2]">// INDUSTRIES</p>
          <h2
            className="mx-auto mt-3 font-semibold text-slate-900"
            style={{ fontSize: "clamp(32px, 5vw, 48px)", letterSpacing: "-0.025em", maxWidth: "600px", lineHeight: 1.15 }}
          >
            Trusted across business categories
          </h2>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map(({ i: Icon, t, d }, idx) => (
          <Reveal key={t} delay={idx * 80}>
            <div
              className="group relative h-full rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: "rgba(15,23,42,0.03)",
                border: "1px solid rgba(15,23,42,0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,154,226,0.04)";
                e.currentTarget.style.borderColor = "rgba(0,154,226,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(15,23,42,0.03)";
                e.currentTarget.style.borderColor = "rgba(15,23,42,0.07)";
              }}
            >
              <div
                className="grid h-11 w-11 place-items-center rounded-[12px]"
                style={{ background: "rgba(0,154,226,0.1)" }}
              >
                <Icon className="h-5 w-5 text-[#009AE2]" />
              </div>
              <h3 className="mt-4 text-[16px] font-semibold text-slate-900">{t}</h3>
              <p className="mt-1.5 text-[14px] leading-[1.6]" style={{ color: "#64748B" }}>{d}</p>
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
  return (
    <section id="solutions" className="scroll-mt-24 relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-[12px] font-medium tracking-[0.15em] text-[#009AE2]">// CATEGORY EXPLORER</p>
            <h2
              className="mx-auto mt-3 font-semibold text-slate-900"
              style={{ fontSize: "clamp(32px, 5vw, 48px)", letterSpacing: "-0.025em", maxWidth: "720px", lineHeight: 1.15 }}
            >
              One catalogue. <span className="text-[#009AE2]">Every workplace consumable.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ i: Icon, name, d }, idx) => (
            <Reveal key={name} delay={idx * 60}>
              <div
                className="group relative h-full overflow-hidden rounded-[18px] transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  padding: "24px 20px",
                  background: "rgba(15,23,42,0.025)",
                  border: "1px solid rgba(15,23,42,0.06)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,154,226,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(15,23,42,0.06)"; }}
              >
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 w-[3px] origin-bottom scale-y-0 bg-[#009AE2] transition-transform duration-500 group-hover:scale-y-100"
                  style={{ height: "100%" }}
                />
                <div
                  className="grid h-[52px] w-[52px] place-items-center rounded-[14px] transition-colors duration-300 group-hover:bg-[rgba(0,154,226,0.15)]"
                  style={{ background: "rgba(0,154,226,0.08)" }}
                >
                  <Icon className="h-[26px] w-[26px] text-[#009AE2]" />
                </div>
                <h3 className="mt-3.5 text-[15px] font-semibold text-slate-900">{name}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.5]" style={{ color: "#64748B" }}>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-900 transition-all duration-200 hover:border-[#009AE2]/40 hover:text-[#009AE2] hover:shadow-[0_0_24px_rgba(0,154,226,0.2)]"
            style={{ padding: "12px 28px" }}
          >
            Browse full catalogue <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   WHY US
================================================================= */
const WHY = [
  { i: ShieldCheck, t: "Single Procurement Partner", d: "Consolidate 8+ vendors into one accountable supplier. One PO, one catalogue, one accountable contact across every workplace category." },
  { i: Zap, t: "Sub-60-min Quote SLA", d: "Structured quotations within an hour of enquiry." },
  { i: Repeat, t: "Recurring Monthly Supply", d: "Locked quantities, scheduled dispatch, no follow-ups." },
  { i: ReceiptText, t: "Clean GST Invoicing", d: "Single tax invoice per cycle — finance-team friendly." },
  { i: BadgeCheck, t: "Brand-Assured Quality", d: "Diversey, Taski, 3M, Godrej, Dabur and more." },
  { i: Globe2, t: "Pan-Hyderabad Coverage", d: "All major business clusters across the city." },
];
function WhyUs() {
  return (
    <section
      id="why"
      className="scroll-mt-24 relative"
      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,154,226,0.05) 0%, transparent 60%)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-[12px] font-medium tracking-[0.15em] text-[#009AE2]">// WHY CRYSTAL</p>
            <h2
              className="mx-auto mt-3 font-semibold text-slate-900"
              style={{ fontSize: "clamp(32px, 5.5vw, 52px)", letterSpacing: "-0.03em", maxWidth: "700px", lineHeight: 1.15 }}
            >
              Built for procurement teams, <span className="italic text-[#009AE2]">not retail shoppers.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ i: Icon, t, d }, idx) => {
            const isHero = idx === 0;
            return (
              <Reveal key={t} delay={idx * 80}>
                <div
                  className={`group h-full rounded-[20px] transition-all duration-300 ${isHero ? "lg:col-span-2" : ""}`}
                  style={{
                    padding: "28px 24px",
                    background: isHero ? "rgba(0,154,226,0.05)" : "rgba(15,23,42,0.03)",
                    border: isHero ? "1px solid rgba(0,154,226,0.15)" : "1px solid rgba(15,23,42,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,154,226,0.25)";
                    e.currentTarget.style.background = "rgba(0,154,226,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isHero ? "rgba(0,154,226,0.15)" : "rgba(15,23,42,0.07)";
                    e.currentTarget.style.background = isHero ? "rgba(0,154,226,0.05)" : "rgba(15,23,42,0.03)";
                  }}
                >
                  <div
                    className="grid h-[52px] w-[52px] place-items-center rounded-full"
                    style={{ background: "rgba(0,154,226,0.1)" }}
                  >
                    <Icon className="h-5 w-5 text-[#009AE2]" />
                  </div>
                  <h3 className={`mt-4 font-semibold text-slate-900 ${isHero ? "text-[18px]" : "text-[15px]"}`}>{t}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6]" style={{ color: "#64748B" }}>{d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
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
    <section className="relative">
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-8 md:py-28 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.15em] text-[#009AE2]">// TECHNOLOGY-ENABLED PROCUREMENT</p>
            <h2
              className="mt-3 font-semibold text-slate-900"
              style={{ fontSize: "clamp(30px, 4vw, 44px)", letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              A procurement platform —
              <br />
              <span className="text-[#009AE2]">not a vendor list.</span>
            </h2>
            <p className="mt-6 max-w-[420px] text-[16px] leading-[1.7]" style={{ color: "#64748B" }}>
              We're building Hyderabad's first procurement-first workplace consumables partner.
              Operational rigour you'd expect from enterprise SaaS — applied to the supplies
              your facility actually runs on.
            </p>
          </Reveal>
          <div className="mt-8 divide-y divide-slate-200/70">
            {features.map(({ i: Icon, t, d }, idx) => (
              <Reveal key={t} delay={idx * 80}>
                <div className="flex items-start gap-4 py-5">
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px]"
                    style={{ background: "rgba(0,154,226,0.08)" }}
                  >
                    <Icon className="h-5 w-5 text-[#009AE2]" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-slate-900">{t}</p>
                    <p className="mt-1 text-[13px] leading-[1.6]" style={{ color: "#64748B" }}>{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-3xl"
              style={{ boxShadow: "0 30px 80px rgba(0,154,226,0.08)" }}
            />
            <div className="float-y">
              <LiveDashboard />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LiveDashboard() {
  return (
    <div
      className="overflow-hidden rounded-[20px]"
      style={{
        padding: "24px",
        background: "rgba(15,23,42,0.035)",
        border: "1px solid rgba(15,23,42,0.08)",
      }}
    >
      <div className="flex items-center justify-between border-b border-slate-200/70 pb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-900">ITSPL CORP</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Active
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200/70">
        <DashCell l="Monthly Spend" v="₹84,200" />
        <DashCell l="Orders / Mo" v="4" />
        <DashCell l="SKUs Tracked" v="37" />
      </div>
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: "#64748B" }}>Consumption · Last 6 mo</p>
          <span className="text-[11px] text-[#009AE2]">burn 68%</span>
        </div>
        <SparkBars />
      </div>
      <div className="mt-5 space-y-2">
        {[
          ["Washroom Tissue 2-ply", "40 bundles", "On schedule", "emerald"],
          ["Floor Cleaner 5L", "12 cans", "Dispatched", "cyan"],
          ["Hand Wash 5L", "8 cans", "Confirmed", "blue"],
        ].map(([n, q, s, color]) => {
          const palette: Record<string, string> = {
            emerald: "bg-emerald-100 text-emerald-700",
            cyan: "bg-[#009AE2]/15 text-[#009AE2]",
            blue: "bg-blue-100 text-blue-700",
          };
          return (
            <div key={n} className="flex items-center justify-between rounded-[10px] bg-slate-50 px-3 py-2.5 text-[13px]">
              <span className="text-slate-700">{n}</span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="font-mono text-slate-500">{q}</span>
                <span className={`rounded-full px-2 py-0.5 ${palette[color]}`}>{s}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function DashCell({ l, v }: { l: string; v: string }) {
  return (
    <div className="px-3 first:pl-0 last:pr-0">
      <p className="text-[10px] uppercase tracking-[0.12em]" style={{ color: "#64748B" }}>{l}</p>
      <p className="mt-1.5 text-[20px] font-medium text-slate-900 tabular-nums">{v}</p>
    </div>
  );
}
function SparkBars() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const data = [40, 55, 48, 70, 62, 85, 72, 90, 68, 78, 88, 95];
  return (
    <div ref={ref} className="flex h-20 items-end gap-1.5">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-[3px] transition-all ease-out"
          style={{
            height: show ? `${v}%` : "0%",
            background: `linear-gradient(180deg, rgba(0,154,226,${0.4 + (v / 100) * 0.4}), rgba(0,154,226,${0.2 + (v / 100) * 0.3}))`,
            transitionDuration: "800ms",
            transitionDelay: `${i * 80}ms`,
          }}
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
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 ring-1 ring-slate-200">
            <div aria-hidden className="absolute inset-0 bg-grid-sm opacity-25" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              {/* faint river / outline path */}
              <path d="M5,55 C25,40 45,65 60,50 S95,55 98,40" stroke="rgba(0,154,226,0.18)" strokeWidth="0.4" fill="none" />
              <path d="M10,80 C30,75 55,85 80,70 S95,60 99,55" stroke="rgba(0,154,226,0.12)" strokeWidth="0.4" fill="none" />
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
                  <span className={`relative grid h-3 w-3 place-items-center rounded-full ${isActive ? "bg-[color:var(--electric)]" : "bg-slate-300"} transition`}>
                    {isActive && <span className="absolute inset-0 animate-ping rounded-full bg-[color:var(--electric)] opacity-60" />}
                  </span>
                  <span className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] transition ${isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-600"}`}>
                    {c.name}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 backdrop-blur">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--electric)]">Active cluster</p>
            <h3 className="mt-2 text-3xl font-semibold text-slate-900">{current.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{current.accounts} accounts supplied · same-day & next-day delivery windows.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Same-day pickup", "Scheduled dispatch", "Local warehouse", "Dedicated route"].map((b) => (
                <div key={b} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--electric)]" />{b}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">Hover any pin to explore the cluster.</p>
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
    <section className="relative border-y border-slate-200/70 bg-[color:var(--card)]/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal><SectionLabel kicker="// Customer Success" title="From scattered vendors to invisible procurement." /></Reveal>
        <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STORY.map(({ i: Icon, k, t, d }, idx) => (
            <Reveal key={k} delay={idx * 100}>
              <div className="relative h-full rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--electric)]">{`0${idx + 1}`}</span>
                  <Icon className="h-4 w-4 text-[color:var(--electric)]" />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{k}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{d}</p>
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
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:grid-cols-3 lg:grid-cols-6">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="group flex h-24 items-center justify-center bg-[color:var(--card)]/60 px-4 transition hover:bg-slate-100"
            >
              <span className="font-display text-base font-semibold tracking-tight text-slate-500 transition group-hover:text-slate-900">
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
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-[12px] font-medium tracking-[0.15em] text-[#009AE2]">// PROCUREMENT PROCESS</p>
            <h2
              className="mx-auto mt-3 font-semibold"
              style={{ fontSize: "clamp(30px, 5vw, 48px)", letterSpacing: "-0.025em", maxWidth: "780px", lineHeight: 1.15, color: "#fff" }}
            >
              From enquiry to recurring supply — <span className="text-[#009AE2]">in days, not weeks.</span>
            </h2>
          </div>
        </Reveal>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-[22px] hidden h-px bg-slate-200 lg:block" />
          <div aria-hidden className="timeline-pulse absolute left-0 right-0 top-[22px] hidden h-px lg:block" />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((s, idx) => (
              <Reveal key={s.n} delay={idx * 120}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative">
                    <span aria-hidden className="absolute inset-0 rounded-full bg-[#009AE2]/30" style={{ animation: `pulse-ring 1.8s ${idx * 0.15}s ease-out infinite` }} />
                    <div
                      className="relative grid h-11 w-11 place-items-center rounded-full font-mono text-[13px] font-semibold text-[#009AE2]"
                      style={{ border: "1.5px solid rgba(0,154,226,0.4)", background: "#FFFFFF" }}
                    >
                      {s.n}
                    </div>
                  </div>
                  <h3 className="mt-3.5 text-[15px] font-semibold text-slate-900">{s.t}</h3>
                  <p className="mt-1.5 max-w-[180px] text-[13px] leading-[1.55]" style={{ color: "#64748B" }}>{s.d}</p>
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
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,154,226,0.04) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:px-8 md:py-32">
        <div className="mx-auto inline-flex spin-slow" style={{ width: 60, height: 60 }}>
          <CrystalMark className="h-[60px] w-[60px]" cyan />
        </div>
        <h2
          className="mt-8 text-balance font-semibold text-slate-900"
          style={{ fontSize: "clamp(32px, 5.5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.15 }}
        >
          To become India's most trusted
          <br />
          technology-enabled workplace
          <br />
          <span className="text-[#009AE2]">procurement platform</span>
          <br />
          <span className="text-[0.85em]">— starting from Hyderabad.</span>
        </h2>
        <p
          className="mx-auto mt-6"
          style={{ fontSize: "17px", color: "#64748B", maxWidth: "560px", lineHeight: 1.7 }}
        >
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
      `Hi Crystal Clean Solutions,`, ``,
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
    <section id="enquiry" className="scroll-mt-24 relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="text-[12px] font-medium tracking-[0.15em] text-[#009AE2]">// CUSTOMER INQUIRY</p>
          <h2 className="mt-3 font-semibold text-slate-900" style={{ fontSize: "clamp(30px, 4vw, 44px)", letterSpacing: "-0.025em" }}>
            Request a quotation.
          </h2>
          <p className="mt-5 max-w-md text-[16px]" style={{ color: "#64748B" }}>
            Share your requirement — typical quote turnaround is under 60 minutes during business hours.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <ContactRow icon={Phone} label="CALL" value={SITE.phone} href={`tel:+${SITE.phoneRaw}`} copyText={SITE.phone} />
            <ContactRow icon={MessageCircle} label="WHATSAPP" value="Chat with procurement" href={WHATSAPP} />
            <ContactRow icon={Mail} label="EMAIL" value={SITE.email} href={`mailto:${SITE.email}`} copyText={SITE.email} />
            <ContactRow icon={MapPin} label="OFFICE" value={SITE.address} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-[18px] p-6 md:p-8"
            style={{ background: "rgba(15,23,42,0.03)", border: "1px solid rgba(15,23,42,0.07)" }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FilledField name="company" label="COMPANY *" required />
              <FilledField name="name" label="YOUR NAME *" required />
              <FilledField name="phone" label="PHONE *" required />
              <FilledField name="email" label="EMAIL" type="email" />
              <div className="sm:col-span-2">
                <label htmlFor="ccs-industry" className="block text-[11px] font-medium uppercase tracking-[0.06em]" style={{ color: "#64748B", marginBottom: 6 }}>INDUSTRY</label>
                <select
                  id="ccs-industry"
                  name="industry"
                  defaultValue="Corporate / IT"
                  className="w-full rounded-[10px] px-4 py-3 text-[14px] text-slate-900 outline-none transition focus:border-[#009AE2] focus:shadow-[0_0_0_3px_rgba(0,154,226,0.1)]"
                  style={{ background: "rgba(15,23,42,0.04)", border: "1px solid rgba(15,23,42,0.08)" }}
                >
                  {["Corporate / IT", "Hospital / Clinic", "Hotel / Hospitality", "Education", "Co-working", "Other"].map((o) => (
                    <option key={o} className="bg-white text-slate-900">{o}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="ccs-message" className="block text-[11px] font-medium uppercase tracking-[0.06em]" style={{ color: "#64748B", marginBottom: 6 }}>REQUIREMENT *</label>
                <textarea
                  id="ccs-message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-[10px] px-4 py-3 text-[14px] text-slate-900 outline-none transition focus:border-[#009AE2] focus:shadow-[0_0_0_3px_rgba(0,154,226,0.1)]"
                  style={{ background: "rgba(15,23,42,0.04)", border: "1px solid rgba(15,23,42,0.08)" }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-7 w-full rounded-[12px] text-white transition-all duration-200 hover:scale-[1.01] hover:brightness-110 hover:shadow-[0_14px_40px_rgba(0,154,226,0.35)]"
              style={{
                background: "linear-gradient(135deg, #009AE2 0%, #00BF63 100%)",
                padding: "16px",
                fontSize: "15px",
                fontWeight: 700,
                boxShadow: "0 10px 30px -10px rgba(0,154,226,0.45)",
              }}
            >
              {sent ? "Opening WhatsApp…" : "Send Enquiry"}
            </button>
            <p className="mt-3 text-center text-[12px]" style={{ color: "#64748B" }}>
              Submissions open WhatsApp with your enquiry pre-filled.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FilledField({
  name, label, type = "text", required,
}: { name: string; label: string; type?: string; required?: boolean }) {
  const id = `ccs-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-medium uppercase tracking-[0.06em]" style={{ color: "#64748B", marginBottom: 6 }}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        className="w-full rounded-[10px] px-4 py-3 text-[14px] text-slate-900 outline-none transition focus:border-[#009AE2] focus:shadow-[0_0_0_3px_rgba(0,154,226,0.1)]"
        style={{ background: "rgba(15,23,42,0.04)", border: "1px solid rgba(15,23,42,0.08)" }}
      />
    </div>
  );
}

function ContactRow({
  icon: Icon, label, value, href, copyText,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string; copyText?: string }) {
  const onClick = (e: React.MouseEvent) => {
    if (!copyText) return;
    e.preventDefault();
    navigator.clipboard?.writeText(copyText).then(() => {
      window.dispatchEvent(new CustomEvent("ccs:toast", { detail: `Copied ${copyText}` }));
    });
  };
  const inner = (
    <div
      className="flex items-start gap-3 rounded-[14px] transition-all duration-200 hover:-translate-y-[3px]"
      style={{ padding: "16px 20px", background: "rgba(15,23,42,0.03)", border: "1px solid rgba(15,23,42,0.07)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,154,226,0.3)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(15,23,42,0.07)"; }}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#009AE2]" />
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: "#64748B" }}>{label}</p>
        <p className="mt-1 truncate text-[14px] font-medium text-slate-900">{value}</p>
      </div>
    </div>
  );
  if (!href) return inner;
  return (
    <a href={href} onClick={onClick} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  );
}

/* =================================================================
   COPY TOAST HOST
================================================================= */
function CopyToastHost() {
  const [msg, setMsg] = React.useState<string | null>(null);
  React.useEffect(() => {
    const onToast = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail);
      const id = setTimeout(() => setMsg(null), 2000);
      return () => clearTimeout(id);
    };
    window.addEventListener("ccs:toast", onToast);
    return () => window.removeEventListener("ccs:toast", onToast);
  }, []);
  if (!msg) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-[60] flex justify-center sm:bottom-10">
      <div
        className="rounded-full px-4 py-2 text-[13px] font-medium text-[#009AE2] stagger-in"
        style={{ background: "rgba(0,154,226,0.1)", border: "1px solid rgba(0,154,226,0.3)", backdropFilter: "blur(12px)" }}
      >
        {msg}
      </div>
    </div>
  );
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
      <h2 className={`mt-3 text-balance text-3xl font-semibold leading-tight text-slate-900 md:text-5xl ${align === "center" ? "mx-auto max-w-3xl" : ""}`}>
        {title}
      </h2>
    </div>
  );
}
