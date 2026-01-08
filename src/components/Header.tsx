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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container px-4 sm:px-6">
        <div className="flex items-center justify-between h-[80px] sm:h-[100px] lg:h-[130px]">
          {/* Logo */}
          <a href="#" onClick={scrollToTop} className="flex-shrink-0 relative group cursor-pointer">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emergency-red/20 via-blue-500/20 to-emergency-red/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src={logo} 
              alt="Peterborough Emergency Plumbers" 
              className="relative w-[180px] h-[92px] sm:w-[240px] sm:h-[123px] lg:w-[320px] lg:h-[164px] object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            
            {/* Desktop CTA */}
            <Button variant="hero" size="sm" className="hidden lg:flex" asChild>
              <a href="tel:+441234567890">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="w-full mt-2" asChild>
                <a href="tel:+441234567890">
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
