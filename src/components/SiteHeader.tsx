import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uhsLogo from "@/assets/uhs-logo.svg";

const navLinks = [
  { label: "Maternal Guide", href: "/pregnancy-guide" },
  { label: "Real Stories", href: "/real-stories" },
  { label: "Support", href: "/support" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/#contact" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      // Hash link on the homepage — navigate there then scroll to section
      const id = href.replace("/#", "");
      if (window.location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 400);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={uhsLogo} alt="UHS Logo" className="h-8 w-auto" />
          <span className="font-semibold text-lg text-foreground">Maternal Health at CMH</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border px-6 pb-4 pt-2 flex flex-col gap-3 bg-background">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}

      <div className="h-px bg-primary/20" />
    </header>
  );
};

export default SiteHeader;
