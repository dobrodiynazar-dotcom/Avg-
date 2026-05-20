import type { ScheduleSession } from "@/types/content";

import { Card } from "@/components/ui";

type ScheduleGridProps = {
  sessions: ScheduleSession[];
};

export function ScheduleGrid({ sessions }: ScheduleGridProps) {
  return (
    <>
      <div className="grid gap-4 lg:hidden">
        {sessions.map((session) => (
          <Card key={session.id} className="space-y-4" padding="md">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-primary)]">
                {session.group}
              </p>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                {session.audience}
              </h3>
            </div>

            <div className="grid gap-3 text-sm text-[var(--color-ink-muted)] sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
                  Дні
                </p>
                <p>{session.days.join(" · ")}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
                  Час
                </p>
                <p>{session.timeLabel}</p>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
                  Локація
                </p>
                <p>{session.locationLabel}</p>
              </div>
              {session.note ? (
                <div className="space-y-1 sm:col-span-2">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
                    Примітка
                  </p>
                  <p className="text-[var(--color-ink-subtle)]">{session.note}</p>
                </div>
              ) : null}
            </div>
          </Card>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] lg:block">
        <table className="w-full border-collapse">
          <thead className="bg-[var(--color-surface-2)]">
            <tr className="text-left text-xs uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
              <th className="px-5 py-4 font-medium" scope="col">
                Група
              </th>
              <th className="px-5 py-4 font-medium" scope="col">
                Формат
              </th>
              <th className="px-5 py-4 font-medium" scope="col">
                Дні
              </th>
              <th className="px-5 py-4 font-medium" scope="col">
                Час
              </th>
              <th className="px-5 py-4 font-medium" scope="col">
                Локація
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr
                key={session.id}
                className="border-t border-[var(--color-hairline)] text-sm text-[var(--color-ink-muted)]"
              >
                <td className="px-5 py-4 text-[var(--color-ink)]">{session.group}</td>
                <td className="px-5 py-4">{session.audience}</td>
                <td className="px-5 py-4">{session.days.join(" · ")}</td>
                <td className="px-5 py-4">{session.timeLabel}</td>
                <td className="px-5 py-4">
                  <div className="space-y-1">
                    <p>{session.locationLabel}</p>
                    {session.note ? (
                      <p className="text-xs text-[var(--color-ink-subtle)]">{session.note}</p>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
