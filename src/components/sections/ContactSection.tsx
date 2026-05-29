"use client";

import Image from "next/image";
import { useState } from "react";

import type { LocationSectionContent } from "@/types/content";

import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

type ContactSectionProps = {
  content: LocationSectionContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = content.locations[activeIndex] ?? content.locations[0];

  if (!activeLocation) {
    return null;
  }

  const isFirstLocation = activeIndex === 0;

  return (
    <section className="section-frame relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-[center_28%] sm:object-[center_25%] lg:object-[center_22%]"
          fill
          sizes="100vw"
          src={content.backgroundImageSrc}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(4_6_8_/_0.76)_0%,rgb(4_6_8_/_0.82)_38%,rgb(4_6_8_/_0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(255_255_255_/_0.08),transparent_32%)]" />
      </div>

      <Container className="relative z-10 grid gap-8 lg:items-start" size="wide">
        <h2 className="max-w-[24ch] text-pretty text-[clamp(2.1rem,4.8vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.07rem] text-[var(--color-ink)] sm:max-w-none sm:whitespace-nowrap">
          {content.title}
        </h2>

        <div className="rounded-[var(--radius-card-lg)] border border-[rgb(255_255_255_/_0.14)] bg-[linear-gradient(180deg,rgb(10_12_15_/_0.54),rgb(8_10_12_/_0.72))] p-4 shadow-[0_24px_80px_rgb(0_0_0_/_0.26)] backdrop-blur-xl sm:p-5 lg:p-7">
          <div className="rounded-[calc(var(--radius-card-lg)-0.35rem)] border border-[rgb(255_255_255_/_0.08)] bg-[rgb(255_255_255_/_0.04)] p-4 sm:p-5 lg:p-6">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,0.84fr)_auto_minmax(0,1.16fr)] lg:items-center">
              <div className="order-1 rounded-[var(--radius-card-md)] border border-[rgb(255_255_255_/_0.12)] bg-[linear-gradient(180deg,rgb(255_255_255_/_0.08),rgb(255_255_255_/_0.03))] px-5 py-6 shadow-[0_10px_30px_rgb(0_0_0_/_0.14)] backdrop-blur-md sm:px-6 lg:min-h-[24rem] lg:py-8">
                <div className="flex h-full flex-col gap-10 lg:gap-14">
                  <div className="space-y-9 lg:space-y-12">
                    <h3 className="text-[clamp(1.7rem,3vw,2.35rem)] font-medium leading-[1.04] tracking-[-0.05rem] text-[var(--color-ink)]">
                      {activeLocation.title}
                    </h3>
                    <div className="border-l border-[rgb(255_255_255_/_0.18)] pl-5 lg:mt-4">
                      <p className="text-[clamp(1.1rem,2vw,1.45rem)] font-medium leading-[1.45] tracking-[-0.02rem] text-[rgb(255_255_255_/_0.9)]">
                        {activeLocation.addressLines[0]}
                        <br />
                        {activeLocation.addressLines[1]}
                      </p>
                    </div>
                  </div>

                  <div className="hidden pt-2 lg:block lg:pt-6">
                    <Button
                      className="border-[var(--color-primary)] bg-[rgb(0_0_0_/_0.12)] px-8 py-4 text-center text-[0.88rem] leading-[1.45] !text-white hover:bg-[rgb(255_255_255_/_0.04)]"
                      href={activeLocation.mapHref}
                      rel="noreferrer"
                      size="lg"
                      target="_blank"
                      variant="secondary"
                    >
                      {content.mapButtonLabel}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="order-3 flex justify-center lg:order-2">
                <button
                  aria-label={
                    isFirstLocation ? "Перемкнути на локацію 2" : "Перемкнути на локацію 1"
                  }
                  className="group inline-flex h-20 w-20 items-center justify-center text-[var(--color-ink)] transition-opacity duration-200 hover:opacity-75 lg:h-24 lg:w-24"
                  onClick={() =>
                    setActiveIndex((currentIndex) =>
                      currentIndex === 0 ? 1 : 0,
                    )
                  }
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    className={cn(
                      "h-16 w-16 stroke-current stroke-[2.25] transition-transform duration-200 group-hover:scale-110 lg:h-20 lg:w-20",
                      isFirstLocation ? "translate-x-[1px]" : "-translate-x-[1px]",
                    )}
                    fill="none"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isFirstLocation ? (
                      <>
                        <path d="M18 12 L42 32" strokeLinecap="round" />
                        <path d="M18 52 L42 32" strokeLinecap="round" />
                      </>
                    ) : (
                      <>
                        <path d="M46 12 L22 32" strokeLinecap="round" />
                        <path d="M46 52 L22 32" strokeLinecap="round" />
                      </>
                    )}
                  </svg>
                </button>
              </div>

              <div className="order-2 overflow-hidden rounded-[var(--radius-card-md)] border border-[rgb(255_255_255_/_0.12)] bg-[rgb(255_255_255_/_0.05)] shadow-[0_10px_30px_rgb(0_0_0_/_0.14)] lg:order-3">
                <div className="relative aspect-[16/11] min-h-[17rem] bg-[rgb(12_16_20_/_0.8)] sm:min-h-[20rem]">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={activeLocation.mapEmbedSrc}
                    title={`${activeLocation.title} map`}
                  />
                </div>
              </div>

              <div className="order-4 flex justify-center pt-1 lg:hidden">
                <Button
                  className="w-full max-w-[22rem] border-[var(--color-primary)] bg-[rgb(0_0_0_/_0.12)] px-8 py-4 text-center text-[0.88rem] leading-[1.45] !text-white hover:bg-[rgb(255_255_255_/_0.04)]"
                  href={activeLocation.mapHref}
                  rel="noreferrer"
                  size="lg"
                  target="_blank"
                  variant="secondary"
                >
                  {content.mapButtonLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
