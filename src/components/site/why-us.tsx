import {
  BadgeCheck,
  ShieldCheck,
  Users,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { processSteps, trustBadges } from "@/lib/site-data";

const badgeIcons: Record<string, LucideIcon> = {
  BadgeCheck,
  ShieldCheck,
  Users,
  Truck,
};

export function WhyUs() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-label="How we work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            From first call to final switch — we deliver
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A simple, transparent process that has earned us the trust of
            families, businesses and communities.
          </p>
        </div>

        {/* Process steps */}
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Trust badges */}
        <div className="mt-12 grid grid-cols-1 gap-4 rounded-2xl bg-muted p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {trustBadges.map((badge) => {
            const Icon = badgeIcons[badge.icon] ?? BadgeCheck;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-3.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <p className="text-sm font-bold text-foreground">
                  {badge.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}