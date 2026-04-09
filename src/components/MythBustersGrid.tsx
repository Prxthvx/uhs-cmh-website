import React from "react";
import { ArrowRight, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const mythFacts = [
  {
    myth: "I have to completely stop drinking coffee.",
    fact: "False! You can safely have up to 200mg of caffeine a day. That is about one 12-ounce cup of coffee. (Source: ACOG)"
  },
  {
    myth: "I am eating for two, so I need double the food.",
    fact: "False! You only need about 300 extra calories a day, and only during your 2nd and 3rd trimesters. (Source: CDC)"
  },
  {
    myth: "I should not exercise while pregnant.",
    fact: "False! If you are healthy, 150 minutes of moderate exercise a week (like brisk walking) is highly recommended and safe for the baby. (Source: ACOG)"
  },
  {
    myth: "Morning sickness only happens in the morning.",
    fact: "False! Nausea can happen at any time of day or night. Eating small, frequent meals can help you feel better."
  }
];

const MythBustersGrid = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
              <Lightbulb size={32} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            <span className="text-primary">Myth vs. Fact</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Get the truth about pregnancy, backed by the experts. Hover or tap the cards below to reveal the facts.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {mythFacts.map((item, i) => (
            <motion.div
              variants={itemVariants}
              key={i}
              className="group relative w-full h-[320px] md:h-72 cursor-pointer [perspective:1000px]"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front of Card (Myth) */}
                <div className="absolute inset-0 w-full h-full bg-card border border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-md [backface-visibility:hidden]">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">The Myth</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">"{item.myth}"</h3>
                  <span className="absolute bottom-6 text-sm text-primary/70 flex items-center">
                    Hover or tap to reveal the truth <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>

                {/* Back of Card (Fact) */}
                <div className="absolute inset-0 w-full h-full bg-primary/10 border border-primary/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2">The Fact</span>
                  <p className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                    {item.fact}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex flex-col items-center justify-center text-center border-t border-border pt-12">
          <p className="text-muted-foreground mb-4 font-medium">We can't possibly fit all the myths here!</p>
          <Button
            onClick={() => navigate('/myth-busters')}
            size="lg"
            className="rounded-full px-8 shadow-sm hover:shadow-md transition-all group"
          >
            Want more? Click here <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MythBustersGrid;
