import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP, MAPS_URL } from "@/lib/site";
import { useRFQ } from "@/lib/rfq";
import { Phone, Mail, MapPin, MessageCircle, FileText, Send, CheckCircle2 } from "lucide-react";
import * as React from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Crystal Clean Solutions" },
      { name: "description", content: "Reach the Crystal procurement team. Request a quote, schedule a meeting or chat on WhatsApp." },
      { property: "og:title", content: "Contact — Crystal Clean Solutions" },
      { property: "og:description", content: "Phone, WhatsApp, email and quote form for Hyderabad workplace hygiene procurement." },
      { property: "og:url", content: "https://crystalcleansolutions.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://crystalcleansolutions.lovable.app/contact" }],
  }),
});

const schema = z.object({
  company: z.string().trim().min(2, "Company name required").max(120),
  name: z.string().trim().min(2, "Your name required").max(80),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(160),
  gstin: z.string().trim().max(20).optional().or(z.literal("")),
  address: z.string().trim().max(400).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function Contact() {
  const { items, count, clear } = useRFQ();
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path.join(".")] = i.message; });
      setErrors(errs);
      return;
    }
    const d = parsed.data;
    const lines = [
      `New RFQ from ${d.company}`,
      `Contact: ${d.name} · ${d.phone} · ${d.email}`,
      d.gstin ? `GSTIN: ${d.gstin}` : "",
      d.address ? `Delivery: ${d.address}` : "",
      d.message ? `Notes: ${d.message}` : "",
      "",
      items.length ? "RFQ Items:" : "",
      ...items.map((i) => `• ${i.name} — ${i.qty} ${i.unit}`),
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setSent(true);
    setErrors({});
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">// Contact</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            Talk to the <span className="text-gradient">procurement team.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
            Share your requirement and we usually reply within the hour with a structured,
            GST-compliant quotation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10">
            {sent ? (
              <div className="flex flex-col items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">Request sent.</h2>
                <p className="text-muted-foreground">
                  We've opened WhatsApp with your enquiry pre-filled. Our team will respond
                  with a structured quotation shortly.
                </p>
                <Button variant="soft" onClick={() => { setSent(false); clear(); }}>Start a new request</Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// New RFQ</p>
                  {count > 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs">
                      <FileText className="h-3 w-3" /> {count} items in RFQ cart
                    </span>
                  )}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Company name" name="company" error={errors.company} />
                  <Field label="Your name" name="name" error={errors.name} />
                  <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                  <Field label="Email" name="email" type="email" error={errors.email} />
                  <Field label="GSTIN (optional)" name="gstin" error={errors.gstin} />
                  <Field label="Delivery address" name="address" error={errors.address} />
                </div>
                <Field label="Notes (optional)" name="message" textarea error={errors.message} />
                <Button type="submit" variant="hero" size="lg" className="mt-2 w-full md:w-auto md:self-start">
                  <Send className="h-4 w-4" /> Send RFQ
                </Button>
                <p className="text-[11px] text-muted-foreground">
                  Submitting opens WhatsApp with your enquiry pre-filled — fastest path to
                  a same-day response.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <ContactCard icon={Phone} label="Direct call" value={SITE.phone} href={`tel:+${SITE.phoneRaw}`} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with procurement" href={WHATSAPP} accent />
            <ContactCard icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <ContactCard icon={MapPin} label="Address" value={SITE.address} href={MAPS_URL} />
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Verification</p>
              <p className="mt-2 text-sm font-medium">GSTIN {SITE.gstin}</p>
              <p className="mt-1 text-xs text-muted-foreground">Registered B2B supplier · Telangana</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="CRYSTAL location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", textarea, error,
}: { label: string; name: string; type?: string; textarea?: boolean; error?: string }) {
  const cls = `w-full rounded-xl border ${error ? "border-destructive" : "border-border"} bg-background px-4 py-3 text-sm outline-none transition focus:border-primary`;
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} className={cls} />
      )}
      {error && <span className="mt-1 block text-[11px] text-destructive">{error}</span>}
    </label>
  );
}

function ContactCard({
  icon: Icon, label, value, href, accent,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string; accent?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40 ${accent ? "bg-[image:var(--gradient-primary)] text-primary-foreground border-transparent hover:opacity-95" : ""}`}
    >
      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${accent ? "bg-white/20" : "bg-foreground text-background"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className={`font-mono text-[10px] uppercase tracking-widest ${accent ? "text-slate-600" : "text-muted-foreground"}`}>{label}</p>
        <p className={`mt-1 text-sm font-medium ${accent ? "" : ""}`}>{value}</p>
      </div>
    </a>
  );
}
