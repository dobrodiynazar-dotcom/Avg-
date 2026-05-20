import type { FAQItem, SectionIntro } from "@/types/content";

import { FAQAccordion } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type FAQSectionProps = {
  intro: SectionIntro;
  items: FAQItem[];
};

export function FAQSection({ intro, items }: FAQSectionProps) {
  return (
    <section id="faq" className="section-frame">
      <Container className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
          <FAQAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
