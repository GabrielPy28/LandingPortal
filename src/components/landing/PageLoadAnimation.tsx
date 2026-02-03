"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface PageLoadAnimationProps {
  children: React.ReactNode;
}

export function PageLoadAnimation({ children }: PageLoadAnimationProps) {
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
      // Logo entrance - scale up with glow
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

      // Explosion of colors - initial burst
      gsap.fromTo(
        flows,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.7,
          duration: 1.2,
          stagger: 0.08,
          delay: 0.1,
          ease: "back.out(1.2)",
        }
      );

      // Color flow orbs - "corriente de colores" flowing motion
      flows.forEach((flow, i) => {
        const angle = (i / flows.length) * Math.PI * 2 + 0.5;
        const radius = 120 + i * 25;
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

      // Subtle pulse - keeps the flow alive
      gsap.to(flows, {
        scale: 1.15,
        opacity: 0.85,
        duration: 2,
        stagger: 0.15,
        delay: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Transition out - fade overlay and reveal content
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
      {/* Splash overlay - Creative Flow / Explosion of colors */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-meta-dark transition-opacity ${
          !isVisible ? "pointer-events-none" : ""
        }`}
        aria-hidden={!isVisible}
      >
        {/* Flowing color orbs - "corriente de colores" */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={flow1Ref}
            className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #6641ed 0%, transparent 70%)",
            }}
          />
          <div
            ref={flow2Ref}
            className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #ff47ac 0%, transparent 70%)",
            }}
          />
          <div
            ref={flow3Ref}
            className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #79bcf7 0%, transparent 70%)",
            }}
          />
          <div
            ref={flow4Ref}
            className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,71,172,0.6) 0%, rgba(102,65,237,0.4) 50%, transparent 70%)",
            }}
          />
          <div
            ref={flow5Ref}
            className="absolute left-1/2 top-1/2 size-60 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(121,188,247,0.6) 0%, rgba(102,65,237,0.3) 50%, transparent 70%)",
            }}
          />

          {/* Animated gradient waves - flowing current effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(45deg, #6641ed 0%, #ff47ac 25%, #79bcf7 50%, #6641ed 75%, #ff47ac 100%)",
              backgroundSize: "400% 400%",
              animation: "gradientFlow 6s ease infinite",
            }}
          />
        </div>

        {/* Logo - La Neta */}
        <div
          ref={logoRef}
          className="relative z-10 flex flex-col items-center gap-4"
        >
          <div className="drop-shadow-2xl">
            <Image
              src="/images/new_logo.png"
              alt="La Neta - Creative Flow"
              width={280}
              height={280}
              className="h-auto w-64 sm:w-72 md:w-80"
              priority
            />
          </div>
          <p className="text-center text-lg font-medium tracking-wide text-white/90 sm:text-xl">
            META × La Neta
          </p>
          <p className="max-w-xs text-center text-sm text-white/70">
            Your creative flow meets new opportunities
          </p>
        </div>
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        className={isVisible ? "opacity-0" : "opacity-100"}
      >
        {children}
      </div>

    </div>
  );
}
