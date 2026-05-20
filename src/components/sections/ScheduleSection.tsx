import type { ScheduleSession, SectionIntro } from "@/types/content";

import { ScheduleGrid } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type ScheduleSectionProps = {
  intro: SectionIntro;
  sessions: ScheduleSession[];
};

export function ScheduleSection({ intro, sessions }: ScheduleSectionProps) {
  return (
    <section id="schedule" className="section-frame">
      <Container className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
          <ScheduleGrid sessions={sessions} />
        </div>
      </Container>
    </section>
  );
}
