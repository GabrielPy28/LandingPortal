"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { HiArrowRight, HiClipboardList, HiCheckCircle, HiTrendingUp, HiCash } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_URL = "https://calendly.com/ana-laneta/30min";

const STEPS = [
  {
    icon: HiClipboardList,
    phase: "Apply",
    time: "Day 0",
    title: "Apply or book a call with AIR Talent Scout",
    description: "Ready to start reaching millions with Microsoft? Get in touch and we'll guide you through the next steps.",
  },
  {
    icon: HiCheckCircle,
    phase: "Get approved",
    time: "Next",
    title: "Get approved on Microsoft Network and sign the contract with AIR",
    description: "Once approved, you'll sign with AIR Media-Tech and your content can be distributed on MSN, Windows, Bing, and Edge.",
  },
  {
    icon: HiTrendingUp,
    phase: "Grow",
    time: "Ongoing",
    title: "Watch your Microsoft Start channel growing",
    description: "Your existing content—including localized versions—reaches millions of new viewers across Microsoft platforms.",
  },
  {
    icon: HiCash,
    phase: "Earn",
    time: "Day 1",
    title: "Earn passive income from day one",
    description: "No minimum watch time or complicated setups. Revenue starts accumulating as soon as your content goes live.",
  },
];

export function HowItWorksAir() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
        stepsRef.current?.children ?? [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="scroll-mt-20 bg-air-darker py-24 text-white"
    >
      <div className="container mx-auto max-w-4xl px-6">
        <h2
          ref={titleRef}
          className="mb-4 text-center text-3xl font-bold sm:text-4xl"
        >
          How It Works
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-300">
          Ready to start reaching millions with Microsoft? Here&apos;s the path
          from application to passive income.
        </p>

        <div ref={stepsRef} className="space-y-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="flex gap-6 rounded-xl border border-air-blue/20 bg-air-dark/50 p-6 transition-colors hover:border-air-lime/30 hover:bg-air-dark/70"
            >
              <div className="flex shrink-0">
                <span className="flex size-12 items-center justify-center rounded-full bg-air-lime text-air-darker">
                  <step.icon className="size-6" />
                </span>
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-air-lime">
                    {step.phase}
                  </span>
                  <span className="text-sm text-slate-400">• {step.time}</span>
                </div>
                <h4 className="mb-2 font-semibold text-white">{step.title}</h4>
                <p className="text-slate-300">{step.description}</p>
              </div>
              {i < STEPS.length - 1 && (
                <HiArrowRight className="hidden shrink-0 text-air-blue/50 sm:block" />
              )}
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-air-lime px-10 py-6 text-lg font-semibold text-air-darker hover:bg-air-lime/90"
          >
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Let&apos;s Start
              <HiArrowRight className="size-5" />
            </Link>
          </Button>
          <p className="text-sm text-slate-400">
            Book a consultation with La Neta and AIR Media-Tech
          </p>
        </div>
      </div>
    </section>
  );
}
