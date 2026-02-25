"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Zap, Quote, ArrowRight } from "lucide-react";

const META_APPLY_URL =
  "https://www.facebook.com/creator_programs/signup?referral_code=laneta";

gsap.registerPlugin(ScrollTrigger);

export function MetaOpportunitySectionPart1MetaFastTrack() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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
          Meta Fast Track Creator Program
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-center text-lg text-slate-400">
          Your shortcut to monetization on Facebook — no new content required
        </p>
        <div className="mb-20 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-meta-pink/50 bg-meta-pink/10 px-5 py-2.5 text-meta-pink shadow-[0_0_24px_rgba(255,71,172,0.12)]">
            <Zap className="size-4" />
            <span className="font-semibold">
              Guaranteed monthly payouts* for 3 months
            </span>
          </div>
        </div>

        {/* Why This Program Exists - Narrative */}
        <div
          ref={storyRef}
          className="mb-20 overflow-hidden rounded-2xl border border-meta-purple/40 bg-gradient-to-br from-meta-purple/25 via-meta-dark to-meta-pink/10 p-8 shadow-[0_8px_40px_rgba(102,65,237,0.15),0_0_1px_rgba(255,255,255,0.1)] md:p-12"
        >
          <div className="mb-6 flex items-center gap-2">
            <Quote className="size-8 text-meta-pink drop-shadow-[0_0_12px_rgba(255,71,172,0.4)]" />
            <span className="rounded-full bg-meta-pink/15 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-meta-pink">
              Why This Program Exists
            </span>
          </div>
          <h3 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl">
            Built From Creator Feedback. Designed for Growth.
          </h3>
          <div className="space-y-6 text-slate-200">
            <p className="text-lg leading-relaxed">
              Facebook Fast Track wasn&apos;t built in a boardroom—it was built
              from the feedback of thousands of creators who told Meta exactly
              what they needed: a real path to growing on Facebook without
              starting from scratch. The result is the most streamlined creator
              program Meta has ever launched. No new content to film. No
              complicated requirements. Just your existing videos, a new
              audience, and guaranteed income* from month one.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-white">
                What you&apos;re actually building:
              </strong>{" "}
              A sustainable community on Facebook from day one. Fast Track gives
              you boosted visibility so your Reels actually get seen, guaranteed
              monthly payouts* of $1,000–$3,000 so you&apos;re earning while you
              grow, and immediate access to Facebook Content Monetization for
              long-term revenue. This isn&apos;t a one-time bonus—it&apos;s the
              foundation of a second revenue stream that compounds over time.
            </p>
            <p className="text-lg leading-relaxed">
              No brand deals to negotiate. No middlemen taking a cut. Meta pays
              you directly for doing what you&apos;re already doing—creating.
              Fast Track is the shortest distance between your content and
              consistent income on Facebook.
            </p>

            <div className="rounded-xl border border-meta-pink/30 bg-meta-pink/5 py-5 pl-5 pr-6">
              <p className="mb-3 text-base font-semibold text-white">
                Your Reels are ready. Your spot in the program isn&apos;t—yet.
              </p>
              <Link
                href={META_APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-meta-pink/20 px-4 py-2.5 font-semibold text-meta-pink ring-1 ring-meta-pink/40 transition-all hover:bg-meta-pink/30 hover:ring-meta-pink/60"
              >
                Apply now — it takes minutes
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <p className="text-sm leading-snug text-slate-400">
              *Guaranteed payouts are subject to meeting program posting
              requirements: 15 original or reposted videos published as Facebook
              Reels, distributed across a minimum of 10 distinct calendar days
              per month. Payout tier is determined by follower count at time of
              acceptance. Full terms available at application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
