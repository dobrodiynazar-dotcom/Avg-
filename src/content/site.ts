import type { AcademyInfo, ContactChannel } from "@/types/content";

export const academyInfo: AcademyInfo = {
  name: "Avangard Jiu-Jitsu Academy",
  shortName: "Avangard Jiu-Jitsu",
  city: "Рівне",
  country: "Україна",
  locale: "uk-UA",
  discipline: "Brazilian Jiu-Jitsu",
  titleTemplate: "%s | Avangard Jiu-Jitsu Academy",
  placeholderDescription:
    "Офіційний сайт Avangard Jiu-Jitsu Academy. Структура сайту підготовлена, контент оновлюється.",
};

export const contactChannels: ContactChannel[] = [
  {
    key: "telegram",
    label: "Telegram",
    href: "#telegram",
    variant: "primary",
    external: true,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "#instagram",
    variant: "secondary",
    external: true,
  },
  {
    key: "phone",
    label: "Телефон",
    href: "#phone",
    variant: "tertiary",
  },
];
