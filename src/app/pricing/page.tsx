import { buildMetadata } from "@/lib/seo/metadata";
import { RoutePlaceholder } from "@/components/site/RoutePlaceholder";

export const metadata = buildMetadata({
  title: "Ціни",
  path: "/pricing",
});

export default function PricingPage() {
  return <RoutePlaceholder route="pricing" />;
}
