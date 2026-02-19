"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock,
  Eye,
  Users,
  DollarSign,
  BarChart3,
  Globe,
  Radio,
  Timer,
  Video,
  Palette,
  Zap,
  MessageSquareOff,
} from "lucide-react";
import { LuGitBranchPlus } from "react-icons/lu";
import { MdMonetizationOn } from "react-icons/md";
import { SiThealgorithms } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const FIVE_METRICS = [
  {
    icon: Eye,
    label: "Views",
    description: "Live streams can surface in browse and search for new viewers.",
  },
  {
    icon: Users,
    label: "Subscribers",
    description: "Consistent presence makes it easier for audiences to find and follow you.",
  },
  {
    icon: Clock,
    label: "Watch time",
    description: "More hours watched helps you reach and keep YouTube Partner Program.",
  },
  {
    icon: BarChart3,
    label: "Audience retention",
    description: "Long-form streams keep people watching and signal quality to the algorithm.",
  },
  {
    icon: DollarSign,
    label: "Channel revenue",
    description: "Monetize the extra watch time and engagement from 24/7 streams.",
  },
];

const REUSE_BENEFITS = [
  { icon: LuGitBranchPlus, text: "Drive new traffic to your channel" },
  { icon: MdMonetizationOn, text: "Monetize your existing videos" },
  { icon: SiThealgorithms, text: "Stay in favor of YouTube's algorithms" },
];

const AIR_STATS = [
  { value: "222", label: "Creators", icon: Users },
  { value: "24", label: "Countries", icon: Globe },
  { value: "4.47B", label: "Views", icon: Eye },
  { value: "$5.2M", label: "Additional revenue", icon: DollarSign },
  { value: "300+", label: "YouTube channels", icon: Radio },
];

const PLATFORMS = [
  "YouTube",
  "Kick",
  "Twitch",
  "Facebook",
  "Instagram",
  "Telegram",
  "X",
  "MixCloud",
];

const WHY_CREATORS_CANT_GO_LIVE = [
  { icon: Timer, label: "Time" },
  { icon: Video, label: "Camera fatigue" },
  { icon: Palette, label: "Content format" },
  { icon: Globe, label: "Time zones" },
  { icon: Zap, label: "Resources" },
  { icon: MessageSquareOff, label: "Creative block" },
];

export function ServicePresentationGyrePart1() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const positioningRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const blockReuseRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const platformsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        { ref: titleRef, y: 36 },
        { ref: positioningRef, y: 24 },
        { ref: introRef, y: 20 },
        { ref: visualRef, y: 24 },
        { ref: blockReuseRef, y: 24 },
        { ref: metricsRef, y: 20 },
        { ref: statsRef, y: 20 },
        { ref: platformsRef, y: 16 },
      ];
      targets.forEach(({ ref, y }, i) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.05,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="opportunity"
      className="relative scroll-mt-20 overflow-hidden border-t-2 border-white/20 bg-gyre-dark py-20 md:py-28"
    >
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gyre-red/40" aria-hidden />
      <div className="container relative mx-auto max-w-6xl px-6">
        <header className="mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]"
          >
            Live streaming works. What if you cannot go live?
          </h2>
        </header>

        <div ref={positioningRef} className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <p className="mx-auto max-w-2xl text-center text-lg text-gyre-muted lg:col-span-2">
            Live has become one of the most powerful tools for creators.
            YouTube, Twitch and Facebook favor it. Greater visibility, more
            engagement. But not everyone can go live.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gyre-red">
              Why many creators cannot
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {WHY_CREATORS_CANT_GO_LIVE.map(({ icon: Icon, label }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gyre-muted"
                >
                  <Icon className="size-4 shrink-0 text-gyre-red" aria-hidden />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gyre-red/20 bg-gyre-red/5 px-6 py-6 lg:py-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gyre-red">
              The solution
            </p>
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Uninterrupted streaming with pre-recorded content
            </h3>
            <p className="text-sm leading-relaxed text-gyre-muted">
              This is where Gyre comes in. 24/7 live streams from your existing
              videos. No camera, no schedule. All the benefits of live, without
              the constraints.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div ref={introRef} className="flex flex-col justify-center space-y-4">
            <p className="text-base leading-relaxed text-gyre-muted sm:text-lg">
              Live streams keep audiences engaged better than other formats.
              YouTube prioritizes live streaming and recommends creators go live
              regularly. If your content does not allow you to go live, Gyre
              lets you stream 24/7 with pre-recorded content.
            </p>
            <p className="text-base text-gyre-muted">
              Turn your existing videos into a live stream that never stops. That
              is how many creators grow watch time and revenue without changing
              how they create.
            </p>
            <p className="text-base leading-relaxed text-gyre-muted sm:text-lg">
              24/7 streaming with pre-recorded content democratizes access to the
              benefits of live streaming. You do not need to be an extrovert on
              camera, have professional gear, or sacrifice your mental health to
              grow your channel. Your existing content can work for you while you
              sleep, travel, or focus on other projects.
            </p>
            <blockquote className="border-l-2 border-gyre-red/60 pl-4 font-medium italic text-white/90 sm:text-lg">
              The stream never rests, and neither does your reach.
            </blockquote>
          </div>
          <div ref={visualRef} className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl">
              <Image
                src="/images/images_gyre/live.gif"
                alt="24/7 live streaming with pre-recorded content"
                width={720}
                height={405}
                className="h-auto w-full object-cover"
                unoptimized
              />
              <p className="border-t border-white/10 px-4 py-3 text-center text-sm text-gyre-muted">
                Your content, streaming live 24/7. No camera, no schedule.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <div
            ref={blockReuseRef}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6 lg:col-span-2"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              Reuse your existing content with live streams
            </h3>
            <ul className="space-y-3">
              {REUSE_BENEFITS.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gyre-muted">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gyre-red/30 bg-gyre-red/10">
                    <item.icon className="size-4 text-gyre-red" aria-hidden />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3
              ref={metricsRef}
              className="mb-2 text-lg font-semibold text-white"
            >
              5 key channel metrics that pre-recorded live streams can boost
            </h3>
            <p className="mb-4 text-sm text-gyre-muted">
              That kind of presence can help your channel where it matters most.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {FIVE_METRICS.map(({ icon: Icon, label, description }, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-left"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="size-5 shrink-0 text-gyre-red sm:size-6" aria-hidden />
                    <span className="text-sm text-white">{label}</span>
                  </div>
                  <p className="text-xs leading-snug text-gyre-muted">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <p className="mb-4 text-center text-sm text-gyre-muted">
            AIR Media-Tech put this to the test. One year of 24/7 pre-recorded
            live streaming with Gyre.
          </p>
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-4 rounded-2xl border border-gyre-red/20 bg-gyre-red/5 px-6 py-8 sm:grid-cols-3 md:grid-cols-5 md:gap-6"
          >
            {AIR_STATS.map(({ value, label, icon: Icon }, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <span className="flex size-10 items-center justify-center rounded-full border border-gyre-red/30 bg-gyre-red/10 text-gyre-red">
                  <Icon className="size-5 sm:size-6" aria-hidden />
                </span>
                <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">{value}</p>
                <p className="text-xs text-gyre-muted sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-gyre-muted">
            Today Gyre runs on over 300 YouTube channels in our network. One
            account, multiple platforms at once.
          </p>
        </div>

        <div ref={platformsRef} className="mt-24">
          <h3 className="mb-4 text-center text-lg font-semibold text-white">
            Up to 8 streams at once on different platforms
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {PLATFORMS.map((name, i) => (
              <span
                key={i}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gyre-muted"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
