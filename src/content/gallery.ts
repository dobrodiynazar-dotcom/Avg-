export type MediaCategoryKey = "competitions" | "training" | "veterans";

export type MediaGalleryImage = {
  id: string;
  src: string;
  alt: string;
  objectPosition?: string;
};

export type MediaCategory = {
  key: MediaCategoryKey;
  title: string;
  eyebrow: string;
  heroImage?: MediaGalleryImage;
  gallery: MediaGalleryImage[];
};

const competitionsBasePath = "/media/gallery/competitions";
const trainingBasePath = "/media/gallery/training";
const veteransBasePath = "/media/gallery/veterans";

export const mediaPageCategories: MediaCategory[] = [
  {
    key: "competitions",
    title: "Академія Avangard Jiu-Jitsu на змаганнях",
    eyebrow: "Avangard Jiu-Jitsu",
    heroImage: {
      id: "competitions-team-hero",
      src: `${competitionsBasePath}/IMG_2809.jpg`,
      alt: "Команда Avangard Jiu-Jitsu на змаганнях",
      objectPosition: "center 42%",
    },
    gallery: [
      {
        id: "competition-groundwork",
        src: `${competitionsBasePath}/53295772367_c1c4c58112_k.jpg`,
        alt: "Спортсмен Avangard у боротьбі на татамі",
        objectPosition: "center 48%",
      },
      {
        id: "competition-ukraine-flag",
        src: `${competitionsBasePath}/IMG_1181.JPG`,
        alt: "Спортсмени Avangard із прапором України після змагань",
        objectPosition: "center 42%",
      },
      {
        id: "competition-kids-match",
        src: `${competitionsBasePath}/53296696106_f841cee07d_k.jpg`,
        alt: "Дитячий поєдинок Avangard Jiu-Jitsu",
        objectPosition: "center 48%",
      },
      {
        id: "competition-award-moment",
        src: `${competitionsBasePath}/IMG_2730.JPG`,
        alt: "Юна спортсменка Avangard після нагородження",
        objectPosition: "center 42%",
      },
      {
        id: "competition-coach-mat",
        src: `${competitionsBasePath}/photo_2023-09-26_18-18-40.jpg`,
        alt: "Тренерка поруч із татамі під час змагань",
        objectPosition: "center 45%",
      },
      {
        id: "competition-kids-medals",
        src: `${competitionsBasePath}/photo_2026-08-06_17-06-53.jpg`,
        alt: "Юні спортсмени Avangard із медалями",
        objectPosition: "center 42%",
      },
      {
        id: "competition-adults-medals",
        src: `${competitionsBasePath}/IMG_3368.JPG`,
        alt: "Спортсмени Avangard із медалями на татамі",
        objectPosition: "center 48%",
      },
      {
        id: "competition-referee-win",
        src: `${competitionsBasePath}/53215040919_0bd70fb65e_c.jpg`,
        alt: "Суддя піднімає руку юному спортсмену після перемоги",
        objectPosition: "center 48%",
      },
      {
        id: "competition-lineup",
        src: `${competitionsBasePath}/TYM_2128.jpg`,
        alt: "Судді та спортсмени на татамі під час змагань",
        objectPosition: "center 50%",
      },
    ],
  },
  {
    key: "training",
    title: "Наші тренування",
    eyebrow: "Avangard Jiu-Jitsu",
    heroImage: {
      id: "training-grip-hero",
      src: `${trainingBasePath}/photo_2026-05-22_10-32-07.jpg`,
      alt: "Руки спортсменів під час тренування",
      objectPosition: "center 48%",
    },
    gallery: [
      {
        id: "training-open-mat",
        src: `${trainingBasePath}/IMG_5772.jpg`,
        alt: "Групове тренування Avangard на татамі",
        objectPosition: "center 54%",
      },
      {
        id: "training-logo-drill",
        src: `${trainingBasePath}/photo_2026-05-22_10-31-58.jpg`,
        alt: "Парна робота на фоні логотипа Avangard Jiu-Jitsu",
        objectPosition: "center 46%",
      },
      {
        id: "training-kids-portrait",
        src: `${trainingBasePath}/photo_2026-08-06_17-06-54.jpg`,
        alt: "Юні спортсмени Avangard після тренування",
        objectPosition: "center 44%",
      },
      {
        id: "training-standup-drill",
        src: `${trainingBasePath}/photo_2021-11-06_17-.jpg.webp`,
        alt: "Відпрацювання проходу в ноги на тренуванні",
        objectPosition: "center 48%",
      },
      {
        id: "training-adults-smile",
        src: `${trainingBasePath}/photo_2026-08-06_17-19-42.jpg`,
        alt: "Дорослі спортсмени Avangard після тренування",
        objectPosition: "center 45%",
      },
      {
        id: "training-blue-gi-roll",
        src: `${trainingBasePath}/photo_2026-07-26_12-30-41.jpg`,
        alt: "Боротьба в партері під час тренування",
        objectPosition: "center 48%",
      },
      {
        id: "training-kids-hug",
        src: `${trainingBasePath}/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-08-11%20135641.png`,
        alt: "Діти Avangard у кімоно після тренування",
        objectPosition: "center 45%",
      },
    ],
  },
  {
    key: "veterans",
    title: "Ветерани",
    eyebrow: "Avangard Jiu-Jitsu",
    heroImage: {
      id: "veterans-hero",
      src: `${veteransBasePath}/IMG_1349.JPG`,
      alt: "Ветерани Avangard на турнірі Ukrainian Cup",
      objectPosition: "center 50%",
    },
    gallery: [
      {
        id: "veterans-action",
        src: `${veteransBasePath}/IMG_1456.JPG`,
        alt: "Ветеран Avangard готується до проходу в ноги",
        objectPosition: "center center",
      },
      {
        id: "veterans-handshake",
        src: `${veteransBasePath}/IMG_4299.JPG`,
        alt: "Ветеран Avangard вітає суперника на татамі",
        objectPosition: "center 48%",
      },
      {
        id: "veterans-seated",
        src: `${veteransBasePath}/IMG_1452.JPG`,
        alt: "Спортсмен Avangard відпочиває після поєдинку",
        objectPosition: "center 52%",
      },
      {
        id: "veterans-stance",
        src: `${veteransBasePath}/IMG_8940.JPG`,
        alt: "Ветерани Avangard після поєдинку на татамі",
        objectPosition: "center 52%",
      },
      {
        id: "veterans-podium",
        src: `${veteransBasePath}/IMG_9102.JPG`,
        alt: "Ветерани Avangard на п'єдесталі після нагородження",
        objectPosition: "center 48%",
      },
      {
        id: "veterans-victory-walk",
        src: `${veteransBasePath}/IMG_1454.JPG`,
        alt: "Суддя піднімає руку ветерану Avangard після перемоги",
        objectPosition: "center 48%",
      },
      {
        id: "veterans-back-view",
        src: `${veteransBasePath}/IMG_1458.JPG`,
        alt: "Ветеран Avangard виходить на татамі",
        objectPosition: "center 48%",
      },
    ],
  },
];
