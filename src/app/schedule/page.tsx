import { buildMetadata } from "@/lib/seo/metadata";
import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";

export const metadata = buildMetadata({
  title: "Розклад",
  path: "/schedule",
});

export default function SchedulePage() {
  return <RoutePlaceholder route="schedule" />;
}
