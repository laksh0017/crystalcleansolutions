import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { SITE, WHATSAPP } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, ReceiptText, BadgeCheck, Truck } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-[#F7F9FC] text-[#64748B]">
      <div aria-hidden className="absolute inset-0 -z-0 bg-grid opacity-[0.08]" />


      {/* CTA strip */}
      <div className="relative border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-10 md:flex-row md:items-center md:px-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--electric)]">// Procurement Made Invisible</p>
            <h3 className="mt-2 max-w-xl text-2xl font-semibold text-slate-900 md:text-3xl">
              Ready to consolidate your workplace consumables?
            </h3>
          </div>
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <Link to="/contact">Request Quotation <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              Hyderabad's technology-enabled B2B procurement partner for workplace hygiene,
              washroom consumables, cleaning chemicals and pantry supplies.
            </p>
            <ul className="mt-6 space-y-2 text-[12px] text-slate-500">
              <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-[color:var(--electric)]" /> GST-Compliant Billing</li>
              <li className="flex items-center gap-2"><ReceiptText className="h-3.5 w-3.5 text-[color:var(--electric)]" /> GSTIN {SITE.gstin}</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-3.5 w-3.5 text-[color:var(--electric)]" /> Brand-Authorised Distributor</li>
              <li className="flex items-center gap-2"><Truck className="h-3.5 w-3.5 text-[color:var(--electric)]" /> Pan-Hyderabad Logistics</li>
            </ul>
          </div>

          <FooterCol title="Categories" links={[
            { to: "/", hash: "solutions", label: "Washroom Hygiene" },
            { to: "/", hash: "solutions", label: "Tissue Solutions" },
            { to: "/", hash: "solutions", label: "Cleaning Chemicals" },
            { to: "/", hash: "solutions", label: "Janitorial Tools" },
            { to: "/", hash: "solutions", label: "Dispensers" },
            { to: "/products", label: "Full Catalogue →" },
          ]} />

          <FooterCol title="Company" links={[
            { to: "/industries", label: "Industries" },
            { to: "/how-it-works", label: "How It Works" },
            { to: "/", hash: "why", label: "Why Crystal" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ]} />

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">Service Regions</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-[13px] text-slate-600">
              {SITE.clusters.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">Reach us</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-slate-900" href={`tel:+${SITE.phoneRaw}`}>{SITE.phone}</a></li>
              <li><a className="hover:text-slate-900 break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a className="hover:text-slate-900" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp Enquiry</a></li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">{SITE.address}</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-slate-200/70">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-[12px] text-[#94A3B8] md:flex-row md:items-center md:px-8">
          <p>© {year} {SITE.name} · GSTIN {SITE.gstin}</p>
          <p className="font-mono uppercase tracking-[0.22em]">B2B Workplace Hygiene Procurement · Hyderabad</p>
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
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#94A3B8]">{title}</p>
      <ul className="mt-4 space-y-2.5 text-[13px]">
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`}>
            <Link to={l.to} hash={l.hash} className="text-[#64748B] transition-colors duration-200 hover:text-slate-900">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

