import { designTokens } from "@/lib/design/tokens";

export const siteConfig = {
  name: "Avangard Jiu-Jitsu Academy",
  shortName: "Avangard",
  locale: "uk-UA",
  locationLabel: "Rivne, Ukraine",
  metadataBaseUrl: "https://example.com",
  defaultTitle: "Avangard Jiu-Jitsu Academy",
  titleTemplate: "%s | Avangard Jiu-Jitsu Academy",
  description:
    "Structured placeholder metadata for the Avangard Jiu-Jitsu Academy website pending final approved copy.",
  themeColor: designTokens.colors.canvas,
  container: {
    maxWidth: designTokens.layout.containerMax,
    paddingInline: {
      mobile: designTokens.layout.containerPaddingMobile,
      desktop: designTokens.layout.containerPaddingDesktop,
    },
  },
  breakpoints: designTokens.breakpoints,
  seo: {
    robots: {
      index: true,
      follow: true,
    },
    ogType: "website",
  },
} as const;

export type SiteConfig = typeof siteConfig;
