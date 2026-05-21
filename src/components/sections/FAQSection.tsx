import type { ReactNode } from "react";

import type { FAQItem, SectionIntro } from "@/types/content";

import { FAQAccordion } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type FAQSectionProps = {
  intro: SectionIntro;
  items: FAQItem[];
  actions?: ReactNode;
};

export function FAQSection({ intro, items, actions }: FAQSectionProps) {
  return (
    <section className="section-frame">
      <Container className="py-2 sm:py-4">
        <div className="grid gap-5 lg:grid-cols-[0.85fr,1.15fr]">
          <div className="rounded-[var(--radius-lg)] bg-[var(--color-surface-2)] p-6 sm:p-8">
            <SectionHeader
              actions={actions}
              description={intro.description}
              eyebrow={intro.eyebrow}
              eyebrowTone="muted"
              size="supporting"
              title={intro.title}
            />
          </div>
          <FAQAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
