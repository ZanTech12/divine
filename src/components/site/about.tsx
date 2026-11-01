
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

export function About() {
  const locations = offices.slice(0, 2);

  return (
    <section
      id="about"
      className="relative bg-[#071321] py-16 sm:py-20 lg:py-28"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Introduction */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-300">
            <Sparkles className="h-4 w-4" />
            About Our Company
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
            Powering Homes.
            <span className="block text-amber-400">
              Empowering Businesses.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base lg:text-lg">
            Reliable energy solutions, quality electrical products
            and professional engineering services built around
            the needs of homes, businesses and communities.
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-amber-400" />
        </div>

        {/* Company information and CAC certificate */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* Company information */}
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Building2 className="h-5 w-5 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Who We Are
              </span>
            </div>

            <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
              A Nigerian company built on{" "}
              <span className="text-amber-400">
                energy, integrity and growth.
              </span>
            </h3>

            <div className="mt-7 space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
              <p>
                <strong className="font-bold text-white">
                  {company.name}
                </strong>{" "}
                is a solar energy and electrical resources company
                headquartered in Gboko, Benue State, with a trading
                shop in the Ultra Modern Market, Asaba, Delta State.
                We are specialists in solar power systems, inverters,
                batteries, solar street lights and all kinds of
                electrical installations.
              </p>

              <p>
                Legitimacy matters when you are investing in equipment
                that must serve your home or business for years.
                That is why we operate as an incorporated limited
                liability company registered with the Corporate
                Affairs Commission (CAC) of Nigeria. With us, you
                receive proper invoices, warranties and documentation
                for every purchase and installation.
              </p>

              <p>
                Nigeria&apos;s power challenge demands a solution
                that is clean, quiet and cost-effective. That is
                exactly what we deliver: solar systems sized to
                your real needs, installed by trained technicians,
                using genuine equipment — so your home or business
                enjoys stable power while your generator rests.
              </p>

              <p>
                From a small flat that needs light at night, to a
                shop that must never miss a sale, to a community
                that deserves street lights and clean water — we
                design, supply, install and maintain it all under
                one roof.
              </p>
            </div>

            {/* Advantages */}
            <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
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
                {advantages.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                    <span className="text-sm font-medium leading-relaxed text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office locations */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {locations.map((office, index) => (
                <div
                  key={office.address}
                  className="flex min-w-0 items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {index === 0 ? "Head Office" : "Trading Location"}
                    </p>

                    <p className="mt-1 break-words text-sm font-semibold leading-relaxed text-white">
                      {office.address.replace(", Nigeria", "")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CAC certificate */}
          <div className="mx-auto w-full min-w-0 max-w-[520px]">
            <div className="rounded-[26px] border border-white/10 bg-[#111f30] p-4 shadow-2xl sm:p-6">

              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
                    Business Credentials
                  </span>

                  <h3 className="mt-2 text-lg font-extrabold text-white sm:text-xl">
                    Official CAC Certificate
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-400">
                  <Landmark className="h-6 w-6" />
                </div>
              </div>

              {/* Certificate image */}
              <div className="relative w-full overflow-hidden rounded-xl border-4 border-white bg-white shadow-xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/projects/cert.jpeg"
                    alt={`Certificate of Incorporation of ${company.name}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain p-2 sm:p-3"
                  />
                </div>
              </div>

              {/* Certificate caption */}
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

              {/* Legal status */}
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
                  is a duly incorporated limited liability company
                  registered with the Corporate Affairs Commission
                  of Nigeria.
                </p>
              </div>
            </div>

            {/* Corporate identity badge */}
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
          </div>
        </div>

        {/* Vision, Mission and Values */}
        <div className="mt-20 lg:mt-32">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              What Guides Us
            </span>

            <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Our Foundation for Excellence
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Our vision, mission and values define how we work,
              serve our customers and build lasting relationships.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#15263a] to-[#0d1a2a] p-7 transition-colors duration-300 hover:border-amber-400/40 sm:p-8"
                >
                  <span className="absolute right-6 top-5 text-6xl font-black text-white/[0.035]">
                    {pillar.number}
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-400">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h4 className="relative mt-7 text-xl font-extrabold text-white">
                    {pillar.title}
                  </h4>

                  <p className="mt-4 text-sm leading-8 text-slate-400">
                    {pillar.text}
                  </p>

                  <div className="mt-7 h-1 w-12 rounded-full bg-amber-400" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom contact banner */}
        <div className="relative mt-20 overflow-hidden rounded-[28px] border border-amber-400/20 bg-gradient-to-r from-[#17283b] via-[#192d40] to-[#101e30] p-7 sm:p-10">
          <div className="flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 md:justify-start">
                <Zap className="h-4 w-4" />
                Dependable Energy Solutions
              </div>

              <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                Your Power. Our Commitment.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Let us help you find the right solar and electrical
                solution for your home, business or community.
              </p>
            </div>

            <a
              href={`https://wa.me/${company.whatsappPrimary}?text=${encodeURIComponent(
                "Hello, I would like to enquire about your solar energy and electrical solutions."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-extrabold text-[#071321] transition-colors hover:bg-white sm:w-auto"
            >
              Contact Our Team
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
