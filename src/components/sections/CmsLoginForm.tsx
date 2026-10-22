"use client";

import { useState, type FormEvent } from "react";

export function CmsLoginForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");

    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/admins/login", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
      });
      if (!response.ok) {
        setError("Не вдалося увійти. Перевірте email і пароль.");
        return;
      }
      // Full navigation lets the server read Payload's new HttpOnly cookie immediately.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign("/pricing");
    } catch {
      setError("З’єднання не вдалося. Спробуйте ще раз.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[var(--color-canvas)] px-5 py-20 text-white">
      <form className="w-full max-w-sm space-y-5 rounded-[1rem] border border-white/16 bg-[#111315] p-7" onSubmit={submit}>
        <h1 className="text-2xl font-medium">Вхід редактора</h1>
        <label className="block space-y-2 text-sm">
          <span>Email</span>
          <input autoComplete="username" className="w-full rounded-[var(--radius-sm)] border border-white/30 bg-black/40 px-3 py-2 text-white" name="email" required type="email" />
        </label>
        <label className="block space-y-2 text-sm">
          <span>Пароль</span>
          <input autoComplete="current-password" className="w-full rounded-[var(--radius-sm)] border border-white/30 bg-black/40 px-3 py-2 text-white" name="password" required type="password" />
        </label>
        {error ? <p aria-live="polite" className="text-sm text-red-300">{error}</p> : null}
        <button className="w-full rounded-[var(--radius-sm)] bg-[var(--color-primary)] px-4 py-3 font-medium disabled:opacity-50" disabled={busy} type="submit">
          {busy ? "Входимо…" : "Увійти"}
        </button>
      </form>
    </section>
  );
}
