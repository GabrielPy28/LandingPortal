import {
  PageLoadAnimation,
  HeroSection,
  Header,
  WhyContactedSection,
  MetaOpportunitySection,
  GrowthSection,
  FAQSection,
  ContactForm,
  LaNetaSection,
  Footer,
} from "@/components/landing";

export default function MetaOpportunityPage() {
  return (
    <PageLoadAnimation>
      <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden bg-white">
        <Header />
        <main className="w-full min-w-0 overflow-x-hidden">
          <HeroSection />
          <MetaOpportunitySection />
          <GrowthSection />
          <FAQSection />
          <ContactForm />
          <LaNetaSection />
          <WhyContactedSection />
          <Footer />
        </main>
      </div>
    </PageLoadAnimation>
  );
}
