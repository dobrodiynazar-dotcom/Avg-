import config from "@payload-config";
import { headers } from "next/headers";
import { getPayload } from "payload";

import { SchedulePageSection } from "@/components/sections/SchedulePageSection";
import { scheduleLocationSchedules, schedulePageContent } from "@/content/schedule";
import { buildMetadata } from "@/lib/seo/metadata";
import type { ScheduleEntry } from "@/types/content";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "Розклад тренувань",
  path: "/schedule",
});

export default async function SchedulePage() {
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: await headers(), canSetHeaders: false });
  const result = await payload.find({ collection: "schedule-entries", depth: 0, limit: 0,
    pagination: false, sort: ["sortOrder", "id"], overrideAccess: false, user });
  const entries: ScheduleEntry[] = result.docs.map(({ id, key, locationId, dayId, sortOrder, time, group }) => ({
    id: Number(id), key: String(key), locationId: String(locationId), dayId: String(dayId),
    sortOrder: Number(sortOrder), time: String(time), group: String(group),
  }));
  return (
    <SchedulePageSection
      content={schedulePageContent}
      locations={scheduleLocationSchedules}
      initialEntries={entries}
      canEdit={user?.collection === "admins"}
    />
  );
}
