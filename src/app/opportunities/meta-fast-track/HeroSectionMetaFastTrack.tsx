"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

const META_APPLY_URL =
  "https://www.facebook.com/creator_programs/signup?referral_code=laneta";

interface HeroSectionMetaFastTrackProps {
  onOpenConnectModal?: () => void;
}

export function HeroSectionMetaFastTrack({
  onOpenConnectModal,
}: HeroSectionMetaFastTrackProps) {
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
      id="hero"
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
          className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <Image
            src="/images/new_logo.png"
            alt="La Neta Logo"
            width={80}
            height={80}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
          <span className="text-base font-bold text-white sm:text-lg">
            La Neta
          </span>
          <span className="text-meta-blue/80 text-lg font-light sm:text-xl">
            ×
          </span>
          <span className="bg-gradient-to-r from-meta-blue via-sky-300 to-meta-blue bg-clip-text text-base font-extrabold uppercase tracking-[0.15em] text-transparent sm:text-lg">
            META
          </span>
        </div>

        <div
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-meta-pink/50 bg-meta-pink/10 px-4 py-2.5 text-sm font-medium text-meta-pink shadow-[0_0_20px_rgba(255,71,172,0.15)]"
        >
          <Sparkles className="size-4" />
          Meta&apos;s New Creator Program
        </div>

        <h1
          ref={titleRef}
          className="max-w-4xl text-4xl font-extrabold leading-[1.1] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block bg-gradient-to-r from-meta-purple via-meta-pink to-meta-blue bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(102,65,237,0.3)] sm:text-6xl md:text-7xl lg:text-8xl">
            Creator Fast Track
          </span>
          <span className="mt-3 block text-3xl font-black uppercase tracking-[0.2em] text-white sm:text-4xl md:text-5xl [text-shadow:0_2px_30px_rgba(0,0,0,0.4)]">
            Is Here
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-relaxed md:text-xl"
        >
          Meta&apos;s best creator program yet.{" "}
          <span className="font-semibold text-white">
            Guaranteed monthly payouts* of $1,000–$3,000
          </span>
          , increased reach to build a real audience on Facebook, and zero need
          for new content—just repost what you&apos;ve already made.{" "}
          <span className="font-medium text-meta-pink/90">
            It&apos;s time to fast-track your growth on Facebook.
          </span>
        </p>

        <div ref={ctaRef} className="mt-12 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-meta-purple to-meta-purple/90 px-8 py-6 text-lg font-semibold shadow-[0_4px_24px_rgba(102,65,237,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(102,65,237,0.5)]"
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
            {onOpenConnectModal ? (
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={onOpenConnectModal}
                className="cursor-pointer border-2 border-meta-pink/60 bg-meta-pink/10 px-8 py-6 text-lg font-medium text-meta-pink transition-all hover:scale-[1.02] hover:border-meta-pink hover:bg-meta-pink/20 hover:text-meta-pink"
              >
                Connect me to other opportunities
              </Button>
            ) : (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/5 px-8 py-6 text-lg text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#how-it-works">How It Works</a>
              </Button>
            )}
          </div>
          <p className="mt-6 w-full max-w-lg border-t border-white/15 pt-5 text-center text-xs leading-snug text-slate-500">
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
        </div>
      </div>
    </section>
  );
}
