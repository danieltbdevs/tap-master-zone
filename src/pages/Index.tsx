import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import FAQSection from "@/components/FAQSection";
import CallbackFormSection from "@/components/CallbackFormSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ServiceAreaSection />
      <FAQSection />
      <CallbackFormSection />
      <Footer />
      <StickyMobileCTA />
      
      {/* Extra padding for sticky mobile CTA */}
      <div className="h-24 lg:hidden" />
    </div>
  );
};

export default Index;
