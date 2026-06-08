import { motion } from "motion/react";

const stats = [
  { k: "5★", l: "Google Rating", s: "All Platforms" },
  { k: "2×", l: "Best in Georgia", s: "2024 & 2025" },
  { k: "6+", l: "Years In Business", s: "Since 2019" },
  { k: "04", l: "Service Pillars", s: "One Standard" },
];

export function Stats() {
  return (
    <section className="relative px-6 md:px-10 py-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="bg-background p-8 md:p-10 group hover:bg-card transition-colors"
          >
            <div className="text-display text-6xl md:text-7xl text-primary group-hover:translate-x-1 transition-transform">
              {s.k}
            </div>
            <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">{s.l}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.s}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
