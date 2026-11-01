
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const websiteUrl = "https://www.divinesolarhub.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${websiteUrl}/#organization`,
  name: "Divine Vine-Edo Global Resources Ltd",
  url: websiteUrl,
  logo: `${websiteUrl}/logo.svg`,
  image: `${websiteUrl}/images/hero-bg.jpeg`,
  description:
    "Divine Vine-Edo Global Resources Ltd provides solar energy solutions, solar panel installations, hybrid inverters, batteries, solar street lights, borehole systems and electrical services in Nigeria.",
  email: "divinevision5050@gmail.com",
  telephone: "+2347033533320",
  founder: {
    "@type": "Person",
    "@id": `${websiteUrl}/#founder`,
    name: "Vincent Edochie Mmadukolu",
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Gboko",
      addressRegion: "Benue State",
      addressCountry: "NG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Ultra Modern Market",
      addressLocality: "Asaba",
      addressRegion: "Delta State",
      addressCountry: "NG",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  knowsAbout: [
    "Solar Energy Systems",
    "Solar Panel Installation",
    "Hybrid Inverters",
    "Solar Batteries",
    "Solar Street Lighting",
    "Borehole Pumping Systems",
    "Electrical Wiring",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(websiteUrl),
  title:
    "Divine Vine-Edo Global Resources Ltd | Solar Energy & Electrical Services in Nigeria",
  description:
    "Divine Vine-Edo Global Resources Ltd supplies and installs solar panels, hybrid inverters, batteries, solar street lights and borehole systems, with professional electrical wiring services. Offices in Gboko, Benue State and Asaba, Delta State, Nigeria.",
  keywords: [
    "solar installation Nigeria",
    "solar company Benue State",
    "solar Asaba Delta State",
    "inverter installation Nigeria",
    "solar street lights Nigeria",
    "electrical wiring Gboko",
    "Divine Vine-Edo Global Resources",
    "divinesolarhub",
  ],
  authors: [{ name: "Divine Vine-Edo Global Resources Ltd" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Divine Vine-Edo Global Resources Ltd",
    description:
      "Reliable solar energy, inverters & electrical services for Nigerian homes and businesses. Offices in Gboko (Benue State) and Asaba (Delta State).",
    url: websiteUrl,
    siteName: "Divine Vine-Edo Global Resources Ltd",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/images/hero-bg.jpeg",
        width: 1344,
        height: 768,
        alt: "Solar panels installed on a Nigerian rooftop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Vine-Edo Global Resources Ltd",
    description:
      "Solar panels, inverters, batteries, street lights & electrical services in Nigeria.",
  },
};

export const viewport: Viewport = {
  themeColor: "#15803D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        {children}
        <Toaster />
      </body>
    </html>
  );
}
