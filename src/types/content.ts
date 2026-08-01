export type RouteKey =
  | "home"
  | "about"
  | "coaches"
  | "veterans"
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
  ctaLabel?: string;
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
  key: "about" | "coaches" | "gallery" | "contact" | "faq";
  title: string;
  eyebrow: string;
  summary: string;
  status: "placeholder" | "foundation-ready";
};

export type CoachProfile = {
  id: string;
  name: string;
  role: string;
  rank: string;
  summary: string;
  supportingInfo?: string[];
  achievements: string[];
  focusAreas: string[];
  imageLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  imageObjectPosition?: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type HeroBackgroundMedia = {
  videoSrc: string;
  posterSrc: string;
  label: string;
};

export type FeatureMediaPanel = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
};

export type TransitionImageContent = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type AcademyStatementContent = {
  paragraphs: string[];
};

export type PricingPlan = {
  id: string;
  name: string;
  priceLabel: string;
  periodLabel: string;
  summary: string;
  features: string[];
  isFeatured?: boolean;
  badgeLabel?: string;
  ctaLabel?: string;
  note?: string;
};

export type PricingPageContent = {
  title: string;
  backgroundImageSrc: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
};

export type SchedulePreviewGroup = {
  id: string;
  label: string;
};

export type ScheduleEntry = {
  id: string;
  time: string;
  group: string;
};

export type ScheduleDay = {
  id: string;
  label: string;
  entries: ScheduleEntry[];
};

export type ScheduleLocationSchedule = {
  id: string;
  label: string;
  days: ScheduleDay[];
};

export type SchedulePageContent = {
  title: string;
  backgroundImageSrc: string;
  defaultLocationId: string;
};

export type MediaAsset = {
  id: string;
  title: string;
  kind: "photo" | "video";
  summary: string;
  aspectRatio: "square" | "portrait" | "landscape" | "wide";
  status: "planned" | "selected";
  statusLabel: string;
  imageSrc?: string;
  objectPosition?: string;
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

export type LocationItem = {
  id: string;
  title: string;
  addressLines: string[];
  mapHref: string;
  mapEmbedSrc: string;
};

export type LocationSectionContent = {
  title: string;
  mapButtonLabel: string;
  backgroundImageSrc: string;
  locations: LocationItem[];
};

export type VeteransHeroContent = {
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  videoSrc: string;
  posterSrc: string;
};

export type VeteransBenefit = {
  title: string;
  description: string;
};

export type VeteransProgramContent = {
  label: string;
  title: string;
  paragraphs: string[];
  benefits: VeteransBenefit[];
};

export type VeteransPhotoStatementContent = {
  label: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};

export type VeteransFinalCtaContent = {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export type VeteransPageContent = {
  hero: VeteransHeroContent;
  program: VeteransProgramContent;
  tmsHub: VeteransPhotoStatementContent;
  faqIntro: SectionIntro;
  faqNote: string;
  finalCta: VeteransFinalCtaContent;
};
