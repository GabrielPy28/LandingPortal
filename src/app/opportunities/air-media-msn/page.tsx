import type { Metadata } from "next";
import {
  PageLoadAnimationAir,
  HeroSectionAir,
  HeaderAir,
  LaNetaSectionAir,
  WhyContactedSectionAir,
  AirOpportunitySection,
  TranslationDemoSection,
  GrowthSectionAir,
  HowItWorksAir,
  FAQSectionAir,
  ContactFormAir,
  FooterAir,
} from "@/components/landing/air";

export const metadata: Metadata = {
  title: "AIR Media-Tech & Microsoft Network | La Neta - Go Global",
  description:
    "Professional translation to 50+ languages and distribution on Microsoft Network (MSN, Windows, Bing, Edge). Expand your content globally with La Neta and AIR Media-Tech.",
  openGraph: {
    title: "AIR Media-Tech & Microsoft Network | La Neta - Go Global",
    description:
      "Professional translation to 50+ languages and distribution on Microsoft Network (MSN, Windows, Bing, Edge). Expand your content globally with La Neta and AIR Media-Tech.",
    url: "/opportunities/air-media-msn",
    type: "website",
    siteName: "La Neta",
    images: [
      {
        url: "/images/air_media_tech.png",
        width: 1200,
        height: 630,
        alt: "AIR Media-Tech & Microsoft Network - La Neta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIR Media-Tech & Microsoft Network | La Neta - Go Global",
    description:
      "Professional translation to 50+ languages and distribution on Microsoft Network (MSN, Windows, Bing, Edge). Expand your content globally with La Neta and AIR Media-Tech.",
    images: ["/images/air_media_tech.png"],
  },
};

export default function AirMediaMsnPage() {
  return (
    <PageLoadAnimationAir>
      <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden bg-air-bg">
        <HeaderAir />
        <main className="w-full min-w-0 overflow-x-hidden">
          <HeroSectionAir />
          <AirOpportunitySection />
          <TranslationDemoSection />
          <GrowthSectionAir />
          <HowItWorksAir />
          <FAQSectionAir />
          <ContactFormAir />
          <LaNetaSectionAir />
          <WhyContactedSectionAir />
          <FooterAir />
        </main>
      </div>
    </PageLoadAnimationAir>
  );
}
