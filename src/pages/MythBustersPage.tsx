import React, { useState } from "react";
import { Lightbulb, ChevronRight, ChevronLeft, RotateCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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

const MythFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mythFacts.length);
    }, 200);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + mythFacts.length) % mythFacts.length);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-2">
      <div className="relative w-full h-[360px] md:h-[400px] mb-8 [perspective:1000px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              className="w-full h-full relative [transform-style:preserve-3d]"
            >
              {/* Front (Myth) */}
              <div className="absolute inset-0 w-full h-full bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-xl [backface-visibility:hidden] hover:border-primary/40 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary absolute top-8">
                  <Lightbulb size={28} />
                </div>
                <span className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest mb-4 mt-8">The Myth</span>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">"{mythFacts[currentIndex].myth}"</h3>
                <span className="absolute bottom-6 md:bottom-8 text-sm md:text-base text-primary/80 flex items-center bg-primary/5 px-6 py-3 rounded-full font-medium">
                  <RotateCw className="w-5 h-5 mr-2" /> Tap to see fact
                </span>
              </div>

              {/* Back (Fact) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <span className="text-sm md:text-base font-bold text-primary uppercase tracking-widest mb-4 absolute top-8">The Fact</span>
                <p className="text-xl md:text-3xl font-semibold text-foreground leading-snug mt-6">
                  {mythFacts[currentIndex].fact}
                </p>
                <span className="absolute bottom-6 md:bottom-8 text-sm md:text-base text-primary/80 flex items-center bg-background/60 backdrop-blur px-6 py-3 rounded-full font-medium">
                  <RotateCw className="w-5 h-5 mr-2" /> Tap to see myth
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between w-full px-4 max-w-md">
        <button 
          onClick={prevCard}
          className="p-4 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <div className="flex gap-3">
          {mythFacts.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-10' : 'bg-primary/20 w-3'}`} 
            />
          ))}
        </div>
        <button 
          onClick={nextCard}
          className="p-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
};

const MythBustersPage = () => {
  const [showIntro, setShowIntro] = useState(true);

  const text = "Discover the truth about pregnancy, backed by ACOG & the CDC.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.8 }
    }
  };

  const child = {
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-grow flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 w-full max-w-5xl h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {showIntro ? (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center w-full py-8 justify-center absolute inset-0 max-w-3xl mx-auto"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }} 
                  animate={{ scale: 1, rotate: 0 }} 
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  className="w-28 h-28 rounded-[2rem] bg-background text-primary flex items-center justify-center mb-8 shadow-xl border border-primary/20"
                >
                  <Lightbulb size={56} className="animate-pulse" />
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight"
                >
                  Myth vs. Fact <span className="text-primary">Busters</span>
                </motion.h1>
                
                <motion.div 
                  className="text-muted-foreground text-xl md:text-2xl mb-14 max-w-2xl leading-relaxed flex flex-wrap justify-center gap-x-2"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  onAnimationComplete={() => {
                    setTimeout(() => setShowIntro(false), 2500);
                  }}
                >
                  {words.map((word, index) => (
                    <motion.span variants={child} key={index} className="inline-block">
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  onClick={() => setShowIntro(false)}
                  className="text-primary/70 font-bold text-sm tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-1"
                >
                  Skip Intro <ChevronRight className="w-4 h-4 ml-1" />
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="flashcards"
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6 }}
                className="w-full flex flex-col items-center justify-center h-full pt-4"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 flex items-center justify-center gap-3">
                    <Lightbulb className="w-8 h-8 text-primary" /> Pregnancy Myths Debunked
                  </h2>
                  <p className="text-muted-foreground text-lg font-medium max-w-xl mx-auto">
                    Tap any card below to reveal the truth, and use the controls to swipe through the interactive deck.
                  </p>
                </div>
                <MythFlashcards />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Decorative Blobs for the section */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-secondary border border-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </main>
      <SiteFooter />
    </div>
  );
};

export default MythBustersPage;
