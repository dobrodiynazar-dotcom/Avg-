"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent, type ReactNode, type RefObject } from "react";

import { Button, Container } from "@/components/ui";
import { pricingCardSummaries } from "@/content/pricing";
import type { PriceCard, PricingPageContent } from "@/types/content";

type Direction = "previous" | "next";
type ConfirmAction = "cancel" | "exit" | "delete" | null;

type PricingPageSectionProps = {
  content: PricingPageContent;
  initialCards: PriceCard[];
  canEdit: boolean;
};

function splitPrice(priceLabel: string) {
  const match = priceLabel.match(/^(\d+)\s+(.+)$/);
  return match ? { amount: match[1], suffix: match[2] } : { amount: priceLabel, suffix: "" };
}

function PriceText({ priceLabel, compact = false }: { priceLabel: string; compact?: boolean }) {
  const { amount, suffix } = splitPrice(priceLabel);
  return (
    <p className={compact
      ? "text-[clamp(1.05rem,2vw,1.35rem)] font-semibold leading-none tracking-[-0.015em] text-white"
      : "text-[clamp(1.45rem,3.2vw,2rem)] font-semibold leading-none tracking-[-0.025em] text-white"}>
      <span>{amount}</span>
      {suffix ? <span className="ml-1.5 text-[0.72em] font-medium tracking-normal text-white/62">{suffix}</span> : null}
    </p>
  );
}

function SectionDivider() {
  return <div aria-hidden="true" className="h-px w-full bg-white/18" />;
}

function PriceCardView({
  card,
  compact,
  className = "",
  selectable,
  onSelect,
  editing,
  editor,
  activeRef,
}: {
  card: PriceCard;
  compact: boolean;
  className?: string;
  selectable: boolean;
  onSelect: () => void;
  editing: boolean;
  editor: ReactNode;
  activeRef: RefObject<HTMLElement | null>;
}) {
  const summary = pricingCardSummaries[card.key];
  const common = selectable
    ? "cursor-pointer outline-none ring-offset-2 ring-offset-black hover:border-white/45 focus-visible:ring-2 focus-visible:ring-[var(--color-primary-focus)]"
    : "";
  return (
    <article
      ref={editing ? activeRef : undefined}
      className={compact
        ? `rounded-[0.8rem] border border-white/16 bg-[linear-gradient(180deg,rgb(18_20_23_/_0.78),rgb(8_10_12_/_0.72))] px-5 py-4 text-center shadow-[0_16px_46px_rgb(0_0_0_/_0.2)] backdrop-blur-md ${className} ${common}`
        : `mx-auto flex min-h-[12.5rem] w-full max-w-[15.5rem] flex-col justify-between rounded-[1rem] border border-white/16 bg-[linear-gradient(180deg,rgb(20_22_25_/_0.84),rgb(8_10_12_/_0.82))] px-5 py-6 text-center shadow-[0_22px_70px_rgb(0_0_0_/_0.34)] backdrop-blur-md sm:min-h-[13.5rem] sm:max-w-[16.5rem] sm:px-6 ${common}`}
      onClick={selectable ? onSelect : undefined}
      onKeyDown={selectable ? (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      } : undefined}
      role={selectable ? "button" : undefined}
      tabIndex={selectable ? 0 : undefined}
    >
      {editing ? editor : compact ? (
        <>
          <h3 className="text-balance text-[0.88rem] font-medium leading-[1.22] tracking-[0.005em] text-white">{card.title}</h3>
          {summary ? <p className="mt-1 text-[0.72rem] leading-[1.35] text-white/58">{summary}</p> : null}
          <div className="mx-auto my-3 h-px w-full max-w-[9.5rem] bg-white/40" />
          <PriceText compact priceLabel={card.priceLabel} />
        </>
      ) : (
        <>
          <div>
            <h2 className="mx-auto max-w-[18ch] text-balance text-[clamp(1.02rem,1.9vw,1.22rem)] font-medium leading-[1.18] tracking-[-0.012em] text-white">{card.title}</h2>
            {summary ? <p className="mx-auto mt-3 max-w-[24ch] text-[0.72rem] leading-[1.45] text-white/62">{summary}</p> : null}
          </div>
          <div className="mt-5 space-y-5">
            <div className="h-px w-full bg-white/45" />
            <PriceText priceLabel={card.priceLabel} />
          </div>
        </>
      )}
    </article>
  );
}

function PriceCardEditor({
  card,
  draft,
  setDraft,
  dirty,
  busy,
  error,
  onSave,
  onDelete,
  onCancel,
  confirmation,
  onConfirm,
  onDismissConfirmation,
}: {
  card: PriceCard;
  draft: { title: string; priceLabel: string };
  setDraft: (value: { title: string; priceLabel: string }) => void;
  dirty: boolean;
  busy: boolean;
  error: string;
  onSave: (event: FormEvent<HTMLFormElement>) => void;
  onDelete: () => void;
  onCancel: () => void;
  confirmation: ConfirmAction;
  onConfirm: () => void;
  onDismissConfirmation: () => void;
}) {
  return (
    <form className="w-full space-y-3 text-left" onSubmit={onSave}>
      <label className="block space-y-1 text-[0.72rem] text-white/75" htmlFor={`price-title-${card.id}`}>
        <span>Назва</span>
        <input
          className="w-full rounded-[var(--radius-sm)] border border-white/30 bg-black/35 px-2.5 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
          disabled={busy}
          id={`price-title-${card.id}`}
          maxLength={100}
          onChange={(event) => setDraft({ ...draft, title: event.target.value })}
          required
          value={draft.title}
        />
      </label>
      <label className="block space-y-1 text-[0.72rem] text-white/75" htmlFor={`price-amount-${card.id}`}>
        <span>Ціна</span>
        <input
          className="w-full rounded-[var(--radius-sm)] border border-white/30 bg-black/35 px-2.5 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
          disabled={busy}
          id={`price-amount-${card.id}`}
          maxLength={60}
          onChange={(event) => setDraft({ ...draft, priceLabel: event.target.value })}
          required
          value={draft.priceLabel}
        />
      </label>
      {error ? <p aria-live="polite" className="text-xs text-red-300">{error}</p> : null}
      {confirmation ? (
        <div aria-label="Підтвердження дії" aria-live="polite" className="space-y-2 rounded-[var(--radius-sm)] border border-white/25 bg-black/45 p-2 text-xs" role="group">
          <p>{confirmation === "delete" ? "Видалити цю картку?" : "Скасувати незбережені зміни?"}</p>
          <div className="flex gap-2">
            <button className="rounded-[var(--radius-sm)] border border-white/35 px-2 py-1 disabled:opacity-50" disabled={busy} onClick={onDismissConfirmation} type="button">Ні</button>
            <button className="rounded-[var(--radius-sm)] bg-[var(--color-primary)] px-2 py-1 disabled:opacity-50" disabled={busy} onClick={onConfirm} type="button">Так</button>
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button className="rounded-[var(--radius-sm)] border border-white/35 px-2 py-1.5 text-xs text-white/80 disabled:opacity-50" disabled={busy} onClick={onDelete} type="button">Видалити</button>
        <button className="rounded-[var(--radius-sm)] border border-white/35 px-2 py-1.5 text-xs text-white/80 disabled:opacity-50" disabled={busy} onClick={onCancel} type="button">Скасувати</button>
        <button className="col-span-2 rounded-[var(--radius-sm)] bg-[var(--color-primary)] px-2 py-1.5 text-xs font-medium text-white disabled:cursor-not-allowed disabled:opacity-35" disabled={!dirty || busy} type="submit">Зберегти</button>
      </div>
    </form>
  );
}

function CarouselButton({ direction, onClick }: { direction: Direction; onClick: () => void }) {
  const isPrevious = direction === "previous";
  return (
    <button
      aria-label={isPrevious ? "Показати попередній абонемент" : "Показати наступний абонемент"}
      className="group flex h-16 w-11 shrink-0 items-center justify-center text-white/82 transition-colors hover:text-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary-focus)] sm:h-20 sm:w-14"
      onClick={onClick}
      type="button"
    >
      <span aria-hidden="true" className={`relative block h-10 w-7 ${isPrevious ? "rotate-180" : ""}`}>
        <span className="absolute left-2 top-1/2 h-[3px] w-8 origin-left -translate-y-1/2 rotate-[132deg] rounded-full bg-current transition-colors motion-reduce:transition-none" />
        <span className="absolute left-2 top-1/2 h-[3px] w-8 origin-left -translate-y-1/2 -rotate-[132deg] rounded-full bg-current transition-colors motion-reduce:transition-none" />
      </span>
    </button>
  );
}

export function PricingPageSection({ content, initialCards, canEdit }: PricingPageSectionProps) {
  const router = useRouter();
  const [cards, setCards] = useState(initialCards);
  const [activeIndex, setActiveIndex] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [draft, setDraft] = useState({ title: "", priceLabel: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState<ConfirmAction>(null);
  const pendingRef = useRef(false);
  const activeCardRef = useRef<HTMLElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const subscriptions = cards.filter((card) => card.kind === "subscription");
  const singleCards = cards.filter((card) => card.kind === "single");
  const personalCards = cards.filter((card) => card.kind === "personal");
  const activePlan = subscriptions[activeIndex] ?? subscriptions[0];
  const activeCard = cards.find((card) => card.id === activeCardId);
  const dirty = Boolean(activeCard && (
    draft.title.trim() !== activeCard.title ||
    draft.priceLabel.trim() !== activeCard.priceLabel
  ));

  useEffect(() => {
    if (activeCardId === null) return;
    const onOutside = (event: PointerEvent) => {
      if (!pendingRef.current && !dirty && !activeCardRef.current?.contains(event.target as Node)) {
        setActiveCardId(null);
        setError("");
        setConfirmation(null);
      }
    };
    document.addEventListener("pointerdown", onOutside);
    return () => document.removeEventListener("pointerdown", onOutside);
  }, [activeCardId, dirty]);

  const openCard = (card: PriceCard) => {
    if (pendingRef.current || (activeCard && dirty)) return;
    setDraft({ title: card.title, priceLabel: card.priceLabel });
    setActiveCardId(card.id);
    setError("");
    setConfirmation(null);
  };

  const cancel = () => {
    if (pendingRef.current) return;
    if (dirty) { setConfirmation("cancel"); return; }
    setActiveCardId(null);
    setError("");
    setConfirmation(null);
  };

  const toggleEditMode = () => {
    if (pendingRef.current) return;
    if (dirty) { setConfirmation("exit"); return; }
    setActiveCardId(null);
    setError("");
    setConfirmation(null);
    setEditMode((current) => !current);
  };

  const move = (direction: Direction) => {
    if (pendingRef.current || (activeCard && dirty)) return;
    setActiveCardId(null);
    setConfirmation(null);
    setActiveIndex((current) => {
      if (direction === "previous") return current === 0 ? subscriptions.length - 1 : current - 1;
      return current === subscriptions.length - 1 ? 0 : current + 1;
    });
  };

  const save = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!activeCard || !dirty || pendingRef.current) return;
    const title = draft.title.trim();
    const priceLabel = draft.priceLabel.trim();
    if (!title || !priceLabel || title.length > 100 || priceLabel.length > 60) {
      setError("Вкажіть назву й ціну в дозволеній довжині.");
      return;
    }
    pendingRef.current = true;
    setBusy(true);
    setError("");
    setConfirmation(null);
    try {
      const response = await fetch(`/api/prices/${activeCard.id}`, {
        method: "PATCH",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, priceLabel }),
      });
      if (!response.ok) {
        setError(response.status === 401 || response.status === 403
          ? "Сесія завершилась. Увійдіть знову; ваші зміни залишаться тут."
          : "Не вдалося зберегти. Перевірте дані та спробуйте ще раз.");
        return;
      }
      setCards((current) => current.map((card) => card.id === activeCard.id ? { ...card, title, priceLabel } : card));
      setActiveCardId(null);
      setEditMode(false);
      setConfirmation(null);
      router.refresh();
    } catch {
      setError("З’єднання не вдалося. Зміни залишилися в редакторі.");
    } finally {
      pendingRef.current = false;
      setBusy(false);
    }
  };

  const remove = () => {
    if (!activeCard || pendingRef.current) return;
    setConfirmation("delete");
  };

  const removeConfirmed = async () => {
    if (!activeCard || pendingRef.current) return;
    pendingRef.current = true;
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`/api/prices/${activeCard.id}`, {
        method: "DELETE",
        credentials: "same-origin",
      });
      if (!response.ok) {
        setError(response.status === 401 || response.status === 403
          ? "Сесія завершилась. Увійдіть знову; ваші зміни залишаться тут."
          : "Не вдалося видалити картку. Спробуйте ще раз.");
        return;
      }
      setCards((current) => current.filter((card) => card.id !== activeCard.id));
      setActiveIndex(0);
      setActiveCardId(null);
      setEditMode(false);
      setConfirmation(null);
      router.refresh();
    } catch {
      setError("З’єднання не вдалося. Картку не видалено.");
    } finally {
      pendingRef.current = false;
      setBusy(false);
    }
  };

  const confirm = () => {
    if (pendingRef.current) return;
    if (confirmation === "delete") { void removeConfirmed(); return; }
    if (confirmation === "exit") setEditMode(false);
    setActiveCardId(null);
    setError("");
    setConfirmation(null);
  };

  const renderCard = (card: PriceCard, compact: boolean, className = "") => {
    const editing = activeCardId === card.id;
    return (
      <PriceCardView
        key={card.id}
        activeRef={activeCardRef}
        card={card}
        className={className}
        compact={compact}
        editing={editing}
        editor={editing ? (
          <PriceCardEditor
            busy={busy}
            card={card}
            confirmation={confirmation}
            dirty={dirty}
            draft={draft}
            error={error}
            onCancel={cancel}
            onConfirm={confirm}
            onDelete={remove}
            onDismissConfirmation={() => setConfirmation(null)}
            onSave={save}
            setDraft={(value) => { setDraft(value); setConfirmation(null); }}
          />
        ) : null}
        onSelect={() => openCard(card)}
        selectable={canEdit && editMode && !editing}
      />
    );
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--color-canvas)] text-white">
      <div className="absolute inset-0">
        <Image alt="" aria-hidden="true" className="object-cover object-[center_32%]" fill priority sizes="100vw" src={content.backgroundImageSrc} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(4_6_8_/_0.76)_0%,rgb(4_6_8_/_0.84)_42%,rgb(4_6_8_/_0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgb(218_41_28_/_0.12),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_8_8_/_0.54)_0%,transparent_42%,rgb(8_8_8_/_0.38)_100%)]" />
      </div>

      {canEdit ? (
        <button
          aria-label={editMode ? "Завершити редагування цін" : "Редагувати ціни"}
          aria-pressed={editMode}
          className="absolute right-5 top-20 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/75 text-xl text-white shadow-lg hover:border-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-[var(--color-primary-focus)] sm:right-10"
          onClick={toggleEditMode}
          type="button"
        >✎</button>
      ) : null}

      <Container className="relative z-10 py-24 sm:py-28 lg:py-32" size="wide">
        <div className="mx-auto flex w-full max-w-[43rem] flex-col gap-7 sm:gap-8">
          <section aria-labelledby="pricing-memberships" className="space-y-6">
            <h1 className="text-[clamp(1.9rem,4vw,3rem)] font-medium leading-none tracking-[-0.04em] text-white" id="pricing-memberships">{content.title}</h1>
            {activePlan ? (
              <div
                aria-label="Абонементи"
                className="outline-none"
                onKeyDown={(event) => {
                  if (event.target instanceof HTMLInputElement) return;
                  if (event.key === "ArrowLeft") { event.preventDefault(); move("previous"); }
                  if (event.key === "ArrowRight") { event.preventDefault(); move("next"); }
                }}
                onTouchEnd={(event) => {
                  const start = touchStartXRef.current;
                  touchStartXRef.current = null;
                  if (start === null) return;
                  const delta = event.changedTouches[0].clientX - start;
                  if (Math.abs(delta) >= 42) move(delta > 0 ? "previous" : "next");
                }}
                onTouchStart={(event) => { touchStartXRef.current = event.touches[0].clientX; }}
                role="region"
                tabIndex={0}
              >
                <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center gap-4 sm:grid-cols-[3.5rem_minmax(0,1fr)_3.5rem] sm:gap-6">
                  <CarouselButton direction="previous" onClick={() => move("previous")} />
                  <div className="min-w-0 overflow-hidden">{renderCard(activePlan, false)}</div>
                  <CarouselButton direction="next" onClick={() => move("next")} />
                </div>
              </div>
            ) : null}
          </section>

          {singleCards.map((card) => (
            <section aria-label={card.title} className="space-y-7" key={card.id}>
              <SectionDivider />
              <div className="flex justify-center">{renderCard(card, true, "w-full max-w-[23rem] py-3.5 sm:max-w-[27rem]")}</div>
            </section>
          ))}

          {personalCards.length > 0 ? (
            <>
              <SectionDivider />
              <section aria-labelledby="pricing-personal" className="space-y-4">
                <h2 className="text-[clamp(1.25rem,2.4vw,1.65rem)] font-medium leading-tight tracking-[-0.02em] text-white" id="pricing-personal">{content.personalTrainingTitle}</h2>
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {personalCards.map((card) => renderCard(card, true))}
                </div>
              </section>
            </>
          ) : null}

          <SectionDivider />
          <section className="flex flex-col items-center pt-1 text-center">
            <p className="text-balance text-[clamp(1rem,2vw,1.2rem)] font-medium leading-tight text-white">{content.trialText}</p>
            <Button
              className="mt-8 w-full max-w-[27rem] border-[var(--color-primary)] bg-transparent px-4 py-4 text-center text-[clamp(0.72rem,3vw,0.82rem)] leading-[1.45] !text-white hover:border-[var(--color-primary-hover)] hover:bg-[rgb(218_41_28_/_0.12)] focus-visible:outline-[var(--color-primary-focus)] sm:w-auto sm:px-8"
              href={content.ctaHref}
              rel={content.ctaExternal ? "noopener noreferrer" : undefined}
              size="lg"
              signupTracking={{ ctaLocation: "pricing_trial_cta", ctaText: content.ctaLabel }}
              target={content.ctaExternal ? "_blank" : undefined}
              variant="secondary"
            >{content.ctaLabel}</Button>
          </section>
        </div>
      </Container>
    </section>
  );
}
