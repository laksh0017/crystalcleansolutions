import * as React from "react";

export type RFQItem = {
  id: string;
  name: string;
  category: string;
  unit: string;
  qty: number;
};

type Ctx = {
  items: RFQItem[];
  add: (item: Omit<RFQItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const RFQContext = React.createContext<Ctx | null>(null);
const KEY = "crystal_rfq_v1";

export function RFQProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<RFQItem[]>([]);
  const [open, setOpen] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch { /* noop */ }
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* noop */ }
  }, [items, hydrated]);

  const value: Ctx = {
    items,
    open,
    setOpen,
    count: items.reduce((s, i) => s + i.qty, 0),
    add: (item, qty = 1) =>
      setItems((prev) => {
        const ex = prev.find((p) => p.id === item.id);
        if (ex) return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
        return [...prev, { ...item, qty }];
      }),
    remove: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
    setQty: (id, qty) =>
      setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))),
    clear: () => setItems([]),
  };

  return <RFQContext.Provider value={value}>{children}</RFQContext.Provider>;
}

export function useRFQ() {
  const ctx = React.useContext(RFQContext);
  if (!ctx) throw new Error("useRFQ must be used within RFQProvider");
  return ctx;
}
