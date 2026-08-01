import type {
  ScheduleLocationSchedule,
  SchedulePageContent,
  SchedulePreviewGroup,
} from "@/types/content";

export const schedulePreviewContent = {
  title: "Вікові групи",
  ctaHref: "/schedule",
  ctaLabel: "Переглянути повний\nрозклад тренувань",
  backgroundImageSrc: "/media/gallery/groups-background.jpg",
};

export const schedulePreviewGroups: SchedulePreviewGroup[] = [
  { id: "kids-4-7", label: "Діти 4–7 років" },
  { id: "kids-8-11", label: "Діти 8–11 років" },
  { id: "juniors", label: "Юніори" },
  { id: "adults", label: "Дорослі" },
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
        entries: [
          { id: "pm19-mon-kids-8-11", time: "16:30", group: "Діти 8–11" },
          { id: "pm19-mon-veterans", time: "18:30", group: "Ветерани" },
        ],
      },
      {
        id: "tuesday",
        label: "Вівторок",
        entries: [
          { id: "pm19-tue-kids-8-11-morning", time: "09:15", group: "Діти 8–11" },
          { id: "pm19-tue-kids-8-11", time: "16:00", group: "Діти 8–11" },
          { id: "pm19-tue-kids-4-7", time: "17:30", group: "Діти 4–7" },
        ],
      },
      {
        id: "wednesday",
        label: "Середа",
        entries: [
          { id: "pm19-wed-kids-8-11", time: "16:30", group: "Діти 8–11" },
          { id: "pm19-wed-veterans", time: "18:30", group: "Ветерани" },
        ],
      },
      {
        id: "thursday",
        label: "Четвер",
        entries: [
          { id: "pm19-thu-kids-8-11-morning", time: "09:15", group: "Діти 8–11" },
          { id: "pm19-thu-kids-8-11", time: "16:00", group: "Діти 8–11" },
          { id: "pm19-thu-kids-4-7", time: "17:30", group: "Діти 4–7" },
        ],
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
          { id: "pm19-sat-veterans", time: "14:00", group: "Ветерани" },
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
          { id: "v37-tue-kids-8-11-morning", time: "09:15", group: "Діти 8–11" },
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
          { id: "v37-thu-kids-8-11-morning", time: "09:15", group: "Діти 8–11" },
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
