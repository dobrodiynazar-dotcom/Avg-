import type {
  AcademyInfo,
  ContactChannel,
  ContactPreview,
  FeatureMediaPanel,
  HeroBackgroundMedia,
  HeroPreview,
  HighlightItem,
  LocationSectionContent,
  SectionIntro,
  StatItem,
  VisualTile,
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
  description:
    "Avangard поєднує реальний тренувальний процес, чіткий розклад на двох локаціях і прямий контакт без перевантаження зайвим шумом.",
};

export const heroHighlights: HighlightItem[] = [
  {
    title: "2 локації",
    description:
      "Тренування проходять на Проспекті Миру, 19 та на Вишиванці, 37 залежно від групи.",
  },
  {
    title: "4 формати груп",
    description:
      "Окремі напрями для 4-7 років, 8-11 років, юніорів і дорослих із реальним розкладом.",
  },
  {
    title: "Прямий запис",
    description:
      "Telegram, Instagram, телефон та email уже підключені як реальні канали зв'язку.",
  },
];

export const heroMeta = {
  eyebrow: "Реальна основа",
  description:
    "Перший екран тепер спирається не на плейсхолдери, а на реальний розклад, реальні контакти та живий тренувальний візуал.",
};

export const heroStats: StatItem[] = [
  {
    value: "2",
    label: "локації",
    detail: "Проспект Миру, 19 та Вишиванка, 37 у Рівному.",
  },
  {
    value: "4",
    label: "групи",
    detail: "4-7 років, 8-11 років, юніори та дорослі.",
  },
  {
    value: "3",
    label: "ціни",
    detail: "Окремі варіанти для дорослих, дитячих/середніх і сімейного формату.",
  },
];

export const heroPreview: HeroPreview = {
  eyebrow: "Перший крок",
  title:
    "Перший контакт став практичним: побачити розклад, обрати свою групу й одразу написати в академію.",
  description:
    "Замість абстрактного прев'ю блок тепер підтримує реальні дані: контактні канали, локації й живу тренувальну атмосферу.",
  points: [
    "Реальний розклад уже інтегрований у домашню сторінку.",
    "Контакти ведуть у справжні канали академії.",
    "Відео й фото з залу підтримують преміальну кінематографічну подачу.",
  ],
  mediaLabel: "Короткий герой-ролик з реального тренувального процесу Avangard",
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
      "Фото й відео походять із справжнього тренувального процесу та підтримують стриманий кінематографічний тон.",
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

export const footerContent = {
  summary:
    "Avangard Jiu-Jitsu Academy у Рівному вже показує реальні контакти, актуальний розклад і базову логіку першого запису.",
};

export const contactSectionContent: {
  intro: SectionIntro;
  preview: ContactPreview;
} = {
  intro: {
    eyebrow: "Контакти",
    title:
      "Фінальний блок тепер веде не в прев'ю, а в реальні канали зв'язку та справжні локації академії.",
    description:
      "Тут можна швидко вибрати зручний спосіб звернення й одразу побачити, де проходять тренування.",
  },
  preview: {
    eyebrow: "Локації академії",
    title:
      "Avangard працює на двох адресах у Рівному, а конкретна локація залежить від вікової групи та формату занять.",
    description:
      "Основні заняття проходять на Вишиванці, 37, а частина дитячих груп також працює на Проспекті Миру, 19.",
    details: [
      "м. Рівне, вул. Вишиванка, 37 (4 поверх)",
      "м. Рівне, проспект Миру, 19",
      "Точну групу та час найшвидше уточнити через Telegram або телефон.",
    ],
    placeholderLabel: "Дві локації Avangard у Рівному",
  },
};

export const heroVisuals: VisualTile[] = [
  {
    id: "hero-gym",
    label: "Локація",
    title: "Простір залу",
    description:
      "Світло, мат і графіка залу дають правильну дисципліновану основу для першого враження.",
    aspectRatio: "portrait",
  },
  {
    id: "hero-motion",
    label: "Рух",
    title: "Ритм тренування",
    description:
      "Короткий герой-ролик працює як преміальний вступ до реального процесу на килимі.",
    aspectRatio: "square",
  },
  {
    id: "hero-contact",
    label: "Контакт",
    title: "Прямий запис",
    description:
      "Після першого перегляду одразу видно, куди писати й як швидко потрапити у свою групу.",
    aspectRatio: "portrait",
  },
];

export const homepageLocationSection: LocationSectionContent = {
  title: "Де проходять тренування",
  mapButtonLabel: "Переглянути на карті",
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
