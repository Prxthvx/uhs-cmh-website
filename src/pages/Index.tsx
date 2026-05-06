import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ResourceCards from "@/components/ResourceCards";
import FeaturedVideos from "@/components/FeaturedVideos";
import TrendingTopics from "@/components/TrendingTopics";
import QuickAccessButtons from "@/components/QuickAccessButtons";
import TransitBanner from "@/components/TransitBanner";

import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <FeaturedVideos />
      <ResourceCards />
      <TrendingTopics />
      <QuickAccessButtons />
      <TransitBanner />
      <FAQSection />
      <ContactSection />
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default Index;
