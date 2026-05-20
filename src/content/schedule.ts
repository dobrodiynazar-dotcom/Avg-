import type { ScheduleSession, SectionIntro } from "@/types/content";

export const scheduleIntro: SectionIntro = {
  eyebrow: "Розклад",
  title: "Розклад уже структурований під групи, дні та часові слоти.",
  description:
    "Секція готова до адаптивного відображення на мобільних екранах і не залежить від жорстко зашитого HTML.",
};

export const scheduleSessions: ScheduleSession[] = [
  {
    id: "group-1",
    group: "Група 01",
    audience: "Структура групи буде уточнена",
    days: ["Пн", "Ср", "Пт"],
    timeLabel: "00:00 - 00:00",
    locationLabel: "Адреса буде додана",
    note: "Примітка до слоту буде уточнена.",
  },
  {
    id: "group-2",
    group: "Група 02",
    audience: "Структура групи буде уточнена",
    days: ["Вт", "Чт"],
    timeLabel: "00:00 - 00:00",
    locationLabel: "Адреса буде додана",
  },
  {
    id: "group-3",
    group: "Група 03",
    audience: "Структура групи буде уточнена",
    days: ["Сб"],
    timeLabel: "00:00 - 00:00",
    locationLabel: "Адреса буде додана",
  },
];
