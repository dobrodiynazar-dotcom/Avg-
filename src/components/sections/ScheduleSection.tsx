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
    <section className="section-frame border-y border-[var(--color-hairline)]/70 bg-[color:color-mix(in_srgb,var(--color-surface-1)_48%,transparent)]">
      <Container className="py-6 sm:py-8">
        <div className="space-y-8">
          <SectionHeader
            actions={actions}
            description={intro.description}
            eyebrow={intro.eyebrow}
            size="feature"
            title={intro.title}
          />
          <ScheduleGrid sessions={sessions} />
        </div>
      </Container>
    </section>
  );
}
