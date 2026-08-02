"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import type { PricingPageContent, PricingPlan, PricingSimpleItem } from "@/types/content";

import { Button, Container } from "@/components/ui";

type PricingPageSectionProps = {
  content: PricingPageContent;
  plans: PricingPlan[];
};

type Direction = "previous" | "next";

function splitPrice(priceLabel: string) {
  const match = priceLabel.match(/^(\d+)\s+(.+)$/);

  if (!match) {
    return { amount: priceLabel, suffix: "" };
  }

  return { amount: match[1], suffix: match[2] };
}

function PriceText({ priceLabel, compact = false }: { priceLabel: string; compact?: boolean }) {
  const { amount, suffix } = splitPrice(priceLabel);

  return (
    <p
      className={
        compact
          ? "text-[clamp(1.05rem,2vw,1.35rem)] font-semibold leading-none tracking-[-0.015em] text-white"
          : "text-[clamp(1.45rem,3.2vw,2rem)] font-semibold leading-none tracking-[-0.025em] text-white"
      }
    >
      <span>{amount}</span>
      {suffix ? (
        <span className="ml-1.5 text-[0.72em] font-medium tracking-normal text-white/62">
          {suffix}
        </span>
      ) : null}
    </p>
  );
}

function SectionDivider() {
  return <div aria-hidden="true" className="h-px w-full bg-white/18" />;
}

function MembershipCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className="mx-auto flex min-h-[12.5rem] w-full max-w-[15.5rem] flex-col justify-between rounded-[1rem] border border-white/16 bg-[linear-gradient(180deg,rgb(20_22_25_/_0.84),rgb(8_10_12_/_0.82))] px-5 py-6 text-center shadow-[0_22px_70px_rgb(0_0_0_/_0.34)] backdrop-blur-md sm:min-h-[13.5rem] sm:max-w-[16.5rem] sm:px-6">
      <div>
        <h2 className="mx-auto max-w-[18ch] text-balance text-[clamp(1.02rem,1.9vw,1.22rem)] font-medium leading-[1.18] tracking-[-0.012em] text-white">
          {plan.name}
        </h2>
        {plan.summary ? (
          <p className="mx-auto mt-3 max-w-[24ch] text-[0.72rem] leading-[1.45] text-white/62">
            {plan.summary}
          </p>
        ) : null}
      </div>
      <div className="mt-5 space-y-5">
        <div className="h-px w-full bg-white/45" />
        <PriceText priceLabel={plan.priceLabel} />
      </div>
    </article>
  );
}

function CompactPriceCard({
  item,
  className = "",
}: {
  item: PricingSimpleItem;
  className?: string;
}) {
  return (
    <article
      className={`rounded-[0.8rem] border border-white/16 bg-[linear-gradient(180deg,rgb(18_20_23_/_0.78),rgb(8_10_12_/_0.72))] px-5 py-4 text-center shadow-[0_16px_46px_rgb(0_0_0_/_0.2)] backdrop-blur-md ${className}`}
    >
      <h3 className="text-balance text-[0.88rem] font-medium leading-[1.22] tracking-[0.005em] text-white">
        {item.title}
      </h3>
      {item.summary ? (
        <p className="mt-1 text-[0.72rem] leading-[1.35] text-white/58">
          {item.summary}
        </p>
      ) : null}
      <div className="mx-auto my-3 h-px w-full max-w-[9.5rem] bg-white/40" />
      <PriceText compact priceLabel={item.priceLabel} />
    </article>
  );
}

function CarouselButton({
  direction,
  onClick,
}: {
  direction: Direction;
  onClick: () => void;
}) {
  const isPrevious = direction === "previous";

  return (
    <button
      aria-label={isPrevious ? "Показати попередній абонемент" : "Показати наступний абонемент"}
      className="group flex h-16 w-14 shrink-0 items-center justify-center text-white/82 transition-colors hover:text-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary-focus)] sm:h-20 sm:w-16"
      onClick={onClick}
      type="button"
    >
      <span
        aria-hidden="true"
        className={`relative block h-10 w-7 ${isPrevious ? "" : "rotate-180"}`}
      >
        <span className="absolute left-2 top-1/2 h-[3px] w-8 origin-left -translate-y-1/2 rotate-[132deg] rounded-full bg-current transition-colors motion-reduce:transition-none" />
        <span className="absolute left-2 top-1/2 h-[3px] w-8 origin-left -translate-y-1/2 -rotate-[132deg] rounded-full bg-current transition-colors motion-reduce:transition-none" />
      </span>
    </button>
  );
}

export function PricingPageSection({
  content,
  plans,
}: PricingPageSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const activePlan = plans[activeIndex] ?? plans[0];

  const move = (direction: Direction) => {
    setActiveIndex((current) => {
      if (direction === "previous") {
        return current === 0 ? plans.length - 1 : current - 1;
      }

      return current === plans.length - 1 ? 0 : current + 1;
    });
  };

  if (!activePlan) {
    return null;
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--color-canvas)] text-white">
      <div className="absolute inset-0">
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-[center_32%]"
          fill
          priority
          sizes="100vw"
          src={content.backgroundImageSrc}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(4_6_8_/_0.76)_0%,rgb(4_6_8_/_0.84)_42%,rgb(4_6_8_/_0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgb(218_41_28_/_0.12),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_8_8_/_0.54)_0%,transparent_42%,rgb(8_8_8_/_0.38)_100%)]" />
      </div>

      <Container className="relative z-10 py-24 sm:py-28 lg:py-32" size="wide">
        <div className="mx-auto flex w-full max-w-[43rem] flex-col gap-7 sm:gap-8">
          <section aria-labelledby="pricing-memberships" className="space-y-6">
            <h1
              className="text-[clamp(1.9rem,4vw,3rem)] font-medium leading-none tracking-[-0.04em] text-white"
              id="pricing-memberships"
            >
              {content.title}
            </h1>
            <div
              aria-label="Абонементи"
              className="outline-none"
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  move("previous");
                }

                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  move("next");
                }
              }}
              onTouchEnd={(event) => {
                const touchStartX = touchStartXRef.current;
                touchStartXRef.current = null;

                if (touchStartX === null) {
                  return;
                }

                const deltaX = event.changedTouches[0].clientX - touchStartX;

                if (Math.abs(deltaX) < 42) {
                  return;
                }

                move(deltaX > 0 ? "previous" : "next");
              }}
              onTouchStart={(event) => {
                touchStartXRef.current = event.touches[0].clientX;
              }}
              role="region"
              tabIndex={0}
            >
              <div className="grid grid-cols-[3.25rem_minmax(0,1fr)_3.25rem] items-center gap-1 sm:grid-cols-[4rem_minmax(0,1fr)_4rem] sm:gap-4">
                <CarouselButton direction="previous" onClick={() => move("previous")} />
                <div className="min-w-0 overflow-hidden">
                  <MembershipCard key={activePlan.id} plan={activePlan} />
                </div>
                <CarouselButton direction="next" onClick={() => move("next")} />
              </div>
            </div>
          </section>

          <SectionDivider />

          <section aria-label={content.oneTimeTraining.title} className="flex justify-center">
            <CompactPriceCard
              className="w-full max-w-[23rem] py-3.5 sm:max-w-[27rem]"
              item={content.oneTimeTraining}
            />
          </section>

          <SectionDivider />

          <section aria-labelledby="pricing-personal" className="space-y-4">
            <h2
              className="text-[clamp(1.25rem,2.4vw,1.65rem)] font-medium leading-tight tracking-[-0.02em] text-white"
              id="pricing-personal"
            >
              {content.personalTrainingTitle}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {content.personalTraining.map((item) => (
                <CompactPriceCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          <SectionDivider />

          <section className="flex flex-col items-center pt-1 text-center">
            <p className="text-balance text-[clamp(1rem,2vw,1.2rem)] font-medium leading-tight text-white">
              {content.trialText}
            </p>
            <Button
              className="mt-8 w-full max-w-[21rem] border-[var(--color-primary)] bg-transparent px-8 py-4 text-center text-[0.82rem] leading-[1.45] !text-white hover:border-[var(--color-primary-hover)] hover:bg-[rgb(218_41_28_/_0.12)] focus-visible:outline-[var(--color-primary-focus)] sm:w-auto"
              href={content.ctaHref}
              rel={content.ctaExternal ? "noopener noreferrer" : undefined}
              size="lg"
              target={content.ctaExternal ? "_blank" : undefined}
              variant="secondary"
            >
              {content.ctaLabel}
            </Button>
          </section>
        </div>
      </Container>
    </section>
  );
}
