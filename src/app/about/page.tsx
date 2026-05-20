import { buildMetadata } from "@/lib/seo/metadata";
import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";

export const metadata = buildMetadata({
  title: "Академія",
  path: "/about",
});

export default function AboutPage() {
  return <RoutePlaceholder route="about" />;
}
