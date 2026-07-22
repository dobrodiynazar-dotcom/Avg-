import Image from "next/image";

import type { SchedulePreviewGroup } from "@/types/content";

import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

type SchedulePreviewSectionProps = {
  content: {
    title: string;
    ctaHref: string;
    ctaLabel: string;
    backgroundImageSrc: string;
  };
  groups: SchedulePreviewGroup[];
};

export function SchedulePreviewSection({
  content,
  groups,
}: SchedulePreviewSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-inverse-canvas)] py-12 text-white sm:py-14 lg:py-16">
      <div className="absolute inset-0">
        <Image
          alt=""
          aria-hidden="true"
          className="-scale-x-100 object-cover object-center"
          fill
          priority={false}
          sizes="100vw"
          src={content.backgroundImageSrc}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_8_10_/_0.62)_0%,rgb(6_8_10_/_0.68)_32%,rgb(6_8_10_/_0.76)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(255_255_255_/_0.05),transparent_44%)]" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="mx-auto flex max-w-[56rem] flex-col items-center gap-6 text-center sm:gap-7 lg:gap-8">
          <h2 className="max-w-[12ch] text-balance text-[clamp(2.05rem,4.2vw,3.35rem)] font-medium leading-[1] tracking-[-0.055em] text-white">
            {content.title}
          </h2>

          <div className="grid w-full gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
            {groups.map((group) => (
              <div
                key={group.id}
                aria-label={group.label}
                className="flex min-h-28 items-center justify-center rounded-[var(--radius-card-lg)] border border-[rgb(255_255_255_/_0.24)] bg-[rgb(255_255_255_/_0.08)] px-5 py-7 text-center shadow-[0_16px_44px_rgb(0_0_0_/_0.16)] backdrop-blur-md sm:min-h-32 sm:px-6 sm:py-8 lg:min-h-36"
              >
                <h3
                  className={cn(
                    "mx-auto max-w-[12rem] text-balance text-center text-[clamp(1.2rem,1.85vw,1.72rem)] font-medium leading-[1.2] tracking-[0.01em] text-white",
                    group.id === "kids-8-11" &&
                      "max-w-none whitespace-nowrap text-[clamp(1.05rem,4.2vw,1.58rem)] sm:text-[clamp(1.2rem,1.85vw,1.72rem)]",
                  )}
                >
                  {group.label}
                </h3>
              </div>
            ))}
          </div>

          <Button
            className="min-h-0 max-w-[17rem] whitespace-pre-line border-[var(--color-primary)] bg-[rgb(0_0_0_/_0.12)] px-7 py-3.5 text-[0.82rem] leading-[1.4] !text-white hover:bg-[rgb(255_255_255_/_0.04)] sm:max-w-[18rem]"
            href={content.ctaHref}
            size="lg"
            variant="secondary"
          >
            {content.ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
