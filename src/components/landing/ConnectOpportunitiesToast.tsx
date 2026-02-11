"use client";

import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";

const TOAST_DELAY_MS = 10000; // show after 10s
const TOAST_AUTO_HIDE_MS = 8000; // auto-dismiss after 8s
const STORAGE_KEY = "laneta-connect-toast-seen";

interface ConnectOpportunitiesToastProps {
  onOpen: () => void;
}

export function ConnectOpportunitiesToast({ onOpen }: ConnectOpportunitiesToastProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // ignore
    }

    const showTimer = setTimeout(() => {
      setVisible(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    }, TOAST_DELAY_MS);

    return () => clearTimeout(showTimer);
  }, [mounted]);

  useEffect(() => {
    if (!visible) return;
    const hideTimer = setTimeout(() => setVisible(false), TOAST_AUTO_HIDE_MS);
    return () => clearTimeout(hideTimer);
  }, [visible]);

  const handleDismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-40 max-w-[320px] rounded-xl border border-white/10 bg-meta-dark/95 px-4 py-3 shadow-lg backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white/95">
            Curious which opportunities fit you?
          </p>
          <button
            type="button"
            onClick={() => {
              handleDismiss();
              onOpen();
            }}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-meta-pink hover:text-meta-pink/90 hover:underline"
          >
            <Sparkles className="size-3.5" />
            Find out
          </button>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="shrink-0 rounded p-1 text-white/60 hover:bg-white/10 hover:text-white"
          aria-label="Dismiss"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
