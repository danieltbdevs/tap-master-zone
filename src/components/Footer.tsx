import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-border">
      {/* CTA Section */}
      <div className="container py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            24/7 Emergency Help Available
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't wait – call now and speak directly to our emergency team
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+441234567890">
                <Phone className="w-5 h-5" />
                01234 567 890
              </a>
            </Button>
            <Button variant="heroSecondary" size="xl" asChild>
              <a href="https://wa.me/441234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="border-t border-border">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img 
                src={logo} 
                alt="Peterborough Emergency Plumbers" 
                className="h-12 w-auto drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]" 
              />
              <p className="text-muted-foreground">
                Fast, reliable emergency plumbing services across Peterborough and surrounding areas. Available 24/7.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contact Us</h4>
              <div className="space-y-3">
                <a href="tel:+441234567890" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-5 h-5 text-emergency-red" />
                  01234 567 890
                </a>
                <a href="mailto:help@peterboroughplumbers.co.uk" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-5 h-5 text-emergency-red" />
                  help@peterboroughplumbers.co.uk
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-emergency-red" />
                  Peterborough, Cambridgeshire
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-4">
              <h4 className="font-semibold">Certifications</h4>
              <div className="flex flex-wrap gap-4">
                <div className="glass-card rounded-lg px-4 py-2 text-sm">
                  Gas Safe Registered
                </div>
                <div className="glass-card rounded-lg px-4 py-2 text-sm">
                  Fully Insured
                </div>
                <div className="glass-card rounded-lg px-4 py-2 text-sm">
                  5-Star Rated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Peterborough Emergency Plumbers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
