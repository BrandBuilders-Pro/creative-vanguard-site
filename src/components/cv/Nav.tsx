import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

const links: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Booking", to: "/booking" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 backdrop-blur-md bg-background/60 border-b border-border/40"
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2 group" onClick={() => setOpen(false)}>
            <span className="font-display text-xl tracking-tight">Creative</span>
            <span className="font-display italic text-xl text-primary">Vanguard</span>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground ml-2 group-hover:text-foreground transition">
              / ATL
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                className="relative text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/booking"
              className="hidden sm:inline-flex group relative items-center gap-2 px-4 py-2 border border-foreground/80 text-xs font-mono uppercase tracking-[0.2em] overflow-hidden"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative">Book</span>
              <span className="relative">→</span>
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] border border-foreground/30 hover:border-foreground transition"
            >
              <span
                className={`block w-4 h-px bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block w-4 h-px bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-24 px-6"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "text-primary" }}
                    className="block py-4 border-b border-border text-display text-4xl hover:text-primary transition"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mr-3 align-middle">
                      / 0{i + 1}
                    </span>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
