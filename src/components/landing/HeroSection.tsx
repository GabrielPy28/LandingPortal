"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

const META_APPLY_URL =
  "https://www.facebook.com/creator_programs/signup?referral_code=RJDWEF&id=1";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
      );
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.6 }
      );
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.9 }
      );
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.3 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-meta-dark"
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-30"
        >
          <source
            src="/video/video_content_creator_dancing.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-meta-dark/90 via-meta-dark/70 to-meta-dark" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
      >
        <div
          ref={logoRef}
          className="mb-8 flex items-center gap-3"
        >
          <Image
            src="/images/new_logo.png"
            alt="La Neta Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <span className="text-xl font-bold text-white">La Neta</span>
        </div>

        <div
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-meta-pink/50 bg-meta-pink/10 px-4 py-2 text-sm text-meta-pink"
        >
          <Sparkles className="size-4" />
          Exclusive Creator Opportunity
        </div>

        <h1
          ref={titleRef}
          className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Unlock Your Earning Potential with{" "}
          <span className="bg-gradient-to-r from-meta-purple via-meta-pink to-meta-blue bg-clip-text text-transparent">
            Meta Breakthrough Bonus Program
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
        >
          Your fast track to monetization on Facebook & Instagram. Earn up to
          $5,000 in bonuses during your first 90 days—directly from Meta.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-meta-purple px-8 py-6 text-lg font-semibold hover:bg-meta-purple/90"
          >
            <Link
              href={META_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Apply Now
              <Play className="size-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/5 px-8 py-6 text-lg text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#how-it-works">How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
