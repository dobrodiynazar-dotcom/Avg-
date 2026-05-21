import type { PricingPlan } from "@/types/content";

import { Button, Card } from "@/components/ui";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card
      className={`flex h-full flex-col gap-5 ${plan.isFeatured ? "rounded-[var(--radius-lg)]" : ""}`}
      padding="md"
      variant={plan.isFeatured ? "lifted" : "default"}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium text-[var(--color-primary)]">{plan.name}</p>
            <div className="space-y-1">
              <h3 className="text-[1.7rem] font-semibold tracking-[-0.05rem] text-[var(--color-ink)]">
                {plan.priceLabel}
              </h3>
              <p className="text-sm text-[var(--color-ink-subtle)]">{plan.periodLabel}</p>
            </div>
          </div>

          {plan.badgeLabel ? (
            <span className="rounded-full bg-[var(--color-surface-3)] px-3 py-1 text-[11px] font-bold text-[var(--color-ink-muted)]">
              {plan.badgeLabel}
            </span>
          ) : null}
        </div>

        <p className="text-sm leading-7 text-[var(--color-ink-muted)]">{plan.summary}</p>
      </div>

      <ul className="flex-1 space-y-2 text-sm leading-6 text-[var(--color-ink-muted)]">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="rounded-[var(--radius-md)] bg-[var(--color-surface-1)] px-3 py-3"
          >
            {feature}
          </li>
        ))}
      </ul>

      {plan.note ? (
        <p className="text-xs leading-6 text-[var(--color-ink-subtle)]">{plan.note}</p>
      ) : null}

      <Button className="w-full" href="#contact" variant={plan.isFeatured ? "primary" : "secondary"}>
        {plan.ctaLabel ?? "РЈС‚РѕС‡РЅРёС‚Рё РґРµС‚Р°Р»С–"}
      </Button>
    </Card>
  );
}
