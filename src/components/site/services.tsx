import {
  Sun,
  BatteryCharging,
  Lightbulb,
  Droplets,
  PlugZap,
  ShoppingCart,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { services, company } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/app/reveal";

const websiteUrl = "https://www.divinesolarhub.com";

const iconMap: Record<string, LucideIcon> = {
  Sun,
  BatteryCharging,
  Lightbulb,
  Droplets,
  PlugZap,
  ShoppingCart,
};

// Structured data for the company's services.
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${websiteUrl}/#services`,
  name: "Solar Energy and Electrical Services",
  description:
    "Solar energy, inverter, battery, lighting, water pumping and electrical solutions offered by Divine Vine-Edo Global Resources Ltd in Nigeria.",
  url: `${websiteUrl}/#services`,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: services.length,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${websiteUrl}/#service-${index + 1}`,
      name: service.title,
      description: service.description,
      serviceType: service.title,
      provider: {
        "@id": `${websiteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Nigeria",
      },
    },
  })),
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full overflow-hidden bg-muted py-16 sm:py-20 lg:py-24"
    >
      {/* Services structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal
            variant="light-sweep"
            duration={1000}
            easing="premium"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
              What We Do
            </span>
          </Reveal>

          <Reveal
            variant="split-text"
            delay={120}
            duration={1100}
            easing="premium"
          >
            <h2
              id="services-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Solar Energy and Electrical Services in Nigeria
            </h2>
          </Reveal>

          <Reveal
            variant="focus"
            delay={250}
            duration={1100}
            easing="elegant"
          >
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Divine Vine-Edo Global Resources Ltd provides solar energy
              and electrical solutions for residential, commercial and
              community applications. From solar panel supply and
              installation to inverter systems, batteries, lighting
              and electrical solutions, we help homes and businesses
              access dependable power.
            </p>
          </Reveal>

          <Reveal
            variant="line-draw"
            delay={350}
            duration={1000}
            easing="premium"
          >
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-primary" />
          </Reveal>
        </div>

        {/* Services grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Sun;

            return (
              <Reveal
                key={service.title}
                variant={
                  index % 3 === 0
                    ? "up"
                    : index % 3 === 1
                      ? "left"
                      : "right"
                }
                delay={(index % 3) * 140}
                duration={1000}
                easing="premium"
              >
                <article
                  className="site-card group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl sm:p-7"
                  aria-label={service.title}
                >
                  {/* Decorative card accent */}
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-1 w-0 rounded-bl-full bg-primary transition-all duration-700 group-hover:w-1/2"
                  />

                  {/* Service icon */}
                  <div
                    className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-secondary text-amber-400 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20"
                    aria-hidden="true"
                  >
                    <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Service title */}
                  <h3 className="mt-5 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {service.title}
                  </h3>

                  {/* Service description */}
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Service features */}
                  {service.points.length > 0 && (
                    <ul
                      className="mt-5 space-y-2"
                      aria-label={`${service.title} features`}
                    >
                      {service.points.map((point, pointIndex) => (
                        <li
                          key={point}
                          className="group/item flex items-start gap-2 text-xs font-medium leading-relaxed text-foreground/75 sm:text-sm"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-all duration-300 group-hover/item:scale-125"
                            aria-hidden="true"
                          />
                          <span className="transition-colors duration-300 group-hover/item:text-foreground">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* WhatsApp call to action */}
        <Reveal
          variant="depth"
          duration={1150}
          easing="premium"
        >
          <div className="group relative mt-10 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-secondary px-5 py-8 text-center transition-all duration-500 hover:shadow-2xl sm:mt-12 sm:px-8 sm:py-10 lg:flex-row lg:text-left">

            {/* CTA decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl transition-transform duration-1000 group-hover:scale-150"
            />

            <div className="relative z-10 max-w-2xl">
              <Reveal
                variant="up"
                delay={150}
                duration={900}
                easing="elegant"
              >
                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                  Need a Custom Solar Solution for Your Home or Business?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                  Contact Divine Vine-Edo Global Resources Ltd to discuss
                  your solar energy and electrical requirements.
                </p>
              </Reveal>
            </div>

            <Reveal
              variant="light-sweep"
              delay={250}
              duration={1000}
              easing="premium"
            >
              <Button
                asChild
                size="lg"
                className="group/button relative z-10 w-full shrink-0 rounded-full bg-primary font-semibold text-primary-foreground shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl sm:w-auto"
              >
                <a
                  href={`https://wa.me/${company.whatsappPrimary}?text=${encodeURIComponent(
                    "Hello Divine Vine-Edo, I need a custom solar solution."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Divine Vine-Edo Global Resources Ltd on WhatsApp"
                >
                  Chat With Us

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </a>
              </Button>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}