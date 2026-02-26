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
  CheckCircle2,
  QrCode,
  X,
  ClipboardList,
  Clock,
  Settings,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const META_APPLY_URL =
  "https://www.facebook.com/creator_programs/signup?referral_code=laneta";

const JOURNEY_STEPS = [
  {
    number: "01",
    phase: "Apply",
    time: "Day 0",
    title: "Simple application",
    body: "Link your Instagram/TikTok/YouTube, share your Facebook profile. Most creators complete it in under 10 minutes.",
    icon: ClipboardList,
    gradient: "from-meta-purple to-meta-blue",
  },
  {
    number: "02",
    phase: "Acceptance",
    time: "24-48 hours",
    title: "Fast response",
    body: "Meta will review your application and give you a response within 24-48 hours.",
    icon: Clock,
    gradient: "from-meta-blue to-meta-pink",
  },
  {
    number: "03",
    phase: "Onboard",
    time: "Week 1",
    title: "Monetization setup",
    body: "Complete Facebook Content Monetization. You're officially in—start posting.",
    icon: Settings,
    gradient: "from-meta-pink to-meta-purple",
  },
  {
    number: "04",
    phase: "Earn",
    time: "3 Months",
    title: "Guaranteed payouts* + ongoing revenue",
    body: "Earn $1,000–$3,000/mo in Fast Track payouts* plus Reels monetization revenue. Post 15 videos across 10+ days each month to unlock your full payout.",
    icon: DollarSign,
    gradient: "from-meta-purple to-meta-pink",
  },
  {
    number: "05",
    phase: "Grow",
    time: "Beyond 3 Months",
    title: "Increased reach & lasting community",
    body: "Accelerate your Facebook visibility from the start and cultivate a lasting community that continues to grow beyond the program.",
    icon: TrendingUp,
    gradient: "from-meta-blue to-meta-purple",
  },
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Fast Track guaranteed payouts*",
    metric: "$1,000–$3,000/mo",
    description:
      "Locked-in monthly payouts for 3 months when you meet the posting requirements.",
  },
  {
    icon: Repeat,
    title: "Repost what you already have",
    metric: "Same content, new revenue",
    description:
      "Turn your TikTok, Shorts, and Reels into Facebook Reels with zero new filming.",
  },
  {
    icon: TrendingUp,
    title: "Increased reach from day one",
    metric: "More eyes on your Reels",
    description:
      "Meta prioritizes your content so you can find new audiences and grow faster.",
  },
  {
    icon: BarChart3,
    title: "Monetization unlocked",
    metric: "Content Monetization access",
    description:
      "Get into Facebook Content Monetization and Reels monetization for ongoing income.",
  },
  {
    icon: Sparkles,
    title: "Built for serious creators",
    metric: "100K+ followers",
    description:
      "A curated program for established creators ready to scale a new channel on Facebook.",
  },
  {
    icon: Zap,
    title: "Support from La Neta × Meta",
    metric: "You’re not doing this alone",
    description:
      "Guidance from La Neta and Meta so you always know what to post and how to hit your goals.",
  },
];

const ELIGIBILITY = [
  "Reside in the United States or Canada",
  "Be at least 18 years old",
  "100K+ followers on TikTok, YouTube, or Instagram",
  "Professional Instagram + Facebook Page",
  "Content aligning with Meta's policies",
  "No Facebook Reel posted in the last 6 months",
  "Not enrolled in another Facebook monetization program",
];

const STEPS_OFFSET_BREAKPOINT = 560;

export function MetaOpportunitySectionPart2MetaFastTrack() {
  const [showQrModal, setShowQrModal] = useState(false);
  const [allowOffsetX, setAllowOffsetX] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const journeyHeaderRef = useRef<HTMLDivElement>(null);
  const journeyStepsRef = useRef<HTMLDivElement>(null);
  const journeyProgressRef = useRef<HTMLDivElement>(null);
  const journeyCtaRef = useRef<HTMLDivElement>(null);

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
    const updateOffset = () =>
      setAllowOffsetX(window.innerWidth >= STEPS_OFFSET_BREAKPOINT);
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        journeyHeaderRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: journeyHeaderRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const stepCards = journeyStepsRef.current?.children ?? [];
      gsap.fromTo(
        stepCards,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: journeyStepsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        journeyProgressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: journeyProgressRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        journeyCtaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: journeyCtaRef.current,
            start: "top 92%",
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
  }, [allowOffsetX]);

  return (
    <section
      ref={sectionRef}
      id="meta-opportunity-benefits"
      className="scroll-mt-20 bg-meta-dark py-24 text-white"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Your Journey to Monetization - Elevn-style (Fast Track only) */}
        <div
          ref={journeyHeaderRef}
          id="journey-to-monetization"
          className="mb-10 text-center max-[400px]:mb-8 sm:mb-12 md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-meta-pink max-[400px]:text-[10px]">
            The path
          </p>
          <h2 className="mb-4 text-2xl font-bold text-white max-[400px]:text-xl sm:text-3xl md:text-4xl lg:text-5xl">
            Your Journey to Monetization
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400 max-[400px]:text-sm md:text-base">
            From application to payout in four clear steps. No guesswork—just a
            straightforward path to earning with Meta.
          </p>
        </div>

        <div
          ref={journeyStepsRef}
          className="mx-auto mb-12 max-w-5xl space-y-4 md:max-w-6xl md:space-y-5 lg:max-w-7xl lg:mb-16 xl:max-w-[1600px]"
          style={{ perspective: "1000px" }}
        >
          {JOURNEY_STEPS.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col overflow-hidden rounded-xl border border-meta-purple/25 bg-meta-dark/80 shadow-lg transition-all hover:border-meta-pink/30 hover:shadow-[0_8px_32px_rgba(102,65,237,0.15)] md:flex-row md:rounded-2xl"
              style={allowOffsetX ? { marginLeft: i * 24 } : undefined}
            >
              <div
                className={`flex w-full flex-row items-center justify-center gap-4 bg-gradient-to-b ${step.gradient} py-4 text-white max-[400px]:py-3 max-[650px]:py-5 md:w-28 md:shrink-0 md:flex-col md:gap-2 md:py-9`}
              >
                <span className="text-2xl font-bold max-[400px]:text-xl max-[650px]:text-3xl md:text-4xl">
                  {step.number}
                </span>
                <step.icon
                  className="size-6 opacity-90 max-[400px]:size-5 md:size-8"
                  aria-hidden
                />
              </div>
              <div className="flex-1 px-4 py-4 max-[400px]:px-3 max-[400px]:py-3 max-[650px]:px-5 max-[650px]:py-5 md:px-6 md:py-6">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-meta-blue">
                    {step.phase}
                  </span>
                  <span className="text-sm text-slate-500">• {step.time}</span>
                </div>
                <h3 className="mb-2 font-semibold text-white md:text-lg">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mx-auto mb-10 h-1 w-full max-w-4xl overflow-hidden rounded-full bg-white/10 md:max-w-5xl lg:max-w-6xl"
          aria-hidden
        >
          <div
            ref={journeyProgressRef}
            className="h-full w-full rounded-full bg-gradient-to-r from-meta-purple via-meta-pink to-meta-blue"
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div ref={journeyCtaRef} className="mb-20 text-center">
          <p className="text-slate-400">
            Next step:{" "}
            <Link
              href={META_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-meta-pink transition-colors hover:text-white"
            >
              Start your application
              <ArrowRight className="size-4" />
            </Link>
          </p>
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
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full max-w-xs bg-meta-pink px-10 py-6 text-lg font-semibold hover:bg-meta-pink/90 sm:w-auto"
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
                className="mt-1 flex size-14 shrink-0 items-center justify-center rounded-lg border border-meta-purple/50 bg-meta-dark/50 text-white transition-colors hover:bg-meta-purple/30 sm:mt-0"
                aria-label="Scan QR code to apply"
              >
                <QrCode className="size-7" />
              </button>
            </div>
            <p className="max-w-xl space-y-2 text-center text-sm text-slate-400">
              <span className="block">
                Active 2026. Applications completed directly on Facebook.
              </span>
              <span className="block text-xs leading-snug text-slate-500">
                *Guaranteed payouts are subject to meeting program posting
                requirements: 15 original or reposted videos published as
                Facebook Reels, distributed across a minimum of 10 distinct
                calendar days per month. Payout tier is determined by follower
                count at time of acceptance.{" "}
                <a
                  href="https://creators.facebook.com/creator-fast-track"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-meta-pink underline decoration-meta-pink/50 underline-offset-2 hover:text-meta-pink/90"
                >
                  Full terms
                </a>{" "}
                available at application.
              </span>
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
                    src="/images/QRCode.png"
                    alt="Scan to apply - Creator Fast Track"
                    width={220}
                    height={220}
                    className="size-52 object-contain sm:size-64"
                  />
                </div>
                <p className="text-center text-sm text-slate-400">
                  *Guaranteed payouts require meeting monthly posting
                  requirements. Terms apply.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
