
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.divinesolarhub.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/dashboard/",
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
