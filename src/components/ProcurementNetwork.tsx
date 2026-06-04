import * as React from "react";

/**
 * Procurement Ecosystem Network — animated SVG.
 * Central hub (CCS) connected to Suppliers, Warehouses, Orders, Deliveries, Inventory.
 * Pure CSS animations + dashed flow lines. GPU-friendly.
 */
type Node = { id: string; label: string; x: number; y: number; r?: number };

const NODES: Node[] = [
  { id: "hub", label: "Crystal", x: 600, y: 300, r: 38 },
  { id: "sup", label: "Suppliers", x: 200, y: 140 },
  { id: "war", label: "Warehouses", x: 1000, y: 140 },
  { id: "ord", label: "Orders", x: 140, y: 380 },
  { id: "del", label: "Deliveries", x: 1060, y: 380 },
  { id: "inv", label: "Inventory", x: 600, y: 540 },
];

export function ProcurementNetwork({ className = "" }: { className?: string }) {
  const stars = React.useMemo(() => {
    let s = 104729;
    const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    return Array.from({ length: 70 }, () => ({
      x: r() * 1200,
      y: r() * 640,
      rad: 0.5 + r() * 1.1,
      o: 0.25 + r() * 0.6,
      d: r() * 5,
    }));
  }, []);

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[image:var(--gradient-ink)]" />
      <div
        className="absolute inset-0 animate-aurora opacity-80"
        style={{ background: "var(--gradient-nebula)", filter: "blur(24px)" }}
      />
      <div className="absolute inset-0 bg-grid opacity-[0.14] mask-fade-b" />

      <svg viewBox="0 0 1200 640" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#5CE1E6" stopOpacity="0.05" />
            <stop offset="0.5" stopColor="#5CE1E6" stopOpacity="0.7" />
            <stop offset="1" stopColor="#007BFF" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="hubGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#5CE1E6" stopOpacity="0.55" />
            <stop offset="1" stopColor="#5CE1E6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#007BFF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#007BFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* twinkling stars */}
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.rad}
            fill="#E6F6FF"
            opacity={s.o}
            className="animate-twinkle"
            style={{ animationDelay: `${s.d}s`, animationDuration: `${3 + (i % 5)}s` }}
          />
        ))}

        {/* edges from hub to each node */}
        {NODES.filter((n) => n.id !== "hub").map((n, i) => {
          const hub = NODES[0];
          return (
            <g key={n.id}>
              <line
                x1={hub.x}
                y1={hub.y}
                x2={n.x}
                y2={n.y}
                stroke="url(#edge)"
                strokeWidth="1"
              />
              <line
                x1={hub.x}
                y1={hub.y}
                x2={n.x}
                y2={n.y}
                stroke="#5CE1E6"
                strokeWidth="1.2"
                strokeDasharray="4 8"
                strokeOpacity="0.7"
                style={{
                  animation: `flow 3.6s linear infinite`,
                  animationDelay: `${i * 0.45}s`,
                }}
              />
            </g>
          );
        })}

        {/* nodes */}
        {NODES.map((n) => {
          const isHub = n.id === "hub";
          const r = n.r ?? 22;
          return (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r={r * 2.4} fill={isHub ? "url(#hubGlow)" : "url(#nodeGlow)"} />
              <circle
                cx={n.x}
                cy={n.y}
                r={r}
                fill={isHub ? "#0A2540" : "#0F1B3A"}
                stroke={isHub ? "#5CE1E6" : "rgba(92,225,230,0.55)"}
                strokeWidth={isHub ? 1.5 : 1}
              />
              {isHub && (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r}
                  fill="none"
                  stroke="#5CE1E6"
                  strokeOpacity="0.45"
                  className="animate-ping-slow"
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                />
              )}
              <text
                x={n.x}
                y={n.y + r + 18}
                textAnchor="middle"
                fontFamily="JetBrains Mono, monospace"
                fontSize="10"
                letterSpacing="2"
                fill="rgba(230,246,255,0.7)"
              >
                {n.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      <style>{`
        @keyframes flow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -120; }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.6; }
          80%, 100% { transform: scale(2.2); opacity: 0; }
        }
        .animate-ping-slow { animation: pingSlow 3.2s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
