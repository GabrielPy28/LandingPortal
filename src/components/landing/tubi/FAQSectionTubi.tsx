"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CobwebCorner } from "./CobwebDecoration";

gsap.registerPlugin(ScrollTrigger);

const FAQ_ITEMS = [
  {
    q: "How much can I expect to earn (CPM/RPM)?",
    a: "Tubi does not provide exact figures in advance. The benchmark we use is that CPM on their platform is typically, on average, twice as high as on YouTube. As an AVOD model, your earnings will depend on views and ad monetization.",
  },
  {
    q: "What is my revenue share and when do I get paid?",
    a: "You receive 50% of net income from the monetization of your content on Tubi. Payments are made monthly, no later than 60 days after the end of the month, provided payment has been received from Tubi and you have submitted your tax documentation (W-8/W-9).",
  },
  {
    q: "Is there a minimum payout?",
    a: "Yes. There is a minimum threshold of $250 USD. If you earn less than that in a month, the balance rolls over to the next payment cycle.",
  },
  {
    q: "Will my full video library be uploaded?",
    a: "Yes. The plan is to distribute your channel's full content library. Content must be at least 15 minutes per video (long-form) to be eligible for OTT/AVOD monetization.",
  },
  {
    q: "Are there content restrictions?",
    a: "Tubi accepts most approved themes, including mature or sensitive topics. Political content is not allowed. All content must comply with Tubi's suitability guidelines.",
  },
  {
    q: "Will my original titles and thumbnails be kept?",
    a: "Your video titles remain unchanged. Thumbnails will be adapted by the team to meet Tubi's technical and visual specifications.",
  },
  {
    q: "How long is the contract?",
    a: "The contract has an initial term of two (2) years. After that, it renews automatically for successive one (1) year periods unless you choose not to renew. To not renew, you must send written notice at least 90 days before the end of the current term.",
  },
  {
    q: "Will Tubi promote my content?",
    a: "Yes. All creator content is included in Creatorverse, a section that boosts visibility on the platform. Each title is also placed on relevant content shelves. When you sign, you agree to post at least one promotional announcement on your YouTube channel and one on another social platform within 30 days of your Tubi premiere.",
  },
];

interface FAQSectionTubiProps {
  onTryIt: () => void;
}

export function FAQSectionTubi({ onTryIt }: FAQSectionTubiProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
      gsap.fromTo(accordionRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: accordionRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative scroll-mt-20 bg-tubi-dark py-24"
    >
      <CobwebCorner position="top-left" />
      <CobwebCorner position="bottom-right" />
      <div className="container relative mx-auto max-w-3xl px-6">
        <h2 ref={titleRef} className="mb-4 text-center text-3xl font-bold text-tubi-yellow sm:text-4xl md:text-[2.5rem]">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-center text-lg text-tubi-yellow/80 md:text-xl">
          Everything you need to know about distributing on Tubi
        </p>

        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`tubi-faq-${i}`}
                className="overflow-hidden rounded-xl border border-tubi-yellow/20 bg-tubi-purple/10 px-4 transition-colors hover:border-tubi-yellow/30 data-[state=open]:border-tubi-yellow/40"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-tubi-yellow hover:no-underline hover:text-white md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base text-tubi-yellow/90 md:text-lg">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 rounded-2xl border border-tubi-yellow/20 bg-tubi-purple/10 p-8 text-center">
          <p className="text-xl font-semibold text-tubi-yellow md:text-2xl">Ready to try it?</p>
          <Button
            size="lg"
            onClick={onTryIt}
            className="cursor-pointer bg-tubi-yellow px-8 py-6 text-lg font-semibold text-tubi-dark hover:bg-tubi-dark hover:text-tubi-yellow"
          >
            Try it
          </Button>
        </div>
      </div>
    </section>
  );
}
