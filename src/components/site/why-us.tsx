
import {
  BadgeCheck,
  ShieldCheck,
  Users,
  Truck,
  type LucideIcon,
} from "lucide-react";

import { processSteps, trustBadges } from "@/lib/site-data";

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
      className="bg-background py-20 sm:py-24"
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <header className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Why Choose Us
          </span>

          <h2
            id="why-us-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            From First Call to Final Switch — We Deliver
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Discover how Divine Vine-Edo Global Resources Ltd
            approaches solar energy and electrical projects,
            from understanding your requirements to planning
            and completing the work.
          </p>
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
            {processSteps.map((step) => (
              <li
                key={step.step}
                className="site-card relative rounded-2xl border bg-card p-6"
              >
                <span
                  className="text-5xl font-extrabold leading-none text-accent"
                  aria-hidden="true"
                >
                  {step.step}
                </span>

                <h4 className="mt-4 text-lg font-bold text-foreground">
                  {step.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Trust Badges */}
        <div
          className="mt-12 rounded-2xl bg-muted p-6 sm:p-7 lg:p-8"
          aria-labelledby="trust-heading"
        >
          <h3
            id="trust-heading"
            className="mb-6 text-center text-lg font-bold text-foreground"
          >
            Our Service Commitments
          </h3>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => {
              const Icon = badgeIcons[badge.icon] ?? BadgeCheck;

              return (
                <li
                  key={badge.label}
                  className="flex items-center gap-3.5"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </span>

                  <p className="text-sm font-bold text-foreground">
                    {badge.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}
