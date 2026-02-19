"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  "We design innovative and high-impact campaigns",
  "We handle invoicing and payments to creators",
  "We develop creative and result-driven campaigns",
  "We scout and select the best talents",
  "We schedule and track your campaign",
  "We analyze statistics through reports",
];

export function WhoIsLaNetaGyre() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current && sectionRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: 24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
      if (featuresRef.current?.children?.length) {
        gsap.fromTo(
          featuresRef.current.children,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="la-neta"
      className="relative scroll-mt-20 overflow-hidden border-t-2 border-white/20 bg-gyre-dark py-20 md:py-28"
    >
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gyre-red/40" aria-hidden />
      <div className="container relative mx-auto max-w-6xl px-6">
        <h2
          ref={titleRef}
          className="mb-14 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem]"
        >
          Who is{" "}
          <span className="bg-gradient-to-r from-gyre-red to-laneta-pink bg-clip-text text-transparent">
            La Neta
          </span>
          ?
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div ref={imageRef} className="space-y-4">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <Image
                  src="/images/content_creator_workstation.jpg"
                  alt="Content creator at workstation"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-3 -bottom-3 rounded-xl border-2 border-gyre-dark bg-gyre-red px-4 py-3 text-white shadow-lg">
                <p className="text-xl font-bold">100K+</p>
                <p className="text-xs font-medium text-white/90">Satisfied Creators</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/banner.png"
                alt="La Neta creators community"
                width={600}
                height={200}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div ref={contentRef}>
            <p className="mb-5 text-xl font-semibold text-white md:text-2xl">
              The largest and most vibrant community of creators
            </p>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gyre-red">
              Influencer Marketing · Talent Management
            </p>
            <p className="mb-8 leading-relaxed text-gyre-muted">
              We represent the best creators. We focus on boosting their content, helping them monetize,
              and connecting them with a better audience. Through our partnership with Air Media-Tech,
              we bring you the Gyre 24/7 streaming opportunity so you can grow your channel and revenue.
            </p>

            <h3 className="mb-4 text-lg font-semibold text-white">Why choose us?</h3>
            <ul ref={featuresRef} className="space-y-3">
              {FEATURES.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gyre-muted">
                  <CheckCircle2 className="size-5 shrink-0 text-gyre-red" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
