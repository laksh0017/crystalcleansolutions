import { cn } from "@/lib/utils";

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
      <span
        aria-hidden
        className="inline-flex"
        style={{ filter: "drop-shadow(0 0 6px rgba(0,200,255,0.6))" }}
      >
        <CrystalMark className="h-7 w-7" cyan />
      </span>
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className={cn("font-display text-[15px] font-semibold tracking-[-0.01em]", headingClass)}>
          Crystal Clean
        </span>
        <span className="font-display text-[15px] font-normal text-[#6B7FA3]">
          Solutions
        </span>
      </span>
    </span>
  );
}

export function CrystalMark({ className, cyan = false }: { className?: string; cyan?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="cmg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5CE1E6" />
          <stop offset="1" stopColor="#007BFF" />
        </linearGradient>
      </defs>
      <path
        d="M32 2 C34 22 42 30 62 32 C42 34 34 42 32 62 C30 42 22 34 2 32 C22 30 30 22 32 2 Z"
        fill={cyan ? "#00C8FF" : "url(#cmg)"}
      />
    </svg>
  );
}
