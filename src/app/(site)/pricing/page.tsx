import config from "@payload-config";
import { headers } from "next/headers";
import { getPayload } from "payload";

import { PricingPageSection } from "@/components/sections/PricingPageSection";
import { pricingPageContent } from "@/content/pricing";
import { buildMetadata } from "@/lib/seo/metadata";
import type { PriceCard } from "@/types/content";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "Абонементи",
  path: "/pricing",
});

export default async function PricingPage() {
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: await headers(), canSetHeaders: false });
  const result = await payload.find({
    collection: "prices",
    depth: 0,
    limit: 100,
    pagination: false,
    sort: "sortOrder",
    overrideAccess: false,
    user,
  });
  const cards: PriceCard[] = result.docs.map(({ id, key, kind, sortOrder, title, priceLabel }) => ({
    id: Number(id),
    key: String(key),
    kind: kind as PriceCard["kind"],
    sortOrder: Number(sortOrder),
    title: String(title),
    priceLabel: String(priceLabel),
  }));

  return (
    <PricingPageSection content={pricingPageContent} initialCards={cards} canEdit={user?.collection === "admins"} />
  );
}
