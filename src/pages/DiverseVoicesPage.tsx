import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceSection {
  id: string;
  title: string;
  description: string;
  image: string;
  narratives: { title: string; excerpt: string; anonymous?: boolean }[];
  resources: { title: string; url: string }[];
}

const sections: VoiceSection[] = [
  {
    id: "race-ethnicity",
    title: "By Race & Ethnicity",
    description:
      "Black, Latinx, Indigenous, and AAPI communities face unique challenges in maternal healthcare. These stories and resources center those experiences.",
    image:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&h=400&fit=crop",
    narratives: [
      {
        title: "Navigating Maternal Care as a Black Woman",
        excerpt:
          "My concerns were dismissed three times before I was finally taken seriously. This is the story of how I learned to advocate for myself in a system that wasn't built for me.",
      },
      {
        title: "Indigenous Birth Practices Meet Modern Medicine",
        excerpt:
          "How I honored my cultural traditions while working within the Western medical system — and the providers who supported me.",
        anonymous: true,
      },
      {
        title: "The Latina Experience: Language Barriers in L&D",
        excerpt:
          "When I went into labor, the hospital didn't have a Spanish interpreter available. Here's what happened and what needs to change.",
      },
    ],
    resources: [
      { title: "Black Mamas Matter Alliance", url: "https://blackmamasmatter.org/" },
      { title: "National Birth Equity Collaborative", url: "https://birthequity.org/" },
      { title: "SisterSong — Women of Color Reproductive Justice", url: "https://www.sistersong.net/" },
    ],
  },
  {
    id: "lgbtq",
    title: "LGBTQ+ Perspectives",
    description:
      "Queer parents, trans birthing people, and non-traditional families deserve to see their experiences reflected and honored.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop",
    narratives: [
      {
        title: "Becoming a Dad Through Surrogacy",
        excerpt:
          "As a gay couple, our path to parenthood was unconventional but no less meaningful. Here's what the process was really like.",
      },
      {
        title: "Pregnancy as a Trans Man",
        excerpt:
          "Navigating prenatal care when the healthcare system assumes every pregnant person is a cisgender woman was one of the hardest parts.",
        anonymous: true,
      },
    ],
    resources: [
      { title: "Family Equality", url: "https://www.familyequality.org/" },
      { title: "GLMA — Health Professionals Advancing LGBTQ+ Equality", url: "https://www.glma.org/" },
    ],
  },
  {
    id: "language",
    title: "Language Accessibility",
    description:
      "Critical maternal health information should be available in every language. We're working to expand our content across languages.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881571?w=600&h=400&fit=crop",
    narratives: [
      {
        title: "When Medical Instructions Get Lost in Translation",
        excerpt:
          "I misunderstood my medication instructions because they were only provided in English. Language barriers in healthcare can be life-threatening.",
      },
    ],
    resources: [
      { title: "MedlinePlus — Health Info in Multiple Languages", url: "https://medlineplus.gov/languages/languages.html" },
      { title: "National Health Law Program — Language Access", url: "https://healthlaw.org/" },
    ],
  },
  {
    id: "disability",
    title: "Disability & Neurodivergent Perspectives",
    description:
      "Parents with disabilities and neurodivergent conditions bring unique strengths and face unique challenges. Their voices belong here.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop",
    narratives: [
      {
        title: "Motherhood with a Physical Disability",
        excerpt:
          "People constantly asked me how I would manage. I adapted, I innovated, and I became the parent I always knew I could be.",
      },
      {
        title: "Pregnancy with ADHD: What the Books Don't Tell You",
        excerpt:
          "Managing ADHD while pregnant — especially when medications change — required a complete reimagining of my daily routines.",
        anonymous: true,
      },
    ],
    resources: [
      { title: "Through the Looking Glass — Parents with Disabilities", url: "https://www.lookingglass.org/" },
      { title: "National Disability Rights Network", url: "https://www.ndrn.org/" },
    ],
  },
];

const DiverseVoicesPage = () => {
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
            Diverse <span className="text-primary">Voices</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            A dedicated space for intersectional perspectives, community
            experiences, and inclusive maternal health resources. Every story
            matters.
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-10 md:py-16">
        <div className="container max-w-5xl mx-auto px-4 space-y-20">
          {sections.map((section, sIdx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Section header with image */}
              <div className={`flex flex-col ${sIdx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-10`}>
                <div className="md:w-2/5">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Narratives */}
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                {section.narratives.map((narrative, nIdx) => (
                  <div
                    key={nIdx}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Users size={14} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {narrative.title}
                        </h4>
                        {narrative.anonymous && (
                          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                            Anonymous
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{narrative.excerpt}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Resources */}
              <div className="bg-secondary/50 rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                  Support & Resources
                </h4>
                <div className="flex flex-wrap gap-3">
                  {section.resources.map((res, rIdx) => (
                    <a
                      key={rIdx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:text-primary hover:border-primary/30 transition-all"
                    >
                      {res.title}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Your Perspective Matters
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            We're actively seeking stories from underrepresented communities.
            Share your experience and help others feel seen.
          </p>
          <Button size="lg" className="gap-2 px-8">
            Share Your Story <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default DiverseVoicesPage;
