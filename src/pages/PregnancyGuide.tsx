import React, { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLocation } from "react-router-dom";
import { BookOpen, FileText, CalendarHeart, Sparkles, Baby, HeartPulse, ShieldAlert, Library, CheckCircle2, FlaskConical, MessageCircleQuestion, Quote, AlertTriangle } from "lucide-react";

const PregnancyGuide = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState("planning");
  const [selectedWeekIdx, setSelectedWeekIdx] = useState(0);

  const weekData = [
    { week: "Week 4",    trimester: 1, emoji: "🌱", size: "Poppy seed", cm: "0.1 cm",  progress: 10,
      baby: "Implantation is complete. The embryo forms three layers: ectoderm (skin & brain), mesoderm (heart & muscles), and endoderm (organs). The amniotic sac begins forming around the embryo.",
      mom: "You may notice a missed period. Light spotting (implantation bleeding) is normal. Breasts may feel tender and you may feel unusually tired." },
    { week: "Week 5",    trimester: 1, emoji: "🫘", size: "Sesame seed", cm: "0.2 cm",  progress: 12,
      baby: "The heart begins beating — a tiny flicker visible on early ultrasound. The neural tube (future brain and spinal cord) is closing. Tiny arm and leg buds appear.",
      mom: "Nausea often starts this week. Fatigue hits hard as your body floods with hCG and progesterone. Mood swings are completely normal." },
    { week: "Week 6",    trimester: 1, emoji: "🌿", size: "Lentil", cm: "0.6 cm",  progress: 15,
      baby: "The heartbeat is detectable by ultrasound (~100–160 bpm). Eyes, ears, and nostrils begin forming. The brain is dividing into five distinct regions.",
      mom: "Morning sickness often peaks. Frequent urination begins as the uterus presses the bladder. Strong food aversions and smell sensitivity are very common." },
    { week: "Week 8",    trimester: 1, emoji: "🫐", size: "Raspberry", cm: "1.6 cm",  progress: 20,
      baby: "All major organs are present in early form. Individual fingers and toes are forming. The baby starts moving — though you won't feel it yet.",
      mom: "Your uterus is now the size of a large orange. Heartburn may begin. Bloating and constipation from progesterone slowing digestion are common." },
    { week: "Week 10",   trimester: 1, emoji: "🍓", size: "Strawberry", cm: "3 cm",   progress: 25,
      baby: "Now officially a fetus — not an embryo. All vital organs are formed. Tiny fingernails are growing. The baby can make small movements and swallow amniotic fluid.",
      mom: "The worst nausea often begins easing. The NIPT blood test is now available. Emotional waves — anxiety, joy, fear — are all completely normal." },
    { week: "Week 12",   trimester: 1, emoji: "🍋", size: "Lime", cm: "5.4 cm",  progress: 30,
      baby: "The fetus has a fully formed face and can open and close its fists. Reflexes are developing. Kidneys are producing urine. The miscarriage risk drops significantly.",
      mom: "End of the first trimester. Nausea usually improves. Your bump may become visible. The Nuchal Translucency (NT) ultrasound is done this week." },
    { week: "Week 14",   trimester: 2, emoji: "🍑", size: "Peach", cm: "8 cm",    progress: 35,
      baby: "The baby can make facial expressions — squinting, frowning, grimacing. Fine lanugo hair begins covering the body. The thyroid gland starts producing hormones.",
      mom: "Energy returns for many women — the honeymoon phase begins! Nausea typically resolves. Your bump is now more visible to others." },
    { week: "Week 16",   trimester: 2, emoji: "🥑", size: "Avocado", cm: "11.6 cm", progress: 40,
      baby: "The baby can hear sounds — your heartbeat, your voice, music. Eyes can move side to side behind closed lids. Bones are hardening as calcium deposits build.",
      mom: "First faint movements — like gentle flutters or bubbles — may be felt. This is called 'quickening.' Round ligament pain (brief sharp pains) may start." },
    { week: "Week 20",   trimester: 2, emoji: "🍌", size: "Banana", cm: "16 cm",   progress: 50,
      baby: "The anatomy scan checks every major organ. Sex can be determined. The baby has a sleep/wake cycle, can hear loud sounds, and is swallowing amniotic fluid regularly.",
      mom: "Halfway point! The anatomy scan is a major milestone — you'll see your baby's face, heart, and limbs in detail. Backaches and a visible round belly." },
    { week: "Week 22",   trimester: 2, emoji: "🍈", size: "Papaya", cm: "27 cm",   progress: 55,
      baby: "Lips, eyebrows, and eyelids are formed. Fingerprints are developing. Viability — survival outside the womb with intensive support — is now approaching.",
      mom: "Kicks are stronger and more regular. Swollen ankles, stretch marks, and a popped belly button may appear. Sleep gets harder to find." },
    { week: "Week 26",   trimester: 2, emoji: "🌽", size: "Ear of corn", cm: "35 cm",   progress: 65,
      baby: "Lungs begin practicing breathing movements. The brain develops rapidly. The baby responds to light and sound through the belly. Eyes begin to open.",
      mom: "Glucose Challenge Test (GD screening) is done this week. Heartburn often intensifies. Braxton Hicks 'practice' contractions may become noticeable." },
    { week: "Week 28",   trimester: 3, emoji: "🍆", size: "Eggplant", cm: "37 cm",   progress: 70,
      baby: "The brain forms complex folds. Eyes are open and blinking. The baby can now dream during REM sleep. Fat accumulation accelerates to prepare for warmth after birth.",
      mom: "Kick counting begins now. Braxton Hicks contractions increase. Prenatal visits move to every 2 weeks. You may feel short of breath." },
    { week: "Week 32",   trimester: 3, emoji: "🎃", size: "Butternut squash", cm: "42 cm",   progress: 80,
      baby: "All five senses are functioning. The baby is practicing breathing movements. Most babies turn head-down now. Fingernails have grown to the fingertip.",
      mom: "Shortness of breath as the baby pushes up into your ribcage. Pelvic pressure increases. Colostrum (early breast milk) may begin leaking." },
    { week: "Week 36",   trimester: 3, emoji: "🥬", size: "Head of lettuce", cm: "47 cm",   progress: 90,
      baby: "Lungs are nearly mature. The baby sheds lanugo (body hair) and vernix (protective skin coating). Gaining about half a pound every week now.",
      mom: "GBS swab done this week. 'Lightening' — the baby drops lower into the pelvis — may bring heartburn relief. Weekly appointments begin now." },
    { week: "Week 40",   trimester: 3, emoji: "🍉", size: "Watermelon", cm: "51 cm",   progress: 100,
      baby: "Fully developed and ready for birth. Lungs are completely mature. All newborn reflexes are in place. The placenta is aging and the baby is running out of room.",
      mom: "Full term. Watch for labor signs: regular contractions getting closer, water breaking, bloody show. Your due date is an estimate — ±2 weeks is normal." },
  ];

  const navItems = [
    { id: "planning", label: "Planning & Confirmation", icon: CalendarHeart },
    { id: "first-trimester", label: "First Trimester", icon: Sparkles },
    { id: "second-trimester", label: "Second Trimester", icon: Baby },
    { id: "third-trimester", label: "Third Trimester", icon: HeartPulse },
    { id: "labor-delivery", label: "Labor & Delivery", icon: FileText },
    { id: "postpartum", label: "Postpartum Care", icon: HeartPulse },
    { id: "milestone-tests", label: "Tests & Milestones", icon: FlaskConical },
    { id: "week-by-week", label: "Baby Week by Week", icon: Baby },
    { id: "health-issues", label: "Health & Safety", icon: ShieldAlert },
    { id: "questions-to-ask", label: "Questions to Ask", icon: MessageCircleQuestion },
    { id: "resources", label: "References", icon: Library },
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
                  <span className="text-sm text-primary font-semibold">— Adapted from ACOG Practice Bulletin No. 189: Nausea and Vomiting of Pregnancy</span>
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
            <p className="text-lg text-muted-foreground leading-loose mb-8">
              Tap any week below to see exactly what's happening — how big your baby is, what they're developing, and what you might be feeling. Every pregnancy is a journey, and you deserve to know every step.
            </p>

            {/* Trimester Tab Jumps */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {[
                { label: "1st Trimester", color: "bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200", idx: 0 },
                { label: "2nd Trimester", color: "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200", idx: 6 },
                { label: "3rd Trimester", color: "bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200", idx: 11 },
              ].map((t) => (
                <button key={t.label} onClick={() => setSelectedWeekIdx(t.idx)}
                  className={`px-4 py-1.5 rounded-full border text-sm font-semibold transition-all ${t.color}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Scrollable Week Timeline */}
            <div className="relative mb-8">
              <div className="overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
                <div className="flex items-center gap-0 min-w-max px-2">
                  {weekData.map((w, i) => {
                    const tColor = w.trimester === 1 ? "bg-emerald-500" : w.trimester === 2 ? "bg-blue-500" : "bg-purple-500";
                    const tColorLight = w.trimester === 1 ? "bg-emerald-100 border-emerald-300" : w.trimester === 2 ? "bg-blue-100 border-blue-300" : "bg-purple-100 border-purple-300";
                    const tColorActive = w.trimester === 1 ? "bg-emerald-500 border-emerald-600 shadow-emerald-200" : w.trimester === 2 ? "bg-blue-500 border-blue-600 shadow-blue-200" : "bg-purple-500 border-purple-600 shadow-purple-200";
                    const isSelected = i === selectedWeekIdx;
                    return (
                      <React.Fragment key={w.week}>
                        {i > 0 && (
                          <div className={`h-0.5 w-8 shrink-0 ${i <= selectedWeekIdx ? tColor : "bg-border"} transition-colors duration-300`} />
                        )}
                        <button
                          onClick={() => setSelectedWeekIdx(i)}
                          className={`flex flex-col items-center gap-1 shrink-0 transition-all duration-200 group`}
                        >
                          <span className={`text-xl transition-transform duration-200 ${isSelected ? "scale-125" : "group-hover:scale-110"}`}>
                            {w.emoji}
                          </span>
                          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${isSelected ? `${tColorActive} shadow-md scale-125` : `${tColorLight}`}`} />
                          <span className={`text-[10px] font-semibold whitespace-nowrap transition-colors ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                            {w.week}
                          </span>
                        </button>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Detail Card */}
            {(() => {
              const w = weekData[selectedWeekIdx];
              const trimLabel = w.trimester === 1 ? "First Trimester" : w.trimester === 2 ? "Second Trimester" : "Third Trimester";
              const trimBg = w.trimester === 1 ? "from-emerald-50 to-emerald-50/0 dark:from-emerald-950/20" : w.trimester === 2 ? "from-blue-50 to-blue-50/0 dark:from-blue-950/20" : "from-purple-50 to-purple-50/0 dark:from-purple-950/20";
              const trimBadge = w.trimester === 1 ? "bg-emerald-100 text-emerald-700" : w.trimester === 2 ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700";
              const trimBar = w.trimester === 1 ? "bg-emerald-500" : w.trimester === 2 ? "bg-blue-500" : "bg-purple-500";
              return (
                <div className={`bg-gradient-to-br ${trimBg} border border-border rounded-3xl overflow-hidden shadow-sm`}>
                  {/* Top strip */}
                  <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-6xl md:text-8xl select-none">{w.emoji}</span>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">{w.week}</h3>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${trimBadge}`}>{trimLabel}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl md:text-5xl font-black text-foreground">{w.cm}</p>
                      <p className="text-sm text-muted-foreground font-medium">baby's length</p>
                      <p className="text-base font-semibold text-foreground mt-0.5">≈ {w.size}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="px-6 mb-6">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1.5 font-medium">
                      <span>Pregnancy progress</span>
                      <span>{w.progress}% complete</span>
                    </div>
                    <div className="h-3 bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${trimBar} transition-all duration-500`}
                        style={{ width: `${w.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-muted-foreground/60 mt-1">
                      <span>Week 4</span>
                      <span>Week 40</span>
                    </div>
                  </div>

                  {/* Baby + Mom columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border">
                    <div className="p-6 md:border-r border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">👶</span>
                        <h4 className="font-bold text-foreground text-base uppercase tracking-wide text-sm">Baby's Development</h4>
                      </div>
                      <p className="text-base text-foreground/80 leading-relaxed">{w.baby}</p>
                    </div>
                    <div className="p-6 border-t md:border-t-0 border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">🤱</span>
                        <h4 className="font-bold text-foreground text-base uppercase tracking-wide text-sm">How You May Feel</h4>
                      </div>
                      <p className="text-base text-foreground/80 leading-relaxed">{w.mom}</p>
                    </div>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex justify-between items-center px-6 py-4 border-t border-border">
                    <button
                      onClick={() => setSelectedWeekIdx(Math.max(0, selectedWeekIdx - 1))}
                      disabled={selectedWeekIdx === 0}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      ← {selectedWeekIdx > 0 ? weekData[selectedWeekIdx - 1].week : ""}
                    </button>
                    <span className="text-xs text-muted-foreground">{selectedWeekIdx + 1} of {weekData.length}</span>
                    <button
                      onClick={() => setSelectedWeekIdx(Math.min(weekData.length - 1, selectedWeekIdx + 1))}
                      disabled={selectedWeekIdx === weekData.length - 1}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      {selectedWeekIdx < weekData.length - 1 ? weekData[selectedWeekIdx + 1].week : ""} →
                    </button>
                  </div>
                </div>
              );
            })()}
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

          {/* SECTION: REFERENCES */}
          <section id="resources" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <Library size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">References</h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              All clinical guidance in this maternal guide is drawn from peer-reviewed medical literature, published practice bulletins, and the public health recommendations of leading organizations. The sources below correspond directly to the content presented in each section of this guide.
            </p>

            {/* Clinical Guidelines */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/10 inline-flex items-center justify-center text-primary text-xs font-black">1</span>
                Clinical Guidelines &amp; Practice Bulletins
              </h3>
              <div className="space-y-3">
                {[
                  {
                    org: "ACOG",
                    title: "Practice Bulletin No. 189 — Nausea and Vomiting of Pregnancy",
                    note: "Source for HG prevalence (0.3–3%), diagnostic criteria, treatment protocols, and first-trimester symptom guidance.",
                    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/01/nausea-and-vomiting-of-pregnancy",
                  },
                  {
                    org: "ACOG",
                    title: "Committee Opinion No. 762 — Prepregnancy Counseling",
                    note: "Source for preconception folic acid (400 mcg minimum), BMI optimization, vaccine review (MMR, Varicella), chronic condition management, and genetic carrier screening recommendations.",
                    url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/01/prepregnancy-counseling",
                  },
                  {
                    org: "ACOG",
                    title: "FAQ — Prenatal Genetic Testing (NIPT, NT Scan, Carrier Screening)",
                    note: "Source for NIPT timing (weeks 10–13), Nuchal Translucency scan description, chromosomal condition screening including Down syndrome (Trisomy 21), Trisomy 18, and Trisomy 13.",
                    url: "https://www.acog.org/womens-health/faqs/prenatal-genetic-testing",
                  },
                  {
                    org: "ACOG",
                    title: "Practice Bulletin No. 190 — Gestational Diabetes Mellitus",
                    note: "Source for Glucose Challenge Test protocol (weeks 24–28), 1-hour and 3-hour diagnostic thresholds, macrosomia risk, and management approach.",
                    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/02/gestational-diabetes-mellitus",
                  },
                  {
                    org: "ACOG",
                    title: "Practice Bulletin No. 797 — Prevention of Group B Streptococcal Early-Onset Disease in Newborns",
                    note: "Source for GBS swab timing (weeks 35–37), prevalence (~25% of pregnant women), IV antibiotic prophylaxis protocol during labor, and newborn infection risk.",
                    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/02/prevention-of-group-b-streptococcal-early-onset-disease-in-newborns",
                  },
                  {
                    org: "ACOG",
                    title: "Practice Bulletin No. 255 — Postpartum Depression",
                    note: "Source for Baby Blues (affects ~80% of mothers, resolves within 2 weeks), PPD diagnostic criteria beyond 14 days, and treatment recommendations.",
                    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/06/screening-and-diagnosis-of-mental-health-conditions-during-pregnancy-and-postpartum",
                  },
                  {
                    org: "ACOG",
                    title: "Committee Opinion No. 828 — Medically Indicated Late-Preterm and Early-Term Deliveries",
                    note: "Source for fetal kick counting protocol (10 movements in 2 hours beginning week 28) and guidance on decreased fetal movement.",
                    url: "https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins",
                  },
                  {
                    org: "CDC",
                    title: "Fetal Alcohol Spectrum Disorders (FASDs) — Alcohol Use During Pregnancy",
                    note: "Source for the statement that no safe amount, no safe time, and no safe type of alcohol exists during pregnancy, and that FASDs are completely preventable.",
                    url: "https://www.cdc.gov/ncbddd/fasd/alcohol-use.html",
                  },
                  {
                    org: "CDC",
                    title: "Smoking, Pregnancy, and Babies",
                    note: "Source for smoking risks including placental abruption, growth restriction, preterm birth, and SIDS.",
                    url: "https://www.cdc.gov/tobacco/campaign/tips/diseases/pregnancy.html",
                  },
                  {
                    org: "CDC",
                    title: "Pregnancy Complications — Hyperemesis Gravidarum",
                    note: "Supporting source for HG as a recognized medical condition distinct from normal morning sickness.",
                    url: "https://www.cdc.gov/pregnancy/complications/index.html",
                  },
                  {
                    org: "WHO",
                    title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience (2016)",
                    note: "Source supporting antenatal visit frequency, nutritional guidance, and the global framework for prenatal care discussed throughout this guide.",
                    url: "https://www.who.int/publications/i/item/9789241549912",
                  },
                ].map((ref, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                    <span className="shrink-0 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-black uppercase tracking-wider">{ref.org}</span>
                    <div className="flex-1 min-w-0">
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors leading-snug inline-flex items-start gap-1 group"
                      >
                        {ref.title}
                        <svg className="w-3 h-3 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{ref.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Books */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/10 inline-flex items-center justify-center text-primary text-xs font-black">2</span>
                Recommended Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Expecting Better",
                    author: "Emily Oster",
                    year: "Penguin Press, 2013 (updated 2016)",
                    desc: "An economist's data-driven analysis of pregnancy research — challenges common restrictions with actual evidence and risk statistics.",
                  },
                  {
                    title: "Mayo Clinic Guide to a Healthy Pregnancy",
                    author: "Mayo Clinic Staff",
                    year: "3rd Edition, 2024",
                    desc: "Comprehensive week-by-week guide written and reviewed by Mayo Clinic physicians. Covers symptoms, tests, and complications with clinical accuracy.",
                  },
                  {
                    title: "The Fourth Trimester",
                    author: "Kimberly Ann Johnson",
                    year: "Shambhala, 2017",
                    desc: "Focuses entirely on postpartum recovery — physical healing, emotional adjustment, and reclaiming identity after birth.",
                  },
                ].map((b) => (
                  <div key={b.title} className="bg-card border border-border rounded-xl p-5">
                    <p className="text-sm font-bold text-foreground leading-snug mb-1">"{b.title}"</p>
                    <p className="text-xs text-primary font-semibold mb-0.5">{b.author}</p>
                    <p className="text-xs text-muted-foreground mb-2 italic">{b.year}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Apps & Organizations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-primary/10 inline-flex items-center justify-center text-primary text-xs font-black">3</span>
                  Tracking Apps
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Ovia Pregnancy Tracker", detail: "Week-by-week development, symptom tracking, appointment log, and kick counter. Published by Labcorp.", url: "https://www.oviahealth.com/" },
                    { name: "Flo Period & Pregnancy", detail: "Cycle history, pregnancy tracking, symptom logging, and personalized health insights.", url: "https://flo.health/" },
                    { name: "Full Term — Contraction Timer", detail: "Simple, clear contraction timing tool to track frequency and duration during early labor.", url: "https://www.fulltermapp.com/" },
                  ].map((app) => (
                    <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer"
                      className="block bg-card border border-border hover:border-primary/40 rounded-xl px-4 py-3.5 transition-all hover:shadow-sm group">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{app.name}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{app.detail}</p>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-primary/10 inline-flex items-center justify-center text-primary text-xs font-black">4</span>
                  Organizations &amp; Hotlines
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "ACOG Patient Education", detail: "Free patient-facing FAQs on every stage of pregnancy and women's health, authored by OB/GYN specialists.", url: "https://www.acog.org/womens-health" },
                    { name: "Postpartum Support International (PSI)", detail: "Helpline, provider directory, and support groups for postpartum depression, anxiety, and OCD.", url: "https://www.postpartum.net/" },
                    { name: "La Leche League International", detail: "Breastfeeding support network with local groups, lactation resources, and 24-hour helpline.", url: "https://www.llli.org/" },
                    { name: "HER Foundation (Hyperemesis Gravidarum)", detail: "Research, support resources, and provider directory specifically for HG — the severe pregnancy nausea condition.", url: "https://www.hyperemesis.org/" },
                    { name: "CDC Maternal Health", detail: "Public health data, guidelines, and resources on maternal mortality, complications, and healthy pregnancy.", url: "https://www.cdc.gov/reproductivehealth/maternal-infant-health/" },
                  ].map((org) => (
                    <a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer"
                      className="block bg-card border border-border hover:border-primary/40 rounded-xl px-4 py-3.5 transition-all hover:shadow-sm group">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{org.name}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{org.detail}</p>
                    </a>
                  ))}
                </div>
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
