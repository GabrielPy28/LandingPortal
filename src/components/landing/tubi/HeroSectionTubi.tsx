"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { CobwebCorner } from "./CobwebDecoration";

interface HeroSectionTubiProps {
  onTryIt: () => void;
}

export function HeroSectionTubi({ onTryIt }: HeroSectionTubiProps) {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.6 });
      gsap.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.9 });
      gsap.fromTo(logoRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.3 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-tubi-dark"
    >
      {/* Video background - Halloween / terror subtle */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source src="/video/video_tubi/payaso.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-tubi-dark/90 via-tubi-dark/85 to-tubi-dark" />
      </div>

      <CobwebCorner position="top-left" className="opacity-20" />
      <CobwebCorner position="top-right" className="opacity-15" />
      <CobwebCorner position="bottom-left" className="opacity-15" />
      <CobwebCorner position="bottom-right" className="opacity-20" />

      {/* Bat silhouette - decorative */}
      <div
        className="pointer-events-none absolute right-[15%] top-[20%] opacity-20"
        aria-hidden
      >
        <svg width="40" height="24" viewBox="0 0 40 24" fill="currentColor" className="text-tubi-yellow">
          <path d="M20 0C12 8 4 6 0 12c4 2 8 0 12 4 4-4 8-2 12-4-4-6-12-4-20-12zm0 12c-4 4-8 4-12 2 2 4 6 6 12 6s10-2 12-6c-4 2-8 2-12-2z" />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute left-[10%] top-[35%] opacity-15"
        aria-hidden
      >
        <svg width="32" height="20" viewBox="0 0 40 24" fill="currentColor" className="text-tubi-yellow scale-75">
          <path d="M20 0C12 8 4 6 0 12c4 2 8 0 12 4 4-4 8-2 12-4-4-6-12-4-20-12zm0 12c-4 4-8 4-12 2 2 4 6 6 12 6s10-2 12-6c-4 2-8 2-12-2z" />
        </svg>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <div ref={logoRef} className="mb-8 flex items-center gap-4">
          <Image src="/images/new_logo.png" alt="La Neta Logo" width={64} height={64} className="object-contain" />
          <span className="text-xl font-bold text-tubi-yellow">La Neta</span>
          <span className="text-tubi-purple font-bold">×</span>
          <span className="text-2xl font-bold text-tubi-yellow">Tubi</span>
        </div>

        <div
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-tubi-yellow/50 bg-tubi-yellow/10 px-4 py-2 text-sm text-tubi-yellow"
        >
          Horror · Thriller · Mystery
        </div>

        <h1
          ref={titleRef}
          className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Your long-form content.{" "}
          <span className="bg-gradient-to-r from-tubi-yellow via-tubi-purple to-laneta-pink bg-clip-text text-transparent">
            On Tubi.
          </span>
        </h1>

        <p ref={subtitleRef} className="mt-6 max-w-2xl text-xl text-tubi-yellow/90 sm:text-2xl">
          Partner with La Neta to distribute your long-form horror, thriller, and mystery
          content on Tubi. Reach 97M+ monthly viewers, earn 50% of net revenue from your content,
          and get featured in Creatorverse. Ideal for YouTube creators with 15+ minute videos.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={onTryIt}
            className="cursor-pointer bg-tubi-yellow px-8 py-6 text-lg font-semibold text-tubi-dark hover:bg-tubi-dark hover:text-tubi-yellow"
          >
            Try it
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-tubi-yellow/50 bg-tubi-yellow/5 px-8 py-6 text-lg text-tubi-yellow hover:bg-white/15 hover:text-white"
          >
            <a href="#opportunity">See the opportunity</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
