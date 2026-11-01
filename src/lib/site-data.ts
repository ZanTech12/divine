/**
 * ============================================================
 * DIVINE VINE-EDO GLOBAL RESOURCES LTD — Site Content Data
 * ============================================================
 * Edit THIS file to update every text, phone number, address,
 * project or video shown on the website. No other file needs
 * to be touched for day-to-day content updates.
 * ============================================================
 */

export const company = {
  name: "Divine Vine-Edo Global Resources Ltd",
  shortName: "Divine Vine-Edo",
  tagline: "Reliable Solar Energy, Inverters & Electrical Services",
  slogan: "Powering Nigerian homes and businesses with clean, dependable energy.",
  email: "divinesolarworld1@gmail.com",
  website: "www.divinesolarhub.com",
  websiteUrl: "https://www.divinesolarhub.com",
  /** WhatsApp uses international format: Nigerian 0xxx becomes +234xxx */
  whatsappPrimary: "2347033533320",
  whatsappSecondary: "2347019291096",
  workingHours: "Mon – Sat: 8:00 AM – 6:00 PM",
} as const;

export const phones = [
  { display: "0703 353 3320", raw: "+2347033533320", whatsapp: "2347033533320" },
  { display: "0701 929 1096", raw: "+2347019291096", whatsapp: "2347019291096" },
];

export const offices = [
  {
    label: "Gboko Office (Benue State)",
    address: "No 15 J.S Tarka Way, Gboko, Benue State, Nigeria",
    mapsQuery: "J.S Tarka Way, Gboko, Benue State, Nigeria",
  },
  {
    label: "Asaba Shop (Delta State)",
    address:
      "Shop B2115, Ultra Modern Market, Ezeneyi, Opposite Bonssac Junction, Asaba, Delta State, Nigeria",
    mapsQuery: "Ultra Modern Market Asaba, Delta State, Nigeria",
  },
];

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

export const heroStats = [
  { value: "15+", label: "Years of Trade Experience" },
  { value: "2", label: "Offices — Benue & Delta" },
  { value: "300+", label: "Installations Completed" },
  { value: "24/7", label: "After-Sales Support" },
];

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  title: string;
  description: string;
  icon: string; // lucide icon name used in services.tsx
  points: string[];
};

export const services: Service[] = [
  {
    title: "Solar Panel Installation",
    description:
      "Complete rooftop and ground-mounted solar systems for homes, shops, schools and offices — sized to your exact power needs.",
    icon: "Sun",
    points: ["1.5kVA – 20kVA systems", "Mounting & racking", "Net metering ready"],
  },
  {
    title: "Inverter & Battery Systems",
    description:
      "Hybrid inverters with lithium or tubular battery banks that keep your home powered when PHCN takes a break.",
    icon: "BatteryCharging",
    points: ["Lithium & tubular batteries", "Pure-sine inverters", "Automatic changeover"],
  },
  {
    title: "Solar Street Lights",
    description:
      "All-in-one solar street lights for roads, estates, churches, schools and communities — zero electricity bills.",
    icon: "Lightbulb",
    points: ["60W – 200W LED", "Dusk-to-dawn sensors", "2-year warranty"],
  },
  {
    title: "Solar Borehole & Water Pumping",
    description:
      "Solar-powered borehole and pumping systems that deliver clean water to homes, farms and entire communities.",
    icon: "Droplets",
    points: ["Surface & submersible pumps", "Overhead tank systems", "Low maintenance"],
  },
  {
    title: "Electrical Wiring & Installations",
    description:
      "Professional residential and commercial wiring, distribution boards, changeovers and fault-finding by trained electricians.",
    icon: "PlugZap",
    points: ["House & office wiring", "Distribution boards", "Fault troubleshooting"],
  },
  {
    title: "Sales of Solar & Electrical Equipment",
    description:
      "Genuine solar panels, inverters, batteries, cables, breakers and accessories at dealer-friendly prices.",
    icon: "ShoppingCart",
    points: ["Genuine products only", "Wholesale & retail", "Nationwide delivery"],
  },
];

/* ------------------------------------------------------------------ */
/* FOUNDER                                                             */
/* ------------------------------------------------------------------ */

export const founder = {
  name: "Vincent Edochie Mmadukolu",
  role: "Founder & Chief Executive Officer",
  photo: "/images/owner/founder.jpeg",
  bio: [
    "Vincent Edochie Mmadukolu is a seasoned solar energy and electrical professional with deep roots in one of West Africa's largest electrical trading hubs. After completing his secondary education at Ogbaru High School, Ogakuba, in Ogbaru LGA of Anambra State, he learnt his trade at the famous Electrical Dealers International Market, Onitsha/Owerri Road, Obosi, Anambra State — the marketplace where Nigeria's best electrical merchants are trained.",
    "Over the years he has grown from a market apprentice into the founder of Divine Vine-Edo Global Resources Ltd, supplying and installing solar energy systems and electrical equipment for homes, businesses and communities across Benue, Delta and beyond.",
  ],
  education: {
    label: "Education",
    value: "Ogbaru High School, Ogakuba, Ogbaru LGA, Anambra State",
  },
  trade: {
    label: "Trade & Apprenticeship",
    value:
      "Electrical Dealers Int'l Market, Onitsha/Owerri Road, Obosi, Anambra State",
  },
  quote:
    "Power is the heartbeat of every home and business. Our mission is simple — make sure yours never goes dark.",
  highlights: [
    "Trained at Nigeria's largest electrical market",
    "Hands-on approach to every installation",
    "Genuine products, honest advice, fair prices",
    "Personal after-sales support on every project",
  ],
};

/* ------------------------------------------------------------------ */
/* PROJECTS GALLERY                                                    */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  category: "Residential" | "Commercial" | "Community" | "Electrical";
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Rooftop Solar Installation",
    category: "Residential",
    image: "/images/projects/pro1.jpeg",
    description:
      "Complete rooftop solar installation for a family home — panels, mounting rails and safe DC wiring carried out by our in-house technicians.",
  },
  {
    title: "Hybrid Inverter & Battery Bank",
    category: "Residential",
    image: "/images/projects/pro2.jpeg",
    description:
      "Wall-mounted hybrid inverter with lithium battery cabinets, neatly installed with tidy cable management for reliable 24-hour power.",
  },
  {
    title: "Solar Street Light Project",
    category: "Community",
    image: "/images/projects/pro3.jpeg",
    description:
      "All-in-one solar street lights bringing all-night illumination to community roads — no cabling, no electricity bills.",
  },
  {
    title: "Solar-Powered Borehole",
    category: "Community",
    image: "/images/projects/pro4.jpeg",
    description:
      "Solar array driving a borehole pumping system with overhead storage tank — clean water delivered without fuel costs.",
  },
  {
    title: "Commercial Rooftop Array",
    category: "Commercial",
    image: "/images/projects/pro5.jpeg",
    description:
      "Large-scale rooftop solar array for a warehouse facility, engineered to cut daytime generator dependency drastically.",
  },
  {
    title: "Electrical Wiring & Distribution",
    category: "Electrical",
    image: "/images/projects/pro6.jpeg",
    description:
      "Professional distribution board wiring with quality circuit breakers — done safely, tested and certified before handover.",
  },
];

/* ------------------------------------------------------------------ */
/* VIDEO GALLERY                                                       */
/* ------------------------------------------------------------------ */

export type ProjectVideo = {
  title: string;
  description: string;
  poster: string;
  src: string;
  duration: string;
};

export const videos: ProjectVideo[] = [
  {
    title: "Rooftop Solar Installation",
    description:
      "Watch our team mount and secure solar panels on a client's rooftop, from racking to final panel.",
    poster: "/images/videos/video-rooftop-install.jpg",
    src: "/videos/rooftop-solar-installation.mp4",
    duration: "0:15",
  },
  {
    title: "Inverter & Electrical Works",
    description:
      "Close-up of battery cabling, inverter configuration and distribution board wiring in progress.",
    poster: "/images/videos/video-inverter-test.jpg",
    src: "/videos/inverter-electrical-works.mp4",
    duration: "0:15",
  },
  {
    title: "Completed Projects Tour",
    description:
      "A quick tour of finished projects — street lights, borehole systems and happy solar-powered homes.",
    poster: "/images/videos/video-family-tour.jpg",
    src: "/videos/community-projects-tour.mp4",
    duration: "0:15",
  },
];

/* ------------------------------------------------------------------ */
/* WHY US / PROCESS                                                    */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    step: "01",
    title: "Consultation & Site Survey",
    description:
      "We listen to your power needs and inspect your site — free of charge within our service areas.",
  },
  {
    step: "02",
    title: "System Design & Quote",
    description:
      "You receive a clear system design and an honest, itemised quotation — no hidden charges.",
  },
  {
    step: "03",
    title: "Professional Installation",
    description:
      "Our trained technicians install, test and hand over a system that works from day one.",
  },
  {
    step: "04",
    title: "After-Sales Support",
    description:
      "We stay with you — maintenance, upgrades and support are only a phone call away.",
  },
];

export const trustBadges = [
  { icon: "BadgeCheck", label: "Genuine Products Guaranteed" },
  { icon: "ShieldCheck", label: "Warranty-Backed Installations" },
  { icon: "Users", label: "Trained & Certified Technicians" },
  { icon: "Truck", label: "Nationwide Product Delivery" },
];

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Videos", href: "#videos" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];