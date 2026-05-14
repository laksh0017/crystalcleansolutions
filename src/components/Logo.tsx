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
        className="relative grid h-8 w-8 place-items-center rounded-[10px] bg-[image:var(--gradient-primary)] text-white shadow-[0_8px_24px_-10px_oklch(0.45_0.15_245/0.6)]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L20 8 L17 21 L7 21 L4 8 Z" />
          <path d="M4 8 L20 8" opacity="0.6" />
          <path d="M12 2 L12 21" opacity="0.6" />
        </svg>
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
