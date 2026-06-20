import { useRFQ } from "@/lib/rfq";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, FileText, Trash2 } from "lucide-react";

export function RFQDrawer() {
  const { items, open, setOpen, setQty, remove, clear, count } = useRFQ();

  return (
    <>
      {/* Floating launcher */}
      {count > 0 && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-[var(--shadow-glow)] transition hover:scale-105"
        >
          <FileText className="h-4 w-4" />
          RFQ ({count})
        </button>
      )}

      <div
        className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
        {...(!open ? { inert: "" as unknown as boolean } : {})}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Request for Quotation</p>
              <h3 className="mt-1 text-lg font-semibold">Your RFQ Cart</h3>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary">
                    <FileText className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="font-medium">Your RFQ cart is empty</p>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Browse the catalog and add items to request a quotation.
                  </p>
                  <Button asChild className="mt-5 rounded-full" variant="hero" onClick={() => setOpen(false)}>
                    <Link to="/products">Browse products</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <ul className="space-y-3">
                {items.map((it) => (
                  <li key={it.id} className="rounded-xl border border-border bg-card p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{it.category}</p>
                        <p className="mt-1 text-sm font-medium">{it.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">Unit: {it.unit}</p>
                      </div>
                      <button onClick={() => remove(it.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-border bg-background p-1">
                      <button onClick={() => setQty(it.id, it.qty - 1)} className="grid h-7 w-7 place-items-center rounded-full hover:bg-secondary">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">{it.qty}</span>
                      <button onClick={() => setQty(it.id, it.qty + 1)} className="grid h-7 w-7 place-items-center rounded-full hover:bg-secondary">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-border bg-secondary/40 px-6 py-5">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{count} units across {items.length} items</span>
                <button onClick={clear} className="text-xs text-muted-foreground underline-offset-4 hover:underline">Clear</button>
              </div>
              <Button asChild variant="hero" size="lg" className="w-full" onClick={() => setOpen(false)}>
                <Link to="/contact" search={{ rfq: 1 } as never}>Get Quote in Minutes</Link>
              </Button>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                AI-assisted quotation · GST-compliant · Reply within 60 minutes
              </p>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
