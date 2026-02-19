"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Users, MessageCircle, Handshake } from "lucide-react";
import { WhatIsThisGyre } from "./WhatIsThisGyre";

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    icon: Users,
    title: "You could benefit",
    description:
      "We identified you as a YouTube creator who could benefit from 24/7 pre-recorded live streaming, any channel size or niche. We are sharing the opportunity, not pressuring you.",
  },
  {
    icon: MessageCircle,
    title: "Support, no pressure",
    description:
      "We answer your questions and help you decide if Gyre fits. No obligation to join. We want you to have clear information so you can choose.",
  },
  {
    icon: Handshake,
    title: "Trusted partnership",
    description:
      "La Neta works with Air Media-Tech, who have tested 24/7 streaming with Gyre across 222 creators and 300 channels. We bring this opportunity to you so you can explore it with confidence.",
  },
];

export function WhyContactedSectionGyre() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const mainTextRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        highlightRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: highlightRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        mainTextRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: mainTextRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children ?? [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (highlightRef.current) {
        gsap.fromTo(
          highlightRef.current,
          { boxShadow: "0 4px 24px rgba(242, 5, 68, 0.08)" },
          {
            boxShadow:
              "0 0 40px rgba(242, 5, 68, 0.12), 0 0 80px rgba(242, 5, 68, 0.06)",
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-contacted"
      className="scroll-mt-20 overflow-hidden bg-gyre-dark py-20 md:py-28"
    >
      <div className="container mx-auto max-w-4xl px-6">
        {/* Single narrative column: title + subtitle */}
        <header className="mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]"
          >
            Why did <span className="text-gyre-red">La Neta</span> contact you,
            and what does it mean for you?
          </h2>
          <p
            ref={subtitleRef}
            className="mt-4 max-w-2xl mx-auto text-gyre-muted"
          >
            Our role and what this opportunity can mean for your channel.
          </p>
        </header>

        {/* One unified panel: main message + What is this? */}
        <div
          ref={highlightRef}
          className="relative mb-12 overflow-hidden rounded-2xl border border-gyre-red/25 bg-gradient-to-b from-gyre-red/10 to-gyre-deep/90 shadow-xl"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-50"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(242, 5, 68, 0.05), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 4s ease-in-out infinite",
            }}
          />
          <div className="relative p-8 md:p-10">
            <div className="mb-5 flex items-center justify-center gap-2">
              <BadgeCheck className="size-5 text-gyre-red" aria-hidden />
              <span className="rounded-full border border-gyre-red/40 bg-gyre-red/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gyre-red">
                La Neta and Air, Gyre
              </span>
            </div>
            <h3
              ref={mainTextRef}
              className="text-center text-xl font-bold text-white sm:text-2xl"
            >
              We share this opportunity because we believe it can help your
              channel. You do not have to join.
            </h3>
            <p
              ref={paragraphRef}
              className="mt-4 text-center text-base leading-relaxed text-gyre-muted sm:text-lg"
            >
              La Neta works with Air Media-Tech to bring vetted opportunities to
              YouTube creators. With Gyre you run 24/7 pre-recorded live streams
              to grow watch time, monetize existing videos, and keep your channel
              active without going live. You get clear information and our
              support to decide if it fits. No obligation.
            </p>
            {/* What is this? as part of the same panel */}
            <div className="mt-8 border-t border-white/10 pt-8">
              <WhatIsThisGyre variant="nested" />
            </div>
          </div>
        </div>

        {/* Three reasons: one row, same width, introduced by a short line */}
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gyre-muted">
          In practice
        </p>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3"
        >
          {REASONS.map((reason, i) => (
            <Card
              key={i}
              className="group border-white/10 bg-white/5 transition-all hover:border-gyre-red/25 hover:bg-white/10"
            >
              <CardContent className="p-5 sm:pt-6">
                <div className="mb-3 flex size-11 items-center justify-center rounded-xl border border-gyre-red/30 bg-gyre-red/10 text-gyre-red transition-colors group-hover:bg-gyre-red group-hover:text-white">
                  <reason.icon className="size-5" aria-hidden />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-white sm:text-base">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-gyre-muted">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
