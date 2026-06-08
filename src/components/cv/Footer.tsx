import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 md:px-10 py-16 bg-background">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl">Creative</span>
            <span className="font-display italic text-2xl text-primary">Vanguard</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Atlanta's premier visual media studio. Photography, videography, photo booth, and consulting —
            built for clients who refuse to settle for ordinary.
          </p>
        </div>

        <div className="col-span-6 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">/ Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
            <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition">Portfolio</Link></li>
            <li><Link to="/booking" className="hover:text-primary transition">Booking</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>

        </div>

        <div className="col-span-6 md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">/ Contact</div>
          <ul className="space-y-2 text-sm">
            <li>Atlanta, GA</li>
            <li><a href="tel:7709545487" className="hover:text-primary transition">(770) 954-5487</a></li>
            <li><a href="mailto:Info@creativevanguardphotography.com" className="hover:text-primary transition break-words">Info@creativevanguardphotography.com</a></li>
          </ul>
          <div className="mt-4 flex gap-2">
            {[
              { l: "IG", h: "https://www.instagram.com/creativevanguardphotography/" },
              { l: "FB", h: "https://www.facebook.com/The-Creative-Vanguard-Photography-101593525273924" },
              { l: "YT", h: "https://www.youtube.com/channel/UCRi9ds9X9U6zedL0jjoDe4w" },
            ].map((s) => (
              <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-foreground/30 hover:border-primary hover:text-primary flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] transition">
                {s.l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <div>© {new Date().getFullYear()} Creative Vanguard Photography, LLC</div>
        <div>Best of Georgia · 2024 & 2025</div>
        <div>Crafted with intent ✦</div>
      </div>
    </footer>
  );
}
