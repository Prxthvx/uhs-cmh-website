import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Baby,
  Heart,
  MessageCircle,
  HandHeart,
} from "lucide-react";

const quickLinks = [
  {
    label: "I'm Pregnant — Where Do I Start?",
    icon: Baby,
    to: "/pregnancy-guide",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
  },
  {
    label: "I Need Mental Health Support",
    icon: Heart,
    to: "/support",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
  },
  {
    label: "I Want to Hear Other Moms' Stories",
    icon: MessageCircle,
    to: "/real-stories",
    color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
  },
  {
    label: "I Need Nutrition & Diet Guidance",
    icon: HandHeart,
    to: "/pregnancy-guide#second-trimester",
    color: "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100",
  },
];

const QuickAccessButtons = () => {
  const navigate = useNavigate();

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
            How Can We Help?
          </h2>
          <p className="text-muted-foreground">
            Quick links to get you where you need to go.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {quickLinks.map((link, i) => (
            <motion.button
              key={link.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              onClick={() => navigate(link.to)}
              className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${link.color}`}
            >
              <link.icon size={18} />
              {link.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAccessButtons;
