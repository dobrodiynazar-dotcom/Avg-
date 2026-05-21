import type { CoachProfile } from "@/types/content";

type CoachCardProps = {
  coach: CoachProfile;
};

export function CoachCard({ coach }: CoachCardProps) {
  return (
    <article className="pin-card-shell h-full break-inside-avoid">
      <div className="pin-image-fill aspect-[4/5]">
        <div className="relative z-10 flex h-full items-end p-4">
          <div className="rounded-full bg-[var(--color-canvas)] px-3 py-1 text-[12px] font-bold text-[var(--color-ink)]">
            {coach.imageLabel}
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-xs font-medium text-[var(--color-primary)]">{coach.role}</p>
          <div className="space-y-1">
            <h3 className="text-[1.2rem] font-semibold tracking-[-0.03rem] text-[var(--color-ink)] sm:text-[1.35rem]">
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
              className="rounded-full bg-[var(--color-canvas)] px-3 py-1 text-xs text-[var(--color-ink-muted)]"
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
    </article>
  );
}
