"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const META_APPLY_URL =
  "https://www.facebook.com/creator_programs/signup?referral_code=RJDWEF&id=1";

const FAQ_ITEMS = [
  {
    emoji: "🤔",
    q: "Can I meet all requirements and still not be approved?",
    a: (
      <>
        Yes, that&apos;s correct. Even if you meet all the basic requirements,
        Meta conducts a final review to ensure creators align with their quality
        standards, content vertical, and engagement metrics.{" "}
        <span className="font-medium text-meta-purple">
          Think of it as their way of ensuring the best fit for both you and the
          program!
        </span>{" "}
        We&apos;re here to help you put your best foot forward during this
        process. 💪
      </>
    ),
  },
  {
    emoji: "📄",
    q: "Do I need a Facebook Page to join?",
    a: (
      <>
        Yes, you&apos;ll need a Facebook Page to participate and receive
        payments.{" "}
        <span className="font-medium text-meta-pink">
          The good news? You can create it right during the application
          process—it&apos;s super straightforward!
        </span>{" "}
        Or if you already have one, simply link it. We&apos;ll guide you step by
        step. ✅
      </>
    ),
  },
  {
    emoji: "🎬",
    q: "Can I really repost my TikToks/YT Shorts or IG Reels?",
    a: (
      <>
        <span className="font-semibold text-meta-purple">
          Absolutely! This is one of the great perks of the program!
        </span>{" "}
        You can repost your existing TikTok, YouTube Shorts, or Instagram Reels
        content. No need to start from scratch—just upload directly to Facebook
        (not as a share or embed) and remove any watermarks before posting.
        Monetize content you&apos;ve already worked hard to create! ✨
      </>
    ),
  },
  {
    emoji: "📊",
    q: "How do I track my earnings?",
    a: (
      <>
        Once accepted and onboarded, you&apos;ll have access to{" "}
        <span className="font-medium text-meta-purple">
          Meta Creator Studio
        </span>{" "}
        where you can track everything in one place! Earnings in real-time,
        Reels performance metrics, and Breakthrough Bonus progress—it&apos;s all
        pretty intuitive. We&apos;re here if you need help navigating it! 📈
      </>
    ),
  },
  {
    emoji: "🔗",
    q: "Where can I find official Meta information?",
    a: (
      <>
        We totally get wanting to see the official info! Here are the direct
        links to Meta&apos;s official resources:
        <ul className="mt-3 space-y-2">
          <li>
            <a
              href="https://creators.facebook.com/breakthrough-bonus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-meta-purple underline decoration-meta-pink/50 underline-offset-4 transition-colors hover:text-meta-pink hover:decoration-meta-pink"
            >
              Breakthrough Bonus Overview
              <ExternalLink className="size-3.5" />
            </a>
          </li>
          <li>
            <a
              href="https://creators.facebook.com/tools/facebook-content-monetization"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-meta-purple underline decoration-meta-pink/50 underline-offset-4 transition-colors hover:text-meta-pink hover:decoration-meta-pink"
            >
              Facebook Content Monetization
              <ExternalLink className="size-3.5" />
            </a>
          </li>
        </ul>
        Feel free to reach out if you have questions—we&apos;re happy to clarify! 💡
      </>
    ),
  },
  {
    emoji: "📋",
    q: "What are the terms of participation?",
    a: (
      <>
        It&apos;s always good to review the terms before applying! You can find
        all program terms and conditions{" "}
        <a
          href="https://www.laneta.com/terms-conditions-creator-program"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-meta-purple underline decoration-meta-pink/50 underline-offset-4 transition-colors hover:text-meta-pink hover:decoration-meta-pink"
        >
          here
          <ExternalLink className="size-3.5" />
        </a>
        . Legal docs can be dry—if you have questions, just ask and we&apos;ll
        explain in simpler terms! 👍
      </>
    ),
  },
  {
    emoji: "🔐",
    q: "Why do I need to add my TikTok/YouTube accounts?",
    a: (
      <>
        <span className="font-medium text-meta-purple">Great question!</span> We
        need to verify you meet the program&apos;s eligibility (100,000+
        followers) and that your content quality aligns with what Meta is
        looking for. This helps maximize your chances of approval—it&apos;s just
        part of the initial screening. Don&apos;t worry! 🛡️
      </>
    ),
  },
  {
    emoji: "💡",
    q: "If I've joined the program before, am I eligible to join again?",
    a: (
      <>
        Unfortunately, if you&apos;ve already participated, you won&apos;t be
        eligible to join again—this program is for creators{" "}
        <span className="font-medium">new</span> to Meta&apos;s monetization.
        <span className="font-medium text-meta-pink">
          {" "}
          But don&apos;t be discouraged!
        </span>{" "}
        New opportunities are always launching. We&apos;re here to help you
        explore other ways to grow and monetize! 🚀
      </>
    ),
  },
  {
    emoji: "⚠️",
    q: "Payout error related to creator's tax information—can you help?",
    a: (
      <>
        We understand how frustrating payout errors can be! Unfortunately,
        payout and tax-related issues need to be handled directly by{" "}
        <span className="font-medium text-meta-purple">Meta Support</span>, as
        they have access to your account&apos;s financial and tax details.
        We&apos;re here for other questions—reach out anytime! 💬
      </>
    ),
  },
];

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

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
        accordionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: accordionRef.current,
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
      id="faq"
      className="scroll-mt-20 bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="container mx-auto max-w-3xl px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-5xl" aria-hidden>
            ❓
          </span>
          <h2
            ref={titleRef}
            className="text-3xl font-bold text-meta-dark sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Everything you need to know about the Meta Breakthrough Bonus Program
          </p>
        </div>

        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-meta-purple/20 bg-white px-4 shadow-sm transition-shadow hover:shadow-md hover:border-meta-purple/30 data-[state=open]:border-meta-purple/40 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="group flex items-center gap-3 py-5 text-left font-medium text-meta-dark hover:no-underline hover:text-meta-purple">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-meta-purple/10 text-lg transition-colors group-hover:bg-meta-purple/20 group-data-[state=open]:bg-meta-purple/20"
                    aria-hidden
                  >
                    {item.emoji}
                  </span>
                  <span className="flex-1 pr-2">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-14 pr-2">
                  <div className="rounded-lg border-l-4 border-meta-purple/30 bg-slate-50/50 py-3 pl-4 pr-3 text-slate-600">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 rounded-2xl border-2 border-dashed border-meta-purple/30 bg-meta-purple/5 p-8 text-center">
          <span className="text-4xl" aria-hidden>
            ✨
          </span>
          <div>
            <p className="text-lg font-semibold text-meta-dark">
              Ready to get started?
            </p>
            <p className="mt-1 text-slate-600">
              Don&apos;t miss out on this opportunity!
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-meta-purple px-8 py-6 text-lg font-semibold hover:bg-meta-purple/90"
          >
            <Link
              href={META_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Sparkles className="size-5" />
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
