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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "nav-scrolled" : "nav-top"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" aria-label="Crystal Clean Solutions home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className="text-[14px] tracking-[0.01em] text-[#8A9BAD] transition-colors duration-200 hover:text-white"
              activeProps={n.hash ? undefined : { className: "text-white" }}
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
            className="hidden h-[34px] items-center gap-1.5 rounded-full border border-white/[0.12] px-4 text-[13px] text-white transition hover:border-[#00C8FF]/40 hover:text-[#00C8FF] sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="group inline-flex h-[36px] items-center gap-1 rounded-full bg-[#00C8FF] px-5 text-[13px] font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,200,255,0.4)]"
          >
            Get Quotation <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
          <button
            className="ml-1 grid h-9 w-9 place-items-center rounded-md border border-white/10 lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {mobile && (
        <div className="nav-scrolled border-t border-white/5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-5 py-3 text-sm">
            {NAV.map((n, i) => (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                onClick={() => setMobile(false)}
                className="stagger-in rounded-md px-3 py-2.5 text-[#8A9BAD] hover:bg-white/5 hover:text-white"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-white"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
