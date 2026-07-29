import type { CoachProfile, SectionIntro } from "@/types/content";

export const coachesIntro: SectionIntro = {
  eyebrow: "Тренерський склад",
  title: "Ваш розвиток супроводжують тренери з багаторічним досвідом",
  description: "",
};

export const coaches: CoachProfile[] = [
  {
    id: "olena-lisnichuk",
    name: "Олена Ліснічук",
    role: "Засновниця AVANGARD JIU JITSU",
    rank: "Чорний пояс",
    summary: "Тренер дитячих, підліткових і дорослих груп",
    supportingInfo: ["Тренер дитячих, підліткових і дорослих груп", "У джиу-джитсу з 2009 року"],
    achievements: [],
    focusAreas: [],
    imageLabel: "",
    imageSrc: "/media/coaches/olena-lisnichuk.jpg",
    imageAlt: "Олена Ліснічук, тренерка Avangard Jiu-Jitsu",
    imageObjectPosition: "center 28%",
  },
  {
    id: "andrii-lisnichuk",
    name: "Андрій Ліснічук",
    role: "Співзасновник AVANGARD JIU JITSU",
    rank: "Коричневий пояс",
    summary: "Тренер дорослих та ветеранів",
    supportingInfo: ["Тренер дорослих та ветеранів", "У джиу-джитсу з 2012 року"],
    achievements: [],
    focusAreas: [],
    imageLabel: "",
    imageSrc: "/media/coaches/andrii-lisnichuk.jpg",
    imageAlt: "Андрій Ліснічук, тренер Avangard Jiu-Jitsu",
    imageObjectPosition: "center 24%",
  },
  {
    id: "volodymyr-tkachuk",
    name: "Володимир Ткачук",
    role: "Тренер дитячих і підліткових груп",
    rank: "Пурпурний пояс",
    summary: "У джиу-джитсу з 2019 року",
    supportingInfo: ["У джиу-джитсу з 2019 року"],
    achievements: [],
    focusAreas: [],
    imageLabel: "",
    imageSrc: "/media/coaches/volodymyr-tkachuk.jpg",
    imageAlt: "Володимир Ткачук, тренер Avangard Jiu-Jitsu",
    imageObjectPosition: "center 24%",
  },
];
