import * as React from "react";

/**
 * Premium animated galaxy background — pure CSS, GPU-friendly.
 * Layered nebula glow + dual starfield drift + cyan aurora wash.
 * No canvas, no JS RAF, no LCP impact.
 */
export function GalaxyBackground({ className = "" }: { className?: string }) {
  const stars = React.useMemo(() => generateStars(120), []);
  const farStars = React.useMemo(() => generateStars(80, true), []);

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Base space gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-ink)]" />
      {/* Nebula */}
      <div
        className="absolute inset-0 animate-aurora"
        style={{ background: "var(--gradient-nebula)", filter: "blur(20px)" }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.18] mask-fade-b" />
      {/* Cyan northern-light wash */}
      <div
        className="absolute -top-32 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 animate-aurora"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(92,225,230,0.28) 0%, rgba(0,123,255,0.18) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Far stars (slow drift) */}
      <div className="absolute inset-x-0 top-0 h-[200%] animate-drift" style={{ animationDuration: "180s" }}>
        <svg viewBox="0 0 1200 1600" className="h-full w-full" preserveAspectRatio="none">
          {farStars.map((s, i) => (
            <circle key={i} cx={s.x * 12} cy={s.y * 16} r={s.r * 0.6} fill="#9BD8FF" opacity={s.o * 0.5} />
          ))}
        </svg>
      </div>
      {/* Near stars (twinkling) */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1200 800" className="h-full w-full" preserveAspectRatio="none">
          {stars.map((s, i) => (
            <circle
              key={i}
              cx={s.x * 12}
              cy={s.y * 8}
              r={s.r}
              fill="#E6F6FF"
              opacity={s.o}
              className="animate-twinkle"
              style={{ animationDelay: `${(i % 10) * 0.4}s`, animationDuration: `${3 + (i % 5)}s` }}
            />
          ))}
        </svg>
      </div>
      {/* Vignette fade to background at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

function generateStars(n: number, far = false) {
  const out: { x: number; y: number; r: number; o: number }[] = [];
  // deterministic pseudo-random (no hydration mismatch)
  let seed = far ? 7919 : 104729;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < n; i++) {
    out.push({
      x: rand() * 100,
      y: rand() * 100,
      r: far ? 0.6 + rand() * 0.6 : 0.5 + rand() * 1.3,
      o: 0.3 + rand() * 0.7,
    });
  }
  return out;
}
