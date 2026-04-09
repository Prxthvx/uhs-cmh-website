import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Info, AlertTriangle } from "lucide-react";

import routeMap from "@/assets/route-map.png";

const TransitLogisticsPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          
          {/* Header */}
          <div className="mb-10 text-center">
            <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-3 py-1 mb-4 text-sm tracking-wide">
              New Service!
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              CMH Maternity Transit Schedules
            </h1>
            <p className="text-lg text-muted-foreground">
              Dedicated transportation options to assist your travel to Chenango Memorial Hospital.
            </p>
          </div>

          {/* Core Rule / Warning Banner */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors" />
            <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-full shrink-0 relative z-10">
              <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-500" />
            </div>
            <div className="relative z-10 text-center sm:text-left">
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-400 mb-1">Important Notice</h3>
              <p className="text-amber-800 dark:text-amber-300 font-medium text-base md:text-lg">
                Route 1 (Norwich City) is the <span className="font-extrabold underline decoration-amber-500/50">ONLY</span> bus that stops directly at Chenango Memorial Hospital.
              </p>
            </div>
          </div>

          {/* Route Map Image */}
          <div className="w-full bg-white rounded-2xl flex items-center justify-center mb-12 shadow-md border border-border overflow-hidden">
            <img 
              src={routeMap} 
              alt="Chenango County Public Transit Route Map" 
              className="w-full h-auto object-contain max-h-[600px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Section 1: Route 1 */}
            <div className="md:col-span-12 lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  Norwich City Residents
                </h2>
                
                <div className="bg-card border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <Badge className="absolute top-6 right-6 bg-primary/10 text-primary hover:bg-primary/20 pointer-events-none">Direct</Badge>
                  
                  <h3 className="font-bold text-xl flex items-center gap-2 mb-6 text-foreground">
                    <MapPin className="w-6 h-6 text-primary shrink-0" /> Route 1 North Loop
                  </h3>
                  
                  <div className="space-y-6 text-base text-muted-foreground">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                      <strong className="text-foreground w-20 shrink-0 inline-block">Cost:</strong> 
                      <span className="text-lg font-semibold text-primary">$1.00 Adult <span className="text-muted-foreground font-normal text-base">/ $0.50 Half-Fare</span></span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                      <strong className="text-foreground w-20 shrink-0 inline-block pt-1">Schedule:</strong> 
                      <span className="leading-relaxed bg-secondary/50 p-4 rounded-lg font-medium">Bus stops at CMH roughly every <span className="text-foreground font-bold">1.5 hours</span> between <span className="text-foreground font-bold">6:21 AM and 4:35 PM</span> (Mon-Fri).</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Hub & Spoke */}
            <div className="md:col-span-12 lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Coming from Outside Norwich?
                </h2>
                <div className="bg-secondary/40 rounded-xl p-5 md:p-6 mb-8 border border-border">
                  <p className="text-base text-muted-foreground font-medium mb-4">Follow this 3-step transfer process:</p>
                  <ol className="space-y-3 relative before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-border pl-0 list-none">
                    <li className="relative flex items-start gap-4 text-base">
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary shrink-0 z-10 shadow-sm">1</div>
                      <span className="pt-1 text-foreground font-medium">Take your local county bus to <strong>West Park Place</strong> in downtown Norwich.</span>
                    </li>
                    <li className="relative flex items-start gap-4 text-base">
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary shrink-0 z-10 shadow-sm">2</div>
                      <span className="pt-1 text-foreground font-medium">Pay the <strong>$3.00</strong> county fare.</span>
                    </li>
                    <li className="relative flex items-start gap-4 text-base">
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary shrink-0 z-10 shadow-sm">3</div>
                      <span className="pt-1 text-foreground font-medium">Transfer to the <strong>Route 1</strong> bus to reach the hospital.</span>
                    </li>
                  </ol>
                </div>

                <h3 className="font-semibold text-lg mb-4 text-foreground">County Routes & Hours</h3>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  
                  <AccordionItem value="route-2" className="border border-border rounded-xl px-4 shadow-sm bg-card overflow-hidden hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline transition-colors text-left py-5">
                      <span className="flex items-center gap-3">
                        <span className="text-xl shrink-0">🚐</span> Route 2: Greene / Oxford / Brisben
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground text-base">
                      <div className="bg-primary/5 text-primary-foreground/90 font-medium p-3 rounded-lg flex items-center gap-2 border border-primary/10">
                        <span className="text-foreground">Operating Hours:</span> 6:00 AM - 6:15 PM
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="route-3" className="border border-border rounded-xl px-4 shadow-sm bg-card overflow-hidden hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline transition-colors text-left py-5">
                      <span className="flex items-center gap-3">
                        <span className="text-xl shrink-0">🚐</span> Route 3: Afton / Bainbridge / Sidney
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground text-base">
                      <div className="bg-primary/5 text-primary-foreground/90 font-medium p-3 rounded-lg flex items-center gap-2 border border-primary/10">
                        <span className="text-foreground">Operating Hours:</span> 7:40 AM - 4:26 PM
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="route-4" className="border border-border rounded-xl px-4 shadow-sm bg-card overflow-hidden hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline transition-colors text-left py-5">
                      <span className="flex items-center gap-3">
                        <span className="text-xl shrink-0">🚐</span> Route 4: South Otselic / Plymouth
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground text-base">
                      <div className="bg-primary/5 text-primary-foreground/90 font-medium p-3 rounded-lg flex items-center gap-2 border border-primary/10">
                        <span className="text-foreground">Operating Hours:</span> 9:46 AM - 2:17 PM
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="route-5" className="border border-border rounded-xl px-4 shadow-sm bg-card overflow-hidden hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline transition-colors text-left py-5">
                      <span className="flex items-center gap-3">
                        <span className="text-xl shrink-0">🚐</span> Route 5: New Berlin
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground text-base">
                      <div className="bg-primary/5 text-primary-foreground/90 font-medium p-3 rounded-lg flex items-center gap-2 border border-primary/10">
                        <span className="text-foreground">Operating Hours:</span> 6:00 AM - 5:25 PM
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="route-6" className="border border-border rounded-xl px-4 shadow-sm bg-card overflow-hidden hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline transition-colors text-left py-5">
                      <span className="flex items-center gap-3">
                        <span className="text-xl shrink-0">🚐</span> Route 6: Sherburne / Earlville
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground text-base">
                      <div className="bg-primary/5 text-primary-foreground/90 font-medium p-3 rounded-lg flex items-center gap-2 border border-primary/10">
                        <span className="text-foreground">Operating Hours:</span> 7:05 AM - 4:24 PM
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </div>
            </div>
          </div>
          
          {/* Footer Rules */}
          <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-slate-200 flex flex-col items-center text-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Info className="w-8 h-8 text-primary mb-4" />
            <p className="text-lg md:text-xl font-medium mb-2 w-full max-w-2xl leading-relaxed">
              Exact change only. Children under 5 ride free. ADA accessible.
            </p>
            <p className="text-base md:text-lg text-slate-400 font-normal">
              Call <a href="tel:607-367-1999" className="text-white font-bold hover:text-primary transition-colors underline decoration-primary/50 underline-offset-4">607-367-1999</a> one day in advance for route deviations.
            </p>
          </div>

        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
};

export default TransitLogisticsPage;
