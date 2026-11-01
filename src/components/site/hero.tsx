
import Image from "next/image";
import { Zap, ArrowRight, PhoneCall, MapPin } from "lucide-react";
import { company, phones, heroStats } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/app/reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center pt-[100px]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Solar panels installed on a Nigerian rooftop under bright sunlight"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl">

          {/* Trust Badge */}
          <Reveal variant="fade" duration={0.8}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Zap className="h-3.5 w-3.5" />
              Trusted Solar & Electrical Experts in Nigeria
            </span>
          </Reveal>

          {/* Main Heading */}
          <Reveal variant="up" delay={0.15} duration={0.9} distance={35}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Divine Vine-Edo
              <span className="block text-amber-400">
                Global Resources Ltd
              </span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal variant="up" delay={0.3} duration={0.9}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {company.tagline}. We supply and install solar panels, hybrid
              inverters, batteries and street lights — and we wire homes and
              businesses safely. From Gboko to Asaba and beyond.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal variant="up" delay={0.45} duration={0.9}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-lg shadow-amber-900/30 hover:bg-primary/90"
              >
                <a
                  href={`https://wa.me/${company.whatsappPrimary}?text=${encodeURIComponent(
                    "Hello Divine Vine-Edo, I would like a free solar quote."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 text-base font-semibold text-white hover:bg-white/20 hover:text-white"
              >
                <a href="#projects">View Our Projects</a>
              </Button>
            </div>
          </Reveal>

          {/* Contact Information */}
          <Reveal variant="fade" delay={0.6} duration={1}>
            <div className="mt-8 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:gap-6">
              <a
                href={`tel:${phones[0].raw}`}
                className="flex items-center gap-2 font-medium transition-colors hover:text-amber-300"
              >
                <PhoneCall className="h-4 w-4 text-amber-400" />
                {phones[0].display} · {phones[1].display}
              </a>

              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                Gboko, Benue State · Asaba, Delta State
              </span>
            </div>
          </Reveal>
        </div>

        {/* Statistics */}
        <dl className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {heroStats.map((stat, index) => (
            <Reveal
              key={stat.label}
              variant="up"
              delay={0.2 + index * 0.12}
              duration={0.8}
            >
              <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:border-amber-400/50 sm:p-5">
                <dt className="order-2 mt-1 text-xs font-medium text-white/75 sm:text-sm">
                  {stat.label}
                </dt>

                <dd className="order-1 text-2xl font-extrabold text-amber-400 sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
