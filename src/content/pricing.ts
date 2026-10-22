import type { PricingPageContent } from "@/types/content";

import { contactChannels } from "@/content/site";

const primaryChannel = contactChannels[0];

export const pricingPageContent: PricingPageContent = {
  title: "Абонементи",
  backgroundImageSrc: "/media/pricing/pricing-background.jpg",
  ctaLabel: "Записатись на пробне тренування",
  ctaHref: primaryChannel?.href ?? "",
  ctaExternal: primaryChannel?.external ?? false,
  personalTrainingTitle: "Персональні тренування",
  trialText: "Перше пробне тренування безкоштовно",
};

export const pricingCardSummaries: Record<string, string> = {
  military: "Для військовослужбовців",
  family: "Абонемент для дорослого і дитини або для двох дітей із сім’ї.",
  "personal-kids-two": "Для двох дітей",
};
