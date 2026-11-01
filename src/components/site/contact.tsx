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
    <section id="contact" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Request a free quote today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Visit any of our offices, call us, or send a message — our team is
            ready to help you choose the right system.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {phones.map((p, i) => (
                <a
                  key={p.raw}
                  href={`tel:${p.raw}`}
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

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${company.email}`}
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

            {/* Offices */}
            <div className="grid gap-4 sm:grid-cols-2">
              {offices.map((office) => (
                <a
                  key={office.label}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    office.mapsQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-card flex items-start gap-4 rounded-2xl border bg-card p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {office.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium leading-relaxed text-foreground">
                      {office.address}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-secondary p-5 text-white">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-amber-400">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Working Hours
                </p>
                <p className="text-base font-bold">{company.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Quote form */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-foreground">
              Send us a message
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Fill the form and it will open in WhatsApp, ready to send to our
              team.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g. John Okafor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 0803 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service" className="w-full">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.title} value={s.title}>
                        {s.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="Other">Other / Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your power needs — e.g. 'I want to power 6 bulbs, 2 fans, a TV and a freezer day and night…'"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

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