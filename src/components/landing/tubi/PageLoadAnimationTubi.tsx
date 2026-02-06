"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface PageLoadAnimationTubiProps {
  children: React.ReactNode;
}

export function PageLoadAnimationTubi({ children }: PageLoadAnimationTubiProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const flow1Ref = useRef<HTMLDivElement>(null);
  const flow2Ref = useRef<HTMLDivElement>(null);
  const flow3Ref = useRef<HTMLDivElement>(null);
  const flow4Ref = useRef<HTMLDivElement>(null);
  const flow5Ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const flows = [
      flow1Ref.current,
      flow2Ref.current,
      flow3Ref.current,
      flow4Ref.current,
      flow5Ref.current,
    ].filter(Boolean);

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
          opacity: 0.6,
          duration: 1.2,
          stagger: 0.08,
          delay: 0.1,
          ease: "back.out(1.2)",
        }
      );

      flows.forEach((flow, i) => {
        const angle = (i / flows.length) * Math.PI * 2 + 0.5;
        const radius = 100 + i * 20;
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
        scale: 1.12,
        opacity: 0.75,
        duration: 2,
        stagger: 0.15,
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
        className={`fixed inset-0 z-50 flex items-center justify-center bg-tubi-dark transition-opacity ${
          !isVisible ? "pointer-events-none" : ""
        }`}
        aria-hidden={!isVisible}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={flow1Ref}
            className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:size-64"
            style={{
              background: "radial-gradient(circle, #F7F590 0%, transparent 70%)",
              opacity: 0.5,
            }}
          />
          <div
            ref={flow2Ref}
            className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:size-72"
            style={{
              background: "radial-gradient(circle, #45009D 0%, transparent 70%)",
              opacity: 0.5,
            }}
          />
          <div
            ref={flow3Ref}
            className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:size-56"
            style={{
              background: "radial-gradient(circle, #6641ed 0%, transparent 70%)",
              opacity: 0.45,
            }}
          />
          <div
            ref={flow4Ref}
            className="absolute left-1/2 top-1/2 size-60 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:size-72"
            style={{
              background: "radial-gradient(circle, rgba(121,188,247,0.7) 0%, transparent 70%)",
              opacity: 0.4,
            }}
          />
          <div
            ref={flow5Ref}
            className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:size-60"
            style={{
              background: "radial-gradient(circle, rgba(255,71,172,0.6) 0%, transparent 70%)",
              opacity: 0.4,
            }}
          />

          <div
            className="absolute inset-0 opacity-25"
            style={{
              background:
                "linear-gradient(135deg, #0A0019 0%, #45009D 30%, #F7F590 50%, #6641ed 70%, #0A0019 100%)",
              backgroundSize: "400% 400%",
              animation: "gradientFlow 8s ease infinite",
            }}
          />
        </div>

        <div
          ref={logoRef}
          className="relative z-10 flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-6 drop-shadow-2xl">
            <Image
              src="/images/new_logo.png"
              alt="La Neta"
              width={120}
              height={120}
              className="h-auto w-24 sm:w-28 md:w-32"
              priority
            />
            <span className="text-3xl font-bold text-tubi-yellow/90 sm:text-4xl">
              ×
            </span>
            <span className="text-3xl font-bold text-tubi-yellow sm:text-4xl md:text-5xl">
              Tubi
            </span>
          </div>
          <p className="text-center text-lg font-medium tracking-wide text-tubi-yellow/90 sm:text-xl">
            La Neta × Tubi
          </p>
          <p className="max-w-xs text-center text-sm text-tubi-yellow/70">
            Your long-form content. On Tubi.
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
