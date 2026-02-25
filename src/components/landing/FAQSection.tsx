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
  "https://www.facebook.com/creator_programs/signup?referral_code=laneta";

/** Prepended only when program is Fast Track */
const FAST_TRACK_FAQ_PREPEND = [  
  {
    q: "I applied to a previous Meta creator program and was rejected. Can I still join Fast Track?",
    a: (
      <>
        Yes. Fast Track is a separate program with its own eligibility and
        review. A rejection from another Meta program does not disqualify you.
        If you meet Fast Track&apos;s requirements (100K+ followers, no Facebook
        Reels in the last 6 months, not enrolled in another Facebook
        monetization program), you can apply.
      </>
    ),
  },
  {
    q: "I'm currently at 950k followers. If I hit 1 Million followers during Month 2 of the program, does my pay bump up from $1,000 to $3,000 for the remaining months? Or am I locked into the tier I started with?",
    a: (
      <>
        You are locked into the tier you qualified for at the time of your
        application. The guaranteed* payouts are determined by your linked
        account&apos;s follower count the moment you are accepted into the Fast
        Track program.
      </>
    ),
  },
  {
    q: "If I post my 15 videos but get zero views, do I still get paid? Or is there a hidden view-count threshold?",
    a: (
      <>
        Yes, you still get paid! The Fast Track program guarantees the bonus
        payout strictly based on meeting the posting requirements (15 Reels
        across 10+ separate days per month). There are no hidden performance or
        view-count thresholds.
      </>
    ),
  },
  {
    q: "I haven't really been 'active,' but I posted one random Reel 3 months ago just to test a feature. Does that one post disqualify me?",
    a: (
      <>
        Yes. To be eligible, your account must have strictly{" "}
        <span className="font-semibold text-meta-purple">zero</span> Facebook
        Reels or videos published within the last 180 days (6 months).
      </>
    ),
  },
  {
    q: "If I delete the 3 videos I posted last month, does that reset my 180-day clock so I can join?",
    a: (
      <>
        No. Deleting a video does not erase the publishing activity from Meta&apos;s
        backend systems. If a video was published to your page within the last
        180 days, you will not qualify for the program.
      </>
    ),
  },
  {
    q: "What exactly does 'boosted visibility' mean within this program?",
    a: (
      <>
        As a Fast Track participant, Meta prioritizes your content with
        increased reach in the Facebook feed. This helps your imported catalog
        content find a new audience rapidly so you don&apos;t feel like you are
        starting from scratch on a new platform.
      </>
    ),
  },
  {
    q: "What happens in Month 4 when the program ends? Will my views drop off a cliff?",
    a: (
      <>
        Month 4 is when you graduate! Entering the Fast Track program gives you
        accelerated onboarding into standard Facebook Content Monetization
        (FCM). Once your 3-month guaranteed* payouts end, you will continue
        earning revenue organically through standard Reels monetization based on
        the engaged audience you built during the program.
      </>
    ),
  },
  {
    q: "Can I leave my current Meta bonus program to switch to this one? If I am technically already onboarded on another Meta program, can I still join Fast Track?",
    a: (
      <>
        No. To be eligible for Fast Track, you must not be currently onboarded
        to any other Facebook monetization program. This program is
        specifically designed to welcome creators who are not yet monetizing on
        Facebook.
      </>
    ),
  },
];

const FAQ_ITEMS = [
  {
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
        process.
      </>
    ),
  },
  {
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
        step.
      </>
    ),
  },
  {
    q: "Can I really repost my TikToks/YT Shorts or IG Reels?",
    a: (
      <>
        <span className="font-semibold text-meta-purple">
          Absolutely! This is one of the great perks of the program!
        </span>{" "}
        You can repost your existing TikTok, YouTube Shorts, or Instagram Reels
        content. No need to start from scratch—just upload directly to Facebook
        (not as a share or embed) and remove any watermarks before posting.
        Monetize content you&apos;ve already worked hard to create!
      </>
    ),
  },
  {
    q: "How do I track my earnings?",
    a: (
      <>
        Once accepted and onboarded, you&apos;ll have access to{" "}
        <span className="font-medium text-meta-purple">
          Meta Creator Studio
        </span>{" "}
        where you can track everything in one place! Earnings in real-time,
        Reels performance metrics, and Breakthrough Bonus progress—it&apos;s all
        pretty intuitive. We&apos;re here if you need help navigating it!
      </>
    ),
  },
  {
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
        <br />
        Feel free to reach out if you have questions—we&apos;re happy to clarify!
      </>
    ),
  },
  /*{
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
        explain in simpler terms!
      </>
    ),
  ,*/
  {
    q: "Why do I need to add my TikTok/YouTube accounts?",
    a: (
      <>
        <span className="font-medium text-meta-purple">Great question!</span> We
        need to verify you meet the program&apos;s eligibility (100,000+
        followers) and that your content quality aligns with what Meta is
        looking for. This helps maximize your chances of approval—it&apos;s just
        part of the initial screening. Don&apos;t worry!
      </>
    ),
  },
  {
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
        explore other ways to grow and monetize!
      </>
    ),
  },
  {
    q: "Payout error related to creator's tax information—can you help?",
    a: (
      <>
        We understand how frustrating payout errors can be! Unfortunately,
        payout and tax-related issues need to be handled directly by{" "}
        <span className="font-medium text-meta-purple">Meta Support</span>, as
        they have access to your account&apos;s financial and tax details.
        We&apos;re here for other questions—reach out anytime!
      </>
    ),
  },
];

export function FAQSection({
  program = "breakthrough",
}: {
  program?: "breakthrough" | "fast-track";
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const items =
    program === "fast-track"
      ? [...FAST_TRACK_FAQ_PREPEND, ...FAQ_ITEMS]
      : FAQ_ITEMS;
  const subtitle =
    program === "fast-track"
      ? "Everything you need to know about the Meta Fast Track Creator Program"
      : "Everything you need to know about the Meta Breakthrough Bonus Program";

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
          <span className="text-5xl text-meta-purple" aria-hidden>
            ❓
          </span>
          <h2
            ref={titleRef}
            className="text-3xl font-bold text-meta-dark sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">{subtitle}</p>
        </div>

        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-meta-purple/20 bg-white px-4 shadow-sm transition-shadow hover:shadow-md hover:border-meta-purple/30 data-[state=open]:border-meta-purple/40 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="group flex items-center gap-3 py-5 text-left font-medium text-meta-dark hover:no-underline hover:text-meta-purple">
                  <span className="flex-1 pr-2">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-2">
                  <div className="rounded-lg border-l-4 border-meta-purple/30 bg-slate-50/50 py-3 pl-4 pr-3 text-slate-600">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 rounded-2xl border-2 border-dashed border-meta-purple/30 bg-meta-purple/5 p-8 text-center">
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
              Try it
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
