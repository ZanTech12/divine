
import type { Metadata } from "next";

import { Navbar } from "@/components/site/navbar";
import { Founder } from "@/components/site/founder";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export const metadata: Metadata = {
  title:
    "Our Founder | Divine Vine-Edo Global Resources Ltd",

  description:
    "Meet the founder of Divine Vine-Edo Global Resources Ltd and learn about the leadership, vision and commitment behind the company's solar energy and electrical solutions in Nigeria.",

  alternates: {
    canonical: "/founder",
  },

  openGraph: {
    title:
      "Meet Our Founder | Divine Vine-Edo Global Resources Ltd",

    description:
      "Discover the founder and leadership behind Divine Vine-Edo Global Resources Ltd, providing solar energy and electrical solutions in Nigeria.",

    url: "https://www.divinesolarhub.com/founder",

    siteName: "Divine Vine-Edo Global Resources Ltd",

    type: "profile",

    images: [
      {
        url: "/images/founder.jpeg",
        width: 1200,
        height: 630,
        alt: "Founder of Divine Vine-Edo Global Resources Ltd",
      },
    ],
  },
};

export default function FounderPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Founder />
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}
