
import type { Metadata } from "next";

import { Navbar } from "@/components/site/navbar";
import { About } from "@/components/site/about";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export const metadata: Metadata = {
  title: "About Divine Vine-Edo Global Resources Ltd | Solar Energy Company Nigeria",
  description:
    "Learn about Divine Vine-Edo Global Resources Ltd, a Nigerian solar energy and electrical solutions company providing solar installations, inverters, batteries and electrical services.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Divine Vine-Edo Global Resources Ltd",
    description:
      "Discover our company, vision, mission, values and solar energy solutions in Nigeria.",
    url: "https://www.divinesolarhub.com/about",
    siteName: "Divine Vine-Edo Global Resources Ltd",
    type: "website",
    images: [
      {
        url: "/images/projects/cert.jpeg",
        width: 1200,
        height: 630,
        alt: "Divine Vine-Edo Global Resources Ltd",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <About />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
