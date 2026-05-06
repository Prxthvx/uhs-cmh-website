import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Heart,
  Shield,
  Smartphone,
  ExternalLink,
  AlertTriangle,
  Search,
  FileText,
  ArrowRight,
  Bus,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const emergencyHotlines = [
  {
    name: "Postpartum Support International Helpline",
    number: "1-800-944-4773",
    text: "Text 503-894-9453",
    description: "Support for perinatal mood and anxiety disorders. Available in English and Spanish.",
    url: "https://www.postpartum.net/",
  },
  {
    name: "National Maternal Mental Health Hotline",
    number: "1-833-943-5746",
    text: null,
    description: "Free, confidential hotline for pregnant and new mothers. 24/7, multilingual.",
    url: "https://mchb.hrsa.gov/national-maternal-mental-health-hotline",
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    number: "988",
    text: "Text 988",
    description: "If you are in crisis or having thoughts of hurting yourself or your baby, call or text immediately.",
    url: "https://988lifeline.org/",
  },
  {
    name: "SAMHSA National Helpline",
    number: "1-800-662-4357",
    text: null,
    description: "Free referrals and information for substance use and mental health disorders. 24/7, 365 days.",
    url: "https://www.samhsa.gov/find-help/national-helpline",
  },
];

const organizations = [
  {
    name: "March of Dimes",
    description: "Leading the fight for the health of all moms and babies through research, education, and advocacy.",
    url: "https://www.marchofdimes.org/",
    category: "National",
  },
  {
    name: "Black Mamas Matter Alliance",
    description: "Centering Black mamas to advocate for Black maternal health, rights, and justice.",
    url: "https://blackmamasmatter.org/",
    category: "Advocacy",
  },
  {
    name: "Postpartum Support International",
    description: "Providing direct peer support, professional training, and resources for perinatal mental health.",
    url: "https://www.postpartum.net/",
    category: "Mental Health",
  },
  {
    name: "La Leche League International",
    description: "Mother-to-mother breastfeeding support, encouragement, and education.",
    url: "https://www.llli.org/",
    category: "Breastfeeding",
  },
  {
    name: "National Birth Equity Collaborative",
    description: "Creating solutions that optimize Black maternal and infant health through training, research, and community engagement.",
    url: "https://birthequity.org/",
    category: "Equity",
  },
  {
    name: "Every Mother Counts",
    description: "Making pregnancy and childbirth safe for every mother through investment, advocacy, and education.",
    url: "https://everymothercounts.org/",
    category: "Global",
  },
];

const advocacyTips = [
  {
    title: "Write Down Your Questions",
    description: "Before every appointment, list your questions and concerns. You're less likely to forget them when they're written down.",
  },
  {
    title: "Bring a Support Person",
    description: "Having someone with you can help you remember what was discussed and advocate on your behalf if needed.",
  },
  {
    title: "Ask for Clarification",
    description: "If something isn't clear, ask your provider to explain in plain language. You have the right to understand your care.",
  },
  {
    title: "Request a Second Opinion",
    description: "If you're unsure about a diagnosis or treatment plan, seeking another perspective is always your right.",
  },
  {
    title: "Document Everything",
    description: "Keep records of your symptoms, medications, and conversations with providers. This creates a paper trail if issues arise.",
  },
  {
    title: "Know Your Rights",
    description: "You have the right to informed consent, to refuse treatment, and to access your medical records. Learn and exercise these rights.",
  },
];

const appRecommendations = [
  {
    name: "Ovia Pregnancy Tracker",
    description: "Week-by-week fetal development, symptom logging, kick counter, and appointment reminders — published by Labcorp.",
    category: "Pregnancy Tracking",
    url: "https://www.oviahealth.com/",
    ios: "https://apps.apple.com/us/app/ovia-pregnancy-tracker/id719891428",
    android: "https://play.google.com/store/apps/details?id=com.ovuline.pregnancy",
  },
  {
    name: "What to Expect",
    description: "Week-by-week pregnancy guide with expert-reviewed content, birth club forums, and a newborn tracker.",
    category: "Pregnancy Guide",
    url: "https://www.whattoexpect.com/apps/",
    ios: "https://apps.apple.com/us/app/what-to-expect-pregnancy/id527065063",
    android: "https://play.google.com/store/apps/details?id=com.whattoexpect.android",
  },
  {
    name: "Peanut",
    description: "A social network for mothers — find local moms, share experiences, and get peer support through pregnancy and beyond.",
    category: "Community",
    url: "https://www.peanut-app.io/",
    ios: "https://apps.apple.com/us/app/peanut-meet-moms-mom-friends/id1066328832",
    android: "https://play.google.com/store/apps/details?id=io.peanut.android",
  },
  {
    name: "Headspace",
    description: "Guided meditation and mindfulness sessions specifically designed for pregnancy anxiety, stress, and sleep disruption.",
    category: "Mental Health",
    url: "https://www.headspace.com/",
    ios: "https://apps.apple.com/us/app/headspace-sleep-meditation/id493145008",
    android: "https://play.google.com/store/apps/details?id=com.getsomeheadspace.android",
  },
  {
    name: "Calm",
    description: "Sleep stories, breathing exercises, and relaxation tools designed to reduce anxiety for pregnant women and new parents.",
    category: "Wellness",
    url: "https://www.calm.com/",
    ios: "https://apps.apple.com/us/app/calm/id571800810",
    android: "https://play.google.com/store/apps/details?id=com.calm.android",
  },
  {
    name: "Full Term",
    description: "A simple, clear contraction timer to track frequency and duration during early labor — know exactly when to call your provider.",
    category: "Labor Tool",
    url: "https://www.fulltermapp.com/",
    ios: "https://apps.apple.com/us/app/full-term-contraction-timer/id489590629",
    android: null,
  },
];

const SupportResourcesPage = () => {
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
            Support & <span className="text-primary">Resources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            A comprehensive, action-focused hub for help and information. You
            don't have to navigate this alone.
          </motion.p>
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section className="py-14 md:py-20 bg-destructive/5">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="text-destructive" size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Emergency & Immediate Support
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {emergencyHotlines.map((hotline, i) => (
              <motion.a
                key={i}
                href={hotline.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {hotline.name}
                </h3>
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full">
                    <Phone size={14} />
                    {hotline.number}
                  </span>
                  {hotline.text && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-muted-foreground text-sm font-medium rounded-full">
                      {hotline.text}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hotline.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Directory */}
      <section className="py-14 md:py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="text-primary" size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Support Organizations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {organizations.map((org, i) => (
              <motion.a
                key={i}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow group flex flex-col"
              >
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">
                  {org.category}
                </span>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {org.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {org.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
                  Visit Website <ExternalLink size={11} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Advocacy Tips */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="text-primary" size={20} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Self-Advocacy in Medical Settings
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Practical tips for making sure your voice is heard.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advocacyTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {tip.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Healthcare Rights */}
      <section className="py-14 md:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="text-primary" size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Insurance & Healthcare Rights
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Medicaid Coverage for Pregnant Women
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Medicaid provides coverage for prenatal care, labor and delivery,
                and postpartum care. Many states have expanded coverage to 12
                months postpartum under the American Rescue Plan. Contact your
                state's Medicaid office or visit{" "}
                <a
                  href="https://www.medicaid.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Medicaid.gov
                </a>{" "}
                to check eligibility.
              </p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                The Affordable Care Act & Maternity Care
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Under the ACA, maternity and newborn care is one of the ten
                essential health benefits. This means most marketplace plans must
                cover prenatal visits, labor, delivery, and postpartum care
                without charging a copay for preventive services.
              </p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Your Right to Informed Consent
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You have the right to receive clear information about any
                procedure, its risks and benefits, and alternatives before
                consenting. This applies to all stages of care, including during
                labor and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Recommendations */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Smartphone className="text-primary" size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Recommended Apps & Tools
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {appRecommendations.map((app, i) => (
              <motion.a
                key={i}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 flex flex-col hover:shadow-md hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Smartphone size={20} className="text-primary" />
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  {app.category}
                </span>
                <h4 className="font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                  {app.name}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {app.description}
                </p>
                <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-primary">
                  Visit website <ExternalLink size={11} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity Logistics */}
      <section className="py-14 md:py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="text-primary" size={20} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Maternity Logistics
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Insurance, leave, and transportation — the practical side of pregnancy.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Insurance & Maternity Leave */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-7 space-y-4"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Insurance, Coverage & Maternity Leave</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contact your insurer early to understand the difference between preventive prenatal care coverages and hospital delivery fees. Adding a newborn to your plan is typically required within <strong>30–60 days of birth</strong> depending on your insurer — missing this window can leave your baby uninsured. Confirm your plan's exact deadline before your due date.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The <strong>Family and Medical Leave Act (FMLA)</strong> protects your job for up to 12 unpaid weeks. Check whether your state offers paid family leave or short-term disability. File FMLA paperwork early in your third trimester to avoid last-minute stress.
              </p>
              <a
                href="https://www.dol.gov/agencies/whd/fmla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Learn about FMLA <ExternalLink size={13} />
              </a>
            </motion.div>

            {/* Transportation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-7 space-y-4"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Bus size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Transportation & Appointment Planning</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A low-risk pregnancy typically involves around <strong>15 clinical visits</strong>. Batching blood draws directly after standard appointments can minimize disruption to your schedule.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                UHS CMH offers a dedicated <strong>Maternity Transit shuttle</strong> synchronized with Chenango Memorial Hospital routes. Routes run regularly and the fare is just $1 — so you never have to worry about missing an appointment due to transportation.
              </p>
              <a
                href="/transportation"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                View shuttle schedules <ArrowRight size={13} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Need more help CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <Heart className="text-primary mx-auto mb-4" size={32} />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Reach out to us directly and we'll help connect you with the
            right resources. You are not alone.
          </p>
          <Button size="lg" className="gap-2 px-8" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default SupportResourcesPage;
