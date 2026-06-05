import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { WHATSAPP } from "@/lib/site";
import { MessageCircle, Menu, X, ArrowRight } from "lucide-react";
import * as React from "react";

const NAV = [
  { to: "/", label: "Home", hash: undefined as string | undefined },
  { to: "/", label: "Solutions", hash: "solutions" },
  { to: "/industries", label: "Industries", hash: undefined },
  { to: "/products", label: "Products", hash: undefined },
  { to: "/", label: "Why Crystal", hash: "why" },
  { to: "/how-it-works", label: "How It Works", hash: undefined },
  { to: "/contact", label: "Contact", hash: undefined },
];

export function Header() {
  const [mobile, setMobile] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" aria-label="Crystal Clean Solutions home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] text-muted-foreground lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className="transition-colors hover:text-foreground"
              activeProps={n.hash ? undefined : { className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 text-xs font-medium text-foreground/80 shadow-[var(--shadow-soft)] transition hover:border-primary/40 sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
            WhatsApp
          </a>
          <Button asChild variant="hero" size="sm" className="rounded-full px-5">
            <Link to="/contact">Get Quotation</Link>
          </Button>
          <button
            className="ml-1 grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {mobile && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-5 py-3 text-sm">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                onClick={() => setMobile(false)}
                className="rounded-md px-3 py-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center gap-2 rounded-md border border-border px-3 py-2"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
