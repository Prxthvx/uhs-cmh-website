import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { Play, Clock, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { videos, type VideoCategory } from "@/data/videos";
import { Button } from "@/components/ui/button";

const categories: (VideoCategory | "All")[] = [
  "All",
  "Healthcare Professionals",
  "Postpartum Testimonials",
  "New Parent Journeys",
  "Mental Wellbeing",
];

const RealStoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "All">("All");
  const navigate = useNavigate();

  const filtered =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="container max-w-4xl mx-auto px-4 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-5"
          >
            Real <span className="text-primary">Stories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Your voice matters. See the stories, own your care. Real
            experiences from healthcare professionals, new parents, and mothers
            navigating postpartum life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="px-8 gap-2">
              <Play size={18} fill="currentColor" fillOpacity={0.9} />
              Watch Featured Story
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-4"
            style={{ scrollbarWidth: "none" }}
          >
            <Filter size={16} className="text-muted-foreground shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-14 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => navigate(`/video/${video.id}`)}
                className="group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow duration-500 mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/25 transition-colors duration-500" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                      <Play className="text-white ml-0.5" size={22} fill="white" fillOpacity={0.9} />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-foreground/70 text-white text-xs font-medium rounded-md flex items-center gap-1 backdrop-blur-sm">
                    <Clock size={12} />
                    {video.duration}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-base font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {video.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No videos found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Share Your Story
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Your experience could help another mother feel less alone. We
            welcome written, audio, and video submissions — anonymous options
            are available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="gap-2 px-8">
              Submit Your Story <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Learn About the Process
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default RealStoriesPage;
