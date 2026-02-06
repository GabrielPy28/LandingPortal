"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiGlobe, HiCollection } from "react-icons/hi";
import { CobwebCorner } from "./CobwebDecoration";

gsap.registerPlugin(ScrollTrigger);

const REGIONS = [
  "United States",
  "Canada",
  "Mexico",
  "LATAM",
  "United Kingdom",
  "Australia",
];

export function CoverageCreatorverseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const coverageRef = useRef<HTMLDivElement>(null);
  const creatorverseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
      gsap.fromTo(coverageRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: coverageRef.current, start: "top 86%", toggleActions: "play none none reverse" } });
      gsap.fromTo(creatorverseRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: creatorverseRef.current, start: "top 86%", toggleActions: "play none none reverse" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="coverage"
      className="relative scroll-mt-20 bg-tubi-dark py-24"
    >
      <CobwebCorner position="top-left" />
      <CobwebCorner position="bottom-right" />
      <div className="container relative mx-auto max-w-4xl px-6">
        <h2 ref={titleRef} className="mb-16 text-center text-3xl font-bold text-tubi-yellow sm:text-4xl md:text-[2.5rem]">
          Global reach & Creatorverse
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div
            ref={coverageRef}
            className="rounded-2xl border border-tubi-yellow/20 bg-tubi-purple/10 p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <HiGlobe className="size-8 text-tubi-yellow" />
              <h3 className="text-xl font-semibold text-tubi-yellow md:text-2xl">
                Where Tubi is available
              </h3>
            </div>
            <p className="mb-6 text-base leading-relaxed text-tubi-yellow/90 md:text-lg">
              Tubi is available in more than 30 countries and on over 30 devices—the most of any AVOD service. Your content can reach viewers on Smart TVs, mobile, and web.
            </p>
            <ul className="space-y-2">
              {REGIONS.map((region, i) => (
                <li key={i} className="flex items-center gap-2 text-base text-tubi-yellow/90 md:text-lg">
                  <span className="size-1.5 rounded-full bg-tubi-yellow" />
                  {region}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={creatorverseRef}
            className="rounded-2xl border border-tubi-yellow/20 bg-tubi-purple/10 p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <HiCollection className="size-8 text-tubi-yellow" />
              <h3 className="text-xl font-semibold text-tubi-yellow md:text-2xl">
                Creatorverse
              </h3>
            </div>
            <p className="mb-4 text-base leading-relaxed text-tubi-yellow/90 md:text-lg">
              All creator content is featured in Tubi&apos;s <strong className="text-tubi-yellow">Creatorverse</strong>—a dedicated section that boosts visibility and helps fans find your channel.
            </p>
            <p className="text-base leading-relaxed text-tubi-yellow/85 md:text-lg">
              Each title is also placed on relevant content shelves (e.g. horror, thriller, mystery), so users browsing those categories can discover your work. You get maximum exposure without extra effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
