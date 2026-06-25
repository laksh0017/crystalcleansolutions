import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { SITE, WHATSAPP } from "@/lib/site";
import { Check } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#0A0F1E] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-slate-400">
              Hyderabad's technology-enabled B2B procurement partner for workplace hygiene,
              washroom consumables, cleaning chemicals and pantry supplies.
            </p>
            <ul className="mt-6 space-y-2 text-[12px]">
              {[
                "GST-Compliant Billing",
                `GSTIN ${SITE.gstin}`,
                "Brand-Authorised Distributor",
                "Pan-Hyderabad Logistics",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-slate-400">
                  <Check className="h-3.5 w-3.5 text-[#00C896]" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <FooterCol
            title="Categories"
            links={[
              { label: "Washroom Hygiene", hash: "products" },
              { label: "Tissue Solutions", hash: "products" },
              { label: "Cleaning Chemicals", hash: "products" },
              { label: "Janitorial Tools", hash: "products" },
              { label: "Dispensers", hash: "products" },
              { label: "Full Catalogue →", hash: "products" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "Industries", hash: "industries" },
              { label: "How It Works", hash: "how" },
              { label: "Why Crystal", hash: "why" },
              { label: "Mission", hash: "mission" },
              { label: "Contact", hash: "contact" },
            ]}
          />

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">Service Regions</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-1.5 text-[12px] text-slate-400">
              {SITE.clusters.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">Reach us</p>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li>
                <a className="text-slate-400 hover:text-white" href={`tel:+${SITE.phoneRaw}`}>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a className="break-all text-slate-400 hover:text-white" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-[#00C896]" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
            <p className="mt-5 text-[12px] leading-relaxed text-slate-500">{SITE.address}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-[12px] text-slate-500 md:flex-row md:items-center md:px-8">
          <p className="font-mono">© {year} {SITE.name} · GSTIN {SITE.gstin}</p>
          <p className="font-mono uppercase tracking-[0.22em]">B2B Workplace Hygiene Procurement · Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; hash?: string }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">{title}</p>
      <ul className="mt-4 space-y-2 text-[13px]">
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`}>
            <Link to="/" hash={l.hash} className="text-slate-400 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
