import type { MediaAsset, SectionIntro } from "@/types/content";

export const mediaIntro: SectionIntro = {
  eyebrow: "Атмосфера залу",
  title:
    "Тут закінчується зона комфорту й починається справжній розвиток. Ми виховуємо не лише спортсменів — ми виховуємо характер, дисципліну та повагу.",
  description: "",
};

export const mediaAssets: MediaAsset[] = [
  {
    id: "gallery-feature",
    title: "Тренування в залі",
    kind: "photo",
    summary: "Тренувальний момент Avangard Jiu-Jitsu.",
    aspectRatio: "wide",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/avangard-atmosphere-logo.webp",
    objectPosition: "center center",
  },
  {
    id: "gallery-technique",
    title: "Боротьба в роботі",
    kind: "photo",
    summary: "Тренувальний момент Avangard Jiu-Jitsu.",
    aspectRatio: "wide",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/avangard-atmosphere-grappling.jpg",
    objectPosition: "center center",
  },
];
