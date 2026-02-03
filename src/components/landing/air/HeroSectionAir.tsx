"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { HiTranslate, HiGlobe } from "react-icons/hi";

const CALENDLY_URL = "https://calendly.com/ana-laneta/30min";

export function HeroSectionAir() {
  const heroRef = useRef<HTMLElement>(null);
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
      className="relative min-h-screen w-full overflow-hidden bg-air-darker"
    >
      {/* Video background - Earth spinning = global audience */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-40"
        >
          <source
            src="/video/video_air/The_Earth_Spinning.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-air-darker/95 via-air-darker/80 to-air-darker" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
      >
        <div
          ref={logoRef}
          className="mb-8 flex items-center gap-4"
        >
          <Image
            src="/images/new_logo.png"
            alt="La Neta Logo"
            width={64}
            height={64}
            className="object-contain"
          />
          <span className="text-xl font-bold text-white">La Neta</span>
          <span className="text-air-lime">×</span>
          <Image
            src="/images/air_media_tech.png"
            alt="AIR Media-Tech"
            width={100}
            height={40}
            className="object-contain brightness-0 invert opacity-90"
          />
        </div>

        <div
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-air-lime/50 bg-air-lime/10 px-4 py-2 text-sm text-air-lime"
        >
          <HiGlobe className="size-4" />
          Reach the World in Every Language
        </div>

        <h1
          ref={titleRef}
          className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Your Content.{" "}
          <span className="bg-gradient-to-r from-air-blue via-air-lime to-laneta-purple bg-clip-text text-transparent">
            Every Language.
          </span>
          <br />
          <span className="text-air-lime">Same Power.</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
        >
          Professional translation and localization to 50+ languages. Expand
          your audience to every corner of the world with the best voice quality
          and human-level dubbing.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-air-blue px-8 py-6 text-lg font-semibold hover:bg-air-blue/90"
          >
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <HiTranslate className="size-5" />
              Book a Consultation
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-air-lime/50 bg-air-lime/5 px-8 py-6 text-lg text-air-lime hover:bg-air-lime/10 hover:text-air-lime"
          >
            <a href="#opportunity">See the Opportunity</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
