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
import { HelpCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FAQ_ITEMS: { q: string; a: string | React.ReactNode }[] = [
  {
    q: "How to close your trial or paid subscription?",
    a: "Go to your account, tap on the avatar, select Settings > Subscriptions > Active. Choose the subscription you want to cancel, tap on the \"3 dots\" button, and in the menu, you'll see the Unsubscribe button. Done!",
  },
  {
    q: "How can I pay for the Gyre subscription?",
    a: "Our payment system accepts debit/credit bank cards: Visa, Mastercard, and Maestro. You can also top up your balance via PayPal and cryptocurrency. If you have online banking, it should work with our platform; if not, you'll need to contact your bank.",
  },
  {
    q: "My payment failed. What should I do?",
    a: "If a subscription payment fails, don't worry. You'll have two more automatic attempts. To avoid interruptions, ensure you have sufficient funds or top up your Gyre balance at least 3 days before a monthly subscription or 8 days before an annual subscription ends. For emergencies, use the MANUAL PAYMENT button after the first or second failed attempt. Go to Settings > Subscriptions, select the subscription, and tap the three dots to find the MANUAL PAYMENT button.",
  },
  {
    q: "Will my streams be saved when switching from Trial to paid?",
    a: "If you don't cancel your Trial subscription by the 7th day, you'll be automatically upgraded to a paid Start+ subscription, which includes access to 4 simultaneous streams. The Trial subscription will then be closed, and the streams will stop. You'll receive a larger server to which you'll need to upload your videos and create new streams.",
  },
  {
    q: "How do I sign up for a different paid subscription instead of Start+?",
    a: "Click the ADD NEW PLAN button next to your server name at the top of your account. Choose your desired subscription and duration. Your free subscription will be closed, all active streams will stop, and a new server will appear in your account for uploading videos and starting new streams.",
  },
  {
    q: "Can I buy a few extra days for my main subscription?",
    a: "The minimum period for a paid subscription is 30 days. Purchasing a subscription for a shorter period is not available.",
  },
  {
    q: "How can I upgrade my subscription plan?",
    a: (
      <div className="space-y-5">
        <p className="leading-relaxed">
          If you have an active subscription, you can upgrade to a higher plan or extend your term without losing the money you've already paid. Here's how:
        </p>
        <ol className="list-decimal space-y-2 pl-5 font-medium text-white/90 [counter-reset:item]">
          <li className="pl-1">Go to your profile settings in your Gyre account.</li>
          <li className="pl-1">Navigate to the Subscriptions section.</li>
          <li className="pl-1">Click the three dots next to your active subscription and select Upgrade.</li>
          <li className="pl-1">Choose your new plan and terms.</li>
          <li className="pl-1">Select your payment method.</li>
          <li className="pl-1">Confirm the new subscription.</li>
        </ol>
        <div className="rounded-xl border-l-4 border-gyre-red/80 bg-white/5 px-4 py-3">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gyre-red">Important notes</p>
          <ul className="list-disc space-y-1.5 pl-5 text-gyre-muted">
            <li>Upgrading to a new subscription term keeps your server and files unchanged.</li>
            <li>Upgrading from Start to Start+ or Pro+ gives you more disk space and options, but your current server will be replaced. Save any critical data first, as existing files and streams will be lost.</li>
            <li>Upgrading from Start+ to Pro+ preserves your server, files, and streams, and adds more disk space and features.</li>
            <li>We'll convert your remaining days into a discount for your new plan.</li>
            <li>During the upgrade, an additional day is considered for time zone adjustments. For example, if you've used your Start+ plan for three days, four days will be considered in the upgrade.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export function FAQSectionGyre() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current && sectionRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 36 },
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
      if (accordionRef.current) {
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
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative scroll-mt-20 overflow-hidden border-t-2 border-white/20 bg-gyre-dark py-20 md:py-28"
    >
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gyre-red/40" aria-hidden />
      <div className="container relative mx-auto max-w-3xl px-6">
        <div
          ref={headerRef}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gyre-red">
            <HelpCircle className="size-3.5" aria-hidden />
            Support
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-gyre-muted md:text-lg">
            Subscription, payments, and upgrades — everything you need to manage your Gyre plan.
          </p>
        </div>

        <div ref={accordionRef} className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`gyre-faq-${i}`}
                className="faq-gyre-item overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-0 shadow-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] data-[state=open]:border-gyre-red/40 data-[state=open]:bg-white/[0.06] data-[state=open]:shadow-[0_0_0_1px_rgba(242,5,68,0.15)]"
              >
                <AccordionTrigger className="faq-gyre-trigger group flex w-full list-none items-center gap-4 py-5 pl-6 pr-5 text-left text-base font-semibold text-white transition-colors hover:bg-white/[0.04] hover:text-white data-[state=open]:bg-transparent [&[data-state=open]]:text-gyre-red [&>svg]:shrink-0 [&>svg]:text-gyre-muted [&[data-state=open]>svg]:text-gyre-red">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold tabular-nums text-gyre-muted group-data-[state=open]:bg-gyre-red/20 group-data-[state=open]:text-gyre-red">
                    {i + 1}
                  </span>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="faq-gyre-content border-t border-white/5 pb-6 pl-6 pr-6 pt-0">
                  <div className="pt-4 text-[15px] leading-relaxed text-gyre-muted">
                    {typeof item.a === "string" ? item.a : item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
