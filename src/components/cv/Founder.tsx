import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import ownerAsset from "@/assets/owner.png.asset.json";
const headshot = ownerAsset.url;


export function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section id="founder" ref={ref} className="relative px-6 md:px-10 py-32 bg-card grain overflow-hidden">
      <div className="grid grid-cols-12 gap-8 items-center">
        <motion.div style={{ y }} className="col-span-12 lg:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={headshot} alt="Joshua-John Frank" className="w-full h-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-4">
            <span
              tabIndex={0}
              className="signature-shimmer text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] cursor-pointer outline-none pb-2"
              style={{ fontFamily: '"Pinyon Script", "Snell Roundhand", cursive', lineHeight: 1.25, paddingTop: "0.15em", paddingBottom: "0.3em" }}
            >
              Joshua-John Frank
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/80 pb-1 whitespace-nowrap">ATL · 2019</span>
          </div>

        </motion.div>

        <div className="col-span-12 lg:col-span-7 lg:pl-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6"
          >
            / Meet the founder
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 0.9, 0.24, 1] }}
            className="text-display font-black text-5xl md:text-7xl leading-[0.95] mb-10"
          >
            He did not wait for <span className="italic text-primary">permission.</span> He built the table for <span className="italic">creators.</span>
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            variants={{ hidden: {}, show: {} }}
            className="space-y-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}>
              Instead of waiting for a seat at the table, Joshua-John built his own.{" "}
              <span className="text-foreground font-medium">Creative Vanguard is a product of identifying a gap and building a solution.</span>
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}>
              Philadelphia raised. Atlanta made. Founder and Creative Director of Creative Vanguard Photography —
              a full-service creative agency rooted in visual storytelling, creative direction, strategy, and design.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}>
              Thirteen years at the executive level taught him to solve problems quickly, identify what a client
              actually needs, build the strategy around it, and execute. When you hire Creative Vanguard, you are
              not just hiring a creative team. You are hiring a strategist with a lens and a vision.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 1, ease: [0.22, 0.9, 0.24, 1] }}
              className="font-display italic text-2xl md:text-3xl text-foreground"
            >
              We capture every moment so you never have to miss one.
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mt-10">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Read Full Story <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-6 py-4 border border-foreground/40 hover:border-foreground font-mono text-xs uppercase tracking-[0.25em] transition"
            >
              Work Together →
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
