import { Link } from "@tanstack/react-router";
import { MessageCircle, FileText } from "lucide-react";
import { WHATSAPP } from "@/lib/site";

export function StickyCTA() {
  return (
    <>
      {/* Floating WhatsApp — visible on all sizes */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-full bg-emerald-500 text-slate-900 shadow-[0_18px_40px_-12px_rgba(16,185,129,0.55)] ring-1 ring-emerald-400/40 transition hover:scale-105 hover:bg-emerald-600 sm:grid"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Mobile dual-CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur-xl sm:hidden">
        <div className="flex gap-2">
          <Link
            to="/contact"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
          >
            <FileText className="h-4 w-4" /> Get Quotation
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-slate-900"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
