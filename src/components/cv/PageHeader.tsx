import { motion, type Variants } from "motion/react";

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.9,
      ease: [0.2, 0.9, 0.2, 1] as [number, number, number, number],
    },
  }),
};

type Token = { t?: string; italic?: boolean; color?: boolean; br?: boolean };

export function PageHeader({
  eyebrow,
  tokens,
  caption,
}: {
  eyebrow: string;
  tokens: Token[];
  caption?: string;
}) {
  let i = 0;
  return (
    <section className="relative pt-40 pb-16 px-6 md:px-10 grain overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6 flex items-center gap-3"
      >
        <span className="inline-block w-10 h-px bg-primary" />
        {eyebrow}
      </motion.p>

      <h1 className="text-display text-[16vw] md:text-[10vw] leading-[0.88]">
        {tokens.map((tk, idx) => {
          if (tk.br) return <br key={`br-${idx}`} />;
          const ci = i++;
          return (
            <span key={idx} className="overflow-hidden inline-block mr-[0.18em] align-bottom">
              <motion.span
                variants={word}
                custom={ci}
                initial="hidden"
                animate="show"
                className={`inline-block ${tk.italic ? "italic font-display" : ""} ${
                  tk.color ? "text-primary" : ""
                }`}
              >
                {tk.t}
              </motion.span>
            </span>
          );
        })}
      </h1>

      {caption && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + tokens.length * 0.05, duration: 0.8 }}
          className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          {caption}
        </motion.p>
      )}
    </section>
  );
}
