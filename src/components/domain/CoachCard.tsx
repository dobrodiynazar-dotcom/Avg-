import Image from "next/image";

import type { CoachProfile } from "@/types/content";

type CoachCardProps = {
  coach: CoachProfile;
};

export function CoachCard({ coach }: CoachCardProps) {
  return (
    <article className="overflow-hidden rounded-[var(--radius-card-md)] border border-[rgb(255_255_255_/_0.08)] bg-[var(--color-surface-2)]">
      <div className="cinema-image-soft relative aspect-[4/5] overflow-hidden">
        {coach.imageSrc ? (
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            src={coach.imageSrc}
          />
        ) : null}

        <div className="relative z-10 flex h-full items-end p-5">
          <div className="rounded-[var(--radius-badge)] border border-[rgb(255_255_255_/_0.12)] bg-[rgb(24_24_24_/_0.46)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)] backdrop-blur-sm">
            {coach.imageLabel}
          </div>
        </div>
      </div>

      <div className="space-y-6 p-5">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-subtle)]">
            {coach.role}
          </p>
          <div className="space-y-2">
            <h3 className="text-[1.25rem] font-semibold tracking-[-0.03rem] text-[var(--color-ink)] sm:text-[1.4rem]">
              {coach.name}
            </h3>
            <p className="text-[0.8125rem] text-[var(--color-ink-muted)]">{coach.rank}</p>
          </div>
          <p className="text-[0.875rem] leading-7 text-[var(--color-ink-muted)]">{coach.summary}</p>
        </div>

        <div className="space-y-3 border-t border-[rgb(255_255_255_/_0.08)] pt-4">
          {coach.focusAreas.map((focusArea) => (
            <p
              key={focusArea}
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)]"
            >
              {focusArea}
            </p>
          ))}
        </div>

        <ul className="space-y-3 border-t border-[rgb(255_255_255_/_0.08)] pt-4 text-[0.8125rem] text-[var(--color-ink-muted)]">
          {coach.achievements.map((achievement) => (
            <li key={achievement} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 bg-[var(--color-primary)]" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
