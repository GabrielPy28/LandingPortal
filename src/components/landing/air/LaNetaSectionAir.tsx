"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiCheckCircle } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  "We design innovative and high-impact campaigns",
  "We handle invoicing and payments to creators",
  "We develop creative and result-driven campaigns",
  "We scout and select the best talents",
  "We schedule and track your campaign",
  "We analyze statistics through reports",
];

export function LaNetaSectionAir() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLUListElement>(null);

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
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        featuresRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
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
      id="la-neta"
      className="scroll-mt-20 bg-air-bg py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2
          ref={titleRef}
          className="mb-16 text-center text-3xl font-bold text-air-dark sm:text-4xl md:text-5xl"
        >
          Who is{" "}
          <span className="bg-gradient-to-r from-laneta-purple to-air-blue bg-clip-text text-transparent">
            La Neta
          </span>
          ?
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div ref={imageRef} className="space-y-4">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/content_creator_workstation.jpg"
                  alt="Content creator at workstation"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 rounded-xl border-4 border-white bg-laneta-purple p-4 text-white shadow-xl">
                <p className="text-2xl font-bold">100K+</p>
                <p className="text-sm">Satisfied Creators</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
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
            <p className="mb-6 text-2xl font-semibold text-air-dark">
              The largest and most vibrant community of creators!
            </p>
            <p className="mb-6 text-lg text-air-dark/80">
              <strong>Influencer Marketing | Talent Management</strong>
            </p>
            <p className="mb-8 text-air-dark/80">
              We represent the best creators. We focus on boosting their
              content, helping them monetize, and connecting them with
              high-impact opportunities—like professional translation and
              global distribution with our long-time partners at AIR Media-Tech.
            </p>

            <h3 className="mb-4 font-semibold text-air-dark">
              Why Choose Us?
            </h3>
            <ul ref={featuresRef} className="space-y-3">
              {FEATURES.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-air-dark/80"
                >
                  <HiCheckCircle className="size-5 shrink-0 text-air-lime" />
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
