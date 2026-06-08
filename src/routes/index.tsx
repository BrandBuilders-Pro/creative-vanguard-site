import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/cv/Nav";
import { Hero } from "@/components/cv/Hero";
import { Marquee } from "@/components/cv/Marquee";
import { Stats } from "@/components/cv/Stats";
import { Awards } from "@/components/cv/Awards";
import { Services } from "@/components/cv/Services";
import { Ticker } from "@/components/cv/Ticker";
import { Founder } from "@/components/cv/Founder";
import { Reviews } from "@/components/cv/Reviews";
import { Contact } from "@/components/cv/Contact";
import { Footer } from "@/components/cv/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creative Vanguard — Atlanta's Premier Visual Media Studio" },
      {
        name: "description",
        content:
          "Award-winning photography, videography, and creative media for entrepreneurs, businesses, and families in Atlanta and beyond.",
      },
      { property: "og:title", content: "Creative Vanguard — Atlanta's Premier Visual Media Studio" },
      {
        property: "og:description",
        content: "We capture the moments that matter most. Photography, videography & creative media in Atlanta.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Pinyon+Script&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Awards />
      <Services />
      <Ticker />
      <Founder />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
