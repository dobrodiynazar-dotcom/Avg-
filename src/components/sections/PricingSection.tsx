import type { PricingPlan, SectionIntro } from "@/types/content";

import { PricingCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type PricingSectionProps = {
  intro: SectionIntro;
  plans: PricingPlan[];
};

export function PricingSection({ intro, plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="section-frame">
      <Container className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
