"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const GYRE_LOGO_SRC =
  "https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/Gyre-Logo.png";

interface PageLoadAnimationGyreProps {
  children: React.ReactNode;
}

export function PageLoadAnimationGyre({ children }: PageLoadAnimationGyreProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const flow1Ref = useRef<HTMLDivElement>(null);
  const flow2Ref = useRef<HTMLDivElement>(null);
  const flow3Ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const flows = [flow1Ref.current, flow2Ref.current, flow3Ref.current].filter(
      Boolean
    );

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        flows,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.5,
          duration: 1.2,
          stagger: 0.1,
          delay: 0.1,
          ease: "back.out(1.2)",
        }
      );

      flows.forEach((flow, i) => {
        const angle = (i / flows.length) * Math.PI * 2 + 0.5;
        const radius = 80 + i * 25;
        const duration = 4 + i * 0.5;
        const delay = 1 + i * 0.2;

        gsap.to(flow, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          duration,
          delay,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      gsap.to(flows, {
        scale: 1.15,
        opacity: 0.65,
        duration: 2,
        stagger: 0.2,
        delay: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const tl = gsap.timeline({
        delay: 4,
        onComplete: () => setIsVisible(false),
      });

      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      }).fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-gyre-deep transition-opacity ${
          !isVisible ? "pointer-events-none" : ""
        }`}
        aria-hidden={!isVisible}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={flow1Ref}
            className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:size-64"
            style={{
              background:
                "radial-gradient(circle, #F20544 0%, transparent 70%)",
              opacity: 0.5,
            }}
          />
          <div
            ref={flow2Ref}
            className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:size-72"
            style={{
              background:
                "radial-gradient(circle, #011C26 0%, transparent 70%)",
              opacity: 0.6,
            }}
          />
          <div
            ref={flow3Ref}
            className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:size-56"
            style={{
              background:
                "radial-gradient(circle, rgba(255,71,172,0.6) 0%, transparent 70%)",
              opacity: 0.4,
            }}
          />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "linear-gradient(135deg, #011C26 0%, #F20544 40%, #0D0D0D 70%, #011C26 100%)",
              backgroundSize: "400% 400%",
              animation: "gradientFlow 8s ease infinite",
            }}
          />
        </div>

        <div
          ref={logoRef}
          className="relative z-10 flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-4 drop-shadow-2xl sm:gap-6">
            <Image
              src="/images/new_logo.png"
              alt="La Neta"
              width={120}
              height={120}
              className="h-auto w-24 sm:w-28 md:w-32"
              priority
            />
            <span className="text-3xl font-bold text-gyre-red sm:text-4xl">
              ×
            </span>
            <Image
              src={GYRE_LOGO_SRC}
              alt="Gyre"
              width={140}
              height={48}
              className="h-10 w-auto object-contain sm:h-12 md:h-14"
            />
          </div>
          <p className="text-center text-lg font-medium tracking-wide text-gyre-muted sm:text-xl">
            La Neta and Gyre
          </p>
          <p className="max-w-xs text-center text-sm text-gyre-muted/70">
            24/7 pre-recorded live streaming for YouTube
          </p>
        </div>
      </div>

      <div
        ref={contentRef}
        className={isVisible ? "opacity-0" : "opacity-100"}
      >
        {children}
      </div>
    </div>
  );
}
