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
    <section className="section-frame border-b border-[rgb(255_255_255_/_0.08)]">
      <Container className="grid gap-8 lg:grid-cols-[0.75fr,1.25fr]" size="wide">
        <div className="space-y-6">
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
      </Container>
    </section>
  );
}
