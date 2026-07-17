import type { PagePlaceholder } from "@/types/content";

type PlaceholderRouteKey = "about" | "coaches" | "gallery" | "contact" | "faq";

export const pagePlaceholders: Record<PlaceholderRouteKey, PagePlaceholder> = {
  about: {
    key: "about",
    title: "Сторінка академії ще в роботі",
    eyebrow: "Тимчасовий маршрут",
    summary:
      "Домашня сторінка вже показує базову атмосферу, підхід і локацію академії. Повна окрема сторінка ще не зібрана.",
    status: "placeholder",
  },
  coaches: {
    key: "coaches",
    title: "Сторінка тренерів ще в роботі",
    eyebrow: "Тимчасовий маршрут",
    summary:
      "На головній сторінці вже є тренерський блок із реальними фото. Окремий маршрут чекатиме на підтверджені біографії та фінальні профілі.",
    status: "placeholder",
  },
  gallery: {
    key: "gallery",
    title: "Сторінка медіа ще в роботі",
    eyebrow: "Тимчасовий маршрут",
    summary:
      "Галерея на homepage вже інтегрована з реальними зображеннями. Повноцінний медіамаршрут ще не зібраний окремо.",
    status: "placeholder",
  },
  contact: {
    key: "contact",
    title: "Сторінка контактів ще в роботі",
    eyebrow: "Тимчасовий маршрут",
    summary:
      "Актуальні локації, карта та основні канали зв’язку вже доступні на головній сторінці. Окрема контактна сторінка ще не завершена.",
    status: "placeholder",
  },
  faq: {
    key: "faq",
    title: "Сторінка FAQ ще в роботі",
    eyebrow: "Тимчасовий маршрут",
    summary:
      "Секція FAQ вже працює на homepage. Окремий маршрут поки що лишається тимчасовою точкою в структурі сайту.",
    status: "placeholder",
  },
};
