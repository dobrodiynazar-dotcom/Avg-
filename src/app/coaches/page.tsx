import { buildMetadata } from "@/lib/seo/metadata";
import { CoachesPageSection } from "@/components/sections/CoachesPageSection";
import { coaches, coachesPageBackground, coachesPageIntro } from "@/content/coaches";

export const metadata = buildMetadata({
  title: "Тренери",
  path: "/coaches",
});

export default function CoachesPage() {
  return (
    <CoachesPageSection
      background={coachesPageBackground}
      coaches={coaches}
      intro={coachesPageIntro}
    />
  );
}
