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

// Location and weekday labels define the approved layout; training entries live in Payload.
export const scheduleLocationSchedules: ScheduleLocationSchedule[] = [
  {
    id: "prospekt-myru-19",
    label: "Проспект Миру 19",
    days: [
      {
        id: "monday",
        label: "Понеділок",
      },
      {
        id: "tuesday",
        label: "Вівторок",
      },
      {
        id: "wednesday",
        label: "Середа",
      },
      {
        id: "thursday",
        label: "Четвер",
      },
      {
        id: "friday",
        label: "Пʼятниця",
      },
      {
        id: "saturday",
        label: "Субота",
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
      },
      {
        id: "tuesday",
        label: "Вівторок",
      },
      {
        id: "wednesday",
        label: "Середа",
      },
      {
        id: "thursday",
        label: "Четвер",
      },
      {
        id: "friday",
        label: "Пʼятниця",
      },
      {
        id: "saturday",
        label: "Субота",
      },
    ],
  },
];
