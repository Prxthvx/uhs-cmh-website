import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { 
  ArrowLeft, Phone, CalendarHeart, Baby, HeartPulse, 
  Activity, Library, Bus, ArrowRight, ShieldCheck, 
  Brain, CigaretteOff, WineOff, Pill, BookHeart, 
  Smartphone, Building, BriefcaseMedical, MapPin, CheckCircle2,
  CalendarDays, HeartHandshake, ListChecks
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const PregnancyGuide = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mb-8 pl-0 text-muted-foreground hover:text-foreground hover:bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          {/* Header Section */}
          <div className="mb-14 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Comprehensive <span className="text-primary">Pregnancy Guide</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your step-by-step companion from preconception planning, through every trimester, to postpartum care and beyond.
            </p>
          </div>

          {/* New Comprehensive Guide Section Using Tabs */}
          <div className="mb-20">
            <Tabs defaultValue="planning" className="w-full">
              <div className="overflow-x-auto pb-4 mb-4 hide-scrollbar">
                <TabsList className="w-max inline-flex h-12 items-center justify-start rounded-full bg-muted p-1 text-muted-foreground w-full sm:w-auto">
                  <TabsTrigger value="planning" className="rounded-full px-4 py-2 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    <CalendarHeart className="w-4 h-4 mr-2" /> Planning & Confirmation
                  </TabsTrigger>
                  <TabsTrigger value="trimesters" className="rounded-full px-4 py-2 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    <Baby className="w-4 h-4 mr-2" /> The Trimesters
                  </TabsTrigger>
                  <TabsTrigger value="postpartum" className="rounded-full px-4 py-2 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    <HeartPulse className="w-4 h-4 mr-2" /> Postpartum Care
                  </TabsTrigger>
                  <TabsTrigger value="health" className="rounded-full px-4 py-2 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    <Activity className="w-4 h-4 mr-2" /> Health
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="rounded-full px-4 py-2 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    <Library className="w-4 h-4 mr-2" /> Resources
                  </TabsTrigger>
                  <TabsTrigger value="logistics" className="rounded-full px-4 py-2 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    <Bus className="w-4 h-4 mr-2" /> Logistics
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* TAB CONTENT: PLANNING & CONFIRMATION */}
              <TabsContent value="planning" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-l-4 border-l-primary/60 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <ShieldCheck className="w-8 h-8 text-primary mb-2" />
                      <CardTitle>Preconception Health</CardTitle>
                      <CardDescription>Preparing your body for a healthy pregnancy.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm space-y-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Folic acid and prenatal vitamins</li>
                        <li>Vaccinations to update</li>
                        <li>Managing existing medical conditions</li>
                        <li>Achieving a healthy weight</li>
                        <li>Understanding family medical history</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-primary/60 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <HeartHandshake className="w-8 h-8 text-primary mb-2" />
                      <CardTitle>Counseling</CardTitle>
                      <CardDescription>Expert guidance before and during pregnancy.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm space-y-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Genetic screening and guidance</li>
                        <li>Fertility counseling options</li>
                        <li>Nutritional counseling</li>
                        <li>Mental health check-ins</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary/60 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
                      <CardTitle>Confirmation</CardTitle>
                      <CardDescription>You suspect you are pregnant, what is next?</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm space-y-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>At-home pregnancy tests</li>
                        <li>Scheduling an official dating ultrasound</li>
                        <li>Blood tests (hCG levels)</li>
                        <li>Initial OB/GYN or midwife intake</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* TAB CONTENT: THE TRIMESTERS */}
              <TabsContent value="trimesters" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Accordion type="single" collapsible className="w-full bg-card rounded-2xl border px-6 py-2 shadow-sm">
                  
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">First, Second & Third Trimesters</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-2 pb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-muted/50 p-4 rounded-xl">
                          <h4 className="font-bold text-foreground mb-2">1st Trimester</h4>
                          <p className="text-sm">Weeks 1-12. Rapid fetal development. Focus on overcoming early symptoms. Key dating scans and initial genetic tests happen here.</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-xl">
                          <h4 className="font-bold text-foreground mb-2">2nd Trimester</h4>
                          <p className="text-sm">Weeks 13-27. Often called the 'honeymoon phase'. Energy returns, the anatomy scan occurs, and you may feel the first kicks!</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-xl">
                          <h4 className="font-bold text-foreground mb-2">3rd Trimester</h4>
                          <p className="text-sm">Weeks 28-40+. The home stretch. Focus shifts to maximum growth, monitoring kick counts, and preparing for labor & delivery.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">Symptoms & Physical Changes</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-2 pb-6">
                      <ul className="space-y-2 text-sm">
                        <li><strong>What to expect:</strong> Changing energy levels, hormonal shifts, breast tenderness, and mood changes.</li>
                        <li><strong>Common Symptoms & Discomforts:</strong> Nausea, fatigue, heartburn, backache, round ligament pain, and swollen ankles.</li>
                        <li><strong>Symptom Changes:</strong> Nausea typically peaks in the 1st trimester, while backaches and swelling are more common in the 3rd.</li>
                        <li><strong>Physical Changes:</strong> Weight gain tracking, skin changes (glow, pigmentation), and shifting center of gravity.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">Practices & Screenings</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-2 pb-6">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Prenatal Practices:</strong> Take prenatal vitamins, stay hydrated, engage in safe exercise, and get plenty of rest.</li>
                        <li><strong>What to Avoid:</strong> Unpasteurized dairy, raw meats, high-mercury fish, hot tubs, and heavy lifting.</li>
                        <li><strong>Kick Counting:</strong> Starting in the 3rd trimester, track baby's movements to ensure healthy activity levels.</li>
                        <li><strong>Screenings (What/Why/When):</strong> NT scan (1st tri), Anatomy scan (2nd tri), Glucose test (2nd tri), Group B Strep (3rd tri).</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">Labor, Delivery & Birth Readiness</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pt-2 pb-6">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Signs of Birth Readiness:</strong> Lightening (baby dropping), loss of mucus plug, water breaking, and regular contractions.</li>
                        <li><strong>Childbirth Education Options:</strong> Lamaze, Bradley method, hypnobirthing, or hospital-led classes.</li>
                        <li><strong>Labor & Delivery:</strong> Understanding the stages of labor, pain management options (epidural, nitrous oxide, natural), and interventions.</li>
                        <li><strong>Birth Plan Specifics:</strong> Preferences for environment, delayed cord clamping, skin-to-skin contact, and support persons.</li>
                        <li><strong>Location of Birth:</strong> Hospital, birthing center, or home birth considerations.</li>
                        <li><strong>Plan for Check-ins:</strong> Knowing when to call the doctor or head to the hospital (e.g., 5-1-1 rule).</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </TabsContent>

              {/* TAB CONTENT: POSTPARTUM CARE */}
              <TabsContent value="postpartum" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="border-t-4 border-t-pink-400 shadow-sm">
                    <CardHeader>
                      <HeartPulse className="w-6 h-6 text-pink-500 mb-2" />
                      <CardTitle>Physical Recovery</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Healing from vaginal or cesarean birth, managing postpartum bleeding (lochia), pelvic floor recovery, and recognizing warning signs that require medical attention.
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-purple-400 shadow-sm">
                    <CardHeader>
                      <Brain className="w-6 h-6 text-purple-500 mb-2" />
                      <CardTitle>Mental Health</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Distinguishing "baby blues" from postpartum depression (PPD) or anxiety (PPA). Building a support system and knowing when to ask a professional for help.
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-orange-400 shadow-sm">
                    <CardHeader>
                      <Baby className="w-6 h-6 text-orange-500 mb-2" />
                      <CardTitle>Feeding</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Navigating breastfeeding, pumping, or formula feeding. Learning latch techniques, managing supply, and utilizing lactation consultants.
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-blue-400 shadow-sm">
                    <CardHeader>
                      <CalendarDays className="w-6 h-6 text-blue-500 mb-2" />
                      <CardTitle>Rest</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Strategies for maximizing sleep in shifts, sleeping when the baby sleeps, and setting boundaries with visitors to prioritize recovery.
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* TAB CONTENT: HEALTH RELATED ISSUES */}
              <TabsContent value="health" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Card className="bg-destructive/5 border-destructive/20">
                  <CardHeader>
                     <CardTitle className="flex items-center text-destructive">
                       <Activity className="w-5 h-5 mr-2" /> Health & Safety Warnings
                     </CardTitle>
                     <CardDescription>Crucial guidelines to protect your baby's development.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4 items-start">
                       <CigaretteOff className="w-8 h-8 text-destructive shrink-0 mt-1" />
                       <div>
                         <h4 className="font-bold text-foreground">Smoking</h4>
                         <p className="text-sm text-muted-foreground mt-1">Smoking during pregnancy restricts oxygen to the baby and increases risks of premature birth, low birth weight, and SIDS. Quitting at any time helps.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <WineOff className="w-8 h-8 text-destructive shrink-0 mt-1" />
                       <div>
                         <h4 className="font-bold text-foreground">Drinking</h4>
                         <p className="text-sm text-muted-foreground mt-1">There is no known safe amount of alcohol use during pregnancy. Drinking can cause Fetal Alcohol Spectrum Disorders (FASDs), which result in lifelong physical and behavioral issues.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <Pill className="w-8 h-8 text-destructive shrink-0 mt-1" />
                       <div>
                         <h4 className="font-bold text-foreground">Substance Use</h4>
                         <p className="text-sm text-muted-foreground mt-1">Recreational drugs, unprescribed medications, and high doses of certain supplements can severely affect fetal development. Always consult your provider before taking any substance.</p>
                       </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* TAB CONTENT: RESOURCES */}
              <TabsContent value="resources" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border shadow-sm text-center py-6 hover:border-primary/50 transition-colors">
                    <CardHeader className="items-center pb-2">
                       <BookHeart className="w-12 h-12 text-primary mb-2" />
                       <CardTitle>Books</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Recommended reading like "Expecting Better", "What to Expect", and evidence-based guides on mindful birthing.
                    </CardContent>
                  </Card>
                  <Card className="border shadow-sm text-center py-6 hover:border-primary/50 transition-colors">
                    <CardHeader className="items-center pb-2">
                       <Smartphone className="w-12 h-12 text-primary mb-2" />
                       <CardTitle>Apps</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Track your pregnancy week-by-week using highly rated apps like Ovia, What to Expect, or Flo Pregnancy.
                    </CardContent>
                  </Card>
                  <Card className="border shadow-sm text-center py-6 hover:border-primary/50 transition-colors">
                    <CardHeader className="items-center pb-2">
                       <Building className="w-12 h-12 text-primary mb-2" />
                       <CardTitle>Organizations</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Connect with trusted groups like ACOG, La Leche League, and Postpartum Support International for reliable info.
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* TAB CONTENT: LOGISTICS */}
              <TabsContent value="logistics" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center">
                       <ListChecks className="w-6 h-6 mr-2 text-primary" /> Care Logistics
                     </CardTitle>
                     <CardDescription>Managing the paperwork, travel, and scheduling of your pregnancy journey.</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                          <h4 className="font-bold flex items-center mb-1"><ShieldCheck className="w-4 h-4 mr-2" /> Insurance & Issuance</h4>
                          <p className="text-sm text-muted-foreground">Verify your prenatal coverage, understand deductibles, out-of-pocket maximums, and how to add your newborn to your policy after birth.</p>
                        </div>
                        <div>
                          <h4 className="font-bold flex items-center mb-1"><CalendarDays className="w-4 h-4 mr-2" /> Maternity Leave</h4>
                          <p className="text-sm text-muted-foreground">Research FMLA eligibility, state-sponsored family leave, employer policies, and short-term disability claims. Start paperwork in the 2nd trimester.</p>
                        </div>
                        <div>
                          <h4 className="font-bold flex items-center mb-1"><BriefcaseMedical className="w-4 h-4 mr-2" /> Booking Appointments</h4>
                          <p className="text-sm text-muted-foreground">You will have roughly 15 prenatal visits. Schedule them in batches if possible. Frequency increases to weekly in your final month.</p>
                        </div>
                        <div>
                          <h4 className="font-bold flex items-center mb-1"><MapPin className="w-4 h-4 mr-2" /> Location Centers</h4>
                          <p className="text-sm text-muted-foreground">Identify where routine checkups are held vs. where anatomy scans or labor takes place. Pre-register at your birthing hospital by week 30.</p>
                        </div>
                        <div className="md:col-span-2 bg-secondary/30 p-4 rounded-xl mt-2">
                          <h4 className="font-bold flex items-center mb-1"><Bus className="w-4 h-4 mr-2 text-primary" /> Methods of Transportation</h4>
                          <p className="text-sm text-muted-foreground">Ensure you have reliable transport for labor. If taking the UHS CMH Shuttle for routine care, book 48 hours in advance. Practice installing your infant car seat by week 36.</p>
                        </div>
                     </div>
                  </CardContent>
                </Card>
              </TabsContent>

            </Tabs>
          </div>

          <hr className="border-border my-12" />

          {/* Myth vs Fact Section - Now rendered below or distinctly separated */}
          <div className="mb-14 text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Pregnancy: <span className="text-primary">Myth vs. Fact</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Get the truth about pregnancy, backed by the experts.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {mythFacts.map((item, i) => (
              <motion.div
                variants={itemVariants}
                key={i}
                className="group relative w-full h-[320px] md:h-72 cursor-pointer [perspective:1000px]"
              >
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front of Card (Myth) */}
                  <div className="absolute inset-0 w-full h-full bg-card border border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-md [backface-visibility:hidden]">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">The Myth</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">"{item.myth}"</h3>
                    <span className="absolute bottom-6 text-sm text-primary/70 flex items-center">
                      Hover or tap to reveal the truth <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>

                  {/* Back of Card (Fact) */}
                  <div className="absolute inset-0 w-full h-full bg-primary/10 border border-primary/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2">The Fact</span>
                    <p className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                      {item.fact}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Call to Action */}
          <div className="mt-12 bg-secondary/50 border border-border border-l-4 border-l-primary rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Still have questions?</h3>
              <p className="text-muted-foreground font-medium">Always ask your doctor.</p>
            </div>
            <Button size="lg" className="rounded-xl px-8 shadow-md" asChild>
              <a href="tel:5551234">
                <Phone className="w-5 h-5 mr-2" />
                Call Triage Nurse
              </a>
            </Button>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default PregnancyGuide;
