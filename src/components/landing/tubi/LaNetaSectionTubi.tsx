"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CobwebCorner } from "./CobwebDecoration";

gsap.registerPlugin(ScrollTrigger);

export function LaNetaSectionTubi() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: { trigger: contentRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="la-neta"
      className="relative scroll-mt-20 bg-gradient-to-b from-tubi-dark to-tubi-dark/95 py-20"
    >
      <CobwebCorner position="top-right" />
      <CobwebCorner position="bottom-left" />
      <div className="container relative mx-auto max-w-4xl px-6">
        <h2 ref={titleRef} className="mb-12 text-center text-3xl font-bold text-tubi-yellow sm:text-4xl md:text-[2.5rem]">
          La Neta × Tubi
        </h2>
        <div
          ref={contentRef}
          className="flex flex-col items-center gap-8 rounded-2xl border border-tubi-yellow/20 bg-tubi-purple/10 p-8 md:flex-row md:gap-12"
        >
          <Image
            src="/images/new_logo.png"
            alt="La Neta"
            width={120}
            height={120}
            className="shrink-0 object-contain"
          />
          <div className="space-y-4 text-center md:text-left">
            <p className="text-lg leading-relaxed text-tubi-yellow/95 md:text-xl">
              La Neta connects YouTube creators with Tubi through a <strong className="text-tubi-yellow">Niche Syndication</strong> model
              focused on long-form fiction and mystery. We handle the entire distribution pipeline: rights, technical
              delivery, and monetization—so you keep 100% ownership of your IP and focus on creating.
            </p>
            <p className="text-base leading-relaxed text-tubi-yellow/85 md:text-lg">
              Your content is published on Tubi&apos;s free AVOD platform, featured in Creatorverse and relevant shelves,
              and you receive 50% of net revenue. Payments are monthly (within 60 days of month close, subject to
              minimum payout). No exclusivity required for your YouTube channel—you keep publishing there as usual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
