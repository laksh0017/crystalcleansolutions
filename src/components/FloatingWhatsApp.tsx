import { WHATSAPP } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.6)] transition hover:scale-105"
    >
      <span aria-hidden className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <MessageCircle className="relative h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-[#0A0F1E] px-3 py-1.5 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
