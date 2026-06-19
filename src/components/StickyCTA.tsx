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
        className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-full text-white transition hover:scale-105 sm:grid"
        style={{
          background: "linear-gradient(135deg, #00BF63 0%, #009AE2 100%)",
          boxShadow: "0 18px 40px -12px rgba(0,191,99,0.55)",
        }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Mobile dual-CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2.5 backdrop-blur-xl sm:hidden">
        <div className="flex gap-2">
          <Link
            to="/contact"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #009AE2 0%, #00BF63 100%)" }}
          >
            <FileText className="h-4 w-4" /> Get Quotation
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#00BF63] bg-white px-4 py-3 text-sm font-semibold text-[#00BF63]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
