import type { PricingPageContent, PricingPlan, SectionIntro } from "@/types/content";

import { contactChannels } from "@/content/site";

const primaryChannel = contactChannels[0];

export const pricingPageContent: PricingPageContent = {
  title: "Абонементи",
  backgroundImageSrc: "/media/schedule/schedule-background.jpg",
  ctaLabel: "Записатися на тренування",
  ctaHref: primaryChannel?.href ?? "/contact",
  ctaExternal: primaryChannel?.external ?? false,
};

export const pricingIntro: SectionIntro = {
  eyebrow: "Абонементи",
  title: "Абонементи для різних форматів занять в академії.",
  description:
    "Сторінка зберігає просту структуру: три реальні формати, чітка вартість за місяць і один прямий запис на тренування.",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "adults",
    name: "Доросла група",
    priceLabel: "1200",
    periodLabel: "м",
    summary: "",
    features: [],
  },
  {
    id: "kids-and-teens",
    name: "Дитяча та підліткова група",
    priceLabel: "1100",
    periodLabel: "м",
    summary: "",
    features: [],
  },
  {
    id: "family",
    name: "Сімейна група",
    priceLabel: "2000",
    periodLabel: "м",
    summary: "Абонемент для дорослого і дитини або для двох дітей з сімʼї.",
    features: [],
  },
];
