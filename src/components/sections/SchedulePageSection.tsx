"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";

import type { ScheduleEntry, ScheduleLocationSchedule, SchedulePageContent } from "@/types/content";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils/cn";
import styles from "./PricingPageSection.module.css";
import scheduleStyles from "./SchedulePageSection.module.css";

type SchedulePageSectionProps = {
  content: SchedulePageContent;
  locations: ScheduleLocationSchedule[];
  initialEntries: ScheduleEntry[];
  canEdit: boolean;
};

export function SchedulePageSection({
  content,
  locations,
  initialEntries,
  canEdit,
}: SchedulePageSectionProps) {
  const router = useRouter();
  const fallbackLocationId = locations[0]?.id ?? "";
  const [activeLocationId, setActiveLocationId] = useState(
    content.defaultLocationId || fallbackLocationId,
  );

  const activeLocation = useMemo(
    () =>
      locations.find((location) => location.id === activeLocationId) ??
      locations[0],
    [activeLocationId, locations],
  );

  const [entries, setEntries] = useState(initialEntries);
  const [previousEntries, setPreviousEntries] = useState(initialEntries);
  if (previousEntries !== initialEntries) {
    setPreviousEntries(initialEntries);
    setEntries(initialEntries);
  }
  const [editMode, setEditMode] = useState(false);
  const [activeEntry, setActiveEntry] = useState<ScheduleEntry | null>(null);
  const [draft, setDraft] = useState({ time: "", group: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const pendingRef = useRef(false);
  const editorRef = useRef<HTMLElement | null>(null);
  const isNew = activeEntry?.id === -1;
  const valid = /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(draft.time) && draft.group.trim().length > 0 && draft.group.trim().length <= 100;
  const dirty = Boolean(activeEntry && (isNew || draft.time !== activeEntry.time || draft.group.trim() !== activeEntry.group));

  useEffect(() => {
    if (!activeEntry) return;
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest("[data-schedule-control]")) return;
      if (!pendingRef.current && !editorRef.current?.contains(event.target as Node)) {
        setActiveEntry(null);
        setError("");
        setConfirmation(false);
      }
    };
    document.addEventListener("pointerdown", onOutside);
    return () => document.removeEventListener("pointerdown", onOutside);
  }, [activeEntry]);

  const openEntry = (entry: ScheduleEntry) => {
    if (pendingRef.current) return;
    setActiveEntry(entry);
    setDraft({ time: entry.time, group: entry.group });
    setError("");
    setConfirmation(false);
  };

  const createEntry = (locationId: string, dayId: string) => {
    if (!canEdit || !editMode || pendingRef.current) return;
    const sortOrder = Math.max(-1, ...entries.filter((entry) => entry.locationId === locationId && entry.dayId === dayId).map((entry) => entry.sortOrder)) + 1;
    openEntry({ id: -1, key: "", locationId, dayId, sortOrder, time: "", group: "" });
  };

  const save = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!activeEntry || !dirty || !valid || pendingRef.current) return;
    pendingRef.current = true;
    setBusy(true);
    setError("");
    setConfirmation(false);
    try {
      const response = await fetch(isNew ? "/api/schedule-entries" : `/api/schedule-entries/${activeEntry.id}`, {
        method: isNew ? "POST" : "PATCH", credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isNew ? { locationId: activeEntry.locationId, dayId: activeEntry.dayId, time: draft.time, group: draft.group.trim() } : { time: draft.time, group: draft.group.trim() }),
      });
      if (!response.ok) {
        setError(response.status === 401 || response.status === 403
          ? "Сесія завершилась. Увійдіть знову; ваші зміни залишаться тут."
          : "Не вдалося зберегти. Перевірте дані та спробуйте ще раз.");
        return;
      }
      const { doc } = await response.json() as { doc: ScheduleEntry };
      setEntries((current) => isNew ? [...current, doc] : current.map((entry) => entry.id === activeEntry.id ? doc : entry));
      setActiveEntry(null);
      setEditMode(false);
      router.refresh();
    } catch {
      setError("З’єднання не вдалося. Зміни залишилися в редакторі.");
    } finally { pendingRef.current = false; setBusy(false); }
  };

  const removeConfirmed = async () => {
    if (!activeEntry || pendingRef.current) return;
    pendingRef.current = true;
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`/api/schedule-entries/${activeEntry.id}`, { method: "DELETE", credentials: "same-origin" });
      if (!response.ok) {
        setError(response.status === 401 || response.status === 403
          ? "Сесія завершилась. Увійдіть знову; ваші зміни залишаться тут."
          : "Не вдалося видалити тренування. Спробуйте ще раз.");
        return;
      }
      setEntries((current) => current.filter((entry) => entry.id !== activeEntry.id));
      setActiveEntry(null);
      setEditMode(false);
      setConfirmation(false);
      router.refresh();
    } catch {
      setError("З’єднання не вдалося. Тренування не видалено.");
    } finally { pendingRef.current = false; setBusy(false); }
  };

  if (!activeLocation) {
    return null;
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--color-canvas)] text-white">
      <div className="absolute inset-0">
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-[center_24%] sm:object-[center_20%] lg:object-[center_18%]"
          fill
          priority
          sizes="100vw"
          src={content.backgroundImageSrc}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(4_6_8_/_0.78)_0%,rgb(4_6_8_/_0.82)_32%,rgb(4_6_8_/_0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(255_255_255_/_0.1),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_8_8_/_0.38)_0%,transparent_32%,transparent_68%,rgb(8_8_8_/_0.24)_100%)]" />
      </div>

      {canEdit ? (
        <button aria-label={editMode ? "Завершити редагування розкладу" : "Редагувати розклад"}
          aria-pressed={editMode} data-schedule-control
          className={`${styles.control} absolute right-5 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/75 text-xl text-white shadow-lg hover:border-[var(--color-primary)] disabled:opacity-40 sm:right-10 sm:top-20`}
          disabled={busy} onClick={() => { setActiveEntry(null); setError(""); setConfirmation(false); setEditMode((current) => !current); }} type="button">✎</button>
      ) : null}

      <Container className="relative z-10 flex min-h-screen items-start py-28 sm:py-32 lg:py-36" size="wide">
        <div className="mx-auto flex w-full flex-col gap-8 lg:gap-10">
          <div className="space-y-6 text-center">
            <h1 className="text-balance text-[clamp(2.8rem,7vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.075em] text-white">
              {content.title}
            </h1>

            <div
              aria-label="Оберіть локацію"
              className="mx-auto inline-flex w-full max-w-[34rem] flex-wrap items-center justify-center gap-3 rounded-[var(--radius-card-md)] border border-[rgb(255_255_255_/_0.14)] bg-[rgb(6_8_10_/_0.28)] p-2 backdrop-blur-md"
              role="tablist"
            >
              {locations.map((location) => {
                const isActive = location.id === activeLocation.id;

                return (
                  <button
                    key={location.id}
                    disabled={busy}
                    aria-selected={isActive}
                    className={cn(
                      "min-h-12 rounded-[var(--radius-button)] border px-5 py-3 text-sm font-semibold tracking-[0.08em] text-white transition-colors duration-200",
                      isActive
                        ? "border-[var(--color-primary)] bg-[rgb(218_41_28_/_0.22)] shadow-[0_0_0_1px_rgb(218_41_28_/_0.25)]"
                        : "border-[rgb(255_255_255_/_0.18)] bg-[rgb(255_255_255_/_0.04)] hover:border-[rgb(255_255_255_/_0.34)] hover:bg-[rgb(255_255_255_/_0.08)]",
                    )}
                    onClick={() => { if (pendingRef.current) return; setActiveLocationId(location.id); setActiveEntry(null); setError(""); setConfirmation(false); }}
                    role="tab"
                    type="button"
                  >
                    {location.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[var(--radius-card-lg)] border border-[rgb(255_255_255_/_0.14)] bg-[linear-gradient(180deg,rgb(10_12_15_/_0.54),rgb(8_10_12_/_0.72))] p-4 shadow-[0_24px_80px_rgb(0_0_0_/_0.26)] backdrop-blur-xl sm:p-5 lg:p-7">
            <div className="rounded-[calc(var(--radius-card-lg)-0.35rem)] border border-[rgb(255_255_255_/_0.08)] bg-[rgb(255_255_255_/_0.04)] p-4 sm:p-5 lg:p-6">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-[rgb(255_255_255_/_0.08)] pb-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.22em] text-[rgb(255_255_255_/_0.54)]">
                    Активна локація
                  </p>
                  <h2 className="text-balance text-[clamp(1.55rem,3vw,2.4rem)] font-medium leading-[1] tracking-[-0.05em] text-white">
                    {activeLocation.label}
                  </h2>
                </div>
              </div>

              <div className="grid items-start gap-3 md:grid-cols-2 md:items-stretch xl:grid-cols-6">
                {activeLocation.days.map((day) => (
                  <section
                    key={day.id}
                    aria-labelledby={`schedule-day-${day.id}`}
                    className={`${scheduleStyles.day} flex min-w-0 flex-col rounded-[var(--radius-card-md)] border border-[rgb(255_255_255_/_0.12)] bg-[linear-gradient(180deg,rgb(255_255_255_/_0.08),rgb(255_255_255_/_0.03))] p-3 shadow-[0_10px_30px_rgb(0_0_0_/_0.14)] backdrop-blur-md`}
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-[rgb(255_255_255_/_0.08)] pb-2">
                      <h3 id={`schedule-day-${day.id}`} className="text-sm font-semibold tracking-[0.08em] text-white/72">{day.label}</h3>
                    </div>

                    <div className="mt-3 flex min-w-0 flex-1 flex-col gap-2.5">
                      {[...entries.filter((entry) => entry.locationId === activeLocation.id && entry.dayId === day.id),
                        ...(activeEntry?.id === -1 && activeEntry.locationId === activeLocation.id && activeEntry.dayId === day.id ? [activeEntry] : [])]
                        .sort((left, right) => left.sortOrder - right.sortOrder || left.id - right.id).map((entry) => (
                        <article
                          key={entry.id}
                          ref={activeEntry?.id === entry.id ? editorRef : undefined}
                          data-editing={activeEntry?.id === entry.id}
                          data-schedule-control={canEdit && editMode && activeEntry?.id !== entry.id ? true : undefined}
                          className={cn(scheduleStyles.training, "min-w-0 rounded-[var(--radius-card-sm)] border border-[rgb(255_255_255_/_0.14)] bg-[rgb(255_255_255_/_0.08)] px-3 py-3 backdrop-blur-md", canEdit && editMode && activeEntry?.id !== entry.id && `cursor-pointer hover:border-white/35 ${styles.control}`)}
                          onClick={canEdit && editMode && activeEntry?.id !== entry.id ? () => openEntry(entry) : undefined}
                          onKeyDown={canEdit && editMode && activeEntry?.id !== entry.id ? (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openEntry(entry); } } : undefined}
                          role={canEdit && editMode && activeEntry?.id !== entry.id ? "button" : undefined}
                          tabIndex={canEdit && editMode && activeEntry?.id !== entry.id ? 0 : undefined}
                        >
                          {activeEntry?.id === entry.id ? (
                            <form className="w-full min-w-0 space-y-3" onSubmit={save}>
                              <label className={`${styles.field} w-full min-w-0`}>Час
                                <span className={`${styles.input} ${scheduleStyles.timeInputFrame}`}>
                                  <input className={scheduleStyles.timeInput} disabled={busy} required step={60} type="time"
                                    value={draft.time} onChange={(event) => { setDraft({ ...draft, time: event.target.value }); setConfirmation(false); }} />
                                </span>
                              </label>
                              <label className={styles.field}>Група
                                <input className={styles.input} disabled={busy} maxLength={100} required value={draft.group}
                                  onChange={(event) => { setDraft({ ...draft, group: event.target.value }); setConfirmation(false); }} />
                              </label>
                              {error ? <p aria-live="polite" className="text-xs text-red-300">{error}</p> : null}
                              {confirmation ? <div aria-label="Підтвердження дії" aria-live="polite" className="space-y-2 text-xs" role="group">
                                <p>Видалити це тренування?</p>
                                <div className="flex gap-2">
                                  <button className={`${styles.action} ${styles.control}`} disabled={busy} onClick={() => setConfirmation(false)} type="button">Ні</button>
                                  <button className={`${styles.action} ${styles.control}`} disabled={busy} onClick={() => { void removeConfirmed(); }} type="button">Так</button>
                                </div>
                              </div> : null}
                              <div className={`${scheduleStyles.actions} grid grid-cols-2 gap-1`}>
                                <button className={`${styles.action} ${styles.control}`} disabled={busy} onClick={() => { if (isNew) { setActiveEntry(null); setEditMode(false); } else setConfirmation(true); }} type="button">Видалити</button>
                                <button className={`${styles.action} ${styles.save} ${styles.control}`} disabled={!dirty || !valid || busy} type="submit">{busy ? "Зачекайте…" : "Зберегти"}</button>
                              </div>
                            </form>
                          ) : <><p className="text-[1.05rem] font-semibold leading-none tracking-[-0.04em] text-white">{entry.time}</p>
                            <p className="mt-2 text-sm leading-[1.25] text-white/78">{entry.group}</p></>}
                        </article>
                      ))}
                      {canEdit && editMode && !(isNew && activeEntry?.locationId === activeLocation.id && activeEntry.dayId === day.id) ? (
                        <button aria-label={`Додати тренування: ${day.label}`} data-schedule-control
                          className={`${scheduleStyles.training} ${styles.control} flex min-h-16 w-full items-center justify-center rounded-[var(--radius-card-sm)] border border-white/14 bg-white/[0.025] px-3 py-3 text-white/85 backdrop-blur-md disabled:opacity-40`}
                          disabled={busy} onClick={() => createEntry(activeLocation.id, day.id)} type="button">
                          <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
                        </button>
                      ) : null}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
