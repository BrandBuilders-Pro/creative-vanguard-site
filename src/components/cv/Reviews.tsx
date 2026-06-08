import { motion } from "motion/react";
import { useRef, useState } from "react";

const reviews = [
  {
    q: "All I can say is WOW. Not only did Josh take amazing pictures, he helped us choose the perfect location. I was blown away and will definitely be booking again.",
    n: "Mia Robinson",
    r: "Engagement Session",
  },
  {
    q: "His photography is on another level. One of the most top-quality photographers you can ask for. You will get an awesome experience every single time.",
    n: "James Jones",
    r: "Portrait Session",
  },
  {
    q: "Joshua-John made our entire team feel comfortable and confident on set. The images exceeded every expectation. This is the standard for professional photography.",
    n: "Marcus Williams",
    r: "Corporate Event",
  },
  {
    q: "Joshua-John is a true professional. He captured our wedding day beautifully and made the entire process effortless. Every image tells a story.",
    n: "Ashley & Devon",
    r: "Wedding",
  },
  {
    q: "Hands down the best photographer in Atlanta. The attention to detail, the creativity, the energy on set — everything was first class from start to finish.",
    n: "Tasha Bennett",
    r: "Brand Campaign",
  },
  {
    q: "The photo booth was the hit of our gala. Premium quality prints, an attentive on-site team, and our guests are still talking about it weeks later.",
    n: "Karen Mitchell",
    r: "Corporate Gala",
  },
  {
    q: "Working with Creative Vanguard elevated our entire brand. The visuals immediately changed how clients perceive us. Worth every dollar.",
    n: "Andre Carter",
    r: "Business Branding",
  },
  {
    q: "From the first consultation to the final gallery, the experience was seamless. The images of my family are heirlooms — we will treasure them forever.",
    n: "Lauren Hayes",
    r: "Family Session",
  },
];

const REVIEW_LINK = "https://www.creativevanguardphotography.com/";

export function Reviews() {
  const scroller = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  const visible = showAll ? reviews : reviews.slice(0, 5);

  return (
    <section id="reviews" className="relative py-32">
      <div className="px-6 md:px-10 grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 lg:col-span-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ Client reviews</p>
          <h2 className="text-display text-6xl md:text-8xl">
            What our <br />
            <span className="italic">clients say.</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:self-end flex items-center gap-2 lg:justify-end">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous reviews"
            className="w-11 h-11 border border-border hover:border-primary hover:text-primary transition-colors font-mono text-sm"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next reviews"
            className="w-11 h-11 border border-border hover:border-primary hover:text-primary transition-colors font-mono text-sm"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex overflow-x-auto snap-x snap-mandatory gap-px bg-border scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* leading spacer to match page padding */}
        <div className="shrink-0 w-6 md:w-10 bg-background" aria-hidden />
        {visible.map((r, i) => (
          <motion.figure
            key={r.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.6 }}
            className="snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[420px] bg-background p-8 md:p-10 flex flex-col justify-between min-h-[360px] hover:bg-card transition-colors"
          >
            <div>
              <div className="text-primary text-xl tracking-[0.3em] mb-6">★★★★★</div>
              <blockquote className="text-lg leading-relaxed font-display italic">"{r.q}"</blockquote>
            </div>
            <figcaption className="mt-8 pt-6 border-t border-border flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] gap-3">
              <span className="text-foreground">{r.n}</span>
              <span className="text-muted-foreground text-right">{r.r}</span>
            </figcaption>
          </motion.figure>
        ))}
        <div className="shrink-0 w-6 md:w-10 bg-background" aria-hidden />
      </div>

      <div className="px-6 md:px-10 mt-12 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {showAll ? `Showing all ${reviews.length} reviews` : `Showing ${visible.length} of ${reviews.length}`} — scroll horizontally →
        </p>
        <div className="flex flex-wrap gap-3">
          {!showAll && reviews.length > 5 && (
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-3 px-6 py-4 border border-foreground/40 font-mono text-xs uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition"
            >
              View More <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          )}
          <a
            href={REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
          >
            View All Reviews <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
