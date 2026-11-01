
"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ExternalLink,
  Navigation,
} from "lucide-react";

import {
  company,
  phones,
  offices,
  services,
} from "@/lib/site-data";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/hooks/use-toast";

const websiteUrl = "https://www.divinesolarhub.com";

// Contact structured data for search engines.
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${websiteUrl}/#organization`,
  name: company.name,
  url: websiteUrl,
  email: company.email,
  ...(phones.length
    ? {
        telephone: phones.map((p) => p.raw),
      }
    : {}),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: phones[0]?.raw,
    email: company.email,
    contactType: "customer service",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    availableLanguage: ["English"],
    url: `${websiteUrl}/#contact`,
  },
  sameAs: [websiteUrl],
};

export function Contact() {
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast({
        title: "Missing details",
        description: "Please fill your name, phone number and message.",
        variant: "destructive",
      });
      return;
    }

    const text = [
      "Hello Divine Vine-Edo Global Resources Ltd!",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service needed: ${service || "Not specified"}`,
      "",
      `Message: ${message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${company.whatsappPrimary}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );

    toast({
      title: "Opening WhatsApp…",
      description:
        "Your quote request is ready to send. We reply as soon as possible!",
    });

    setName("");
    setPhone("");
    setService("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-muted py-20 sm:py-24"
    >
      {/* Contact structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Get In Touch
          </span>

          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Contact {company.name}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Request a free quote for solar energy systems, inverters,
            batteries, electrical installations and other energy
            solutions. Visit our offices, call us or send a message.
            Our team is ready to assist you.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Contact Information */}
          <div className="space-y-6">

            {/* Phone Numbers */}
            <div className="grid gap-4 sm:grid-cols-2">
              {phones.map((p, i) => (
                <a
                  key={p.raw}
                  href={`tel:${p.raw}`}
                  aria-label={`Call ${company.name} on ${p.display}`}
                  className="site-card flex items-center gap-4 rounded-2xl border bg-card p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </span>

                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Phone {i + 1}
                    </span>

                    <span className="block text-base font-bold text-foreground">
                      {p.display}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Email and Website */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${company.email}`}
                aria-label={`Email ${company.name}`}
                className="site-card flex items-center gap-4 rounded-2xl border bg-card p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email
                  </span>

                  <span className="block truncate text-sm font-bold text-foreground">
                    {company.email}
                  </span>
                </span>
              </a>

              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${company.name} official website`}
                className="site-card flex items-center gap-4 rounded-2xl border bg-card p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Globe className="h-6 w-6" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Website
                  </span>

                  <span className="block truncate text-sm font-bold text-foreground">
                    {company.website}
                  </span>
                </span>
              </a>
            </div>

            {/* Office Locations and Google Maps */}
            <div>
              <div className="mb-5">
                <h3 className="text-lg font-bold text-foreground">
                  Our Office Locations in Nigeria
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Find and visit Divine Vine-Edo Global Resources Ltd
                  at either of our office locations.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office) => (
                  <article
                    key={office.label}
                    className="site-card overflow-hidden rounded-2xl border bg-card shadow-sm"
                  >
                    {/* Office Details */}
                    <div className="flex items-start gap-4 p-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                        <MapPin className="h-6 w-6" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-bold uppercase tracking-widest text-primary">
                          {office.label}
                        </span>

                        <address className="mt-2 text-sm font-medium leading-relaxed text-foreground not-italic">
                          {office.address}
                        </address>
                      </div>
                    </div>

                    {/* Embedded Google Map */}
                    <div className="relative h-64 w-full overflow-hidden border-y bg-muted sm:h-72">
                      <iframe
                        title={`Google Maps location of ${company.name} - ${office.label}`}
                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                          office.mapsQuery
                        )}&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    {/* Directions Button */}
                    <div className="flex items-center justify-between gap-3 p-5">
                      <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                        <Navigation className="h-4 w-4 text-primary" />
                        Get directions to our office
                      </span>

                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                          office.mapsQuery
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Get directions to ${office.label} of ${company.name}`}
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        Directions
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-4 rounded-2xl bg-secondary p-5 text-white">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-amber-400">
                <Clock className="h-6 w-6" />
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Working Hours
                </p>

                <p className="text-base font-bold">
                  {company.workingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-foreground">
              Request a Solar Energy or Electrical Services Quote
            </h3>

            <p className="mt-1.5 text-sm text-muted-foreground">
              Tell us what you need. Your completed enquiry will open
              in WhatsApp, ready for you to send to our team.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >

              {/* Name and Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Your Name *
                  </Label>

                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. John Okafor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number *
                  </Label>

                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="e.g. 0803 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="service">
                  Service Needed
                </Label>

                <Select
                  value={service}
                  onValueChange={setService}
                >
                  <SelectTrigger id="service" className="w-full">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>

                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem
                        key={s.title}
                        value={s.title}
                      >
                        {s.title}
                      </SelectItem>
                    ))}

                    <SelectItem value="Other">
                      Other / Not sure yet
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Your Message *
                </Label>

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your power needs — e.g. I want to power 6 bulbs, 2 fans, a TV and a freezer day and night..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-[#25D366] font-semibold text-white hover:bg-[#25D366]/90"
              >
                <Send className="mr-2 h-4 w-4" />
                Send via WhatsApp
              </Button>

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                <MessageCircle className="h-3.5 w-3.5" />
                Prefer email? Write to us at {company.email}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
