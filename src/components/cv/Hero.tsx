import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import heroBgAsset from "@/assets/hero-bg.png.asset.json";
const heroBg = heroBgAsset.url;


const EASE = [0.22, 0.9, 0.24, 1] as [number, number, number, number];

const word: Variants = {
  hidden: { y: "108%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.12 + i * 0.07, duration: 1.1, ease: EASE },
  }),
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: 0.4 + i * 0.12, duration: 1.0, ease: EASE },
  }),
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 px-5 sm:px-6 md:px-10 overflow-hidden grain">
      {/* Full-bleed hero image with gradient blend */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <img
          src={heroBg}
          alt="Joshua-John Frank behind the camera on location"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        {/* Dark base wash so text stays legible */}
        <div className="absolute inset-0 bg-background/55" />
        {/* Left-to-right fade into the page background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--background) 0%, color-mix(in oklab, var(--background) 70%, transparent) 35%, transparent 65%, color-mix(in oklab, var(--background) 50%, transparent) 100%)",
          }}
        />
        {/* Bottom fade so the section bleeds into the next */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--background) 80%, transparent) 55%, var(--background) 100%)",
          }}
        />
        {/* Subtle primary ember glow */}
        <div
          className="absolute -right-40 top-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)" }}
        />
      </motion.div>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(var(--bone) 1px, transparent 1px), linear-gradient(90deg, var(--bone) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />


      {/* Top meta strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-12"
      >
        <span>● Atlanta · Worldwide</span>
        <span className="hidden md:inline">Est. 2019 / Vol. VI</span>
        <span>33.7490° N · 84.3880° W</span>
      </motion.div>

      <div className="relative grid grid-cols-12 gap-6 items-end">
        {/* Headline */}
        <div className="col-span-12 lg:col-span-8 relative z-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8 flex items-center gap-3"
          >
            <span className="inline-block w-10 h-px bg-primary" />
            Atlanta's Premier Visual Studio
          </motion.p>

          <h1 className="text-display text-[14vw] sm:text-[13vw] md:text-[10.5vw] lg:text-[9vw] leading-[0.95] sm:leading-[0.92] tracking-[-0.045em] break-words hyphens-none">
            {["We", "Capture"].map((w, i) => (
              <span key={i} className="overflow-hidden inline-block mr-[0.15em] align-bottom">
                <motion.span variants={word} custom={i} initial="hidden" animate="show" className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
            <span className="overflow-hidden inline-block mr-[0.15em] align-bottom">
              <motion.span variants={word} custom={2} initial="hidden" animate="show" className="inline-block">
                every
              </motion.span>
            </span>
            <span className="overflow-hidden inline-block align-bottom">
              <motion.span variants={word} custom={3} initial="hidden" animate="show" className="inline-block italic font-display text-primary">
                moment
              </motion.span>
            </span>
            <br />
            {["so", "you", "never"].map((w, idx) => (
              <span key={w} className="overflow-hidden inline-block mr-[0.15em] align-bottom">
                <motion.span variants={word} custom={4 + idx} initial="hidden" animate="show" className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
            <br />
            {["have", "to"].map((w, idx) => (
              <span key={w} className="overflow-hidden inline-block mr-[0.15em] align-bottom">
                <motion.span variants={word} custom={7 + idx} initial="hidden" animate="show" className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
            <span className="overflow-hidden inline-block align-bottom">
              <motion.span
                variants={word}
                custom={9}
                initial="hidden"
                animate="show"
                className="inline-block italic font-display text-primary"
              >
                miss one.
              </motion.span>
            </span>
          </h1>

        </div>

        {/* Floating accent badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          className="hidden lg:flex col-span-12 lg:col-span-4 flex-col items-end gap-3 self-end pb-4"
        >
          <div className="bg-primary text-primary-foreground px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em]">
            6+ Years
          </div>
          <div className="bg-bone text-ink px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em]">
            5★ Rated
          </div>
        </motion.div>

      </div>

      {/* Lower row */}
      <div className="relative mt-16 sm:mt-24 md:mt-32 lg:mt-40 grid grid-cols-12 gap-6 md:gap-8 items-start md:items-end">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="col-span-12 md:col-span-6 lg:col-span-5 text-[15px] sm:text-base md:text-lg text-muted-foreground max-w-[34ch] sm:max-w-[42ch] leading-[1.65] tracking-[0.005em] text-pretty break-words hyphens-auto"
        >
          <span className="text-foreground font-medium">Award-winning</span> photography, videography, and creative media for those who refuse to settle for ordinary.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row flex-wrap gap-3 md:justify-end"
        >
          <Link
            to="/booking"
            className="group relative inline-flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] overflow-hidden"
          >
            <span className="absolute inset-0 bg-bone translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-75" />
            <span className="relative group-hover:text-bone transition-colors duration-500">Book Free Consultation</span>
            <span className="relative group-hover:text-bone transition-colors">→</span>
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-3 px-6 py-4 border border-foreground/40 hover:border-foreground font-mono text-xs uppercase tracking-[0.25em] transition"
          >
            Explore Services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
