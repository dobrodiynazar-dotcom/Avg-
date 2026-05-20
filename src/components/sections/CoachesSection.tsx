import type { CoachProfile, SectionIntro } from "@/types/content";

import { CoachCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type CoachesSectionProps = {
  intro: SectionIntro;
  coaches: CoachProfile[];
};

export function CoachesSection({ intro, coaches }: CoachesSectionProps) {
  return (
    <section id="coaches" className="section-frame">
      <Container className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {coaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
