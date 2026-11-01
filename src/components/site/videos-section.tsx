
"use client";

import { useState } from "react";
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

export function VideosSection() {
  const [activeVideo, setActiveVideo] =
    useState<ProjectVideo | null>(null);

  const whatsappLink = `https://wa.me/${
    company.whatsappPrimary
  }?text=${encodeURIComponent(
    "Hello DIVINE VINE-EDO, I would like to know more about your projects and services."
  )}`;

  return (
    <section
      id="videos"
      className="relative isolate overflow-hidden bg-[#07111f] py-24 sm:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
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

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.08] px-5 py-2">
            <Sparkles className="h-4 w-4 text-amber-400" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Our Project Gallery
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Innovation You Can
            <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              See in Action.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore our projects, engineering solutions and
            technological innovations. We turn ideas into
            practical solutions through creativity, expertise
            and quality execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Engineering
            </span>

            <span className="text-slate-700">/</span>

            <span>Technology</span>

            <span className="text-slate-700">/</span>

            <span>Innovation</span>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectVideos.map((video) => (
            <article
              key={video.id}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#101e30] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-amber-500/10"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-[9/16] overflow-hidden bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)`,
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-black/10 to-black/30" />

                {/* Top Badge */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 backdrop-blur-md">
                  <Video className="h-3.5 w-3.5 text-amber-400" />

                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    {video.category}
                  </span>
                </div>

                {/* Video Number */}
                <span className="absolute right-5 top-5 text-3xl font-black text-white/50">
                  {video.number}
                </span>

                {/* Play Button */}
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  aria-label={`Play ${video.title}`}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-amber-400 text-[#07111f] shadow-[0_0_45px_rgba(251,191,36,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                    <Play className="ml-1 h-8 w-8 fill-current" />
                  </span>
                </button>

                {/* Bottom Video Label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex items-center gap-2 rounded-md bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <Film className="h-3.5 w-3.5 text-amber-400" />
                    Watch Project Video
                  </span>
                </div>
              </div>

              {/* Video Details */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-white transition-colors group-hover:text-amber-400">
                      {video.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {video.description}
                    </p>
                  </div>

                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-400 transition-all group-hover:border-amber-400/40 group-hover:bg-amber-400 group-hover:text-[#07111f]">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Project Gallery
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className="flex items-center gap-1 text-sm font-bold text-amber-400 transition-colors hover:text-white"
                  >
                    Watch Now
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Call To Action */}
        <div className="relative mt-20 overflow-hidden rounded-[30px] border border-amber-400/20 bg-gradient-to-r from-[#152438] via-[#18283a] to-[#101b2a] p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-[70px]" />

          <div className="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Let's Build Something Great
              </span>

              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Have a project in mind?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Talk to our team about your next engineering,
                automation or technology project.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-sm font-extrabold text-[#07111f] shadow-xl shadow-amber-400/10 transition-all hover:-translate-y-1 hover:bg-white"
            >
              Discuss Your Project
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-center text-xs tracking-wide text-slate-500">
          © 2026 DIVINE VINE-EDO GLOBAL RESOURCES LTD.
          All Rights Reserved.
        </p>

      </div>

      {/* YouTube Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Now playing: ${activeVideo.title}`}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#101e30] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Project Video
                </span>

                <h3 className="mt-1 text-sm font-bold text-white">
                  {activeVideo.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-red-500"
                aria-label="Close video player"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* YouTube Shorts Player */}
            <div className="aspect-[9/16] w-full bg-black">
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

            <div className="px-5 py-4">
              <p className="text-xs text-slate-400">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
