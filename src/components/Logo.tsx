import { cn } from "@/lib/utils";
import markAsset from "@/assets/crystal-clean-mark.png.asset.json";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={markAsset.url}
        alt=""
        aria-hidden
        className="h-8 w-8 select-none"
        style={{ filter: "drop-shadow(0 4px 14px rgba(0,191,99,0.30))" }}
        draggable={false}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[16px] font-bold tracking-[-0.01em]",
            variant === "light" ? "text-white" : "text-[#009AE2]",
          )}
        >
          CRYSTAL
        </span>
        <span
          className={cn(
            "font-display text-[10px] font-semibold tracking-[0.18em] mt-0.5",
            variant === "light" ? "text-white/80" : "text-[#00BF63]",
          )}
        >
          CLEAN SOLUTIONS
        </span>
      </span>
    </span>
  );
}

export function CrystalMark({ className }: { className?: string; cyan?: boolean }) {
  return (
    <img
      src={markAsset.url}
      alt=""
      aria-hidden
      className={cn("select-none", className)}
      draggable={false}
    />
  );
}
