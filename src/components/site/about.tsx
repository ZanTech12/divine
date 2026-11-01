
import Image from "next/image";
import {
  Target,
  Eye,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Landmark,
  Zap,
  Award,
  ArrowUpRight,
  Building2,
  BadgeCheck,
  Sparkles,
  MapPin,
  FileCheck2,
} from "lucide-react";

import { company, offices } from "@/lib/site-data";
import { Reveal } from "@/app/reveal";

const websiteUrl = "https://www.divinesolarhub.com";

const pillars = [
  {
    icon: Eye,
    number: "01",
    title: "Our Vision",
    text: "To be one of Nigeria's most trusted names in solar energy and electrical solutions — a company every household and business can rely on for light that never fails.",
  },
  {
    icon: Target,
    number: "02",
    title: "Our Mission",
    text: "To supply genuine solar and electrical products, install them with professional skill, and back every job with honest advice and dependable after-sales support.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Our Values",
    text: "Integrity in every deal, quality in every product, safety in every wiring job, and respect for every customer — from a single bulb to a full estate project.",
  },
];

const advantages = [
  "CAC-registered limited liability company",
  "Genuine solar and electrical products",
  "Professional installation team",
  "Fair and transparent pricing",
  "Reliable after-sales support",
  "Proper invoices and warranties",
];

const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${websiteUrl}/#organization`,
  name: company.name,
  url: websiteUrl,
  description:
    "Divine Vine-Edo Global Resources Ltd is a Nigerian solar energy and electrical solutions company providing solar power systems, inverters, batteries, solar street lights and electrical installation services.",
  founder: {
    "@type": "Person",
    "@id": `${websiteUrl}/#founder`,
    name: "Vincent Edochie Mmadukolu",
    jobTitle: "Founder",
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Gboko",
      addressRegion: "Benue State",
      addressCountry: "NG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Ultra Modern Market",
      addressLocality: "Asaba",
      addressRegion: "Delta State",
      addressCountry: "NG",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  knowsAbout: [
    "Solar energy systems",
    "Solar panel installation",
    "Solar inverters",
    "Solar batteries",
    "Solar street lights",
    "Electrical installations",
    "Renewable energy solutions",
  ],
  ...(company.whatsappPrimary
    ? {
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${company.whatsappPrimary}`,
          contactType: "customer service",
          areaServed: "NG",
          availableLanguage: ["English"],
        },
      }
    : {}),
};

export function About() {
  const locations = offices.slice(0, 2);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#071321] py-16 sm:py-20 lg:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companySchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* INTRODUCTION */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <Reveal variant="fade" duration={900} easing="premium">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-300">
              <Sparkles className="h-4 w-4" />
              About Our Company
            </span>
          </Reveal>

          <Reveal
            variant="up"
            delay={120}
            duration={1000}
            easing="premium"
          >
            <h2
              id="about-heading"
              className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl"
            >
              Powering Homes.
              <span className="block text-amber-400">
                Empowering Businesses.
              </span>
            </h2>
          </Reveal>

          <Reveal
            variant="blur"
            delay={220}
            duration={1000}
            easing="elegant"
          >
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base lg:text-lg">
              {company.name} provides solar energy solutions, quality
              electrical products and professional engineering services
              for homes, businesses and communities across Nigeria.
            </p>
          </Reveal>

          <Reveal
            variant="zoom"
            delay={320}
            duration={800}
            easing="premium"
          >
            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-amber-400" />
          </Reveal>
        </div>

        {/* COMPANY INFORMATION AND CAC CERTIFICATE */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* COMPANY INFORMATION */}
          <Reveal variant="right" duration={1000} easing="premium">
            <div className="min-w-0">

              <Reveal variant="fade" duration={800}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <Building2 className="h-5 w-5 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Who We Are
                  </span>
                </div>
              </Reveal>

              <Reveal variant="up" delay={100} duration={900}>
                <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                  A Nigerian company built on{" "}
                  <span className="text-amber-400">
                    energy, integrity and growth.
                  </span>
                </h3>
              </Reveal>

              <div className="mt-7 space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
                <Reveal variant="fade" delay={100} duration={850}>
                  <p>
                    <strong className="font-bold text-white">
                      {company.name}
                    </strong>{" "}
                    is a Nigerian solar energy and electrical resources
                    company headquartered in Gboko, Benue State, with a
                    trading shop in the Ultra Modern Market, Asaba, Delta
                    State. We specialize in solar power systems, inverters,
                    batteries, solar street lights and electrical
                    installations.
                  </p>
                </Reveal>

                <Reveal variant="up" delay={160} duration={850}>
                  <p>
                    Legitimacy matters when you are investing in equipment
                    that must serve your home or business for years.
                    That is why we operate as an incorporated limited
                    liability company registered with the Corporate
                    Affairs Commission (CAC) of Nigeria. With us, you
                    receive proper invoices, warranties and documentation
                    for every purchase and installation.
                  </p>
                </Reveal>

                <Reveal variant="up" delay={220} duration={850}>
                  <p>
                    Nigeria&apos;s power challenge demands a solution
                    that is clean, quiet and cost-effective. That is
                    exactly what we aim to deliver: solar systems sized
                    to your real needs, installed using suitable
                    equipment and professional workmanship — so your
                    home or business can enjoy dependable electricity.
                  </p>
                </Reveal>

                <Reveal variant="up" delay={280} duration={850}>
                  <p>
                    From a small flat that needs light at night, to a
                    shop that must never miss a sale, to a community
                    that deserves street lights and clean water — we
                    provide solar energy and electrical solutions
                    designed around different customer needs.
                  </p>
                </Reveal>
              </div>

              {/* ADVANTAGES */}
              <Reveal variant="up" delay={150} duration={950}>
                <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-500 hover:border-amber-400/30 sm:p-7">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                      <BadgeCheck className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        Why Customers Choose Us
                      </h4>
                      <p className="mt-1 text-xs text-slate-400">
                        Quality, professionalism and accountability.
                      </p>
                    </div>
                  </div>

                  <ul className="grid gap-4 sm:grid-cols-2">
                    {advantages.map((item, index) => (
                      <li
                        key={item}
                        className="group flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-sm font-medium leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* OFFICE LOCATIONS */}
              <div
                className="mt-7 grid gap-3 sm:grid-cols-2"
                aria-label="Company office locations"
              >
                {locations.map((office, index) => (
                  <Reveal
                    key={office.address}
                    variant={index === 0 ? "left" : "right"}
                    delay={index * 120}
                    duration={900}
                    easing="premium"
                  >
                    <address className="group flex h-full min-w-0 items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 not-italic transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.06]">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400 transition-transform duration-300 group-hover:scale-110" />

                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                          {index === 0 ? "Head Office" : "Trading Location"}
                        </p>
                        <p className="mt-1 break-words text-sm font-semibold leading-relaxed text-white">
                          {office.address.replace(", Nigeria", "")}
                        </p>
                      </div>
                    </address>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CAC CERTIFICATE */}
          <div className="mx-auto w-full min-w-0 max-w-[520px]">
            <Reveal variant="up" duration={1000} easing="premium">
              <div className="rounded-[26px] border border-white/10 bg-[#111f30] p-4 shadow-2xl transition-all duration-500 hover:border-amber-400/30 sm:p-6">

                {/* Certificate Header */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <Reveal variant="fade" duration={800}>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
                        Business Credentials
                      </span>
                    </Reveal>

                    <Reveal variant="up" delay={100} duration={800}>
                      <h3 className="mt-2 text-lg font-extrabold text-white sm:text-xl">
                        Official CAC Certificate
                      </h3>
                    </Reveal>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-400">
                    <Landmark className="h-6 w-6" />
                  </div>
                </div>

                {/* Certificate Image - independent of Reveal */}
                <div className="relative w-full overflow-hidden rounded-xl border-4 border-white bg-white shadow-xl">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/projects/cert.jpeg"
                      alt={`Corporate Affairs Commission Certificate of Incorporation for ${company.name}, Nigeria`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-contain p-2 transition-transform duration-700 hover:scale-[1.02] sm:p-3"
                    />
                  </div>
                </div>

                {/* Certificate Caption */}
                <Reveal variant="up" delay={150} duration={850}>
                  <div className="mt-5 flex items-center gap-3 rounded-xl border border-amber-400/15 bg-amber-400/[0.06] p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-[#071321]">
                      <FileCheck2 className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">
                        Certificate of Incorporation
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">
                        Corporate Affairs Commission, Nigeria
                      </p>
                    </div>

                    <ShieldCheck className="ml-auto h-6 w-6 shrink-0 text-amber-400" />
                  </div>
                </Reveal>

                {/* Legal Status */}
                <Reveal variant="up" delay={220} duration={850}>
                  <div className="mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.06] p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                        <ShieldCheck className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-white">
                          Legally Incorporated
                        </p>
                        <p className="mt-1 text-xs text-emerald-300">
                          Registered with CAC, Nigeria
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      <strong className="text-white">
                        {company.name}
                      </strong>{" "}
                      is an incorporated limited liability company
                      registered with the Corporate Affairs Commission
                      of Nigeria.
                    </p>
                  </div>
                </Reveal>
              </div>
            </Reveal>

            {/* Corporate Identity Badge */}
            <Reveal
              variant="fade"
              delay={250}
              duration={900}
              easing="premium"
            >
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#17283b] p-4 shadow-xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <Award className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Corporate Identity
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Official CAC documentation
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* VISION, MISSION AND VALUES */}
        <div className="mt-20 lg:mt-32">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Reveal variant="fade" duration={850}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                What Guides Us
              </span>
            </Reveal>

            <Reveal variant="up" delay={120} duration={950}>
              <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                Our Foundation for Excellence
              </h3>
            </Reveal>

            <Reveal variant="blur" delay={220} duration={950}>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Our vision, mission and values define how we work,
                serve our customers and build lasting relationships.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal
                  key={pillar.title}
                  variant="up"
                  delay={index * 140}
                  duration={1000}
                  easing="premium"
                >
                  <article className="group relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#15263a] to-[#0d1a2a] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 sm:p-8">

                    <span
                      aria-hidden="true"
                      className="absolute right-6 top-5 text-6xl font-black text-white/[0.035] transition-all duration-500 group-hover:scale-110 group-hover:text-amber-400/[0.08]"
                    >
                      {pillar.number}
                    </span>

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-400 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#071321]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h4 className="relative mt-7 text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-amber-400">
                      {pillar.title}
                    </h4>

                    <p className="mt-4 text-sm leading-8 text-slate-400">
                      {pillar.text}
                    </p>

                    <div className="mt-7 h-1 w-12 origin-left rounded-full bg-amber-400 transition-all duration-500 group-hover:w-24" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CONTACT BANNER */}
        <Reveal variant="up" duration={1000} easing="premium">
          <div className="relative mt-20 overflow-hidden rounded-[28px] border border-amber-400/20 bg-gradient-to-r from-[#17283b] via-[#192d40] to-[#101e30] p-7 transition-all duration-500 hover:border-amber-400/40 sm:p-10">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]"
            />

            <div className="relative flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
              <div className="max-w-2xl">
                <Reveal variant="fade" duration={800}>
                  <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 md:justify-start">
                    <Zap className="h-4 w-4" />
                    Dependable Energy Solutions
                  </div>
                </Reveal>

                <Reveal variant="up" delay={120} duration={900}>
                  <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                    Your Power. Our Commitment.
                  </h3>
                </Reveal>

                <Reveal variant="fade" delay={200} duration={900}>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Let us help you find the right solar and electrical
                    solution for your home, business or community.
                  </p>
                </Reveal>
              </div>

              <Reveal variant="right" delay={220} duration={950}>
                <a
                  href={`https://wa.me/${company.whatsappPrimary}?text=${encodeURIComponent(
                    "Hello, I would like to enquire about your solar energy and electrical solutions."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-extrabold text-[#071321] shadow-xl shadow-amber-400/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white sm:w-auto"
                >
                  Contact Our Team
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
