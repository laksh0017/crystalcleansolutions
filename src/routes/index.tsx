import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Package,
  Repeat,
  ClipboardList,
  FileCheck2,
  Truck,
  CalendarCheck,
  ShieldCheck,
  Wallet,
  Layers,
  Headphones,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
  Check,
  SprayCan,
  Droplets,
  Building2,
  FileText,
  Clock,
} from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Crystal Clean Solutions — Cleaning & Facility Supplies in Hyderabad" },
      {
        name: "description",
        content:
          "Reliable B2B supplier of housekeeping materials, cleaning chemicals and office facility essentials in Hyderabad. Monthly supply, GST billing, fast delivery.",
      },
      { property: "og:title", content: "Crystal Clean Solutions — Hyderabad" },
      {
        property: "og:description",
        content:
          "Trusted supplier of cleaning chemicals, housekeeping materials and office essentials for businesses across Hyderabad.",
      },
    ],
  }),
});

const PHONE_RAW = "919391937991";
const WHATSAPP = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(
  "Hi Crystal Clean Solutions, I'd like a quote for cleaning & facility supplies.",
)}`;
const PHONE = "+91 93919 37991";
const EMAIL = "crystalcleansolutions.hyd@gmail.com";
const ADDRESS =
  "37, Sitaram Nagar Colony, Diamond Point Rd, Sikh Village, Secunderabad, Hyderabad, Telangana 500009";
const GSTIN = "36DGXPM2881K1ZG";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Crystal Clean
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#why" className="hover:text-foreground">Why us</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <Button asChild variant="hero" size="sm" className="rounded-full">
          <a href="#contact">Request a Quote</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:pt-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-[var(--shadow-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            B2B Cleaning & Facility Partner · Hyderabad
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] md:text-6xl">
            One Partner for All Your{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              Cleaning & Facility
            </span>{" "}
            Needs
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From housekeeping services to monthly supplies — we simplify
            operations for offices and businesses in Hyderabad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#contact">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["Trusted by offices", "Single point of contact", "Monthly billing"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
          <img
            src={heroImg}
            alt="Pristine modern office interior maintained by Crystal Clean Solutions"
            width={1600}
            height={1200}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)] md:aspect-[5/6]"
          />
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Sparkles,
    title: "Housekeeping & Cleaning",
    desc: "Daily, deep and specialized cleaning by trained staff — for offices, retail and commercial spaces.",
  },
  {
    icon: Package,
    title: "Facility Supplies",
    desc: "Cleaning chemicals, tissues, dispensers, tools and equipment — sourced and delivered reliably.",
  },
  {
    icon: Repeat,
    title: "Monthly Supply Solutions",
    desc: "Subscription-based recurring supply so your office never runs out. One invoice, zero hassle.",
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Services & Solutions
        </p>
        <h2 className="text-4xl font-semibold md:text-5xl">
          Three pillars. One reliable partner.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { icon: ClipboardList, title: "Share your requirement", desc: "Tell us about your office and what you need." },
  { icon: FileCheck2, title: "Get a custom quotation", desc: "We send a clear, itemised proposal — no surprises." },
  { icon: Truck, title: "We deliver & maintain", desc: "Onboard staff, supplies and schedules — done for you." },
  { icon: CalendarCheck, title: "Monthly supply & support", desc: "Recurring delivery and a single point of contact." },
];

function HowItWorks() {
  return (
    <section id="how" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="text-4xl font-semibold md:text-5xl">
            From enquiry to monthly autopilot — in four steps.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="mb-5 flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-display text-3xl font-semibold text-muted-foreground/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: ShieldCheck, title: "Reliable & consistent", desc: "Trained staff, defined SOPs, and quality you can count on every day." },
  { icon: Wallet, title: "Cost-effective sourcing", desc: "Direct procurement keeps your monthly facility costs predictable." },
  { icon: Layers, title: "One-stop solution", desc: "Cleaning, supplies and equipment — all from a single partner." },
  { icon: Headphones, title: "Easy ordering & support", desc: "WhatsApp, call or email — we respond fast and resolve faster." },
];

function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Why choose us
          </p>
          <h2 className="text-4xl font-semibold md:text-5xl">
            Built for the way modern offices operate.
          </h2>
          <p className="mt-5 text-muted-foreground">
            We replace multiple vendors, scattered invoices and last-minute
            ordering with one calm, professional system.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MonthlyCombo() {
  const benefits = [
    "Save up to 20% vs ad-hoc ordering",
    "No repeated purchase orders",
    "Predictable monthly invoicing",
    "Auto-replenishment of essentials",
    "Dedicated account manager",
    "Priority response & support",
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div
        className="relative overflow-hidden rounded-3xl p-10 text-primary-foreground shadow-[var(--shadow-elegant)] md:p-16"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] opacity-80">
              Monthly Solutions
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Monthly Cleaning & Supply Packages
            </h2>
            <p className="mt-5 max-w-lg text-base opacity-90">
              One package. Everything your office needs for the month —
              cleaning hours, chemicals, tissues, tools — delivered and managed
              on schedule.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="soft">
                <a href="#contact">Get a Custom Package</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp Us <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-white/20">
                  <Check className="h-3 w-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="text-4xl font-semibold md:text-6xl">
        Let us simplify your operations.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
        Tell us about your office once. We'll handle cleaning, supplies and
        everything in between — month after month.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="hero" size="lg">
          <a href="#contact">Get Quote <ArrowRight className="h-4 w-4" /></a>
        </Button>
        <Button asChild variant="soft" size="lg">
          <a href={WHATSAPP} target="_blank" rel="noreferrer">Talk to Us</a>
        </Button>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: WHATSAPP },
    { icon: MapPin, label: "Location", value: "Hyderabad, Telangana" },
  ];
  return (
    <section id="contact" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Reach out — we usually reply within an hour.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Share your requirement and we'll send a customised quotation for
              your office in Hyderabad.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, label, value, href }) => {
              const Inner = (
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-1 font-medium">{value}</p>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {Inner}
                </a>
              ) : (
                <div key={label}>{Inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="font-display font-semibold text-foreground">Crystal Clean Solutions</span>
        </div>
        <p>© {new Date().getFullYear()} Crystal Clean Solutions · Hyderabad</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <MonthlyCombo />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
