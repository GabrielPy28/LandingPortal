"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HiTranslate,
  HiGlobe,
  HiMicrophone,
  HiChartBar,
  HiCash,
  HiUserGroup,
  HiTrendingUp,
  HiDesktopComputer,
} from "react-icons/hi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const LIVE_EMOJIS = ["❤️", "😊", "👍", "👏", "🌍", "🔤", "✨", "💬", "🙌", "😍", "🔥", "💯", "👀"];

function LiveEmojiOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spawn = () => {
      const emoji = LIVE_EMOJIS[Math.floor(Math.random() * LIVE_EMOJIS.length)];
      const el = document.createElement("span");
      el.setAttribute("aria-hidden", "true");
      el.className = "pointer-events-none absolute text-2xl sm:text-3xl md:text-4xl drop-shadow-lg";
      el.textContent = emoji;
      el.style.left = `${10 + Math.random() * 80}%`;
      el.style.top = `${15 + Math.random() * 70}%`;
      el.style.opacity = "0";
      el.style.transform = "scale(0.3)";
      container.appendChild(el);

      const durationIn = 0.4 + Math.random() * 0.3;
      const durationOut = 0.4;
      const hold = 1.2 + Math.random() * 1.2;
      const floatY = -15 - Math.random() * 25;

      gsap
        .timeline({
          onComplete: () => {
            el.remove();
          },
        })
        .to(el, {
          opacity: 1,
          scale: 1,
          duration: durationIn,
          ease: "back.out(1.4)",
        })
        .to(el, {
          y: floatY,
          duration: hold,
          ease: "none",
        }, `+=${hold * 0.3}`)
        .to(
          el,
          {
            opacity: 0,
            scale: 0.8,
            duration: durationOut,
            ease: "power2.in",
          },
          `+=${hold * 0.2}`
        );
    };

    const interval = setInterval(spawn, 900 + Math.random() * 600);
    const initial = setTimeout(() => {
      spawn();
      spawn();
    }, 300);

    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl"
      aria-hidden
    />
  );
}

const CONTENT_IMAGES = [
  { src: "/images/images_Air/Travel.jpg", label: "Travel" },
  { src: "/images/images_Air/Gaming.jpg", label: "Gaming" },
  { src: "/images/images_Air/Lifestyle.jpg", label: "Lifestyle" },
  { src: "/images/images_Air/Science.jpg", label: "Science" },
  { src: "/images/images_Air/Sports.jpg", label: "Sports" },
  { src: "/images/images_Air/food.jpg", label: "Food" },
];

function ContentCategoriesCarousel({
  imagesRef,
}: {
  imagesRef: React.RefObject<HTMLDivElement | null>;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const tweenRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;
    const duration = 28;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(track, { x: -totalWidth, duration, ease: "none" }).set(track, {
      x: 0,
    });
    tweenRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!tweenRef.current) return;
    tweenRef.current.timeScale(isPaused ? 0 : 1);
  }, [isPaused]);

  const go = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    setIsPaused(true);
    const step = 210;
    const totalWidth = track.scrollWidth / 2;
    const currentX = (gsap.getProperty(track, "x") as number) ?? 0;
    let targetX = currentX + dir * step;
    if (targetX > 0) targetX -= totalWidth;
    if (targetX < -totalWidth) targetX += totalWidth;
    gsap.to(track, {
      x: targetX,
      duration: 0.45,
      ease: "power2.out",
      onComplete: () => setIsPaused(false),
    });
  };

  return (
    <div ref={imagesRef} className="mb-20">
      <h3 className="mb-6 text-center text-xl font-semibold text-slate-200">
        Your Content, Every Category, Every Language
      </h3>
      <div
        className="relative overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-5 will-change-transform"
          style={{ width: "max-content" }}
        >
          {[...CONTENT_IMAGES, ...CONTENT_IMAGES].map((img, i) => (
            <div
              key={i}
              className="group relative min-w-[200px] max-w-[200px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 border-air-blue/30 bg-air-dark/80 shadow-lg transition-all duration-300 hover:scale-105 hover:border-air-lime/50 hover:shadow-xl hover:shadow-air-lime/20"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.label}
                  width={200}
                  height={150}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-air-darker/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="bg-air-dark/90 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-air-lime/20 group-hover:text-air-lime">
                {img.label}
              </p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-air-lime/50 bg-air-darker/90 text-air-lime shadow-lg backdrop-blur transition-all hover:scale-110 hover:bg-air-lime hover:text-air-darker"
          aria-label="Previous"
        >
          <HiChevronLeft className="size-6" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-air-lime/50 bg-air-darker/90 text-air-lime shadow-lg backdrop-blur transition-all hover:scale-110 hover:bg-air-lime hover:text-air-darker"
          aria-label="Next"
        >
          <HiChevronRight className="size-6" />
        </button>
        {isPaused && (
          <div className="pointer-events-none absolute bottom-2 left-1/2 z-10 -translate-x-1/2">
            <span className="rounded-full bg-air-lime/95 px-3 py-1.5 text-xs font-semibold text-air-darker shadow-lg">
              Paused · use arrows or move away
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

const CALENDLY_URL = "https://calendly.com/ana-laneta/30min";

const LOCALIZATION_BENEFITS = [
  {
    icon: HiGlobe,
    title: "50+ Languages",
    description:
      "Content adapted for the 50 most spoken languages in the world, reaching audiences across every major global market.",
  },
  {
    icon: HiTranslate,
    title: "Full Localization",
    description:
      "Translation, dubbing, localization, optimization, and promotion so your content performs naturally in each market—not just sounds translated.",
  },
  {
    icon: HiMicrophone,
    title: "AI or Human Voices",
    description:
      "Choose AI-powered translation or 100% real human voices. Always with human review and full quality control.",
  },
];

const MSN_BENEFITS = [
  {
    icon: HiUserGroup,
    title: "New Audiences on Global Platforms",
    description:
      "Expand your reach with millions of new viewers across Microsoft's popular platforms (MSN, Windows, Bing, Edge).",
  },
  {
    icon: HiTrendingUp,
    title: "Repurposing of Your Existing Content",
    description:
      "Give your content new life and reach by sharing it with a global audience on Microsoft Network—no exclusive content needed.",
  },
  {
    icon: HiCash,
    title: "Revenue Streams Diversified",
    description:
      "Start earning through new revenue channels, diversifying your income from day one.",
  },
  {
    icon: HiChartBar,
    title: "Increased Traffic to Your Socials",
    description:
      "Boost engagement on your social media as viewers discover and follow your content across Microsoft platforms.",
  },
];

export function AirOpportunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const localizationRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const msnRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
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
        localizationRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: localizationRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        msnRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: msnRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imagesRef.current?.children ?? [],
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 90%",
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
            start: "top 92%",
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
      id="opportunity"
      className="scroll-mt-20 bg-air-darker py-24 text-white"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2
          ref={titleRef}
          className="mb-4 text-center text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          The Opportunity: Go Global
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-300">
          Two complementary services: professional localization to 50+ languages
          and distribution on Microsoft Network—so you reach the world and earn
          from day one.
        </p>

        {/* Part 1: Localization */}
        <div ref={localizationRef} className="mb-20 space-y-8">
          <h3 className="flex items-center gap-2 text-2xl font-semibold text-air-lime">
            <HiTranslate className="size-7" />
            Professional Translation & Localization
          </h3>
          <p className="max-w-3xl text-slate-200">
            Through professional translation and localization, creators are
            turning one channel into a global network—without changing their
            content strategy. With AIR as their translation and YouTube channel
            management partner, creators like Kids Diana Show expanded into 20+
            translated channels, growing from 113M subscribers to over 273M
            globally, reaching 2.5B+ monthly views.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LOCALIZATION_BENEFITS.map((item, i) => (
              <Card
                key={i}
                className="border-air-blue/30 bg-air-dark/80 backdrop-blur transition-all hover:border-air-lime/40 hover:shadow-lg hover:shadow-air-blue/10"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-air-blue/30 text-air-lime">
                    <item.icon className="size-6" />
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sample video - benefits of the tool */}
        <div ref={videoRef} className="mb-20">
          <h3 className="mb-6 text-center text-2xl font-semibold text-air-lime">
            See What Your Content Can Become
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-center text-slate-300">
            Expand your reach and maximize earnings with AIR Media-Tech on
            Microsoft Network platforms. Microsoft Network is your gateway to
            reach millions of users across Windows, Bing, and Edge, while
            earning from day one.
          </p>
          <div className="relative mx-auto max-h-[min(65vh,440px)] max-w-4xl overflow-hidden rounded-2xl border-2 border-air-blue/30 shadow-2xl">
            <video
              className="h-full max-h-[min(65vh,440px)] w-full object-contain"
              autoPlay
              loop
              muted
              playsInline
              controls
              poster="/images/images_Air/Lifestyle.jpg"
            >
              <source
                src="/video/video_air/sample_video.mp4"
                type="video/mp4"
              />
            </video>
            <LiveEmojiOverlay />
          </div>
        </div>

        {/* Content categories - carousel */}
        <ContentCategoriesCarousel imagesRef={imagesRef} />

        {/* Part 2: Microsoft Network */}
        <div ref={msnRef} className="mb-16 space-y-8">
          <h3 className="flex items-center gap-2 text-2xl font-semibold text-air-lime">
            <HiDesktopComputer className="size-7" />
            Microsoft Network Distribution
          </h3>
          <p className="max-w-3xl text-slate-200">
            Microsoft platforms are perfect for evergreen content—content that
            inspires, informs, and entertains. Whether you&apos;re sharing
            helpful tips, creative projects, or moments of humor, your content can
            thrive here. To ensure a top-quality experience, all creators and
            their videos undergo a thorough moderation process before being
            distributed.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {MSN_BENEFITS.map((item, i) => (
              <Card
                key={i}
                className="border-laneta-purple/30 bg-air-dark/50 backdrop-blur transition-all hover:border-air-lime/30 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-laneta-purple/30 text-air-lime">
                    <item.icon className="size-6" />
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="flex flex-col items-center gap-6 rounded-2xl border-2 border-air-lime/30 bg-gradient-to-br from-air-blue/20 to-air-lime/10 p-8 md:p-12"
        >
          <h3 className="text-center text-2xl font-bold">
            Ready to Go Global?
          </h3>
          <p className="text-center text-slate-300">
            If 2026 is the year you want to think beyond your home market,
            we&apos;d love to walk you through what global expansion could look
            like for your content.
          </p>
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
              <HiTranslate className="size-5" />
              Book a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
