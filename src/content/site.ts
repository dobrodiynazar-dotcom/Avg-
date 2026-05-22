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
    description:
      "Найшвидший канал для першого запиту, уточнення графіка та старту.",
    variant: "primary",
    external: true,
    availability:
      "Тимчасовий контакт для прев'ю. Перед запуском буде оновлений.",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/avangard.bjj.preview",
    value: "@avangard.bjj.preview",
    ctaLabel: "Переглянути Instagram",
    description:
      "Актуальні анонси, короткі фрагменти тренувань та атмосфера залу.",
    variant: "secondary",
    external: true,
    availability:
      "Тимчасовий контакт для прев'ю. Перед запуском буде оновлений.",
  },
  {
    key: "phone",
    label: "Телефон",
    href: "tel:+380000000000",
    value: "+38 (000) 000 00 00",
    ctaLabel: "Подзвонити",
    description:
      "Контакт для дзвінка, швидкого уточнення формату занять і деталей старту.",
    variant: "tertiary",
    availability:
      "Номер тимчасовий для прев'ю. Остаточний контакт буде додано перед запуском.",
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
    availability:
      "Тимчасовий контакт для прев'ю. Перед публічним запуском буде оновлений.",
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

export const heroMeta = {
  eyebrow: "Редакційна примітка",
  description:
    "Початковий екран працює як один головний кадр із чітким ритмом між поясненням, CTA та візуальною підтримкою.",
};

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
      "Фінальний блок завершує сторінку спокійно і практично: з прямими каналами зв'язку та місцем під карту.",
    description:
      "Тут легко знайти канал для першого звернення, зрозуміти, де проходитимуть заняття, і без зайвого шуму перейти до наступного кроку.",
  },
  preview: {
    eyebrow: "Локація та наступний крок",
    title:
      "Тут з'явиться реальна адреса, карта та короткий сценарій того, що відбувається після першого повідомлення.",
    description:
      "Блок уже показує логіку майбутньої карти й коротких пояснень, які допомагають підготуватися до першого візиту.",
    details: [
      "Після першого запиту можна швидко уточнити групу, формат і час.",
      "Адреса, карта та фінальні контакти будуть додані перед публічним запуском.",
      "Уся контактна інформація подається коротко, щоб не перевантажувати мобільний екран.",
    ],
    placeholderLabel: "Зона прев'ю для карти Google Maps",
  },
};

export const heroVisuals: VisualTile[] = [
  {
    id: "hero-mat",
    label: "Простір залу",
    title: "Простір залу",
    description:
      "Місце для головного фото з килимом, світлом і чіткою геометрією.",
    aspectRatio: "portrait",
  },
  {
    id: "hero-class",
    label: "Ритм занять",
    title: "Ритм тренування",
    description:
      "Замінний візуал для групового моменту без перевантаження зайвими деталями.",
    aspectRatio: "square",
  },
  {
    id: "hero-detail",
    label: "Дисципліна",
    title: "Деталь та фокус",
    description:
      "Короткий кадр для рук, пояса або фрагмента техніки.",
    aspectRatio: "portrait",
  },
  {
    id: "hero-team",
    label: "Спільнота",
    title: "Командний настрій",
    description:
      "Візуал для атмосфери, підтримки та людського масштабу.",
    aspectRatio: "landscape",
    tone: "dark",
  },
];
