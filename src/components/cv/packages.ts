import { cvImages } from "@/components/cv/images";

export const BOOK_BASE = "https://www.creativevanguardphotography.com/service-page/";

export type Bucket = "consult" | "photography" | "video" | "photobooth" | "consulting" | "addon";

export type Pkg = {
  name: string;
  img: string;
  blurb: string;
  href: string;
  tag: string;
  bucket: Bucket;
  featured?: boolean;
  price: string;
  duration: string;
  location: string;
  description: string;
  includes: string[];
};

export const packages: Pkg[] = [
  {
    name: "Complimentary Consultation",
    img: cvImages.pkgConsult,
    blurb: "Start here. A free 20-minute call to align on vision, scope, and the right service for you.",
    href: `${BOOK_BASE}complimentary-consultation`,
    tag: "Free",
    bucket: "consult",
    featured: true,
    price: "Free",
    duration: "20 min",
    location: "Phone / Video",
    description:
      "A no-pressure conversation to understand your vision, the moment you're documenting, and what success looks like. We'll recommend the right package — and tell you honestly if we aren't the right fit.",
    includes: [
      "20-minute discovery call",
      "Vision & scope alignment",
      "Custom package recommendation",
      "Pricing & timeline overview",
    ],
  },
  {
    name: "Portrait Photography",
    img: cvImages.pkgPortrait,
    blurb: "Personal branding and professional portraits with intentional direction and a polished gallery.",
    href: `${BOOK_BASE}portrait-photography`,
    tag: "Photography",
    bucket: "photography",
    price: "Starting at $350",
    duration: "1–2 hr",
    location: "Atlanta, GA",
    description:
      "Headshots and personal branding portraits built for executives, founders, and creatives who need imagery that reflects the level they're operating at.",
    includes: [
      "Pre-shoot creative direction call",
      "1–2 hours of studio or location coverage",
      "Multiple wardrobe & backdrop options",
      "20+ professionally edited high-res images",
      "Private online gallery",
      "Print store access",
    ],
  },
  {
    name: "Lifestyle Photography",
    img: cvImages.pkgLifestyle,
    blurb: "Authentic, candid sessions for individuals, couples, and families — preserved with care.",
    href: `${BOOK_BASE}lifestyle-photography`,
    tag: "Photography",
    bucket: "photography",
    price: "Starting at $450",
    duration: "2 hr",
    location: "Atlanta, GA",
    description:
      "Honest, in-the-moment storytelling for individuals, couples, and families. Light direction, real interaction, imagery that feels like you.",
    includes: [
      "2 hours of on-location coverage",
      "Outfit & location guidance",
      "30+ professionally edited images",
      "Private online gallery",
      "Print store access",
    ],
  },
  {
    name: "Small–Medium Event Coverage",
    img: cvImages.pkgSmallEvent,
    blurb: "Full coverage for private gatherings, launches, and intimate corporate events.",
    href: `${BOOK_BASE}small-medium-event-coverage`,
    tag: "Events",
    bucket: "photography",
    price: "Starting at $750",
    duration: "Up to 4 hr",
    location: "Atlanta, GA",
    description:
      "Documentary-style coverage for private gatherings, brand launches, dinners, and intimate corporate functions where the details matter.",
    includes: [
      "Up to 4 hours of event coverage",
      "Single lead photographer",
      "Candid + posed coverage",
      "75+ professionally edited images",
      "Online gallery delivered within 10 business days",
    ],
  },
  {
    name: "Large Event Coverage",
    img: cvImages.pkgLargeEvent,
    blurb: "Multi-photographer coverage built for conferences, galas, and large-scale activations.",
    href: `${BOOK_BASE}large-event-coverage-photography`,
    tag: "Events",
    bucket: "photography",
    price: "Starting at $1,500",
    duration: "6+ hr",
    location: "Atlanta, GA",
    description:
      "Multi-photographer coverage for conferences, galas, weddings, and full-scale activations where one set of eyes isn't enough.",
    includes: [
      "6+ hours of event coverage",
      "Two professional photographers",
      "Pre-event planning call",
      "Candid, posed, & detail coverage",
      "200+ professionally edited images",
      "Same-week social preview gallery",
    ],
  },
  {
    name: "Videography",
    img: cvImages.pkgVideography,
    blurb: "Brand films, recap reels, and short-form social — direction, capture, and post.",
    href: `${BOOK_BASE}videography`,
    tag: "Video",
    bucket: "video",
    price: "Custom",
    duration: "Half / full day",
    location: "Atlanta, GA",
    description:
      "Brand films, event recaps, and short-form social content. Every project moves through pre-production, on-set direction, and a purposeful edit.",
    includes: [
      "Pre-production & creative direction",
      "Professional 4K capture",
      "Lighting & audio package",
      "Color grading & sound design",
      "One signature edit + social cutdowns",
    ],
  },
  {
    name: "Signature Film Package",
    img: cvImages.pkgSignatureFilm,
    blurb: "Our flagship cinematic engagement — pre-pro, multi-cam capture, full creative edit.",
    href: `${BOOK_BASE}signature-film-package`,
    tag: "Video",
    bucket: "video",
    featured: true,
    price: "Custom",
    duration: "Full production",
    location: "Atlanta, GA",
    description:
      "Our flagship cinematic engagement. Full creative pre-production, multi-camera capture, original sound, and a feature-grade edit built for brand-defining moments.",
    includes: [
      "Full creative pre-production",
      "Multi-cam cinematic capture",
      "Director + DP on set",
      "Original sound design & licensed music",
      "Hero film + supporting short-form cuts",
      "Strategy session on rollout",
    ],
  },
  {
    name: "Business Branding Package",
    img: cvImages.pkgBranding,
    blurb: "Complete brand kit — visuals, identity guidance, and content built to convert.",
    href: `${BOOK_BASE}business-branding-package`,
    tag: "Consulting",
    bucket: "consulting",
    price: "Custom",
    duration: "Multi-session",
    location: "Atlanta, GA",
    description:
      "A complete visual identity engagement — strategy, brand portraits, environment shots, and a content library designed to convert across channels.",
    includes: [
      "Brand strategy session",
      "Full-day photo + video capture",
      "Personal brand portraits",
      "Workspace & lifestyle imagery",
      "30-day content library",
      "Rollout & posting strategy",
    ],
  },
  {
    name: "Photobooth Rental",
    img: cvImages.pkgPhotobooth,
    blurb: "Premium mirrorless booth, custom overlays, on-site attendant, instant sharing.",
    href: `${BOOK_BASE}photobooth-rental`,
    tag: "Experience",
    bucket: "photobooth",
    price: "Starting at $650",
    duration: "3 hr",
    location: "Atlanta, GA",
    description:
      "A fully managed premium photo booth experience. Mirrorless DSLR capture, dye-sub printing, branded overlays, and an on-site attendant — turnkey from setup to breakdown.",
    includes: [
      "Mirrorless DSLR booth",
      "Dye-sublimation prints (unlimited)",
      "Custom branded overlay",
      "Instant digital sharing",
      "On-site attendant",
      "Setup & breakdown included",
    ],
  },
  {
    name: "Additional Hour of Coverage",
    img: cvImages.pkgAddHour,
    blurb: "Add-on extension to any existing booking. $150 per additional hour of coverage.",
    href: `${BOOK_BASE}additional-hour-of-coverage-150-per-hr`,
    tag: "Add-on",
    bucket: "addon",
    price: "$150 / hr",
    duration: "1 hr",
    location: "Atlanta, GA",
    description:
      "Some moments cannot be rushed. When you need more time, we stay. Additional hours keep the creative momentum going without interrupting the flow of your session or event.",
    includes: [
      "Seamless extension of your existing session or event coverage",
      "Must be confirmed in advance or approved on site by the lead photographer",
      "Subject to photographer availability",
      "Billed at package rate — event coverage",
    ],
  },
];

export const FILTERS: { id: Bucket | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "photography", label: "Photography" },
  { id: "video", label: "Video" },
  { id: "photobooth", label: "Photo Booth" },
  { id: "consulting", label: "Consulting" },
  { id: "addon", label: "Add-ons" },
];
