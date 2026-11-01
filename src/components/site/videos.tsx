
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Play,
  X,
  Film,
  ArrowUpRight,
  Sparkles,
  Video,
  ChevronRight,
} from "lucide-react";

import { company } from "@/lib/site-data";
import { Reveal } from "@/app/reveal";

const websiteUrl = "https://www.divinesolarhub.com";

const projectVideos = [
  {
    id: "5DTe8YdBN0M",
    number: "01",
    title: "Engineering in Action",
    category: "Project Showcase",
    description:
      "Explore our engineering solutions, installations and technical capabilities.",
  },
  {
    id: "Un9sNhCoKjU",
    number: "02",
    title: "Technology at Work",
    category: "Technology",
    description:
      "Discover how we apply innovative technology to solve practical challenges.",
  },
  {
    id: "3kGfA9Vu4wE",
    number: "03",
    title: "Our Work & Solutions",
    category: "Our Projects",
    description:
      "A closer look at our projects, services and commitment to quality.",
  },
];

type ProjectVideo = (typeof projectVideos)[number];

// Video structured data.
const videoGallerySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${websiteUrl}/#videos`,
  name: "Project Videos | Divine Vine-Edo Global Resources Ltd",
  description:
    "Watch engineering, technology, solar energy and project showcase videos from Divine Vine-Edo Global Resources Ltd.",
  url: `${websiteUrl}/#videos`,
  about: {
    "@id": `${websiteUrl}/#organization`,
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Engineering and Project Video Gallery",
    numberOfItems: projectVideos.length,
    itemListElement: projectVideos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        thumbnailUrl: [
          `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
        ],
        embedUrl: `https://www.youtube.com/embed/${video.id}`,
        url: `https://www.youtube.com/watch?v=${video.id}`,
        publisher: {
          "@type": "Organization",
          name: "Divine Vine-Edo Global Resources Ltd",
          url: websiteUrl,
        },
      },
    })),
  },
};

export function VideosSection() {
  const [activeVideo, setActiveVideo] =
    useState<ProjectVideo | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const whatsappLink = `https://wa.me/${
    company.whatsappPrimary
  }?text=${encodeURIComponent(
    "Hello DIVINE VINE-EDO, I would like to know more about your projects and services."
  )}`;

  // Handle modal keyboard interaction, focus and page scrolling.
  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="relative isolate overflow-hidden bg-[#07111f] py-16 sm:py-20"
    >
      {/* Video gallery structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoGallerySchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <header className="mb-10 flex flex-col items-center text-center sm:mb-12">

          {/* Eyebrow */}
          <Reveal
            variant="light-sweep"
            duration={1000}
            easing="premium"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.08] px-4 py-2 transition-all duration-500 hover:border-amber-400/50 hover:bg-amber-400/[0.12]">
              <Sparkles
                className="h-4 w-4 text-amber-400"
                aria-hidden="true"
              />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Our Project Gallery
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal
            variant="split-text"
            delay={120}
            duration={1100}
            easing="premium"
          >
            <h2
              id="videos-heading"
              className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Innovation You Can

              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                See in Action.
              </span>
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal
            variant="focus"
            delay={220}
            duration={1100}
            easing="elegant"
          >
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Explore engineering projects, solar energy solutions,
              installations and technological innovations from
              Divine Vine-Edo Global Resources Ltd. Discover how
              we turn ideas into practical solutions through
              creativity, technical expertise and quality execution.
            </p>
          </Reveal>

          {/* Category Indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            {["Engineering", "Technology", "Innovation"].map(
              (item, index) => (
                <Reveal
                  key={item}
                  variant="up"
                  delay={index * 120}
                  duration={850}
                  easing="premium"
                >
                  <span className="flex items-center gap-2 transition-colors duration-300 hover:text-amber-400">
                    {index === 0 && (
                      <span
                        className="h-2 w-2 rounded-full bg-amber-400"
                        aria-hidden="true"
                      />
                    )}

                    {item}
                  </span>
                </Reveal>
              )
            )}
          </div>

          <Reveal
            variant="line-draw"
            delay={350}
            duration={1000}
            easing="premium"
          >
            <div className="mt-6 h-1 w-20 rounded-full bg-amber-400" />
          </Reveal>
        </header>

        {/* Video Gallery */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {projectVideos.map((video, index) => (
            <Reveal
              key={video.id}
              variant={
                index === 0
                  ? "left"
                  : index === 1
                    ? "up"
                    : "right"
              }
              delay={index * 150}
              duration={1050}
              easing="premium"
              className="mx-auto w-full max-w-[290px]"
            >
              <article className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#101e30] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10">

                {/* Decorative top accent */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 z-20 h-1 w-0 bg-amber-400 transition-all duration-700 group-hover:w-full"
                />

                {/* Video Thumbnail */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black">

                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)`,
                    }}
                    role="img"
                    aria-label={`Thumbnail for ${video.title}`}
                  />

                  {/* Dark Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-black/10 to-black/30 transition-all duration-700 group-hover:from-[#07111f]/95 group-hover:via-black/30"
                    aria-hidden="true"
                  />

                  {/* Top Badge */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1.5 backdrop-blur-md transition-all duration-300 group-hover:border-amber-400/50 group-hover:bg-black/60">
                    <Video
                      className="h-3 w-3 text-amber-400"
                      aria-hidden="true"
                    />

                    <span className="text-[9px] font-bold uppercase tracking-wider text-white">
                      {video.category}
                    </span>
                  </div>

                  {/* Video Number */}
                  <span
                    className="absolute right-3 top-3 text-2xl font-black text-white/50 transition-all duration-500 group-hover:scale-125 group-hover:text-amber-400"
                    aria-hidden="true"
                  >
                    {video.number}
                  </span>

                  {/* Play Button */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    aria-label={`Play video: ${video.title}`}
                    className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-amber-400 text-[#07111f] shadow-[0_0_35px_rgba(251,191,36,0.35)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:bg-white group-focus-visible:ring-4 group-focus-visible:ring-amber-400/40">
                      <Play
                        className="ml-1 h-6 w-6 fill-current"
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  {/* Bottom Video Label */}
                  <div className="absolute bottom-3 left-3 right-3 transition-transform duration-500 group-hover:translate-y-[-3px]">
                    <span className="inline-flex items-center gap-2 rounded-md bg-black/40 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
                      <Film
                        className="h-3 w-3 text-amber-400"
                        aria-hidden="true"
                      />

                      Watch Project Video
                    </span>
                  </div>
                </div>

                {/* Video Details */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-extrabold text-white transition-colors duration-300 group-hover:text-amber-400">
                        {video.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {video.description}
                      </p>
                    </div>

                    <span
                      className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-amber-400/40 group-hover:bg-amber-400 group-hover:text-[#07111f]"
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Project Gallery
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className="flex items-center gap-1 text-xs font-bold text-amber-400 transition-all duration-300 hover:gap-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101e30]"
                      aria-label={`Watch ${video.title}`}
                    >
                      Watch Now

                      <ChevronRight
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom Call To Action */}
        <Reveal
          variant="depth"
          delay={150}
          duration={1150}
          easing="premium"
        >
          <div className="group relative mt-14 overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-r from-[#152438] via-[#18283a] to-[#101b2a] p-6 transition-all duration-500 hover:border-amber-400/40 sm:mt-16 sm:p-9">

            <div
              className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-[70px] transition-transform duration-1000 group-hover:scale-150"
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

              <div className="max-w-2xl">
                <Reveal
                  variant="left"
                  delay={200}
                  duration={850}
                  easing="elegant"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                    Let's Build Something Great
                  </span>
                </Reveal>

                <Reveal
                  variant="split-text"
                  delay={300}
                  duration={1000}
                  easing="premium"
                >
                  <h3 className="mt-3 text-xl font-extrabold text-white sm:text-2xl">
                    Have a Project in Mind?
                  </h3>
                </Reveal>

                <Reveal
                  variant="focus"
                  delay={400}
                  duration={900}
                  easing="elegant"
                >
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Talk to Divine Vine-Edo Global Resources Ltd about
                    your next solar energy, electrical or technology project.
                  </p>
                </Reveal>
              </div>

              <Reveal
                variant="light-sweep"
                delay={350}
                duration={1000}
                easing="premium"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discuss your project with Divine Vine-Edo on WhatsApp"
                  className="group/button inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-amber-400 px-6 py-3 text-xs font-extrabold text-[#07111f] shadow-xl shadow-amber-400/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#152438]"
                >
                  Discuss Your Project

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:rotate-45" />
                </a>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* Footer Note */}
        <Reveal
          variant="fade"
          delay={150}
          duration={1000}
          easing="elegant"
        >
          <p className="mt-8 text-center text-xs tracking-wide text-slate-500">
            © 2026 DIVINE VINE-EDO GLOBAL RESOURCES LTD.
            All Rights Reserved.
          </p>
        </Reveal>
      </div>

      {/* YouTube Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/95 p-3 backdrop-blur-md sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onClick={() => setActiveVideo(null)}
        >
          <Reveal
            variant="zoom"
            duration={450}
            easing="premium"
            className="my-auto w-full max-w-[360px] sm:max-w-[400px]"
          >
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#101e30] shadow-2xl shadow-black/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Project Video
                  </span>

                  <h3
                    id="video-modal-title"
                    className="mt-1 text-sm font-bold text-white"
                  >
                    {activeVideo.title}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-400/40 bg-red-500/15 text-white shadow-lg transition-all duration-300 hover:rotate-90 hover:bg-red-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  aria-label="Close video player"
                  title="Close video"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* YouTube Player */}
              <div className="aspect-[9/16] max-h-[65vh] w-full bg-black">
                <iframe
                  key={activeVideo.id}
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Video Description */}
              <div className="px-4 py-3">
                <p className="text-xs leading-5 text-slate-400">
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}
