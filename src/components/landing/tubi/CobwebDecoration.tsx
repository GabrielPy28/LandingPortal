"use client";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";

interface CobwebDecorationProps {
  position?: Position;
  className?: string;
  size?: "sm" | "md" | "lg";
  opacity?: number;
}

const sizeClasses = { sm: "h-24 w-24 md:h-32 md:w-32", md: "h-40 w-40 md:h-52 md:w-52", lg: "h-48 w-64 md:h-64 md:w-80" };

const positionClasses: Record<Position, string> = {
  "top-left": "left-0 top-0",
  "top-right": "right-0 top-0 rotate-90",
  "bottom-left": "bottom-0 left-0 rotate-180",
  "bottom-right": "bottom-0 right-0 -rotate-90",
  "center-left": "left-0 top-1/2 -translate-y-1/2",
  "center-right": "right-0 top-1/2 -translate-y-1/2 rotate-90",
};

export function CobwebDecoration({
  position = "top-left",
  className = "",
  size = "md",
  opacity = 0.12,
}: CobwebDecorationProps) {
  return (
    <div
      className={`pointer-events-none absolute ${sizeClasses[size]} ${positionClasses[position]} ${className}`}
      style={{ opacity }}
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="h-full w-full text-tubi-yellow">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          d="M0 0 Q20 15 40 0 Q60 15 80 0 Q100 15 100 0 M50 0 L50 50 M20 20 L50 50 L80 20 M50 50 L50 100 M30 35 L50 50 L70 35 M50 50 L50 70"
        />
      </svg>
    </div>
  );
}

/** Full cobweb in corner - more detailed */
export function CobwebCorner({ position = "top-left", className = "" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; className?: string }) {
  const rot = position === "top-right" ? "rotate-90" : position === "bottom-left" ? "rotate-180" : position === "bottom-right" ? "-rotate-90" : "";
  const pos =
    position === "top-left"
      ? "left-0 top-0"
      : position === "top-right"
        ? "right-0 top-0"
        : position === "bottom-left"
          ? "bottom-0 left-0"
          : "bottom-0 right-0";
  return (
    <div className={`pointer-events-none absolute h-36 w-36 opacity-[0.14] md:h-48 md:w-48 md:opacity-[0.12] ${pos} ${rot} ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" className="h-full w-full text-tubi-yellow">
        <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M0 0 Q25 25 50 0 Q75 25 100 0 M50 0 L50 50 M25 25 L50 50 L75 25 M50 50 L50 100 M15 15 L50 50 M85 15 L50 50 M50 50 L50 75" />
      </svg>
    </div>
  );
}
