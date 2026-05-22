import type { HeroPreview, VisualTile } from "@/types/content";

type HeroMediaFrameProps = {
  preview: HeroPreview;
  visuals: VisualTile[];
};

export function HeroMediaFrame({ preview, visuals }: HeroMediaFrameProps) {
  return (
    <div className="self-end border border-[rgb(255_255_255_/_0.12)] bg-[rgb(24_24_24_/_0.74)] p-5 backdrop-blur-sm sm:p-6 lg:max-w-[30rem]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
        {preview.eyebrow}
      </p>
      <h2 className="mt-4 max-w-[18ch] text-[clamp(1.875rem,3vw,2.625rem)] font-medium leading-[1.08] tracking-[-0.05rem] text-[var(--color-ink)]">
        {preview.title}
      </h2>
      <p className="mt-4 text-[0.875rem] leading-7 text-[var(--color-ink-muted)]">
        {preview.description}
      </p>

      <div className="mt-6 space-y-3 border-t border-[rgb(255_255_255_/_0.08)] pt-5">
        {visuals.slice(0, 3).map((visual) => (
          <article
            key={visual.id}
            className="grid gap-2 border-t border-[rgb(255_255_255_/_0.08)] pt-3 first:border-t-0 first:pt-0"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-subtle)]">
              {visual.label}
            </p>
            <p className="text-[1rem] font-semibold leading-5 text-[var(--color-ink)]">
              {visual.title}
            </p>
            <p className="text-[0.8125rem] leading-6 text-[var(--color-ink-muted)]">
              {visual.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 border-t border-[rgb(255_255_255_/_0.12)] pt-4 sm:mt-10 sm:pt-5">
        <p className="max-w-[42rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
          {preview.mediaLabel}
        </p>
      </div>
    </div>
  );
}
