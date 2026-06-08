import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/cv/Nav";
import { Footer } from "@/components/cv/Footer";
import { PageHeader } from "@/components/cv/PageHeader";
import { cvImages } from "@/components/cv/images";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Joshua-John Frank — Creative Vanguard" },
      {
        name: "description",
        content:
          "Meet Joshua-John Frank, founder and creative director of Creative Vanguard Photography — Atlanta's award-winning visual media studio.",
      },
      { property: "og:title", content: "About — Creative Vanguard" },
      {
        property: "og:description",
        content: "Some photographers show up with a camera. Joshua-John Frank shows up with a purpose.",
      },
    ],
  }),
  component: AboutPage,
});

const galleryStrip = [
  cvImages.founderPhoto1,
  cvImages.founderPhoto4,
  cvImages.founderPhoto5,
  cvImages.founderPhoto2,
  cvImages.founderPhoto3,
];

function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      <PageHeader
        eyebrow="/ Founder & Creative Director"
        tokens={[
          { t: "Joshua-John" },
          { br: true },
          { t: "Frank.", italic: true, color: true },
        ]}
      />


      {/* Strip gallery */}
      <section className="relative overflow-hidden border-y border-border">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex gap-0"
        >
          {[...galleryStrip, ...galleryStrip].map((src, i) => (
            <div key={i} className="w-[60vw] md:w-[28vw] flex-shrink-0 aspect-[4/3]">
              <img src={src} alt="" className="w-full h-full object-cover md:grayscale md:hover:grayscale-0 transition duration-700" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Story — tight 5/7 split, narrative only */}
      <section className="px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
            >
              / The story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 0.9, 0.24, 1] }}
              className="text-display font-black text-5xl md:text-7xl leading-[0.95] mt-6"
            >
              He did not wait for <span className="italic text-primary">permission.</span> He built the table for <span className="italic">creators.</span>
            </motion.h2>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          variants={{ hidden: {}, show: {} }}
          className="col-span-12 lg:col-span-7 space-y-7 text-lg leading-relaxed text-muted-foreground"
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}>
            Instead of waiting for a seat at the table, Joshua-John built his own.{" "}
            <span className="text-foreground font-medium">Creative Vanguard is a product of identifying a gap and building a solution.</span>
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}>
            Philadelphia raised. Atlanta made. Joshua-John is the founder and Creative Director of Creative Vanguard
            Photography, a full-service creative agency rooted in visual storytelling, creative direction, strategy,
            and design. Since 2019, Creative Vanguard has become one of Atlanta's most trusted names for brands and
            individuals who are serious about finding not just a creator, but a trusted advisor. People get tired of
            searching for a new creative partner for every aspect of their lives. Creative Vanguard becomes that
            home — one trusted team that simplifies that problem for good.
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}>
            The agency was born from a personal realization. As someone constantly evolving — personally,
            professionally, and creatively — Joshua-John found himself searching for a creative partner who could
            keep up. Someone who understood more than one dimension of who he was becoming. That person did not
            exist. And when he looked around, he realized he was not the only one looking.
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}>
            People wanted one trusted team that could move with them through all of it. The business launches. The
            personal brand. The milestone moments. The visual stories worth telling. Joshua-John saw the gap, had
            the experience to fill it, and built Creative Vanguard around exactly that need.
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}>
            What separates him is what he brought with him. Thirteen years at the executive level inside some of the
            most recognized corporations in the country, closing hundreds of millions in solutions and services.
            That career trained him to solve problems quickly, identify what a client actually needs, build the
            strategy around it, and execute. Those skills transferred directly into every client engagement at Creative Vanguard.
          </motion.p>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}
            className="text-foreground font-medium"
          >
            When you hire Creative Vanguard, you are not just hiring a creative team. You are hiring a strategist
            with a lens and a vision.
          </motion.p>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ duration: 1, ease: [0.22, 0.9, 0.24, 1] }}
            className="font-display italic text-3xl md:text-4xl text-foreground leading-tight"
          >
            We capture every moment so you <span className="text-primary">never have to miss one.</span>
          </motion.p>
        </motion.div>
      </section>

      {/* Studio — its own full section with anchored heading */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-border bg-card/40">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
              >
                / The studio
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 0.9, 0.24, 1] }}
                className="text-display text-4xl md:text-6xl leading-[0.95] mt-6 text-primary"
              >
                Creative Vanguard
                <br />
                <span className="text-foreground">Atlanta, GA</span>
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.9, 0.24, 1] }}
                className="mt-6 inline-flex items-center gap-3 px-4 py-2 border border-primary/40 bg-primary/5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary w-fit"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                Best in Georgia · 2024 & 2025
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            variants={{ hidden: {}, show: {} }}
            className="col-span-12 lg:col-span-7 space-y-7 text-lg leading-relaxed text-muted-foreground"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 1, ease: [0.22, 0.9, 0.24, 1] }}
              className="font-display italic text-2xl md:text-3xl text-foreground leading-snug"
            >
              When you trust us with your moment, we protect it like it is our own.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}
            >
              That is not a tagline. It is the foundation Creative Vanguard Photography was built on.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}
            >
              Founded in Atlanta in 2019, Creative Vanguard has grown into one of the city's most trusted visual
              media studios. Recognized by the Georgia Business Journal as a{" "}
              <span className="text-foreground font-medium">Best in Georgia</span> award winner in both 2024 and
              2025, the reputation speaks for itself. We serve entrepreneurs, businesses, corporations, nonprofits,
              faith-based organizations, and families who understand that the quality of their visuals directly
              reflects the quality of their brand.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}
            >
              This is not a transactional studio. We do not hand you a package, show up, and disappear. Every
              engagement starts with a real conversation about who you are, what you are building, and what you
              need the world to see. That understanding drives every creative decision from the first conversation
              to the final delivery.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}
            >
              <span className="text-primary font-medium">
                Photography. Videography. Photo Booth Rentals. Business Consulting.
              </span>{" "}
              Four robust solutions built around one standard of excellence.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}
            >
              What clients remember most is not just the content that was captured. It is how they felt during the
              process. Seen. Prepared. Confident. Present. That experience is not accidental. It is intentional,
              refined, and protected in everything we do.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 1, ease: [0.22, 0.9, 0.24, 1] }}
              className="text-foreground"
            >
              That is the promise we make to every client who trusts us with their story.{" "}
              <span className="text-primary font-medium">We look forward to working with you!</span>
            </motion.p>
          </motion.div>


        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden">
            <img src={cvImages.founderPhoto1} alt="Joshua-John Frank on location" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4">
            <div className="overflow-hidden">
              <img src={cvImages.founderPhoto4} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src={cvImages.founderPhoto5} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/booking" className="group inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors">
            Book a Session <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link to="/portfolio" className="group inline-flex items-center gap-3 px-6 py-4 border border-foreground/40 font-mono text-xs uppercase tracking-[0.25em] hover:border-foreground transition">
            See the Work →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
