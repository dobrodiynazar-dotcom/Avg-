import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/design/site";

const publicRoutes = [
  "/",
  "/coaches",
  "/schedule",
  "/pricing",
  "/veterans",
  "/gallery",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route, siteConfig.metadataBaseUrl).toString(),
  }));
}
