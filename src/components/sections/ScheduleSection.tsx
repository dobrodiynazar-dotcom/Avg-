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
    <section className="section-band-light section-frame border-b border-[var(--color-hairline-strong)]">
      <Container className="grid gap-8 lg:grid-cols-[0.7fr,1.3fr] lg:items-start" size="wide">
        <div className="space-y-6">
          <SectionHeader
            actions={actions}
            description={intro.description}
            eyebrow={intro.eyebrow}
            size="feature"
            title={intro.title}
          />
        </div>

        <div className="pt-2">
          <ScheduleGrid sessions={sessions} />
        </div>
      </Container>
    </section>
  );
}
