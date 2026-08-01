import Image from "next/image";

import type { FAQItem, VeteransPageContent } from "@/types/content";

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
  const accentText = "text-[#d8ef9a]";
  const accentBorder = "border-[#b7c979]";
  const accentRing = "focus-visible:outline-[#d8ef9a]";

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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0_/_0.64),rgb(0_0_0_/_0.38)_42%,rgb(0_0_0_/_0.78))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgb(216_239_154_/_0.12),transparent_34%)]" />

        <Container className="relative z-10 flex min-h-[clamp(38rem,92vh,56rem)] items-center justify-center py-28 text-center sm:py-32">
          <div className="mx-auto max-w-[58rem] space-y-6">
            <h1 className="mx-auto max-w-[13ch] break-words text-balance text-[clamp(2.7rem,8.2vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em] text-white sm:max-w-[14ch] sm:tracking-[-0.075em]">
              {hero.title}
            </h1>
            <p className="mx-auto max-w-[18.5rem] break-words text-[clamp(0.86rem,1.6vw,1.18rem)] font-medium leading-[1.58] text-white/78 sm:max-w-[43rem] sm:text-balance">
              {hero.description}
            </p>
            <div className="flex justify-center pt-2">
              <Button
                aria-label="Перейти до контактного блоку ветеранської програми"
                className={`w-full max-w-[18.5rem] ${accentBorder} bg-[rgb(0_0_0_/_0.16)] !text-white hover:border-[#d8ef9a] hover:bg-[rgb(216_239_154_/_0.08)] ${accentRing} sm:w-auto sm:max-w-none`}
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

      <section className="bg-[#f6f7f1] py-16 text-[var(--color-inverse-ink)] sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_1px_minmax(0,1.08fr)] lg:gap-10" size="wide">
          <div className="max-w-[43rem]">
            <h2 className="max-w-[13ch] text-balance text-[clamp(2.2rem,4.6vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.065em] text-[var(--color-inverse-ink)]">
              {program.title}
            </h2>
            <div className="mt-7 max-w-[21.5rem] space-y-5 break-words text-[0.94rem] leading-7 text-[rgb(24_24_24_/_0.72)] sm:max-w-[36rem] sm:text-[1.04rem] sm:leading-8 lg:max-w-none">
              {program.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="hidden w-px bg-[linear-gradient(180deg,transparent,rgb(111_126_72_/_0.42),transparent)] lg:block"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:content-start">
            {program.benefits.map((benefit, index) => (
              <article
                className="group min-w-0 rounded-[var(--radius-card-md)] border border-[rgb(111_126_72_/_0.22)] bg-[rgb(255_255_255_/_0.52)] p-5 shadow-[0_14px_42px_rgb(21_24_16_/_0.06)] transition-colors duration-200 hover:border-[rgb(111_126_72_/_0.42)] hover:bg-white"
                key={benefit.title}
              >
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-8 w-8 items-center justify-center rounded-[var(--radius-badge)] border border-[rgb(111_126_72_/_0.28)] text-[0.72rem] font-bold text-[#6f7e48]"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="break-words text-[1.02rem] font-semibold leading-6 tracking-[-0.02em] text-[var(--color-inverse-ink)]">
                  {benefit.title}
                </h3>
                <div
                  aria-hidden="true"
                  className="my-3 h-px w-12 bg-[#9aa86a] transition-all duration-200 group-hover:w-16 motion-reduce:transition-none"
                />
                <p className="max-w-[18.5rem] break-words text-[0.84rem] leading-6 text-[rgb(24_24_24_/_0.64)] sm:max-w-none sm:text-[0.86rem]">
                  {benefit.description}
                </p>
              </article>
            ))}
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.82)_0%,rgb(0_0_0_/_0.58)_52%,rgb(0_0_0_/_0.32)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(28_34_20_/_0.28),rgb(0_0_0_/_0.56))]" />

        <Container className="relative z-10" size="wide">
          <div className="max-w-[54rem] space-y-5">
            <p className={`text-xs font-bold uppercase tracking-[0.24em] ${accentText}`}>
              {tmsHub.label}
            </p>
            <h2 className="max-w-[12ch] break-words text-[clamp(1.78rem,7vw,5.35rem)] font-medium leading-[1] tracking-[-0.045em] sm:max-w-none sm:text-balance sm:leading-[0.92] sm:tracking-[-0.075em]">
              {tmsHub.title}
            </h2>
            <div className="h-px w-24 bg-[#b7c979]" aria-hidden="true" />
            <div className="max-w-[21.5rem] space-y-4 break-words text-[0.92rem] leading-7 text-white/78 sm:max-w-[42rem] sm:text-[1.03rem] sm:leading-8">
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
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  className="group border border-[rgb(216_239_154_/_0.12)] bg-[rgb(24_28_20_/_0.52)] px-5 py-4 transition-colors duration-200 hover:border-[rgb(216_239_154_/_0.28)]"
                  key={item.id}
                >
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-[0.95rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ef9a]">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-[#b7c979] transition-transform group-open:rotate-45 motion-reduce:transition-none"
                    >
                      +
                    </span>
                  </summary>
                  <p className="break-words whitespace-pre-line pt-3.5 text-[0.8125rem] leading-6 text-[var(--color-ink-muted)]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
            <p className="rounded-[var(--radius-card-sm)] border border-[rgb(183_201_121_/_0.28)] bg-transparent px-5 py-4 text-[0.84rem] leading-6 text-[var(--color-ink-muted)]">
              {faqNote}
            </p>
          </div>
        </Container>
      </section>

      <section
        className="relative isolate min-h-[clamp(34rem,72vw,52rem)] overflow-hidden bg-[rgb(8_8_8)] text-white"
        id="veterans-join"
      >
        <Image
          alt={finalCta.imageAlt}
          className="object-cover object-[52%_center] sm:object-[50%_center]"
          fill
          sizes="100vw"
          src={finalCta.imageSrc}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0_/_0.38),rgb(0_0_0_/_0.66))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(216_239_154_/_0.1),transparent_34%)]" />
        <Container className="relative z-10 flex min-h-[clamp(34rem,72vw,52rem)] items-center justify-center py-20 text-center">
          <div className="mx-auto max-w-[50rem] space-y-6">
            <h2 className="break-words text-balance text-[clamp(2.05rem,5.2vw,5.2rem)] font-medium leading-[0.94] tracking-[-0.06em] sm:tracking-[-0.07em]">
              {finalCta.title}
            </h2>
            <Button
              aria-label="Зв’язатися щодо участі у ветеранській програмі"
              className={`w-full max-w-[18.5rem] shrink-0 ${accentBorder} bg-transparent !text-white hover:border-[#d8ef9a] hover:bg-[rgb(216_239_154_/_0.08)] ${accentRing} sm:w-auto sm:max-w-none`}
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
      </section>
    </div>
  );
}
