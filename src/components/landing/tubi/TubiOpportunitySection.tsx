"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CobwebDecoration } from "./CobwebDecoration";

gsap.registerPlugin(ScrollTrigger);

const CRITERIA = [
  "Long-form only (15+ min per file)",
  "Serialized or episodic (miniseries, episodes, movies)",
  "High production value (TV quality)",
  "100% IP ownership",
  "Sync + Master music rights (no YouTube Audio Library)",
  "No burnt-in ads, watermarks, or lower-thirds",
];

export function TubiOpportunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
      gsap.fromTo(introRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: introRef.current, start: "top 88%", toggleActions: "play none none reverse" } });
      gsap.fromTo(listRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: listRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="opportunity"
      className="relative scroll-mt-20 bg-tubi-dark py-24"
    >
      <CobwebDecoration position="top-left" size="lg" opacity={0.1} />
      <CobwebDecoration position="center-right" size="md" opacity={0.08} />
      <div className="container relative mx-auto max-w-4xl px-6">
        <h2 ref={titleRef} className="mb-6 text-center text-3xl font-bold text-tubi-yellow sm:text-4xl md:text-[2.5rem]">
          Breakthrough streaming
        </h2>
        <p ref={introRef} className="mx-auto max-w-3xl text-center text-lg text-tubi-yellow/90 md:text-xl">
          Tubi is a global entertainment company dedicated to giving everyone access to the world&apos;s stories.
          It offers the largest collection of premium on-demand content—over 275,000 movies and TV episodes and
          more than 300 exclusive originals. Free, ad-supported (AVOD), with a passionate fanbase.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-tubi-yellow/20 bg-tubi-purple/10 px-4 py-5 text-center">
            <p className="text-2xl font-bold text-tubi-yellow md:text-3xl">97M+</p>
            <p className="mt-1 text-base text-tubi-yellow/80 md:text-lg">Monthly active viewers</p>
          </div>
          <div className="rounded-xl border border-tubi-yellow/20 bg-tubi-purple/10 px-4 py-5 text-center">
            <p className="text-2xl font-bold text-tubi-yellow md:text-3xl">10B</p>
            <p className="mt-1 text-base text-tubi-yellow/80 md:text-lg">Streaming hours (2024)</p>
          </div>
          <div className="rounded-xl border border-tubi-yellow/20 bg-tubi-purple/10 px-4 py-5 text-center">
            <p className="text-2xl font-bold text-tubi-yellow md:text-3xl">275K+</p>
            <p className="mt-1 text-base text-tubi-yellow/80 md:text-lg">Movies & TV episodes</p>
          </div>
          <div className="rounded-xl border border-tubi-yellow/20 bg-tubi-purple/10 px-4 py-5 text-center">
            <p className="text-2xl font-bold text-tubi-yellow md:text-3xl">50%</p>
            <p className="mt-1 text-base text-tubi-yellow/80 md:text-lg">Your share of net revenue</p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-tubi-yellow/20 bg-tubi-purple/10 p-6">
            <h3 className="mb-4 text-xl font-semibold text-tubi-yellow md:text-2xl">Perfect match criteria</h3>
            <p className="mb-4 text-base text-tubi-yellow/80 md:text-lg">
              Your content must meet these requirements to qualify for distribution on Tubi.
            </p>
            <ul ref={listRef} className="space-y-3">
              {CRITERIA.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-tubi-yellow/90 md:text-lg">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-tubi-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-tubi-yellow/20 bg-tubi-purple/10 p-6">
            <Image
              src="/images/images_tubi/tubi_on_tv.png"
              alt="Tubi on TV"
              width={280}
              height={160}
              className="object-contain"
            />
            <p className="text-center text-base text-tubi-yellow/80 md:text-lg">
              Available in the US, Canada, Mexico, LATAM, UK, and Australia—on 30+ devices (Smart TV, mobile, web).
              Tubi is part of Tubi Media Group, a division of Fox Corporation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
