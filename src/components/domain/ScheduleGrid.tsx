import type { ScheduleSession } from "@/types/content";

type ScheduleGridProps = {
  sessions: ScheduleSession[];
};

export function ScheduleGrid({ sessions }: ScheduleGridProps) {
  return (
    <>
      <div className="grid gap-4 lg:hidden">
        {sessions.map((session) => (
          <article
            key={session.id}
            className="rounded-[var(--radius-md)] bg-[var(--color-surface-2)] px-4 py-4"
          >
            <div className="space-y-2">
              <p className="text-xs font-medium text-[var(--color-primary)]">{session.group}</p>
              <h3 className="text-lg font-semibold tracking-[-0.03rem] text-[var(--color-ink)]">
                {session.audience}
              </h3>
            </div>

            <div className="mt-4 grid gap-3 text-sm text-[var(--color-ink-muted)] sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-[11px] font-medium text-[var(--color-ink-subtle)]">Р”РЅС–</p>
                <p>{session.days.join(" В· ")}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-medium text-[var(--color-ink-subtle)]">Р§Р°СЃ</p>
                <p>{session.timeLabel}</p>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <p className="text-[11px] font-medium text-[var(--color-ink-subtle)]">
                  Р›РѕРєР°С†С–СЏ
                </p>
                <p>{session.locationLabel}</p>
              </div>
              {session.note ? (
                <div className="space-y-1 sm:col-span-2">
                  <p className="text-[11px] font-medium text-[var(--color-ink-subtle)]">
                    РџСЂРёРјС–С‚РєР°
                  </p>
                  <p className="text-[var(--color-ink-subtle)]">{session.note}</p>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-surface-2)] lg:block">
        <table className="w-full border-collapse">
          <thead className="border-b border-[var(--color-hairline)]">
            <tr className="text-left text-xs text-[var(--color-ink-subtle)]">
              <th className="px-5 py-4 font-medium" scope="col">
                Р“СЂСѓРїР°
              </th>
              <th className="px-5 py-4 font-medium" scope="col">
                Р¤РѕСЂРјР°С‚
              </th>
              <th className="px-5 py-4 font-medium" scope="col">
                Р”РЅС–
              </th>
              <th className="px-5 py-4 font-medium" scope="col">
                Р§Р°СЃ
              </th>
              <th className="px-5 py-4 font-medium" scope="col">
                Р›РѕРєР°С†С–СЏ
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
                <td className="px-5 py-4">{session.days.join(" В· ")}</td>
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
