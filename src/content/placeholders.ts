import type { PagePlaceholder, RouteKey } from "@/types/content";

export const pagePlaceholders: Record<RouteKey, PagePlaceholder> = {
  home: {
    key: "home",
    title: "Преміальна основа сайту",
    eyebrow: "Milestone 1-2",
    summary:
      "Підготовлено архітектуру, дизайн-систему, базові UI-примітиви та каркас маршрутів.",
    status: "foundation-ready",
  },
  about: {
    key: "about",
    title: "Сторінка академії",
    eyebrow: "Планується",
    summary: "Тут буде структурований блок про академію без фінального тексту на цьому етапі.",
    status: "planned",
  },
  coaches: {
    key: "coaches",
    title: "Сторінка тренерів",
    eyebrow: "Планується",
    summary: "Тут буде представлення тренерського складу після наступного етапу.",
    status: "planned",
  },
  schedule: {
    key: "schedule",
    title: "Сторінка розкладу",
    eyebrow: "Планується",
    summary: "Тут буде адаптивний розклад із контентних файлів.",
    status: "planned",
  },
  pricing: {
    key: "pricing",
    title: "Сторінка цін",
    eyebrow: "Планується",
    summary: "Тут буде блок абонементів і тарифів без фінального наповнення на цьому етапі.",
    status: "planned",
  },
  gallery: {
    key: "gallery",
    title: "Сторінка медіа",
    eyebrow: "Планується",
    summary: "Тут буде структура для фото та вибраного відео з оптимізацією для мобільних.",
    status: "planned",
  },
  contact: {
    key: "contact",
    title: "Сторінка контактів",
    eyebrow: "Планується",
    summary: "Тут будуть контакти, карта і прямі CTA після підстановки реальних даних.",
    status: "planned",
  },
  faq: {
    key: "faq",
    title: "Сторінка FAQ",
    eyebrow: "Планується",
    summary: "Тут буде структура для типових запитань і першого тренування.",
    status: "planned",
  },
};
