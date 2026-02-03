"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, MessageCircle, BadgeCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    icon: Users,
    title: "We Scout the Best",
    description:
      "You've been identified as an eligible creator—with 100K+ followers and content that aligns with Meta's quality standards.",
  },
  {
    icon: MessageCircle,
    title: "Support & Guidance",
    description:
      "We provide context, answer your questions before applying, and support you throughout the onboarding process.",
  },
  {
    icon: Shield,
    title: "Direct Meta Application",
    description:
      "Applications are completed directly on Facebook through an official Meta link. Final approval decisions are made exclusively by Meta.",
  },
];

export function WhyContactedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const mainTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        highlightRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: highlightRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        mainTextRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: mainTextRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtle glow pulse on the highlight block - draws attention
      if (highlightRef.current) {
        gsap.fromTo(
          highlightRef.current,
          { boxShadow: "0 4px 20px rgba(102, 65, 237, 0.1)" },
          {
            boxShadow:
              "0 0 50px rgba(102, 65, 237, 0.2), 0 0 100px rgba(255, 71, 172, 0.1)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-contacted"
      className="scroll-mt-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <h2
            ref={titleRef}
            className="text-3xl font-bold text-meta-dark sm:text-4xl md:text-5xl"
          >
            Why Have You Been Contacted by{" "}
            <span className="text-meta-purple">La Neta</span>?
          </h2>
          <p className="max-w-2xl text-slate-600">
            Here&apos;s what you need to know about our role and why we reached
            out.
          </p>
        </div>

        {/* Central message - La Neta is Official Partner */}
        <div
          ref={highlightRef}
          className="relative mb-12 overflow-hidden rounded-2xl border-2 border-meta-purple/30 bg-gradient-to-r from-meta-purple/10 via-meta-pink/5 to-meta-blue/10 p-8 shadow-lg md:p-10"
        >
          {/* Animated gradient border effect */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-50"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(102, 65, 237, 0.1), rgba(255, 71, 172, 0.1), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          />
          <div className="relative">
            <div className="mb-4 flex items-center justify-center gap-2">
              <BadgeCheck className="size-6 text-meta-purple" />
              <span className="rounded-full bg-meta-purple/20 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-meta-purple">
                Official Partner
              </span>
            </div>
            <h3
              ref={mainTextRef}
              className="mb-4 text-center text-2xl font-bold text-meta-dark sm:text-3xl"
            >
              La Neta is{" "}
              <span className="bg-gradient-to-r from-meta-purple to-meta-pink bg-clip-text text-transparent">
                META&apos;s Official Partner
              </span>
              <br className="hidden sm:block" /> in connecting creators with the
              Breakthrough Bonus Program
            </h3>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
              Meta works with a select group of partner agencies to discover,
              inform, and onboard creators into their official programs.{" "}
              <strong className="text-meta-dark">
                La Neta is one of those partners.
              </strong>{" "}
              Our role is to invite eligible creators like you, provide clear
              information about the program, answer your questions, and support
              you through the entire application and onboarding process—so you
              can focus on creating while we handle the rest.
            </p>
          </div>
        </div>

        {/* 3 reasons - single line centered */}
        <div className="mb-16 flex justify-center">
          <div
            ref={cardsRef}
            className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3"
          >
            {REASONS.map((reason, i) => (
              <Card
                key={i}
                className="group border-meta-blue/20 bg-white transition-all hover:border-meta-purple/30 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-meta-purple/10 text-meta-purple transition-colors group-hover:bg-meta-purple group-hover:text-white">
                    <reason.icon className="size-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-meta-dark">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Meta announcement - compact */}
        <div className="flex flex-col items-center gap-4 rounded-xl border border-meta-purple/20 bg-white p-6 text-center shadow-sm md:flex-row md:gap-6 md:text-left">
          <Image
            src="/images/logo.png"
            alt="La Neta"
            width={48}
            height={48}
            className="shrink-0"
          />
          <p className="text-slate-600">
            <strong className="text-meta-dark">
              Meta&apos;s official announcement
            </strong>{" "}
            confirms our partnership. Verify the program directly on{" "}
            <Link
              href="https://www.facebook.com/FacebookforCreators/posts/pfbid02cZ1b5PweXBEdJhXz7XDBXSGVt1ELbkZNkSCR7vUAKeNmebbyQvk6in7AjJnboskNl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-meta-purple underline decoration-meta-pink/50 underline-offset-4 transition-colors hover:text-meta-pink"
            >
              Facebook for Creators
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
