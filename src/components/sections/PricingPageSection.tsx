"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent, type ReactNode, type RefObject } from "react";

import { Button, Container } from "@/components/ui";
import { pricingCardSummaries } from "@/content/pricing";
import { parsePriceInput } from "@/lib/prices";
import type { PriceCard, PricingPageContent } from "@/types/content";

import styles from "./PricingPageSection.module.css";

type Direction = "previous" | "next";
type PriceDraft = { title: string; price: string };

type PricingPageSectionProps = {
  content: PricingPageContent;
  initialCards: PriceCard[];
  canEdit: boolean;
};

function PriceText({ card, compact = false }: { card: PriceCard; compact?: boolean }) {
  const amount = card.price === 0 ? "Безкоштовно" : new Intl.NumberFormat("uk-UA", {
    useGrouping: false,
    minimumFractionDigits: Number.isInteger(card.price) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(card.price);
  const suffix = card.price === 0 ? "" : card.kind === "subscription" ? "грн/місяць" : "грн";
  return (
    <p className={compact
      ? "flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1 text-[clamp(1.05rem,2vw,1.35rem)] font-semibold leading-none tracking-[-0.015em] text-white"
      : "flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1 text-[clamp(1.45rem,3.2vw,2rem)] font-semibold leading-none tracking-[-0.025em] text-white"}>
      <span>{amount}</span>
      {suffix ? <span className="whitespace-nowrap text-[0.72em] font-medium tracking-normal text-white/62">{suffix}</span> : null}
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
    ? `cursor-pointer ${styles.control}`
    : "";
  return (
    <article
      ref={editing ? activeRef : undefined}
      data-editing={editing}
      data-price-control={selectable ? true : undefined}
      className={compact
        ? `${styles.card} rounded-[0.8rem] border border-white/16 bg-[linear-gradient(180deg,rgb(18_20_23_/_0.78),rgb(8_10_12_/_0.72))] px-5 py-4 text-center shadow-[0_16px_46px_rgb(0_0_0_/_0.2)] backdrop-blur-md ${className} ${common}`
        : `${styles.card} mx-auto flex min-h-[12.5rem] w-full max-w-[15.5rem] flex-col justify-between rounded-[1rem] border border-white/16 bg-[linear-gradient(180deg,rgb(20_22_25_/_0.84),rgb(8_10_12_/_0.82))] px-5 py-6 text-center shadow-[0_22px_70px_rgb(0_0_0_/_0.34)] backdrop-blur-md sm:min-h-[13.5rem] sm:max-w-[16.5rem] sm:px-6 ${common}`}
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
          <PriceText compact card={card} />
        </>
      ) : (
        <>
          <div>
            <h2 className="mx-auto max-w-[18ch] text-balance text-[clamp(1.02rem,1.9vw,1.22rem)] font-medium leading-[1.18] tracking-[-0.012em] text-white">{card.title}</h2>
            {summary ? <p className="mx-auto mt-3 max-w-[24ch] text-[0.72rem] leading-[1.45] text-white/62">{summary}</p> : null}
          </div>
          <div className="mt-5 space-y-5">
            <div className="h-px w-full bg-white/45" />
            <PriceText card={card} />
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
  valid,
  busy,
  error,
  onSave,
  onDelete,
  confirmation,
  onConfirm,
  onDismissConfirmation,
}: {
  card: PriceCard;
  draft: PriceDraft;
  setDraft: (value: PriceDraft) => void;
  dirty: boolean;
  valid: boolean;
  busy: boolean;
  error: string;
  onSave: (event: FormEvent<HTMLFormElement>) => void;
  onDelete: () => void;
  confirmation: boolean;
  onConfirm: () => void;
  onDismissConfirmation: () => void;
}) {
  return (
    <form
      className="w-full space-y-5 text-left"
      onKeyDown={(event) => event.stopPropagation()}
      onSubmit={onSave}
      onTouchEnd={(event) => event.stopPropagation()}
      onTouchStart={(event) => event.stopPropagation()}
    >
      <label className={styles.field} htmlFor={`price-title-${card.id}`}>
        <span>Назва</span>
        <input
          className={styles.input}
          disabled={busy}
          id={`price-title-${card.id}`}
          maxLength={100}
          onChange={(event) => setDraft({ ...draft, title: event.target.value })}
          required
          value={draft.title}
        />
      </label>
      {card.id !== -1 && card.price === 0 ? (
        <div className={styles.field}>
          <span>Ціна</span>
          <p className={`${styles.input} text-white/65`}>Безкоштовно</p>
        </div>
      ) : (
        <label className={styles.field} htmlFor={`price-amount-${card.id}`}>
          <span>Ціна</span>
          <input
            className={styles.input}
            disabled={busy}
            id={`price-amount-${card.id}`}
            inputMode="decimal"
            maxLength={18}
            onChange={(event) => {
              if (/^\d*(?:[.,]\d{0,2})?$/.test(event.target.value)) setDraft({ ...draft, price: event.target.value });
            }}
            pattern="[0-9]+([.,][0-9]{1,2})?"
            placeholder="1400"
            required
            type="text"
            value={draft.price}
          />
        </label>
      )}
      {error ? <p aria-live="polite" className="text-xs text-red-300">{error}</p> : null}
      {confirmation ? (
        <div aria-label="Підтвердження дії" aria-live="polite" className="space-y-2 rounded-[var(--radius-sm)] border border-white/25 bg-black/45 p-2 text-xs" role="group">
          <p>Видалити цю картку?</p>
          <div className="flex gap-2">
            <button className={`${styles.control} rounded-[var(--radius-sm)] border border-white/35 px-3 py-1.5 disabled:opacity-50`} disabled={busy} onClick={onDismissConfirmation} type="button">Ні</button>
            <button className={`${styles.control} rounded-[var(--radius-sm)] border border-[var(--color-primary)] bg-black/30 px-3 py-1.5 disabled:opacity-50`} disabled={busy} onClick={onConfirm} type="button">Так</button>
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
        <button className={`${styles.action} ${styles.control}`} disabled={busy} onClick={onDelete} type="button">Видалити</button>
        <button className={`${styles.action} ${styles.save} ${styles.control}`} disabled={!dirty || !valid || busy} type="submit">{busy ? "Зачекайте…" : "Зберегти"}</button>
      </div>
    </form>
  );
}

function CarouselButton({ direction, onClick, editing }: { direction: Direction; onClick: () => void; editing: boolean }) {
  const isPrevious = direction === "previous";
  return (
    <button
      aria-label={isPrevious ? "Показати попередній абонемент" : "Показати наступний абонемент"}
      data-price-control
      className={`${styles.control} group flex h-16 w-full shrink-0 items-center justify-center text-white/82 transition-colors hover:text-[var(--color-primary)] sm:h-20`}
      onClick={onClick}
      type="button"
    >
      <span aria-hidden="true" className={`relative block h-10 w-7 ${isPrevious ? "rotate-180" : ""} ${editing ? "scale-[0.7] sm:scale-100" : ""}`}>
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
  const [newCard, setNewCard] = useState<PriceCard | null>(null);
  const [draft, setDraft] = useState<PriceDraft>({ title: "", price: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const pendingRef = useRef(false);
  const activeCardRef = useRef<HTMLElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const visibleCards = newCard ? [...cards, newCard] : cards;
  const subscriptions = visibleCards.filter((card) => card.kind === "subscription");
  const singleCards = visibleCards.filter((card) => card.kind === "single");
  const personalCards = visibleCards.filter((card) => card.kind === "personal");
  const activePlan = subscriptions[activeIndex] ?? subscriptions[0];
  const activeCard = visibleCards.find((card) => card.id === activeCardId);
  const isNew = activeCardId === -1;
  const price = activeCard && !isNew && activeCard.price === 0 ? 0 : parsePriceInput(draft.price);
  const valid = draft.title.trim().length > 0 && draft.title.trim().length <= 100 && price !== null;
  const dirty = Boolean(activeCard && (
    isNew ||
    draft.title.trim() !== activeCard.title ||
    price !== activeCard.price
  ));

  useEffect(() => {
    if (activeCardId === null) return;
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest("[data-price-control]")) return;
      if (!pendingRef.current && !activeCardRef.current?.contains(event.target as Node)) {
        setActiveCardId(null);
        setNewCard(null);
        setError("");
        setConfirmation(false);
      }
    };
    document.addEventListener("pointerdown", onOutside);
    return () => document.removeEventListener("pointerdown", onOutside);
  }, [activeCardId]);

  const openCard = (card: PriceCard) => {
    if (pendingRef.current) return;
    setNewCard(null);
    setDraft({ title: card.title, price: String(card.price) });
    setActiveCardId(card.id);
    setError("");
    setConfirmation(false);
  };

  const closeCard = () => {
    if (pendingRef.current) return;
    setActiveCardId(null);
    setNewCard(null);
    setError("");
    setConfirmation(false);
  };

  const toggleEditMode = () => {
    if (pendingRef.current) return;
    closeCard();
    setEditMode((current) => !current);
  };

  const createCard = (kind: PriceCard["kind"]) => {
    if (!canEdit || !editMode || pendingRef.current) return;
    setNewCard({ id: -1, key: "", kind, sortOrder: 0, title: "", price: 0 });
    setActiveCardId(-1);
    setDraft({ title: "", price: "" });
    setError("");
    setConfirmation(false);
    if (kind === "subscription") setActiveIndex(cards.filter((card) => card.kind === kind).length);
  };

  const move = (direction: Direction) => {
    if (pendingRef.current) return;
    closeCard();
    const count = cards.filter((card) => card.kind === "subscription").length;
    setActiveIndex((current) => {
      if (count === 0) return 0;
      if (direction === "previous") return current <= 0 ? count - 1 : Math.min(current - 1, count - 1);
      return current >= count - 1 ? 0 : current + 1;
    });
  };

  const save = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!activeCard || !dirty || !valid || price === null || pendingRef.current) return;
    const title = draft.title.trim();
    pendingRef.current = true;
    setBusy(true);
    setError("");
    setConfirmation(false);
    try {
      const response = await fetch(isNew ? "/api/prices" : `/api/prices/${activeCard.id}`, {
        method: isNew ? "POST" : "PATCH",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isNew ? { kind: activeCard.kind, title, price } : { title, price }),
      });
      if (!response.ok) {
        setError(response.status === 401 || response.status === 403
          ? "Сесія завершилась. Увійдіть знову; ваші зміни залишаться тут."
          : "Не вдалося зберегти. Перевірте дані та спробуйте ще раз.");
        return;
      }
      const { doc } = await response.json() as { doc: PriceCard };
      setCards((current) => isNew
        ? [...current, doc].sort((left, right) => left.sortOrder - right.sortOrder || left.id - right.id)
        : current.map((card) => card.id === activeCard.id ? doc : card));
      setActiveCardId(null);
      setNewCard(null);
      setEditMode(false);
      setConfirmation(false);
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
    if (isNew) { closeCard(); setEditMode(false); return; }
    setConfirmation(true);
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
      setNewCard(null);
      setEditMode(false);
      setConfirmation(false);
      router.refresh();
    } catch {
      setError("З’єднання не вдалося. Картку не видалено.");
    } finally {
      pendingRef.current = false;
      setBusy(false);
    }
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
            valid={valid}
            draft={draft}
            error={error}
            onConfirm={() => { void removeConfirmed(); }}
            onDelete={remove}
            onDismissConfirmation={() => setConfirmation(false)}
            onSave={save}
            setDraft={(value) => { setDraft(value); setConfirmation(false); }}
          />
        ) : null}
        onSelect={() => openCard(card)}
        selectable={canEdit && editMode && !editing}
      />
    );
  };

  const addButton = (kind: PriceCard["kind"], label: string) => canEdit && editMode ? (
    <button
      aria-label={`Додати картку: ${label}`}
      data-price-control
      className={`${styles.control} flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white/85 backdrop-blur-md transition-colors hover:border-[var(--color-primary)] hover:text-white disabled:opacity-40`}
      disabled={busy}
      onClick={() => createCard(kind)}
      type="button"
    >
      <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M12 5v14M5 12h14" />
      </svg>
    </button>
  ) : null;

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
          data-price-control
          className={`${styles.control} absolute right-5 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/75 text-xl text-white shadow-lg hover:border-[var(--color-primary)] disabled:opacity-40 sm:right-10 sm:top-20`}
          disabled={busy}
          onClick={toggleEditMode}
          type="button"
        >✎</button>
      ) : null}

      <Container className="relative z-10 py-24 sm:py-28 lg:py-32" size="wide">
        <div className="mx-auto flex w-full max-w-[43rem] flex-col gap-7 sm:gap-8">
          <section aria-labelledby="pricing-memberships" className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-[clamp(1.9rem,4vw,3rem)] font-medium leading-none tracking-[-0.04em] text-white" id="pricing-memberships">{content.title}</h1>
              {addButton("subscription", content.title)}
            </div>
            {activePlan ? (
              <div
                aria-label="Абонементи"
                className="outline-none"
                onKeyDown={(event) => {
                  if (event.target instanceof Element && event.target.closest("form")) return;
                  if (event.key === "ArrowLeft") { event.preventDefault(); move("previous"); }
                  if (event.key === "ArrowRight") { event.preventDefault(); move("next"); }
                }}
                onTouchEnd={(event) => {
                  const start = touchStartXRef.current;
                  touchStartXRef.current = null;
                  if (start === null || activeCard) return;
                  const delta = event.changedTouches[0].clientX - start;
                  if (Math.abs(delta) >= 42) move(delta > 0 ? "previous" : "next");
                }}
                onTouchStart={(event) => { touchStartXRef.current = activeCard ? null : event.touches[0].clientX; }}
                role="region"
                tabIndex={0}
              >
                <div className={`grid items-center sm:grid-cols-[3.5rem_minmax(0,1fr)_3.5rem] sm:gap-6 ${activeCard?.kind === "subscription" ? "grid-cols-[1.25rem_minmax(0,1fr)_1.25rem] gap-1" : "grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] gap-4"}`}>
                  <CarouselButton direction="previous" editing={activeCard?.kind === "subscription"} onClick={() => move("previous")} />
                  <div className="min-w-0">{renderCard(activePlan, false)}</div>
                  <CarouselButton direction="next" editing={activeCard?.kind === "subscription"} onClick={() => move("next")} />
                </div>
              </div>
            ) : null}
          </section>

          {singleCards.length > 0 || (canEdit && editMode) ? (
            <section aria-label="Разове групове тренування" className="space-y-7">
              <SectionDivider />
              {canEdit && editMode ? (
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-[clamp(1.25rem,2.4vw,1.65rem)] font-medium leading-tight tracking-[-0.02em]">Разове групове тренування</h2>
                  {addButton("single", "Разове групове тренування")}
                </div>
              ) : null}
              {singleCards.map((card) => (
                <div className="flex justify-center" key={card.id}>{renderCard(card, true, "w-full max-w-[23rem] py-3.5 sm:max-w-[27rem]")}</div>
              ))}
            </section>
          ) : null}

          {personalCards.length > 0 || (canEdit && editMode) ? (
            <>
              <SectionDivider />
              <section aria-labelledby="pricing-personal" className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-[clamp(1.25rem,2.4vw,1.65rem)] font-medium leading-tight tracking-[-0.02em] text-white" id="pricing-personal">{content.personalTrainingTitle}</h2>
                  {addButton("personal", content.personalTrainingTitle)}
                </div>
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
