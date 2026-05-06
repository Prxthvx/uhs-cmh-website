import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllResourcesPage from "./pages/AllResourcesPage";
import TransitLogisticsPage from "./pages/TransitLogisticsPage";
import PregnancyGuide from "./pages/PregnancyGuide";
import RealStoriesPage from "./pages/RealStoriesPage";
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Old /resources hub → redirect straight to the Maternal Guide */}
          <Route path="/resources" element={<Navigate to="/pregnancy-guide" replace />} />
          <Route path="/all-resources" element={<AllResourcesPage />} />
          <Route path="/transportation" element={<TransitLogisticsPage />} />
          <Route path="/pregnancy-guide" element={<PregnancyGuide />} />
          <Route path="/real-stories" element={<RealStoriesPage />} />
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
