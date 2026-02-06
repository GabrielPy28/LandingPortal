"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CobwebDecoration } from "./CobwebDecoration";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title: "Swing big",
    description:
      "We create space to challenge the status quo. We are willing to swing and miss in order to create exponential impact, and we celebrate the learnings that come when we fail.",
  },
  {
    title: "Trusted partner",
    description:
      "We believe that shared context and healthy debate lead to better decisions and stronger teams. The best partners offer feedback directly, communicate transparently, and conduct themselves with the highest integrity and care.",
  },
  {
    title: "Own it",
    description:
      "We empower ourselves to identify problems and proactively bring solutions. We transcend layers, silos, and internal roadblocks to drive progress for Tubi.",
  },
  {
    title: "Stay nimble",
    description:
      "We believe that speed and agility allow us to do the impossible, so we seek velocity over perfection. We accept that things change quickly and adapt with grace.",
  },
  {
    title: "Deliver delight",
    description:
      "No matter our function, we treat every interaction as an opportunity to infuse a bit of Tubi magic – we embrace this as what sets us apart.",
  },
];

export function ScrollRevealCardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      CARDS.forEach((_, i) => {
        const wrap = cardsRef.current[i];
        const titleCard = wrap?.querySelector("[data-title-card]") as HTMLElement | null;
        const descCard = wrap?.querySelector("[data-desc-card]") as HTMLElement | null;
        if (!wrap || !titleCard || !descCard) return;

        ScrollTrigger.create({
          trigger: wrap,
          start: "top 70%",
          end: "top 20%",
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(titleCard, { x: -progress * 100 + "%" });
            gsap.set(descCard, { opacity: progress, x: (1 - progress) * 15 + "%" });
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative scroll-mt-20 bg-tubi-dark py-24"
    >
      <CobwebDecoration position="top-right" size="md" opacity={0.1} />
      <CobwebDecoration position="bottom-left" size="md" opacity={0.08} />
      <div className="container relative mx-auto max-w-4xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-tubi-yellow sm:text-4xl md:text-[2.5rem]">
          Our values
        </h2>
        <p className="mb-12 text-center text-lg text-tubi-yellow/80 md:text-xl">
          The five values that guide everything we do at Tubi.
        </p>

        <div className="space-y-8">
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              data-card-wrap
              className="relative min-h-[140px] overflow-hidden rounded-xl border border-tubi-yellow/20 md:min-h-[130px]"
            >
              <div
                data-title-card
                className="absolute inset-y-0 left-0 z-10 flex w-full items-center bg-tubi-purple/90 px-5 py-4 backdrop-blur-sm md:px-6"
                style={{ willChange: "transform" }}
              >
                <h3 className="text-xl font-bold text-tubi-yellow md:text-2xl">
                  {card.title}
                </h3>
              </div>
              <div
                data-desc-card
                className="absolute inset-y-0 left-0 flex w-full items-center bg-tubi-dark/98 px-5 py-4 md:px-6"
                style={{ opacity: 0, willChange: "transform, opacity" }}
              >
                <p className="text-base leading-relaxed text-tubi-yellow/95 md:text-lg lg:text-xl">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
