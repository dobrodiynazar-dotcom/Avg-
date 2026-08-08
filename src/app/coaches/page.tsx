import { buildMetadata } from "@/lib/seo/metadata";
import { CoachesPageSection } from "@/components/sections/CoachesPageSection";
import { coaches, coachesPageBackground, coachesPageIntro } from "@/content/coaches";

export const metadata = buildMetadata({
  title: "Тренери",
  path: "/coaches",
});

export default function CoachesPage() {
  const pageCoaches = coaches.map((coach) =>
    coach.id === "andrii-lisnichuk"
      ? {
          ...coach,
          imageSrc: "/media/coaches/IMG_1582.JPG",
          imageObjectPosition: "center 34%",
          profileImageSrc: "/media/coaches/IMG_1582.JPG",
          profileImageObjectPosition: "center 32%",
        }
      : coach,
  );

  return (
    <CoachesPageSection
      background={coachesPageBackground}
      coaches={pageCoaches}
      intro={coachesPageIntro}
    />
  );
}
