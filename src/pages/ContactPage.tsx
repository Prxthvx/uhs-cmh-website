import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, ExternalLink, Stethoscope, Heart, Users, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import cmhExterior from "@/assets/cmh exterior.jpg";

const providers = [
  { name: "Franklin Ross Baxter, M.D.", role: "Obstetrics & Gynecology" },
  { name: "Christina (Tina) Mann, CNM", role: "Nurse Midwife — Women's Health" },
  { name: "Traci Morris-Yazici, CNM", role: "Nurse Midwife — Women's Health" },
  { name: "Bahman Sadeghi, DO", role: "Obstetrics & Gynecology" },
  { name: "Lorrie Vail, FNP", role: "Women's Health & OB/GYN" },
  { name: "Phyllis R. White, DO", role: "Obstetrics & Gynecology" },
];

const maternityServices = [
  "Breastfeeding Education & Lactation Support",
  "Childbirth Education Classes",
  "Epidurals",
  "Normal Newborn Care",
  "Obstetric Care",
  "Prenatal Genetic Screening",
  "Private Rooms / Couplet Care",
  "Secured Maternity Unit",
];

const gynServices = [
  "Monitoring Reproductive Health",
  "Annual Exams",
  "Birth Planning & Birth Control",
  "Gynecological Surgery",
  "Urogynecological Care & Surgery",
  "Menopausal Care & Treatment",
  "Hereditary Cancer Risk Screening",
  "Prenatal Genetic Screening",
  "STD Screening & Treatment",
];

const localResources = [
  {
    name: "Chenango County Public Health",
    description: "Promotes and protects community health, safety, and quality of life through assessment, education, and ensuring necessary health services are available.",
    address: "5 Court Street, Norwich, NY 13815",
    phone: "(607) 337-1660",
    hours: "Mon–Fri: 8:30 AM – 5:00 PM",
    website: "https://www.chenangocountyny.gov/206/Public-Health",
    color: "blue",
  },
  {
    name: "Mothers and Babies Perinatal Network",
    description: "Provides perinatal support services across Chenango County and the Southern Tier, connecting expectant and new mothers with community resources.",
    address: "346 Grand Avenue, Johnson City, NY 13790",
    phone: "(607) 722-0517",
    hours: null,
    website: "https://communityhealthadvocates.org/agencies/mothers-and-babies-perinatal-network/",
    color: "rose",
  },
  {
    name: "Healthy Families / PACT",
    description: "A free, voluntary home visiting program for families from pregnancy until a child reaches age 5 — providing developmental screenings, parenting support, and community referrals.",
    address: "Referrals through Chenango County Public Health, 5 Court St, Norwich",
    phone: "(607) 321-4810",
    hours: null,
    website: "https://www.guthrie.org/services-treatments/parents-and-children-together-pact",
    color: "emerald",
  },
  {
    name: "WIC Program — Greater Opportunities",
    description: "Federally funded nutrition, breastfeeding support, and health referrals for income-eligible pregnant women, new mothers, infants, and children up to age 5.",
    address: "44 West Main Street, Norwich, NY 13815",
    phone: "(607) 334-7114",
    hours: null,
    website: "https://www.greaterops.org/family-individual-social-programs/wic-program",
    color: "amber",
  },
  {
    name: "Child Advocacy Center",
    description: "Nonprofit providing child-friendly, trauma-informed case management, counseling, and advocacy for child abuse victims and at-risk youth in Chenango County.",
    address: "8 Silver Street, Norwich, NY 13815",
    phone: "(607) 334-5437",
    hours: "Mon–Fri: 8:30 AM – 4:30 PM",
    website: "https://chenangochildadvocacy.us/",
    color: "violet",
  },
  {
    name: "Chenango Health Network",
    description: "A rural health network that increases access to health and wellness information and healthcare services for individuals throughout Chenango County.",
    address: "19 Eaton Avenue, Norwich, NY 13815",
    phone: "(607) 337-4128",
    hours: null,
    website: "https://www.chenangohealth.org",
    color: "teal",
  },
  {
    name: "The Place",
    description: "A licensed, community-based nonprofit serving Chenango County youth and families since 1983, offering programs in mental health, housing, substance abuse, and college/career readiness.",
    address: "20 East Main Street, Norwich, NY 13815",
    phone: "(607) 336-9696",
    hours: null,
    website: "https://theplacenorwich.com/",
    color: "orange",
  },
  {
    name: "Southern Tier Independence Center (STIC)",
    description: "Empowers individuals with disabilities through independent living assistance, advocacy, housing support, health insurance enrollment, and community-based programs.",
    address: "135 East Frederick Street, Binghamton, NY (Chenango County satellite available)",
    phone: "(607) 724-2111",
    hours: "Mon–Thu: 8:30 AM – 4:30 PM  |  Fri: 8:30 AM – 3:00 PM",
    website: "https://www.stic-cil.org",
    color: "indigo",
  },
];

const colorMap: Record<string, { badge: string; icon: string; border: string }> = {
  blue:    { badge: "bg-blue-50 text-blue-700 border-blue-200",    icon: "bg-blue-100 text-blue-600",    border: "hover:border-blue-300" },
  rose:    { badge: "bg-rose-50 text-rose-700 border-rose-200",    icon: "bg-rose-100 text-rose-600",    border: "hover:border-rose-300" },
  emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "bg-emerald-100 text-emerald-600", border: "hover:border-emerald-300" },
  amber:   { badge: "bg-amber-50 text-amber-700 border-amber-200", icon: "bg-amber-100 text-amber-600", border: "hover:border-amber-300" },
  violet:  { badge: "bg-violet-50 text-violet-700 border-violet-200", icon: "bg-violet-100 text-violet-600", border: "hover:border-violet-300" },
  teal:    { badge: "bg-teal-50 text-teal-700 border-teal-200",    icon: "bg-teal-100 text-teal-600",    border: "hover:border-teal-300" },
  orange:  { badge: "bg-orange-50 text-orange-700 border-orange-200", icon: "bg-orange-100 text-orange-600", border: "hover:border-orange-300" },
  indigo:  { badge: "bg-indigo-50 text-indigo-700 border-indigo-200", icon: "bg-indigo-100 text-indigo-600", border: "hover:border-indigo-300" },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 md:py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed"
        >
          Reach the UHS Chenango Memorial Hospital maternity team — we're here for every step of your journey.
        </motion.p>
      </section>

      <main className="flex-1">

        {/* CMH Hospital */}
        <section className="py-14 md:py-20 bg-secondary/30">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">UHS Chenango Memorial Hospital</h2>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
              <div className="md:w-1/2 relative min-h-[280px]">
                <img
                  src={cmhExterior}
                  alt="Chenango Memorial Hospital Exterior"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-foreground mb-6">General Hospital Contact</h3>
                <div className="grid sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Address</p>
                    <p className="text-base text-foreground">179 N. Broad Street<br />Norwich, NY 13815</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-base text-foreground">Open 24 Hours<br />Emergency Services Available</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-base text-foreground font-semibold">(607) 337-4111</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                    <p className="text-base text-foreground">info@uhs.org</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button className="flex-1 gap-2" asChild>
                    <a href="tel:6073374111"><Phone size={16} /> Call Hospital</a>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=UHS+Chenango+Memorial+Hospital" target="_blank" rel="noopener noreferrer">
                      <MapPin size={16} /> Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* CMH Services — two categories */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-5">
                <Stethoscope size={16} className="text-primary" />
                <h3 className="text-base font-semibold text-foreground">Services Available at CMH</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Maternity */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="text-sm font-bold text-foreground mb-3 pb-2 border-b border-border">Maternity</h4>
                  <ul className="space-y-2">
                    {maternityServices.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-base text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GYN / Women's Health */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="text-sm font-bold text-foreground mb-1 pb-2 border-b border-border">GYN / Women's Health</h4>
                  <p className="text-xs text-muted-foreground mb-3">32 Conkey Avenue, Norwich</p>
                  <ul className="space-y-2">
                    {gynServices.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                <a
                  href="https://www.nyuhs.org/location-search/uhs-chenango-memorial-hospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                >
                  View full hospital profile on nyuhs.org <ExternalLink size={11} />
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Women's Health Center */}
        <section className="py-14 md:py-20">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                <Heart className="text-rose-600" size={20} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">UHS Women's Health Center</h2>
                <p className="text-muted-foreground text-base mt-1">Obstetrics, Gynecology &amp; Midwifery — Norwich, NY</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Contact card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-2xl p-7 space-y-5"
              >
                <h3 className="text-base font-bold text-foreground">Clinic Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Address</p>
                      <p className="text-base text-foreground font-medium">32 Conkey Avenue<br />Norwich, NY 13815</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:6073374218" className="text-base font-semibold text-foreground hover:text-primary transition-colors">(607) 337-4218</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Hours</p>
                      <p className="text-base text-foreground font-medium">
                        Monday – Friday: 8:00 AM – 5:00 PM<br />
                        <span className="text-muted-foreground font-normal">Saturday &amp; Sunday: Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button className="flex-1 gap-2" asChild>
                    <a href="tel:6073374218"><Phone size={16} /> Call Clinic</a>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a href="https://www.nyuhs.org/location-search/uhs-womens-health-center-norwich" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> View Profile
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Specialties */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-7 space-y-5"
              >
                <h3 className="text-base font-bold text-foreground">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {["Obstetrics", "Gynecology", "Women's Health", "Nurse Midwifery", "Prenatal Care", "Postpartum Care"].map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 rounded-full text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Women's Health Center offers comprehensive OB/GYN and midwifery services. All providers can be reached at the main clinic number above.
                </p>
                <p className="text-xs text-muted-foreground">
                  <a
                    href="https://www.nyuhs.org/location-search/uhs-womens-health-center-norwich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    View full clinic profile on nyuhs.org <ExternalLink size={11} />
                  </a>
                </p>
              </motion.div>
            </div>

            {/* Providers */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users size={16} className="text-primary" />
                <h3 className="text-base font-semibold text-foreground">Our Providers</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {providers.map((p) => (
                  <div key={p.name} className="bg-card border border-border rounded-xl p-4">
                    <p className="text-sm font-semibold text-foreground leading-snug">{p.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-14 md:py-20 bg-secondary/30 border-t border-border">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <HandHeart className="text-primary" size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Local Resources</h2>
            </div>
            <p className="text-muted-foreground text-base mb-8 ml-[52px]">
              Community organizations in the Chenango County area supporting maternal and family health.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {localResources.map((r, i) => {
                const c = colorMap[r.color];
                return (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className={`bg-card border border-border rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 ${c.border} hover:shadow-md`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-foreground leading-snug">{r.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>

                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      <p className="flex items-start gap-1.5">
                        <MapPin size={11} className="shrink-0 mt-0.5" />
                        <span>{r.address}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Phone size={11} className="shrink-0" />
                        <a href={`tel:${r.phone.replace(/\D/g, "")}`} className="hover:text-primary font-medium transition-colors">{r.phone}</a>
                      </p>
                      {r.hours && (
                        <p className="flex items-center gap-1.5">
                          <Clock size={11} className="shrink-0" />
                          <span>{r.hours}</span>
                        </p>
                      )}
                    </div>

                    <a
                      href={r.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-auto pt-1"
                    >
                      Visit website <ExternalLink size={11} />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-16 bg-primary/5 border-t border-border">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <Mail className="mx-auto text-primary mb-4" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Have a Question?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For general inquiries, appointment requests, or to speak with the maternity team, reach us by phone or email. We're here Monday through Friday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:6073374111"><Phone size={18} /> (607) 337-4111</a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="mailto:info@uhs.org"><Mail size={18} /> info@uhs.org</a>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
