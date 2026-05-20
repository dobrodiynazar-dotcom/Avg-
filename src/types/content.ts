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

export type ContactChannel = {
  key: "telegram" | "instagram" | "phone" | "email";
  label: string;
  href: string;
  variant: CtaVariant;
  external?: boolean;
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
};

export type PagePlaceholder = {
  key: RouteKey;
  title: string;
  eyebrow: string;
  summary: string;
  status: "planned" | "foundation-ready";
};
