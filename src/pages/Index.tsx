import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ResourceCards from "@/components/ResourceCards";
import MythBustersGrid from "@/components/MythBustersGrid";
import TransitBanner from "@/components/TransitBanner";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <ResourceCards />
      <MythBustersGrid />
      <TransitBanner />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default Index;
