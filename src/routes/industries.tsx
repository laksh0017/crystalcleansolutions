import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Cpu, Stethoscope, Hotel, Users, Home, GraduationCap, Briefcase, Factory } from "lucide-react";

export const Route = createFileRoute("/industries")({
  component: Industries,
  head: () => ({
    meta: [
      { title: "Industries — Procurement for IT, Hospitals, Hotels, SMEs | CRYSTAL" },
      { name: "description", content: "CRYSTAL serves IT companies, hospitals, hotels, coworking spaces, apartments, schools, SMEs and manufacturers with structured facility procurement." },
    ],
  }),
});

const INDUSTRIES = [
  { icon: Cpu, name: "IT Companies", pain: "Multi-floor offices with constant pantry & washroom turnover.", solution: "Recurring monthly supply with floor-wise dispatch and admin dashboards." },
  { icon: Stethoscope, name: "Hospitals", pain: "Critical hygiene, biomedical compliance and zero-stockout SLAs.", solution: "Hospital-grade chemicals, color-coded waste bags and priority replenishment." },
  { icon: Stethoscope, name: "Clinics", pain: "Small teams managing supply alongside patient care.", solution: "Compact monthly kits curated for clinics, billed as one invoice." },
  { icon: Hotel, name: "Hotels", pain: "Guest-grade consumables across housekeeping, F&B and laundry.", solution: "Premium amenities, scheduled bulk dispatch, dedicated account manager." },
  { icon: Users, name: "Coworking Spaces", pain: "High-velocity consumption with brand-sensitive aesthetics.", solution: "Curated catalog of premium pantry, washroom and stationery supplies." },
  { icon: Home, name: "Apartments", pain: "Society admins juggling vendors and approval cycles.", solution: "Single bulk RFQ for housekeeping, garbage and common-area supplies." },
  { icon: GraduationCap, name: "Educational Institutions", pain: "Term-cycle ordering with budget approvals and tax compliance.", solution: "Annual contracts with semester-wise delivery and clean GST documentation." },
  { icon: Briefcase, name: "SMEs", pain: "Small admin teams without dedicated procurement bandwidth.", solution: "WhatsApp-first ordering and recurring kits priced for growing teams." },
  { icon: Factory, name: "Manufacturing Units", pain: "Industrial-grade chemicals, PPE and packaging at scale.", solution: "Bulk procurement with pallet-grade logistics and dispatch scheduling." },
];

function Industries() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Industries</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            We map procurement to <span className="text-gradient">how you operate.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Different industries have very different procurement realities. CRYSTAL is built
            to flex around your operations, not the other way around.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <div key={i.name} className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-foreground text-background transition group-hover:bg-primary group-hover:text-primary-foreground">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">{i.name}</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Pain</p>
                  <p className="mt-1 text-muted-foreground">{i.pain}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">CRYSTAL solution</p>
                  <p className="mt-1">{i.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-8">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-foreground text-background">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold">Don't see your industry?</p>
              <p className="text-sm text-muted-foreground">We onboard new categories every month — talk to us.</p>
            </div>
          </div>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Schedule meeting <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>
    </>
  );
}
