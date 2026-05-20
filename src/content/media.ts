import type { MediaAsset, SectionIntro } from "@/types/content";

export const mediaIntro: SectionIntro = {
  eyebrow: "Медіа",
  title:
    "Медіасекція показує, як реальні фото й короткі відео працюватимуть у стриманій редакційній подачі.",
  description:
    "Навіть тимчасові візуальні слоти вже передають правильний баланс між атмосферою, дисципліною та швидким переглядом на мобільних екранах.",
};

export const mediaAssets: MediaAsset[] = [
  {
    id: "mat-space",
    title: "Тренувальний простір",
    kind: "photo",
    summary:
      "Місце для фото залу, яке показує чистоту, організованість і характер простору без візуального перевантаження.",
    aspectRatio: "landscape",
    status: "planned",
    statusLabel: "Очікує фінальне фото",
  },
  {
    id: "team-moment",
    title: "Командний момент",
    kind: "photo",
    summary:
      "Фото команди або заняття, яке додає людський вимір і допомагає побачити атмосферу академії.",
    aspectRatio: "portrait",
    status: "planned",
    statusLabel: "Очікує фінальне фото",
  },
  {
    id: "short-video",
    title: "Коротке відео",
    kind: "video",
    summary:
      "Стриманий відеофрагмент для показу руху, ритму тренувань і відчуття живого процесу без агресивного монтажу.",
    aspectRatio: "wide",
    status: "selected",
    statusLabel: "Добрий кандидат для hero або gallery",
  },
];
