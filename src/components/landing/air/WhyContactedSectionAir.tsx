"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { HiShieldCheck, HiUserGroup, HiChatAlt2, HiBadgeCheck } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    icon: HiUserGroup,
    title: "We Scout the Best",
    description:
      "You've been identified as a creator who can benefit from global expansion—we bring you vetted, high-impact opportunities like translation and Microsoft Network distribution.",
  },
  {
    icon: HiChatAlt2,
    title: "Support & Guidance",
    description:
      "We provide context, answer your questions before you commit, and support you throughout the onboarding process with AIR Media-Tech.",
  },
  {
    icon: HiShieldCheck,
    title: "Trusted Partnership",
    description:
      "La Neta and AIR Media-Tech have collaborated for years. This isn't a new product—AIR has been doing this successfully; we're now bringing this opportunity to creators like you.",
  },
];

export function WhyContactedSectionAir() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const mainTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
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
        highlightRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: highlightRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        mainTextRef.current,
        { opacity: 0, y: 20 },
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
        cardsRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
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
          { boxShadow: "0 4px 20px rgba(12, 68, 251, 0.1)" },
          {
            boxShadow:
              "0 0 50px rgba(12, 68, 251, 0.15), 0 0 80px rgba(178, 241, 55, 0.08)",
            duration: 2,
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
      className="scroll-mt-20 overflow-hidden bg-gradient-to-b from-air-bg to-white py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <h2
            ref={titleRef}
            className="text-3xl font-bold text-air-dark sm:text-4xl md:text-5xl"
          >
            Why Are We Reaching Out?
          </h2>
          <p className="max-w-2xl text-air-dark/80">
            Here&apos;s what you need to know about our role and why we&apos;re
            sharing this opportunity with you.
          </p>
        </div>

        <div
          ref={highlightRef}
          className="relative mb-12 overflow-hidden rounded-2xl border-2 border-air-blue/30 bg-gradient-to-r from-air-blue/10 via-air-lime/5 to-laneta-purple/10 p-8 shadow-lg md:p-10"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-50"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(12, 68, 251, 0.08), rgba(178, 241, 55, 0.06), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          />
          <div className="relative">
            <div className="mb-4 flex items-center justify-center gap-2">
              <HiBadgeCheck className="size-6 text-air-blue" />
              <span className="rounded-full bg-air-blue/20 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-air-blue">
                La Neta × AIR Media-Tech
              </span>
            </div>
            <h3
              ref={mainTextRef}
              className="mb-4 text-center text-2xl font-bold text-air-dark sm:text-3xl"
            >
              We&apos;re La Neta Influencer Marketing. We work closely with
              creators to bring them{" "}
              <span className="bg-gradient-to-r from-air-blue to-laneta-purple bg-clip-text text-transparent">
                vetted, high-impact opportunities
              </span>
              , and today we&apos;re reaching out to share our latest creator
              opportunity: professional translation and localization, in
              partnership with our long-time collaborators at AIR Media-Tech.
            </h3>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-air-dark/80">
              This isn&apos;t a launch or a new product. AIR Media-Tech has been
              doing this successfully for years. What&apos;s new is that we&apos;re
              now reaching out with this opportunity to creators like you—so
              you can expand your content to 50+ languages and monetize on
              Microsoft Network (MSN, Windows, Bing, Edge) from day one.
            </p>
          </div>
        </div>

        <div className="mb-16 flex justify-center">
          <div
            ref={cardsRef}
            className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3"
          >
            {REASONS.map((reason, i) => (
              <Card
                key={i}
                className="group border-laneta-blue/20 bg-white transition-all hover:border-air-blue/30 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-air-blue/10 text-air-blue transition-colors group-hover:bg-air-blue group-hover:text-white">
                    <reason.icon className="size-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-air-dark">
                    {reason.title}
                  </h3>
                  <p className="text-air-dark/80">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-xl border border-air-blue/20 bg-white p-6 text-center shadow-sm md:flex-row md:gap-6 md:text-left">
          <Image
            src="/images/logo.png"
            alt="La Neta"
            width={48}
            height={48}
            className="shrink-0"
          />
          <p className="text-air-dark/80">
            <strong className="text-air-dark">La Neta</strong> connects creators
            with premium opportunities. Our partnership with AIR Media-Tech
            gives you access to professional localization and Microsoft Network
            distribution—so you can grow globally without creating new content.
          </p>
        </div>
      </div>
    </section>
  );
}
