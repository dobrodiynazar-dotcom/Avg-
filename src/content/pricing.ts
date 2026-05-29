import type { PricingPageContent, PricingPlan, SectionIntro } from "@/types/content";

import { contactChannels } from "@/content/site";

const primaryChannel = contactChannels[0];

export const pricingPageContent: PricingPageContent = {
  title: "Абонементи",
  backgroundImageSrc: "/media/schedule/schedule-background.jpg",
  ctaLabel: "Записатись на перше пробне тренування",
  ctaHref: primaryChannel?.href ?? "/contact",
  ctaExternal: primaryChannel?.external ?? false,
};

export const pricingIntro: SectionIntro = {
  eyebrow: "Абонементи",
  title: "Абонементи для різних форматів занять в академії.",
  description:
    "Сторінка зберігає просту структуру: три реальні формати, чітка вартість за місяць і один прямий запис на пробне тренування.",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "adults",
    name: "Доросла група",
    priceLabel: "₴ 1200",
    periodLabel: "/м",
    summary: "Абонемент на 1 місяць для регулярних тренувань дорослої групи.",
    features: [],
  },
  {
    id: "kids-and-teens",
    name: "Дитяча та підліткова група",
    priceLabel: "₴ 1100",
    periodLabel: "/м",
    summary:
      "Абонемент на 1 місяць для дитячих і підліткових тренувальних груп академії.",
    features: [],
  },
  {
    id: "family",
    name: "Сімейна група",
    priceLabel: "₴ 2000",
    periodLabel: "/м",
    summary:
      "Абонемент на 1 місяць для дорослого і дитини або двох дітей з сімʼї",
    features: [],
  },
];
