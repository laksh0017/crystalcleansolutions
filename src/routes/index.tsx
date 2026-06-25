import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Download, MessageCircle, Sparkles, Check, ShieldCheck, Zap, Repeat,
  ReceiptText, BadgeCheck, Globe2, Building2, Stethoscope, Hotel, GraduationCap,
  Briefcase, Factory, Droplets, FileText, FlaskConical, Trash2, Wrench, PackageOpen,
  Wind, Coffee, BarChart3, Layers, RefreshCw, ListChecks, TrendingDown, Link2, Activity,
  Mail, Phone, MapPin, Send, ChevronRight,
} from "lucide-react";
import { SITE, WHATSAPP } from "@/lib/site";
import { CrystalMark } from "@/components/Logo";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import {
  FadeUp, StaggerGroup, StaggerItem, MagneticButton, TiltCard, Stat,
} from "@/components/MotionPrimitives";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Crystal Clean Solutions | Hyderabad's B2B Procurement Partner" },
      {
        name: "description",
        content:
          "Hyderabad's technology-enabled B2B procurement partner for housekeeping, hygiene, cleaning chemicals, tissue, dispensers and pantry supplies — one accountable supplier, single GST invoice, recurring monthly delivery.",
      },
      { property: "og:title", content: "Crystal Clean Solutions — B2B Procurement Partner, Hyderabad" },
      {
        property: "og:description",
        content:
          "Enterprise-grade workplace consumables procurement for corporates, hospitals, hotels, education and co-working spaces across Hyderabad.",
      },
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

/* ============================================================== */
/*  HOMEPAGE                                                       */
/* ============================================================== */

function HomePage() {
  return (
    <div className="bg-white text-[#0D1117] font-sans">
      <Hero />
      <Industries />
      <Products />
      <WhyCrystal />
      <TechPlatform />
      <HyderabadPresence />
      <HowItWorks />
      <ProcessTimeline />
      <Brands />
      <Mission />
      <Contact />
      <PreFooterCTA />
    </div>
  );
}

/* ---------------- Shared ---------------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00C896]">
    {children}
  </p>
);

const SectionShell = ({
  id,
  dark = false,
  off = false,
  children,
  className = "",
}: {
  id?: string;
  dark?: boolean;
  off?: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    id={id}
    className={`relative scroll-mt-24 py-24 md:py-32 ${
      dark ? "bg-[#0A0F1E] text-white" : off ? "bg-[#F8FAFB]" : "bg-white"
    } ${className}`}
  >
    {dark && (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    )}
    <div className="relative mx-auto max-w-7xl px-6 md:px-8">{children}</div>
  </section>
);

/* ============================================================== */
/*  1. HERO                                                        */
/* ============================================================== */
function Hero() {
  const [typed, setTyped] = React.useState("");
  const fullText =
    "Everything your workplace consumes — housekeeping, hygiene, chemicals, pantry, equipment — delivered by one accountable partner, on a single GST invoice, every month.";

  React.useEffect(() => {
    const start = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setTyped(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(id);
      }, 14);
    }, 500);
    return () => clearTimeout(start);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white pt-32 pb-20">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-6xl px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#00C896]/25 bg-[#00C896]/10 px-4 py-1.5 text-[12px] font-medium text-[#00834A]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C896] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C896]" />
          </span>
          Technology-Enabled B2B Procurement · Hyderabad
        </motion.div>

        <h1 className="font-display mt-7 text-[clamp(40px,7vw,72px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
          <SplitLine delay={0.15}>Hyderabad's B2B</SplitLine>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block bg-gradient-to-r from-[#0057A0] via-[#0EA5E9] to-[#00C896] bg-clip-text text-transparent"
            >
              Procurement Partner
            </motion.span>
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-[560px] text-[17px] leading-[1.7] text-slate-500 min-h-[100px]">
          {typed}
          <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-[#00C896]" />
        </p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 1.2 } } }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 220, damping: 18 } } }}>
            <MagneticButton
              as="a"
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#00C896] px-8 py-4 text-[14px] font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(0,200,150,0.4)]"
            >
              Request Quotation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </MagneticButton>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 220, damping: 18 } } }}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-8 py-4 text-[14px] font-semibold text-slate-800 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download Catalogue
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-6 text-[12.5px] text-slate-400"
        >
          {["GST-Compliant", "Recurring Supply", "60-min Quote", "Pan-Hyderabad"].map((t, i) => (
            <span key={t}>
              <Check className="mr-1 inline h-3.5 w-3.5 text-[#00C896]" />
              {t}
              {i < 3 && <span className="mx-3 text-slate-300">|</span>}
            </span>
          ))}
        </motion.p>

        <ProcurementConsole />
      </div>
    </section>
  );
}

function SplitLine({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function ProcurementConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="relative mx-auto mt-14 max-w-[720px] overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_30px_80px_-30px_rgba(0,87,160,0.35)] backdrop-blur-xl md:p-7"
    >
      <div className="shine-sweep"><div className="shine-sweep-bar" /></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C896] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C896]" />
          </span>
          Procurement Console
        </div>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00834A]">CCS · Live</span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-y-7 md:grid-cols-4">
        <ConsoleStat label="On-time Delivery" value={<><Stat end={99.1} decimals={1} suffix="%" /></>} />
        <ConsoleStat label="Quote SLA" value={<>&lt; 60<span className="ml-1 text-[14px] font-medium text-slate-500">min</span></>} />
        <ConsoleStat label="Active Accounts" value={<><Stat end={120} suffix="+" /></>} />
        <ConsoleStat label="Categories Supplied" value={<><Stat end={300} suffix="+" /></>} />
      </div>
    </motion.div>
  );
}

function ConsoleStat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="text-left">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 font-mono text-[26px] font-bold text-[#0D1117] md:text-[28px]">{value}</p>
    </div>
  );
}

/* ============================================================== */
/*  2. INDUSTRIES                                                  */
/* ============================================================== */
const INDUSTRIES = [
  { icon: Briefcase, t: "IT & Corporate Offices", d: "Tech parks across Hitech City, Gachibowli & Financial District." },
  { icon: Stethoscope, t: "Hospitals & Clinics", d: "Hospital-grade disinfectants, color-coded waste, PPE supplies." },
  { icon: Hotel, t: "Hotels & Hospitality", d: "Premium washroom amenities, housekeeping & laundry essentials." },
  { icon: GraduationCap, t: "Educational Institutions", d: "Schools, colleges and training campuses — bulk recurring supply." },
  { icon: Building2, t: "Co-working Spaces", d: "Multi-floor hygiene programs with predictable monthly billing." },
  { icon: Factory, t: "Commercial Facilities", d: "Manufacturing, warehouses and large retail facility hygiene." },
];

function Industries() {
  return (
    <SectionShell id="industries">
      <div className="text-center">
        <Eyebrow>// Industries</Eyebrow>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
          Trusted across{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#0057A0] to-[#00C896] bg-clip-text text-transparent">business</span>
            <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M2 5 Q 100 0 198 5" stroke="url(#g1)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#0057A0" />
                  <stop offset="100%" stopColor="#00C896" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          categories
        </h2>
      </div>
      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((c) => (
          <StaggerItem key={c.t}>
            <TiltCard className="group h-full rounded-2xl border border-slate-100 bg-[#F8FAFB] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C896]/25 hover:bg-white hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-[#0057A0]">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-6 text-[20px] font-bold tracking-tight text-[#0D1117]">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-slate-500">{c.d}</p>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}

/* ============================================================== */
/*  3. PRODUCT CATALOGUE                                           */
/* ============================================================== */
const PRODUCTS = [
  { icon: Droplets, t: "Washroom Hygiene", d: "Hand wash, soaps, sanitizers & dispensers." },
  { icon: FileText, t: "Tissue Solutions", d: "Toilet rolls, M-fold, C-fold & kitchen tissues." },
  { icon: FlaskConical, t: "Cleaning Chemicals", d: "Floor cleaners, disinfectants, glass care." },
  { icon: Trash2, t: "Garbage & Waste", d: "Biodegradable & color-coded waste bags." },
  { icon: Wrench, t: "Janitorial Tools", d: "Mops, brooms, brushes, buckets, gloves." },
  { icon: PackageOpen, t: "Dispensers", d: "Soap, sanitizer, tissue dispensers." },
  { icon: Wind, t: "Air Care", d: "Odonil, room fresheners, urinal blocks." },
  { icon: Coffee, t: "Pantry & Equipment", d: "Pantry consumables & facility equipment." },
];

function Products() {
  return (
    <SectionShell id="products" off>
      <div className="text-center">
        <Eyebrow>// Products</Eyebrow>
        <h2 className="font-display mt-4 text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
          <SplitLine>One catalogue.</SplitLine>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block bg-gradient-to-r from-[#0057A0] to-[#00C896] bg-clip-text text-transparent"
            >
              Every workplace consumable.
            </motion.span>
          </span>
        </h2>
      </div>
      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => (
          <StaggerItem key={p.t}>
            <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-[#0057A0] transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mt-5 text-[16px] font-bold tracking-tight text-[#0D1117]">{p.t}</h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-slate-500">{p.d}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-900 px-7 py-3 text-[13.5px] font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
        >
          Browse full catalogue <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </SectionShell>
  );
}

/* ============================================================== */
/*  4. WHY CRYSTAL                                                 */
/* ============================================================== */
const WHY = [
  { icon: ShieldCheck, t: "Single Procurement Partner", d: "Consolidate 8+ vendors into one accountable supplier. One PO, one catalogue, one accountable contact across every workplace category." },
  { icon: Zap, t: "Sub-60-min Quote SLA", d: "Structured quotations within an hour of enquiry." },
  { icon: Repeat, t: "Recurring Monthly Supply", d: "Locked quantities, scheduled dispatch, no follow-ups." },
  { icon: ReceiptText, t: "Clean GST Invoicing", d: "Single tax invoice per cycle — finance-team friendly." },
  { icon: BadgeCheck, t: "Brand-Assured Quality", d: "Diversey, Taski, 3M, Godrej, Dabur and more." },
  { icon: Globe2, t: "Pan-Hyderabad Coverage", d: "All major business clusters across the city." },
];

function WhyCrystal() {
  return (
    <SectionShell id="why" dark>
      <div className="text-center">
        <Eyebrow>// Why Crystal</Eyebrow>
        <h2 className="font-display mt-4 text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
          <SplitLine>Built for procurement teams,</SplitLine>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block italic bg-gradient-to-r from-[#00C896] via-[#5eead4] to-[#00C896] bg-clip-text text-transparent"
            >
              not retail shoppers.
            </motion.span>
          </span>
        </h2>
      </div>
      <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w) => (
          <StaggerItem key={w.t}>
            <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#00C896]/40 hover:bg-white/[0.08] hover:shadow-[0_24px_60px_-30px_rgba(0,200,150,0.45)]">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#00C896]/10 text-[#00C896] transition-transform duration-300 group-hover:scale-110">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-6 text-[19px] font-bold text-white">{w.t}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-slate-400">{w.d}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}

/* ============================================================== */
/*  5. TECHNOLOGY PLATFORM                                         */
/* ============================================================== */
function TechPlatform() {
  const features = [
    { icon: BarChart3, t: "Procurement Dashboards", d: "Live order status, consumption analytics and monthly burn-rate." },
    { icon: Layers, t: "Structured Catalogue", d: "300+ SKUs mapped by workplace function, not random product lists." },
    { icon: RefreshCw, t: "Subscription Orders", d: "Set-and-forget recurring schedules with automatic GST invoicing." },
    { icon: Zap, t: "Automated Quotations", d: "Templated RFQ responses with consistent pricing logic." },
  ];
  return (
    <SectionShell id="solutions">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <FadeUp>
          <Eyebrow>// Technology-Enabled Procurement</Eyebrow>
          <h2 className="font-display mt-4 text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            A procurement platform —{" "}
            <span className="block bg-gradient-to-r from-[#0057A0] to-[#00C896] bg-clip-text text-transparent">not a vendor list.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-slate-500">
            We're building Hyderabad's first procurement-first workplace consumables partner.
            Operational rigour you'd expect from enterprise SaaS — applied to the supplies your facility actually runs on.
          </p>
          <div className="mt-10 space-y-6">
            {features.map((f, i) => (
              <FadeUp key={f.t} delay={0.05 * i}>
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0057A0]">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-[16px] font-bold tracking-tight text-[#0D1117]">{f.t}</p>
                    <p className="mt-1 text-[14px] leading-[1.65] text-slate-500">{f.d}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <DashboardMockup />
        </FadeUp>
      </div>
    </SectionShell>
  );
}

function DashboardMockup() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const bars = [42, 58, 35, 64, 48, 72, 55, 80, 62, 75, 68, 88];
  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]">
      <div className="shine-sweep"><div className="shine-sweep-bar" /></div>
      <div className="flex items-center justify-between">
        <p className="font-mono text-[12px] font-bold uppercase tracking-[0.15em] text-slate-400">ITSPL CORP</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10.5px] font-semibold text-emerald-700">
          <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" /></span>
          Active
        </span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <MetricCell label="Monthly Spend" value="₹84,200" />
        <MetricCell label="Orders / mo" value="4" />
        <MetricCell label="SKUs Tracked" value="37" />
      </div>
      <div className="mt-7 flex items-end justify-between">
        <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-400">Consumption · last 6 mo</p>
        <p className="font-mono text-[11px] font-semibold text-[#00834A]">burn 68%</p>
      </div>
      <div className="mt-3 flex h-24 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={inView ? { height: `${h}%` } : { height: 0 }}
            transition={{ duration: 0.7, delay: 0.06 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#0057A0] to-[#0EA5E9]"
          />
        ))}
      </div>
      <div className="mt-7 space-y-3">
        <OrderRow name="Washroom Tissue 2-ply" qty="40 bundles" tone="green" status="On schedule" />
        <OrderRow name="Floor Cleaner 5L" qty="12 cans" tone="blue" status="Dispatched" />
        <OrderRow name="Hand Wash 5L" qty="8 cans" tone="amber" status="Confirmed" />
      </div>
    </div>
  );
}

const MetricCell = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
    <p className="font-display mt-1.5 text-[22px] font-extrabold tracking-tight text-[#0D1117]">{value}</p>
  </div>
);

const OrderRow = ({ name, qty, status, tone }: { name: string; qty: string; status: string; tone: "green" | "blue" | "amber" }) => {
  const colors = {
    green: "bg-emerald-50 text-emerald-700",
    blue: "bg-sky-50 text-sky-700",
    amber: "bg-amber-50 text-amber-700",
  }[tone];
  return (
    <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-[13px]">
      <span className="font-medium text-slate-800">{name}</span>
      <span className="font-mono text-[11.5px] text-slate-400">{qty}</span>
      <span className={`rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${colors}`}>{status}</span>
    </div>
  );
};

/* ============================================================== */
/*  6. HYDERABAD MAP                                               */
/* ============================================================== */
const CLUSTERS: { id: string; name: string; x: number; y: number; accounts: number }[] = [
  { id: "hitech", name: "Hitech City", x: 180, y: 140, accounts: 18 },
  { id: "gachibowli", name: "Gachibowli", x: 160, y: 200, accounts: 14 },
  { id: "fd", name: "Financial District", x: 200, y: 250, accounts: 11 },
  { id: "madhapur", name: "Madhapur", x: 230, y: 165, accounts: 8 },
  { id: "banjara", name: "Banjara Hills", x: 305, y: 180, accounts: 9 },
  { id: "jubilee", name: "Jubilee Hills", x: 260, y: 155, accounts: 12 },
  { id: "manikonda", name: "Manikonda", x: 250, y: 230, accounts: 6 },
  { id: "secunderabad", name: "Secunderabad", x: 380, y: 110, accounts: 7 },
];

function HyderabadPresence() {
  const [active, setActive] = React.useState("jubilee");
  const cur = CLUSTERS.find((c) => c.id === active)!;
  return (
    <SectionShell>
      <div className="text-center">
        <Eyebrow>// Hyderabad Presence</Eyebrow>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
          On the ground, across every <span className="bg-gradient-to-r from-[#0057A0] to-[#00C896] bg-clip-text text-transparent">business cluster.</span>
        </h2>
      </div>
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <FadeUp>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
            <svg viewBox="0 0 460 340" className="h-auto w-full">
              <defs>
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#0057A0" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="460" height="340" fill="url(#bgGrad)" />
              {/* abstract map outline */}
              <path
                d="M 60 180 Q 110 80, 220 90 Q 330 70, 400 130 Q 430 200, 380 260 Q 280 310, 180 280 Q 70 260, 60 180 Z"
                fill="#F1F5F9"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
              {/* connecting lines */}
              {CLUSTERS.map((c, i) =>
                CLUSTERS.slice(i + 1).map((c2) => (
                  <path
                    key={`${c.id}-${c2.id}`}
                    d={`M ${c.x} ${c.y} Q ${(c.x + c2.x) / 2} ${(c.y + c2.y) / 2 - 12} ${c2.x} ${c2.y}`}
                    stroke="#CBD5E1"
                    strokeWidth="0.6"
                    fill="none"
                    strokeDasharray="2 3"
                    opacity="0.4"
                  />
                )),
              )}
              {/* pins */}
              {CLUSTERS.map((c) => {
                const isActive = c.id === active;
                return (
                  <g
                    key={c.id}
                    onMouseEnter={() => setActive(c.id)}
                    onClick={() => setActive(c.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {isActive && (
                      <circle cx={c.x} cy={c.y} r="14" fill="#0057A0" opacity="0.2">
                        <animate attributeName="r" from="8" to="22" dur="1.6s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.4" to="0" dur="1.6s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={isActive ? 7 : 4}
                      fill={isActive ? "#0057A0" : "#94A3B8"}
                      stroke={isActive ? "#fff" : "transparent"}
                      strokeWidth={isActive ? 2 : 0}
                      className="transition-all"
                    />
                    <text
                      x={c.x + 10}
                      y={c.y + 4}
                      fontSize="10"
                      fontWeight={isActive ? 700 : 500}
                      fill={isActive ? "#0057A0" : "#64748B"}
                      className="select-none"
                    >
                      {c.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="h-full rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-[#F8FAFB] p-10 shadow-md">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00C896]">Active Cluster</p>
            <motion.h3
              key={cur.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display mt-3 text-[32px] font-extrabold tracking-tight text-[#0D1117]"
            >
              {cur.name}
            </motion.h3>
            <motion.p
              key={cur.id + "-sub"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-2 text-[14.5px] text-slate-500"
            >
              {cur.accounts}+ accounts supplied · same-day & next-day delivery windows.
            </motion.p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Same-day pickup", "Scheduled dispatch", "Local warehouse", "Dedicated route"].map((p) => (
                <div key={p} className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5 text-[13px] text-slate-700">
                  <Check className="h-3.5 w-3.5 text-[#00C896]" /> {p}
                </div>
              ))}
            </div>
            <p className="mt-8 text-[12px] text-slate-400">Hover any pin to explore the cluster.</p>
          </div>
        </FadeUp>
      </div>
    </SectionShell>
  );
}

/* ============================================================== */
/*  7. HOW IT WORKS                                                */
/* ============================================================== */
const STEPS_HIW = [
  { n: "01", label: "Problem", icon: TrendingDown, tone: "text-rose-500", t: "8 vendors, missed deliveries, messy invoicing.", d: "Procurement chasing follow-ups across WhatsApp groups." },
  { n: "02", label: "Consolidation", icon: Link2, tone: "text-blue-500", t: "Crystal becomes the single supplier of record.", d: "One PO, one catalogue, one accountable contact." },
  { n: "03", label: "Automation", icon: Activity, tone: "text-[#00C896]", t: "Quotes, dispatch and invoicing run on templates.", d: "60-min quote SLA, scheduled monthly dispatch." },
  { n: "04", label: "Recurring", icon: RefreshCw, tone: "text-emerald-500", t: "Auto-renewing monthly orders with locked pricing.", d: "Procurement turns invisible. Operations runs smoothly." },
];

function HowItWorks() {
  return (
    <SectionShell id="how" off>
      <div className="text-center">
        <Eyebrow>// Customer Success</Eyebrow>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
          From scattered vendors to <span className="bg-gradient-to-r from-[#0057A0] to-[#00C896] bg-clip-text text-transparent">invisible procurement.</span>
        </h2>
      </div>
      <div className="relative mt-14">
        <DashedConnector />
        <StaggerGroup className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS_HIW.map((s) => (
            <StaggerItem key={s.n}>
              <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-blue-200 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#0057A0]">{s.n}</span>
                  <s.icon className={`h-5 w-5 ${s.tone}`} />
                </div>
                <p className="font-mono mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{s.label}</p>
                <h3 className="font-display mt-2 text-[16.5px] font-bold leading-[1.35] tracking-tight text-[#0D1117]">{s.t}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-slate-500">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}

function DashedConnector() {
  const ref = React.useRef<SVGPathElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-100px" });
  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 lg:block">
      <svg className="h-2 w-full" viewBox="0 0 1000 4" preserveAspectRatio="none">
        <motion.path
          ref={ref}
          d="M 0 2 L 1000 2"
          stroke="#CBD5E1"
          strokeWidth="2"
          strokeDasharray="6 8"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          fill="none"
        />
      </svg>
    </div>
  );
}

/* ============================================================== */
/*  8. PROCESS TIMELINE                                            */
/* ============================================================== */
const TIMELINE = [
  { n: "01", t: "Submit Requirement", d: "Share product list via form, email or WhatsApp." },
  { n: "02", t: "Receive Quotation", d: "Structured quote with brand options within 60 minutes." },
  { n: "03", t: "Confirm & Schedule", d: "PO confirmation, dispatch slotted to your calendar." },
  { n: "04", t: "Delivery & GST Invoice", d: "Pan-Hyderabad delivery with single tax invoice." },
  { n: "05", t: "Recurring Supply", d: "Optional monthly subscription — locked pricing." },
];

function ProcessTimeline() {
  const wrap = React.useRef<HTMLDivElement>(null);
  const inView = useInView(wrap, { once: true, margin: "-100px" });
  return (
    <SectionShell off>
      <div className="text-center">
        <Eyebrow>// Procurement Process</Eyebrow>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          <span className="bg-gradient-to-r from-[#0057A0] to-[#00C896] bg-clip-text text-transparent">in days, not weeks.</span>
        </h2>
      </div>
      <div ref={wrap} className="relative mt-16">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-200 lg:block" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-[#0057A0] to-[#00C896] lg:block"
        />
        <div className="relative grid gap-10 lg:grid-cols-5">
          {TIMELINE.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 200, damping: 16 }}
              className="text-center"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white border-2 border-[#0057A0] font-mono text-[15px] font-bold text-[#0057A0] shadow-[0_8px_20px_-10px_rgba(0,87,160,0.5)]">
                {s.n}
              </div>
              <h3 className="font-display mt-5 text-[15.5px] font-bold tracking-tight text-[#0D1117]">{s.t}</h3>
              <p className="mx-auto mt-2 max-w-[200px] text-[13px] leading-[1.55] text-slate-500">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ============================================================== */
/*  9. BRANDS                                                      */
/* ============================================================== */
const BRANDS = [
  "Diversey", "Taski", "3M", "Godrej", "Dabur", "Hindustan Unilever",
  "Reckitt", "ITC", "Kimberly-Clark", "SC Johnson", "Marvel", "Origami",
];

function Brands() {
  return (
    <SectionShell>
      <div className="text-center">
        <Eyebrow>// Brands We Supply</Eyebrow>
        <h2 className="font-display mt-4 text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          Premium, quality-assured brands only.
        </h2>
      </div>
      <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" stagger={0.05}>
        {BRANDS.map((b) => (
          <StaggerItem key={b}>
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-5 text-center text-[15px] font-semibold text-slate-600 transition hover:scale-[1.02] hover:border-blue-200 hover:text-[#0057A0] hover:shadow-sm">
              {b}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <div className="mt-10 overflow-hidden border-y border-slate-100 py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max marquee-track gap-10 hover:[animation-play-state:paused]">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-[#00C896]">
              {b} <span className="ml-10 text-slate-300">·</span>
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ============================================================== */
/*  10. MISSION                                                    */
/* ============================================================== */
function Mission() {
  return (
    <SectionShell id="mission" dark className="min-h-screen flex items-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,200,150,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="relative w-full text-center">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mb-10 w-fit"
        >
          <CrystalMark className="h-16 w-16" />
        </motion.div>
        <h2 className="font-display mx-auto max-w-5xl text-[clamp(32px,5.5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
          <SplitLine>To become India's most trusted</SplitLine>
          <SplitLine delay={0.1}>technology-enabled workplace</SplitLine>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block italic bg-gradient-to-r from-[#00C896] via-[#5eead4] to-[#00C896] bg-clip-text text-transparent"
            >
              procurement platform
            </motion.span>
          </span>
          <SplitLine delay={0.3}>— starting from Hyderabad.</SplitLine>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mx-auto mt-10 max-w-[600px] text-[18px] leading-[1.8] text-slate-400"
        >
          We believe procurement should be invisible to your operations team — predictable,
          auditable and built for scale. Crystal Clean Solutions is engineering that future.
        </motion.p>
      </div>
    </SectionShell>
  );
}

/* ============================================================== */
/*  11. CONTACT                                                    */
/* ============================================================== */
function Contact() {
  const [form, setForm] = React.useState({
    company: "", name: "", phone: "", email: "", industry: "", requirement: "",
  });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Enquiry from ${form.company || "—"} / ${form.name || "—"} / ${form.phone || "—"}%0A%0AIndustry: ${form.industry || "—"}%0AEmail: ${form.email || "—"}%0A%0ARequirement:%0A${encodeURIComponent(form.requirement)}`;
    window.open(`https://wa.me/${SITE.phoneRaw}?text=${msg}`, "_blank");
  };

  const contacts = [
    { icon: Phone, label: "Call", value: SITE.phone, href: `tel:+${SITE.phoneRaw}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with procurement", href: WHATSAPP },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Office", value: SITE.address },
  ];

  return (
    <SectionShell id="contact">
      <div className="text-center">
        <Eyebrow>// Customer Inquiry</Eyebrow>
        <h2 className="font-display mt-4 text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
          Request a quotation.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-[1.7] text-slate-500">
          Share your requirement — typical quote turnaround is under 60 minutes during business hours.
        </p>
      </div>
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <FadeUp className="space-y-4">
          {contacts.map((c) => {
            const Wrap: any = c.href ? "a" : "div";
            return (
              <Wrap
                key={c.label}
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 transition hover:border-[#00C896]/35"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0057A0]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-slate-400">{c.label}</p>
                  <p className="mt-1 break-words text-[14px] text-slate-800">{c.value}</p>
                </div>
              </Wrap>
            );
          })}
        </FadeUp>

        <FadeUp delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="company" label="Company *" value={form.company} onChange={update("company")} required />
              <Field id="name" label="Your Name *" value={form.name} onChange={update("name")} required />
              <Field id="phone" label="Phone *" value={form.phone} onChange={update("phone")} required />
              <Field id="email" label="Email" value={form.email} onChange={update("email")} type="email" />
              <div className="sm:col-span-2">
                <label htmlFor="industry" className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-400">Industry</label>
                <select
                  id="industry"
                  value={form.industry}
                  onChange={update("industry")}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-800 outline-none transition focus:border-[#00C896] focus:ring-2 focus:ring-[#00C896]/20"
                >
                  <option value="">Select an industry…</option>
                  {[
                    "Corporate / IT",
                    "Hospitals & Clinics",
                    "Hotels & Hospitality",
                    "Educational Institutions",
                    "Co-working Spaces",
                    "Commercial Facilities",
                    "Other",
                  ].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="requirement" className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-400">Requirement *</label>
                <textarea
                  id="requirement"
                  rows={4}
                  required
                  value={form.requirement}
                  onChange={update("requirement")}
                  placeholder="Describe your procurement needs — product types, approximate quantities, frequency…"
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#00C896] focus:ring-2 focus:ring-[#00C896]/20"
                />
              </div>
            </div>
            <MagneticButton
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C896] px-6 py-4 text-[14.5px] font-semibold text-white transition hover:shadow-[0_0_28px_rgba(0,200,150,0.45)]"
            >
              <Send className="h-4 w-4" /> Send Enquiry
            </MagneticButton>
            <p className="mt-3 text-center text-[12px] text-slate-400">
              Submissions open WhatsApp with your enquiry pre-filled.
            </p>
          </form>
        </FadeUp>
      </div>
    </SectionShell>
  );
}

function Field({
  id, label, value, onChange, type = "text", required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-800 outline-none transition focus:border-[#00C896] focus:ring-2 focus:ring-[#00C896]/20"
      />
    </div>
  );
}

/* ============================================================== */
/*  12. PRE-FOOTER CTA                                             */
/* ============================================================== */
function PreFooterCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1E] py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "linear-gradient(120deg, #0A0F1E 0%, #0B2540 45%, #0E5F66 85%, #0A0F1E 100%)",
          backgroundSize: "300% 300%",
          animation: "blobA 14s ease-in-out infinite alternate",
        }}
      />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C896]/25 blur-[100px]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-8">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00C896]">// Procurement Made Invisible</p>
          <h3 className="font-display mt-3 max-w-2xl text-[clamp(26px,3.4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Ready to consolidate your workplace consumables?
          </h3>
        </div>
        <MagneticButton
          as="a"
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-[15px] font-semibold text-[#0057A0] transition hover:shadow-[0_0_45px_rgba(255,255,255,0.35)]"
        >
          Request Quotation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </MagneticButton>
      </div>
    </section>
  );
}
