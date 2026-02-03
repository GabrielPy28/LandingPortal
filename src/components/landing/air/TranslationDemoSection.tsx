"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiTranslate } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const TRANSLATIONS = [
  { lang: "English", text: "Your content. Every language. Same power." },
  { lang: "Spanish", text: "Tu contenido. Cada idioma. El mismo impacto." },
  { lang: "French", text: "Votre contenu. Chaque langue. La même force." },
  { lang: "German", text: "Dein Inhalt. Jede Sprache. Dieselbe Kraft." },
  { lang: "Portuguese", text: "Seu conteúdo. Cada idioma. O mesmo poder." },
  { lang: "Japanese", text: "あなたのコンテンツ。あらゆる言語。同じ力。" },
  { lang: "Arabic", text: "محتواك. كل لغة. نفس القوة." },
  { lang: "Hindi", text: "आपकी सामग्री। हर भाषा। वही ताकत।" },
  { lang: "Chinese", text: "你的内容。每种语言。同样的力量。" },
  { lang: "Italian", text: "Il tuo contenuto. Ogni lingua. La stessa potenza." },
  { lang: "Russian", text: "Ваш контент. Любой язык. Та же сила." },
  { lang: "Korean", text: "당신의 콘텐츠. 모든 언어. 동일한 힘." },
  { lang: "Hebrew", text: "התוכן שלך. כל שפה. אותה עוצמה." },
];

const DURATION_PER_LANG = 5;
const PAUSE_BETWEEN = 1;

export function TranslationDemoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const langRef = useRef<HTMLParagraphElement>(null);
  const isFirstRender = useRef(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
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
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Fade in new text when currentIndex changes (after React has painted)
  useEffect(() => {
    if (!textRef.current || !langRef.current) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      gsap.set(textRef.current, { opacity: 1, y: 0 });
      gsap.set(langRef.current, { opacity: 1 });
      return;
    }
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      langRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, delay: 0.08, ease: "power2.out" }
    );
  }, [currentIndex]);

  // Cycle through languages: fade out -> update index -> (effect above) fade in
  useEffect(() => {
    if (!textRef.current || !langRef.current) return;

    let index = 0;
    const cycle = () => {
      const nextIndex = (index + 1) % TRANSLATIONS.length;
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIndex(nextIndex);
          index = nextIndex;
        },
      });
      tl.to(textRef.current, {
        opacity: 0,
        y: -8,
        duration: 0.3,
        ease: "power2.in",
      }).to(langRef.current, { opacity: 0, duration: 0.2 }, "<");
    };

    const intervalMs = (DURATION_PER_LANG + PAUSE_BETWEEN) * 1000;
    const interval = setInterval(cycle, intervalMs);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="translation-demo"
      className="scroll-mt-20 bg-air-bg py-24"
    >
      <div className="container mx-auto max-w-4xl px-6">
        <h2
          ref={titleRef}
          className="mb-4 text-center text-3xl font-bold text-air-dark sm:text-4xl"
        >
          See the Technology in Action
        </h2>
        <p className="mb-12 text-center text-lg text-air-dark/80">
          Imagine your message reaching every corner of the world in the
          viewer&apos;s native language, with the best voice quality. This is
          the power of professional localization.
        </p>

        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-2xl border-2 border-air-blue/30 bg-white p-8 shadow-xl md:p-12"
        >
          <div
            className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-air-lime/20 px-4 py-2 text-sm font-semibold text-air-dark"
          >
            <HiTranslate className="size-5 text-air-blue" />
            Live translation preview
          </div>

          <div className="min-h-[140px] overflow-visible pt-8 md:pt-12">
            <p
              ref={textRef}
              className="text-center text-2xl font-bold leading-snug text-air-dark md:text-3xl"
              style={{ minHeight: "1.4em", willChange: "opacity, transform" }}
            >
              {TRANSLATIONS[currentIndex]?.text ??
                "Your content. Every language. Same power."}
            </p>
            <p
              ref={langRef}
              className="mt-4 text-center text-sm font-semibold uppercase tracking-wider text-air-blue"
              style={{ willChange: "opacity" }}
            >
              {TRANSLATIONS[currentIndex]?.lang ?? "English"}
            </p>
          </div>

          <p className="mt-8 text-center text-sm text-air-dark/60">
            With AIR Media-Tech, your content can be localized to 50+ languages
            with AI or human voices—so your audience hears you in their own
            language, with the best quality.
          </p>
        </div>
      </div>
    </section>
  );
}
