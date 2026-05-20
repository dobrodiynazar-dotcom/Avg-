import { buildMetadata } from "@/lib/seo/metadata";
import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";

export const metadata = buildMetadata({
  title: "Медіа",
  path: "/gallery",
});

export default function GalleryPage() {
  return <RoutePlaceholder route="gallery" />;
}
