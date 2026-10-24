"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { CmsLoginForm } from "@/components/sections/CmsLoginForm";
import styles from "./CmsLoginLink.module.css";

export function CmsLoginLink({ children, className }: { children: ReactNode; className: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const heldRef = useRef(false);
  const checkingRef = useRef(false);
  const originRef = useRef({ x: 0, y: 0, touch: false });
  const [open, setOpen] = useState(false);

  const cancelHold = () => {
    if (timerRef.current !== null) clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => cancelHold, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    const link = linkRef.current;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      heldRef.current = false;
      link?.focus();
    };
  }, [open]);

  const startHold = () => {
    cancelHold();
    heldRef.current = false;
    timerRef.current = setTimeout(async () => {
      timerRef.current = null;
      heldRef.current = true;
      if (checkingRef.current) return;
      checkingRef.current = true;
      try {
        const response = await fetch("/api/admins/me", { credentials: "same-origin", cache: "no-store" });
        const result = response.ok ? await response.json() : null;
        if (result?.user?.collection === "admins") return;
        setOpen(true);
      } catch {
        setOpen(true);
      } finally {
        checkingRef.current = false;
      }
    }, 1000);
  };

  return (
    <>
      <Link className={`${className} ${styles.logo}`} href="/" ref={linkRef}
        onPointerDown={(event) => {
          if (event.button !== 0 || !event.isPrimary) return;
          originRef.current = { x: event.clientX, y: event.clientY, touch: event.pointerType === "touch" };
          startHold();
        }}
        onPointerMove={(event) => {
          if (Math.hypot(event.clientX - originRef.current.x, event.clientY - originRef.current.y) > 10) cancelHold();
        }}
        onPointerUp={cancelHold} onPointerCancel={cancelHold} onPointerLeave={cancelHold} onBlur={cancelHold}
        onDragStart={(event) => event.preventDefault()}
        onContextMenu={(event) => { if (originRef.current.touch) event.preventDefault(); }}
        onKeyDown={(event) => {
          if (event.key === " ") { event.preventDefault(); if (!event.repeat) startHold(); }
          else { cancelHold(); heldRef.current = false; }
        }}
        onKeyUp={(event) => { if (event.key === " ") { event.preventDefault(); cancelHold(); } }}
        onClick={(event) => { if (heldRef.current) { event.preventDefault(); heldRef.current = false; } }}>
        {children}
      </Link>
      {open ? <dialog aria-label="Вхід редактора" className={styles.dialog} ref={dialogRef}
        onCancel={() => setOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <button aria-label="Закрити вхід" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded text-xl text-white/70" onClick={() => setOpen(false)} type="button">×</button>
        <CmsLoginForm onSuccess={() => setOpen(false)} />
      </dialog> : null}
    </>
  );
}
