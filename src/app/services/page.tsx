
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            What We Do
          </span>

          <h2
            id="services-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Solar Energy and Electrical Services in Nigeria
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Divine Vine-Edo Global Resources Ltd provides solar energy
            and electrical solutions for residential, commercial and
            community applications. From solar panel supply and
            installation to inverter systems, batteries, lighting
            and electrical solutions, we help homes and businesses
            access dependable power.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Sun;

            return (
              <article
                key={service.title}
                className="site-card group flex h-full min-w-0 flex-col rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg sm:p-7"
                aria-label={service.title}
              >
                {/* Service icon */}
                <div
                  className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-secondary text-amber-400 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Service title */}
                <h3 className="mt-5 text-lg font-bold text-foreground sm:text-xl">
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
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs font-medium leading-relaxed text-foreground/75 sm:text-sm"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>

        {/* WhatsApp call to action */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-secondary px-5 py-8 text-center sm:mt-12 sm:px-8 sm:py-10 lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
              Need a Custom Solar Solution for Your Home or Business?
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
              Contact Divine Vine-Edo Global Resources Ltd to discuss
              your solar energy and electrical requirements.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="w-full shrink-0 rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
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
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
