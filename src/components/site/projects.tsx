
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { projects, type Project } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

const websiteUrl = "https://www.divinesolarhub.com";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Community",
  "Electrical",
] as const;

type Category = (typeof categories)[number];

// Portfolio structured data.
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
          : `${websiteUrl}${project.image}`,
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

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  const openLightbox = (index: number) => setLightboxIndex(index);

  const closeLightbox = () => setLightboxIndex(null);

  const step = (dir: 1 | -1) => {
    if (lightboxIndex === null || filtered.length === 0) return;

    const next =
      (lightboxIndex + dir + filtered.length) % filtered.length;

    setLightboxIndex(next);
  };

  const current: Project | null =
    lightboxIndex !== null
      ? filtered[lightboxIndex] ?? null
      : null;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-muted py-20 sm:py-24"
    >
      {/* Project portfolio structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Our Portfolio
          </span>

          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Solar and Electrical Projects We Have Delivered
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Explore selected solar energy installations, residential
            and commercial power solutions, community projects and
            electrical installations completed by Divine Vine-Edo
            Global Resources Ltd. Tap any photo to view it larger.
          </p>
        </div>

        {/* Category filter */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              aria-controls="projects-grid"
              onClick={() => {
                setActive(cat);
                setLightboxIndex(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "bg-background text-foreground/70 hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          id="projects-grid"
          role="tabpanel"
          aria-label={`${active} projects`}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, index) => (
            <article
              key={project.title}
              className="site-card overflow-hidden rounded-2xl"
            >
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`View project: ${project.title}`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} solar and electrical project by Divine Vine-Edo Global Resources Ltd`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                    {project.category}
                  </span>

                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-primary">
                    <Camera className="h-4 w-4" />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </button>

              {/* Visible project description for visitors and crawlers */}
              <div className="bg-card p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border bg-card p-10 text-center">
            <p className="text-base font-semibold text-foreground">
              No projects available in this category yet.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Please explore another project category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={current.image}
                alt={`${current.title} — ${current.category} project photo by Divine Vine-Edo Global Resources Ltd`}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />

              <button
                type="button"
                onClick={closeLightbox}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black"
                aria-label="Close project view"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
              <div>
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
              </div>

              <div className="hidden shrink-0 gap-2 sm:flex">
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
        </div>
      )}
    </section>
  );
}
