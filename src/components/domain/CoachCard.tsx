import type { CoachProfile } from "@/types/content";

import { Card } from "@/components/ui";

type CoachCardProps = {
  coach: CoachProfile;
};

export function CoachCard({ coach }: CoachCardProps) {
  return (
    <Card className="flex h-full flex-col gap-5" padding="md">
      <div className="aspect-[5/4] rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-2)] p-4">
        <div className="flex h-full items-end rounded-[calc(var(--radius-lg)-2px)] border border-dashed border-[var(--color-hairline-strong)] p-4">
          <p className="text-sm text-[var(--color-ink-subtle)]">{coach.imageLabel}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-primary)]">
            {coach.role}
          </p>
          <div className="space-y-1">
            <h3 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-[1.35rem]">
              {coach.name}
            </h3>
            <p className="text-sm text-[var(--color-ink-subtle)]">{coach.rank}</p>
          </div>
          <p className="text-sm leading-7 text-[var(--color-ink-muted)]">{coach.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {coach.focusAreas.map((focusArea) => (
            <span
              key={focusArea}
              className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface-2)] px-3 py-1 text-xs text-[var(--color-ink-muted)]"
            >
              {focusArea}
            </span>
          ))}
        </div>

        <ul className="space-y-2 text-sm text-[var(--color-ink-subtle)]">
          {coach.achievements.map((achievement) => (
            <li key={achievement} className="flex gap-2">
              <span aria-hidden="true" className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
