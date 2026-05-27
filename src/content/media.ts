import type { MediaAsset, SectionIntro } from "@/types/content";

export const mediaIntro: SectionIntro = {
  eyebrow: "Медіа",
  title:
    "Реальні кадри з тренувань уже підтримують кінематографічний ритм сторінки без зміни її структури.",
  description:
    "Добірка тримає потрібний баланс між атмосферою залу, технікою та людським масштабом — саме так, як і має працювати стримана преміальна подача.",
};

export const mediaPreviewNote =
  "Галерея читається як послідовна візуальна стрічка: головний кадр, технічний момент і завершальний динамічний фрагмент.";

export const mediaAssets: MediaAsset[] = [
  {
    id: "gallery-feature",
    title: "Контроль і тиск",
    kind: "photo",
    summary:
      "Головний кадр для галереї з чистою композицією, впізнаваним залом і хорошим балансом між технікою та атмосферою.",
    aspectRatio: "portrait",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/gallery-feature-01.jpg",
  },
  {
    id: "gallery-technique",
    title: "Техніка в роботі",
    kind: "photo",
    summary:
      "Ближчий момент для відчуття дисципліни, контролю й реального тренувального процесу.",
    aspectRatio: "portrait",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/gallery-02.jpg",
  },
  {
    id: "gallery-motion",
    title: "Рух і ритм",
    kind: "photo",
    summary:
      "Динамічний кадр, який підтримує кінематографічний тон без агресивної подачі.",
    aspectRatio: "portrait",
    status: "selected",
    statusLabel: "Реальне фото",
    imageSrc: "/media/gallery/gallery-03.jpg",
  },
];
