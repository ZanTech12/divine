
import type { Metadata } from "next";

import { Navbar } from "@/components/site/navbar";
import { VideosSection } from "@/components/site/videos";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export const metadata: Metadata = {
  title:
    "Solar Energy and Engineering Project Videos | Divine Vine-Edo",

  description:
    "Watch engineering, technology, solar energy and project showcase videos from Divine Vine-Edo Global Resources Ltd. Explore our installations, services and practical solutions in Nigeria.",

  alternates: {
    canonical: "/videos",
  },

  openGraph: {
    title:
      "Project Videos | Divine Vine-Edo Global Resources Ltd",

    description:
      "Watch our engineering, technology, solar energy and project showcase videos. Discover the work and solutions of Divine Vine-Edo Global Resources Ltd.",

    url: "https://www.divinesolarhub.com/videos",

    siteName: "Divine Vine-Edo Global Resources Ltd",

    type: "website",

    images: [
      {
        url: "https://img.youtube.com/vi/5DTe8YdBN0M/hqdefault.jpg",
        width: 480,
        height: 360,
        alt: "Divine Vine-Edo Global Resources Ltd project video",
      },
    ],
  },
};

export default function VideosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <VideosSection />
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}
