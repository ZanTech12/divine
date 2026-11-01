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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.divinesolarhub.com"),
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
    url: "https://www.divinesolarhub.com",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}