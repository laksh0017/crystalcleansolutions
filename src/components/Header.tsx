import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useRFQ } from "@/lib/rfq";
import { FileText, Menu, X } from "lucide-react";
import * as React from "react";

const NAV = [
  { to: "/products", label: "Products" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count, setOpen } = useRFQ();
  const [mobile, setMobile] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center" aria-label="CRYSTAL home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="relative hidden h-9 items-center gap-2 rounded-full border border-border bg-card px-4 text-xs font-medium shadow-[var(--shadow-soft)] transition hover:border-primary/50 sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" />
            RFQ Cart
            {count > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <Button asChild variant="hero" size="sm" className="rounded-full">
            <Link to="/contact">Request Quote</Link>
          </Button>
          <button
            className="ml-1 grid h-9 w-9 place-items-center rounded-md border border-border md:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {mobile && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-5 py-3 text-sm">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMobile(false)}
                className="rounded-md px-3 py-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => { setMobile(false); setOpen(true); }}
              className="mt-1 flex items-center justify-between rounded-md border border-border px-3 py-2 text-left"
            >
              <span>RFQ Cart</span>
              <span className="text-xs text-muted-foreground">{count} items</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
