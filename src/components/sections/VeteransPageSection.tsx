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
  const ctaButtonClassName =
    "w-full max-w-[18.5rem] shrink-0 border-[#d8ef9a] bg-[rgb(0_0_0_/_0.14)] !text-white hover:border-[#ecffb3] hover:bg-[rgb(216_239_154_/_0.14)] focus-visible:outline-[#ecffb3] sm:w-auto sm:max-w-none";

  return (
    <div className="overflow-hidden bg-[var(--color-canvas)]">
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-[rgb(255_255_255_/_0.08)] text-white sm:min-h-[clamp(38rem,92vh,56rem)]">
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
          className="absolute inset-0 h-full min-h-full w-full min-w-full object-cover object-[50%_46%] motion-reduce:hidden sm:object-center"
          loop
          muted
          playsInline
          poster={hero.posterSrc}
          preload="metadata"
        >
          {hero.mobileVideoSrc ? (
            <source media="(max-width: 767px)" src={hero.mobileVideoSrc} type="video/mp4" />
          ) : null}
          <source src={hero.desktopVideoSrc ?? hero.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0_/_0.64),rgb(0_0_0_/_0.38)_42%,rgb(0_0_0_/_0.78))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgb(216_239_154_/_0.12),transparent_34%)]" />

        <Container className="relative z-10 flex min-h-[100svh] items-center justify-center py-28 text-center sm:min-h-[clamp(38rem,92vh,56rem)] sm:py-32">
          <div className="mx-auto max-w-[58rem] space-y-6">
            <h1 className="mx-auto max-w-[13ch] break-words text-balance text-[clamp(2.7rem,8.2vw,7rem)] font-medium leading-[0.96] tracking-[-0.035em] text-white sm:max-w-[14ch] sm:leading-[0.92] sm:tracking-[-0.055em] lg:tracking-[-0.065em]">
              {hero.title}
            </h1>
            <p className="mx-auto max-w-[18.5rem] break-words text-[clamp(0.86rem,1.6vw,1.18rem)] font-medium leading-[1.68] tracking-[0.005em] text-white/78 sm:max-w-[43rem] sm:text-balance">
              {hero.description}
            </p>
            <div className="flex justify-center pt-2">
              <Button
                aria-label="Написати в Telegram щодо участі у ветеранській програмі"
                className={ctaButtonClassName}
                href={hero.ctaHref}
                rel={hero.ctaExternal ? "noopener noreferrer" : undefined}
                size="lg"
                target={hero.ctaExternal ? "_blank" : undefined}
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
            <h2 className="max-w-[14ch] text-balance text-[clamp(2.45rem,4.6vw,4.8rem)] font-medium leading-[1] tracking-[-0.04em] text-[var(--color-inverse-ink)] sm:leading-[0.96] sm:tracking-[-0.055em]">
              {program.title}
            </h2>
            <div className="mt-7 max-w-[21.5rem] space-y-5 break-words text-[0.94rem] leading-[1.75] text-[rgb(24_24_24_/_0.72)] sm:max-w-[36rem] sm:text-[1.04rem] sm:leading-8 lg:max-w-none">
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
                <h3 className="break-words text-[1.02rem] font-semibold leading-7 tracking-[-0.005em] text-[var(--color-inverse-ink)]">
                  {benefit.title}
                </h3>
                <div
                  aria-hidden="true"
                  className="my-3 h-px w-12 bg-[#9aa86a] transition-all duration-200 group-hover:w-16 motion-reduce:transition-none"
                />
                <p className="max-w-[18.5rem] break-words text-[0.84rem] leading-[1.7] text-[rgb(24_24_24_/_0.64)] sm:max-w-none sm:text-[0.86rem]">
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
          <div className="max-w-[60rem] space-y-6">
            <p className={`text-xs font-bold uppercase tracking-[0.24em] ${accentText}`}>
              {tmsHub.label}
            </p>
            <h2 className="max-w-[18ch] break-words text-balance text-[clamp(2.05rem,6.2vw,4.75rem)] font-medium leading-[1.04] tracking-[-0.035em] sm:max-w-[16ch] sm:leading-[0.98] sm:tracking-[-0.055em] lg:max-w-[18ch]">
              {tmsHub.title}
            </h2>
            <div className="!mt-8 h-px w-36 bg-[#b7c979] sm:w-44" aria-hidden="true" />
            <div className="max-w-[21.5rem] space-y-4 break-words text-[0.92rem] leading-[1.72] text-white/78 sm:max-w-[42rem] sm:text-[1.03rem] sm:leading-8">
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
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-[0.95rem] font-semibold leading-6 tracking-normal text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ef9a]">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-[#b7c979] transition-transform group-open:rotate-45 motion-reduce:transition-none"
                    >
                      +
                    </span>
                  </summary>
                  <p className="break-words whitespace-pre-line pt-3.5 text-[0.8125rem] leading-[1.62] text-[var(--color-ink-muted)]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
            <p className="rounded-[0.35rem] border border-[rgb(183_201_121_/_0.42)] bg-[rgb(183_201_121_/_0.06)] px-5 py-4 text-[0.84rem] leading-[1.65] text-[var(--color-ink-muted)] sm:px-6 sm:py-5">
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
            <h2 className="break-words text-balance text-[clamp(2.05rem,5.2vw,5.2rem)] font-medium leading-[1] tracking-[-0.04em] sm:leading-[0.96] sm:tracking-[-0.055em]">
              {finalCta.title}
            </h2>
            <Button
              aria-label="Зв’язатися щодо участі у ветеранській програмі"
              className={ctaButtonClassName}
              href={finalCta.ctaHref}
              rel={finalCta.ctaExternal ? "noopener noreferrer" : undefined}
              size="lg"
              target={finalCta.ctaExternal ? "_blank" : undefined}
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
