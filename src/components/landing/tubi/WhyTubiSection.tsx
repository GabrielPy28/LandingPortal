"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CobwebDecoration } from "./CobwebDecoration";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  {
    title: "Higher CPM potential",
    text: "Benchmarks suggest Tubi's CPM can be around twice that of YouTube for comparable content. AVOD means you earn from ad views without asking your audience to pay.",
  },
  {
    title: "New audience, same content",
    text: "Reach cord-cutters and streaming viewers who may never find you on YouTube. Your long-form horror, thriller, and mystery content fits Tubi's catalog and audience.",
  },
  {
    title: "No exclusivity",
    text: "Keep publishing on YouTube and other platforms. We distribute on Tubi in addition to your existing channels—you expand reach without locking yourself in.",
  },
  {
    title: "Creatorverse visibility",
    text: "Your content is featured in Tubi's Creatorverse section and placed on relevant shelves, so fans of the genre can discover your work easily.",
  },
];

export function WhyTubiSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
      gsap.fromTo(gridRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-tubi"
      className="relative scroll-mt-20 bg-tubi-dark py-24"
    >
      <CobwebDecoration position="top-right" size="md" opacity={0.1} />
      <CobwebDecoration position="bottom-left" size="sm" opacity={0.08} />
      <div className="container relative mx-auto max-w-5xl px-6">
        <h2 ref={titleRef} className="mb-6 text-center text-3xl font-bold text-tubi-yellow sm:text-4xl md:text-[2.5rem]">
          Why distribute on Tubi?
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-tubi-yellow/85 md:text-xl">
          More reach, strong monetization, and a dedicated home for long-form horror and mystery.
        </p>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2">
          {BENEFITS.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-tubi-yellow/20 bg-tubi-purple/10 p-6 md:p-8"
            >
              <h3 className="mb-3 text-xl font-semibold text-tubi-yellow md:text-2xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-tubi-yellow/90 md:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
