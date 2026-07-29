import Image from "next/image";

import type { CoachProfile } from "@/types/content";

type CoachCardProps = {
  coach: CoachProfile;
};

export function CoachCard({ coach }: CoachCardProps) {
  const details = [coach.role, coach.summary].filter(Boolean);

  return (
    <article className="group mx-auto flex w-full max-w-[21rem] flex-col items-center text-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border border-[rgb(255_255_255_/_0.14)] bg-[var(--color-surface-2)] shadow-[0_18px_50px_rgb(0_0_0_/_0.22)] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none sm:h-36 sm:w-36">
        {coach.imageSrc ? (
          <Image
            alt={coach.imageAlt ?? `${coach.name}, тренер Avangard Jiu-Jitsu`}
            className="object-cover"
            fill
            sizes="(min-width: 1280px) 144px, 128px"
            src={coach.imageSrc}
            style={{ objectPosition: coach.imageObjectPosition ?? "center center" }}
          />
        ) : null}
      </div>

      <div className="mt-5 space-y-3">
        <div className="space-y-2">
          <h3 className="text-[1.2rem] font-semibold leading-[1.15] tracking-[-0.02rem] text-[var(--color-ink)] sm:text-[1.32rem]">
            {coach.name}
          </h3>
          <div className="mx-auto h-px w-10 bg-[var(--color-primary)] opacity-70" />
        </div>

        <div className="space-y-1.5">
          {details.map((detail, index) => (
            <p
              key={detail}
              className={
                index === 0
                  ? "text-[0.86rem] font-medium leading-6 text-[rgb(255_255_255_/_0.86)]"
                  : "text-[0.8rem] leading-6 text-[var(--color-ink-muted)]"
              }
            >
              {detail}
            </p>
          ))}
        </div>

        <p className="mx-auto inline-flex rounded-[var(--radius-badge)] border border-[rgb(218_41_28_/_0.42)] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[rgb(255_255_255_/_0.86)]">
          {coach.rank}
        </p>
      </div>
    </article>
  );
}
