import type { Metadata } from "next";

import { academyInfo } from "@/content/site";
import { siteConfig } from "@/lib/design/site";

type MetadataInput = {
  title: string;
  description?: string;
  path?: string;
};

export function buildMetadata({
  title,
  description = academyInfo.placeholderDescription,
  path = "/",
}: MetadataInput): Metadata {
  const siteName = academyInfo.name;
  const resolvedTitle =
    title === siteConfig.defaultTitle ? title : `${title} | ${siteName}`;
  const metadataBase = new URL(siteConfig.metadataBaseUrl);
  const url = `${siteConfig.metadataBaseUrl}${path}`;

  return {
    title: resolvedTitle,
    description,
    applicationName: siteName,
    metadataBase,
    icons: {
      icon: [
        {
          url: "/icons/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
      shortcut: "/icons/favicon-32x32.png",
      apple: [
        {
          url: "/icons/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "icon",
          url: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    alternates: {
      canonical: path,
    },
    robots: siteConfig.seo.robots,
    keywords: [
      "джиу-джитсу",
      "Brazilian Jiu-Jitsu",
      "Рівне",
      "спортивна академія",
      "тренування BJJ",
    ],
    openGraph: {
      title: resolvedTitle,
      description,
      type: "website",
      locale: academyInfo.locale,
      url,
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
