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

const aspectRatioClassMap: Record<VisualTile["aspectRatio"], string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
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
    <section className="section-frame overflow-hidden bg-[var(--color-surface-1)]">
      <Container className="py-4 sm:py-6 lg:py-10" size="wide">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--color-ink-subtle)]">
              <span className="rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-[var(--color-primary)]">
                {academy.heroLabel}
              </span>
              <span className="rounded-full bg-[var(--color-surface-2)] px-3 py-1">
                {academy.locationLabel}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-[14ch] text-balance text-[var(--color-ink)]">
                {content.title}
              </h1>
              <p className="max-w-xl text-base leading-7 text-[var(--color-ink-muted)] sm:text-[1rem]">
                {content.description}
              </p>
            </div>

            <CTAGroup items={contactChannels} />

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius-md)] bg-[var(--color-canvas)] px-4 py-4"
                >
                  <p className="text-[1.7rem] font-semibold tracking-[-0.05rem] text-[var(--color-ink)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">{stat.label}</p>
                  {stat.detail ? (
                    <p className="mt-2 text-sm leading-6 text-[var(--color-ink-subtle)]">
                      {stat.detail}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="rounded-[var(--radius-lg)] bg-[var(--color-surface-4)] px-5 py-6 text-[var(--color-inverse-ink)] sm:px-6">
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/72">
                {preview.eyebrow}
              </p>
              <h2 className="mt-3 max-w-[20ch] text-[1.7rem] font-semibold leading-[1.15] tracking-[-0.05rem] text-white">
                {preview.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/76">{preview.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/72">
                {preview.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[0.4rem] h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="columns-2 gap-3 sm:gap-4">
              {visuals.map((visual) => (
                <article
                  key={visual.id}
                  className="pin-card-shell mb-3 break-inside-avoid sm:mb-4"
                >
                  <div
                    className={`${aspectRatioClassMap[visual.aspectRatio]} pin-image-fill ${
                      visual.tone === "dark" ? "pin-image-fill-dark" : ""
                    }`}
                  >
                    <div className="relative z-10 flex h-full flex-col justify-between p-4">
                      <span className="w-fit rounded-full bg-[var(--color-canvas)] px-3 py-1 text-[12px] font-bold text-[var(--color-ink)]">
                        {visual.label}
                      </span>
                      <div className="max-w-[13rem] space-y-1">
                        <p
                          className={`text-lg font-semibold tracking-[-0.03rem] ${
                            visual.tone === "dark" ? "text-white" : "text-[var(--color-ink)]"
                          }`}
                        >
                          {visual.title}
                        </p>
                        <p
                          className={`text-sm leading-6 ${
                            visual.tone === "dark"
                              ? "text-white/76"
                              : "text-[var(--color-ink-subtle)]"
                          }`}
                        >
                          {visual.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-[var(--radius-md)] bg-[var(--color-canvas)] px-4 py-4"
                >
                  <p className="text-sm font-semibold text-[var(--color-ink)]">
                    {highlight.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-subtle)]">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="rounded-[var(--radius-md)] bg-[var(--color-surface-2)] px-4 py-4 text-sm text-[var(--color-ink-subtle)]">
              {preview.mediaLabel}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
