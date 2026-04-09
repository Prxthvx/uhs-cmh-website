import React, { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLocation } from "react-router-dom";
import { FileText, CalendarHeart, Sparkles, Baby, HeartPulse, ShieldAlert, Library, Bus, CheckCircle2 } from "lucide-react";

const PregnancyGuide = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState("planning");

  const navItems = [
    { id: "planning", label: "Planning & Confirmation", icon: CalendarHeart },
    { id: "first-trimester", label: "First Trimester", icon: Sparkles },
    { id: "second-trimester", label: "Second Trimester", icon: Baby },
    { id: "third-trimester", label: "Third Trimester", icon: HeartPulse },
    { id: "labor-delivery", label: "Labor & Delivery", icon: FileText },
    { id: "postpartum", label: "Postpartum Care", icon: HeartPulse },
    { id: "health-issues", label: "Health & Safety", icon: ShieldAlert },
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

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Early Screenings</h3>
                <p className="text-lg text-muted-foreground leading-loose">
                  Between weeks 10 and 13, you will be offered Non-Invasive Prenatal Testing (NIPT) and a Nuchal Translucency (NT) scan. The NIPT is a simple maternal blood draw that analyzes fetal DNA circulating in the mother's blood to screen for chromosomal abnormalities like Down Syndrome (Trisomy 21). The NT scan is a specialized ultrasound that measures the fluid at the back of the fetus's neck, providing further chromosomal risk assessment and confirming structural development.
                </p>
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

// We use BookOpen for the hero icon, need to import it here.
import { BookOpen } from "lucide-react";

export default PregnancyGuide;
