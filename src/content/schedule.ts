import type {
  SchedulePreviewGroup,
  ScheduleSession,
  SectionIntro,
} from "@/types/content";

export const schedulePreviewContent = {
  title: "Вікові групи",
  ctaHref: "/schedule",
  ctaLabel: "Переглянути повний\nрозклад тренувань",
  backgroundImageSrc: "/media/gallery/groups-background.jpg",
};

export const schedulePreviewGroups: SchedulePreviewGroup[] = [
  {
    id: "kids-4-7",
    label: "Діти 4–7 років",
  },
  {
    id: "kids-8-11",
    label: "Діти 8–11 років",
  },
  {
    id: "juniors",
    label: "Юніори",
  },
  {
    id: "adults",
    label: "Дорослі",
  },
];

export const scheduleIntro: SectionIntro = {
  eyebrow: "Розклад",
  title:
    "Актуальний розклад уже показує реальні групи, час і дві локації академії без зайвого ускладнення.",
  description:
    "Секція зберігає той самий зрозумілий формат: група, дні, час, адреса й коротка примітка там, де години відрізняються всередині одного напряму.",
};

export const scheduleSessions: ScheduleSession[] = [
  {
    id: "kids-4-7",
    group: "4-7 років",
    audience: "Молодша дитяча група",
    days: ["Вт", "Чт", "Сб"],
    timeLabel: "17:30 / 10:30",
    locationLabel: "Проспект Миру, 19 / Вишиванка, 37",
    note: "Вівторок і четвер — 17:30, субота — 10:30.",
  },
  {
    id: "kids-8-11-prospect",
    group: "8-11 років",
    audience: "Основна група · Проспект Миру, 19",
    days: ["Пн", "Ср", "Пт", "Сб"],
    timeLabel: "16:00 / 16:30 / 12:00",
    locationLabel: "Проспект Миру, 19",
    note: "Понеділок і середа — 16:00, п'ятниця — 16:30, субота — 12:00.",
  },
  {
    id: "kids-8-11-vyshyvanka",
    group: "8-11 років",
    audience: "Підгрупи · Вишиванка, 37",
    days: ["Пн", "Ср", "Пт", "Вт", "Чт", "Сб"],
    timeLabel: "16:30 / 16:00 / 12:00",
    locationLabel: "Вишиванка, 37",
    note: "Підгрупа 1: Пн, Ср, Пт — 16:30. Підгрупа 2: Вт, Чт — 16:00, Сб — 12:00.",
  },
  {
    id: "juniors",
    group: "Юніори",
    audience: "Середня та старша юніорська група",
    days: ["Пн", "Ср", "Пт", "Сб"],
    timeLabel: "18:00 / 19:00 / 14:00",
    locationLabel: "Вишиванка, 37",
    note: "Понеділок і середа — 18:00, п'ятниця — 19:00, субота — 14:00.",
  },
  {
    id: "adults",
    group: "Дорослі",
    audience: "Доросла група",
    days: ["Вт", "Чт", "Пт", "Сб"],
    timeLabel: "19:30 / 19:00 / 14:00",
    locationLabel: "Вишиванка, 37",
    note: "Вівторок і четвер — 19:30, п'ятниця — 19:00, субота — 14:00.",
  },
];
