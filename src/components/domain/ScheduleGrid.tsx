import type { ScheduleSession } from "@/types/content";

import { Card } from "@/components/ui";

type ScheduleGridProps = {
  sessions: ScheduleSession[];
};

type GroupedSchedule = {
  group: string;
  sessions: ScheduleSession[];
};

export function ScheduleGrid({ sessions }: ScheduleGridProps) {
  const groupedSessions = sessions.reduce<GroupedSchedule[]>((groups, session) => {
    const existingGroup = groups.find((group) => group.group === session.group);

    if (existingGroup) {
      existingGroup.sessions.push(session);
      return groups;
    }

    groups.push({
      group: session.group,
      sessions: [session],
    });

    return groups;
  }, []);

  return (
    <div
      aria-label="Розклад тренувань Avangard Jiu-Jitsu"
      className="grid gap-4 md:grid-cols-2 xl:gap-5"
    >
      {groupedSessions.map((group) => (
        <Card
          key={group.group}
          className="border-t-2 border-t-[var(--color-primary)]"
          padding="md"
          variant="lifted"
        >
          <article className="flex h-full flex-col gap-6">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgb(24_24_24_/_0.52)]">
                Група
              </p>
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--color-hairline-strong)] pb-4">
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-medium tracking-[-0.05rem] text-[var(--color-inverse-ink)]">
                  {group.group}
                </h3>
                <p className="text-[0.75rem] uppercase tracking-[0.12em] text-[rgb(24_24_24_/_0.52)]">
                  {group.sessions.length === 1
                    ? "Окремий формат"
                    : `${group.sessions.length} формати`}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {group.sessions.map((session, index) => (
                <section
                  key={session.id}
                  aria-label={`${group.group}: ${session.audience}`}
                  className={`space-y-4 ${
                    index > 0
                      ? "border-t border-[var(--color-hairline-tertiary)] pt-4"
                      : ""
                  }`}
                >
                  <div className="space-y-1">
                    <p className="text-[0.95rem] font-semibold leading-6 text-[var(--color-inverse-ink)]">
                      {session.audience}
                    </p>
                    <p className="text-[0.8125rem] leading-6 text-[rgb(24_24_24_/_0.56)]">
                      {session.locationLabel}
                    </p>
                  </div>

                  <dl className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[rgb(24_24_24_/_0.48)]">
                        Дні
                      </dt>
                      <dd className="text-[0.875rem] leading-6 text-[rgb(24_24_24_/_0.76)]">
                        {session.days.join(" · ")}
                      </dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[rgb(24_24_24_/_0.48)]">
                        Час
                      </dt>
                      <dd className="text-[0.875rem] leading-6 text-[rgb(24_24_24_/_0.76)]">
                        {session.timeLabel}
                      </dd>
                    </div>
                  </dl>

                  {session.note ? (
                    <p className="border-l border-[var(--color-primary)] pl-4 text-[0.8125rem] leading-6 text-[rgb(24_24_24_/_0.6)]">
                      {session.note}
                    </p>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </Card>
      ))}
    </div>
  );
}
