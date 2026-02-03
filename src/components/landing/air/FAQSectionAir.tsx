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
import { HiExternalLink, HiSparkles } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_URL = "https://calendly.com/ana-laneta/30min";

const FAQ_ITEMS = [
  {
    emoji: "🎬",
    q: "Is exclusive content needed?",
    a: (
      <>
        No, you don&apos;t need to create exclusive content for Microsoft
        Network. We will distribute your existing content from platforms like
        YouTube without requiring exclusivity. This allows you to maximize the
        reach of your current content across multiple platforms, while still
        retaining all rights. To get started, you&apos;ll need to apply through
        AIR Media-Tech, as only authorized publishers like us can distribute
        content on Microsoft Network.
      </>
    ),
  },
  {
    emoji: "💰",
    q: "When will I start earning money?",
    a: (
      <>
        You will begin earning from the very first day your content is
        distributed on Microsoft Network Platforms. There are no barriers like
        minimum watch time or complicated setups—just straightforward
        monetization. Once your content goes live, revenue will start
        accumulating immediately. Ready to start earning? Contact AIR
        Media-Tech to join Microsoft Network Platforms.
      </>
    ),
  },
  {
    emoji: "📅",
    q: "How often will I receive payments?",
    a: (
      <>
        Payments are made monthly. You&apos;ll be able to track your earnings
        through your personal AIR Media-Tech account. We handle all aspects of
        payment management to ensure you receive your earnings on time. Want to
        know more about how it works? Contact AIR Media-Tech for more details
        on payment schedules and methods.
      </>
    ),
  },
  {
    emoji: "©️",
    q: "Who owns the rights to my content on Microsoft Network?",
    a: (
      <>
        You retain full ownership of your content. However, by distributing
        through Microsoft Network, you grant Microsoft users a non-exclusive,
        worldwide, royalty-free license to access and share your content using
        standard features like printing or sharing on social media.
        Additionally, you grant the distribution company, AIR Media-Tech, the
        right to use your content throughout the agreement period. The company
        decides when and how to use the content, but you still retain
        ownership. Have more questions? Contact AIR Media-Tech for further
        details on how we manage your content distribution.
      </>
    ),
  },
  {
    emoji: "🌍",
    q: "Content in what languages is accepted on Microsoft Network?",
    a: (
      <>
        MSN supports content in multiple languages, with priority given to
        English, Spanish, Japanese, German, French, Italian, and Portuguese.
        Creators with content in these languages are more likely to get faster
        approval and broader reach. If your content is in one of these
        languages, you&apos;re in a strong position to connect with a global
        audience. With AIR&apos;s localization service, you can also expand
        your existing content into 50+ languages—so you reach every market.
      </>
    ),
  },
];

export function FAQSectionAir() {
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
      className="scroll-mt-20 bg-gradient-to-b from-air-bg to-white py-24"
    >
      <div className="container mx-auto max-w-3xl px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2
            ref={titleRef}
            className="text-3xl font-bold text-air-dark sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-air-dark/80">
            Everything you need to know about localization and Microsoft Network
            distribution
          </p>
        </div>

        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-air-blue/20 bg-white px-4 shadow-sm transition-shadow hover:border-air-blue/30 hover:shadow-md data-[state=open]:border-air-blue/40 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="group flex items-center gap-3 py-5 text-left font-medium text-air-dark hover:no-underline hover:text-air-blue">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-air-blue/10 text-xl transition-colors group-hover:bg-air-blue/20"
                    aria-hidden
                  >
                    {item.emoji}
                  </span>
                  <span className="flex-1 pr-2 text-left">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-2">
                  <div className="rounded-lg border-l-4 border-air-blue/30 bg-air-bg/50 py-3 pl-4 pr-3 text-air-dark/80">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 rounded-2xl border-2 border-dashed border-air-blue/30 bg-air-blue/5 p-8 text-center">
          <HiSparkles className="size-10 text-air-blue" aria-hidden />
          <div>
            <p className="text-lg font-semibold text-air-dark">
              Ready to get started?
            </p>
            <p className="mt-1 text-air-dark/80">
              Book a consultation and see how your content can go global.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-air-blue px-8 py-6 text-lg font-semibold hover:bg-air-blue/90"
          >
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <HiSparkles className="size-5" />
              Book a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
