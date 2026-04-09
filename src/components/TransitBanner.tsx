import { Badge } from "@/components/ui/badge";
import { Info, BusFront, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import routeMap from "@/assets/route-map.png";

const TransitBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-emerald-50/30 dark:to-emerald-950/20 border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* Main Banner Container */}
        <div className="bg-emerald-50/80 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/50 rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden flex flex-col">
          
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/50 dark:bg-emerald-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Content: Highlights & Badge */}
            <div className="flex-1 space-y-6 flex flex-col justify-center">
              <div>
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-1 mb-4 text-sm tracking-wide">
                  New Service! Launched March 9, 2026
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight flex items-center gap-3 mb-4">
                  <BusFront className="w-10 h-10 text-emerald-600 dark:text-emerald-500 shrink-0" />
                  CMH Maternity Shuttle & Bus Routes
                </h2>
                <p className="text-muted-foreground text-lg mb-6 max-w-lg">
                  Serving the greater Chenango area, to make sure you never miss an appointment.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-background/80 backdrop-blur-sm border border-emerald-100 dark:border-emerald-800/30 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500" />
                <p className="text-lg md:text-xl font-bold text-emerald-800 dark:text-emerald-400 leading-snug pl-4">
                  Route 1 (Norwich City) is the <span className="underline decoration-emerald-500 decoration-4 underline-offset-4">ONLY</span> bus that drops off directly at Chenango Memorial Hospital.
                </p>
              </div>

              {/* Quick Info Grid for Timings & Fares */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-200/60 dark:border-emerald-800/30">
                  <span className="text-xs font-bold text-emerald-800/70 dark:text-emerald-500 uppercase tracking-widest block mb-1">Operating Hours</span>
                  <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">
                    Mon-Fri: 6:00 AM - 6:00 PM <br />
                    Sat: 8:00 AM - 5:00 PM
                  </p>
                </div>
                <div className="bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-200/60 dark:border-emerald-800/30">
                  <span className="text-xs font-bold text-emerald-800/70 dark:text-emerald-500 uppercase tracking-widest block mb-1">Standard Fares</span>
                  <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">
                    City Routes: $1.00 <br />
                    County Routes: $2.00
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/transportation')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 shadow-md group"
                >
                  Click for more transit details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Content: Real Map Embed */}
            <div className="flex-1 min-h-[350px] lg:min-h-full">
              <div className="w-full h-full bg-white/60 dark:bg-background/50 backdrop-blur-sm rounded-3xl border border-emerald-100 dark:border-emerald-900/40 p-2 shadow-sm overflow-hidden flex flex-col relative group transition-colors hover:border-emerald-300">
                
                {/* Google Maps iframe specifically focused on Chenango Memorial Hospital, Norwich NY */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11804.839088656754!2d-75.52623328574676!3d42.53123891461994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89db7a9b19e2bb25%3A0x6bba8d2fced37ec9!2sUHS%20Chenango%20Memorial%20Hospital!5e0!3m2!1sen!2sus!4v1703080000000!5m2!1sen!2sus"
                  className="w-full rounded-2xl flex-grow min-h-[350px]"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Directions Link */}
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=UHS+Chenango+Memorial+Hospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur shadow-xl border border-emerald-200 dark:border-emerald-800 px-5 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all whitespace-nowrap text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 hover:scale-105"
                >
                  <MapPin className="w-5 h-5 text-emerald-500" /> Open Mobile Directions
                </a>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-10 pt-6 border-t border-emerald-200 dark:border-emerald-900/40 flex items-center justify-center gap-2 text-emerald-800 dark:text-emerald-400 font-medium text-center relative z-10 w-full">
            <Info className="w-5 h-5" />
            <p>Exact fare required. ADA Accessible. Call <strong className="font-extrabold text-emerald-900 dark:text-emerald-300">607-367-1999</strong> for route deviations.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransitBanner;
