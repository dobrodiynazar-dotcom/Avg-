import type {
  AcademyInfo,
  ContactChannel,
  HeroPreview,
  HighlightItem,
  StatItem,
  VisualTile,
} from "@/types/content";

import { Container, CTAGroup } from "@/components/ui";

type HeroSectionProps = {
  academy: AcademyInfo;
  contactChannels: ContactChannel[];
  content: {
    title: string;
    description: string;
  };
  highlights: HighlightItem[];
  stats: StatItem[];
  preview: HeroPreview;
  visuals: VisualTile[];
};

export function HeroSection({
  academy,
  contactChannels,
  content,
  highlights,
  preview,
  stats,
  visuals,
}: HeroSectionProps) {
  return (
    <section className="border-b border-[rgb(255_255_255_/_0.08)]">
      <div className="cinema-hero-shell">
        <div className="cinema-image absolute inset-0" />
        <Container className="relative flex min-h-[inherit] flex-col justify-end py-10 sm:py-14 lg:py-18" size="wide">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
            <div className="max-w-[42rem] space-y-6 sm:space-y-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                <span className="text-[var(--color-primary)]">{academy.heroLabel}</span>
                <span>{academy.locationLabel}</span>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <h1 className="max-w-[12ch] text-balance text-[var(--color-ink)]">
                  {content.title}
                </h1>
                <p className="max-w-[34rem] text-[0.95rem] leading-7 text-[rgb(255_255_255_/_0.72)]">
                  {content.description}
                </p>
              </div>

              <CTAGroup items={contactChannels} />

              <div className="grid gap-3 border-t border-[rgb(255_255_255_/_0.12)] pt-5 sm:grid-cols-3 sm:pt-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`space-y-2 ${index > 0 ? "sm:border-l sm:border-[rgb(255_255_255_/_0.1)] sm:pl-4 lg:pl-6" : ""}`}
                  >
                    <p className="hero-stat-value text-[var(--color-ink)]">{stat.value}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)]">
                      {stat.label}
                    </p>
                    {stat.detail ? (
                      <p className="max-w-[16rem] text-[0.8125rem] leading-6 text-[var(--color-ink-muted)]">
                        {stat.detail}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

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
            </div>
          </div>

          <div className="mt-8 border-t border-[rgb(255_255_255_/_0.12)] pt-4 sm:mt-10 sm:pt-5">
            <p className="max-w-[42rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
              {preview.mediaLabel}
            </p>
          </div>
        </Container>
      </div>

      <Container className="grid gap-5 py-8 sm:py-10 lg:grid-cols-[0.7fr,1.3fr] lg:py-12" size="wide">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            Editorial Notes
          </p>
          <p className="max-w-[20rem] text-[0.875rem] leading-7 text-[var(--color-ink-muted)]">
            The opening sequence now behaves like one lead frame supported by proof and motion, not a stack of unrelated cards.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="border-t border-[rgb(255_255_255_/_0.12)] pt-4">
              <p className="text-[0.9375rem] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink)]">
                {highlight.title}
              </p>
              <p className="mt-3 text-[0.8125rem] leading-6 text-[var(--color-ink-muted)]">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
