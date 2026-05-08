import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-foreground";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-display font-semibold tracking-[-0.04em] text-xl",
        text,
        className,
      )}
    >
      <span>CRYSTAL</span>
      <span className="text-primary">/</span>
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_currentColor] text-primary" />
    </span>
  );
}
