import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS, type ProductCategory } from "@/lib/products";
import { useRFQ } from "@/lib/rfq";
import { Button } from "@/components/ui/button";
import { Plus, Search, FileText, Check, Filter } from "lucide-react";
import * as React from "react";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Catalog — Crystal Clean Solutions" },
      { name: "description", content: "B2B catalog: cleaning chemicals, housekeeping, washroom, pantry, packaging and safety supplies in Hyderabad." },
      { property: "og:title", content: "Procurement catalog — Crystal" },
      { property: "og:description", content: "Browse and request quotes for cleaning, washroom, pantry and facility supplies — usually quoted within the hour." },
      { property: "og:url", content: "https://crystalcleansolutions.lovable.app/products" },
    ],
    links: [{ rel: "canonical", href: "https://crystalcleansolutions.lovable.app/products" }],
  }),
});

function ProductsPage() {
  const { add, items, setOpen } = useRFQ();
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState<ProductCategory | "all">("all");

  const filtered = PRODUCTS.filter((p) => {
    if (cat !== "all" && p.category !== cat) return false;
    if (q) {
      const s = q.toLowerCase();
      return p.name.toLowerCase().includes(s) || p.category.toLowerCase().includes(s);
    }
    return true;
  });

  const inCart = (id: string) => items.some((i) => i.id === id);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40 mask-fade-b" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Catalog</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight md:text-6xl">
            Procurement-grade catalog. <br className="hidden md:block" />
            <span className="text-gradient">Built for speed.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Add items to your RFQ cart and request a structured, GST-compliant quotation —
            usually back within the hour.
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-16 z-20 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-3 md:px-8">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search 1000+ products…"
              className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm outline-none transition focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-border bg-card p-1">
            <CatChip active={cat === "all"} onClick={() => setCat("all")}>All</CatChip>
            {CATEGORIES.map((c) => (
              <CatChip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</CatChip>
            ))}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="ml-auto inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium hover:border-primary/50"
          >
            <FileText className="h-4 w-4" /> RFQ Cart
            {items.length > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">{items.length}</span>
            )}
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-16 text-center">
            <Filter className="mx-auto h-6 w-6 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">No products match — try clearing filters.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => {
              const added = inCart(p.id);
              return (
                <div key={p.id} className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]">
                  <div className="mb-3 flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.category}</span>
                    <span className="font-mono text-[10px] text-muted-foreground/60">{p.id.toUpperCase()}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug">{p.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Unit: <span className="font-medium text-foreground">{p.unit}</span></span>
                    <button
                      onClick={() => add({ id: p.id, name: p.name, category: p.category, unit: p.unit })}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${added ? "bg-primary/10 text-primary" : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"}`}
                    >
                      {added ? <><Check className="h-3 w-3" /> Added</> : <><Plus className="h-3 w-3" /> Add to RFQ</>}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA strip */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center md:px-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Need something not listed?</p>
            <p className="mt-1 text-lg font-semibold">We source 5,000+ SKUs across facility procurement.</p>
          </div>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Request custom quote</Link></Button>
        </div>
      </section>
    </>
  );
}

function CatChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition ${active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
    >
      {children}
    </button>
  );
}
