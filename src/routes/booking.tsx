import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Nav } from "@/components/cv/Nav";
import { Footer } from "@/components/cv/Footer";
import { PageHeader } from "@/components/cv/PageHeader";
import { PackageDialog } from "@/components/cv/PackageDialog";
import { packages, FILTERS, type Bucket, type Pkg } from "@/components/cv/packages";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Session — Creative Vanguard Photography" },
      {
        name: "description",
        content:
          "Browse photography, videography, photo booth, and consulting packages. Book your free consultation today.",
      },
      { property: "og:title", content: "Online Booking — Creative Vanguard" },
      { property: "og:description", content: "Browse service offerings and book a free consultation." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [openPkg, setOpenPkg] = useState<Pkg | null>(null);
  const [active, setActive] = useState<Bucket | "all">("all");

  // Sync filter with URL hash so /booking#photography deep-links from Services
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "") as Bucket | "all" | "";
      if (h && FILTERS.some((f) => f.id === h)) {
        setActive(h as Bucket | "all");
        // Wait a tick so the layout settles before scrolling
        requestAnimationFrame(() => {
          const grid = document.getElementById("packages");
          if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const consult = useMemo(() => packages.find((p) => p.bucket === "consult")!, []);
  const visible = useMemo(
    () =>
      packages.filter(
        (p) => p.bucket !== "consult" && (active === "all" || p.bucket === active),
      ),
    [active],
  );

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      <PageHeader
        eyebrow="/ Online booking"
        tokens={[
          { t: "Lock" },
          { t: "your" },
          { t: "date.", italic: true, color: true },
        ]}
        caption="Start with a free consultation, or jump to packages by discipline. Tap any card for full details."
      />

      {/* Start-here consultation — compact on mobile */}
      <section className="px-4 md:px-10 -mt-4 mb-10 md:mb-16">
        <motion.button
          type="button"
          onClick={() => setOpenPkg(consult)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group w-full text-left flex flex-col md:grid md:grid-cols-12 md:gap-6 md:items-center gap-3 p-5 md:p-8 border border-primary/40 bg-primary/[0.05] hover:bg-primary/[0.09] transition"
        >
          <div className="md:col-span-2 flex items-center gap-3 md:block">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">/ Start here</span>
            <span className="md:hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Free · 20 min</span>
            <span className="hidden md:block mt-2 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground">Free · 20 min</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-xl md:text-3xl text-foreground leading-tight">
              Not sure which fits? <span className="text-primary italic">Book a free consultation.</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 hidden md:block">
              A no-pressure 20-minute call. We'll align on vision, scope, and the right service for you.
            </p>
          </div>
          <div className="md:col-span-2 md:text-right">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-primary group-hover:translate-x-1 transition-transform">
              View details →
            </span>
          </div>
        </motion.button>
      </section>

      {/* Sticky filter strip */}
      <div
        id="packages"
        className="sticky top-[68px] md:top-[80px] z-40 bg-background/95 backdrop-blur border-y border-border scroll-mt-[68px] md:scroll-mt-[80px]"
      >
        <div className="px-4 md:px-10 py-2.5 md:py-4 flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-none [-webkit-overflow-scrolling:touch]">
          <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground shrink-0 mr-2">
            / Filter
          </span>
          {FILTERS.map((f) => {
            const isActive = active === f.id;
            const count =
              f.id === "all"
                ? packages.filter((p) => p.bucket !== "consult").length
                : packages.filter((p) => p.bucket === f.id).length;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`shrink-0 px-3 md:px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] border transition ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-foreground/20 hover:border-foreground/60 text-foreground"
                }`}
              >
                {f.label} <span className="opacity-60 ml-1">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="px-4 md:px-10 pt-8 md:pt-10 pb-32">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
          >
            {visible.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
                className="group bg-background hover:bg-card transition-colors p-6 flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setOpenPkg(p)}
                  className="relative aspect-[4/3] overflow-hidden mb-6 text-left"
                  aria-label={`View ${p.name} package details`}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur font-mono text-[10px] uppercase tracking-[0.25em]">
                    / {p.tag}
                  </span>
                  {p.featured && (
                    <span className="absolute top-3 right-3 px-2 py-1 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-[0.25em]">
                      Popular
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-3 py-1.5 bg-background/80 backdrop-blur border border-bone/30 font-mono text-[10px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition">
                    View details →
                  </span>
                </button>

                <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:text-primary transition">
                  {p.name}
                </h3>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
                  {p.price}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.blurb}</p>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOpenPkg(p)}
                    className="flex-1 px-4 py-3 border border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition font-mono text-[10px] uppercase tracking-[0.25em]"
                  >
                    Package Details
                  </button>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition font-mono text-[10px] uppercase tracking-[0.25em] text-center"
                  >
                    Book Now →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="text-center text-muted-foreground py-20 font-mono text-xs uppercase tracking-[0.3em]">
            No packages in this category yet.
          </p>
        )}
      </section>

      <PackageDialog pkg={openPkg} onClose={() => setOpenPkg(null)} />

      <Footer />
    </main>
  );
}
