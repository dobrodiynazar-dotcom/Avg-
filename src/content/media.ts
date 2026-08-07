import type { MediaAsset, SectionIntro } from "@/types/content";

export const mediaIntro: SectionIntro = {
  eyebrow: "Наша академія",
  title:
    "Ми виховуємо не лише спортсменів — ми виховуємо характер, дисципліну та повагу.",
  description: "",
};

export const mediaAssets: MediaAsset[] = [
  {
    id: "academy-training",
    title: "Тренування в академії",
    kind: "photo",
    summary: "Живий тренувальний процес Avangard Jiu-Jitsu.",
    aspectRatio: "landscape",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/academy-collage-training.webp",
    objectPosition: "center 56%",
  },
  {
    id: "academy-throw",
    title: "Техніка в роботі",
    kind: "photo",
    summary: "Тренувальний момент Avangard Jiu-Jitsu.",
    aspectRatio: "portrait",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/academy-collage-throw.webp",
    objectPosition: "center 42%",
  },
  {
    id: "academy-competition",
    title: "Очікування перед сутичкою",
    kind: "photo",
    summary: "Спортсмен Avangard Jiu-Jitsu перед виходом на татамі.",
    aspectRatio: "landscape",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/academy-collage-competition.webp",
    objectPosition: "center 44%",
  },
  {
    id: "academy-team",
    title: "Команда на змаганнях",
    kind: "photo",
    summary: "Дитяча команда Avangard Jiu-Jitsu після виступів.",
    aspectRatio: "wide",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/academy-collage-team.webp",
    objectPosition: "center center",
  },
];
