import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { videos } from "@/data/videos";
import {
  Play,
  Clock,
  ArrowLeft,
  ThumbsUp,
  MessageSquare,
  Share2,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const video = videos.find((v) => v.id === id);
  const relatedVideos = video
    ? videos.filter((v) => v.category === video.category && v.id !== video.id)
    : [];

  if (!video) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Video Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the video you're looking for.
          </p>
          <Button onClick={() => navigate("/real-stories")} className="gap-2">
            <ArrowLeft size={16} /> Back to Stories
          </Button>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="py-8 md:py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Video Player Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-video bg-foreground/5 rounded-2xl overflow-hidden shadow-lg mb-6"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full border-[3px] border-white/80 flex items-center justify-center backdrop-blur-sm bg-white/10 hover:scale-110 hover:bg-white/20 transition-all duration-500 group">
                    <Play
                      className="text-white ml-1 group-hover:scale-110 transition-transform"
                      size={32}
                      fill="white"
                      fillOpacity={0.9}
                    />
                  </button>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-foreground/70 text-white text-sm font-medium rounded-lg flex items-center gap-1.5 backdrop-blur-sm">
                  <Clock size={14} />
                  {video.duration}
                </div>
              </motion.div>

              {/* Video Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-3 inline-block">
                  {video.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {video.title}
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {video.description}
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsUp size={14} /> Helpful
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 size={14} /> Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquare size={14} /> Discuss
                  </Button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Tag size={14} className="text-muted-foreground mt-0.5" />
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Transcript placeholder */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-3">
                    Transcript
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Full transcript will be available when the video is
                    published. We're committed to making all content accessible
                    through written transcripts and captions.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[340px] shrink-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Viewer Feedback */}
                <div className="bg-secondary/50 rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
                    Viewer Feedback
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Share your thoughts on this story. Your feedback helps us
                    create content that matters.
                  </p>
                  <Button className="w-full gap-2" size="sm">
                    <MessageSquare size={14} /> Leave Feedback
                  </Button>
                </div>

                {/* Story Questions */}
                <div className="bg-secondary/50 rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
                    Story Questions
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Have questions for the person in this story? Submit them
                    here and we may include answers in a follow-up.
                  </p>
                </div>

                {/* Similar Stories */}
                <div>
                  <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                    Similar Stories
                  </h3>

                  {relatedVideos.length > 0 ? (
                    <div className="space-y-4">
                      {relatedVideos.map((related) => (
                        <div
                          key={related.id}
                          onClick={() => navigate(`/video/${related.id}`)}
                          className="flex gap-3 cursor-pointer group"
                        >
                          <div className="w-32 h-20 rounded-xl overflow-hidden shrink-0 relative">
                            <img
                              src={related.thumbnail}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center bg-white/10">
                                <Play
                                  className="text-white ml-0.5"
                                  size={12}
                                  fill="white"
                                  fillOpacity={0.9}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                              {related.title}
                            </h4>
                            <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                              <Clock size={10} /> {related.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      More stories in this category coming soon.
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default VideoViewPage;
