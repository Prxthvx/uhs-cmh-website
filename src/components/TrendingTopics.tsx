import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trendingTopics } from "@/data/topics";

const TrendingTopics = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <TrendingUp className="text-primary" size={20} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Trending Topics
          </h2>
        </div>

        {/* Scrollable carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {trendingTopics.map((topic, i) => (
              <motion.div
                key={topic.slug}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => navigate(`/topics/${topic.slug}`)}
                className="flex-shrink-0 w-[300px] md:w-[340px] snap-start cursor-pointer group"
              >
                <div className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {topic.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {topic.description}
                    </p>
                    <span className="inline-flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                      Explore Topic <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="hidden md:block absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
