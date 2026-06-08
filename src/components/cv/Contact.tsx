import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-32 overflow-hidden">
      <div className="relative grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">/ Ready to elevate</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-display text-[14vw] md:text-[9vw] lg:text-[8vw]"
          >
            How you are <br />
            <span className="italic text-primary">seen.</span>
          </motion.h2>
          <p className="mt-10 text-lg text-muted-foreground max-w-xl">
            Start with a free 20-minute consultation. No pressure. No obligation. Just clarity on exactly
            what you need and what it will cost.
          </p>

          <div className="mt-10">
            <a
              href="mailto:Info@creativevanguardphotography.com"
              className="group inline-flex items-center gap-4 px-8 py-5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
            >
              Book Your Free Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:border-l border-border lg:pl-10 mt-16 lg:mt-0 space-y-10">
          {[
            { l: "Phone", v: "770.954.5487", h: "tel:7709545487" },
            { l: "Email", v: "Info@creativevanguardphotography.com", h: "mailto:Info@creativevanguardphotography.com" },
            { l: "Location", v: "Atlanta, GA & Surrounding Areas" },
          ].map((c) => (
            <div key={c.l}>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                / {c.l}
              </div>
              {c.h ? (
                <a href={c.h} className="text-lg hover:text-primary transition break-words">
                  {c.v}
                </a>
              ) : (
                <div className="text-lg">{c.v}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
