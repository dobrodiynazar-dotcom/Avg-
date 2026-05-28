type HeroCopyProps = {
  heroLabel: string;
  locationLabel: string;
  title: string;
};

export function HeroCopy({
  heroLabel,
  locationLabel,
  title,
}: HeroCopyProps) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
        <span className="text-[var(--color-primary)]">{heroLabel}</span>
        <span>{locationLabel}</span>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <h1 className="max-w-[12ch] text-balance text-[var(--color-ink)]">{title}</h1>
      </div>
    </>
  );
}
