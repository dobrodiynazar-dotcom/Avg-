import { buildMetadata } from "@/lib/seo/metadata";
import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";

export const metadata = buildMetadata({
  title: "Тренери",
  path: "/coaches",
});

export default function CoachesPage() {
  return <RoutePlaceholder route="coaches" />;
}
