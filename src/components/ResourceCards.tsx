import { Heart, BookOpen, Baby, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Heart,
    title: "Prenatal Care",
    description: "Essential checkup schedules, nutrition guides, and wellness tips for a healthy pregnancy.",
  },
  {
    icon: Baby,
    title: "Postnatal Support",
    description: "Recovery guidance, newborn care basics, and breastfeeding resources for new mothers.",
  },
  {
    icon: BookOpen,
    title: "Educational Materials",
    description: "Evidence-based articles and guides reviewed by certified healthcare professionals.",
  },
  {
    icon: ShieldCheck,
    title: "Emergency Info",
    description: "Know the warning signs and when to seek immediate medical attention.",
  },
];

const ResourceCards = () => {
  return (
    <section id="resources" className="pt-4 pb-16 md:pt-6 md:pb-24 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Resources & Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <feature.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;
