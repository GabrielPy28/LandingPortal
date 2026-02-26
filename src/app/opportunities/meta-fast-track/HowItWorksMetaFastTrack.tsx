"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Calendar, Repeat, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const META_APPLY_URL =
  "https://www.facebook.com/creator_programs/signup?referral_code=laneta";

const TIERS = [
  {
    followers: "100K – 999K",
    monthlyPayout: "$1,000/mo*",
    duration: "3 months",
    total: "$3,000",
  },
  {
    followers: "1M+",
    monthlyPayout: "$3,000/mo*",
    duration: "3 months",
    total: "$9,000",
  },
];

const POSTING_REQUIREMENTS = [
  {
    icon: Video,
    title: "15 Videos/Month",
    description:
      "Repost your existing short-form content as Facebook Reels each month.",
  },
  {
    icon: Calendar,
    title: "10+ Days/Month",
    description:
      "Spread your posts across at least 10 different days — roughly every other day.",
  },
  {
    icon: Repeat,
    title: "Same Content, New Revenue",
    description:
      "Non-exclusive. Reuse your TikTok, YouTube Shorts, or Instagram Reels. Zero new filming.",
  },
];

export function HowItWorksMetaFastTrack() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 1, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        tiersRef.current?.children ?? [],
        { opacity: 1, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: tiersRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        cardsRef.current?.children ?? [],
        { opacity: 1, y: 16 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works-payout"
      className="relative scroll-mt-20 overflow-hidden bg-meta-dark py-24 text-white"
    >
      {/* Subtle gradient orb for depth */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-meta-purple/20 blur-[100px]" />

      <div className="relative container mx-auto max-w-6xl px-6">
        <h2
          ref={titleRef}
          className="mb-3 text-center text-2xl font-bold sm:text-3xl md:text-4xl"
        >
          How It Works: Your Payout Structure
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-slate-400">
          Fixed monthly payouts* based on your audience size. Meet the posting
          requirements and get paid.
        </p>

        {/* Payment tier cards */}
        <div
          ref={tiersRef}
          className="mb-20 grid gap-6 sm:grid-cols-2"
        >
          {TIERS.map((tier, i) => (
            <Card
              key={i}
              className="group border-meta-purple/40 bg-gradient-to-b from-meta-purple/20 to-meta-dark/80 shadow-[0_8px_32px_rgba(102,65,237,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-meta-pink/50 hover:shadow-[0_12px_40px_rgba(102,65,237,0.2)]"
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-5 border-b border-white/15 pb-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-meta-pink">
                    Your Followers
                  </p>
                  <p className="text-2xl font-bold text-white md:text-3xl">
                    {tier.followers}
                  </p>
                </div>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-slate-400">Monthly Payout</dt>
                    <dd className="font-semibold text-white">{tier.monthlyPayout}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-400">Duration</dt>
                    <dd className="font-semibold text-white">{tier.duration}</dd>
                  </div>
                  <div className="mt-4 flex justify-between border-t border-white/15 pt-4">
                    <dt className="text-slate-400">Total Earnings</dt>
                    <dd className="text-2xl font-bold bg-gradient-to-r from-meta-pink to-meta-purple bg-clip-text text-transparent">
                      {tier.total}
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Posting requirements - 3 icon cards */}
        <div
          ref={cardsRef}
          className="mb-12 grid gap-6 sm:grid-cols-3"
        >
          {POSTING_REQUIREMENTS.map((item, i) => (
            <Card
              key={i}
              className="group border-meta-purple/30 bg-meta-dark/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-meta-pink/50 hover:bg-meta-purple/15 hover:shadow-[0_12px_32px_rgba(102,65,237,0.15)]"
            >
              <CardContent className="pt-6 pb-6">
                <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-meta-purple/40 to-meta-pink/30 text-meta-pink shadow-[0_4px_20px_rgba(102,65,237,0.2)] transition-all group-hover:scale-105 group-hover:shadow-[0_6px_24px_rgba(255,71,172,0.25)]">
                  <item.icon className="size-7" />
                </div>
                <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terms disclaimer */}
        <p className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-[13px] leading-snug text-slate-500">
          *Guaranteed payouts are subject to meeting program posting
          requirements: 15 original or reposted videos published as Facebook
          Reels, distributed across a minimum of 10 distinct calendar days per
          month. Payout tier is determined by follower count at time of
          acceptance.{" "}
          <a
            href="https://creators.facebook.com/creator-fast-track"
            target="_blank"
            rel="noopener noreferrer"
            className="text-meta-pink underline decoration-meta-pink/50 underline-offset-2 hover:text-meta-pink/90"
          >
            Full terms
          </a>{" "}
          available at application.
        </p>

        <p className="mt-10 text-center text-slate-400">
          Ready to apply?{" "}
          <Link
            href={META_APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-meta-pink transition-colors hover:text-white"
          >
            Apply to Fast Track
            <ArrowRight className="size-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}
