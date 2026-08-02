import type { PricingPageContent, PricingPlan } from "@/types/content";

import { contactChannels } from "@/content/site";

const primaryChannel = contactChannels[0];

export const pricingPageContent: PricingPageContent = {
  title: "Абонементи",
  backgroundImageSrc: "/media/pricing/pricing-background.jpg",
  ctaLabel: "Записатися на тренування",
  ctaHref: primaryChannel?.href ?? "/contact",
  ctaExternal: primaryChannel?.external ?? false,
  oneTimeTraining: {
    id: "single-group",
    title: "Разове групове тренування",
    priceLabel: "300 грн",
  },
  personalTrainingTitle: "Персональні тренування",
  personalTraining: [
    {
      id: "personal-adult",
      title: "Дорослий",
      priceLabel: "500 грн",
    },
    {
      id: "personal-kids-two",
      title: "Дитяче тренування для двох дітей",
      priceLabel: "800 грн",
    },
  ],
  trialText: "Перше пробне тренування безкоштовно",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "adults",
    name: "Доросла група",
    priceLabel: "1400 грн",
    features: [],
  },
  {
    id: "kids-and-teens",
    name: "Дитячі та підліткові групи",
    priceLabel: "1300 грн",
    features: [],
  },
  {
    id: "military",
    name: "Військовослужбовці",
    priceLabel: "700 грн",
    features: [],
  },
  {
    id: "family",
    name: "Сімейна група",
    priceLabel: "2300 грн",
    summary: "Абонемент для дорослого і дитини або для двох дітей із сімʼї.",
    features: [],
  },
  {
    id: "veterans",
    name: "Група ветеранів TMS HUB",
    priceLabel: "Безкоштовно",
    features: [],
  },
];
