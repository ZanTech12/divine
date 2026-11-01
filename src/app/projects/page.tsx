
import type { Metadata } from "next";

import { Navbar } from "@/components/site/navbar";
import { Projects } from "@/components/site/projects";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export const metadata: Metadata = {
  title:
    "Solar Installation Projects in Nigeria | Divine Vine-Edo Global Resources Ltd",

  description:
    "Explore solar panel installations, residential and commercial solar energy systems, community projects and electrical installations delivered by Divine Vine-Edo Global Resources Ltd.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title:
      "Our Solar and Electrical Projects | Divine Vine-Edo Global Resources Ltd",

    description:
      "View our portfolio of solar energy installations, inverter systems, electrical projects and renewable energy solutions in Nigeria.",

    url: "https://www.divinesolarhub.com/projects",

    siteName: "Divine Vine-Edo Global Resources Ltd",

    type: "website",

    images: [
      {
        url: "/images/projects/cert.jpeg",
        width: 1200,
        height: 630,
        alt: "Divine Vine-Edo Global Resources Ltd project portfolio",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Projects />
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}
