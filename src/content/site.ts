import type {
  AcademyInfo,
  ContactChannel,
  ContactPreview,
  HeroPreview,
  HighlightItem,
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
    "Офіційний сайт Avangard Jiu-Jitsu Academy. Попередня версія вже показує основний формат, контакти й структуру майбутнього повного сайту.",
  locationLabel: "Рівне, Україна",
  heroLabel: "Бразильське джиу-джитсу",
};

export const contactChannels: ContactChannel[] = [
  {
    key: "telegram",
    label: "Telegram",
    href: "https://t.me/avangard_bjj_preview",
    value: "@avangard_bjj_preview",
    ctaLabel: "Написати в Telegram",
    description: "Найшвидший канал для першого запиту, уточнення графіка та старту.",
    variant: "primary",
    external: true,
    availability: "Тимчасовий контакт для превʼю. Перед запуском буде оновлений.",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/avangard.bjj.preview",
    value: "@avangard.bjj.preview",
    ctaLabel: "Переглянути Instagram",
    description: "Актуальні анонси, короткі фрагменти тренувань та атмосфера залу.",
    variant: "secondary",
    external: true,
    availability: "Тимчасовий контакт для превʼю. Перед запуском буде оновлений.",
  },
  {
    key: "phone",
    label: "Телефон",
    href: "tel:+380000000000",
    value: "+38 (000) 000 00 00",
    ctaLabel: "Подзвонити",
    description: "Контакт для дзвінка, швидкого уточнення формату занять і деталей старту.",
    variant: "tertiary",
    availability: "Номер тимчасовий для превʼю. Остаточний контакт буде додано перед запуском.",
  },
  {
    key: "email",
    label: "Email",
    href: "mailto:preview@avangard.example",
    value: "preview@avangard.example",
    ctaLabel: "Написати на email",
    description:
      "Резервний канал для детальніших питань, організаційних тем і партнерських звернень.",
    variant: "tertiary",
    availability: "Тимчасовий контакт для превʼю. Перед публічним запуском буде оновлений.",
  },
];

export const heroContent = {
  title:
    "Бразильське джиу-джитсу в Рівному для дорослих, підлітків і тих, хто хоче почати з правильної основи.",
  description:
    "Avangard подає тренування як спокійний, дисциплінований процес: зрозумілі напрями, зручний перший контакт і стримана подача без агресивного спортивного шуму.",
};

export const heroHighlights: HighlightItem[] = [
  {
    title: "Структурований старт",
    description:
      "Сайт одразу пояснює, кому підходять заняття, як виглядає перший крок і де шукати контакт.",
  },
  {
    title: "Мобільний пріоритет",
    description:
      "Головні дії залишаються доступними на телефоні без перевантаження екрана зайвими деталями.",
  },
  {
    title: "Контент без переписування UI",
    description:
      "Тимчасові тексти, контакти та візуальні слоти можна оновлювати окремо, не змінюючи логіку сторінки.",
  },
];

export const heroStats: StatItem[] = [
  {
    value: "3",
    label: "сценарії входу",
    detail:
      "для новачків, підлітків і тих, хто повертається до системних тренувань",
  },
  {
    value: "1",
    label: "основний CTA",
    detail:
      "перший контакт залишається очевидним від героя до фінального блоку",
  },
  {
    value: "100%",
    label: "контентна замінність",
    detail:
      "контакти, ціни, тексти й медіа легко оновлюються перед публічним запуском",
  },
];

export const heroPreview: HeroPreview = {
  eyebrow: "Перший візит",
  title:
    "Перший контакт має бути простим: зрозуміти формат, поставити запитання і спокійно прийти на тренування.",
  description:
    "Поки фінальні матеріали ще готуються, цей блок показує місце для головного візуалу та коротких аргументів довіри, які допомагають не губитися в першому кроці.",
  points: [
    "Стримана подача без шаблонної MMA-естетики.",
    "Чіткий ритм між інформацією, CTA та візуальним блоком.",
    "Структура готова до швидкої заміни тимчасових даних на реальні.",
  ],
  mediaLabel: "Простір для головного фото або короткого відео академії",
};

export const aboutPillars: HighlightItem[] = [
  {
    title: "Системність",
    description:
      "Подача підкреслює дисципліну, послідовність та зрозумілий навчальний процес замість шумного маркетингового тиску.",
  },
  {
    title: "Спокійна довіра",
    description:
      "Візуальна мова залишається стриманою: темні поверхні, тонкі межі, акцент лише там, де він допомагає руху по сторінці.",
  },
  {
    title: "Готовність до заміни",
    description:
      "Попередні тексти, фото, ціни та контакти можна спокійно оновити, коли фінальні дані будуть готові.",
  },
];

export const footerContent = {
  summary:
    "Попередня версія сайту вже допомагає зрозуміти формат академії, напрями та спосіб першого контакту. Фінальні медіа й підтверджені дані додаються перед запуском.",
};

export const contactSectionContent: {
  intro: SectionIntro;
  preview: ContactPreview;
} = {
  intro: {
    eyebrow: "Контакти",
    title:
      "Фінальний блок завершує сторінку спокійно і практично: з прямими каналами звʼязку та місцем під карту.",
    description:
      "Тут легко знайти канал для першого звернення, зрозуміти, де проходитимуть заняття, і без зайвого шуму перейти до наступного кроку.",
  },
  preview: {
    eyebrow: "Локація та наступний крок",
    title:
      "Тут зʼявиться реальна адреса, карта та короткий сценарій того, що відбувається після першого повідомлення.",
    description:
      "Блок уже показує логіку майбутньої карти й коротких пояснень, які допомагають підготуватися до першого візиту.",
    details: [
      "Після першого запиту можна швидко уточнити групу, формат і час.",
      "Адреса, карта та фінальні контакти будуть додані перед публічним запуском.",
      "Уся контактна інформація подається коротко, щоб не перевантажувати мобільний екран.",
    ],
    placeholderLabel: "Google Maps preview area",
  },
};

export const heroVisuals: VisualTile[] = [
  {
    id: "hero-mat",
    label: "Mat space",
    title: "РџСЂРѕСЃС‚С–СЂ Р·Р°Р»Сѓ",
    description: "РњС–СЃС†Рµ РґР»СЏ РіРѕР»РѕРІРЅРѕРіРѕ С„РѕС‚Рѕ Р· РєРёР»РёРјРѕРј, СЃРІС–С‚Р»РѕРј С– С‡РёС‚РєРѕСЋ РіРµРѕРјРµС‚СЂС–С”СЋ.",
    aspectRatio: "portrait",
  },
  {
    id: "hero-class",
    label: "Class rhythm",
    title: "Р РёС‚Рј С‚СЂРµРЅСѓРІР°РЅРЅСЏ",
    description: "Р—Р°РјС–РЅРЅРёР№ РІС–Р·СѓР°Р» РґР»СЏ РіСЂСѓРїРѕРІРѕРіРѕ РјРѕРјРµРЅС‚Сѓ Р±РµР· РїРµСЂРµРІР°РЅС‚Р°Р¶РµРЅРЅСЏ chrome.",
    aspectRatio: "square",
  },
  {
    id: "hero-detail",
    label: "Discipline",
    title: "Р”РµС‚Р°Р»СЊ С‚Р° С„РѕРєСѓСЃ",
    description: "РљРѕСЂРѕС‚РєРёР№ РєР°РґСЂ РґР»СЏ СЂСѓРє, РїРѕСЏСЃР° Р°Р±Рѕ С„СЂР°РіРјРµРЅС‚Р° С‚РµС…РЅС–РєРё.",
    aspectRatio: "portrait",
  },
  {
    id: "hero-team",
    label: "Community",
    title: "РљРѕРјР°РЅРґРЅРёР№ РЅР°СЃС‚СЂС–Р№",
    description: "Р’С–Р·СѓР°Р» РґР»СЏ Р°С‚РјРѕСЃС„РµСЂРё, РїС–РґС‚СЂРёРјРєРё С‚Р° Р»СЋРґСЃСЊРєРѕРіРѕ РјР°СЃС€С‚Р°Р±Сѓ.",
    aspectRatio: "landscape",
    tone: "dark",
  },
];
