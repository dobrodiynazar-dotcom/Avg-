import Image from "next/image";

import type { CoachProfile } from "@/types/content";

type CoachCardProps = {
  coach: CoachProfile;
};

export function CoachCard({ coach }: CoachCardProps) {
  const supportingInfo = coach.supportingInfo ?? [coach.summary].filter(Boolean);

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

      <div className="mt-5 space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-[1.2rem] font-bold leading-[1.15] tracking-[-0.02rem] text-[var(--color-ink)] sm:text-[1.32rem]">
            {coach.name}
          </h3>
          <div className="mx-auto h-px w-10 bg-[var(--color-primary)] opacity-70" />
        </div>

        <div className="space-y-2.5">
          <p className="text-[0.88rem] font-medium leading-6 text-[rgb(255_255_255_/_0.9)]">
            {coach.role}
          </p>
          <div className="space-y-1.5">
            {supportingInfo.map((detail) => (
              <p key={detail} className="text-[0.78rem] leading-[1.7] text-[var(--color-ink-muted)]">
                {detail}
              </p>
            ))}
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-1.5">
          <p className="text-[1rem] font-bold leading-tight text-[var(--color-ink)] sm:text-[1.08rem]">
            {coach.rank}
          </p>
          <div className="h-px w-full bg-[var(--color-primary)] opacity-75" />
        </div>
      </div>
    </article>
  );
}
