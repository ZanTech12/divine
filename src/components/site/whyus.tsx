
import {
  BadgeCheck,
  ShieldCheck,
  Users,
  Truck,
  type LucideIcon,
} from "lucide-react";

import { processSteps, trustBadges } from "@/lib/site-data";
import { Reveal } from "@/app/reveal";

const websiteUrl = "https://www.divinesolarhub.com";

const badgeIcons: Record<string, LucideIcon> = {
  BadgeCheck,
  ShieldCheck,
  Users,
  Truck,
};

// Structured data describing the customer service process.
const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${websiteUrl}/#customer-process`,
  name: "How to Get Solar and Electrical Solutions from Divine Vine-Edo Global Resources Ltd",
  description:
    "Learn about the customer process for discussing requirements, planning, supplying and completing solar energy and electrical projects.",
  publisher: {
    "@id": `${websiteUrl}/#organization`,
  },
  step: processSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
};

export function WhyUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-us-heading"
      className="relative isolate overflow-hidden bg-background py-20 sm:py-24"
    >
      {/* Customer process structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(processSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/[0.04] blur-[100px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/[0.08] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <header className="mx-auto max-w-2xl text-center">

          {/* Eyebrow */}
          <Reveal
            variant="light-sweep"
            duration={1000}
            easing="premium"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
              Why Choose Us
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
              id="why-us-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              From First Call to Final Switch — We Deliver
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal
            variant="focus"
            delay={220}
            duration={1100}
            easing="elegant"
          >
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Discover how Divine Vine-Edo Global Resources Ltd
              approaches solar energy and electrical projects,
              from understanding your requirements to planning
              and completing the work.
            </p>
          </Reveal>

          {/* Heading Accent */}
          <Reveal
            variant="line-draw"
            delay={350}
            duration={1000}
            easing="premium"
          >
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-primary" />
          </Reveal>
        </header>

        {/* Process Steps */}
        <div>
          <h3 className="sr-only">
            Our Solar and Electrical Project Process
          </h3>

          <ol
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Our project delivery process"
          >
            {processSteps.map((step, index) => (
              <Reveal
                key={step.step}
                variant={
                  index % 4 === 0
                    ? "up"
                    : index % 4 === 1
                      ? "left"
                      : index % 4 === 2
                        ? "down"
                        : "right"
                }
                delay={(index % 4) * 140}
                duration={1050}
                easing="premium"
              >
                <li className="site-card group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl sm:p-7">

                  {/* Decorative Accent */}
                  <div
                    className="absolute right-0 top-0 h-1 w-0 rounded-bl-full bg-primary transition-all duration-700 group-hover:w-1/2"
                    aria-hidden="true"
                  />

                  {/* Step Number */}
                  <div className="relative">
                    <span
                      className="text-5xl font-extrabold leading-none text-accent/80 transition-all duration-500 group-hover:translate-x-2 group-hover:text-primary sm:text-6xl"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>

                    <span
                      className="absolute bottom-1 left-0 h-1 w-8 rounded-full bg-primary/50 transition-all duration-500 group-hover:w-16 group-hover:bg-primary"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Step Title */}
                  <h4 className="mt-6 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Bottom Decorative Line */}
                  <div
                    className="mt-6 h-px w-full bg-border transition-all duration-500 group-hover:bg-primary/40"
                    aria-hidden="true"
                  />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Trust Badges */}
        <Reveal
          variant="depth"
          delay={150}
          duration={1150}
          easing="premium"
        >
          <div
            className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-muted p-6 transition-all duration-500 hover:border-primary/20 sm:p-7 lg:p-8"
            aria-labelledby="trust-heading"
          >
            {/* Decorative Background */}
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/[0.06] blur-[80px]"
              aria-hidden="true"
            />

            {/* Trust Heading */}
            <Reveal
              variant="up"
              duration={950}
              easing="elegant"
            >
              <div className="relative mb-7 text-center">
                <h3
                  id="trust-heading"
                  className="text-lg font-bold text-foreground sm:text-xl"
                >
                  Our Service Commitments
                </h3>

                <div
                  className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary"
                  aria-hidden="true"
                />
              </div>
            </Reveal>

            {/* Trust Badge Items */}
            <ul className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trustBadges.map((badge, index) => {
                const Icon = badgeIcons[badge.icon] ?? BadgeCheck;

                return (
                  <Reveal
                    key={badge.label}
                    variant={index % 2 === 0 ? "left" : "right"}
                    delay={index * 130}
                    duration={950}
                    easing="premium"
                  >
                    <li className="group flex items-center gap-3.5 rounded-xl border border-transparent p-3 transition-all duration-500 hover:border-border hover:bg-background hover:shadow-lg">

                      {/* Badge Icon */}
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-secondary group-hover:text-white group-hover:shadow-lg"
                        aria-hidden="true"
                      >
                        <Icon className="h-5.5 w-5.5" />
                      </span>

                      {/* Badge Label */}
                      <p className="text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {badge.label}
                      </p>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
