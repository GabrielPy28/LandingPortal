"use client";

import { Info } from "lucide-react";

/**
 * Bloque "What is this?" para la oportunidad Gyre.
 * - standalone: con borde y fondo (ej. uso futuro en otra sección).
 * - nested: solo texto, para integrar dentro de un panel (Why contacted).
 */
interface WhatIsThisGyreProps {
  variant?: "standalone" | "nested";
}

export function WhatIsThisGyre({ variant = "standalone" }: WhatIsThisGyreProps) {
  const isNested = variant === "nested";

  return (
    <div
      className={
        isNested
          ? "text-left"
          : "max-w-xl rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-left text-sm text-gyre-muted/90 backdrop-blur-md"
      }
    >
      <p className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gyre-muted">
        <Info className="size-3.5 shrink-0" aria-hidden />
        What is this?
      </p>
      <p className={isNested ? "text-gyre-muted/90 text-sm sm:text-base" : ""}>
        La Neta and Air offer Gyre so YouTube creators can run 24/7
        pre-recorded live streams. Boost watch time, monetize your back
        catalog, or keep your channel active. We can show you how it works and
        help you decide if it is right for you.
      </p>
    </div>
  );
}
