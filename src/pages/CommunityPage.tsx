import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  MessageSquare,
  Send,
  Heart,
  Clock,
  ChevronDown,
  ChevronUp,
  Plus,
  X,
  Shield,
  Users,
  Hash,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Types ---
interface Reply {
  id: string;
  author: string;
  content: string;
  timestamp: number;
  likes: number;
}

interface Post {
  id: string;
  author: string;
  title: string;
  content: string;
  category: string;
  timestamp: number;
  likes: number;
  replies: Reply[];
}

// --- Categories ---
const categories = [
  { key: "all", label: "All Topics", icon: Hash },
  { key: "pregnancy", label: "Pregnancy", icon: Hash },
  { key: "postpartum", label: "Postpartum", icon: Hash },
  { key: "mental-health", label: "Mental Health", icon: Hash },
  { key: "parenting", label: "New Parenting", icon: Hash },
  { key: "support", label: "Seeking Support", icon: Hash },
  { key: "stories", label: "My Story", icon: Hash },
];

// --- Pseudonym Generator ---
const adjectives = [
  "Brave", "Gentle", "Hopeful", "Kind", "Strong", "Warm", "Resilient",
  "Caring", "Radiant", "Peaceful", "Joyful", "Graceful", "Loving", "Bold",
  "Tender", "Patient", "Fierce", "Calm", "Bright", "Wise",
];
const nouns = [
  "Mama", "Mom", "Parent", "Guardian", "Sunflower", "Butterfly", "Star",
  "River", "Meadow", "Willow", "Daisy", "Moon", "Sparrow", "Dove",
  "Lighthouse", "Horizon", "Rainbow", "Blossom", "Fern", "Pearl",
];

function generatePseudonym(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(Math.random() * 99) + 1;
  return `${adj}${noun}${num}`;
}

function getOrCreatePseudonym(): string {
  const stored = localStorage.getItem("matbox-community-pseudonym");
  if (stored) return stored;
  const name = generatePseudonym();
  localStorage.setItem("matbox-community-pseudonym", name);
  return name;
}

// --- Seed Data ---
const seedPosts: Post[] = [
  {
    id: "seed-1",
    author: "HopefulMama22",
    title: "First trimester exhaustion — is this normal?",
    content:
      "I'm 8 weeks along and I can barely keep my eyes open past 7pm. I used to be a night owl! Is this level of tiredness normal? Any tips for managing it while still working full-time?",
    category: "pregnancy",
    timestamp: Date.now() - 3600000 * 5,
    likes: 12,
    replies: [
      {
        id: "r1",
        author: "GentleStar45",
        content:
          "Totally normal! First trimester fatigue hit me like a truck. It usually gets better in the second trimester. I found that short walks during lunch actually helped more than napping. Hang in there! 💛",
        timestamp: Date.now() - 3600000 * 4,
        likes: 8,
      },
      {
        id: "r2",
        author: "WiseMeadow7",
        content:
          "Same experience here. My OB said the progesterone surge causes extreme sleepiness. Make sure you're taking your prenatals and staying hydrated. It does get better!",
        timestamp: Date.now() - 3600000 * 3,
        likes: 5,
      },
    ],
  },
  {
    id: "seed-2",
    author: "BraveSunflower88",
    title: "Feeling isolated after baby — anyone else?",
    content:
      "My daughter is 3 months old and I love her more than anything, but I feel so alone. My friends don't have kids yet and don't really understand. My partner works long hours. I just want to talk to someone who gets it.",
    category: "postpartum",
    timestamp: Date.now() - 3600000 * 12,
    likes: 24,
    replies: [
      {
        id: "r3",
        author: "RadiantDove19",
        content:
          "You are NOT alone in feeling this way. I felt the exact same thing. Have you looked into local mom groups? I found one through our hospital and it was a lifeline. Sending you a virtual hug. 🤍",
        timestamp: Date.now() - 3600000 * 10,
        likes: 15,
      },
      {
        id: "r4",
        author: "CalmWillow33",
        content:
          "Three months was my hardest point too. It's okay to feel this way and it doesn't make you a bad mom. If the isolation feels overwhelming, please reach out to your doctor — there's support available.",
        timestamp: Date.now() - 3600000 * 8,
        likes: 11,
      },
      {
        id: "r5",
        author: "PatientRiver61",
        content:
          "I'm right there with you at 4 months. Would love to connect if you want to chat. This forum is a good start — we see you. 💕",
        timestamp: Date.now() - 3600000 * 6,
        likes: 9,
      },
    ],
  },
  {
    id: "seed-3",
    author: "StrongButterfly14",
    title: "How do I talk to my partner about PPD?",
    content:
      "I think I might be experiencing postpartum depression but I don't know how to bring it up with my partner. He's supportive but I'm afraid he'll think I'm not happy about our baby. Has anyone had this conversation?",
    category: "mental-health",
    timestamp: Date.now() - 3600000 * 24,
    likes: 31,
    replies: [
      {
        id: "r6",
        author: "KindLighthouse77",
        content:
          "I had this exact fear. I ended up writing my husband a letter because I couldn't say it out loud. He cried and said he'd been worried about me too. Your partner probably wants to help — they just need to know how.",
        timestamp: Date.now() - 3600000 * 20,
        likes: 22,
      },
    ],
  },
  {
    id: "seed-4",
    author: "GracefulPearl50",
    title: "Positive birth story — C-section after 30 hours of labor",
    content:
      "I wanted to share because I read so many scary stories when I was pregnant. My labor was long and we ended up with an unplanned C-section, but the team was incredible. Recovery was harder than expected but I'm 6 weeks out and feeling so much stronger. Whatever type of birth you have — you did an amazing thing.",
    category: "stories",
    timestamp: Date.now() - 3600000 * 48,
    likes: 45,
    replies: [
      {
        id: "r7",
        author: "JoyfulMoon23",
        content:
          "Thank you for sharing this. I'm 37 weeks and have been anxious about the possibility of a C-section. It helps to hear real experiences. Congratulations on your baby! 🌟",
        timestamp: Date.now() - 3600000 * 40,
        likes: 12,
      },
    ],
  },
];

function timeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// --- Component ---
const CommunityPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [showNewPost, setShowNewPost] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newCategory, setNewCategory] = useState("pregnancy");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [pseudonym] = useState(getOrCreatePseudonym);
  const [showGuidelines, setShowGuidelines] = useState(false);

  // Load posts from localStorage, merge with seeds
  useEffect(() => {
    const stored = localStorage.getItem("matbox-community-posts");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Post[];
        // Merge: keep seeds + any user-created posts
        const seedIds = new Set(seedPosts.map((p) => p.id));
        const userPosts = parsed.filter((p) => !seedIds.has(p.id));
        // Update seed posts with any user-added replies/likes
        const mergedSeeds = seedPosts.map((seed) => {
          const stored = parsed.find((p) => p.id === seed.id);
          return stored || seed;
        });
        setPosts([...mergedSeeds, ...userPosts]);
      } catch {
        setPosts(seedPosts);
      }
    } else {
      setPosts(seedPosts);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("matbox-community-posts", JSON.stringify(posts));
    }
  }, [posts]);

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const handleNewPost = () => {
    if (!newTitle.trim() || !newContent.trim()) return;
    const post: Post = {
      id: `post-${Date.now()}`,
      author: pseudonym,
      title: newTitle.trim(),
      content: newContent.trim(),
      category: newCategory,
      timestamp: Date.now(),
      likes: 0,
      replies: [],
    };
    setPosts((prev) => [post, ...prev]);
    setNewTitle("");
    setNewContent("");
    setShowNewPost(false);
  };

  const handleReply = (postId: string) => {
    if (!replyContent.trim()) return;
    const reply: Reply = {
      id: `reply-${Date.now()}`,
      author: pseudonym,
      content: replyContent.trim(),
      timestamp: Date.now(),
      likes: 0,
    };
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, replies: [...p.replies, reply] } : p
      )
    );
    setReplyContent("");
    setReplyingTo(null);
  };

  const handleLikePost = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  const handleLikeReply = (postId: string, replyId: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              replies: p.replies.map((r) =>
                r.id === replyId ? { ...r, likes: r.likes + 1 } : r
              ),
            }
          : p
      )
    );
  };

  const getCategoryLabel = (key: string) =>
    categories.find((c) => c.key === key)?.label || key;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary" size={28} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-5">
              Community <span className="text-primary">Forum</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              A safe, anonymous space to share experiences, ask questions, and
              support one another on the maternal health journey.
            </p>
            <p className="text-sm text-muted-foreground">
              You're posting as{" "}
              <span className="font-bold text-primary">{pseudonym}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guidelines Banner */}
      <div className="border-b border-border bg-secondary/30">
        <div className="container max-w-4xl mx-auto px-4">
          <button
            onClick={() => setShowGuidelines(!showGuidelines)}
            className="w-full flex items-center justify-between py-3 text-sm"
          >
            <span className="flex items-center gap-2 font-medium text-foreground">
              <Shield size={16} className="text-primary" />
              Community Guidelines
            </span>
            {showGuidelines ? (
              <ChevronUp size={16} className="text-muted-foreground" />
            ) : (
              <ChevronDown size={16} className="text-muted-foreground" />
            )}
          </button>
          <AnimatePresence>
            {showGuidelines && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-4 text-sm text-muted-foreground space-y-2">
                  <p>
                    🤍 <strong>Be kind and respectful.</strong> Everyone here is
                    navigating their own journey.
                  </p>
                  <p>
                    🔒 <strong>Protect your privacy.</strong> Don't share
                    personal identifying information. Your pseudonym keeps you
                    anonymous.
                  </p>
                  <p>
                    🚫 <strong>No medical advice.</strong> Share experiences, not
                    diagnoses. Encourage others to consult their healthcare
                    provider.
                  </p>
                  <p>
                    🆘 <strong>If you or someone is in crisis,</strong> please
                    call the{" "}
                    <a
                      href="tel:988"
                      className="text-primary underline font-medium"
                    >
                      988 Suicide & Crisis Lifeline
                    </a>{" "}
                    or the{" "}
                    <a
                      href="tel:18009444773"
                      className="text-primary underline font-medium"
                    >
                      Postpartum Support International Helpline (1-800-944-4773)
                    </a>
                    .
                  </p>
                  <p>
                    💬 <strong>Report harmful content</strong> by contacting our
                    team. We're committed to keeping this space safe.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Category Filter + New Post */}
      <section className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-4">
            <div
              className="flex gap-1.5 overflow-x-auto flex-1"
              style={{ scrollbarWidth: "none" }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.key
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <Button
              size="sm"
              className="gap-1.5 shrink-0"
              onClick={() => setShowNewPost(true)}
            >
              <Plus size={14} /> New Post
            </Button>
          </div>
        </div>
      </section>

      {/* New Post Modal */}
      <AnimatePresence>
        {showNewPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowNewPost(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card border border-border rounded-2xl p-6 w-full max-w-lg shadow-2xl"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-foreground">
                  Start a Discussion
                </h3>
                <button
                  onClick={() => setShowNewPost(false)}
                  className="p-1.5 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X size={18} className="text-muted-foreground" />
                </button>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                Posting as{" "}
                <span className="font-bold text-primary">{pseudonym}</span>
              </p>

              {/* Category */}
              <div className="mb-4">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories
                    .filter((c) => c.key !== "all")
                    .map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => setNewCategory(cat.key)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          newCategory === cat.key
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                </div>
              </div>

              {/* Title */}
              <input
                type="text"
                placeholder="Give your discussion a title..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 mb-3"
              />

              {/* Content */}
              <textarea
                placeholder="Share your thoughts, questions, or experiences..."
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none mb-4"
              />

              <div className="flex gap-3 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowNewPost(false)}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="gap-2"
                  onClick={handleNewPost}
                  disabled={!newTitle.trim() || !newContent.trim()}
                >
                  <Send size={14} /> Post Discussion
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Posts */}
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl mx-auto px-4 space-y-5">
          {sortedPosts.length === 0 && (
            <div className="text-center py-20">
              <MessageSquare
                className="text-muted-foreground/30 mx-auto mb-4"
                size={40}
              />
              <p className="text-muted-foreground text-lg">
                No discussions in this category yet.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Be the first to start a conversation!
              </p>
            </div>
          )}

          {sortedPosts.map((post) => {
            const isExpanded = expandedPost === post.id;

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Post Header */}
                <div
                  className="p-5 cursor-pointer"
                  onClick={() =>
                    setExpandedPost(isExpanded ? null : post.id)
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                          {getCategoryLabel(post.category)}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={10} /> {timeAgo(post.timestamp)}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug mb-1.5">
                        {post.title}
                      </h3>
                      <p
                        className={`text-sm text-muted-foreground leading-relaxed ${
                          !isExpanded ? "line-clamp-2" : ""
                        }`}
                      >
                        {post.content}
                      </p>
                    </div>
                  </div>

                  {/* Post Meta */}
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground/70">
                      {post.author}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLikePost(post.id);
                      }}
                      className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      <Heart size={12} /> {post.likes}
                    </button>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={12} /> {post.replies.length}{" "}
                      {post.replies.length === 1 ? "reply" : "replies"}
                    </span>
                    <span className="ml-auto">
                      {isExpanded ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </span>
                  </div>
                </div>

                {/* Expanded: Replies */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border bg-secondary/20">
                        {/* Replies */}
                        {post.replies.length > 0 && (
                          <div className="px-5 pt-4 space-y-3">
                            {post.replies.map((reply) => (
                              <div
                                key={reply.id}
                                className="bg-card border border-border/60 rounded-xl p-4"
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xs font-semibold text-foreground/70">
                                    {reply.author}
                                  </span>
                                  <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                                    <Clock size={8} />{" "}
                                    {timeAgo(reply.timestamp)}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {reply.content}
                                </p>
                                <button
                                  onClick={() =>
                                    handleLikeReply(post.id, reply.id)
                                  }
                                  className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors mt-2"
                                >
                                  <Heart size={10} /> {reply.likes}
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Reply Input */}
                        <div className="p-5">
                          {replyingTo === post.id ? (
                            <div className="space-y-3">
                              <textarea
                                placeholder={`Reply as ${pseudonym}...`}
                                value={replyContent}
                                onChange={(e) =>
                                  setReplyContent(e.target.value)
                                }
                                rows={3}
                                className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                                autoFocus
                              />
                              <div className="flex gap-2 justify-end">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setReplyingTo(null);
                                    setReplyContent("");
                                  }}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  size="sm"
                                  className="gap-1.5"
                                  onClick={() => handleReply(post.id)}
                                  disabled={!replyContent.trim()}
                                >
                                  <Send size={12} /> Reply
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => setReplyingTo(post.id)}
                              className="w-full px-4 py-3 text-sm text-muted-foreground bg-background border border-border rounded-xl text-left hover:border-primary/30 transition-colors"
                            >
                              Reply to this discussion...
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 md:py-20 bg-primary/5">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <Heart className="text-primary mx-auto mb-4" size={28} />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            You're Not Alone
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
            This community is built on shared experiences and mutual support.
            Your story — no matter how big or small — can make a difference for
            someone else.
          </p>
          <Button
            size="lg"
            className="gap-2 px-8"
            onClick={() => {
              setShowNewPost(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Plus size={16} /> Start a Discussion
          </Button>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default CommunityPage;
