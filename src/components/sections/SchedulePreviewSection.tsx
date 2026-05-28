import type { SchedulePreviewGroup } from "@/types/content";

import { Button, Card, Container, SectionHeader } from "@/components/ui";

type SchedulePreviewSectionProps = {
  content: {
    title: string;
    ctaHref: string;
    ctaLabel: string;
  };
  groups: SchedulePreviewGroup[];
};

export function SchedulePreviewSection({
  content,
  groups,
}: SchedulePreviewSectionProps) {
  return (
    <section className="section-band-light section-frame border-b border-[var(--color-hairline-strong)]">
      <Container size="wide">
        <div className="space-y-10 sm:space-y-12">
          <SectionHeader
            className="items-center text-center"
            size="feature"
            title={content.title}
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {groups.map((group, index) => (
              <Card
                key={group.id}
                className="border-t border-t-[var(--color-primary)]"
                padding="md"
                variant="lifted"
              >
                <div className="flex min-h-28 flex-col justify-between gap-6 sm:min-h-32">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgb(24_24_24_/_0.42)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="max-w-[12ch] text-[clamp(1.5rem,2.2vw,2rem)] font-medium leading-[1.05] tracking-[-0.05rem] text-[var(--color-inverse-ink)]">
                    {group.label}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button href={content.ctaHref} size="lg">
              {content.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
