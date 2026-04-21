import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Stethoscope,
  Baby,
  Brain,
  Heart,
  Apple,
  Building2,
  ChevronDown,
  ChevronUp,
  Play,
  FileText,
  Download,
} from "lucide-react";

interface SubCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  qna: { question: string; answer: string }[];
  articles: { title: string; summary: string }[];
  videos: { title: string; duration: string }[];
}

const subcategories: SubCategory[] = [
  {
    id: "pregnancy",
    title: "Pregnancy",
    icon: Baby,
    description: "Guidance for a healthy pregnancy from conception to delivery.",
    qna: [
      {
        question: "How often should I see my OB-GYN during pregnancy?",
        answer:
          "Typically, visits are monthly until 28 weeks, every 2 weeks until 36 weeks, then weekly until delivery. Your provider may recommend a different schedule based on your individual needs.",
      },
      {
        question: "What are the most important prenatal vitamins?",
        answer:
          "Folic acid is the most critical, ideally started before conception. Iron, calcium, DHA, and vitamin D are also essential. Always consult your provider before starting any supplements.",
      },
      {
        question: "When should I go to the hospital during labor?",
        answer:
          "The general guideline is the 5-1-1 rule: contractions 5 minutes apart, lasting 1 minute each, for at least 1 hour. However, contact your provider if you experience water breaking, bleeding, or decreased fetal movement.",
      },
    ],
    articles: [
      { title: "First Trimester: What to Expect Week by Week", summary: "A comprehensive guide to the physical and emotional changes during weeks 1-12." },
      { title: "Understanding Prenatal Testing Options", summary: "An overview of genetic screenings, ultrasounds, and diagnostic tests available during pregnancy." },
    ],
    videos: [
      { title: "Dr. Martinez: Nutrition During Pregnancy", duration: "14:30" },
      { title: "What Happens at Your First Prenatal Visit", duration: "8:45" },
    ],
  },
  {
    id: "postpartum",
    title: "Postpartum",
    icon: Heart,
    description: "Recovery, care, and adjusting to life after birth.",
    qna: [
      {
        question: "How long does postpartum recovery typically take?",
        answer:
          "Physical recovery varies — vaginal births typically take 6-8 weeks, while C-sections may take 8-12 weeks. Emotional adjustment can take much longer. Be patient with yourself and communicate openly with your care team.",
      },
      {
        question: "What are warning signs I should watch for after delivery?",
        answer:
          "Seek immediate medical attention for: heavy bleeding (soaking a pad in an hour), fever over 100.4°F, severe headache or vision changes, chest pain, thoughts of harming yourself or your baby, or leg pain/swelling.",
      },
    ],
    articles: [
      { title: "The Fourth Trimester: Your Body After Birth", summary: "Understanding the physical changes, healing process, and what no one tells you about postpartum recovery." },
      { title: "Sleep Deprivation and New Parenthood", summary: "Strategies for managing sleep loss and knowing when fatigue crosses into something more serious." },
    ],
    videos: [
      { title: "Real Talk: Postpartum Recovery Timelines", duration: "18:20" },
    ],
  },
  {
    id: "mental-health",
    title: "Mental Health",
    icon: Brain,
    description: "Perinatal mood disorders, coping strategies, and when to seek help.",
    qna: [
      {
        question: "What's the difference between 'baby blues' and postpartum depression?",
        answer:
          "Baby blues affect up to 80% of new mothers and typically resolve within 2 weeks. Postpartum depression is more severe, lasts longer, and may include feelings of hopelessness, inability to care for your baby, or thoughts of self-harm. If symptoms persist beyond 2 weeks, talk to your provider.",
      },
      {
        question: "Can partners experience postpartum depression?",
        answer:
          "Yes. Research shows that up to 10% of new fathers and non-birthing partners experience PPD. It's important that all new parents monitor their mental health and seek support when needed.",
      },
    ],
    articles: [
      { title: "Prenatal Anxiety: More Common Than You Think", summary: "Why pregnancy anxiety is underdiagnosed and what you can do about it." },
      { title: "Building Your Postpartum Support Plan", summary: "A practical guide to assembling your support network before the baby arrives." },
    ],
    videos: [
      { title: "Therapist Talks: Recognizing Perinatal Mood Disorders", duration: "21:00" },
      { title: "Partner's Guide to Supporting Mental Health", duration: "12:15" },
    ],
  },
  {
    id: "obgyn-tips",
    title: "OB-GYN Tips",
    icon: Stethoscope,
    description: "Practical advice directly from obstetricians and gynecologists.",
    qna: [
      {
        question: "How do I find the right OB-GYN for me?",
        answer:
          "Consider factors like: board certification, hospital affiliation, communication style, and whether they support your birth preferences. Don't be afraid to interview multiple providers — you deserve to feel comfortable and heard.",
      },
      {
        question: "What questions should I ask at my prenatal appointments?",
        answer:
          "Key questions include: What tests are recommended at this stage? What symptoms should I watch for? How can I reach you in an emergency? Are there any restrictions on my activities? What are my options for pain management during labor?",
      },
    ],
    articles: [
      { title: "Your Rights as a Patient During Labor and Delivery", summary: "Understanding informed consent, the right to refuse procedures, and advocating for your birth plan." },
    ],
    videos: [
      { title: "5 Things Your OB-GYN Wants You to Know", duration: "10:30" },
    ],
  },
  {
    id: "nutrition",
    title: "Lactation & Nutrition",
    icon: Apple,
    description: "Feeding your baby and fueling your own recovery.",
    qna: [
      {
        question: "Is it normal for breastfeeding to hurt?",
        answer:
          "Initial tenderness is common, but persistent pain is not normal and usually indicates a latch issue. A certified lactation consultant can help identify and correct problems. Don't suffer in silence — support is available.",
      },
      {
        question: "What should I eat while breastfeeding?",
        answer:
          "Focus on a balanced diet with extra calories (about 500 more per day). Stay hydrated, include protein-rich foods, healthy fats, and continue taking prenatal vitamins. Most foods are safe — true dietary restrictions for breastfeeding are rare.",
      },
    ],
    articles: [
      { title: "Fed Is Best: Navigating the Feeding Choice", summary: "Understanding all feeding options and making the choice that's right for your family without guilt." },
    ],
    videos: [
      { title: "Lactation Consultant: Getting the Latch Right", duration: "16:00" },
    ],
  },
  {
    id: "healthcare-system",
    title: "Navigating the Healthcare System",
    icon: Building2,
    description: "Insurance, patient rights, and making the system work for you.",
    qna: [
      {
        question: "What does Medicaid cover for pregnant women?",
        answer:
          "Medicaid for pregnant women typically covers prenatal visits, lab tests, ultrasounds, delivery, and 60 days of postpartum care. Many states have expanded coverage to 12 months postpartum. Check your state's specific benefits.",
      },
      {
        question: "How do I advocate for myself in medical settings?",
        answer:
          "Bring a written list of questions, bring a support person, ask providers to explain medical terminology, request time to consider options before consenting, and don't hesitate to ask for a second opinion.",
      },
    ],
    articles: [
      { title: "Understanding Your Insurance Coverage for Maternity Care", summary: "A breakdown of what most insurance plans cover and how to handle denied claims." },
      { title: "Your Rights During Hospitalization", summary: "What you're entitled to during labor, delivery, and postpartum hospital stays." },
    ],
    videos: [
      { title: "Patient Advocate: Know Your Rights", duration: "13:45" },
    ],
  },
];

const ProfessionalAdvicePage = () => {
  const [openSection, setOpenSection] = useState<string | null>("pregnancy");
  const [openQnA, setOpenQnA] = useState<Record<string, number | null>>({});

  const toggleQnA = (sectionId: string, index: number) => {
    setOpenQnA((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] === index ? null : index,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-5"
          >
            Professional <span className="text-primary">Advice</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Expert guidance from healthcare professionals — organized, accessible, and evidence-based.
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3" style={{ scrollbarWidth: "none" }}>
            {subcategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setOpenSection(openSection === cat.id ? null : cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  openSection === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                <cat.icon size={16} />
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          {subcategories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={false}
              animate={{
                height: openSection === cat.id ? "auto" : 0,
                opacity: openSection === cat.id ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              {openSection === cat.id && (
                <div className="pb-12">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <cat.icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {cat.title}
                      </h2>
                      <p className="text-muted-foreground">{cat.description}</p>
                    </div>
                  </div>

                  {/* Q&A Accordion */}
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Stethoscope size={18} className="text-primary" />
                      Professional Q&A
                    </h3>
                    <div className="space-y-3">
                      {cat.qna.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-card border border-border rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() => toggleQnA(cat.id, idx)}
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                          >
                            <span className="font-semibold text-foreground pr-4">
                              {item.question}
                            </span>
                            {openQnA[cat.id] === idx ? (
                              <ChevronUp size={18} className="text-primary shrink-0" />
                            ) : (
                              <ChevronDown size={18} className="text-muted-foreground shrink-0" />
                            )}
                          </button>
                          {openQnA[cat.id] === idx && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="px-5 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4"
                            >
                              {item.answer}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Articles */}
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <FileText size={18} className="text-primary" />
                      Educational Articles
                    </h3>
                    <div className="grid gap-4">
                      {cat.articles.map((article, idx) => (
                        <div
                          key={idx}
                          className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer group"
                        >
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                            {article.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {article.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Videos */}
                  {cat.videos.length > 0 && (
                    <div className="mb-10">
                      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Play size={18} className="text-primary" />
                        Expert Video Interviews
                      </h3>
                      <div className="grid gap-4">
                        {cat.videos.map((video, idx) => (
                          <div
                            key={idx}
                            className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Play size={16} className="text-primary ml-0.5" />
                              </div>
                              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {video.title}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {video.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Download placeholder */}
                  <div className="bg-secondary rounded-2xl p-6 flex items-center gap-4">
                    <Download size={24} className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Downloadable Guide: {cat.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        A comprehensive checklist and resource guide — coming
                        soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default ProfessionalAdvicePage;
