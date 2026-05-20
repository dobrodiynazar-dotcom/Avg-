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
  const resolvedTitle = title === siteConfig.defaultTitle ? title : `${title} | ${siteName}`;
  const metadataBase = new URL(siteConfig.metadataBaseUrl);
  const url = `${siteConfig.metadataBaseUrl}${path}`;

  return {
    title: resolvedTitle,
    description,
    applicationName: siteName,
    metadataBase,
    alternates: {
      canonical: path,
    },
    robots: siteConfig.seo.robots,
    keywords: ["джіу-джитсу", "Brazilian Jiu-Jitsu", "Рівне", "спортивна академія"],
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
