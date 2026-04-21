import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t-2 border-primary/20 bg-background">
      <div className="container py-10">
        {/* Top row: brand + quick links + newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">M</span>
              </div>
              <span className="font-medium text-sm text-foreground">MaternalHealth</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your trusted maternal health resource — expert guidance, real
              stories, and community support for every stage of your journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/resources" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Resources
              </Link>
              <Link to="/real-stories" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Real Stories
              </Link>
              <Link to="/professional-advice" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Professional Advice
              </Link>
              <Link to="/diverse-voices" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Diverse Voices
              </Link>
              <Link to="/support" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Support & Resources
              </Link>
              <Link to="/pregnancy-guide" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Pregnancy Guide
              </Link>
              <Link to="/community" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Community Forum
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
              Stay Updated
            </h4>
            <p className="text-xs text-muted-foreground mb-3">
              Get the latest resources and stories in your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-xs border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Accessibility</a>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            This website is for informational purposes only and does not constitute medical advice. Always consult your healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

