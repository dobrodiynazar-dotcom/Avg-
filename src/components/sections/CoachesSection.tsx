import type { CoachProfile, SectionIntro } from "@/types/content";

import { CoachCard } from "@/components/domain";
import { Button, Container, SectionHeader } from "@/components/ui";

type CoachesSectionProps = {
  intro: SectionIntro;
  coaches: CoachProfile[];
};

export function CoachesSection({ intro, coaches }: CoachesSectionProps) {
  return (
    <section className="section-frame border-b border-[rgb(255_255_255_/_0.08)]">
      <Container className="space-y-9" size="wide">
        <SectionHeader
          eyebrow={intro.eyebrow}
          className="max-w-[48rem]"
          size="supporting"
          title={intro.title}
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className={coach.id === "volodymyr-tkachuk" ? "md:col-span-2 xl:col-span-1" : undefined}
            >
              <CoachCard coach={coach} />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            aria-label="Перейти до повної інформації про тренерів"
            href="/coaches"
            variant="secondary"
            className="border-[var(--color-primary)] bg-transparent px-7 py-3.5 text-[0.82rem] !text-white hover:bg-[rgb(255_255_255_/_0.04)]"
          >
            Повна інформація
          </Button>
        </div>
      </Container>
    </section>
  );
}
