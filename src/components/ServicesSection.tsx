import { motion } from "framer-motion";
import { Stethoscope, Users } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Comprehensive maternal care designed around your needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <Stethoscope size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Clinical Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Access to scheduled consultations, lab result tracking, and direct communication with your assigned care team.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Community Programs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Join peer support groups, attend prenatal classes, and connect with other mothers in your community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
