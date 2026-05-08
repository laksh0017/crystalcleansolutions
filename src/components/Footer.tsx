import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { SITE, WHATSAPP } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[image:var(--gradient-ink)] text-white/80">
      <div className="absolute inset-0 -z-0 bg-grid opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Procurement infrastructure for modern businesses. Cleaning, housekeeping,
            stationery and facility supplies — delivered through technology-driven workflows.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
            Operating in {SITE.city}
          </p>
        </div>
        <FooterCol title="Platform" links={[
          { to: "/products", label: "Product Catalog" },
          { to: "/how-it-works", label: "How procurement works" },
          { to: "/industries", label: "Industries" },
        ]} />
        <FooterCol title="Company" links={[
          { to: "/about", label: "About CRYSTAL" },
          { to: "/contact", label: "Contact" },
          { to: "/contact", label: "Schedule meeting" },
        ]} />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Reach us</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-white" href={`tel:+${SITE.phoneRaw}`}>{SITE.phone}</a></li>
            <li><a className="hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a className="hover:text-white" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-white/50 md:flex-row md:items-center md:px-8">
          <p>© {year} CRYSTAL · GSTIN {SITE.gstin}</p>
          <p className="font-mono uppercase tracking-[0.2em]">B2B Procurement Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/70 transition hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
