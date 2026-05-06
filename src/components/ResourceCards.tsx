import { CalendarHeart, Baby, Sparkles, ActivitySquare, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const journeyStages = [
  {
    id: "planning",
    icon: CalendarHeart,
    title: "Planning & Confirmation",
    myth: "Preparing for Pregnancy",
    preview: "Preconception health, counseling, early warning signs, and exactly what to expect at your first confirmation visit.",
  },
  {
    id: "first-trimester",
    icon: Sparkles,
    title: "First Trimester",
    myth: "Weeks 1 – 12",
    preview: "Navigating early symptoms like morning sickness, critical initial genetic screenings, and vital prenatal practices.",
  },
  {
    id: "second-trimester",
    icon: Baby,
    title: "Second Trimester",
    myth: "Weeks 13 – 27",
    preview: "Often called the 'honeymoon phase'. Prepare for the anatomy scan, increasing energy, and feeling those first kicks.",
  },
  {
    id: "third-trimester",
    icon: ActivitySquare,
    title: "Third Trimester",
    myth: "Weeks 28 – 40+",
    preview: "The home stretch. Essential information on kick counting, recognizing signs of labor readiness, and finalizing your birth plan.",
  },
];

const ResourceCards = () => {
  const navigate = useNavigate();

  return (
    <section id="overview-grid" className="-mt-px pt-12 pb-16 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-4">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-1">Your journey</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              The Pregnancy <span className="text-primary">Overview</span>
            </h2>
          </div>
          <button
            onClick={() => navigate("/pregnancy-guide")}
            className="text-sm font-semibold text-primary hover:underline flex items-center gap-1 shrink-0"
          >
            View full guide <ChevronRight size={14} />
          </button>
        </div>

        {/* Journey path — desktop: horizontal row with connector lines, mobile: stacked list */}
        <div className="relative">

          {/* Connector line (desktop only) */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[2.75rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px"
            style={{ background: "linear-gradient(to right, transparent, hsl(var(--border)) 15%, hsl(var(--border)) 85%, transparent)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px md:gap-0">
            {journeyStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.button
                  key={stage.id}
                  onClick={() => navigate(`/pregnancy-guide#${stage.id}`)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="group relative flex flex-row md:flex-col items-start md:items-center gap-5 md:gap-0 px-5 md:px-4 py-5 md:py-6 rounded-xl hover:bg-background hover:shadow-sm border border-transparent hover:border-border/60 transition-all duration-200 text-left md:text-center cursor-pointer"
                >
                  {/* Step circle with icon */}
                  <div className="relative z-10 shrink-0 md:mb-4">
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-border group-hover:border-primary/50 flex items-center justify-center shadow-sm transition-colors duration-200">
                      <Icon
                        size={22}
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
                      />
                    </div>
                    {/* Mobile only: step number badge */}
                    <span className="md:hidden absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    {/* Stage label */}
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-1.5">
                      <span className="hidden md:inline">Stage {i + 1} · </span>{stage.myth}
                    </p>

                    {/* Title */}
                    <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug mb-2">
                      {stage.title}
                    </p>

                    {/* Preview — clamp to 3 lines */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-3">
                      {stage.preview}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-primary/60 group-hover:text-primary transition-colors duration-200">
                      Explore <ChevronRight size={13} className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;
