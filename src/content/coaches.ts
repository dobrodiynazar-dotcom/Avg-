import type { CoachProfile, SectionIntro } from "@/types/content";

export const coachesIntro: SectionIntro = {
  eyebrow: "Тренерський склад",
  title:
    "Ваш розвиток супроводжують тренери з багаторічним досвідом, які поєднують професіоналізм, дисципліну та індивідуальний підхід.",
  description: "",
};

export const coaches: CoachProfile[] = [
  {
    id: "olena-lisnichuk",
    name: "Олена Ліснічук",
    role: "Засновниця AVANGARD JIU JITSU",
    rank: "Чорний пояс",
    summary: "Тренер дитячих, підліткових і дорослих груп",
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
    role: "У джиу-джитсу з 2012 року",
    rank: "Коричневий пояс з джиу-джитсу",
    summary: "Співзасновник AVANGARD JIU JITSU",
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
    role: "У джиу-джитсу з 2019 року",
    rank: "Пурпурний пояс з джиу-джитсу",
    summary: "",
    achievements: [],
    focusAreas: [],
    imageLabel: "",
    imageSrc: "/media/coaches/volodymyr-tkachuk.jpg",
    imageAlt: "Володимир Ткачук, тренер Avangard Jiu-Jitsu",
    imageObjectPosition: "center 24%",
  },
];
