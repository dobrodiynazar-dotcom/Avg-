import type { StatItem } from "@/types/content";

type HeroStatsProps = {
  stats: StatItem[];
};

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="grid gap-3 border-t border-[rgb(255_255_255_/_0.12)] pt-5 sm:grid-cols-3 sm:pt-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`space-y-2 ${index > 0 ? "sm:border-l sm:border-[rgb(255_255_255_/_0.1)] sm:pl-4 lg:pl-6" : ""}`}
        >
          <p className="hero-stat-value text-[var(--color-ink)]">{stat.value}</p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)]">
            {stat.label}
          </p>
          {stat.detail ? (
            <p className="max-w-[16rem] text-[0.8125rem] leading-6 text-[var(--color-ink-muted)]">
              {stat.detail}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
