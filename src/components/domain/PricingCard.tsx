import type { PricingPlan } from "@/types/content";

import { Button, Card } from "@/components/ui";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card
      className={`flex h-full flex-col gap-6 border-t-2 ${
        plan.isFeatured ? "border-t-[var(--color-primary)]" : "border-t-[var(--color-hairline-strong)]"
      }`}
      padding="md"
      variant="lifted"
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[rgb(24_24_24_/_0.68)]">
              {plan.name}
            </p>
            <div className="space-y-1">
              <h3 className="text-[2.25rem] font-medium tracking-[-0.06rem] text-[var(--color-inverse-ink)]">
                {plan.priceLabel}
              </h3>
              <p className="text-[0.8125rem] uppercase tracking-[0.08em] text-[rgb(24_24_24_/_0.58)]">
                {plan.periodLabel}
              </p>
            </div>
          </div>

          {plan.badgeLabel ? (
            <span className="border border-[var(--color-hairline-strong)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgb(24_24_24_/_0.68)]">
              {plan.badgeLabel}
            </span>
          ) : null}
        </div>

        <p className="text-[0.875rem] leading-7 text-[rgb(24_24_24_/_0.72)]">{plan.summary}</p>
      </div>

      <ul className="flex-1 space-y-3 border-t border-[var(--color-hairline-strong)] pt-4 text-[0.875rem] leading-6 text-[rgb(24_24_24_/_0.74)]">
        {plan.features.map((feature) => (
          <li key={feature} className="border-t border-[var(--color-hairline-tertiary)] pt-3 first:border-t-0 first:pt-0">
            {feature}
          </li>
        ))}
      </ul>

      {plan.note ? (
        <p className="text-[0.75rem] leading-6 text-[rgb(24_24_24_/_0.56)]">{plan.note}</p>
      ) : null}

      <Button className="w-full" href="#contact" variant={plan.isFeatured ? "primary" : "inverse"}>
        {plan.ctaLabel ?? "Уточнити деталі"}
      </Button>
    </Card>
  );
}
