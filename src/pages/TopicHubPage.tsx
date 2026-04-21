import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { topicHubContent, trendingTopics } from "@/data/topics";
import {
  BookOpen,
  Users,
  FolderHeart,
  ExternalLink,
  ArrowLeft,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type TabKey = "expert" | "stories" | "resources";

const TopicHubPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>("expert");

  const topic = slug ? topicHubContent[slug] : null;
  const topicMeta = trendingTopics.find((t) => t.slug === slug);

  if (!topic || !topicMeta) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Topic Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the topic you're looking for.
          </p>
          <Button onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Button>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
    { key: "expert", label: "Expert Guidance", icon: BookOpen },
    { key: "stories", label: "Real Stories", icon: Users },
    { key: "resources", label: "Helpful Resources", icon: FolderHeart },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={topicMeta.image}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>

        <div className="container max-w-4xl mx-auto px-4 relative">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4 inline-block">
              {topicMeta.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-5">
              {topic.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {topic.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex gap-1 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-14 md:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Expert Guidance */}
            {activeTab === "expert" && (
              <div className="space-y-6">
                {topic.expertGuidance.map((item, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <BookOpen size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Real Stories */}
            {activeTab === "stories" && (
              <div className="space-y-6">
                {topic.realStories.map((story, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Users size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                            {story.title}
                          </h3>
                          {story.anonymous && (
                            <span className="px-2 py-0.5 bg-secondary text-muted-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                              Anonymous
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic">
                          "{story.summary}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Resources */}
            {activeTab === "resources" && (
              <div className="space-y-4">
                {topic.resources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <FolderHeart size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                    />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Not finding what you need? */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <MessageCircle className="text-primary mx-auto mb-4" size={32} />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Not finding what you need?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            We're here to help. Reach out and let us know what topics or
            resources you'd like to see covered.
          </p>
          <Button
            size="lg"
            className="gap-2 px-8"
            onClick={() => navigate("/#contact")}
          >
            Get in Touch <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default TopicHubPage;
