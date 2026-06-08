import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/cv/Nav";
import { Footer } from "@/components/cv/Footer";
import { PageHeader } from "@/components/cv/PageHeader";
import { cvImages } from "@/components/cv/images";
import { FlipCard } from "@/components/cv/FlipCard";



export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Creative Vanguard Photography" },
      {
        name: "description",
        content:
          "Photography, videography, photo booth rentals, and business consulting from Atlanta's premier visual media studio.",
      },
      { property: "og:title", content: "Services — Creative Vanguard" },
      { property: "og:description", content: "Four disciplines. One standard of excellence." },
    ],
  }),
  component: ServicesPage,
});

const pillars = [
  {
    n: "01",
    t: "Photography",
    slug: "photography",
    img: cvImages.photography,
    alt: cvImages.photographyAlt,
    backRotation: -90,
    intro:
      "Photography is the foundation of everything we build. A single image, captured with purpose, has the power to open doors, establish trust, and communicate what words cannot.",
    who: "Entrepreneurs and personal brands who need imagery that reflects the level they are operating at. Businesses that understand professional visuals are a competitive advantage. Families who want their most important moments preserved with care.",
    packageCount: "4 packages",
  },
  {
    n: "02",
    t: "Videography",
    slug: "video",
    img: cvImages.videography,
    alt: cvImages.videographyAlt,
    backRotation: -90,
    intro:
      "Video is the most persuasive storytelling tool available to a brand today. Most businesses know that. Far fewer are using it with any real intention. That gap is exactly where we work.",
    who: "Brands, businesses, events, and content creators of all sizes that want video produced with discipline — pre-production planning, confident on-set direction, and post that edits with purpose, not just aesthetics.",
    packageCount: "2 packages",
  },
  {
    n: "03",
    t: "Photo Booth Rentals",
    slug: "photobooth",
    img: cvImages.photobooth,
    alt: cvImages.photoboothAlt,
    backRotation: -90,
    intro:
      "The photo booth has been reimagined. Not a rental unit dropped off at your venue — a fully managed, professionally executed brand experience designed to engage your guests and elevate your event.",
    who: "Corporate activations, brand launches, weddings, galas, and private events that want premium output worth sharing — and for brands, organic ambassadors the moment a guest picks up their phone.",
    packageCount: "1 package",
  },
  {
    n: "04",
    t: "Business Consulting",
    slug: "consulting",
    img: cvImages.consulting,
    alt: cvImages.consultingAlt,
    backRotation: -90,
    intro:
      "Creative Vanguard was built from lived experience. Every decision, every challenge navigated, every lesson earned informs the consulting work we bring to our clients. Perspective, not theory.",
    who: "Entrepreneurs, personal brands, and small to mid-sized businesses ready to operate at a higher level — brand strategy, visual identity, content planning, marketing, sales process, and operational coaching.",
    packageCount: "1 package",
  },
] as const;


function ServicesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      <PageHeader
        eyebrow="/ Services"
        tokens={[
          { t: "Four" },
          { t: "disciplines.", italic: true, color: true },
          { br: true },
          { t: "One" },
          { t: "standard." },
        ]}
        caption="Every brand has a story. Every milestone deserves to be remembered. Every business needs to show up in a way that builds trust before a single word is spoken. We exist to make all of that possible."
      />


      {pillars.map((p, i) => (
        <motion.section
          key={p.n}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`px-6 md:px-10 py-24 md:py-32 border-t border-border ${i % 2 ? "bg-card" : ""}`}
        >
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className={`col-span-12 lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
              <FlipCard front={p.img} back={p.alt} alt={p.t} backRotation={p.backRotation} />
            </div>


            <div className="col-span-12 lg:col-span-6">
              <div className="font-mono text-xs text-primary tracking-[0.3em] mb-4">/ {p.n}</div>
              <h2 className="text-display text-6xl md:text-7xl mb-8">{p.t}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{p.intro}</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Who it's for: </span>
                {p.who}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/booking"
                  hash={p.slug}
                  className="group relative inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative group-hover:text-background transition-colors duration-500">
                    See {p.t} Packages
                  </span>
                  <span className="relative group-hover:translate-x-1 group-hover:text-background transition">→</span>
                </Link>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  / {p.packageCount}
                </span>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-6 py-4 border border-foreground/40 font-mono text-xs uppercase tracking-[0.25em] hover:border-foreground transition"
                >
                  Free Consultation →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      <Footer />
    </main>
  );
}
