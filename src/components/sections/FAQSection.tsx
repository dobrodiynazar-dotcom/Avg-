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
    <section className="section-frame border-y border-[var(--color-hairline)]/70 bg-[color:color-mix(in_srgb,var(--color-surface-1)_48%,transparent)]">
      <Container className="py-6 sm:py-8">
        <div className="space-y-8">
          <SectionHeader
            actions={actions}
            description={intro.description}
            eyebrow={intro.eyebrow}
            eyebrowTone="muted"
            size="supporting"
            title={intro.title}
          />
          <FAQAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
