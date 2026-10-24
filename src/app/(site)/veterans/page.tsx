import { VeteransPageSection } from "@/components/sections/VeteransPageSection";
import { veteransFaqItems, veteransPageContent } from "@/content/veterans";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Ветерани",
  description:
    "Програма джиу-джитсу для військових і ветеранів у Рівному від Avangard Jiu-Jitsu у межах ініціативи TMS Hub.",
  path: "/veterans",
});

export default function VeteransPage() {
  return (
    <VeteransPageSection
      content={veteransPageContent}
      faqItems={veteransFaqItems}
    />
  );
}
