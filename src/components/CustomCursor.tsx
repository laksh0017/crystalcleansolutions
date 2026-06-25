import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 800, damping: 40, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 800, damping: 40, mass: 0.3 });
  const ringX = useSpring(x, { stiffness: 200, damping: 25, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 200, damping: 25, mass: 0.6 });
  const [hover, setHover] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      setHover(!!t.closest("a, button, [role='button'], input, textarea, select, label"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-[#00C896] mix-blend-multiply"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hover ? 0 : 1 }}
        transition={{ duration: 0.18 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border-[1.5px] border-[#00C896]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", width: 40, height: 40, opacity: 0.25 }}
        animate={{ scale: hover ? 1.5 : 1, backgroundColor: hover ? "rgba(0,200,150,0.15)" : "rgba(0,200,150,0)" }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
