
import type { Metadata } from "next";

import { Navbar } from "@/components/site/navbar";
import { WhyUs } from "@/components/site/whyus";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export const metadata: Metadata = {
  title:
    "Why Choose Divine Vine-Edo | Solar Energy Company Nigeria",

  description:
    "Discover why customers choose Divine Vine-Edo Global Resources Ltd for solar energy and electrical solutions. Learn about our project process, service commitments and approach to delivering solar installations in Nigeria.",

  alternates: {
    canonical: "/whyus",
  },

  openGraph: {
    title:
      "Why Choose Us | Divine Vine-Edo Global Resources Ltd",

    description:
      "Learn about our solar and electrical project delivery process, customer service commitments and approach to providing energy solutions in Nigeria.",

    url: "https://www.divinesolarhub.com/whyus",

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

export default function WhyUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <WhyUs />
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}
