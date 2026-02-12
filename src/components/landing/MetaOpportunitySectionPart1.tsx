"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function MetaOpportunitySectionPart1() {
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

        
      </div>
    </section>
  );
}
