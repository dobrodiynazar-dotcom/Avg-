import type {
  AcademyInfo,
  AcademyStatementContent,
  ContactChannel,
  FeatureMediaPanel,
  HeroBackgroundMedia,
  HighlightItem,
  LocationSectionContent,
  TransitionImageContent,
} from "@/types/content";

export const academyInfo: AcademyInfo = {
  name: "Avangard Jiu-Jitsu Academy",
  shortName: "Avangard Jiu-Jitsu",
  city: "Рівне",
  country: "Україна",
  locale: "uk-UA",
  discipline: "Brazilian Jiu-Jitsu",
  titleTemplate: "%s | Avangard Jiu-Jitsu Academy",
  placeholderDescription:
    "Avangard Jiu-Jitsu Academy у Рівному: актуальний розклад, ціни, контакти та перший крок до тренувань.",
  locationLabel: "Рівне, Україна",
  heroLabel: "Бразильське джиу-джитсу",
};

export const heroBackgroundMedia: HeroBackgroundMedia = {
  videoSrc: "/media/hero/avangard-hero.mp4",
  posterSrc: "/media/hero/avangard-hero-poster.jpg",
  label: "Кінематографічний кадр тренування Avangard Jiu-Jitsu",
};

export const contactChannels: ContactChannel[] = [
  {
    key: "telegram",
    label: "Telegram",
    href: "https://t.me/Olenka_Jiu",
    value: "@Olenka_Jiu",
    ctaLabel: "Написати в Telegram",
    description:
      "Зручний канал для першого повідомлення, уточнення групи та організаційних деталей.",
    variant: "primary",
    external: true,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/avangard_jiu_jitsu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    value: "@avangard_jiu_jitsu",
    ctaLabel: "Перейти в Instagram",
    description:
      "Актуальні кадри з тренувань, атмосфера академії та новини спільноти.",
    variant: "secondary",
    external: true,
  },
  {
    key: "phone",
    label: "Телефон",
    href: "tel:+380962889102",
    value: "+38 096 288 91 02",
    ctaLabel: "Подзвонити",
    description:
      "Прямий контакт для швидкого уточнення розкладу, формату й запису.",
    variant: "tertiary",
  },
  {
    key: "email",
    label: "Email",
    href: "mailto:mybjj.rivne@gmail.com",
    value: "mybjj.rivne@gmail.com",
    ctaLabel: "Написати на email",
    description:
      "Контакт для детальніших запитів, організаційних звернень і партнерських питань.",
    variant: "tertiary",
  },
];

export const heroContent = {
  titleLead: "AVANGARD JIU JITSU",
  subtitle:
    "Джиу-джитсу — спортивне єдиноборство, яке підходить дорослим, підліткам і дітям.",
  supportingText:
    "Попередній досвід, вік і фізична підготовка не є перешкодою для старту.",
  ctaLabel: "Записатися на тренування",
};

export const heroHighlights: HighlightItem[] = [
  {
    title: "2 локації",
    description:
      "Тренування проходять на вул. Проспект Миру, 19 та на вул. Вишиванка, 37.",
  },
  {
    title: "4 вікові групи",
    description:
      "Окремі напрями для дітей 4–7 років, 8–11 років, юніорів і дорослих.",
  },
  {
    title: "Турніри та збори",
    description:
      "Регулярна участь у всеукраїнських та міжнародних змаганнях і тренувальних зборах.",
  },
  {
    title: "Джиу-джитсу для ветеранів",
    description: "Реабілітація через джиу-джитсу для військових та ветеранів.",
  },
];

export const heroMeta = {
  eyebrow: "Реальна основа",
  description:
    "Перший екран уже спирається на реальний розклад, живе тренувальне відео та прямий шлях до першого контакту.",
};

export const aboutPillars: HighlightItem[] = [
  {
    title: "Дисципліна",
    description:
      "Сторінка показує академію як структуроване середовище з чіткими напрямами, а не як шумний бойовий шаблон.",
  },
  {
    title: "Реальна атмосфера",
    description:
      "Фото й відео походять зі справжнього тренувального процесу та підтримують стриманий кінематографічний тон.",
  },
  {
    title: "Прямий доступ",
    description:
      "Розклад, ціни, адреси й контакти вже доступні без додаткових кроків або прихованих сторінок.",
  },
];

export const aboutFeatureMedia: FeatureMediaPanel = {
  eyebrow: "Атмосфера залу",
  title: "Реальний простір тренувань",
  description:
    "Живі кадри із залу замінили абстрактну заглушку, але сама секційна структура залишилася незмінною.",
  imageSrc: "/media/gym/gym-01.jpg",
};

export const aboutCoachesTransitionImage: TransitionImageContent = {
  src: "/media/gym/about-coaches-transition.webp",
  alt: "Команда Avangard Jiu-Jitsu з медалями після змагань у спортивному залі",
  width: 1200,
  height: 900,
};

export const academyStatement: AcademyStatementContent = {
  paragraphs: [
    "Академія Avangard Jiu-Jitsu функціонує в Рівному з 2009 року.",
    "В нашій команді разом тренуються призери міжнародних та всеукраїнських чемпіонатів і новачки-аматори. Люди різного віку і професій.",
  ],
};

export const homepageLocationSection: LocationSectionContent = {
  title: "Де проходять тренування",
  mapButtonLabel: "Переглянути на карті",
  backgroundImageSrc: "/media/location/location-section-background.jpg",
  locations: [
    {
      id: "location-1",
      title: "Локація 1",
      addressLines: ["вул. Вишиванка, 37,", "Рівне, 33017"],
      mapHref:
        "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiwm6Gnxt-UAxUAAAAAHQAAAAAQBQ..i&pvq=Cg0vZy8xMXZ6ZDI1Y3JuIiAKGmF2YW5nYXJkIGppdSBqaXRzdSBhY2FkZW15EAIYAw&lqi=CiVhdmFuZ2FyZCBqaXUgaml0c3UgYWNhZGVteSDRgNGW0LLQvdC1SPTdisH5uoCACFo5EAAQARACEAMYABgBGAIYAxgEIiVhdmFuZ2FyZCBqaXUgaml0c3UgYWNhZGVteSDRgNGW0LLQvdC1kgELc3BvcnRzX2NsdWI&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=at&sa=X&ftid=0x472f130028f61709:0xee5c389c88290e28",
      mapEmbedSrc:
        "https://maps.google.com/maps?q=%D0%B2%D1%83%D0%BB.%20%D0%92%D0%B8%D1%88%D0%B8%D0%B2%D0%B0%D0%BD%D0%BA%D0%B0%2C%2037%2C%20%D0%A0%D1%96%D0%B2%D0%BD%D0%B5%2C%2033017&z=16&output=embed",
    },
    {
      id: "location-2",
      title: "Локація 2",
      addressLines: ["проспект Миру, 19,", "Рівне, 33000"],
      mapHref:
        "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiwm6Gnxt-UAxUAAAAAHQAAAAAQFQ..i&pvq=Cg0vZy8xMXprajRnZDVfIiAKGmF2YW5nYXJkIGppdSBqaXRzdSBhY2FkZW15EAIYAw&lqi=CiVhdmFuZ2FyZCBqaXUgaml0c3UgYWNhZGVteSDRgNGW0LLQvdC1SL_hnILGvoCACFo5EAAQARACEAMYABgBGAIYAxgEIiVhdmFuZ2FyZCBqaXUgaml0c3UgYWNhZGVteSDRgNGW0LLQvdC1kgELc3BvcnRzX2NsdWI&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=at&sa=X&ftid=0x472f6da0e7095e8b:0x6b351701ac76627a",
      mapEmbedSrc:
        "https://maps.google.com/maps?q=%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%9C%D0%B8%D1%80%D1%83%2C%2019%2C%20%D0%A0%D1%96%D0%B2%D0%BD%D0%B5%2C%2033000&z=16&output=embed",
    },
  ],
};
