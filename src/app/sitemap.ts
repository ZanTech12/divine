
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.divinesolarhub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/videos`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/founder`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/locations/solar-company-gboko`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solar-company-asaba`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceSlugs = [
    "solar-panel-installation",
    "inverter-battery-systems",
    "solar-street-lights",
    "solar-borehole-water-pumping",
    "electrical-wiring-installation",
    "solar-electrical-equipment",
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...staticPages, ...servicePages];
}
