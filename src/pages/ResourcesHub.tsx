import React from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BookOpen, Bus, ShieldAlert, ArrowRight, LibraryBig } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResourcesHub = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      {/* Hero Banner for the Dashboard Portal */}
      <div className="bg-emerald-900/5 border-b border-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-white dark:bg-background rounded-2xl shadow-sm border border-border flex items-center justify-center mb-6">
            <LibraryBig size={32} className="text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6">
            UHS CMH <span className="text-emerald-600">Resources Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl px-4">
            Your central portal for maternal education, clinic logistics, transit systems, and evidence-based health data.
          </p>
        </div>
      </div>

      <main className="flex-1 container max-w-5xl mx-auto px-4 py-16 md:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">

          {/* Maternal Guide Card */}
          <button 
            onClick={() => navigate('/pregnancy-guide')}
            className="group text-left bg-card border border-border hover:border-emerald-500 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 shrink-0 shadow-sm border border-emerald-200 dark:border-emerald-800">
              <BookOpen size={28} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3 leading-tight">The Comprehensive Maternal Guide</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
              A massive, deeply researched clinical blueprint navigating you from preconception planning, through all three trimesters, directly into postpartum care.
            </p>
            <div className="mt-auto font-bold text-emerald-600 dark:text-emerald-400 flex items-center text-sm uppercase tracking-wide">
              Read the Guide <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </button>

          {/* Transportation Card */}
          <button 
            onClick={() => navigate('/transportation')}
            className="group text-left bg-card border border-border hover:border-blue-500 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 shrink-0 shadow-sm border border-blue-200 dark:border-blue-800">
              <Bus size={28} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3 leading-tight">Maternity Transit & Shuttles</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
              Never miss an appointment. View the full Chenango Memorial Hospital shuttle routes, pickup locations, live tracking maps, and $1 fare schedules.
            </p>
            <div className="mt-auto font-bold text-blue-600 dark:text-blue-400 flex items-center text-sm uppercase tracking-wide">
              View Schedules <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </button>

          {/* Myth Busters Card */}
          <button 
            onClick={() => navigate('/myth-busters')}
            className="group text-left bg-card border border-border hover:border-purple-500 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 shrink-0 shadow-sm border border-purple-200 dark:border-purple-800">
              <ShieldAlert size={28} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3 leading-tight">Pregnancy Myth Busters</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
              Separate medical fact from old wives' tales. Discover the truth about coffee intake, exercising, eating for two, and other highly prevalent pregnancy myths.
            </p>
            <div className="mt-auto font-bold text-purple-600 dark:text-purple-400 flex items-center text-sm uppercase tracking-wide">
              Bust Myths <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </button>

        </div>

      </main>

      <SiteFooter />
    </div>
  );
};

export default ResourcesHub;
