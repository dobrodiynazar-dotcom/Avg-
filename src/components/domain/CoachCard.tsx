import type { CoachProfile } from "@/types/content";

import { Card } from "@/components/ui";

type CoachCardProps = {
  coach: CoachProfile;
};

export function CoachCard({ coach }: CoachCardProps) {
  return (
    <Card className="flex h-full flex-col gap-5" padding="md">
      <div className="aspect-[4/5] rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-2)] p-4">
        <div className="flex h-full items-end rounded-[calc(var(--radius-lg)-2px)] border border-dashed border-[var(--color-hairline-strong)] p-4">
          <p className="text-sm text-[var(--color-ink-subtle)]">{coach.imageLabel}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-primary)]">
            {coach.role}
          </p>
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
            {coach.name}
          </h3>
          <p className="text-sm text-[var(--color-ink-subtle)]">{coach.rank}</p>
        </div>
        <p className="text-sm leading-7 text-[var(--color-ink-muted)]">{coach.summary}</p>
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-ink-subtle)]">
            Акценти
          </p>
          <ul className="space-y-2 text-sm leading-6 text-[var(--color-ink-muted)]">
            {coach.focusAreas.map((focusArea) => (
              <li key={focusArea}>{focusArea}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
