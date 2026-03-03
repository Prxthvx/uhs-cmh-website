import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const images = [hero1, hero2, hero3, hero4, hero5];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center">
      {/* Background slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Bottom gradient fade — extends beyond the section for seamless blend */}
      <div className="absolute -bottom-px left-0 right-0 h-48 bg-gradient-to-t from-background via-background/70 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 container text-center max-w-2xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight tracking-tight"
        >
          Your Trusted Maternal Health Resource
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-base md:text-lg text-primary-foreground/85 leading-relaxed"
        >
          Expert guidance and essential resources for every stage of your maternal journey — from your care team to you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Button size="lg" className="px-8 py-3 text-base font-medium rounded-lg">
            Explore Resources
          </Button>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary-foreground" : "w-3 bg-primary-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
