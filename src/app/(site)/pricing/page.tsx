import { PricingPageSection } from "@/components/sections/PricingPageSection";
import { pricingPageContent, pricingPlans } from "@/content/pricing";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Абонементи",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <PricingPageSection content={pricingPageContent} plans={pricingPlans} />
  );
}
