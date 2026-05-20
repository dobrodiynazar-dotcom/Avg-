import { buildMetadata } from "@/lib/seo/metadata";
import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";

export const metadata = buildMetadata({
  title: "FAQ",
  path: "/faq",
});

export default function FAQPage() {
  return <RoutePlaceholder route="faq" />;
}
