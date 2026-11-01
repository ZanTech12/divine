
import type { Metadata } from "next";

import { Navbar } from "@/components/site/navbar";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export const metadata: Metadata = {
  title:
    "Contact Divine Vine-Edo Global Resources Ltd | Solar Company Nigeria",

  description:
    "Contact Divine Vine-Edo Global Resources Ltd for solar panel installation, inverter and battery systems, solar street lights, borehole pumping and electrical services in Nigeria. Visit our Gboko or Asaba office.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Divine Vine-Edo Global Resources Ltd",
    description:
      "Request a solar energy or electrical installation quote. Contact our team or visit our offices in Gboko, Benue State and Asaba, Delta State.",

    url: "https://www.divinesolarhub.com/contact",

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

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Contact />
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}
