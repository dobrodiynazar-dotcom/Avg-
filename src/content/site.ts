import type { AcademyInfo, ContactChannel, SectionIntro } from "@/types/content";

export const academyInfo: AcademyInfo = {
  name: "Avangard Jiu-Jitsu Academy",
  shortName: "Avangard Jiu-Jitsu",
  city: "Рівне",
  country: "Україна",
  locale: "uk-UA",
  discipline: "Brazilian Jiu-Jitsu",
  titleTemplate: "%s | Avangard Jiu-Jitsu Academy",
  placeholderDescription:
    "Офіційний сайт Avangard Jiu-Jitsu Academy. Структура, секції та контентна модель підготовлені, фінальне наповнення уточнюється.",
  locationLabel: "Рівне, Україна",
  heroLabel: "Бразильське джіу-джитсу",
};

export const contactChannels: ContactChannel[] = [
  {
    key: "telegram",
    label: "Telegram",
    href: "#telegram",
    value: "@placeholder",
    description: "Швидкий зв'язок для першого запиту",
    variant: "primary",
    external: false,
    availability: "Дані будуть уточнені",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "#instagram",
    value: "@placeholder",
    description: "Актуальні анонси, фото та життя академії",
    variant: "secondary",
    external: false,
    availability: "Дані будуть уточнені",
  },
  {
    key: "phone",
    label: "Телефон",
    href: "#phone",
    value: "placeholder",
    description: "Контакт для дзвінка та консультації",
    variant: "tertiary",
    availability: "Дані будуть уточнені",
  },
  {
    key: "email",
    label: "Email",
    href: "#email",
    value: "placeholder@example.com",
    description: "Резервний канал для деталей та організаційних питань",
    variant: "tertiary",
    availability: "Дані будуть уточнені",
  },
];

export const heroHighlights = [
  "Преміальна структура без зайвого шуму",
  "Мобільна композиція закладена з першого етапу",
  "CTA та контент керуються окремими даними",
];

export const aboutPillars = [
  {
    title: "Структура",
    description:
      "Секція вже побудована так, щоб витримати короткий, сильний текст без потреби в складних декоративних рішеннях.",
  },
  {
    title: "Дисципліна",
    description:
      "Компоненти підтримують тональність, де акцент на якості процесу, а не на агресивних візуальних кліше.",
  },
  {
    title: "Оновлюваність",
    description:
      "Фінальні формулювання, факти й реальні дані можна буде додати без змін у layout або секційну архітектуру.",
  },
];

export const contactSectionContent: { intro: SectionIntro } = {
  intro: {
    eyebrow: "Контакти",
    title: "Контактна секція вже готова до реальних посилань і карти.",
    description:
      "Усі канали зв'язку живуть у типізованих даних, тому заміна плейсхолдерів на фінальні значення не вимагатиме переробки UI.",
  },
};
