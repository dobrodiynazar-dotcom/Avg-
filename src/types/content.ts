export type RouteKey =
  | "home"
  | "about"
  | "coaches"
  | "schedule"
  | "pricing"
  | "gallery"
  | "contact"
  | "faq";

export type CtaVariant = "primary" | "secondary" | "tertiary";

export type NavigationItem = {
  label: string;
  href: string;
  key: RouteKey;
};

export type ContactChannelKey = "telegram" | "instagram" | "phone" | "email";

export type ContactChannel = {
  key: ContactChannelKey;
  label: string;
  href: string;
  value: string;
  description?: string;
  variant: CtaVariant;
  external?: boolean;
  availability?: string;
};

export type AcademyInfo = {
  name: string;
  shortName: string;
  city: string;
  country: string;
  locale: string;
  discipline: string;
  titleTemplate: string;
  placeholderDescription: string;
  locationLabel: string;
  heroLabel: string;
};

export type PagePlaceholder = {
  key: RouteKey;
  title: string;
  eyebrow: string;
  summary: string;
  status: "planned" | "foundation-ready";
};

export type CoachProfile = {
  id: string;
  name: string;
  role: string;
  rank: string;
  summary: string;
  achievements: string[];
  focusAreas: string[];
  imageLabel: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  priceLabel: string;
  periodLabel: string;
  summary: string;
  features: string[];
  isFeatured?: boolean;
  note?: string;
};

export type ScheduleSession = {
  id: string;
  group: string;
  audience: string;
  days: string[];
  timeLabel: string;
  locationLabel: string;
  note?: string;
};

export type MediaAsset = {
  id: string;
  title: string;
  kind: "photo" | "video";
  summary: string;
  aspectRatio: "square" | "portrait" | "landscape" | "wide";
  status: "planned" | "selected";
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};
