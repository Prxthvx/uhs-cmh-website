import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { videoCategories } from "@/data/videos";

const FeaturedVideos = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Featured <span className="text-primary">Videos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Real stories, expert insights, and lived experiences — watch, learn,
            and feel less alone.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {videoCategories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group cursor-pointer"
              onClick={() =>
                navigate(
                  `/real-stories?category=${encodeURIComponent(cat.key)}`
                )
              }
            >
              {/* Category Title */}
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest text-center mb-4">
                {cat.key}
              </h3>

              {/* Thumbnail with Play Overlay */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src={cat.image}
                  alt={cat.key}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/35 transition-colors duration-500" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-white/80 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    <Play
                      className="text-white ml-1"
                      size={28}
                      fill="white"
                      fillOpacity={0.9}
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground text-center mt-4 leading-relaxed px-2">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
