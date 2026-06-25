import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { WHATSAPP } from "@/lib/site";
import { MessageCircle, Menu, X, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/MotionPrimitives";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

const NAV = [
  { to: "/", label: "Home", hash: undefined as string | undefined },
  { to: "/", label: "Solutions", hash: "solutions" },
  { to: "/", label: "Industries", hash: "industries" },
  { to: "/", label: "Products", hash: "products" },
  { to: "/", label: "Why Crystal", hash: "why" },
  { to: "/", label: "How It Works", hash: "how" },
  { to: "/", label: "Contact", hash: "contact" },
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
      className="fixed inset-x-0 top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
      }}
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
              className="group relative text-[13.5px] font-medium text-[#0D1117] transition-colors hover:text-[#00C896]"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#00C896] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden h-[36px] items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 text-[13px] font-medium text-slate-700 transition hover:border-[#00C896] hover:text-[#00C896] sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
            WhatsApp
          </a>
          <MagneticButton
            as="a"
            href="#contact"
            className="group inline-flex h-[40px] items-center gap-1 rounded-full bg-[#00C896] px-5 text-[13px] font-semibold text-white transition-all duration-200 hover:shadow-[0_0_28px_rgba(0,200,150,0.45)]"
          >
            Get Quotation <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </MagneticButton>
          <button
            className="ml-1 grid h-9 w-9 place-items-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-30 bg-[#0A0F1E] lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-10">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={n.to}
                    hash={n.hash}
                    onClick={() => setMobile(false)}
                    className="block py-3 text-2xl font-semibold text-white hover:text-[#00C896]"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-white"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
