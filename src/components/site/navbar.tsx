"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  Clock,
} from "lucide-react";

import { company, phones, navigation } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

function waLink(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar scroll styling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  // Close menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close menu using Escape key
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const quoteLink = waLink(
    company.whatsappPrimary,
    "Hello Divine Vine-Edo, I would like a free quote."
  );

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] w-full">
      {/* Top information bar */}
      <div className="relative z-10 bg-secondary text-secondary-foreground">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[11px] font-medium sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-hidden">
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5 hover:text-amber-300"
              aria-label="Email us"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">
                {company.email}
              </span>
              <span className="sm:hidden">Email</span>
            </a>

            <a
              href={`tel:${phones[0].raw}`}
              className="flex items-center gap-1.5 hover:text-amber-300"
              aria-label="Call us"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden md:inline">
                {phones[0].display}
              </span>
            </a>

            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 hover:text-amber-300 lg:flex"
            >
              <Globe className="h-3.5 w-3.5 shrink-0" />
              {company.website}
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-amber-200">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden sm:inline">
              {company.workingHours}
            </span>
            <span className="sm:hidden">Mon – Sat</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`relative z-10 ${
          scrolled
            ? "bg-background/95 shadow-md backdrop-blur"
            : "bg-background"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Enlarged permanent company logo */}
          <a
            href="#home"
            aria-label="Divine Vine-Edo homepage"
            onClick={closeMenu}
            className="relative flex h-[68px] w-[180px] shrink-0 items-center sm:w-[220px]"
          >
            <Image
              src="/divine-logo.png.png"
              alt="Divine Vine-Edo Global Resources Ltd"
              width={440}
              height={150}
              priority
              className="h-full w-full object-contain object-left"
              sizes="(max-width: 640px) 180px, 220px"
            />
          </a>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            ))}

            <Button
              asChild
              className="ml-3 rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <a
                href={quoteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free Quote
              </a>
            </Button>
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => {
              setOpen((previous) => !previous);
            }}
            className="relative z-[10002] flex h-12 w-12 touch-manipulation items-center justify-center rounded-lg border border-border bg-background text-foreground active:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? (
              <X className="pointer-events-none h-6 w-6" />
            ) : (
              <Menu className="pointer-events-none h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu backdrop and navigation */}
      {open && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="fixed inset-x-0 bottom-0 top-[112px] z-[10000] bg-black/50 lg:hidden"
          />

          {/* Mobile navigation panel */}
          <div
            id="mobile-navigation"
            className="fixed inset-x-0 top-[112px] z-[10001] max-h-[calc(100dvh-112px)] overflow-y-auto overscroll-contain border-t border-border bg-background shadow-2xl lg:hidden"
          >
            <nav
              className="px-5 pb-8 pt-4"
              aria-label="Mobile navigation"
            >
              {/* Navigation links */}
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="mb-1 flex min-h-12 touch-manipulation items-center rounded-lg px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-accent active:bg-accent"
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile action buttons */}
              <div className="mt-5 space-y-3 px-1">
                <Button
                  asChild
                  className="h-12 w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={quoteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Get a Free Quote
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 w-full rounded-full font-semibold"
                >
                  <a
                    href={`tel:${phones[0].raw}`}
                    onClick={closeMenu}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call {phones[0].display}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
