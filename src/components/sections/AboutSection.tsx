import type { HighlightItem, SectionIntro } from "@/types/content";

import { Container, SectionHeader } from "@/components/ui";

type AboutSectionProps = {
  intro: SectionIntro;
  pillars: HighlightItem[];
};

export function AboutSection({ intro, pillars }: AboutSectionProps) {
  return (
    <section className="section-frame">
      <Container className="py-2 sm:py-4">
        <div className="grid gap-5 lg:grid-cols-[1.05fr,0.95fr]">
          <article className="rounded-[var(--radius-lg)] bg-[var(--color-canvas)] p-6 sm:p-8">
            <SectionHeader
              description={intro.description}
              eyebrow={intro.eyebrow}
              size="feature"
              title={intro.title}
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[var(--radius-md)] bg-[var(--color-surface-2)] px-4 py-4"
                >
                  <p className="text-base font-semibold text-[var(--color-ink)]">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-subtle)]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="pin-card-shell pin-card-large">
            <div className="pin-image-fill aspect-[4/5]">
              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="grid w-fit gap-2">
                  {pillars.slice(0, 2).map((pillar) => (
                    <span
                      key={pillar.title}
                      className="rounded-full bg-[var(--color-canvas)] px-3 py-1 text-[12px] font-bold text-[var(--color-ink)]"
                    >
                      {pillar.title}
                    </span>
                  ))}
                </div>

                <div className="max-w-[18rem] rounded-[var(--radius-md)] bg-[rgb(255_255_255_/_0.72)] p-4 backdrop-blur-sm">
                  <p className="text-lg font-semibold tracking-[-0.03rem] text-[var(--color-ink)]">
                    {intro.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-subtle)]">
                    {intro.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
