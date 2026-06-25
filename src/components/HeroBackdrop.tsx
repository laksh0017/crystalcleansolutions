import * as React from "react";

export function HeroBackdrop() {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 8,
        dur: 14 + Math.random() * 12,
        teal: i % 2 === 0,
      })),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated mesh blobs */}
      <div className="absolute -left-1/4 top-1/4 h-[520px] w-[520px] rounded-full opacity-[0.14] blur-[80px]"
           style={{ background: "#0057A0", animation: "blobA 12s ease-in-out infinite alternate" }} />
      <div className="absolute right-[-10%] top-1/3 h-[600px] w-[600px] rounded-full opacity-[0.12] blur-[80px]"
           style={{ background: "#00C896", animation: "blobB 16s ease-in-out infinite alternate" }} />
      <div className="absolute left-1/3 bottom-[-10%] h-[480px] w-[480px] rounded-full opacity-[0.10] blur-[80px]"
           style={{ background: "#0EA5E9", animation: "blobC 18s ease-in-out infinite alternate" }} />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.teal ? "#00C896" : "#0EA5E9",
            opacity: 0.45,
            animation: `floatUp ${p.dur}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
