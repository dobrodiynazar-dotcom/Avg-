import type { HighlightItem, SectionIntro } from "@/types/content";

import { Card, Container, SectionHeader } from "@/components/ui";

type AboutSectionProps = {
  intro: SectionIntro;
  pillars: HighlightItem[];
};

export function AboutSection({ intro, pillars }: AboutSectionProps) {
  return (
    <section className="section-frame">
      <Container className="py-6 sm:py-8">
        <div className="surface-panel space-y-8 p-6 sm:p-8 lg:p-10">
          <SectionHeader
            description={intro.description}
            eyebrow={intro.eyebrow}
            size="feature"
            title={intro.title}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="space-y-4" padding="md">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--color-ink-muted)]">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
