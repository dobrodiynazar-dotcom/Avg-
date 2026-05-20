import { buildMetadata } from "@/lib/seo/metadata";
import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";

export const metadata = buildMetadata({
  title: "Контакти",
  path: "/contact",
});

export default function ContactPage() {
  return <RoutePlaceholder route="contact" />;
}
