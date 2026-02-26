"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Header,
  FAST_TRACK_NAV_LINKS,
  FAQSection,
  ContactForm,
  LaNetaSection,
  Footer,
  ConnectOpportunitiesModal,
  ConnectOpportunitiesToast,
} from "@/components/landing";
import { HeroSectionMetaFastTrack } from "./HeroSectionMetaFastTrack";
import { MetaOpportunitySectionPart1MetaFastTrack } from "./MetaOpportunitySectionPart1MetaFastTrack";
import { HowItWorksMetaFastTrack } from "./HowItWorksMetaFastTrack";
import { MetaOpportunitySectionPart2MetaFastTrack } from "./MetaOpportunitySectionPart2MetaFastTrack";
import { WhyContactedSectionMetaFastTrack } from "./WhyContactedSectionMetaFastTrack";

export function MetaFastTrackOpportunityContent() {
  const searchParams = useSearchParams();
  const [showConnectModal, setShowConnectModal] = useState(false);

  useEffect(() => {
    if (searchParams.get("open") === "connect_new_opportunities") {
      setShowConnectModal(true);
    }
  }, [searchParams]);

  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden bg-white">
      <Header
        onOpenConnectModal={() => setShowConnectModal(true)}
        navLinks={FAST_TRACK_NAV_LINKS}
        applyButtonLabel="Apply Now"
      />
      <main className="w-full min-w-0 overflow-x-hidden">
        <HeroSectionMetaFastTrack onOpenConnectModal={() => setShowConnectModal(true)} />
        <MetaOpportunitySectionPart1MetaFastTrack />
        <WhyContactedSectionMetaFastTrack />
        <HowItWorksMetaFastTrack />
        <MetaOpportunitySectionPart2MetaFastTrack />
        <FAQSection program="fast-track" />
        <ContactForm subject="Creator Fast Track" />
        <LaNetaSection />
        <Footer
          programTitle="Creator Fast Track"
          navLinks={FAST_TRACK_NAV_LINKS}
          termsHref="https://creators.facebook.com/creator-fast-track"
        />
      </main>
      <ConnectOpportunitiesModal
        isOpen={showConnectModal}
        onClose={() => {
          setShowConnectModal(false);
          requestAnimationFrame(() => {
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          });
        }}
      />
      <ConnectOpportunitiesToast onOpen={() => setShowConnectModal(true)} />
    </div>
  );
}

