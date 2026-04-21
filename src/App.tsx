import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResourcesHub from "./pages/ResourcesHub";
import TransitLogisticsPage from "./pages/TransitLogisticsPage";
import MythBustersPage from "./pages/MythBustersPage";
import PregnancyGuide from "./pages/PregnancyGuide";
import RealStoriesPage from "./pages/RealStoriesPage";
import ProfessionalAdvicePage from "./pages/ProfessionalAdvicePage";
import DiverseVoicesPage from "./pages/DiverseVoicesPage";
import SupportResourcesPage from "./pages/SupportResourcesPage";
import TopicHubPage from "./pages/TopicHubPage";
import VideoViewPage from "./pages/VideoViewPage";
import CommunityPage from "./pages/CommunityPage";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/transportation" element={<TransitLogisticsPage />} />
          <Route path="/myth-busters" element={<MythBustersPage />} />
          <Route path="/pregnancy-guide" element={<PregnancyGuide />} />
          <Route path="/real-stories" element={<RealStoriesPage />} />
          <Route path="/professional-advice" element={<ProfessionalAdvicePage />} />
          <Route path="/diverse-voices" element={<DiverseVoicesPage />} />
          <Route path="/support" element={<SupportResourcesPage />} />
          <Route path="/topics/:slug" element={<TopicHubPage />} />
          <Route path="/video/:id" element={<VideoViewPage />} />
          <Route path="/community" element={<CommunityPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

