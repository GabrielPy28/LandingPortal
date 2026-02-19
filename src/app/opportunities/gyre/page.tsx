"use client";

import {
  PageLoadAnimationGyre,
  HeaderGyre,
  HeroSectionGyre,
  WhyContactedSectionGyre,
  WhoIsLaNetaGyre,
  ServicePresentationGyrePart1,
  ServicePresentationGyrePart2,
  PartnershipModelGyre,
  PartnershipModelAffiliateGyre,
  FAQSectionGyre,
  CTASectionGyre,
  FooterGyre,
} from "@/components/landing/gyre";

export default function GyrePage() {
  return (
    <PageLoadAnimationGyre>
      <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden bg-gyre-dark">
        <HeaderGyre />
        <main className="w-full min-w-0 overflow-x-hidden">
          <HeroSectionGyre />
          <WhyContactedSectionGyre />
          <ServicePresentationGyrePart1 />
          <ServicePresentationGyrePart2 />
          <PartnershipModelGyre />
          <PartnershipModelAffiliateGyre />
          <FAQSectionGyre />
          <CTASectionGyre />          
          <WhoIsLaNetaGyre />
          <FooterGyre />
        </main>
      </div>
    </PageLoadAnimationGyre>
  );
}
