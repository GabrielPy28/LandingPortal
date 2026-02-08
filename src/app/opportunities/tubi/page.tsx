"use client";

import { useState } from "react";
import {
  PageLoadAnimationTubi,
  HeaderTubi,
  HeroSectionTubi,
  LaNetaSectionTubi,
  TubiOpportunitySection,
  WhyTubiSection,
  CoverageCreatorverseSection,
  ScrollRevealCardsSection,
  FAQSectionTubi,
  FooterTubi,
  TubiFormModal,
} from "@/components/landing/tubi";

export default function TubiPage() {
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <PageLoadAnimationTubi>
      <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden bg-tubi-purple">
        <HeaderTubi />
        <main className="w-full min-w-0 overflow-x-hidden">
          <HeroSectionTubi onTryIt={() => setShowFormModal(true)} />
          <LaNetaSectionTubi />
          <TubiOpportunitySection />
          <WhyTubiSection />
          <CoverageCreatorverseSection />
          <ScrollRevealCardsSection />
          <FAQSectionTubi onTryIt={() => setShowFormModal(true)} />
          <FooterTubi />
        </main>
        <TubiFormModal isOpen={showFormModal} onClose={() => setShowFormModal(false)} />
      </div>
    </PageLoadAnimationTubi>
  );
}
