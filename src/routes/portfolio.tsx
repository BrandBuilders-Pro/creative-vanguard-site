import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { useMemo, useState, useEffect } from "react";
import { Nav } from "@/components/cv/Nav";
import { Footer } from "@/components/cv/Footer";
import { PageHeader } from "@/components/cv/PageHeader";
import { cvImages } from "@/components/cv/images";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Creative Vanguard Photography" },
      {
        name: "description",
        content:
          "Selected work from Creative Vanguard Photography — portraits, lifestyle, events, weddings, and brand imagery across Atlanta.",
      },
      { property: "og:title", content: "Portfolio — Creative Vanguard" },
      { property: "og:description", content: "Selected work — portraits, events, lifestyle, brand." },
      { property: "og:image", content: cvImages.gallery[0] },
    ],
  }),
  component: PortfolioPage,
});

const categories = ["All", "Portraits", "Events", "Lifestyle", "Brand"] as const;
type Cat = (typeof categories)[number];
type Sort = "Featured" | "Newest" | "Random";

// Deterministic category assignment per gallery image
const gallery = cvImages.gallery.map((src, i) => {
  const buckets: Exclude<Cat, "All">[] = ["Portraits", "Events", "Lifestyle", "Brand"];
  return { src, cat: buckets[i % buckets.length], id: i };
});

function PortfolioPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const [sort, setSort] = useState<Sort>("Featured");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(() => {
    const filtered = filter === "All" ? gallery : gallery.filter((g) => g.cat === filter);
    if (sort === "Newest") return [...filtered].reverse();
    if (sort === "Random")
      return [...filtered].sort(() => Math.random() - 0.5);
    return filtered;
  }, [filter, sort]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : (v + 1) % items.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) => (v === null ? v : (v - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, items.length]);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      <PageHeader
        eyebrow="/ Selected work"
        tokens={[
          { t: "The" },
          { t: "portfolio.", italic: true, color: true },
        ]}
        caption="Six years of work across Atlanta and beyond — entrepreneurs, families, brands, weddings, and the everyday moments worth protecting."
      />

      {/* Filters + sort */}
      <section className="px-6 md:px-10 pb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] border transition ${
                filter === c
                  ? "border-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-primary -z-0"
                  transition={{ type: "spring", stiffness: 360, damping: 32 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            / Sort
          </span>
          {(["Featured", "Newest", "Random"] as Sort[]).map((s) => (
            <button
              key={s}
              onClick={() => setSort(s)}
              className={`px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] border transition ${
                sort === s
                  ? "border-foreground text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-10 pb-32">
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[minmax(160px,auto)]"
          >
            <AnimatePresence mode="popLayout">
              {items.map((g, i) => (
                <motion.button
                  key={g.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    delay: (i % 10) * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setLightbox(i)}
                  className={`relative overflow-hidden group ${
                    i % 7 === 0 ? "row-span-2 md:col-span-2" : ""
                  }`}
                >
                  <img
                    src={g.src}
                    alt={`${g.cat} ${g.id + 1}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-bone opacity-0 group-hover:opacity-100 transition">
                    <span>/ {String(g.id + 1).padStart(3, "0")}</span>
                    <span className="text-primary">{g.cat}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          / {items.length} {items.length === 1 ? "image" : "images"} · {filter} · {sort}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && items[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              className="absolute top-6 right-6 w-12 h-12 border border-bone/40 text-bone hover:bg-primary hover:border-primary transition flex items-center justify-center font-mono"
              aria-label="Close"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) => (v === null ? v : (v - 1 + items.length) % items.length));
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-bone/40 text-bone hover:bg-primary hover:border-primary transition flex items-center justify-center"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) => (v === null ? v : (v + 1) % items.length));
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-bone/40 text-bone hover:bg-primary hover:border-primary transition flex items-center justify-center"
              aria-label="Next"
            >
              →
            </button>
            <motion.img
              key={items[lightbox].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              src={items[lightbox].src}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
            />
            <div className="absolute bottom-6 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-bone/70">
              / {String(lightbox + 1).padStart(2, "0")} — {String(items.length).padStart(2, "0")} ·{" "}
              {items[lightbox].cat}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="px-6 md:px-10 py-24 border-t border-border text-center">
        <h2 className="text-display text-5xl md:text-7xl mb-6">
          Ready to make <span className="italic text-primary">yours?</span>
        </h2>
        <Link
          to="/booking"
          className="inline-flex items-center gap-3 px-8 py-5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition"
        >
          Book a Session →
        </Link>
      </section>

      <Footer />
    </main>
  );
}
