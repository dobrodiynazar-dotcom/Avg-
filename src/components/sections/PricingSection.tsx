import type { ReactNode } from "react";

import type { PricingPlan, SectionIntro } from "@/types/content";

import { PricingCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type PricingSectionProps = {
  intro: SectionIntro;
  plans: PricingPlan[];
  actions?: ReactNode;
};

export function PricingSection({ intro, plans, actions }: PricingSectionProps) {
  return (
    <section className="section-frame">
      <Container className="py-6 sm:py-8">
        <div className="space-y-8">
          <SectionHeader
            actions={actions}
            description={intro.description}
            eyebrow={intro.eyebrow}
            size="feature"
            title={intro.title}
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
