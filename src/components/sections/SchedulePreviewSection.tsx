import Image from "next/image";

import type { SchedulePreviewGroup } from "@/types/content";

import { Button, Container } from "@/components/ui";

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
    <section className="section-frame relative isolate overflow-hidden border-b border-[rgb(255_255_255_/_0.08)] bg-[var(--color-inverse-canvas)] text-white">
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-2 py-16 text-center sm:gap-10 sm:py-20 lg:gap-12 lg:py-24">
          <h2 className="max-w-[12ch] text-balance text-[clamp(2.7rem,5.8vw,5rem)] font-medium leading-[0.94] tracking-[-0.08em] text-white">
            {content.title}
          </h2>

          <div className="grid w-full gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
            {groups.map((group) => (
              <div
                key={group.id}
                aria-label={group.label}
                className="flex min-h-40 items-center justify-center rounded-[var(--radius-card-lg)] border border-[rgb(255_255_255_/_0.24)] bg-[rgb(255_255_255_/_0.08)] px-6 py-10 text-center shadow-[0_20px_60px_rgb(0_0_0_/_0.18)] backdrop-blur-md sm:min-h-44 sm:px-8"
              >
                <h3 className="text-balance text-[clamp(1.75rem,3vw,3rem)] font-medium leading-[1.04] tracking-[-0.06em] text-white">
                  {group.label}
                </h3>
              </div>
            ))}
          </div>

          <Button
            className="min-h-0 max-w-[18rem] whitespace-pre-line border-[var(--color-primary)] bg-[rgb(0_0_0_/_0.12)] px-8 py-4 text-[0.88rem] leading-[1.45] !text-white hover:bg-[rgb(255_255_255_/_0.04)] sm:max-w-[19.5rem]"
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
