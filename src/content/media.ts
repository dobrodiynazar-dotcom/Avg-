import type { MediaAsset, SectionIntro } from "@/types/content";

export const mediaIntro: SectionIntro = {
  eyebrow: "Медіа",
  title: "Секція медіа готова до фото та вибраного відео без зайвого шуму.",
  description:
    "Карти підтримують різні формати кадру і дозволяють спокійно замінити тимчасові елементи на реальні активи пізніше.",
};

export const mediaAssets: MediaAsset[] = [
  {
    id: "media-1",
    title: "Тренувальний простір",
    kind: "photo",
    summary: "Місце для професійного фото залу або атмосфери тренування.",
    aspectRatio: "landscape",
    status: "planned",
  },
  {
    id: "media-2",
    title: "Командний момент",
    kind: "photo",
    summary: "Місце для фото команди, заняття або події.",
    aspectRatio: "portrait",
    status: "planned",
  },
  {
    id: "media-3",
    title: "Вибране відео",
    kind: "video",
    summary: "Місце для короткого, оптимізованого відеоматеріалу.",
    aspectRatio: "wide",
    status: "selected",
  },
];
