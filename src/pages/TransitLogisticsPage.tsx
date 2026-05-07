import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { MapPin, AlertTriangle, Clock, Calendar, ExternalLink, Bus } from "lucide-react";

import routeMap from "@/assets/route-map.png";

const holidays = [
  "New Year's Day (observed)",
  "Memorial Day",
  "July 4th (observed)",
  "Labor Day",
  "Thanksgiving",
  "Christmas (observed)",
];

const countyRoutes = [
  {
    id: "route-2",
    label: "Route 2: Greene / Oxford / Brisben",
    hours: "6:00 AM – 6:15 PM",
    pdfUrl: "https://www.chenangocountyny.gov/DocumentCenter/View/5899/Route-2-Greene-PDF",
  },
  {
    id: "route-3",
    label: "Route 3: Afton / Bainbridge / Sidney",
    hours: "7:40 AM – 4:26 PM",
    pdfUrl: "https://www.chenangocountyny.gov/DocumentCenter/View/5889/Route-3-Afton-Bainbridge-PDF",
  },
  {
    id: "route-4",
    label: "Route 4: South Otselic / Plymouth",
    hours: "9:46 AM – 2:17 PM",
    pdfUrl: "https://www.chenangocountyny.gov/DocumentCenter/View/5916/Route-4-South-Otselic-Loop-PDF",
  },
  {
    id: "route-5",
    label: "Route 5: New Berlin",
    hours: "6:00 AM – 5:25 PM",
    pdfUrl: "https://www.chenangocountyny.gov/DocumentCenter/View/5891/Route-5-New-Berlin-Loop-PDF",
  },
  {
    id: "route-6",
    label: "Route 6: Sherburne / Earlville",
    hours: "7:05 AM – 4:24 PM",
    pdfUrl: "https://www.chenangocountyny.gov/DocumentCenter/View/5886/Route-6-Sherburne-Loop-PDF",
  },
];

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

          {/* Hours of Operation */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Bus className="text-primary" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Bus Routes &amp; Hours of Operation</h2>
                <p className="text-sm text-muted-foreground mt-0.5">Chenango County Public Transit</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Operating Hours */}
              <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-primary" />
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Operating Hours</h3>
                </div>
                <p className="text-base font-semibold text-foreground mb-1">Monday – Friday</p>
                <p className="text-2xl font-bold text-primary mb-2">6:00 AM – 6:00 PM</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hours vary by route — check the individual route schedule for exact pickup times on your route.
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">Closed Saturday &amp; Sunday</p>
                </div>
              </div>

              {/* Holiday Closures */}
              <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-amber-600" />
                  <h3 className="font-semibold text-amber-800 dark:text-amber-400 text-sm uppercase tracking-wider">Holiday Closures</h3>
                </div>
                <ul className="space-y-1.5">
                  {holidays.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-base text-amber-900 dark:text-amber-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Important Notice */}
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

          <div className="space-y-12">

            {/* Route 1 — Norwich City */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Norwich City Residents</h2>

              <div className="bg-card border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <Badge className="absolute top-6 right-6 bg-primary/10 text-primary hover:bg-primary/20 pointer-events-none">Direct to CMH</Badge>

                <h3 className="font-bold text-xl flex items-center gap-2 mb-6 text-foreground">
                  <MapPin className="w-6 h-6 text-primary shrink-0" /> Route 1 North Loop
                </h3>

                <div className="grid sm:grid-cols-3 gap-5 text-base text-muted-foreground mb-5">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Cost</p>
                    <p className="text-lg font-bold text-primary">$1.00 <span className="text-muted-foreground font-normal text-sm">adult</span></p>
                    <p className="text-sm text-muted-foreground">$0.50 half-fare</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 sm:col-span-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Schedule</p>
                    <p className="font-medium text-foreground">Every ~1.5 hours between <span className="font-bold">6:21 AM – 4:35 PM</span> (Mon–Fri)</p>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 text-base text-muted-foreground mb-5">
                  <p className="font-medium text-foreground mb-1">Rider Rules</p>
                  <p>Exact change only &nbsp;·&nbsp; Children under 5 ride free &nbsp;·&nbsp; ADA accessible</p>
                  <p className="mt-1">Call <a href="tel:607-367-1999" className="text-primary font-semibold hover:underline">607-367-1999</a> one day in advance for route deviations.</p>
                </div>

                <a
                  href="https://www.chenangocountyny.gov/DocumentCenter/View/5887/Route-1-Norwich---North-and-South-Loops-PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <ExternalLink size={14} /> View Full Route 1 Schedule (PDF)
                </a>
              </div>
            </div>

            {/* Coming from Outside Norwich */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Coming from Outside Norwich?</h2>

              <div className="bg-secondary/40 rounded-xl p-5 md:p-6 mb-6 border border-border">
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

              <h3 className="font-semibold text-lg mb-4 text-foreground">County Routes &amp; Schedules</h3>
              <div className="space-y-3">
                {countyRoutes.map((route) => (
                  <a
                    key={route.id}
                    href={route.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-card border border-border hover:border-primary/40 rounded-xl px-5 py-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl shrink-0">🚐</span>
                      <div>
                        <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{route.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                          <Clock size={11} /> {route.hours}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-primary shrink-0 ml-4">
                      <span className="hidden sm:inline">View Schedule</span>
                      <ExternalLink size={13} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default TransitLogisticsPage;
