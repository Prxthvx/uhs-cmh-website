import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight"
        >
          Your Trusted Maternal Health Resource
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
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
      </div>
    </section>
  );
};

export default HeroSection;
