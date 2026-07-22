import type { MediaAsset, SectionIntro } from "@/types/content";

export const mediaIntro: SectionIntro = {
  eyebrow: "",
  title:
    "Тут закінчується зона комфорту й починається справжній розвиток. Ми виховуємо не лише спортсменів — ми виховуємо характер, дисципліну та повагу.",
  description: "",
};

export const mediaAssets: MediaAsset[] = [
  {
    id: "gallery-feature",
    title: "Контроль і тиск",
    kind: "photo",
    summary: "Тренувальний момент Avangard Jiu-Jitsu.",
    aspectRatio: "portrait",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/gallery-feature-01.jpg",
  },
  {
    id: "gallery-technique",
    title: "Техніка в роботі",
    kind: "photo",
    summary: "Тренувальний момент Avangard Jiu-Jitsu.",
    aspectRatio: "portrait",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/gallery-02.jpg",
  },
  {
    id: "gallery-motion",
    title: "Рух і ритм",
    kind: "photo",
    summary: "Тренувальний момент Avangard Jiu-Jitsu.",
    aspectRatio: "portrait",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/gallery-03.jpg",
  },
];
