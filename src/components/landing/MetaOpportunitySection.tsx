"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Zap,
  Repeat,
  TrendingUp,
  Sparkles,
  BarChart3,
  Quote,
  ArrowRight,
  CheckCircle2,
  QrCode,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const META_APPLY_URL =
  "https://www.facebook.com/creator_programs/signup?referral_code=RJDWEF&id=1";

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Direct Monetization",
    metric: "From Meta",
    description: "No agencies, no ad setup, no waiting.",
  },
  {
    icon: Zap,
    title: "Breakthrough Bonus",
    metric: "Up to $5,000",
    description: "In your first 90 days.",
  },
  {
    icon: Repeat,
    title: "Earn by Reposting",
    metric: "Same content",
    description: "TikTok, Shorts, Reels → Facebook.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Income",
    metric: "Beyond bonuses",
    description: "Reels, videos, photos, text posts.",
  },
  {
    icon: Sparkles,
    title: "Rewarded for Creativity",
    metric: "Engagement matters",
    description: "Consistency & quality pay off.",
  },
  {
    icon: BarChart3,
    title: "Transparent Metrics",
    metric: "Creator Studio",
    description: "Track everything in real-time.",
  },
];

const SUCCESS_TIMELINE = [
  {
    phase: "Apply",
    time: "Day 0",
    title: "Simple application",
    description: "Link your Instagram/TikTok/YouTube, share your Facebook profile. Most creators complete it in under 10 minutes.",
  },
  {
    phase: "Acceptance",
    time: "24-48 hours",
    title: "Fast response",
    description: "You'll know if you're in. Meta reviews your presence and content quality.",
  },
  {
    phase: "Onboard",
    time: "Week 1",
    title: "Monetization setup",
    description: "Complete Facebook Content Monetization. You're officially in—start posting.",
  },
  {
    phase: "Earn",
    time: "First 90 days",
    title: "Bonus + ongoing revenue",
    description: "Work toward up to $5,000 in Breakthrough Bonuses plus Reels monetization.",
  },
];

const KEY_METRICS = [
  { value: "$5,000", label: "Max bonus (first 90 days)", sub: "Performance-driven" },
  { value: "24-48h", label: "Response time", sub: "Quick decision" },
  { value: "4", label: "Content types", sub: "Reels, videos, photos, text" },
  { value: "2025-26", label: "Program active", sub: "Apply now" },
];

const ELIGIBILITY = [
  "Reside in the United States",
  "Be at least 18 years old",
  "100K+ followers on TikTok, YouTube, or Instagram",
  "Professional Instagram + Facebook Page",
  "Content aligning with Meta's policies",
];

export function MetaOpportunitySection() {
  const [showQrModal, setShowQrModal] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowQrModal(false);
    };
    if (showQrModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showQrModal]);

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
        storyRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        metricsRef.current?.children ?? [],
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: metricsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        timelineRef.current?.children ?? [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        benefitsRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: benefitsRef.current,
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
      id="meta-opportunity"
      className="scroll-mt-20 bg-meta-dark py-24 text-white"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Hero headline */}
        <h2
          ref={titleRef}
          className="mb-4 text-center text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Meta Breakthrough Bonus Program
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-center text-lg text-slate-300">
          Your fast track to monetization on Facebook & Instagram
        </p>
        <div className="mb-20 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-meta-pink/50 bg-meta-pink/10 px-5 py-2 text-meta-pink">
            <Zap className="size-4" />
            <span className="font-semibold">Up to $5,000 in your first 90 days</span>
          </div>
        </div>

        {/* Success Story - Narrative */}
        <div
          ref={storyRef}
          className="mb-20 overflow-hidden rounded-2xl border border-meta-purple/30 bg-gradient-to-br from-meta-purple/20 to-meta-pink/10 p-8 md:p-12"
        >
          <div className="mb-6 flex items-center gap-2">
            <Quote className="size-8 text-meta-pink" />
            <span className="text-sm font-semibold uppercase tracking-wider text-meta-pink">
              Success Path
            </span>
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl">
            From One Platform to Multiple Revenue Streams
          </h3>
          <div className="space-y-6 text-slate-200">
            <p className="text-lg leading-relaxed">
              Creators with 100K+ followers on Instagram, TikTok or YouTube are discovering
              they don&apos;t need to create new content to start earning. They
              apply, get accepted within 24–48 hours, and begin reposting their
              best-performing Reels to Facebook.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-white">The result?</strong> A new audience
              on Meta, immediate access to Facebook Content Monetization, and the
              chance to earn up to $5,000 in Breakthrough Bonuses during their
              first 90 days—all while continuing to post on their existing
              platforms.
            </p>
            <p className="text-lg leading-relaxed">
              Meta invests directly in your creativity. No brand deals, no
              agencies in the middle. Just you, your content, and a transparent
              path to turning engagement into income.
            </p>
          </div>
        </div>

        {/* Key Metrics & Insights */}
        <h3 className="mb-8 text-center text-2xl font-semibold text-meta-blue">
          By the Numbers
        </h3>
        <div
          ref={metricsRef}
          className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {KEY_METRICS.map((metric, i) => (
            <Card
              key={i}
              className="border-meta-blue/30 bg-meta-dark/80 backdrop-blur transition-all hover:border-meta-pink/50 hover:shadow-lg hover:shadow-meta-purple/20"
            >
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-meta-pink md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-1 font-semibold text-white">{metric.label}</p>
                <p className="text-sm text-slate-400">{metric.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Your Journey - Timeline */}
        <h3 className="mb-8 text-center text-2xl font-semibold">
          Your Journey to Monetization
        </h3>
        <div
          ref={timelineRef}
          id="how-it-works"
          className="mb-20"
        >
          <div className="space-y-6">
            {SUCCESS_TIMELINE.map((step, i) => (
              <div
                key={i}
                className="flex gap-6 rounded-xl border border-meta-purple/20 bg-meta-purple/10 p-6 transition-colors hover:bg-meta-purple/20"
              >
                <div className="flex shrink-0">
                  <span className="flex size-12 items-center justify-center rounded-full bg-meta-pink font-bold">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-meta-blue">
                      {step.phase}
                    </span>
                    <span className="text-sm text-slate-400">• {step.time}</span>
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{step.title}</h4>
                  <p className="text-slate-300">{step.description}</p>
                </div>
                {i <= SUCCESS_TIMELINE.length - 1 && (
                  <ArrowRight className="hidden shrink-0 text-meta-purple/50 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <h3 className="mb-8 text-center text-2xl font-semibold text-meta-blue">
          What You Unlock
        </h3>
        <div
          ref={benefitsRef}
          className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map((benefit, i) => (
            <Card
              key={i}
              className="group border-meta-purple/30 bg-meta-dark/50 backdrop-blur transition-all hover:border-meta-pink/50 hover:bg-meta-purple/10"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-meta-purple/30 text-meta-pink transition-colors group-hover:bg-meta-pink/30">
                  <benefit.icon className="size-6" />
                </div>
                <p className="mb-1 text-sm font-semibold text-meta-blue">
                  {benefit.metric}
                </p>
                <h4 className="mb-2 font-semibold text-white">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Eligibility */}
        <div className="mb-20 rounded-2xl border border-meta-blue/30 bg-meta-blue/10 p-8">
          <h3 className="mb-6 text-center text-xl font-semibold">
            Eligibility Checklist
          </h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {ELIGIBILITY.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 rounded-lg bg-meta-dark/50 px-4 py-2 text-slate-200"
              >
                <CheckCircle2 className="size-4 shrink-0 text-meta-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA with QR Code */}
        <div
          ref={ctaRef}
          className="flex flex-col items-center gap-8 rounded-2xl border-2 border-meta-pink/30 bg-gradient-to-br from-meta-purple/20 to-meta-pink/10 p-8 md:p-12"
        >
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-bold">
              Ready to Unlock Your Potential?
            </h3>
            <p className="text-slate-300">
              Scan the QR code or click to apply directly on Meta
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <Button
                asChild
                size="lg"
                className="w-full bg-meta-pink px-10 py-6 text-lg font-semibold hover:bg-meta-pink/90 sm:w-auto"
              >
                <Link
                  href={META_APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply to the Program
                </Link>
              </Button>
              <button
                onClick={() => setShowQrModal(true)}
                className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-meta-purple/50 bg-meta-dark/50 text-white transition-colors hover:bg-meta-purple/30"
                aria-label="Scan QR code to apply"
              >
                <QrCode className="size-7" />
              </button>
            </div>
            <p className="max-w-xs text-center text-sm text-slate-400">
              Program active throughout 2025 and 2026. Applications are
              completed directly on Facebook.
            </p>
          </div>
        </div>

        {/* QR Code Modal */}
        {showQrModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setShowQrModal(false)}
          >
            <div
              className="relative rounded-2xl border-2 border-white/20 bg-meta-dark p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQrModal(false)}
                className="absolute right-4 top-4 rounded-full p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
              <div className="flex flex-col items-center gap-4 pt-2">
                <p className="text-center font-semibold text-white">
                  Scan to apply
                </p>
                <div className="rounded-xl border-4 border-white bg-white p-4">
                  <Image
                    src="/images/QR.png"
                    alt="Scan to apply - Meta Breakthrough Bonus Program"
                    width={220}
                    height={220}
                    className="size-52 object-contain sm:size-64"
                  />
                </div>
                <p className="text-center text-sm text-slate-400">
                  Program active 2025–2026
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
