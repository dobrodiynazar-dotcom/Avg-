import { designTokens } from "@/lib/design/tokens";

export const siteConfig = {
  name: "Avangard Jiu-Jitsu Academy",
  shortName: "Avangard",
  locale: "uk-UA",
  locationLabel: "Рівне, Україна",
  metadataBaseUrl: "https://avangardjiujitsu.com.ua",
  defaultTitle: "Avangard Jiu-Jitsu Academy | Джиу-джитсу в Рівному",
  titleTemplate: "%s | Avangard Jiu-Jitsu Academy",
  description:
    "Тренування з джиу-джитсу для дітей, підлітків, дорослих та ветеранів. Професійні тренери та дві локації у Рівному.",
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
