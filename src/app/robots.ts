import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/design/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.metadataBaseUrl}/sitemap.xml`,
  };
}
