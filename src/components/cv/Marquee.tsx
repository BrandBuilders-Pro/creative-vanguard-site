const items = [
  "Photography",
  "Videography",
  "Brand Films",
  "Photo Booth",
  "Consulting",
  "Editorial",
  "Documentary",
  "Events",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="relative py-10 border-y border-border overflow-hidden bg-background">
      <div className="marquee-mask flex animate-scroll-x whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="text-display text-[12vw] md:text-[8vw] px-8 flex items-center gap-8 text-foreground/90"
          >
            {t}
            <span className="text-primary text-3xl md:text-5xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
