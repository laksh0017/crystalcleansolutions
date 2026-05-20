import { cn } from "@/lib/utils";
import logoSrc from "@/assets/crystal-logo.png";

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
        className="grid h-9 w-9 place-items-center overflow-hidden rounded-[10px] bg-[#19A6F0] shadow-[0_8px_24px_-12px_rgba(25,166,240,0.55)] ring-1 ring-[#19A6F0]/30"
      >
        <img
          src={logoSrc}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
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
