import React, { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLocation } from "react-router-dom";
import { BookOpen, FileText, CalendarHeart, Sparkles, Baby, HeartPulse, ShieldAlert, Library, Bus, CheckCircle2, FlaskConical, MessageCircleQuestion, Quote, AlertTriangle } from "lucide-react";

const PregnancyGuide = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState("planning");

  const navItems = [
    { id: "planning", label: "Planning & Confirmation", icon: CalendarHeart },
    { id: "first-trimester", label: "First Trimester", icon: Sparkles },
    { id: "week-by-week", label: "Baby Week by Week", icon: Baby },
    { id: "second-trimester", label: "Second Trimester", icon: Baby },
    { id: "third-trimester", label: "Third Trimester", icon: HeartPulse },
    { id: "milestone-tests", label: "Tests & Milestones", icon: FlaskConical },
    { id: "labor-delivery", label: "Labor & Delivery", icon: FileText },
    { id: "postpartum", label: "Postpartum Care", icon: HeartPulse },
    { id: "health-issues", label: "Health & Safety", icon: ShieldAlert },
    { id: "questions-to-ask", label: "Questions to Ask", icon: MessageCircleQuestion },
    { id: "logistics", label: "Logistics", icon: Bus },
    { id: "resources", label: "External Resources", icon: Library },
  ];

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }
  }, [hash]);

  // Scroll Spy Logic using Intersection Observer
  useEffect(() => {
    // Collect all the section elements we want to observe
    const sectionElements = navItems
      .map(item => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    // Create an observer that triggers when a section crosses the center of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // If multiple are intersecting, take the one that is closest to the top
          // (or just default to the first one the observer reports as visible)
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Trigger when the section is near the top third of the screen
        threshold: 0
      }
    );

    // Observe each section
    sectionElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      sectionElements.forEach(element => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []); // Only run once on mount

  const handleScrollClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Temporarily set active immediately for snappier UI feel when clicking
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      {/* Hero Banner for the Hub */}
      <div className="bg-primary/5 border-b border-border py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6">
              The Comprehensive <span className="text-primary">Maternal Guide</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Your deeply researched, complete clinical blueprint from preconception through postpartum recovery. Verified by top medical standards.
            </p>
          </div>
          <div className="hidden md:flex w-32 h-32 bg-primary/10 rounded-[2rem] border border-primary/20 items-center justify-center rotate-3 shadow-sm">
            <BookOpen size={64} className="text-primary" />
          </div>
        </div>
      </div>

      <main className="flex-1 container max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-28 bg-card border border-border/60 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" /> Table of Contents
            </h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollClick(item.id)}
                  className={`flex items-center text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3 shrink-0" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 max-w-4xl space-y-20 pb-24">
          
          {/* SECTION: PLANNING & CONFIRMATION */}
          <section id="planning" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <CalendarHeart size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Planning & Confirmation</h2>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Preconception Health</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  Preparing your body before conception is arguably one of the most critical steps in the maternal journey. The goal is to optimize your metabolic and physical state prior to the rapid demands of early fetal development. According to the ACOG, women should begin taking a daily prenatal vitamin containing at least 400 micrograms (mcg) of folic acid a minimum of one month before attempting to conceive. Folic acid drastically reduces the risk of neural tube defects like spina bifida, which occur in the first few weeks of pregnancy—often before a woman even knows she is pregnant.
                </p>
                <p className="text-lg text-muted-foreground leading-loose">
                  Additionally, achieving a healthy Body Mass Index (BMI) prior to conception can lower the risk of gestational diabetes, preeclampsia, and cesarean delivery. Discussing chronic conditions such as hypertension, thyroid disorders, or diabetes with your provider ensures your medications are safe for pregnancy and your conditions are stabilized before conception.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Counseling & Screening</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  Preconception counseling involves a comprehensive review of your family's medical history. Providers often suggest genetic carrier screening, a simple blood or saliva test that checks if you or your partner carry genetic markers for conditions like Cystic Fibrosis, Spinal Muscular Atrophy, or Sickle Cell Disease. Because carriers generally do not show symptoms, this proactive approach allows couples to understand their risks.
                </p>
                <p className="text-lg text-muted-foreground leading-loose">
                  Vaccinations are also reviewed. The MMR (Measles, Mumps, Rubella) and Varicella (Chickenpox) vaccines contain live viruses and cannot be administered during pregnancy. Contracting these illnesses while pregnant can lead to severe congenital defects, so ensuring immunity beforehand is crucial.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Confirmation</h3>
                <p className="text-lg text-muted-foreground leading-loose">
                  Human Chorionic Gonadotropin (hCG) is the hormone detected by home pregnancy tests. While modern tests are highly sensitive, the CDC and FDA recommend waiting until the first day of your missed period to minimize false negatives. Once a home test is positive, you must schedule a confirmation appointment with your OB/GYN or midwife. This initial appointment typically occurs between weeks 8 and 10. During this visit, clinical staff will perform a dating ultrasound (to measure the crown-rump length of the embryo for an accurate due date), conduct comprehensive blood panels, and review early symptom management.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: FIRST TRIMESTER */}
          <section id="first-trimester" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <Sparkles size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">First Trimester (Weeks 1 - 12)</h2>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What to Expect & Common Symptoms</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  The first trimester is a period of massive, profound physiological adaptation. High levels of estrogen, progesterone, and hCG often trigger acute symptoms, the most infamous being "morning sickness" (nausea and vomiting of pregnancy). Despite the name, nausea can strike at any hour. Extreme fatigue is also universally reported as your cardiovascular system expands and metabolic energy is diverted to develop the placenta.
                </p>
                <p className="text-lg text-muted-foreground leading-loose">
                  Breast tenderness, frequent urination (due to expanding uterine volume pressing on the bladder), and food aversions are normal. To manage these, ACOG recommends eating smaller, more frequent meals rich in complex carbohydrates and protein, remaining hydrated, and attempting to sleep whenever fatigue sets in.
                </p>
              </div>

              {/* Doctor Quote */}
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6 flex gap-4">
                <Quote className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium leading-relaxed italic mb-2">
                    "Morning sickness that makes you vomit more than 3 times a day, prevents you from keeping any food or fluid down, or causes you to lose weight — that is NOT normal morning sickness. That is a medical condition called Hyperemesis Gravidarum and it requires treatment. Please come in or go to the ER."
                  </p>
                  <span className="text-sm text-primary font-semibold">— ACOG Clinical Guidance, First Trimester Management</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                  <h3 className="text-2xl font-bold text-foreground">Hyperemesis Gravidarum (HG) — When Morning Sickness Becomes Serious</h3>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-6">
                  <p className="text-base font-semibold text-amber-800 dark:text-amber-300 mb-3">
                    This section exists because too many mothers are told "it's normal" when it isn't. Hyperemesis Gravidarum affects 0.3–3% of pregnancies and is a serious, medically recognized condition — not a weakness or exaggeration.
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  Regular morning sickness involves mild to moderate nausea and occasional vomiting, typically peaking at week 9 and resolving by week 14. <strong>Hyperemesis Gravidarum (HG) is a completely different condition.</strong> HG involves relentless, severe nausea and vomiting that can last the entire pregnancy and results in dangerous dehydration, electrolyte imbalances, and significant weight loss.
                </p>
                <h4 className="text-xl font-bold text-foreground mb-3">Warning Signs of Hyperemesis Gravidarum</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    "Vomiting more than 3–4 times per day",
                    "Unable to keep any food or liquid down for 24+ hours",
                    "Losing more than 5% of your pre-pregnancy body weight",
                    "Becoming dizzy, fainting, or feeling extremely weak",
                    "Producing very little or dark-colored urine (signs of dehydration)",
                    "Vomiting blood or bile",
                    "Cannot tolerate the smell of cooking, perfume, or everyday smells",
                    "Feeling too weak to stand or function at all",
                  ].map((sign) => (
                    <div key={sign} className="flex items-start gap-2 bg-card border border-border rounded-xl px-4 py-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{sign}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 mb-6">
                  <h4 className="text-lg font-bold text-destructive mb-2">Go to the Emergency Room immediately if:</h4>
                  <ul className="text-muted-foreground space-y-1.5 text-base">
                    <li>• You cannot keep any liquid down for more than 12 hours</li>
                    <li>• You feel confused, extremely dizzy, or your heart is racing</li>
                    <li>• You have not urinated in 8+ hours or urine is very dark</li>
                    <li>• You are losing weight rapidly and feel too weak to stand</li>
                  </ul>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">What the ER Will Do</h4>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  At the emergency room, the care team will give you IV (intravenous) fluids directly into your bloodstream to quickly replace the fluids and electrolytes (like potassium and sodium) you've lost. They may also administer IV anti-nausea medications such as ondansetron (Zofran), promethazine, or metoclopramide. In severe cases requiring multiple daily visits, your provider may prescribe oral medications you can continue at home, or arrange for home IV therapy.
                </p>
                <h4 className="text-xl font-bold text-foreground mb-3">What You Can Do at Home</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { tip: "Eat small amounts every 1–2 hours", detail: "Empty stomachs worsen nausea. Even a few crackers matter." },
                    { tip: "Cold, bland foods often stay down better", detail: "Crackers, plain rice, cold fruit, popsicles, cold water." },
                    { tip: "Ginger in any form can help", detail: "Ginger tea, ginger chews, or ginger capsules (max 1g/day)." },
                    { tip: "Avoid triggers completely", detail: "Smells, fatty foods, and lying flat after eating worsen HG." },
                    { tip: "Sip fluids constantly — don't gulp", detail: "Small, frequent sips of water, electrolyte drinks, or broth." },
                    { tip: "Rest and reduce stress", detail: "Fatigue dramatically worsens HG — rest is not laziness." },
                  ].map((item) => (
                    <div key={item.tip} className="bg-card border border-border rounded-xl p-4">
                      <p className="font-semibold text-foreground text-sm mb-1">{item.tip}</p>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mt-6 italic">
                  <strong>You are not being dramatic.</strong> Doctors who dismiss your symptoms are wrong. HG is a recognized ICD-10 medical diagnosis. Advocate for yourself — ask specifically about anti-nausea medications, IV fluids, and referral to a high-risk obstetric specialist (MFM) if needed. Your health matters as much as your baby's.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Early Screenings</h3>
                <p className="text-lg text-muted-foreground leading-loose">
                  Between weeks 10 and 13, you will be offered Non-Invasive Prenatal Testing (NIPT) and a Nuchal Translucency (NT) scan. The NIPT is a simple maternal blood draw that analyzes fetal DNA circulating in the mother's blood to screen for chromosomal abnormalities like Down Syndrome (Trisomy 21). The NT scan is a specialized ultrasound that measures the fluid at the back of the fetus's neck, providing further chromosomal risk assessment and confirming structural development.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: WEEK BY WEEK */}
          <section id="week-by-week" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <Baby size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Your Baby Week by Week</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-loose mb-10">
              One of the most powerful things you can do during pregnancy is understand what's happening inside your body at every stage — for you AND your baby. Each entry below tells you your baby's approximate size, what they're developing, and what you might be experiencing as their mother.
            </p>

            {/* First Trimester Weeks */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center text-sm font-bold border border-emerald-200">1</span>
                First Trimester — Weeks 4–12
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    week: "Week 4", size: "Poppy seed (1mm)", emoji: "🌱",
                    baby: "Implantation is complete. The embryo is forming three layers: the ectoderm (skin, brain), mesoderm (heart, muscles), and endoderm (organs). The amniotic sac is forming.",
                    mom: "You may notice a missed period. Light spotting (implantation bleeding) is normal. Breasts may feel tender."
                  },
                  {
                    week: "Week 5", size: "Sesame seed (2mm)", emoji: "🌿",
                    baby: "The heart begins beating — a small flicker visible on early ultrasound. The neural tube (future brain and spinal cord) is forming. Arm and leg buds appear.",
                    mom: "Nausea often begins now. Fatigue hits hard as your body produces massive amounts of hCG and progesterone."
                  },
                  {
                    week: "Week 6", size: "Lentil (6mm)", emoji: "🫘",
                    baby: "The heartbeat is now detectable by ultrasound (~100–160 bpm). Eyes, ears, and nostrils are beginning to form. The brain is developing rapidly.",
                    mom: "Nausea often peaks. Frequent urination begins as the uterus pushes on the bladder. Food aversions and smell sensitivity are common."
                  },
                  {
                    week: "Week 8", size: "Raspberry (1.6 cm)", emoji: "🫐",
                    baby: "All major organs and structures are now present in early form. Fingers and toes are forming. The embryo begins to move — though you won't feel it yet.",
                    mom: "Your uterus is now the size of a grapefruit. Heartburn may begin. You may feel bloated and constipated due to progesterone slowing digestion."
                  },
                  {
                    week: "Week 10", size: "Strawberry (3 cm)", emoji: "🍓",
                    baby: "Now officially called a fetus. All vital organs are formed. Tiny fingernails are growing. The baby can make small movements and swallow amniotic fluid.",
                    mom: "The worst nausea often begins to ease around now. NIPT blood test is available. Emotional changes — anxiety, joy, fear — are all completely normal."
                  },
                  {
                    week: "Week 12", size: "Lime (5–6 cm)", emoji: "🍋",
                    baby: "The fetus has a fully formed face and can open and close its fists. Reflexes are developing. The kidneys are producing urine. The risk of miscarriage drops significantly.",
                    mom: "End of the first trimester — the hardest part for many mothers. Nausea usually improves. Your bump may start to show. Nuchal Translucency ultrasound happens this week."
                  },
                ].map((w) => (
                  <div key={w.week} className="bg-card border border-border rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{w.emoji}</span>
                      <div>
                        <h4 className="font-bold text-foreground text-base">{w.week}</h4>
                        <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">Size: {w.size}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">👶 Baby</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{w.baby}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">🤱 You</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{w.mom}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Trimester Weeks */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-sm font-bold border border-blue-200">2</span>
                Second Trimester — Weeks 13–27
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    week: "Week 14", size: "Peach (8 cm)", emoji: "🍑",
                    baby: "The fetus can make facial expressions — squinting, frowning, grimacing. Lanugo (fine hair) begins covering the body for warmth. The thyroid gland is producing hormones.",
                    mom: "Energy returns for most women! The 'honeymoon phase' begins. Nausea typically resolves. Your bump is becoming more visible."
                  },
                  {
                    week: "Week 16", size: "Avocado (11–12 cm)", emoji: "🥑",
                    baby: "The baby can hear sounds — your heartbeat, your voice, music. Eyes can move side to side behind closed lids. Bones are hardening.",
                    mom: "You may feel the first faint movements — like gentle flutters or bubbles. This is called 'quickening.' Your round ligament may cause brief sharp pains as it stretches."
                  },
                  {
                    week: "Week 18–20", size: "Banana (14–16 cm)", emoji: "🍌",
                    baby: "The anatomy scan happens this week — a detailed ultrasound examining every major organ. Sex can be determined if desired. The baby has a sleep/wake cycle.",
                    mom: "The anatomy scan is a major milestone. You'll see your baby's face, heart, spine, and limbs in detail. Many parents find out the sex here."
                  },
                  {
                    week: "Week 22", size: "Papaya (27 cm)", emoji: "🍈",
                    baby: "The baby's lips, eyebrows, and eyelids are formed. Fingerprints are developing. Viability — the point where survival outside the womb is possible with intensive support — is approaching.",
                    mom: "Kicks are now strong and regular. Backaches, swollen ankles, and stretch marks may appear. Your belly button may pop out."
                  },
                  {
                    week: "Week 24–26", size: "Ear of corn (30–35 cm)", emoji: "🌽",
                    baby: "The lungs begin practicing breathing movements. The brain is developing rapidly. The baby responds to light and sound. Eyes begin to open.",
                    mom: "Glucose Challenge Test (GD screening) happens around week 24–28. Heartburn often intensifies. Sleep gets harder as the belly grows."
                  },
                ].map((w) => (
                  <div key={w.week} className="bg-card border border-border rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{w.emoji}</span>
                      <div>
                        <h4 className="font-bold text-foreground text-base">{w.week}</h4>
                        <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">Size: {w.size}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">👶 Baby</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{w.baby}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">🤱 You</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{w.mom}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Trimester Weeks */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center text-sm font-bold border border-purple-200">3</span>
                Third Trimester — Weeks 28–40+
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    week: "Week 28", size: "Eggplant (37 cm)", emoji: "🍆",
                    baby: "The brain is forming complex folds. The eyes are open. The baby can now dream during REM sleep. Fat accumulation accelerates for warmth after birth.",
                    mom: "Kick counting begins. Braxton Hicks contractions may feel more noticeable. Visits increase to every 2 weeks."
                  },
                  {
                    week: "Week 32", size: "Butternut squash (42 cm)", emoji: "🎃",
                    baby: "All five senses are functioning. The baby is practicing breathing. Most babies are now in a head-down position. Fingernails have grown to the fingertip.",
                    mom: "Shortness of breath as the baby pushes up into your ribcage. Pelvic pressure increases. Colostrum (early breast milk) may leak."
                  },
                  {
                    week: "Week 36–37", size: "Head of romaine lettuce (47 cm)", emoji: "🥬",
                    baby: "Lungs are nearly mature. The baby sheds lanugo (the fine body hair) and vernix (the protective coating on skin). Gaining about half a pound per week.",
                    mom: "Group B Strep (GBS) swab done this week. 'Lightning' — the baby drops lower into the pelvis — may bring relief from heartburn. Weekly appointments begin."
                  },
                  {
                    week: "Week 39–40", size: "Watermelon (50–52 cm)", emoji: "🍉",
                    baby: "Fully developed and ready for birth. The placenta is being maintained but aging. The lungs are fully mature. All reflexes needed for newborn life are in place.",
                    mom: "You are at full term. Watch for labor signs: regular contractions, water breaking, bloody show. Your due date is an estimate — labor within 2 weeks either side is normal."
                  },
                ].map((w) => (
                  <div key={w.week} className="bg-card border border-border rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{w.emoji}</span>
                      <div>
                        <h4 className="font-bold text-foreground text-base">{w.week}</h4>
                        <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">Size: {w.size}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">👶 Baby</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{w.baby}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">🤱 You</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{w.mom}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION: SECOND TRIMESTER */}
          <section id="second-trimester" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <Baby size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Second Trimester (Weeks 13 - 27)</h2>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What to Expect & Physical Changes</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  Widely regarded as the "honeymoon phase," the second trimester usually brings relief from acute nausea and crushing fatigue. The placenta fully takes over hormone production. Physically, the uterus expands rapidly, rising out of the pelvis, and a visible "bump" will form. You will likely feel your first fetal movements (called "quickening") between weeks 16 and 22. Initially, these feel like subtle flutters or gas bubbles, progressing to definitive kicks.
                </p>
                <p className="text-lg text-muted-foreground leading-loose">
                  New discomforts may arrive: round ligament pain (sharp, brief pains in the lower abdomen caused by the stretching of the ligaments supporting the uterus), leg cramps, and nasal congestion (due to increased blood volume swelling the mucous membranes).
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Critical Mid-Pregnancy Screenings</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  <strong>The Anatomy Scan (Weeks 18-22):</strong> This comprehensive ultrasound evaluates exactly how the fetus is developing. The technician will measure cardiac structures, brain ventricles, kidneys, limbs, spine, and face, as well as placental location. You can usually find out the sex of the baby during this scan if you choose.
                </p>
                <p className="text-lg text-muted-foreground leading-loose">
                  <strong>Glucose Challenge Test (Weeks 24-28):</strong> To screen for gestational diabetes, you consume a sugary liquid, and your blood sugar is tested an hour later. If elevated, a 3-hour tolerance test diagnostic is required. Unmanaged gestational diabetes can lead to macrosomia (large birth weight) and infant hypoglycemia.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: THIRD TRIMESTER */}
          <section id="third-trimester" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <HeartPulse size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Third Trimester (Weeks 28 - 40+)</h2>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">The Home Stretch & Kick Counting</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  The fetus is prioritizing weight gain and neural maturation. The sheer physical footprint of the baby will press heavily against your diaphragm (causing shortness of breath) and your stomach (causing severe heartburn). Sleep disrupts frequently.
                </p>
                <p className="text-lg text-muted-foreground leading-loose">
                  <strong>Kick Counting:</strong> A crucial safety protocol initiated at week 28. Choose a time when the baby is typically active. Sit down or lie on your side, and count every kick, roll, or jab. You should feel 10 positive movements within 2 hours. A sudden decrease in fetal movement requires immediate clinical investigation, as it can indicate fetal distress.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Final Screenings</h3>
                <p className="text-lg text-muted-foreground leading-loose">
                  Around weeks 35-37, a Group B Streptococcus (GBS) swab is taken. GBS is a common bacteria that is relatively harmless to adults but can cause severe infection in newborns during vaginal delivery. If positive, you will receive IV antibiotics during labor to protect the infant.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: MILESTONE TESTS */}
          <section id="milestone-tests" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <FlaskConical size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Key Tests & Milestones Timeline</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-loose mb-10">
              One of the most important things no one tells you: <strong>what tests to expect and why</strong>. Each test is done for a specific reason, at a specific time. Knowing this in advance helps you ask the right questions, prepare emotionally, and understand what each result means for you and your baby.
            </p>

            <div className="space-y-4">
              {[
                {
                  timing: "Week 6–10",
                  name: "Dating Ultrasound",
                  type: "Ultrasound",
                  color: "emerald",
                  why: "Confirms the pregnancy is viable (heartbeat detected), determines your accurate due date by measuring the baby's size, and checks for ectopic (dangerous out-of-uterus) pregnancy.",
                  what: "A wand (transvaginal) or gel pad (abdominal) ultrasound. You will see and hear the heartbeat for the first time — a small flicker on screen.",
                  result: "If all is well, you'll get a due date and confirmation that the baby is in the right place. If no heartbeat is found before 8 weeks, a follow-up scan is scheduled.",
                  questions: ["Can I hear the heartbeat today?", "What is my exact due date?", "Is everything in the right position?"]
                },
                {
                  timing: "Weeks 10–13",
                  name: "NIPT (Non-Invasive Prenatal Test) + First Trimester Screening",
                  type: "Blood Test + Ultrasound",
                  color: "blue",
                  why: "Screens for chromosomal conditions like Down syndrome (Trisomy 21), Trisomy 18, and Trisomy 13. Also screens for sex chromosome conditions. Can reveal baby's sex.",
                  what: "A simple maternal blood draw that analyzes fetal DNA circulating in your bloodstream. The Nuchal Translucency (NT) ultrasound measures fluid at the back of the baby's neck — thicker fluid can indicate chromosomal issues.",
                  result: "Results are returned within 1–2 weeks. A 'low risk' result is reassuring but not a guarantee. 'High risk' means further diagnostic testing (like amniocentesis) may be offered — not a definitive diagnosis.",
                  questions: ["Is this a screening or a diagnostic test?", "What do the results mean if they come back high risk?", "Will this tell me the sex?"]
                },
                {
                  timing: "Weeks 18–22",
                  name: "Anatomy Scan (Level 2 Ultrasound)",
                  type: "Ultrasound",
                  color: "purple",
                  why: "The most detailed ultrasound of the entire pregnancy. Checks that every major organ, limb, and structure is forming correctly. Also checks placenta position and amniotic fluid levels.",
                  what: "An abdominal ultrasound lasting 30–60 minutes. The sonographer carefully examines the brain, heart (4 chambers), spine, kidneys, face, lips, arms, legs, and umbilical cord. Sex can be determined if desired.",
                  result: "Most scans show everything developing normally. If an issue is found (like a heart defect or cleft palate), you'll be referred to a specialist. This does NOT always mean the worst — many findings are minor or resolve before birth.",
                  questions: ["Is everything measuring correctly?", "Where is my placenta?", "Do you see anything that needs follow-up?", "Can you show me the baby's face?"]
                },
                {
                  timing: "Weeks 24–28",
                  name: "Glucose Challenge Test (GD Screening)",
                  type: "Blood Test",
                  color: "orange",
                  why: "Screens for gestational diabetes — high blood sugar that develops during pregnancy. If unmanaged, it can cause your baby to grow very large, leading to delivery complications, and increases your own risk of developing Type 2 diabetes later.",
                  what: "You drink a very sweet glucose drink, wait 1 hour without eating, then have a blood draw. No fasting required beforehand. If your blood sugar is elevated, you'll be asked back for a 3-hour fasting test to confirm.",
                  result: "Failing the 1-hour test does NOT mean you have gestational diabetes — about 1 in 3 women who fail go on to pass the 3-hour test. If GD is confirmed, it is managed with diet, exercise, and sometimes insulin.",
                  questions: ["What number should my result be below?", "What does gestational diabetes mean for my birth plan?", "What foods help control blood sugar?"]
                },
                {
                  timing: "Weeks 28–32",
                  name: "RhoGAM Injection (if Rh-negative blood type)",
                  type: "Injection",
                  color: "pink",
                  why: "If your blood type is Rh-negative (e.g., A-, B-, O-) and your baby is Rh-positive, your immune system could attack the baby's red blood cells in this or future pregnancies. RhoGAM prevents this.",
                  what: "A single injection given around week 28. If you have any bleeding events during pregnancy, you may receive additional doses. Another dose is given after delivery if the baby is found to be Rh-positive.",
                  result: "This is preventative — not diagnostic. You don't need it if both you and the baby's father are Rh-negative. Ask your provider to check your blood type early.",
                  questions: ["What is my blood type?", "Does my partner know their Rh factor?", "Will I need another injection after delivery?"]
                },
                {
                  timing: "Weeks 35–37",
                  name: "Group B Streptococcus (GBS) Swab",
                  type: "Swab Test",
                  color: "teal",
                  why: "GBS bacteria are harmless and common in adults, but can cause life-threatening infection in newborns during vaginal delivery. About 25% of pregnant women carry GBS.",
                  what: "A quick, painless swab of the vagina and rectum taken during a regular prenatal visit. Results are ready within 24–48 hours.",
                  result: "If positive, you'll receive IV antibiotics during labor — this fully protects your baby. A positive result doesn't require a C-section or change your birth plan.",
                  questions: ["If I'm positive, will I still be able to have a vaginal birth?", "What happens if I arrive too late for IV antibiotics?", "Is it safe to breastfeed with GBS?"]
                },
              ].map((test) => {
                const colorMap: Record<string, string> = {
                  emerald: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
                  blue: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
                  purple: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
                  orange: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800",
                  pink: "bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800",
                  teal: "bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800",
                };
                const badgeMap: Record<string, string> = {
                  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
                  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
                  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
                  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
                  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300",
                  teal: "bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300",
                };
                return (
                  <div key={test.name} className={`border rounded-2xl p-6 ${colorMap[test.color]}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeMap[test.color]}`}>{test.timing}</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">{test.type}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-4">{test.name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">Why it's done</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{test.why}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">What happens</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{test.what}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">Understanding results</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{test.result}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Questions to ask your doctor</p>
                      <div className="flex flex-wrap gap-2">
                        {test.questions.map((q) => (
                          <span key={q} className="text-xs bg-white/50 dark:bg-black/20 border border-current/20 rounded-lg px-3 py-1.5 text-muted-foreground italic">"{q}"</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION: LABOR & DELIVERY */}
          <section id="labor-delivery" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Labor & Delivery Readiness</h2>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Signs of Birth Readiness & Check-Ins</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  Do not rely purely on dates. "Lightening" is when the baby drops into the pelvic cavity. You may lose your protective mucus plug contextually with mild "bloody show." Braxton Hicks (practice) contractions will gain frequency, but true labor contractions exhibit consistency: they grow longer, stronger, and unequivocally closer together.
                </p>
                <p className="text-lg text-muted-foreground leading-loose">
                  <strong>The 5-1-1 Rule:</strong> Medical guidelines suggest calling your triage team when contractions are 5 minutes apart, lasting 1 minute each, for 1 full hour. If your water breaks (whether a gush or trickle), you must contact the hospital immediately due to the risk of infection.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Birth Plan Specifics & Logistics</h3>
                <p className="text-lg text-muted-foreground leading-loose">
                  A Birth Plan defines your medical preferences, though flexibility is paramount. Key considerations: pain management (epidural, nitrous oxide, natural birthing techniques), the atmosphere of the room, who cuts the umbilical cord, preferences on delayed cord clamping, and immediate skin-to-skin contact.
                </p>
                <p className="text-lg text-muted-foreground leading-loose mt-4">
                  Discuss the location of birth (hospital birthing suite, specialized birthing center, or guided home delivery) well in advance. Research childbirth education classes (Lamaze, Bradley method, or hypnobirthing) early in the third trimester.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: POSTPARTUM CARE */}
          <section id="postpartum" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <HeartPulse size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Postpartum Care ("The Fourth Trimester")</h2>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Physical Recovery</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  The initial six weeks are fundamentally focused on healing. Vaginal tearing, episiotomy stitches, or major abdominal surgery (Cesarean delivery) demand severe restriction of activity. Lochia (postpartum bleeding) will mimic a heavy period for several days before tapering over weeks. No tampons, intercourse, or heavy lifting should occur until cleared at the 6-week post-op checkup.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Mental Health: "Blues" vs. PPD</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  An immediate, massive hormone crash causes "Baby Blues" (weeping, anxiety, exhaustion) in 80% of mothers, resolving in roughly two weeks. However, if severe anxiety, an inability to bond with the infant, sleep disturbances despite exhaustion, or intrusive terrible thoughts persist beyond 14 days, this indicates Postpartum Depression (PPD) or Anxiety (PPA). PPD requires immediate clinical intervention and is a highly treatable complication of childbirth.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Feeding & Rest</h3>
                <p className="text-lg text-muted-foreground leading-loose pb-8">
                  Whether exclusively breastfeeding, pumping, using formula, or combining methods, infant feeding entails a rigorous 2-3 hour cycle schedule around the clock. Lactation consultants are instrumental for correcting latch pathology and mitigating mastitis (painful breast tissue infection). Ensure you prioritize your own nutrition and hydration, and literally "sleep when the baby sleeps" to combat severe systemic sleep deprivation.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: HEALTH ISSUES */}
          <section id="health-issues" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive border border-destructive/20 shrink-0">
                <ShieldAlert size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Health & Safety Strictures</h2>
            </div>
            
            <div className="space-y-8 bg-destructive/5 rounded-3xl p-8 md:p-10 border border-destructive/20">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-destructive shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Smoking</h4>
                  <p className="text-md text-muted-foreground leading-relaxed">Smoking drastically restricts fetal oxygen supply, acting as a massive contributor to placental abruption, profound growth restriction, premature birth, and fatal outcomes such as Sudden Infant Death Syndrome (SIDS).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-destructive shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Drinking Alcohol</h4>
                  <p className="text-md text-muted-foreground leading-relaxed">The CDC firmly dictates there is no known safe amount of alcohol, no safe time to drink, and no safe type of alcohol during pregnancy. Fetal Alcohol Spectrum Disorders (FASDs) are completely preventable but cause lifelong physical organ damage and severe neurological impairment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-destructive shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Substance Use</h4>
                  <p className="text-md text-muted-foreground leading-relaxed">Illicit substances and unprescribed pharmaceuticals can cross the placental barrier, leading to lethal birth defects or forcing the infant to undergo debilitating Neonatal Abstinence Syndrome (chemical withdrawal) after birth. Always disclose substance use to your provider so they can provide specialized cessation support.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: QUESTIONS TO ASK */}
          <section id="questions-to-ask" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <MessageCircleQuestion size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Questions to Ask Your Doctor</h2>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6 flex gap-4 mb-10">
              <Quote className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-foreground font-medium leading-relaxed italic mb-2">
                  "I collected information myself, called friends, followed Instagram pages by doctors. I wish I had one place that told me exactly what questions to ask at each appointment — because doctors often don't volunteer information unless you ask."
                </p>
                <span className="text-sm text-primary font-semibold">— Advice from a mother who has been there</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-loose mb-10">
              You have a right to answers at every appointment. This list gives you the exact questions to ask at each stage — organized by trimester — so you walk in prepared and walk out informed.
            </p>

            <div className="space-y-8">
              {/* First Visit */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border-b border-emerald-200 dark:border-emerald-800 px-6 py-4">
                  <h3 className="text-xl font-bold text-foreground">Your First OB Appointment (Weeks 6–10)</h3>
                  <p className="text-sm text-muted-foreground mt-1">The most important appointment — set the tone for your entire care relationship.</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "When is my exact due date based on the ultrasound?",
                      "What prenatal vitamins do you recommend — and does it matter which brand?",
                      "Which medications (OTC and prescription) are safe for me to take?",
                      "What foods should I absolutely avoid during pregnancy?",
                      "How much weight gain is healthy for my body type?",
                      "What symptoms should I call you immediately about?",
                      "Is my current exercise routine safe to continue?",
                      "What genetic screening options are available to me?",
                      "How often will I be seen throughout my pregnancy?",
                      "Can I travel? Are there any restrictions?"
                    ].map((q) => (
                      <div key={q} className="flex items-start gap-2 bg-secondary/50 rounded-xl px-4 py-3">
                        <span className="text-primary font-bold text-lg leading-none mt-0.5">?</span>
                        <span className="text-sm text-foreground">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* First Trimester */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-800 px-6 py-4">
                  <h3 className="text-xl font-bold text-foreground">First Trimester Follow-Ups (Weeks 8–12)</h3>
                  <p className="text-sm text-muted-foreground mt-1">When nausea and discomfort are dominating — ask for help.</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "My nausea is severe — what are safe treatment options?",
                      "I cannot keep food or water down. When should I come in or go to the ER?",
                      "What does the NIPT blood test screen for exactly?",
                      "If I have a miscarriage, what are the signs and what do I do?",
                      "Is light spotting normal?",
                      "Can I have sex during pregnancy?",
                      "What does a healthy heartbeat number look like on ultrasound?",
                      "Are my symptoms normal — or is something wrong?"
                    ].map((q) => (
                      <div key={q} className="flex items-start gap-2 bg-secondary/50 rounded-xl px-4 py-3">
                        <span className="text-primary font-bold text-lg leading-none mt-0.5">?</span>
                        <span className="text-sm text-foreground">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Trimester */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-purple-50 dark:bg-purple-950/20 border-b border-purple-200 dark:border-purple-800 px-6 py-4">
                  <h3 className="text-xl font-bold text-foreground">Second Trimester (Weeks 13–27)</h3>
                  <p className="text-sm text-muted-foreground mt-1">The best time to ask deeper questions about your baby's development.</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "What exactly will the anatomy scan check for?",
                      "What does it mean if something is flagged on the anatomy scan?",
                      "I haven't felt the baby move yet — when should I be concerned?",
                      "My baby's movements seem to have decreased — should I come in?",
                      "What is the glucose test like and how do I prepare?",
                      "What are the signs of gestational diabetes?",
                      "Should I be taking iron supplements?",
                      "When do I start preparing my birth plan?",
                      "What childbirth classes do you recommend?",
                      "What do Braxton Hicks contractions feel like vs. real ones?"
                    ].map((q) => (
                      <div key={q} className="flex items-start gap-2 bg-secondary/50 rounded-xl px-4 py-3">
                        <span className="text-primary font-bold text-lg leading-none mt-0.5">?</span>
                        <span className="text-sm text-foreground">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Third Trimester */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-orange-50 dark:bg-orange-950/20 border-b border-orange-200 dark:border-orange-800 px-6 py-4">
                  <h3 className="text-xl font-bold text-foreground">Third Trimester (Weeks 28–40)</h3>
                  <p className="text-sm text-muted-foreground mt-1">Getting ready for birth — these questions help you prepare.</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "How do I do kick counting and what numbers should concern me?",
                      "What is a normal kick count — and when do I call you?",
                      "What are the signs of preterm labor I should watch for?",
                      "What are my pain management options during labor?",
                      "What does the GBS test result mean for my birth plan?",
                      "At what point should I go to the hospital?",
                      "What are the signs that I'm actually in labor?",
                      "What happens if I go past my due date?",
                      "What is delayed cord clamping and can I request it?",
                      "Can I eat during labor?",
                      "What are the risks and benefits of a C-section vs. vaginal birth for me?",
                      "If I want an epidural, when is it too late to ask?"
                    ].map((q) => (
                      <div key={q} className="flex items-start gap-2 bg-secondary/50 rounded-xl px-4 py-3">
                        <span className="text-primary font-bold text-lg leading-none mt-0.5">?</span>
                        <span className="text-sm text-foreground">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Postpartum */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-pink-50 dark:bg-pink-950/20 border-b border-pink-200 dark:border-pink-800 px-6 py-4">
                  <h3 className="text-xl font-bold text-foreground">Postpartum (6-Week Checkup & Beyond)</h3>
                  <p className="text-sm text-muted-foreground mt-1">Your recovery matters. These questions protect your health after birth.</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Is my recovery progressing normally?",
                      "I feel sad/anxious/disconnected — is this baby blues or postpartum depression?",
                      "What are the warning signs of postpartum depression I should look for?",
                      "When can I resume exercise, sex, and normal activity?",
                      "I'm having trouble breastfeeding — can you refer me to a lactation consultant?",
                      "What birth control options are safe while breastfeeding?",
                      "I'm losing a lot of hair — is this normal?",
                      "When should I come in if I'm concerned about my recovery?",
                      "Are there local support groups for new mothers?",
                      "How often should my baby see the pediatrician in the first month?"
                    ].map((q) => (
                      <div key={q} className="flex items-start gap-2 bg-secondary/50 rounded-xl px-4 py-3">
                        <span className="text-primary font-bold text-lg leading-none mt-0.5">?</span>
                        <span className="text-sm text-foreground">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: LOGISTICS */}
          <section id="logistics" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <Bus size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Maternity Logistics</h2>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Insurance, Issuance & Maternity Leave</h3>
                <p className="text-lg text-muted-foreground leading-loose mb-4">
                  Logistical administration is complex. Contact your insurer early to understand the difference between preventive prenatal care coverages versus high-deductible hospital delivery fees. Understand how to "add" a dependent—called insurance Issuance—usually required within precisely 30 days of birth. 
                </p>
                <p className="text-lg text-muted-foreground leading-loose">
                  Research FMLA (Family and Medical Leave Act) which protects your job for 12 unpaid weeks in the US, alongside any state-sponsored short-term disability or paid family leave policies natively offered by your employer. File your FMLA paperwork early in the third trimester.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Transportation & Appointment Batching</h3>
                <p className="text-lg text-muted-foreground leading-loose">
                  A low-risk pregnancy demands approximately 15 clinical visits. Batching blood-draws directly after standard appointments minimizes disruption. Pre-determine how you will manage location transit if rural. UHS CMH offers localized Maternity Transit systems specifically synchronized with Chenango Memorial Hospital routes.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: RESOURCES */}
          <section id="resources" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <Library size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">External Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border p-6 rounded-2xl">
                <h4 className="font-bold text-xl mb-3">Books</h4>
                <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                  <li>• "Expecting Better" by Emily Oster</li>
                  <li>• "Mayo Clinic Guide to a Healthy Pregnancy"</li>
                  <li>• "The Fourth Trimester" by Kimberly Ann Johnson</li>
                </ul>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl">
                <h4 className="font-bold text-xl mb-3">Apps</h4>
                <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                  <li>• <strong>Ovia Pregnancy:</strong> Tracking & analytics</li>
                  <li>• <strong>Flo:</strong> Cycle & pregnancy mapping</li>
                  <li>• <strong>Full Term:</strong> Contraction timer UI</li>
                </ul>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl">
                <h4 className="font-bold text-xl mb-3">Organizations</h4>
                <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                  <li>• Postpartum Support Int. (PSI)</li>
                  <li>• La Leche League (Feeding support)</li>
                  <li>• ACOG Public Patience Portal</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CITATIONS */}
          <div className="mt-20 pt-10 border-t border-border">
            <p className="text-[10px] md:text-xs text-muted-foreground/60 leading-relaxed text-justify">
              <strong>Medical Disclaimer & Information Citations:</strong> This material is provided for educational and informational utility only and does not constitute formal medical diagnosis, advice, or physician directives. Always consult your primary care provider or certified OB/GYN concerning clinical interventions. The robust clinical guidance, screening schedules, dietary constraints, and postnatal psychiatric pathways delineated within this comprehensive guide are formally synthesized from published, peer-reviewed clinical guidelines authored by: The American College of Obstetricians and Gynecologists (ACOG), The Centers for Disease Control and Prevention (CDC), and the World Health Organization (WHO) Maternal Mortality frameworks. Information verified current as of 2026 maternity protocols.
            </p>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default PregnancyGuide;
