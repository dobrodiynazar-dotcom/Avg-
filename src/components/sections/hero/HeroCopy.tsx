type HeroCopyProps = {
  titleLead: string;
  subtitle: string;
  supportingText: string;
};

export function HeroCopy({
  titleLead,
  subtitle,
  supportingText,
}: HeroCopyProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="space-y-4 sm:space-y-5">
        <h1 className="mx-auto max-w-[18ch] text-balance text-[clamp(3.2rem,10vw,7.4rem)] font-medium uppercase leading-[0.9] tracking-[-0.06rem] text-[var(--color-ink)] sm:max-w-[16ch] md:max-w-[15ch]">
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
