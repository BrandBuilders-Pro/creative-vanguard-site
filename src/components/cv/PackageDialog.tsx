import { motion, AnimatePresence } from "motion/react";
import type { Pkg } from "./packages";

export function PackageDialog({ pkg, onClose }: { pkg: Pkg | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {pkg && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md flex items-center justify-center p-3 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-background border border-border shadow-2xl shadow-black/60"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center border border-bone/30 bg-background/80 backdrop-blur hover:bg-primary hover:text-primary-foreground hover:border-primary transition font-mono text-sm"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden">
                <img src={pkg.img} alt={pkg.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:bg-gradient-to-r" />
                <span className="absolute top-4 left-4 px-2 py-1 bg-background/90 backdrop-blur font-mono text-[10px] uppercase tracking-[0.25em]">
                  / {pkg.tag}
                </span>
              </div>

              <div className="p-6 md:p-10 flex flex-col">
                <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-3">
                  Package Details
                </div>
                <h2 className="text-display text-3xl md:text-5xl leading-[0.95] mb-6">{pkg.name}</h2>

                <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-border">
                  <Stat label="Price" value={pkg.price} />
                  <Stat label="Duration" value={pkg.duration} />
                  <Stat label="Location" value={pkg.location} />
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  / What's Included
                </div>
                <ul className="space-y-2 mb-8">
                  {pkg.includes.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-1 shrink-0">✦</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-border">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    / Cancellation Policy
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    Schedules change — we get it. To avoid a $50 late adjustment fee, all
                    changes or cancellations must be submitted no later than 24 hours before
                    your scheduled session by phone or email.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={pkg.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition font-mono text-xs uppercase tracking-[0.25em]"
                    >
                      Book Now <span>→</span>
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-4 border border-foreground/30 hover:border-foreground transition font-mono text-xs uppercase tracking-[0.25em]"
                    >
                      Keep Browsing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
        {label}
      </div>
      <div className="font-display text-base leading-tight">{value}</div>
    </div>
  );
}
