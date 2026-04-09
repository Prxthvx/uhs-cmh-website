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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
