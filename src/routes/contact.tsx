import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Nav } from "@/components/cv/Nav";
import { Footer } from "@/components/cv/Footer";
import { PageHeader } from "@/components/cv/PageHeader";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Creative Vanguard Photography" },
      {
        name: "description",
        content:
          "Get in touch with Creative Vanguard Photography. Atlanta, GA. Call (770) 954-5487 or send a message.",
      },
      { property: "og:title", content: "Contact — Creative Vanguard" },
      { property: "og:description", content: "Reach out to start the conversation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      <PageHeader
        eyebrow="/ Contact"
        tokens={[{ t: "Let's" }, { t: "talk.", italic: true, color: true }]}
        caption="Atlanta-based, available worldwide. Reach out and we'll get back to you within one business day."
      />


      <section className="px-6 md:px-10 pb-32 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5 space-y-10">
          {[
            { l: "Studio", v: "Creative Vanguard Photography, LLC" },
            { l: "Location", v: "Atlanta, GA & Surrounding Areas" },
            { l: "Phone", v: "(770) 954-5487", h: "tel:7709545487" },
            { l: "Email", v: "Info@creativevanguardphotography.com", h: "mailto:Info@creativevanguardphotography.com" },
          ].map((c) => (
            <div key={c.l}>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">/ {c.l}</div>
              {c.h ? (
                <a href={c.h} className="text-lg md:text-xl hover:text-primary transition break-words">{c.v}</a>
              ) : (
                <div className="text-lg md:text-xl">{c.v}</div>
              )}
            </div>
          ))}

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">/ Follow</div>
            <div className="flex gap-3">
              {[
                { l: "IG", h: "https://www.instagram.com/creativevanguardphotography/" },
                { l: "FB", h: "https://www.facebook.com/The-Creative-Vanguard-Photography-101593525273924" },
                { l: "YT", h: "https://www.youtube.com/channel/UCRi9ds9X9U6zedL0jjoDe4w" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-foreground/30 hover:border-primary hover:text-primary flex items-center justify-center font-mono text-xs uppercase tracking-[0.2em] transition"
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="col-span-12 lg:col-span-7 lg:border-l border-border lg:pl-10 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Subject" name="subject" />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">/ Message</label>
            <textarea
              required
              rows={6}
              className="w-full bg-transparent border-b border-foreground/30 focus:border-primary outline-none py-3 text-lg resize-none transition"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="group inline-flex items-center gap-3 px-8 py-5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors disabled:opacity-60"
          >
            {sent ? "Thanks — we'll be in touch" : "Send Message"}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.form>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">/ {label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-foreground/30 focus:border-primary outline-none py-3 text-lg transition"
      />
    </div>
  );
}
