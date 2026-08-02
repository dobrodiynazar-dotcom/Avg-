"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

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
          ? "text-[clamp(1.35rem,2.4vw,1.85rem)] font-bold leading-none tracking-[-0.04em] text-white"
          : "text-[clamp(2.15rem,5vw,3.4rem)] font-bold leading-none tracking-[-0.06em] text-white"
      }
    >
      <span>{amount}</span>
      {suffix ? (
        <span className="ml-2 text-[0.55em] font-semibold tracking-[-0.02em] text-white/58">
          {suffix}
        </span>
      ) : null}
    </p>
  );
}

function MembershipCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className="mx-auto flex min-h-[15.5rem] w-full max-w-[20rem] flex-col justify-between rounded-[var(--radius-card-md)] border border-white/14 bg-[linear-gradient(180deg,rgb(18_20_24_/_0.82),rgb(8_10_12_/_0.76))] px-5 py-6 text-center shadow-[0_22px_70px_rgb(0_0_0_/_0.32)] backdrop-blur-md sm:min-h-[16.5rem] sm:px-6">
      <div className="space-y-3">
        <h2 className="mx-auto max-w-[18ch] text-balance text-[clamp(1.15rem,2.1vw,1.55rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white">
          {plan.name}
        </h2>
        {plan.summary ? (
          <p className="mx-auto max-w-[26ch] text-[0.76rem] leading-[1.45] text-white/62">
            {plan.summary}
          </p>
        ) : null}
      </div>
      <div className="mt-6 space-y-5">
        <div className="mx-auto h-px w-full max-w-[12rem] bg-[linear-gradient(90deg,transparent,rgb(218_41_28_/_0.8),transparent)]" />
        <PriceText priceLabel={plan.priceLabel} />
      </div>
    </article>
  );
}

function CompactPriceCard({ item }: { item: PricingSimpleItem }) {
  return (
    <article className="rounded-[var(--radius-card-md)] border border-white/12 bg-[rgb(10_12_15_/_0.62)] px-5 py-5 text-center shadow-[0_16px_46px_rgb(0_0_0_/_0.2)] backdrop-blur-md">
      <h3 className="text-balance text-[0.98rem] font-semibold leading-[1.2] text-white">
        {item.title}
      </h3>
      <div className="mx-auto my-4 h-px w-full max-w-[10rem] bg-[rgb(218_41_28_/_0.62)]" />
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
      className="group flex h-14 w-14 items-center justify-center text-white/86 transition-colors hover:text-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary-focus)]"
      onClick={onClick}
      type="button"
    >
      <span
        aria-hidden="true"
        className={`relative block h-9 w-6 ${isPrevious ? "" : "rotate-180"}`}
      >
        <span className="absolute left-2 top-1/2 h-[2px] w-7 origin-left -translate-y-1/2 rotate-[135deg] rounded-full bg-current transition-colors" />
        <span className="absolute left-2 top-1/2 h-[2px] w-7 origin-left -translate-y-1/2 -rotate-[135deg] rounded-full bg-current transition-colors" />
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

  const inactivePlans = useMemo(
    () => plans.filter((_, index) => index !== activeIndex),
    [activeIndex, plans],
  );

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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(4_6_8_/_0.76)_0%,rgb(4_6_8_/_0.82)_38%,rgb(4_6_8_/_0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgb(218_41_28_/_0.13),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_8_8_/_0.46)_0%,transparent_42%,rgb(8_8_8_/_0.34)_100%)]" />
      </div>

      <Container className="relative z-10 flex min-h-screen items-start py-28 sm:py-32 lg:py-36" size="wide">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-7 lg:gap-8">
          <h1 className="max-w-[10ch] text-balance text-[clamp(2.8rem,7vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.075em] text-white">
            {content.title}
          </h1>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-start">
            <div
              aria-label="Абонементи"
              className="rounded-[var(--radius-card-lg)] border border-white/14 bg-[linear-gradient(180deg,rgb(10_12_15_/_0.58),rgb(8_10_12_/_0.74))] p-4 shadow-[0_24px_80px_rgb(0_0_0_/_0.28)] backdrop-blur-xl sm:p-6"
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
              <div className="flex items-center justify-center gap-2 sm:gap-5">
                <CarouselButton direction="previous" onClick={() => move("previous")} />
                <div className="min-w-0 flex-1">
                  <MembershipCard key={activePlan.id} plan={activePlan} />
                </div>
                <CarouselButton direction="next" onClick={() => move("next")} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {inactivePlans.map((plan) => (
                <article
                  key={plan.id}
                  className="rounded-[var(--radius-card-md)] border border-white/10 bg-[rgb(10_12_15_/_0.5)] px-4 py-4 text-center backdrop-blur-md"
                >
                  <h3 className="mx-auto max-w-[16ch] text-balance text-[0.92rem] font-semibold leading-[1.18] text-white/86">
                    {plan.name}
                  </h3>
                  <div className="mx-auto my-3 h-px w-full max-w-[8rem] bg-[rgb(218_41_28_/_0.5)]" />
                  <PriceText compact priceLabel={plan.priceLabel} />
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <CompactPriceCard item={content.oneTimeTraining} />

            <div className="rounded-[var(--radius-card-lg)] border border-white/12 bg-[rgb(10_12_15_/_0.56)] p-4 backdrop-blur-md sm:p-5">
              <h2 className="mb-4 text-[clamp(1.15rem,2.4vw,1.55rem)] font-semibold leading-tight tracking-[-0.03em] text-white">
                {content.personalTrainingTitle}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {content.personalTraining.map((item) => (
                  <CompactPriceCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[36rem] flex-col items-center gap-5 border-t border-white/12 pt-7 text-center">
            <p className="text-balance text-[clamp(1.05rem,2vw,1.35rem)] font-semibold leading-tight text-white">
              {content.trialText}
            </p>
            <Button
              className="w-full max-w-[24rem] border-[var(--color-primary)] bg-transparent px-8 py-4 text-center text-[0.88rem] leading-[1.45] !text-white hover:border-[var(--color-primary-hover)] hover:bg-[rgb(218_41_28_/_0.12)] focus-visible:outline-[var(--color-primary-focus)] sm:w-auto"
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
