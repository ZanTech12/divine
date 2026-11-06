
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  ArrowUp,
  Store,
} from "lucide-react";

import { Logo } from "@/app/logo";

import {
  company,
  phones,
  offices,
  navigation,
  services,
} from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-auto bg-[#0B2E13] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Company */}
          <div>
            <Logo variant="light" />

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {company.name} is your trusted partner for solar energy systems,
              inverters, batteries and professional electrical services across
              Nigeria.
            </p>

            <p className="mt-4 flex items-center gap-2 text-xs text-white/60">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              {company.workingHours}
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-amber-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Shop & Directory */}
              <li className="pt-2">
                <a
                  href="https://shop.divinesolarhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
                  aria-label="Explore our shop and directory"
                >
                  <Store className="h-4 w-4" />
                  Shop & Directory
                </a>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Our Services
            </h3>

            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 transition-colors hover:text-amber-300"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Contact Us
            </h3>

            <ul className="mt-5 space-y-3.5 text-sm text-white/70">
              {phones.map((p) => (
                <li key={p.raw}>
                  <a
                    href={`tel:${p.raw}`}
                    className="flex items-center gap-2.5 transition-colors hover:text-amber-300"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                    {p.display}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-amber-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-amber-400" />
                  {company.email}
                </a>
              </li>

              <li>
                <a
                  href={company.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-amber-300"
                >
                  <Globe className="h-4 w-4 shrink-0 text-amber-400" />
                  {company.website}
                </a>
              </li>

              {offices.map((office) => (
                <li
                  key={office.label}
                  className="flex items-start gap-2.5"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span className="leading-relaxed">
                    {office.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">

          <p>
            © 2026 {company.name}. All rights reserved.
          </p>

          <p>
            RC-registered company · Gboko, Benue State · Asaba, Delta State
          </p>

          <a
            href="#home"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber-400 hover:text-[#0B2E13]"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

        {/* Developer Credit */}
        <div className="border-t border-white/10 px-4 py-4 text-center">
          <p className="text-xs text-white/50">
            Developed by{" "}
            <a
              href="https://www.bimtechsolutions.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 transition-colors hover:text-amber-300"
            >
              Bimtech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
