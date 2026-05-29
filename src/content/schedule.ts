import type {
  ScheduleLocationSchedule,
  SchedulePageContent,
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

export const schedulePageContent: SchedulePageContent = {
  title: "Розклад тренувань",
  backgroundImageSrc: "/media/schedule/schedule-background.jpg",
  defaultLocationId: "prospekt-myru-19",
};

export const scheduleLocationSchedules: ScheduleLocationSchedule[] = [
  {
    id: "prospekt-myru-19",
    label: "Проспект Миру 19",
    days: [
      {
        id: "monday",
        label: "Понеділок",
        entries: [{ id: "pm19-mon-kids-8-11", time: "16:00", group: "Діти 8–11" }],
      },
      {
        id: "tuesday",
        label: "Вівторок",
        entries: [{ id: "pm19-tue-kids-4-7", time: "17:30", group: "Діти 4–7" }],
      },
      {
        id: "wednesday",
        label: "Середа",
        entries: [{ id: "pm19-wed-kids-8-11", time: "16:00", group: "Діти 8–11" }],
      },
      {
        id: "thursday",
        label: "Четвер",
        entries: [{ id: "pm19-thu-kids-4-7", time: "17:30", group: "Діти 4–7" }],
      },
      {
        id: "friday",
        label: "Пʼятниця",
        entries: [{ id: "pm19-fri-kids-8-11", time: "16:30", group: "Діти 8–11" }],
      },
      {
        id: "saturday",
        label: "Субота",
        entries: [
          { id: "pm19-sat-kids-4-7", time: "10:30", group: "Діти 4–7" },
          { id: "pm19-sat-kids-8-11", time: "12:00", group: "Діти 8–11" },
        ],
      },
    ],
  },
  {
    id: "vyshyvanka-37",
    label: "Вишиванка 37",
    days: [
      {
        id: "monday",
        label: "Понеділок",
        entries: [
          { id: "v37-mon-kids-8-11", time: "16:30", group: "Діти 8–11" },
          { id: "v37-mon-juniors", time: "18:00", group: "Юніори" },
        ],
      },
      {
        id: "tuesday",
        label: "Вівторок",
        entries: [
          { id: "v37-tue-kids-8-11", time: "16:00", group: "Діти 8–11" },
          { id: "v37-tue-kids-4-7", time: "17:30", group: "Діти 4–7" },
          { id: "v37-tue-adults", time: "19:30", group: "Дорослі" },
        ],
      },
      {
        id: "wednesday",
        label: "Середа",
        entries: [
          { id: "v37-wed-kids-8-11", time: "16:30", group: "Діти 8–11" },
          { id: "v37-wed-juniors", time: "18:00", group: "Юніори" },
        ],
      },
      {
        id: "thursday",
        label: "Четвер",
        entries: [
          { id: "v37-thu-kids-8-11", time: "16:00", group: "Діти 8–11" },
          { id: "v37-thu-kids-4-7", time: "17:30", group: "Діти 4–7" },
          { id: "v37-thu-adults", time: "19:30", group: "Дорослі" },
        ],
      },
      {
        id: "friday",
        label: "Пʼятниця",
        entries: [
          { id: "v37-fri-kids-8-11", time: "16:30", group: "Діти 8–11" },
          { id: "v37-fri-juniors", time: "19:00", group: "Юніори" },
          { id: "v37-fri-adults", time: "19:00", group: "Дорослі" },
        ],
      },
      {
        id: "saturday",
        label: "Субота",
        entries: [
          { id: "v37-sat-kids-4-7", time: "10:30", group: "Діти 4–7" },
          { id: "v37-sat-kids-8-11", time: "12:00", group: "Діти 8–11" },
          { id: "v37-sat-juniors", time: "14:00", group: "Юніори" },
          { id: "v37-sat-adults", time: "14:00", group: "Дорослі" },
        ],
      },
    ],
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
    group: "4–7 років",
    audience: "Молодша дитяча група",
    days: ["Вт", "Чт", "Сб"],
    timeLabel: "17:30 / 10:30",
    locationLabel: "Проспект Миру 19 / Вишиванка 37",
    note: "Вівторок і четвер — 17:30, субота — 10:30.",
  },
  {
    id: "kids-8-11-prospect",
    group: "8–11 років",
    audience: "Основна група · Проспект Миру 19",
    days: ["Пн", "Ср", "Пт", "Сб"],
    timeLabel: "16:00 / 16:30 / 12:00",
    locationLabel: "Проспект Миру 19",
    note: "Понеділок і середа — 16:00, пʼятниця — 16:30, субота — 12:00.",
  },
  {
    id: "kids-8-11-vyshyvanka",
    group: "8–11 років",
    audience: "Підгрупи · Вишиванка 37",
    days: ["Пн", "Ср", "Пт", "Вт", "Чт", "Сб"],
    timeLabel: "16:30 / 16:00 / 12:00",
    locationLabel: "Вишиванка 37",
    note: "Підгрупа 1: Пн, Ср, Пт — 16:30. Підгрупа 2: Вт, Чт — 16:00, Сб — 12:00.",
  },
  {
    id: "juniors",
    group: "Юніори",
    audience: "Середня та старша юніорська група",
    days: ["Пн", "Ср", "Пт", "Сб"],
    timeLabel: "18:00 / 19:00 / 14:00",
    locationLabel: "Вишиванка 37",
    note: "Понеділок і середа — 18:00, пʼятниця — 19:00, субота — 14:00.",
  },
  {
    id: "adults",
    group: "Дорослі",
    audience: "Доросла група",
    days: ["Вт", "Чт", "Пт", "Сб"],
    timeLabel: "19:30 / 19:00 / 14:00",
    locationLabel: "Вишиванка 37",
    note: "Вівторок і четвер — 19:30, пʼятниця — 19:00, субота — 14:00.",
  },
];
