"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import type { ScheduleLocationSchedule, SchedulePageContent } from "@/types/content";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

type SchedulePageSectionProps = {
  content: SchedulePageContent;
  locations: ScheduleLocationSchedule[];
};

export function SchedulePageSection({
  content,
  locations,
}: SchedulePageSectionProps) {
  const fallbackLocationId = locations[0]?.id ?? "";
  const [activeLocationId, setActiveLocationId] = useState(
    content.defaultLocationId || fallbackLocationId,
  );

  const activeLocation = useMemo(
    () =>
      locations.find((location) => location.id === activeLocationId) ??
      locations[0],
    [activeLocationId, locations],
  );

  if (!activeLocation) {
    return null;
  }

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

      <Container className="relative z-10 flex min-h-screen items-start py-28 sm:py-32 lg:py-36" size="wide">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:gap-10">
          <div className="space-y-6 text-center">
            <h1 className="text-balance text-[clamp(2.8rem,7vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.075em] text-white">
              {content.title}
            </h1>

            <div
              aria-label="Оберіть локацію"
              className="mx-auto inline-flex w-full max-w-[34rem] flex-wrap items-center justify-center gap-3 rounded-[var(--radius-card-md)] border border-[rgb(255_255_255_/_0.14)] bg-[rgb(6_8_10_/_0.28)] p-2 backdrop-blur-md"
              role="tablist"
            >
              {locations.map((location) => {
                const isActive = location.id === activeLocation.id;

                return (
                  <button
                    key={location.id}
                    aria-selected={isActive}
                    className={cn(
                      "min-h-12 rounded-[var(--radius-button)] border px-5 py-3 text-sm font-semibold tracking-[0.08em] text-white transition-colors duration-200",
                      isActive
                        ? "border-[var(--color-primary)] bg-[rgb(218_41_28_/_0.22)] shadow-[0_0_0_1px_rgb(218_41_28_/_0.25)]"
                        : "border-[rgb(255_255_255_/_0.18)] bg-[rgb(255_255_255_/_0.04)] hover:border-[rgb(255_255_255_/_0.34)] hover:bg-[rgb(255_255_255_/_0.08)]",
                    )}
                    onClick={() => setActiveLocationId(location.id)}
                    role="tab"
                    type="button"
                  >
                    {location.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[var(--radius-card-lg)] border border-[rgb(255_255_255_/_0.14)] bg-[linear-gradient(180deg,rgb(10_12_15_/_0.54),rgb(8_10_12_/_0.72))] p-4 shadow-[0_24px_80px_rgb(0_0_0_/_0.26)] backdrop-blur-xl sm:p-5 lg:p-7">
            <div className="rounded-[calc(var(--radius-card-lg)-0.35rem)] border border-[rgb(255_255_255_/_0.08)] bg-[rgb(255_255_255_/_0.04)] p-4 sm:p-5 lg:p-6">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-[rgb(255_255_255_/_0.08)] pb-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.22em] text-[rgb(255_255_255_/_0.54)]">
                    Активна локація
                  </p>
                  <h2 className="text-balance text-[clamp(1.55rem,3vw,2.4rem)] font-medium leading-[1] tracking-[-0.05em] text-white">
                    {activeLocation.label}
                  </h2>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
                {activeLocation.days.map((day) => (
                  <section
                    key={day.id}
                    aria-labelledby={`schedule-day-${day.id}`}
                    className="flex min-h-full flex-col rounded-[var(--radius-card-md)] border border-[rgb(255_255_255_/_0.12)] bg-[linear-gradient(180deg,rgb(255_255_255_/_0.08),rgb(255_255_255_/_0.03))] p-3 shadow-[0_10px_30px_rgb(0_0_0_/_0.14)] backdrop-blur-md"
                  >
                    <h3
                      id={`schedule-day-${day.id}`}
                      className="border-b border-[rgb(255_255_255_/_0.08)] pb-2 text-sm font-semibold tracking-[0.08em] text-white/72"
                    >
                      {day.label}
                    </h3>

                    <div className="mt-3 flex flex-1 flex-col gap-2.5">
                      {day.entries.map((entry) => (
                        <article
                          key={entry.id}
                          className="rounded-[var(--radius-card-sm)] border border-[rgb(255_255_255_/_0.14)] bg-[rgb(255_255_255_/_0.08)] px-3 py-3 backdrop-blur-md"
                        >
                          <p className="text-[1.05rem] font-semibold leading-none tracking-[-0.04em] text-white">
                            {entry.time}
                          </p>
                          <p className="mt-2 text-sm leading-[1.25] text-white/78">
                            {entry.group}
                          </p>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
