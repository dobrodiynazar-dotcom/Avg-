import type { PricingPlan } from "@/types/content";

import { Button, Card } from "@/components/ui";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card
      className="flex h-full flex-col gap-6"
      padding="md"
      variant={plan.isFeatured ? "lifted" : "default"}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-primary)]">
              {plan.name}
            </p>
            <h3 className="mt-2 text-[1.75rem] font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
              {plan.priceLabel}
            </h3>
            <p className="text-sm text-[var(--color-ink-subtle)]">{plan.periodLabel}</p>
          </div>
          {plan.isFeatured ? (
            <span className="rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-surface-3)] px-3 py-1 text-xs text-[var(--color-ink-muted)]">
              Рекомендовано
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-7 text-[var(--color-ink-muted)]">{plan.summary}</p>
      </div>
      <ul className="flex-1 space-y-3 text-sm leading-6 text-[var(--color-ink-muted)]">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="rounded-[var(--radius-md)] border border-[var(--color-hairline)] px-3 py-2"
          >
            {feature}
          </li>
        ))}
      </ul>
      {plan.note ? <p className="text-xs text-[var(--color-ink-subtle)]">{plan.note}</p> : null}
      <Button href="#contact" variant={plan.isFeatured ? "primary" : "secondary"}>
        Уточнити деталі
      </Button>
    </Card>
  );
}
