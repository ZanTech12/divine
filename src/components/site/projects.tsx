
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

import { projects, type Project } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/app/reveal";

const websiteUrl = "https://www.divinesolarhub.com";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Community",
  "Electrical",
] as const;

type Category = (typeof categories)[number];

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${websiteUrl}/#projects`,
  name: "Solar Energy and Electrical Projects | Divine Vine-Edo Global Resources Ltd",
  description:
    "Explore solar energy installations, residential solar projects, commercial energy solutions, community projects and electrical installations delivered by Divine Vine-Edo Global Resources Ltd in Nigeria.",
  url: `${websiteUrl}/#projects`,
  isPartOf: {
    "@id": `${websiteUrl}/#website`,
  },
  about: {
    "@id": `${websiteUrl}/#organization`,
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Solar and Electrical Project Portfolio",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: project.image.startsWith("http")
          ? project.image
          : `${websiteUrl}${project.image.startsWith("/") ? "" : "/"}${project.image}`,
        genre: project.category,
        creator: {
          "@id": `${websiteUrl}/#organization`,
        },
      },
    })),
  },
};

export function Projects() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active]
  );

  const openLightbox = (
    index: number,
    trigger: HTMLButtonElement
  ) => {
    openerRef.current = trigger;
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const step = (direction: 1 | -1) => {
    if (lightboxIndex === null || filtered.length === 0) return;

    setLightboxIndex(
      (lightboxIndex + direction + filtered.length) % filtered.length
    );
  };

  const current: Project | null =
    lightboxIndex !== null
      ? filtered[lightboxIndex] ?? null
      : null;

  const handleImageError = (image: string) => {
    console.error("Failed to load project image:", image);

    setFailedImages((previous) =>
      previous.includes(image) ? previous : [...previous, image]
    );
  };

  // Lightbox keyboard navigation and scroll management.
  useEffect(() => {
    if (!current) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);

      if (openerRef.current?.isConnected) {
        openerRef.current.focus();
      }
    };
  }, [current, lightboxIndex, filtered]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden bg-muted py-20 sm:py-24"
    >
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="absolute right-1/3 top-1/2 h-72 w-72 rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <Reveal
            variant="light-sweep"
            duration={1000}
            easing="premium"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
              <Images className="h-4 w-4" />
              Our Portfolio
            </span>
          </Reveal>

          <Reveal
            variant="split-text"
            delay={120}
            duration={1100}
            easing="premium"
          >
            <h2
              id="projects-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Solar and Electrical Projects We Have Delivered
            </h2>
          </Reveal>

          <Reveal
            variant="focus"
            delay={250}
            duration={1100}
            easing="elegant"
          >
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Explore selected solar energy installations, residential
              and commercial power solutions, community projects and
              electrical installations completed by Divine Vine-Edo
              Global Resources Ltd. Tap any photo to view it larger.
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

        {/* Category Filters */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((category, index) => (
            <Reveal
              key={category}
              variant="up"
              delay={index * 90}
              duration={850}
              easing="premium"
            >
              <button
                type="button"
                role="tab"
                aria-selected={active === category}
                aria-controls="projects-grid"
                onClick={() => {
                  setActive(category);
                  setLightboxIndex(null);
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-500 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  active === category
                    ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20"
                    : "border border-transparent bg-background text-foreground/70 hover:border-primary/20 hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            </Reveal>
          ))}
        </div>

        {/* Project Grid */}
        <div
          id="projects-grid"
          role="tabpanel"
          aria-label={`${active} projects`}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, index) => {
            const imageFailed = failedImages.includes(project.image);

            return (
              <Reveal
                key={project.title}
                variant={
                  index % 3 === 0
                    ? "up"
                    : index % 3 === 1
                      ? "left"
                      : "right"
                }
                delay={(index % 3) * 140}
                duration={1050}
                easing="premium"
              >
                <article className="site-card group h-full overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">

                  {/* Project Image */}
                  <button
                    type="button"
                    onClick={(event) =>
                      openLightbox(index, event.currentTarget)
                    }
                    className="group relative block w-full overflow-hidden bg-muted text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                    aria-label={`View project: ${project.title}`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">

                      {!imageFailed ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} — ${project.category} solar and electrical project by Divine Vine-Edo Global Resources Ltd`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                          onError={() => handleImageError(project.image)}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted text-muted-foreground">
                          <Camera className="h-10 w-10 opacity-50" />
                          <span className="text-xs font-medium">
                            Image unavailable
                          </span>
                        </div>
                      )}

                      {/* Image Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-all duration-700 group-hover:opacity-100" />

                      {/* Light Effect */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      />

                      {/* Category Badge */}
                      <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-all duration-500 group-hover:scale-110">
                        {project.category}
                      </span>

                      {/* Camera Icon */}
                      <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary">
                        <Camera className="h-4 w-4" />
                      </span>

                      {/* Project Title */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <h3 className="text-base font-bold text-white transition-all duration-500 group-hover:translate-x-1 sm:text-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </button>

                  {/* Project Description */}
                  <div className="bg-card p-4">
                    <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <Reveal
            variant="zoom"
            duration={950}
            easing="premium"
          >
            <div className="mt-10 rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
              <Camera className="mx-auto h-10 w-10 text-muted-foreground/50" />

              <p className="mt-4 text-base font-semibold text-foreground">
                No projects available in this category yet.
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Please explore another project category.
              </p>
            </div>
          </Reveal>
        )}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Lightbox Image */}
            <div className="relative aspect-[16/10] w-full bg-muted">

              {!failedImages.includes(current.image) ? (
                <Image
                  key={current.image}
                  src={current.image}
                  alt={`${current.title} — ${current.category} project photo by Divine Vine-Edo Global Resources Ltd`}
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                  onError={() => handleImageError(current.image)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted text-muted-foreground">
                  <Camera className="h-12 w-12 opacity-50" />
                  <span className="text-sm font-medium">
                    Project image unavailable
                  </span>
                </div>
              )}

              {/* Image Overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              />

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all duration-500 hover:rotate-90 hover:scale-110 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close project view"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Counter */}
              <span className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                {lightboxIndex !== null
                  ? `${lightboxIndex + 1} / ${filtered.length}`
                  : ""}
              </span>
            </div>

            {/* Lightbox Information */}
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
              <div className="min-w-0">
                <Reveal
                  variant="up"
                  duration={650}
                  easing="elegant"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {current.category}
                  </span>

                  <h3
                    id="project-lightbox-title"
                    className="mt-1 text-xl font-bold text-foreground"
                  >
                    {current.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {current.description}
                  </p>
                </Reveal>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden shrink-0 gap-2 sm:flex">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => step(-1)}
                  aria-label="Previous project"
                  title="Previous project (Left Arrow)"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => step(1)}
                  aria-label="Next project"
                  title="Next project (Right Arrow)"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-end gap-2 px-5 pb-5 sm:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={() => step(-1)}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => step(1)}
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
