import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-foreground";
  const sub = variant === "light" ? "text-white/55" : "text-muted-foreground";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center rounded-[10px] bg-[image:var(--gradient-ink)] ring-1 ring-[color:var(--electric)]/30 shadow-[0_8px_24px_-12px_rgba(0,123,255,0.6)]"
      >
        <CrystalMark className="h-5 w-5" />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[10px] bg-[radial-gradient(circle_at_50%_30%,rgba(92,225,230,0.35),transparent_70%)]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[15px] font-semibold tracking-[-0.02em]", text)}>
          Crystal Clean
        </span>
        <span className={cn("mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em]", sub)}>
          Solutions
        </span>
      </span>
    </span>
  );
}

export function CrystalMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="cmg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5CE1E6" />
          <stop offset="1" stopColor="#007BFF" />
        </linearGradient>
      </defs>
      {/* 4-point concave crystal star */}
      <path
        d="M32 2 C34 22 42 30 62 32 C42 34 34 42 32 62 C30 42 22 34 2 32 C22 30 30 22 32 2 Z"
        fill="url(#cmg)"
      />
    </svg>
  );
}
