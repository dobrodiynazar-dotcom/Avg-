import Image from "next/image";

import type { PricingPageContent, PricingPlan } from "@/types/content";

import { Button, Container } from "@/components/ui";

type PricingPageSectionProps = {
  content: PricingPageContent;
  plans: PricingPlan[];
};

export function PricingPageSection({
  content,
  plans,
}: PricingPageSectionProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--color-canvas)] text-white">
      <div className="absolute inset-0">
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-[center_24%] sm:object-[center_20%] lg:object-[center_18%]"
          fill
          priority
          sizes="100vw"
          src={content.backgroundImageSrc}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(4_6_8_/_0.78)_0%,rgb(4_6_8_/_0.82)_32%,rgb(4_6_8_/_0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(255_255_255_/_0.1),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_8_8_/_0.38)_0%,transparent_32%,transparent_68%,rgb(8_8_8_/_0.24)_100%)]" />
      </div>

      <Container
        className="relative z-10 flex min-h-screen items-start py-28 sm:py-32 lg:py-36"
        size="wide"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:gap-10">
          <div className="space-y-6">
            <h1 className="max-w-[10ch] text-balance text-[clamp(2.8rem,7vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.075em] text-white">
              {content.title}
            </h1>
          </div>

          <div className="rounded-[var(--radius-card-lg)] border border-[rgb(255_255_255_/_0.14)] bg-[linear-gradient(180deg,rgb(10_12_15_/_0.54),rgb(8_10_12_/_0.72))] p-4 shadow-[0_24px_80px_rgb(0_0_0_/_0.26)] backdrop-blur-xl sm:p-5 lg:p-7">
            <div className="rounded-[calc(var(--radius-card-lg)-0.35rem)] border border-[rgb(255_255_255_/_0.08)] bg-[rgb(255_255_255_/_0.04)] p-4 sm:p-5 lg:p-6">
              <div className="grid gap-4 lg:grid-cols-3">
                {plans.map((plan) => (
                  <article
                    key={plan.id}
                    className="flex min-h-[18rem] flex-col rounded-[var(--radius-card-md)] border border-[rgb(255_255_255_/_0.12)] bg-[linear-gradient(180deg,rgb(255_255_255_/_0.08),rgb(255_255_255_/_0.03))] px-5 py-6 text-center shadow-[0_10px_30px_rgb(0_0_0_/_0.14)] backdrop-blur-md sm:min-h-[19rem] sm:px-6"
                  >
                    <div className="space-y-3">
                      <h2 className="text-balance text-[clamp(1.45rem,2.2vw,2rem)] font-medium leading-[1.08] tracking-[-0.05em] text-white">
                        {plan.name}
                      </h2>
                      {plan.summary ? (
                        <p className="mx-auto max-w-[24ch] text-sm leading-[1.45] text-white/68">
                          {plan.summary}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-auto pt-8">
                      <p className="text-[clamp(2rem,4vw,3.3rem)] font-medium leading-none tracking-[-0.06em]">
                        <span className="mr-2 text-[0.62em] text-white/52">₴</span>
                        <span className="text-white">{plan.priceLabel}</span>
                        <span className="ml-2 text-[0.62em] text-white/52">
                          /{plan.periodLabel}
                        </span>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              className="max-w-[24rem] border-[var(--color-primary)] bg-[rgb(0_0_0_/_0.12)] px-8 py-4 text-center text-[0.88rem] leading-[1.45] !text-white hover:bg-[rgb(255_255_255_/_0.04)]"
              href={content.ctaHref}
              rel={content.ctaExternal ? "noreferrer" : undefined}
              size="lg"
              target={content.ctaExternal ? "_blank" : undefined}
              variant="secondary"
            >
              {content.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
