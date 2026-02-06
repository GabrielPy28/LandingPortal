"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiExternalLink } from "react-icons/hi";
import { CobwebCorner } from "./CobwebDecoration";

gsap.registerPlugin(ScrollTrigger);

const CREATOR = {
  name: "Jason Thores",
  channelUrl: "https://www.youtube.com/@JasonThores",
  channelImageUrl:
    "https://yt3.googleusercontent.com/rd7axoIKDUPDtLYl3uXWxveu5BBmTLlAS4Wdt3vUSbYwW3MYOy0_g4YoqPPIfcnw3LF61svqKA=s160-c-k-c0x00ffffff-no-rj",
  subscribers: "5.79M",
  description: "Mystery, facts and theories to keep you up at night...",
  quote:
    "I joined the program and saw a big increase in views on my videos. Distributing on Tubi through La Neta opened a new audience for my mystery and horror content.",
};

export function TestimonialSectionTubi() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: { trigger: cardRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonial"
      className="relative scroll-mt-20 bg-tubi-dark py-24"
    >
      <CobwebCorner position="top-left" />
      <CobwebCorner position="bottom-right" />
      <div className="container relative mx-auto max-w-3xl px-6">
        <h2 ref={titleRef} className="mb-4 text-center text-3xl font-bold text-tubi-yellow sm:text-4xl md:text-[2.5rem]">
          Creators Already on Tubi
        </h2>
        <p className="mb-12 text-center text-lg text-tubi-yellow/80 md:text-xl">
          Hear from creators who distribute their content with La Neta on Tubi.
        </p>

        <div
          ref={cardRef}
          className="rounded-2xl border-2 border-tubi-yellow/30 bg-tubi-purple/20 p-8 shadow-xl shadow-tubi-purple/10 md:p-10"
        >
          <blockquote className="space-y-6">
            <p className="text-lg leading-relaxed text-tubi-yellow/95 md:text-xl lg:text-2xl">
              &ldquo;{CREATOR.quote}&rdquo;
            </p>
            <footer className="flex flex-wrap items-center gap-4 border-t border-tubi-yellow/20 pt-6">
              <a
                href={CREATOR.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-tubi-yellow/30 md:size-20"
                aria-label={`${CREATOR.name} YouTube channel`}
              >
                <Image
                  src={CREATOR.channelImageUrl}
                  alt=""
                  width={80}
                  height={80}
                  className="object-cover"
                  unoptimized
                />
              </a>
              <div className="min-w-0 flex-1">
                <cite className="not-italic">
                  <a
                    href={CREATOR.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg font-bold text-tubi-yellow hover:underline md:text-xl"
                  >
                    {CREATOR.name}
                    <HiExternalLink className="size-4 shrink-0" />
                  </a>
                </cite>
                <p className="mt-1 text-base text-tubi-yellow/80 md:text-lg">
                  YouTube · {CREATOR.subscribers} subscribers
                </p>
                <p className="mt-0.5 text-base italic text-tubi-yellow/70 md:text-lg">
                  {CREATOR.description}
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
