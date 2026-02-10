"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  HeroSection,
  Header,
  WhyContactedSection,
  MetaOpportunitySection,
  GrowthSection,
  FAQSection,
  ContactForm,
  LaNetaSection,
  Footer,
  ConnectOpportunitiesModal,
} from "@/components/landing";

export function MetaOpportunityContent() {
  const searchParams = useSearchParams();
  const [showConnectModal, setShowConnectModal] = useState(false);

  useEffect(() => {
    if (searchParams.get("open") === "connect_new_opportunities") {
      setShowConnectModal(true);
    }
  }, [searchParams]);

  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden bg-white">
      <Header onOpenConnectModal={() => setShowConnectModal(true)} />
      <main className="w-full min-w-0 overflow-x-hidden">
        <HeroSection onOpenConnectModal={() => setShowConnectModal(true)} />
        <MetaOpportunitySection />
        <GrowthSection />
        <FAQSection />
        <ContactForm />
        <LaNetaSection />
        <WhyContactedSection />
        <Footer />
      </main>
      <ConnectOpportunitiesModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
      />
    </div>
  );
}
