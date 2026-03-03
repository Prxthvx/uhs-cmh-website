const SiteFooter = () => {
  return (
    <footer className="border-t-2 border-primary/20 bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">M</span>
            </div>
            <span className="font-medium text-sm text-foreground">MaternalHealth</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-6">
          This website is for informational purposes only and does not constitute medical advice. Always consult your healthcare provider.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
