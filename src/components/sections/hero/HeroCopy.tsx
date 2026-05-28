type HeroCopyProps = {
  heroLabel: string;
  locationLabel: string;
  titleLead: string;
  subtitle: string;
  supportingText: string;
};

export function HeroCopy({
  heroLabel,
  locationLabel,
  titleLead,
  subtitle,
  supportingText,
}: HeroCopyProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
        <span className="text-[var(--color-primary)]">{heroLabel}</span>
        <span>{locationLabel}</span>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <h1 className="mx-auto max-w-[12ch] text-balance text-[clamp(2.8rem,7vw,6.5rem)] font-medium uppercase leading-[0.92] tracking-[-0.1rem] text-[var(--color-ink)]">
          {titleLead}
        </h1>
        <p className="mx-auto max-w-[28ch] text-balance text-[clamp(1rem,2.1vw,1.5rem)] font-medium leading-[1.25] text-[rgb(255_255_255_/_0.92)]">
          {subtitle}
        </p>
        <p className="mx-auto max-w-[36ch] text-balance text-[0.95rem] leading-7 text-[var(--color-ink-muted)] sm:text-[1rem]">
          {supportingText}
        </p>
      </div>
    </div>
  );
}
