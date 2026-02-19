"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import {
  Clock,
  TrendingUp,
  Video,
  Users,
} from "lucide-react";

const GYRE_LOGO_SRC =
  "https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/Gyre-Logo.png";

interface HeroSectionGyreProps {
  onLetsTalk?: () => void;
}

export function HeroSectionGyre({ onLetsTalk }: HeroSectionGyreProps) {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 1.8;
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
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
        benefitsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.75 }
      );
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.95 }
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
      className="relative min-h-screen w-full overflow-hidden bg-gyre-deep"
    >
      {/* Background video - 1.8x speed, loop */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 1.8;
          }}
        >
          <source src="/video/video_gyre/hero_section.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gyre-deep/85 via-gyre-dark/80 to-gyre-dark/95" />
      </div>

      {/* Subtle gradient overlay - calm, opportunity-focused */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(242,5,68,0.15), transparent 60%)",
        }}
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <div
          ref={logoRef}
          className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Image
            src="/images/new_logo.png"
            alt="La Neta"
            width={56}
            height={56}
            className="object-contain"
          />
          <span className="text-xl font-semibold text-gyre-muted">La Neta</span>
          <span className="text-gyre-red font-bold">×</span>
          <div className="flex shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-sm">
            <Image
              src={GYRE_LOGO_SRC}
              alt="Gyre"
              width={100}
              height={36}
              className="h-8 w-auto object-contain sm:h-9"
            />
          </div>
        </div>

        <div
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gyre-red/40 bg-gyre-red/10 px-4 py-2 text-sm text-gyre-red"
        >
          An opportunity for YouTube creators
        </div>

        <h1
          ref={titleRef}
          className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Explore the opportunity of{" "}
          <span className="hero-headline-shimmer bg-gradient-to-r from-gyre-red via-laneta-pink to-gyre-red bg-clip-text text-transparent">
            24/7 live streaming
          </span>{" "}
          for your channel
        </h1>

        <p
          ref={subtitleRef}
          className="mt-8 max-w-2xl text-lg text-gyre-muted sm:text-xl"
        >
          Run 24/7 live streams with your existing videos. Grow watch time,
          reach new audiences, and keep your channel active without going live.
          We are here to help you see if it fits.
        </p>

        <div
          ref={benefitsRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          aria-label="Main benefits"
        >
          <div className="flex items-center gap-2 rounded-full border border-gyre-red/30 bg-gyre-red/10 px-4 py-2 text-sm font-medium text-gyre-muted">
            <Clock className="size-4 shrink-0 text-gyre-red" aria-hidden />
            <span>More watch time</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-gyre-red/30 bg-gyre-red/10 px-4 py-2 text-sm font-medium text-gyre-muted">
            <TrendingUp className="size-4 shrink-0 text-gyre-red" aria-hidden />
            <span>Monetize existing videos</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-gyre-red/30 bg-gyre-red/10 px-4 py-2 text-sm font-medium text-gyre-muted">
            <Video className="size-4 shrink-0 text-gyre-red" aria-hidden />
            <span>Keep your channel active</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-gyre-red/30 bg-gyre-red/10 px-4 py-2 text-sm font-medium text-gyre-muted">
            <Users className="size-4 shrink-0 text-gyre-red" aria-hidden />
            <span>Reach new audiences</span>
          </div>
        </div>

        <div
          ref={ctaRef}
          className="mt-12 flex flex-col gap-5 sm:flex-row sm:gap-6"
        >
          {onLetsTalk ? (
            <Button
              size="lg"
              onClick={onLetsTalk}
              className="cursor-pointer bg-gyre-red px-10 py-7 text-lg font-semibold text-white shadow-[0_0_30px_rgba(242,5,68,0.4)] transition-all duration-300 hover:scale-[1.03] hover:bg-gyre-red/90 hover:shadow-[0_0_40px_rgba(242,5,68,0.5)]"
            >
              Let's talk and start streaming
            </Button>
          ) : (
            <Button
              asChild
              size="lg"
              className="cursor-pointer bg-gyre-red px-10 py-7 text-lg font-semibold text-white shadow-[0_0_30px_rgba(242,5,68,0.4)] transition-all duration-300 hover:scale-[1.03] hover:bg-gyre-red/90 hover:shadow-[0_0_40px_rgba(242,5,68,0.5)]"
            >
              <a href="#contact">Let's talk and start streaming</a>
            </Button>
          )}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gyre-red/50 bg-transparent px-10 py-7 text-lg text-gyre-muted transition-transform hover:scale-[1.02] hover:bg-white/10 hover:text-white"
          >
            <a href="#opportunity">Explore the opportunity</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
