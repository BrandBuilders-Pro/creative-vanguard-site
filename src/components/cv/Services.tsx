import { motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    n: "01",
    t: "Photography",
    d: "Portraits, branding, lifestyle, family, and events — guided by strategy and executed with precision.",
    items: ["Personal branding", "Lifestyle & family", "Corporate", "Event coverage"],
  },
  {
    n: "02",
    t: "Videography",
    d: "Brand films, event recaps, and short-form content built to move people. Every frame is purposeful.",
    items: ["Brand films", "Highlight reels", "Social content", "Documentary"],
  },
  {
    n: "03",
    t: "Photo Booth",
    d: "A fully managed premium experience that elevates your event and turns every guest into a memory.",
    items: ["Mirrorless DSLR", "Custom overlays", "Instant share", "On-site attendant"],
  },
  {
    n: "04",
    t: "Consulting",
    d: "Brand strategy, visual identity, marketing, and coaching for businesses ready to operate higher.",
    items: ["Brand strategy", "Visual identity", "Marketing", "Pitch decks"],
  },
];

export function Services() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="services" className="relative px-6 md:px-10 py-32">
      <div className="grid grid-cols-12 gap-6 mb-20">
        <div className="col-span-12 lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ What we create</p>
          <h2 className="text-display text-6xl md:text-7xl">
            Four <br /> Disciplines.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6 self-end">
          <p className="text-lg text-muted-foreground max-w-xl">
            One standard of excellence. Every service built on intentional storytelling, professional
            execution, and a client experience designed to let you stay <span className="italic font-display text-foreground">fully present</span>.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="relative border-b border-border group cursor-pointer overflow-hidden"
          >
            {/* Soft gradient wash instead of full blood-red wipe */}
            <motion.div
              className="absolute inset-0 origin-left pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, color-mix(in oklab, var(--primary) 14%, transparent) 0%, color-mix(in oklab, var(--primary) 6%, transparent) 55%, transparent 100%)",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: hover === i ? 1 : 0, opacity: hover === i ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Thin accent bar on the left edge */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: hover === i ? 1 : 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="relative grid grid-cols-12 gap-6 items-center py-10 md:py-14 px-2">
              <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                {s.n}
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="text-display text-4xl md:text-6xl text-foreground group-hover:translate-x-2 transition-transform duration-500">
                  {s.t}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-4 text-sm md:text-base text-muted-foreground group-hover:text-foreground/90 transition-colors">
                {s.d}
              </div>
              <div className="col-span-12 md:col-span-3 flex flex-wrap gap-2 md:justify-end">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 border border-border group-hover:border-primary/50 group-hover:text-foreground transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
