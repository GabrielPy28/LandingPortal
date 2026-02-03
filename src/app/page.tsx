import {
  HeroSection,
  Header,
  LaNetaSection,
  WhyContactedSection,
  MetaOpportunitySection,
  GrowthSection,
  FAQSection,
  ContactForm,
  Footer,
  PageLoadAnimation,
} from "@/components/landing";

export default function Home() {
  return (
    <PageLoadAnimation>
      <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden bg-white">
        <Header />
        <main className="w-full min-w-0 overflow-x-hidden">
          <HeroSection />
          <LaNetaSection />
          <WhyContactedSection />
          <MetaOpportunitySection />
          <GrowthSection />
          <FAQSection />
          <ContactForm />
          <Footer />
        </main>
      </div>
    </PageLoadAnimation>
  );
}
