import Image from "next/image";

import type { FAQItem, VeteransPageContent } from "@/types/content";

import { FAQAccordion } from "@/components/domain";
import { Button, Container, SectionHeader } from "@/components/ui";

type VeteransPageSectionProps = {
  content: VeteransPageContent;
  faqItems: FAQItem[];
};

export function VeteransPageSection({
  content,
  faqItems,
}: VeteransPageSectionProps) {
  const { hero, program, tmsHub, faqIntro, faqNote, finalCta } = content;

  return (
    <div className="overflow-hidden bg-[var(--color-canvas)]">
      <section className="relative isolate min-h-[clamp(38rem,92vh,56rem)] overflow-hidden border-b border-[rgb(255_255_255_/_0.08)] text-white">
        <Image
          alt=""
          aria-hidden="true"
          className="hidden object-cover motion-reduce:block"
          fill
          priority
          sizes="100vw"
          src={hero.posterSrc}
        />
        <video
          aria-label="Відео тренування програми джиу-джитсу для ветеранів"
          autoPlay
          className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
          loop
          muted
          playsInline
          poster={hero.posterSrc}
          preload="metadata"
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0_/_0.62),rgb(0_0_0_/_0.34)_42%,rgb(0_0_0_/_0.78))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgb(255_255_255_/_0.12),transparent_34%)]" />

        <Container className="relative z-10 flex min-h-[clamp(38rem,92vh,56rem)] items-center justify-center py-28 text-center sm:py-32">
          <div className="mx-auto max-w-[50rem] space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/72">
              {hero.label}
            </p>
            <h1 className="mx-auto max-w-[11ch] text-balance text-[clamp(2.1rem,9vw,6.4rem)] font-medium leading-[0.92] tracking-[-0.05em] text-white sm:max-w-none sm:tracking-[-0.07em]">
              {hero.title}
            </h1>
            <p className="mx-auto max-w-[32rem] text-balance text-[clamp(0.92rem,1.7vw,1.2rem)] font-medium leading-[1.55] text-white/76 sm:max-w-[42rem]">
              {hero.description}
            </p>
            <div className="flex justify-center pt-2">
              <Button
                aria-label="Перейти до контактного блоку ветеранської програми"
                className="w-full border-[var(--color-primary)] bg-[rgb(0_0_0_/_0.16)] !text-white hover:bg-[rgb(255_255_255_/_0.05)] sm:w-auto"
                href={hero.ctaHref}
                size="lg"
                variant="secondary"
              >
                {hero.ctaLabel}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-inverse-canvas)] py-16 text-[var(--color-inverse-ink)] sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.78fr,1.22fr]" size="wide">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              {program.label}
            </p>
            <h2 className="mt-4 max-w-[12ch] text-balance text-[clamp(2.1rem,4vw,4.3rem)] font-medium leading-[0.96] tracking-[-0.06em] text-[var(--color-inverse-ink)]">
              {program.title}
            </h2>
          </div>
          <div className="space-y-9">
            <div className="max-w-[52rem] space-y-5 text-[0.98rem] leading-7 text-[rgb(24_24_24_/_0.74)] sm:text-[1.05rem] sm:leading-8">
              {program.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {program.benefits.map((benefit) => (
                <article
                  className="min-w-0 rounded-[var(--radius-card-sm)] border border-[rgb(24_24_24_/_0.12)] bg-[rgb(24_24_24_/_0.035)] p-5"
                  key={benefit.title}
                >
                  <h3 className="break-words text-[1rem] font-semibold leading-6 tracking-[-0.02em] text-[var(--color-inverse-ink)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[0.86rem] leading-6 text-[rgb(24_24_24_/_0.62)]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden border-y border-[rgb(255_255_255_/_0.08)] py-20 text-white sm:py-24 lg:py-28">
        <Image
          alt={tmsHub.imageAlt}
          className="object-cover object-[56%_center]"
          fill
          sizes="100vw"
          src={tmsHub.imageSrc}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.78)_0%,rgb(0_0_0_/_0.5)_48%,rgb(0_0_0_/_0.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0_/_0.28),rgb(0_0_0_/_0.52))]" />

        <Container className="relative z-10" size="wide">
          <div className="max-w-[44rem] space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">
              {tmsHub.label}
            </p>
            <h2 className="break-words text-balance text-[clamp(1.85rem,8vw,4.9rem)] font-medium leading-[0.98] tracking-[-0.055em] sm:leading-[0.94] sm:tracking-[-0.065em]">
              {tmsHub.title}
            </h2>
            <div className="space-y-4 text-[0.95rem] leading-7 text-white/76 sm:text-[1.02rem] sm:leading-8">
              {tmsHub.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[rgb(255_255_255_/_0.08)] bg-[var(--color-surface-2)] py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.72fr,1.28fr]" size="wide">
          <SectionHeader
            description={faqIntro.description}
            eyebrow={faqIntro.eyebrow}
            eyebrowTone="muted"
            size="supporting"
            title={faqIntro.title}
          />
          <div className="space-y-5">
            <FAQAccordion items={faqItems} />
            <p className="rounded-[var(--radius-card-sm)] border border-[rgb(255_255_255_/_0.08)] bg-[rgb(255_255_255_/_0.04)] px-5 py-4 text-[0.82rem] leading-6 text-[var(--color-ink-muted)]">
              {faqNote}
            </p>
          </div>
        </Container>
      </section>

      <section
        className="bg-[rgb(8_8_8)] text-white"
        id="veterans-join"
      >
        <div className="mx-auto max-w-[120rem]">
          <div className="relative flex min-h-[min(72vw,48rem)] items-center justify-center overflow-hidden bg-black">
            <Image
              alt={finalCta.imageAlt}
              className="h-auto max-h-[82vh] w-auto max-w-full object-contain"
              height={finalCta.imageHeight}
              sizes="100vw"
              src={finalCta.imageSrc}
              width={finalCta.imageWidth}
            />
          </div>
          <Container className="py-10 sm:py-12">
            <div className="mx-auto flex max-w-[56rem] flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
              <h2 className="text-balance text-[clamp(1.7rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.055em]">
                {finalCta.title}
              </h2>
              <Button
                aria-label="Зв’язатися щодо участі у ветеранській програмі"
                className="w-full shrink-0 border-[var(--color-primary)] bg-transparent !text-white hover:bg-[rgb(255_255_255_/_0.05)] sm:w-auto"
                href={finalCta.ctaHref}
                rel="noreferrer"
                size="lg"
                target="_blank"
                variant="secondary"
              >
                {finalCta.ctaLabel}
              </Button>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
