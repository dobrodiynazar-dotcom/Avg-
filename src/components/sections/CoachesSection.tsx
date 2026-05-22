import type { CoachProfile, SectionIntro } from "@/types/content";

import { CoachCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type CoachesSectionProps = {
  intro: SectionIntro;
  coaches: CoachProfile[];
};

export function CoachesSection({ intro, coaches }: CoachesSectionProps) {
  return (
    <section className="section-frame border-b border-[rgb(255_255_255_/_0.08)]">
      <Container className="space-y-10" size="wide">
        <SectionHeader
          description={intro.description}
          eyebrow={intro.eyebrow}
          size="supporting"
          title={intro.title}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </Container>
    </section>
  );
}
