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
            className="border border-[var(--color-hairline-strong)] bg-[var(--color-inverse-canvas)] px-4 py-4 text-[var(--color-inverse-ink)]"
          >
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[rgb(24_24_24_/_0.58)]">{session.group}</p>
              <h3 className="text-[1.1rem] font-semibold tracking-[-0.03rem] text-[var(--color-inverse-ink)]">
                {session.audience}
              </h3>
            </div>

            <div className="mt-4 grid gap-3 text-[0.8125rem] leading-6 text-[rgb(24_24_24_/_0.72)] sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[rgb(24_24_24_/_0.52)]">Дні</p>
                <p>{session.days.join(" · ")}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[rgb(24_24_24_/_0.52)]">Час</p>
                <p>{session.timeLabel}</p>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[rgb(24_24_24_/_0.52)]">
                  Локація
                </p>
                <p>{session.locationLabel}</p>
              </div>
              {session.note ? (
                <div className="space-y-1 sm:col-span-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[rgb(24_24_24_/_0.52)]">
                    Примітка
                  </p>
                  <p className="text-[rgb(24_24_24_/_0.58)]">{session.note}</p>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="hidden overflow-hidden border border-[var(--color-hairline-strong)] bg-[var(--color-inverse-canvas)] lg:block">
        <table className="w-full border-collapse">
          <caption className="sr-only">Попередній розклад тренувань Avangard Jiu-Jitsu</caption>
          <thead className="border-b border-[var(--color-hairline-strong)]">
            <tr className="text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-[rgb(24_24_24_/_0.52)]">
              <th className="px-5 py-4" scope="col">
                Група
              </th>
              <th className="px-5 py-4" scope="col">
                Формат
              </th>
              <th className="px-5 py-4" scope="col">
                Дні
              </th>
              <th className="px-5 py-4" scope="col">
                Час
              </th>
              <th className="px-5 py-4" scope="col">
                Локація
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr
                key={session.id}
                className="border-t border-[var(--color-hairline-tertiary)] text-[0.875rem] text-[rgb(24_24_24_/_0.72)]"
              >
                <th className="px-5 py-4 text-left font-semibold text-[var(--color-inverse-ink)]" scope="row">
                  {session.group}
                </th>
                <td className="px-5 py-4">{session.audience}</td>
                <td className="px-5 py-4">{session.days.join(" · ")}</td>
                <td className="px-5 py-4">{session.timeLabel}</td>
                <td className="px-5 py-4">
                  <div className="space-y-1">
                    <p>{session.locationLabel}</p>
                    {session.note ? (
                      <p className="text-[0.75rem] text-[rgb(24_24_24_/_0.56)]">{session.note}</p>
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
