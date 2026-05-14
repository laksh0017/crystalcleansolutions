import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { SITE, WHATSAPP } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[image:var(--gradient-ink)] text-white/80">
      <div aria-hidden className="absolute inset-0 -z-0 bg-grid opacity-15" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              A reliable B2B procurement partner for workplace hygiene,
              washroom consumables, cleaning chemicals and pantry supplies —
              for offices and businesses across {SITE.city}.
            </p>
            <Button asChild variant="hero" size="sm" className="mt-6 rounded-full">
              <Link to="/contact">Get Quotation <ArrowRight className="h-3.5 w-3.5" /></Link>
            </Button>
          </div>
          <FooterCol title="Solutions" links={[
            { to: "/", hash: "solutions", label: "Workplace Hygiene" },
            { to: "/", hash: "solutions", label: "Washroom Consumables" },
            { to: "/", hash: "solutions", label: "Cleaning Chemicals" },
            { to: "/", hash: "solutions", label: "Pantry & Utility" },
            { to: "/products", hash: undefined, label: "Full Catalog" },
          ]} />
          <FooterCol title="Company" links={[
            { to: "/industries", hash: undefined, label: "Industries" },
            { to: "/how-it-works", hash: undefined, label: "How It Works" },
            { to: "/", hash: "why", label: "Why Crystal" },
            { to: "/about", hash: undefined, label: "About" },
            { to: "/contact", hash: undefined, label: "Contact" },
          ]} />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">Reach us</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-white" href={`tel:+${SITE.phoneRaw}`}>{SITE.phone}</a></li>
              <li><a className="hover:text-white break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a className="hover:text-white" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp Enquiry</a></li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-white/55">{SITE.address}</p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-white/50 md:flex-row md:items-center md:px-8">
          <p>© {year} {SITE.name} · GSTIN {SITE.gstin}</p>
          <p className="font-mono uppercase tracking-[0.22em]">B2B Workplace Hygiene Procurement</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title, links,
}: { title: string; links: { to: string; hash?: string; label: string }[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`}>
            <Link to={l.to} hash={l.hash} className="text-white/70 transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
