import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Ticker() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <motion.div
        style={{ x }}
        className="text-display text-[18vw] whitespace-nowrap leading-none text-foreground/90"
      >
        Authentic · Raw · Candid · Unforgettable ·
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="text-display italic text-[18vw] whitespace-nowrap leading-none text-primary -mt-4"
      >
        Authentic · Raw · Candid · Unforgettable ·
      </motion.div>
    </section>
  );
}
