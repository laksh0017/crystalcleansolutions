import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 20, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left bg-gradient-to-r from-[#00C896] via-[#0EA5E9] to-[#0057A0]"
      style={{ scaleX }}
    />
  );
}
