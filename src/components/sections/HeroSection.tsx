import type {
  AcademyInfo,
  ContactChannel,
  HeroPreview,
  HighlightItem,
  StatItem,
} from "@/types/content";

import { Card, Container, CTAGroup } from "@/components/ui";

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
};

export function HeroSection({
  academy,
  contactChannels,
  content,
  highlights,
  stats,
  preview,
}: HeroSectionProps) {
  return (
    <section className="section-frame relative overflow-hidden border-b border-[var(--color-hairline)]/70">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(94,106,210,0.14),transparent_68%)]" />

      <Container className="relative py-8 sm:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-7">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
                <span className="rounded-full border border-[var(--color-hairline)] px-3 py-1">
                  {academy.heroLabel}
                </span>
                <span>{academy.locationLabel}</span>
              </div>

              <div className="space-y-4">
                <h1 className="max-w-4xl text-balance">{content.title}</h1>
                <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-muted)] sm:text-lg sm:leading-8">
                  {content.description}
                </p>
              </div>
            </div>

            <CTAGroup items={contactChannels} />

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[color:color-mix(in_srgb,var(--color-surface-1)_78%,transparent)] px-4 py-4"
                >
                  <p className="text-[1.6rem] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-ink)]">{stat.label}</p>
                  {stat.detail ? (
                    <p className="mt-2 text-sm leading-6 text-[var(--color-ink-subtle)]">
                      {stat.detail}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)]/80 bg-[var(--color-surface-1)] px-4 py-4"
                >
                  <p className="text-sm font-medium text-[var(--color-ink)]">
                    {highlight.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-subtle)]">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card
            className="flex h-full min-h-[18rem] flex-col justify-between gap-6"
            padding="lg"
            variant="lifted"
          >
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
                {preview.eyebrow}
              </p>
              <h2 className="text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--color-ink)] sm:text-[1.45rem]">
                {preview.title}
              </h2>
              <p className="text-sm leading-7 text-[var(--color-ink-muted)]">
                {preview.description}
              </p>
            </div>

            <div className="aspect-[4/3] rounded-[var(--radius-xl)] border border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-surface-3)] p-4">
              <div className="flex h-full items-end rounded-[calc(var(--radius-xl)-2px)] border border-[var(--color-hairline)] bg-[var(--color-surface-2)] p-4">
                <p className="max-w-[16rem] text-sm text-[var(--color-ink-subtle)]">
                  {preview.mediaLabel}
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-[var(--color-ink-subtle)]">
              {preview.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="mt-[0.4rem] h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
