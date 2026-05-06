import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, ExternalLink, Stethoscope, Heart, Users } from "lucide-react";
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

const cmhServices = [
  "Maternity & Obstetrics Unit",
  "Women's Health Center",
  "Emergency Department (24/7)",
  "Walk-In Center",
  "Inpatient & Outpatient Surgery",
  "Diagnostic Imaging & Lab",
  "Cardiology",
  "Orthopedics",
  "Physical Therapy",
  "Infusion Center",
];

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

        {/* CMH Hospital — main contact card */}
        <section className="py-14 md:py-20 bg-secondary/30">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">UHS Chenango Memorial Hospital</h2>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/2 relative min-h-[280px]">
                <img
                  src={cmhExterior}
                  alt="Chenango Memorial Hospital Exterior"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-foreground mb-6">General Hospital Contact</h3>
                <div className="grid sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Address</p>
                    <p className="text-sm text-foreground">
                      179 N. Broad Street<br />
                      Norwich, NY 13815
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-sm text-foreground">
                      Open 24 Hours<br />
                      Emergency Services Available
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-sm text-foreground font-semibold">(607) 337-4111</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                    <p className="text-sm text-foreground">info@uhs.org</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button className="flex-1 gap-2" asChild>
                    <a href="tel:6073374111">
                      <Phone size={16} /> Call Hospital
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=UHS+Chenango+Memorial+Hospital"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin size={16} /> Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* CMH Services Grid */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope size={16} className="text-primary" />
                <h3 className="text-base font-semibold text-foreground">Services Available at CMH</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {cmhServices.map((s) => (
                  <div key={s} className="bg-card border border-border rounded-xl px-3 py-2.5 text-xs text-foreground font-medium text-center leading-snug">
                    {s}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
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
                <p className="text-muted-foreground text-sm mt-1">Obstetrics, Gynecology &amp; Midwifery — Norwich, NY</p>
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
                      <p className="text-sm text-foreground font-medium">
                        32 Conkey Avenue<br />
                        Norwich, NY 13815
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:6073374218" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        (607) 337-4218
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Hours</p>
                      <p className="text-sm text-foreground font-medium">
                        Monday – Friday: 8:00 AM – 5:00 PM<br />
                        <span className="text-muted-foreground font-normal">Saturday &amp; Sunday: Closed</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button className="flex-1 gap-2" asChild>
                    <a href="tel:6073374218">
                      <Phone size={16} /> Call Clinic
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a
                      href="https://www.nyuhs.org/location-search/uhs-womens-health-center-norwich"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} /> View Profile
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Services */}
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
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The Women's Health Center offers comprehensive OB/GYN and midwifery services. All providers can be reached at the main clinic number above.
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

        {/* General Inquiry CTA */}
        <section className="py-14 md:py-16 bg-primary/5 border-t border-border">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <Mail className="mx-auto text-primary mb-4" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Have a Question?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For general inquiries, appointment requests, or to speak with the maternity team, reach us by phone or email. We're here Monday through Friday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:6073374111">
                  <Phone size={18} /> (607) 337-4111
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="mailto:info@uhs.org">
                  <Mail size={18} /> info@uhs.org
                </a>
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
