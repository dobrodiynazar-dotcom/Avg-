"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { CoachProfile, SectionIntro } from "@/types/content";

import { Container } from "@/components/ui";

type CoachesPageSectionProps = {
  intro: SectionIntro;
  coaches: CoachProfile[];
  background: {
    src: string;
    alt: string;
  };
};

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function ProfileList({
  items,
  title,
}: {
  items?: string[];
  title: string;
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="space-y-3">
      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/58">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            className="border-l border-[var(--color-primary)] pl-3 text-[0.88rem] leading-[1.75] tracking-[0.003em] text-white/74"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function CoachPreviewCard({
  coach,
  onOpen,
  registerTrigger,
}: {
  coach: CoachProfile;
  onOpen: () => void;
  registerTrigger: (id: string, element: HTMLButtonElement | null) => void;
}) {
  return (
    <button
      aria-label={`Відкрити профіль тренера ${coach.name}`}
      className="group flex w-full flex-col items-center rounded-[var(--radius-card-md)] border border-white/12 bg-[rgb(10_12_15_/_0.62)] p-4 text-center shadow-[0_24px_80px_rgb(0_0_0_/_0.28)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[rgb(218_41_28_/_0.5)] hover:bg-[rgb(16_18_21_/_0.72)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary-focus)] motion-reduce:transition-none"
      onClick={onOpen}
      ref={(element) => registerTrigger(coach.id, element)}
      type="button"
    >
      <span className="relative block aspect-[4/5] w-full overflow-hidden rounded-[0.85rem] bg-[var(--color-surface-2)]">
        {coach.imageSrc ? (
          <Image
            alt={coach.imageAlt ?? `${coach.name}, тренер Avangard Jiu-Jitsu`}
            className="object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
            fill
            sizes="(min-width: 1280px) 300px, (min-width: 768px) 42vw, 88vw"
            src={coach.imageSrc}
            style={{ objectPosition: coach.imageObjectPosition ?? "center center" }}
          />
        ) : null}
        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgb(0_0_0_/_0.72))]" />
      </span>

      <span className="mt-5 block space-y-2">
        <span className="block text-[1.22rem] font-semibold leading-[1.18] tracking-normal text-white">
          {coach.name}
        </span>
        <span className="block text-[0.84rem] font-medium leading-[1.65] tracking-[0.004em] text-white/70">
          {coach.rank}
        </span>
        <span className="mx-auto block h-px w-10 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-16 motion-reduce:transition-none" />
        <span className="block pt-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/48">
          Відкрити профіль
        </span>
      </span>
    </button>
  );
}

function CoachModal({
  coach,
  onClose,
}: {
  coach: CoachProfile;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalBodyRef = useRef<HTMLDivElement | null>(null);
  const profileScrollRef = useRef<HTMLDivElement | null>(null);
  const biographyId = `${coach.id}-bio`;
  const titleId = `${coach.id}-title`;
  const imageSrc = coach.profileImageSrc ?? coach.imageSrc;

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, [coach.id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "PageDown" || event.key === "PageUp") {
        const scrollTarget =
          window.matchMedia("(min-width: 768px)").matches
            ? profileScrollRef.current
            : modalBodyRef.current;

        if (scrollTarget) {
          event.preventDefault();
          scrollTarget.scrollBy({
            behavior: "auto",
            top: event.key === "PageDown" ? scrollTarget.clientHeight * 0.82 : -scrollTarget.clientHeight * 0.82,
          });
        }

        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const modal = modalRef.current;
      if (!modal) {
        return;
      }

      const focusableElements = Array.from(
        modal.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (!focusableElements.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5">
      <button
        aria-label="Закрити профіль тренера"
        className="absolute inset-0 bg-black/78 backdrop-blur-[2px] md:backdrop-blur-md"
        onClick={onClose}
        type="button"
      />

      <div
        aria-describedby={biographyId}
        aria-labelledby={titleId}
        aria-modal="true"
        className="relative h-[min(90dvh,54rem)] max-h-[90dvh] w-full max-w-6xl overflow-hidden rounded-[1.05rem] border border-white/12 bg-[rgb(9_10_12_/_0.96)] shadow-[0_34px_120px_rgb(0_0_0_/_0.58)] outline-none motion-safe:animate-[coach-modal-in_280ms_ease-out]"
        ref={modalRef}
        role="dialog"
      >
        <button
          aria-label="Закрити профіль"
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/76 text-2xl leading-none text-white/82 transition hover:border-[var(--color-primary)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary-focus)] sm:right-4 sm:top-4"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          ×
        </button>

        <div
          className="grid h-full overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] md:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.1fr)] md:overflow-hidden"
          data-modal-scroll=""
          ref={modalBodyRef}
        >
          <div className="relative h-[min(52dvh,24rem)] overflow-hidden bg-[var(--color-surface-2)] md:h-auto md:min-h-0">
            {imageSrc ? (
              <Image
                alt={coach.profileImageAlt ?? coach.imageAlt ?? `${coach.name}, тренер Avangard Jiu-Jitsu`}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                src={imageSrc}
                style={{ objectPosition: coach.profileImageObjectPosition ?? coach.imageObjectPosition ?? "center center" }}
              />
            ) : null}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgb(0_0_0_/_0.52))]" />
          </div>

          <div
            className="min-h-0 px-5 py-7 sm:px-7 sm:py-8 md:h-full md:overflow-y-auto md:overscroll-contain md:[-webkit-overflow-scrolling:touch] lg:px-9"
            data-profile-scroll=""
            ref={profileScrollRef}
          >
          <div className="space-y-8 pb-3 md:pr-1">
            <header className="space-y-4">
              <p className="text-[0.78rem] font-semibold uppercase leading-[1.55] tracking-[0.22em] text-[var(--color-primary)]">
                {coach.role}
              </p>
              <h2
                className="text-balance text-[clamp(2rem,5vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.025em] text-white sm:leading-[1.02]"
                id={titleId}
              >
                {coach.name}
              </h2>
              <div className="space-y-2.5 text-[0.94rem] leading-[1.75] tracking-[0.003em] text-white/68">
                {coach.experience ? <p>{coach.experience}</p> : null}
                {coach.coaching ? <p>{coach.coaching}</p> : null}
              </div>
              <div className="inline-flex flex-col gap-2 pt-1">
                <p className="text-[1.28rem] font-semibold leading-[1.22] tracking-normal text-white">
                  {coach.rank}
                </p>
                <div className="h-px w-full bg-[var(--color-primary)]" />
              </div>
            </header>

            <ProfileList items={coach.achievements} title="Спортивні досягнення" />
            <ProfileList items={coach.militaryBackground} title="Військовий досвід" />

            {coach.biography?.length ? (
              <section className="space-y-[1.125rem]" id={biographyId}>
                <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/58">
                  Особисто
                </h3>
                <div className="space-y-5 text-[0.94rem] leading-[1.85] tracking-[0.003em] text-white/72">
                  {coach.biography.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ) : null}

            {coach.socialLinks?.length ? (
              <section className="space-y-3 border-t border-white/10 pt-6">
                <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/58">
                  Соціальні мережі
                </h3>
                <div className="flex flex-wrap gap-3">
                  {coach.socialLinks.map((link) => (
                    <a
                      className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-button)] border border-white/14 px-4 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[var(--color-primary)] hover:bg-[rgb(218_41_28_/_0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary-focus)]"
                      href={link.href}
                      key={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CoachesPageSection({
  intro,
  coaches,
  background,
}: CoachesPageSectionProps) {
  const [activeCoachId, setActiveCoachId] = useState<string | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeCoach = useMemo(
    () => coaches.find((coach) => coach.id === activeCoachId) ?? null,
    [activeCoachId, coaches],
  );

  useEffect(() => {
    if (!activeCoach) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeCoach]);

  const registerTrigger = useCallback((id: string, element: HTMLButtonElement | null) => {
    triggerRefs.current[id] = element;
  }, []);

  const closeModal = useCallback(() => {
    const activeId = activeCoachId;
    setActiveCoachId(null);

    window.requestAnimationFrame(() => {
      if (activeId) {
        triggerRefs.current[activeId]?.focus({ preventScroll: true });
      }
    });
  }, [activeCoachId]);

  return (
    <>
      <style jsx global>{`
        @keyframes coach-modal-in {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <section className="border-b border-[rgb(255_255_255_/_0.08)] bg-[var(--color-surface-2)] py-20 text-white sm:py-24 lg:py-14 xl:py-12">
        <Container size="wide">
          <div className="max-w-[48rem] space-y-5 lg:max-w-[34rem] lg:space-y-3.5 xl:max-w-[31rem]">
            <p className="text-xs font-semibold uppercase leading-[1.6] tracking-[0.24em] text-[var(--color-primary)]">
              {intro.eyebrow}
            </p>
            <h1 className="text-balance text-[clamp(2.45rem,6vw,5.25rem)] font-medium leading-[1.04] tracking-[-0.035em] text-white sm:leading-[1] sm:tracking-[-0.045em] lg:text-[clamp(2.2rem,3.8vw,3.7rem)] lg:leading-[1.03] lg:tracking-[-0.035em]">
              {intro.title}
            </h1>
            <p className="max-w-[41rem] text-[clamp(0.98rem,1.6vw,1.15rem)] leading-[1.8] tracking-[0.006em] text-[var(--color-ink-muted)] lg:max-w-[30rem] lg:text-[1rem] lg:leading-[1.62]">
              {intro.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden border-b border-[rgb(255_255_255_/_0.08)] py-18 text-white sm:py-24 lg:py-28">
        <Image
          alt={background.alt}
          className="object-cover object-[center_42%]"
          fill
          priority
          sizes="100vw"
          src={background.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(4_6_8_/_0.78)_0%,rgb(4_6_8_/_0.7)_42%,rgb(4_6_8_/_0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_8_8_/_0.5)_0%,transparent_44%,rgb(8_8_8_/_0.38)_100%)]" />

        <Container className="relative z-10" size="wide">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {coaches.map((coach) => (
              <CoachPreviewCard
                coach={coach}
                key={coach.id}
                onOpen={() => setActiveCoachId(coach.id)}
                registerTrigger={registerTrigger}
              />
            ))}
          </div>
        </Container>
      </section>

      {activeCoach ? <CoachModal coach={activeCoach} onClose={closeModal} /> : null}
    </>
  );
}
