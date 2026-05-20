import type { SectionIntro } from "@/types/content";

import { Card, Container, SectionHeader } from "@/components/ui";

type AboutSectionProps = {
  intro: SectionIntro;
  pillars: Array<{ title: string; description: string }>;
};

export function AboutSection({ intro, pillars }: AboutSectionProps) {
  return (
    <section id="about" className="section-frame">
      <Container className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
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
