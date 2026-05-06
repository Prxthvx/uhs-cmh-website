import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Heart,
  MessageCircle,
  Users,
  Bus,
  Phone,
  Stethoscope,
  Baby,
  FlaskConical,
} from "lucide-react";

const resources = [
  {
    label: "Maternal Guide",
    description:
      "A comprehensive week-by-week pregnancy guide covering all trimesters, milestone tests, baby development, and questions to ask your doctor.",
    icon: BookOpen,
    to: "/pregnancy-guide",
    color: "emerald",
  },
  {
    label: "Real Stories",
    description:
      "Video testimonials and personal accounts from mothers who have navigated pregnancy, birth, and postpartum at CMH.",
    icon: MessageCircle,
    to: "/real-stories",
    color: "amber",
  },
  {
    label: "Mental Health Support",
    description:
      "Hotlines, counseling resources, and guides for postpartum depression, anxiety, and maternal mental wellbeing.",
    icon: Heart,
    to: "/support",
    color: "rose",
  },
  {
    label: "Community",
    description:
      "Connect with other mothers in the CMH area — ask questions, share experiences, and find peer support.",
    icon: Users,
    to: "/community",
    color: "violet",
  },
  {
    label: "Maternity Transit & Shuttles",
    description:
      "CMH shuttle routes, pickup times, live tracking, and the $1 fare schedule so you never miss an appointment.",
    icon: Bus,
    to: "/transportation",
    color: "blue",
  },
  {
    label: "Baby Week by Week",
    description:
      "Interactive visualization of your baby's growth from Week 4 to Week 40, with fruit-size comparisons and maternal changes.",
    icon: Baby,
    to: "/pregnancy-guide#week-by-week",
    color: "teal",
  },
  {
    label: "Milestone Tests",
    description:
      "A timeline of every key prenatal screening — from the dating ultrasound to the GBS swab — with what to expect from each.",
    icon: FlaskConical,
    to: "/pregnancy-guide#milestone-tests",
    color: "orange",
  },
  {
    label: "Expert Topic Hubs",
    description:
      "Deep-dive articles on postpartum depression, nutrition, birth planning, and partner support — curated by OB-GYNs.",
    icon: Stethoscope,
    to: "/topics/postpartum-depression",
    color: "indigo",
  },
  {
    label: "Contact Us",
    description:
      "Reach the UHS Chenango Memorial Hospital maternity team directly with questions, feedback, or appointment requests.",
    icon: Phone,
    to: "/#contact",
    color: "green",
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-50 border-emerald-200 hover:border-emerald-400 text-emerald-700",
  amber:   "bg-amber-50 border-amber-200 hover:border-amber-400 text-amber-700",
  rose:    "bg-rose-50 border-rose-200 hover:border-rose-400 text-rose-700",
  violet:  "bg-violet-50 border-violet-200 hover:border-violet-400 text-violet-700",
  blue:    "bg-blue-50 border-blue-200 hover:border-blue-400 text-blue-700",
  purple:  "bg-purple-50 border-purple-200 hover:border-purple-400 text-purple-700",
  teal:    "bg-teal-50 border-teal-200 hover:border-teal-400 text-teal-700",
  orange:  "bg-orange-50 border-orange-200 hover:border-orange-400 text-orange-700",
  indigo:  "bg-indigo-50 border-indigo-200 hover:border-indigo-400 text-indigo-700",
  green:   "bg-green-50 border-green-200 hover:border-green-400 text-green-700",
};

const iconBgMap: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-600",
  amber:   "bg-amber-100 text-amber-600",
  rose:    "bg-rose-100 text-rose-600",
  violet:  "bg-violet-100 text-violet-600",
  blue:    "bg-blue-100 text-blue-600",
  purple:  "bg-purple-100 text-purple-600",
  teal:    "bg-teal-100 text-teal-600",
  orange:  "bg-orange-100 text-orange-600",
  indigo:  "bg-indigo-100 text-indigo-600",
  green:   "bg-green-100 text-green-600",
};

const AllResourcesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <div className="bg-primary/5 border-b border-border py-16 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
          Everything in One Place
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
          Your complete directory of maternal health resources, tools, and support
          available through UHS Chenango Memorial Hospital.
        </p>
      </div>

      {/* Tiles */}
      <main className="flex-1 container max-w-6xl mx-auto px-4 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resources.map((r, i) => (
            <motion.button
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              onClick={() => navigate(r.to)}
              className={`group text-left rounded-2xl border-2 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colorMap[r.color]}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${iconBgMap[r.color]}`}>
                <r.icon size={24} />
              </div>
              <h2 className="text-lg font-bold text-foreground mb-2 leading-snug">
                {r.label}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {r.description}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default AllResourcesPage;
