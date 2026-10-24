"use client";

import { useRef, useState, type FormEvent } from "react";

export function CmsLoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const pendingRef = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pendingRef.current) return;
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    if (!email || !password) {
      setError("Вкажіть email і пароль.");
      return;
    }
    pendingRef.current = true;
    setBusy(true);
    setError("");

    try {
      const response = await fetch("/api/admins/login", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        setError("Не вдалося увійти. Перевірте email і пароль.");
        return;
      }
      onSuccess?.();
      // Full navigation lets the server read Payload's new HttpOnly cookie immediately.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign("/");
    } catch {
      setError("З’єднання не вдалося. Спробуйте ще раз.");
    } finally {
      pendingRef.current = false;
      setBusy(false);
    }
  }

  return (
      <form className="w-full max-w-sm space-y-5 rounded-[1rem] border border-white/16 bg-[#111315] p-7" onSubmit={submit}>
        <h1 className="text-2xl font-medium">Вхід редактора</h1>
        <label className="block space-y-2 text-sm">
          <span>Email</span>
          <input autoComplete="username" className="w-full min-w-0 rounded-[var(--radius-sm)] border border-white/30 bg-black/40 px-3 py-2 text-white" disabled={busy} name="email" required type="email" />
        </label>
        <label className="block space-y-2 text-sm">
          <span>Пароль</span>
          <input autoComplete="current-password" className="w-full min-w-0 rounded-[var(--radius-sm)] border border-white/30 bg-black/40 px-3 py-2 text-white" disabled={busy} name="password" required type="password" />
        </label>
        {error ? <p aria-live="polite" className="text-sm text-red-300">{error}</p> : null}
        <button className="w-full rounded-[var(--radius-sm)] bg-[var(--color-primary)] px-4 py-3 font-medium disabled:opacity-50" disabled={busy} type="submit">
          {busy ? "Входимо…" : "Увійти"}
        </button>
      </form>
  );
}
