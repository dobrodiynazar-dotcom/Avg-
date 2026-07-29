import type {
  AcademyStatementContent,
  HighlightItem,
} from "@/types/content";

import { Container } from "@/components/ui";

type AboutSectionProps = {
  highlights: HighlightItem[];
  statement: AcademyStatementContent;
};

export function AboutSection({
  highlights,
  statement,
}: AboutSectionProps) {
  const [headline, description] = statement.paragraphs;

  return (
    <section className="relative overflow-hidden border-b border-[rgb(255_255_255_/_0.08)] py-10 sm:py-11 lg:py-12">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-[min(18rem,52vw)] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgb(218_41_28_/_0.72),transparent)]"
      />
      <Container className="space-y-8 sm:space-y-9" size="wide">
        <div className="mx-auto max-w-[50rem] text-left">
          <h2 className="mx-auto max-w-[24ch] text-center text-balance text-[clamp(1.65rem,3vw,2.1rem)] font-medium leading-[1.08] tracking-[-0.035rem] text-[var(--color-ink)]">
            {headline}
          </h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-[34rem] text-center text-balance text-[clamp(0.875rem,1.1vw,0.96rem)] font-medium leading-[1.55] text-[var(--color-ink-muted)]">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mx-auto grid max-w-[72rem] gap-7 text-center md:grid-cols-3 md:gap-10 lg:gap-16">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="group mx-auto w-full max-w-[20rem] space-y-3 pt-4"
            >
              <div
                aria-hidden="true"
                className="relative h-px w-full bg-[rgb(255_255_255_/_0.18)]"
              >
                <span className="absolute left-1/2 top-0 h-px w-10 -translate-x-1/2 bg-[rgb(218_41_28_/_0.62)] opacity-70 transition-all duration-300 group-hover:w-16 group-hover:opacity-100 motion-reduce:transition-none" />
              </div>
              <h2 className="text-balance text-[clamp(1.1rem,1.45vw,1.35rem)] font-medium leading-[1.12] tracking-[-0.02rem] text-[var(--color-ink)]">
                {highlight.title}
              </h2>
              <p className="text-[0.78rem] leading-5 text-[var(--color-ink-muted)]">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
