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
  ConnectOpportunitiesToast,
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
        <WhyContactedSection />
        {/*<GrowthSection /> */}
        <FAQSection />
        <ContactForm />
        <LaNetaSection />
        <Footer />
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
