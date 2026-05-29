import { SchedulePageSection } from "@/components/sections/SchedulePageSection";
import { scheduleLocationSchedules, schedulePageContent } from "@/content/schedule";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Розклад тренувань",
  path: "/schedule",
});

export default function SchedulePage() {
  return (
    <SchedulePageSection
      content={schedulePageContent}
      locations={scheduleLocationSchedules}
    />
  );
}
