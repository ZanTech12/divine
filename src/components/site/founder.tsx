
import Image from "next/image";
import {
  GraduationCap,
  Wrench,
  Quote,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

import { founder, company } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/app/reveal";

const websiteUrl = "https://www.divinesolarhub.com";
const founderUrl = `${websiteUrl}/founder`;

const whatsappHref = `https://wa.me/${company.whatsappPrimary}?text=${encodeURIComponent(
  `Hello ${founder.name}, I got your contact from your website.`
)}`;

const founderImage = founder.photo;

const founderSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${websiteUrl}/#founder`,
      name: founder.name,
      jobTitle: "Founder",
      url: founderUrl,
      description: `${founder.name} is the founder of Divine Vine-Edo Global Resources Ltd, a Nigerian company providing solar energy and electrical solutions.`,
      worksFor: {
        "@id": `${websiteUrl}/#organization`,
      },
      mainEntityOfPage: founderUrl,
      ...(founderImage
        ? {
            image: founderImage.startsWith("http")
              ? founderImage
              : `${websiteUrl}${founderImage.startsWith("/") ? "" : "/"}${founderImage}`,
          }
        : {}),
    },
    {
      "@type": "Organization",
      "@id": `${websiteUrl}/#organization`,
      name: "Divine Vine-Edo Global Resources Ltd",
      url: websiteUrl,
      founder: {
        "@id": `${websiteUrl}/#founder`,
      },
    },
  ],
};

export function Founder() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-background py-20 sm:py-28"
    >
      {/* Founder and Company Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(founderSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-24 h-[26rem] w-[26rem] rounded-full bg-secondary/10 blur-3xl" />

        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--border))_1px,transparent_0)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">

          {/* Founder Portrait */}
          <div className="min-w-0 lg:col-span-5">
            <Reveal
              variant="depth"
              duration={1300}
              easing="premium"
              className="relative mx-auto w-full max-w-md"
            >
              {/* Dotted Corner Pattern */}
              <Reveal
                variant="fade"
                delay={250}
                duration={1100}
                easing="elegant"
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-7 -top-7 h-28 w-28 rounded-2xl opacity-50 [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--primary))_1.5px,transparent_0)] [background-size:14px_14px]"
                />
              </Reveal>

              {/* Soft Gradient Glow */}
              <div
                aria-hidden="true"
                className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-gradient-to-tr from-secondary/40 to-primary/25 blur-2xl"
              />

              {/* Framed Portrait Card */}
              <div className="group relative rounded-[2rem] bg-card p-3 shadow-2xl shadow-primary/10 ring-1 ring-border">
                {/* Portrait Image - No Reveal Mask */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.6rem] bg-muted">

                  {founderImage ? (
                    <Image
                      src={founderImage}
                      alt={`${founder.name}, Founder of Divine Vine-Edo Global Resources Ltd`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 90vw"
                      className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <BadgeCheck className="mx-auto h-12 w-12 opacity-40" />
                        <p className="mt-3 text-sm">Founder portrait</p>
                      </div>
                    </div>
                  )}

                  {/* Portrait Information */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 pt-16">
                    <Reveal
                      variant="up"
                      delay={450}
                      duration={1000}
                      easing="premium"
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold tracking-tight text-white">
                          {founder.name}
                        </p>

                        <BadgeCheck
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-sky-400"
                        />
                      </div>

                      <p className="mt-0.5 text-sm font-semibold text-amber-300">
                        {founder.role}
                      </p>
                    </Reveal>
                  </div>
                </div>

                {/* Floating Trade Chip */}
                <Reveal
                  variant="light-sweep"
                  delay={500}
                  duration={1100}
                  easing="premium"
                >
                  <div className="absolute right-4 top-6 flex items-center gap-3 rounded-2xl border bg-background/85 px-4 py-3 shadow-xl backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 sm:-right-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/75 text-primary-foreground shadow-lg shadow-primary/25">
                      <Wrench className="h-5 w-5" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {founder.trade.label}
                      </span>

                      <span className="block max-w-[11rem] truncate text-xs font-bold text-foreground">
                        {founder.trade.value}
                      </span>
                    </span>
                  </div>
                </Reveal>

                {/* Floating WhatsApp Chip */}
                <Reveal
                  variant="left"
                  delay={700}
                  duration={1100}
                  easing="premium"
                >
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat with ${founder.name} on WhatsApp`}
                    className="absolute bottom-28 left-4 flex items-center gap-3 rounded-2xl border bg-background/85 py-2.5 pl-2.5 pr-4 shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-2xl sm:-left-6"
                  >
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40">
                      <MessageCircle className="h-5 w-5" />

                      <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-70" />

                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background bg-[#25D366]" />
                      </span>
                    </span>

                    <span>
                      <span className="block text-xs font-bold text-foreground">
                        Let&rsquo;s talk
                      </span>

                      <span className="block text-[11px] font-medium text-muted-foreground">
                        Available on WhatsApp
                      </span>
                    </span>
                  </a>
                </Reveal>
              </div>
            </Reveal>
          </div>

          {/* Founder Story */}
          <div className="min-w-0 lg:col-span-7">

            {/* Eyebrow */}
            <Reveal
              variant="light-sweep"
              duration={1000}
              easing="premium"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border bg-card/80 py-1.5 pl-3 pr-4 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  Meet the Founder
                </span>
              </span>
            </Reveal>

            {/* Main Heading */}
            <Reveal
              variant="split-text"
              delay={120}
              duration={1100}
              easing="premium"
            >
              <h2
                id="founder-heading"
                className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
              >
                The man behind{" "}
                <span className="relative inline-block whitespace-nowrap text-primary">
                  the mission

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 220 12"
                    fill="none"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2.5 left-0 h-3 w-full text-secondary"
                  >
                    <path
                      d="M3 8.5C45 3.5 85 3 118 6C151 9 186 8.5 217 4"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </Reveal>

            <p className="sr-only">
              {founder.name} is the founder of Divine Vine-Edo Global
              Resources Ltd, a Nigerian company focused on solar energy,
              electrical products and engineering solutions.
            </p>

            {/* Founder Biography */}
            <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
              {founder.bio.map((paragraph, index) => (
                <Reveal
                  key={index}
                  variant={index === 0 ? "focus" : "fade"}
                  delay={index * 170}
                  duration={1050}
                  easing="elegant"
                >
                  {index === 0 ? (
                    <p className="text-pretty text-lg leading-relaxed first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-extrabold first-letter:leading-[0.8] first-letter:text-primary">
                      {paragraph}
                    </p>
                  ) : (
                    <p className="text-pretty text-base leading-relaxed">
                      {paragraph}
                    </p>
                  )}
                </Reveal>
              ))}
            </div>

            {/* Education and Trade Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: GraduationCap, ...founder.education },
                { icon: Wrench, ...founder.trade },
              ].map(({ icon: Icon, label, value }, index) => (
                <Reveal
                  key={label}
                  variant={index === 0 ? "left" : "right"}
                  delay={index * 200}
                  duration={1000}
                  easing="premium"
                >
                  <div className="group h-full rounded-2xl border bg-card p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/75 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>

                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                        {label}
                      </p>
                    </div>

                    <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                      {value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Founder Quote */}
            <Reveal
              variant="depth"
              delay={150}
              duration={1150}
              easing="premium"
            >
              <figure className="group relative mt-8 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-accent via-accent/80 to-accent/40 p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-xl sm:p-7">
                <Quote
                  aria-hidden="true"
                  className="absolute -right-4 -top-4 h-28 w-28 rotate-12 text-primary/10 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110"
                />

                <blockquote className="relative text-lg font-medium italic leading-relaxed text-accent-foreground">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>

                <figcaption className="relative mt-4 flex items-center gap-3 text-sm font-semibold text-accent-foreground/80">
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-primary/60"
                  />

                  {founder.name}, {founder.role}
                </figcaption>
              </figure>
            </Reveal>

            {/* Founder Highlights */}
            <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {founder.highlights.map((item, index) => (
                <Reveal
                  key={item}
                  variant="up"
                  delay={index * 110}
                  duration={900}
                  easing="elegant"
                >
                  <li className="group flex items-start gap-3">
                    <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/25">
                      <BadgeCheck className="h-3.5 w-3.5 text-secondary" />
                    </span>

                    <span className="text-sm font-medium leading-relaxed text-foreground transition-colors duration-300 group-hover:text-primary">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <Reveal
              variant="light-sweep"
              delay={200}
              duration={1100}
              easing="premium"
            >
              <div className="mt-10 flex flex-col items-start gap-4 border-t border-border/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  asChild
                  size="lg"
                  className="group h-14 rounded-full bg-[#25D366] px-8 text-base font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-all duration-500 hover:-translate-y-1 hover:bg-[#1EBE5D] hover:shadow-2xl hover:shadow-[#25D366]/40 focus-visible:ring-[#25D366]"
                >
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                    Talk to {founder.name.split(" ")[0]} on WhatsApp
                  </a>
                </Button>

                <p className="text-sm font-medium text-muted-foreground">
                  Opens straight in WhatsApp — say hello anytime.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
