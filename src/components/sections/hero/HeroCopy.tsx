type HeroCopyProps = {
  heroLabel: string;
  locationLabel: string;
  titleLead: string;
  titleLines: string[];
};

export function HeroCopy({
  heroLabel,
  locationLabel,
  titleLead,
  titleLines,
}: HeroCopyProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
        <span className="text-[var(--color-primary)]">{heroLabel}</span>
        <span>{locationLabel}</span>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <h1 className="mx-auto max-w-[14ch] text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-medium uppercase leading-[0.95] tracking-[-0.08rem] text-[var(--color-ink)]">
          {titleLead}
        </h1>
        <div className="space-y-2">
          {titleLines.map((line) => (
            <p
              key={line}
              className="mx-auto max-w-[28ch] text-balance text-[clamp(1rem,2vw,1.45rem)] font-medium uppercase leading-[1.2] tracking-[0.03em] text-[rgb(255_255_255_/_0.92)]"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
