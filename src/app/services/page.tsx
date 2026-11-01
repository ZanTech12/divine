
import type { Metadata } from "next";

import { Navbar } from "@/components/site/navbar";
import { Services } from "@/components/site/services";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export const metadata: Metadata = {
  title:
    "Solar Energy and Electrical Services in Nigeria | Divine Vine-Edo",

  description:
    "Explore solar panel installation, inverter and battery systems, solar street lights, solar borehole and water pumping, electrical wiring and solar equipment from Divine Vine-Edo Global Resources Ltd.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Solar Energy and Electrical Services | Divine Vine-Edo Global Resources Ltd",

    description:
      "Discover our solar energy, inverter, battery, lighting, water pumping and electrical installation services for homes, businesses and communities in Nigeria.",

    url: "https://www.divinesolarhub.com/services",

    siteName: "Divine Vine-Edo Global Resources Ltd",

    type: "website",

    images: [
      {
        url: "/images/projects/cert.jpeg",
        width: 1200,
        height: 630,
        alt: "Divine Vine-Edo Global Resources Ltd solar and electrical services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Services />
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}
