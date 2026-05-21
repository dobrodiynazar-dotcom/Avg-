import type { ReactNode } from "react";

import type { ScheduleSession, SectionIntro } from "@/types/content";

import { ScheduleGrid } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type ScheduleSectionProps = {
  intro: SectionIntro;
  sessions: ScheduleSession[];
  actions?: ReactNode;
};

export function ScheduleSection({ intro, sessions, actions }: ScheduleSectionProps) {
  return (
    <section className="section-frame bg-[var(--color-surface-1)]">
      <Container className="py-2 sm:py-4">
        <div className="grid gap-5 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div className="rounded-[var(--radius-lg)] bg-[var(--color-canvas)] p-6 sm:p-8 lg:sticky lg:top-24">
            <SectionHeader
              actions={actions}
              description={intro.description}
              eyebrow={intro.eyebrow}
              size="feature"
              title={intro.title}
            />
          </div>

          <div className="rounded-[var(--radius-lg)] bg-[var(--color-canvas)] p-3 sm:p-4">
            <ScheduleGrid sessions={sessions} />
          </div>
        </div>
      </Container>
    </section>
  );
}
