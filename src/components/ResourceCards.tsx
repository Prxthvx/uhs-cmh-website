import { CalendarHeart, Baby, Sparkles, ActivitySquare, ArrowRight } from "lucide-react";
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
    myth: "Weeks 1 to 12",
    preview: "Navigating early symptoms like morning sickness, critical initial genetic screenings, and vital prenatal practices.",
  },
  {
    id: "second-trimester",
    icon: Baby,
    title: "Second Trimester",
    myth: "Weeks 13 to 27",
    preview: "Often called the 'honeymoon phase'. Prepare for the anatomy scan, increasing energy, and feeling those first kicks.",
  },
  {
    id: "third-trimester",
    icon: ActivitySquare,
    title: "Third Trimester",
    myth: "Weeks 28 to 40+",
    preview: "The home stretch. Essential information on kick counting, recognizing signs of labor readiness, and finalizing your birth plan.",
  }
];

const ResourceCards = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="overview-grid" className="-mt-px pt-12 pb-20 md:pt-16 md:pb-28 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            The Pregnancy Journey <span className="text-primary">Overview</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From the moment you decide to try, all the way to delivery. Hover over a stage to see what is inside, and click to view the full detailed guide.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {journeyStages.map((stage, i) => (
            <motion.div
              variants={itemVariants}
              key={stage.id}
              onClick={() => navigate(`/pregnancy-guide#${stage.id}`)}
              className="group relative w-full h-[340px] md:h-[320px] cursor-pointer [perspective:1000px]"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full bg-card border border-border/80 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-sm [backface-visibility:hidden]">
                  <div className="w-20 h-20 rounded-2xl bg-secondary/80 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <stage.icon size={36} />
                  </div>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Stage {i + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                    {stage.title}
                  </h3>
                  <span className="absolute bottom-8 text-sm text-primary/70 flex items-center font-medium">
                    Hover to explore <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full bg-primary/5 border-2 border-primary/20 rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
                    {stage.myth}
                  </span>
                  <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed flex-grow flex items-center justify-center">
                    {stage.preview}
                  </p>
                  <div className="absolute bottom-8 text-sm text-primary/90 flex items-center bg-background/80 backdrop-blur px-5 py-2.5 rounded-full font-bold shadow-sm group-hover:-translate-y-1 transition-transform">
                    Read the detailed guide <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceCards;
