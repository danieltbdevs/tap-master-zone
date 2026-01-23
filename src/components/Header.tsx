import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#callback-form" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28 lg:h-32">
          {/* Logo - responsive with max-width */}
          <a href="#" onClick={scrollToTop} className="flex-shrink-0 relative group cursor-pointer">
            <img
              src={logo}
              alt="T&G Services Logo"
              decoding="async"
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-28 max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] object-contain"
            />
          </a>

          {/* Desktop Navigation - visible at md and up */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm lg:text-base font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop CTA - visible at md and up */}
            <Button variant="hero" size="sm" className="hidden md:flex min-h-[44px]" asChild>
              <a href="https://wa.me/233240786039" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>

            {/* Mobile Menu Button - 44px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - visible below md */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 min-h-[44px] flex items-center cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="w-full mt-3 min-h-[48px]" asChild>
                <a href="https://wa.me/233240786039" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4" />
                  Call Now – 24/7
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
