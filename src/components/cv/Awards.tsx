import { motion } from "motion/react";

export function Awards() {
  return (
    <section className="relative px-6 md:px-10 py-24 border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary)_0%,transparent_60%)] opacity-[0.07] pointer-events-none" />

      <div className="relative grid grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="col-span-12 md:col-span-4 flex justify-center md:justify-start"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-primary/30 border-dashed"
            />
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#1a3a8a] via-[#2456c9] to-[#0a1e4a] shadow-[0_0_60px_-10px_rgba(36,86,201,0.6)] ring-4 ring-bone/10">
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/70">
                Georgia Business Journal
              </div>
              <div className="text-display text-2xl md:text-3xl leading-none mt-1 text-bone">
                BEST OF
              </div>
              <div className="text-display text-3xl md:text-4xl leading-none italic text-bone">
                Georgia
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/70 mt-1">
                Awards
              </div>
              <div className="mt-2 flex gap-2">
                <span className="font-mono text-[10px] px-2 py-0.5 bg-bone text-background rounded-sm">2024</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-primary text-primary-foreground rounded-sm">2025</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <div className="col-span-12 md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-5 flex items-center gap-3"
          >
            <span className="inline-block w-10 h-px bg-primary" />
            / Recognition
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-display text-5xl md:text-7xl leading-[0.9]"
          >
            Voted{" "}
            <span className="italic font-display text-primary">Best of Georgia</span>
            <br />
            <span className="text-foreground/60">two years</span> running.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-6 md:gap-10"
          >
            {[
              { y: "2024", l: "Best of Georgia" },
              { y: "2025", l: "Best of Georgia" },
            ].map((a) => (
              <div key={a.y} className="flex items-baseline gap-3 border-l-2 border-primary pl-4">
                <span className="text-display text-5xl md:text-6xl leading-none">{a.y}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {a.l}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-xl text-base text-muted-foreground leading-relaxed"
          >
            Recognized by the Georgia Business Journal as Atlanta's premier visual media
            studio — back to back. The standard isn't to be noticed. The standard is to be
            chosen.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
