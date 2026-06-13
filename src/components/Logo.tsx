import { cn } from "@/lib/utils";
import markAsset from "@/assets/crystal-mark.png.asset.json";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const headingClass = variant === "light" ? "text-white" : "text-white";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={markAsset.url}
        alt=""
        aria-hidden
        className="h-7 w-7 select-none"
        style={{ filter: "drop-shadow(0 0 8px rgba(0,200,255,0.45))" }}
        draggable={false}
      />
      <span className="flex items-baseline gap-1.5 leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-semibold tracking-[-0.01em]",
            headingClass,
          )}
        >
          Crystal Clean
        </span>
        <span className="font-display text-[15px] font-normal text-[#6B7FA3]">
          Solutions
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
