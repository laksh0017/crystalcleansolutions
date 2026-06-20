import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "nav-scrolled" : "nav-top"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className="text-[13.5px] font-medium tracking-[0.01em] text-slate-600 transition-colors duration-200 hover:text-[#009AE2]"
              activeProps={n.hash ? undefined : { className: "text-[#009AE2]" }}
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
            className="hidden h-[36px] items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 text-[13px] font-medium text-slate-700 transition hover:border-[#00BF63] hover:text-[#00BF63] sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#00BF63]" />
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="group inline-flex h-[38px] items-center gap-1 rounded-full px-5 text-[13px] font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #009AE2 0%, #00BF63 100%)",
              boxShadow: "0 10px 24px -10px rgba(0,154,226,0.55)",
            }}
          >
            Get Quotation <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
          <button
            className="ml-1 grid h-9 w-9 place-items-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {mobile && (
        <div className="nav-scrolled border-t border-slate-200 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-5 py-3 text-sm">
            {NAV.map((n, i) => (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                onClick={() => setMobile(false)}
                className="stagger-in rounded-md px-3 py-2.5 text-slate-700 hover:bg-slate-100 hover:text-[#009AE2]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-slate-800"
            >
              <MessageCircle className="h-4 w-4 text-[#00BF63]" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
